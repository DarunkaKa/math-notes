#!/usr/bin/env python3
"""Запуск сайту. Робить дві речі:

1. Перескладає список конспектів (те, що робив build.py) — щоб не забувати.
2. Віддає файли із забороною кешування, інакше браузер показує стару
   версію сайту після кожної правки.

Запуск:  python3 serve.py
Зупинка: Ctrl+C
"""

import http.server
import socketserver
from pathlib import Path

import build

PORT = 8765
ROOT = Path(__file__).parent


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        # Список конспектів перескладаємо перед КОЖНОЮ віддачею.
        # Інакше він застаріває щоразу, коли правиш конспект: на сторінці
        # конспекту картки рахуються наживо з файлу, а в списку тем — з
        # index.json, і цифри розходяться.
        if self.path.split("?")[0] == "/notes/index.json":
            try:
                build.main(quiet=True)
            except Exception as e:
                print(f"Не вдалося перескласти список: {e}")
        super().do_GET()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, *args):
        pass  # не засмічувати Термінал


if __name__ == "__main__":
    build.main()
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"\nСайт працює: http://localhost:{PORT}")
        print("Зупинити — Ctrl+C\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("Зупинено.")
