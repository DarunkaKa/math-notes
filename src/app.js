const app = document.getElementById("app");
const search = document.getElementById("search");

let index = [];

// --- розбір файлу конспекту --------------------------------------------

function stripFrontMatter(text) {
  return text.replace(/^---\n.*?\n---\n/s, "");
}

function section(body, name) {
  const re = new RegExp(`^## ${name}\\s*$([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, "m");
  const m = body.match(re);
  return m ? m[1].trim() : "";
}

// Ділить секцію на пари «### заголовок» + тіло під ним.
//
// За замовчуванням лицьовий бік картки — це рядок після ###, а все нижче —
// зворот. Якщо ж у картці є рядок `---`, то все до нього теж належить
// лицьовому боку. Це дозволяє класти на питання малюнок:
//
//   ### Який це трикутник?
//   <svg>…</svg>
//   ---
//   Рівнобедрений.
function splitItems(text) {
  const parts = text.split(/^### /m).filter((p) => p.trim());
  return parts.map((p) => {
    const nl = p.indexOf("\n");
    if (nl === -1) return { head: p.trim(), front: "", body: "" };

    const head = p.slice(0, nl).trim();
    const rest = p.slice(nl + 1);
    const sep = rest.match(/^---[ \t]*$/m);
    if (!sep) return { head, front: "", body: rest.trim() };

    return {
      head,
      front: rest.slice(0, sep.index).trim(),
      body: rest.slice(sep.index + sep[0].length).trim(),
    };
  });
}

function parseNote(text) {
  const body = stripFrontMatter(text);
  return {
    notes: section(body, "Конспект"),
    cards: splitItems(section(body, "Картки")),
    tasks: splitItems(section(body, "Завдання")),
  };
}

// --- рендер ------------------------------------------------------------

function md(text) {
  return marked.parse(text || "");
}

function typeset(el) {
  renderMathInElement(el, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
  });
}

function render(html) {
  app.innerHTML = html;
  typeset(app);
}

// --- екрани ------------------------------------------------------------

function renderHome() {
  const sections = [...new Set(index.map((n) => n.section))];
  if (!index.length) {
    return render(`<p class="empty">Конспектів ще немає. Додай файл у теку
      <code>notes/</code> і запусти <code>python3 build.py</code>.</p>`);
  }
  render(`<div class="grid">${sections
    .map((s) => {
      const notes = index.filter((n) => n.section === s);
      return `<a class="card" href="#/section/${encodeURIComponent(s)}">
        <h2>${s}</h2>
        <p>${notes.length} ${plural(notes.length, "конспект", "конспекти", "конспектів")}</p>
      </a>`;
    })
    .join("")}</div>`);
}

// Розділ показує теми (як плитки) і конспекти, що лежать у розділі напряму.
function renderSection(name) {
  const notes = index.filter((n) => n.section === name);
  const topics = [...new Set(notes.map((n) => n.topic).filter(Boolean))];
  const loose = notes.filter((n) => !n.topic);

  render(`
    <nav class="crumbs"><a href="#/">← Усі розділи</a></nav>
    <h1>${name}</h1>
    ${
      topics.length
        ? `<div class="grid">${topics
            .map((t) => {
              const inTopic = notes.filter((n) => n.topic === t);
              const cards = inTopic.reduce((s, n) => s + n.cards, 0);
              return `<a class="card"
                href="#/topic/${encodeURIComponent(name)}/${encodeURIComponent(t)}">
                <h2>${t}</h2>
                <p>${inTopic.length} ${plural(inTopic.length, "підтема", "підтеми", "підтем")}
                   · ${cards} ${plural(cards, "картка", "картки", "карток")}</p>
              </a>`;
            })
            .join("")}</div>`
        : ""
    }
    ${loose.length ? noteList(loose) : ""}
    ${!topics.length && !loose.length ? `<p class="empty">Тут ще порожньо.</p>` : ""}
  `);
}

// Тема показує свої підтеми в порядку вивчення.
function renderTopic(section, topic) {
  const notes = index.filter((n) => n.section === section && n.topic === topic);
  render(`
    <nav class="crumbs">
      <a href="#/section/${encodeURIComponent(section)}">← ${section}</a>
    </nav>
    <h1>${topic}</h1>
    ${notes.length ? noteList(notes) : `<p class="empty">У цій темі ще немає конспектів.</p>`}
  `);
}

function noteList(notes) {
  return `<ul class="list">${notes
    .map((n, i) => {
      const meta = [
        n.cards ? `${n.cards} ${plural(n.cards, "картка", "картки", "карток")}` : "",
        n.tasks ? `${n.tasks} ${plural(n.tasks, "завдання", "завдання", "завдань")}` : "",
      ]
        .filter(Boolean)
        .join(" · ");
      return `<li><a href="#/note/${encodeURIComponent(n.path)}">
        <span class="step">${i + 1}</span>
        <strong>${n.title}</strong>
        <span class="meta">${meta}</span>
      </a></li>`;
    })
    .join("")}</ul>`;
}

async function renderNote(path, mode = "read") {
  const note = index.find((n) => n.path === path);
  const text = await fetch(path).then((r) => r.text());
  const parsed = parseNote(text);

  // Вкладку без вмісту не показуємо взагалі: додаси картки чи завдання
  // у файл — вона з'явиться сама.
  const tab = (id, label, count) => {
    if (count === 0) return "";
    const badge = count > 0 ? ` <span class="badge">${count}</span>` : "";
    return `<a class="tab ${mode === id ? "active" : ""}"
      href="#/note/${encodeURIComponent(path)}/${id}">${label}${badge}</a>`;
  };

  let content = "";
  if (mode === "read") {
    content = `<article class="prose">${md(parsed.notes)}</article>`;
  } else if (mode === "cards") {
    content = parsed.cards.length
      ? `<div id="deck"></div>`
      : `<p class="empty">У цьому конспекті ще немає карток.</p>`;
  } else if (mode === "tasks") {
    content = parsed.tasks.length
      ? `<div class="tasks">${parsed.tasks
          .map(
            (t, i) => `<div class="task">
              <div class="question"><span class="num">${i + 1}</span>${md(t.head)}</div>
              <div class="solution hidden">${md(t.body)}</div>
              <button class="reveal">Показати розв'язок</button>
            </div>`
          )
          .join("")}</div>`
      : `<p class="empty">У цьому конспекті ще немає завдань.</p>`;
  }

  render(`
    <nav class="crumbs">
      ${
        note.topic
          ? `<a href="#/topic/${encodeURIComponent(note.section)}/${encodeURIComponent(
              note.topic
            )}">← ${note.topic}</a>`
          : `<a href="#/section/${encodeURIComponent(note.section)}">← ${note.section}</a>`
      }
    </nav>
    <h1>${note.title}</h1>
    <div class="tabs">
      ${tab("read", "Конспект")}
      ${tab("cards", "Картки", parsed.cards.length)}
      ${tab("tasks", "Завдання", parsed.tasks.length)}
    </div>
    ${content}
  `);

  if (mode === "cards" && parsed.cards.length) startDeck(parsed.cards);
}

// --- флеш-картки -------------------------------------------------------

let deck = null;

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startDeck(cards, opts = {}) {
  let queue = opts.queue || cards.map((_, i) => i);
  if (opts.shuffle) queue = shuffled(queue);

  deck = {
    cards,
    queue,
    pos: 0,
    flipped: false,
    shuffle: !!opts.shuffle,
  };
  drawDeck();
}

function drawDeck(opts = {}) {
  const box = document.getElementById("deck");
  if (!box) return;

  // колода закінчилась
  if (deck.pos >= deck.queue.length) {
    box.innerHTML = `
      <div class="summary">
        <h2>Колоду пройдено</h2>
        <p class="muted">${deck.queue.length}
          ${plural(deck.queue.length, "картка", "картки", "карток")} позаду.</p>
        <button class="btn primary" data-act="restart">Почати спочатку</button>
      </div>`;
    typeset(box);
    return;
  }

  const card = deck.cards[deck.queue[deck.pos]];
  const last = deck.pos === deck.queue.length - 1;

  box.innerHTML = `
    <div class="deck-bar">
      <span class="counter">${deck.pos + 1} / ${deck.queue.length}</span>
      <div class="progress"><div class="bar"
        style="width:${(deck.pos / deck.queue.length) * 100}%"></div></div>
      <button class="chip ${deck.shuffle ? "on" : ""}" data-act="shuffle"
        title="Перемішати картки">Перемішати</button>
    </div>

    <div class="flashcard" data-act="flip">
      <div class="card-turn">
        <div class="face ${deck.flipped ? "back" : "front"}">
          <span class="face-label">${deck.flipped ? "Відповідь" : "Питання"}</span>
          <div class="face-body">${
            deck.flipped
              ? md(card.body || "_(відповіді немає)_")
              : md(card.head) + (card.front ? md(card.front) : "")
          }</div>
          <span class="hint">${
            deck.flipped ? "Натисни, щоб сховати" : "Натисни, щоб перевернути"
          }</span>
        </div>
      </div>
    </div>

    <div class="controls">
      <button class="arrow" data-act="prev" ${deck.pos === 0 ? "disabled" : ""}
        aria-label="Попередня картка">←</button>
      <button class="arrow" data-act="next"
        aria-label="${last ? "Завершити" : "Наступна картка"}">→</button>
    </div>
    <p class="keys">Пробіл — перевернути · ← → — назад і вперед</p>`;
  typeset(box);

  // Друга половина повороту. Клас лишається на елементі — знімати не треба:
  // анімація доїжджає до природного стану і на цьому все.
  if (opts.enter) box.querySelector(".flashcard").classList.add("enter");
}

// Поворот у два такти. Вміст міняється на середині, коли картка
// стоїть ребром — так формули ніколи не рендеряться в 3D-контексті,
// де KaTeX розсипає складені знаки (≠ втрачає риску).
const TURN_MS = 180;
let turning = false;

function flipCard() {
  const el = document.querySelector(".flashcard");
  if (!el || turning) return;
  turning = true;
  el.classList.add("turning");
  setTimeout(() => {
    deck.flipped = !deck.flipped;
    drawDeck({ enter: true });
    turning = false;
  }, TURN_MS);
}

function deckAction(act) {
  if (!deck) return;
  if (act === "flip") {
    flipCard();
    return;
  } else if (act === "shuffle") {
    startDeck(deck.cards, { shuffle: !deck.shuffle });
    return;
  } else if (act === "prev") {
    if (deck.pos > 0) deck.pos--;
    deck.flipped = false;
  } else if (act === "next") {
    deck.pos++;
    deck.flipped = false;
  } else if (act === "restart") {
    startDeck(deck.cards, { shuffle: deck.shuffle });
    return;
  }
  drawDeck();
}

document.addEventListener("keydown", (e) => {
  if (!deck || !document.getElementById("deck")) return;
  if (e.target.tagName === "INPUT") return;
  if (e.code === "Space") {
    e.preventDefault();
    deckAction("flip");
  } else if (e.code === "ArrowLeft") {
    deckAction("prev");
  } else if (e.code === "ArrowRight") {
    deckAction("next");
  }
});

function renderSearch(query) {
  const q = query.toLowerCase();
  const hits = index.filter(
    (n) =>
      n.title.toLowerCase().includes(q) || n.section.toLowerCase().includes(q)
  );
  render(
    hits.length
      ? `<h1>Знайдено: ${hits.length}</h1>
         <ul class="list">${hits
           .map(
             (n) => `<li><a href="#/note/${encodeURIComponent(n.path)}">
               <strong>${n.title}</strong>
               <span class="meta">${n.section}</span>
             </a></li>`
           )
           .join("")}</ul>`
      : `<p class="empty">Нічого не знайдено за запитом «${query}».</p>`
  );
}

// --- взаємодія ---------------------------------------------------------

app.addEventListener("click", (e) => {
  const actor = e.target.closest("[data-act]");
  if (actor) {
    deckAction(actor.dataset.act);
    return;
  }
  const reveal = e.target.closest(".reveal");
  if (reveal) {
    const task = reveal.closest(".task");
    task.querySelector(".solution").classList.toggle("hidden");
    const shown = !task.querySelector(".solution").classList.contains("hidden");
    reveal.textContent = shown ? "Сховати розв'язок" : "Показати розв'язок";
  }
});

search.addEventListener("input", (e) => {
  const q = e.target.value.trim();
  if (q) renderSearch(q);
  else route();
});

// --- маршрутизація -----------------------------------------------------

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

function route() {
  const [, kind, arg, arg2] = location.hash.split("/");
  if (kind === "section") renderSection(decodeURIComponent(arg));
  else if (kind === "topic")
    renderTopic(decodeURIComponent(arg), decodeURIComponent(arg2));
  else if (kind === "note") renderNote(decodeURIComponent(arg), arg2 || "read");
  else renderHome();
}

window.addEventListener("hashchange", route);

fetch("notes/index.json")
  .then((r) => r.json())
  .then((data) => {
    index = data;
    route();
  })
  .catch(() => {
    app.innerHTML = `<p class="empty">Не вдалося прочитати список конспектів.
      Запусти <code>python3 build.py</code>, а потім відкрий сайт через
      <code>python3 -m http.server</code>.</p>`;
  });
