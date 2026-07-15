#!/usr/bin/env python3
"""Сканує notes/ і складає notes/index.json — список усіх конспектів."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
NOTES = ROOT / "notes"


def read_meta(path):
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n", text, re.DOTALL)
    meta = {}
    if m:
        for line in m.group(1).splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                meta[k.strip()] = v.strip()

    body = text[m.end():] if m else text
    try:
        order = int(meta.get("order", ""))
    except ValueError:
        order = 999  # без order — у кінець списку
    return {
        "title": meta.get("title", path.stem),
        "section": meta.get("section", path.parent.name),
        "topic": meta.get("topic", ""),  # порожньо — конспект лежить прямо в розділі
        "order": order,
        "path": str(path.relative_to(ROOT)),
        "cards": len(re.findall(r"^### ", _section(body, "Картки"), re.M)),
        "tasks": len(re.findall(r"^### ", _section(body, "Завдання"), re.M)),
    }


def _section(body, name):
    m = re.search(rf"^## {name}\s*$(.*?)(?=^## |\Z)", body, re.M | re.DOTALL)
    return m.group(1) if m else ""


def main(quiet=False):
    notes = sorted(
        (read_meta(p) for p in NOTES.rglob("*.md")),
        key=lambda n: (n["section"], n["topic"], n["order"], n["title"]),
    )
    (NOTES / "index.json").write_text(
        json.dumps(notes, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    if quiet:
        return notes
    print(f"Знайдено конспектів: {len(notes)}")
    for n in notes:
        шлях = " / ".join(x for x in (n["section"], n["topic"], n["title"]) if x)
        print(f"  {шлях}  ({n['cards']} карток, {n['tasks']} завдань)")
    return notes


if __name__ == "__main__":
    main()
