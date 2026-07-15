---
title: Співвідношення між сторонами і кутами
section: Геометрія
topic: Трикутники
order: 2
---

## Конспект

Сторони й кути трикутника не можна задати як заманеться — між ними є жорсткі
залежності. Ця підтема саме про них.

### Нерівність трикутника

Будь-яка сторона менша за суму двох інших, але більша за модуль їх різниці:

$$|a - b| < c < a + b$$

<div class="figure-wide">
<figure>
<svg viewBox="0 0 90 85" class="compact" role="img" aria-label="Трикутник зі сторонами a, b, c">
<polygon points="10,70 80,70 52,15" fill="none" stroke="currentColor" stroke-width="1.8"/>
<text x="22" y="40">b</text>
<text x="70" y="42">a</text>
<text x="45" y="80">c</text>
</svg>
<figcaption>Кожна з трьох сторін мусить бути коротшою за суму двох інших.</figcaption>
</figure>
</div>

Сенс простий: щоб три відрізки замкнулись у трикутник, найдовший не має бути
задовгим. Якщо одна сторона довша за суму двох інших, вони просто не дістануть
одна до одної.

**Коли трикутник існує, а коли ні.** Візьмемо сторони $3$ і $4$ та спробуємо
замкнути їх на третій стороні різної довжини:

<div class="figures">
  <figure>
    <svg viewBox="0 0 110 62" role="img" aria-label="Сторони 3 і 4 не дістають до сторони 8">
      <line x1="6" y1="14" x2="90" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="6" y1="10" x2="6" y2="18" stroke="currentColor" stroke-width="1"/>
      <line x1="90" y1="10" x2="90" y2="18" stroke="currentColor" stroke-width="1"/>
      <text x="48" y="8" class="word" text-anchor="middle">c = 8</text>
      <line x1="6" y1="34" x2="37.5" y2="34" stroke="currentColor" stroke-width="2"/>
      <line x1="6" y1="30" x2="6" y2="38" stroke="currentColor" stroke-width="1"/>
      <line x1="37.5" y1="30" x2="37.5" y2="38" stroke="currentColor" stroke-width="1"/>
      <text x="21" y="28" class="word" text-anchor="middle">3</text>
      <line x1="37.5" y1="34" x2="79.5" y2="34" stroke="currentColor" stroke-width="2"/>
      <line x1="79.5" y1="30" x2="79.5" y2="38" stroke="currentColor" stroke-width="1"/>
      <text x="58" y="28" class="word" text-anchor="middle">4</text>
      <line x1="79.5" y1="34" x2="90" y2="34" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="90" y1="30" x2="90" y2="38" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
      <text x="85" y="50" class="word" text-anchor="middle">не дістають</text>
    </svg>
    <figcaption>3 + 4 = 7 &lt; 8<br><span>трикутника не існує</span></figcaption>
  </figure>
  <figure>
    <svg viewBox="0 0 110 62" role="img" aria-label="Сторони 3 і 4 замикаються на стороні 6">
      <line x1="6" y1="14" x2="69" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="6" y1="10" x2="6" y2="18" stroke="currentColor" stroke-width="1"/>
      <line x1="69" y1="10" x2="69" y2="18" stroke="currentColor" stroke-width="1"/>
      <text x="37" y="8" class="word" text-anchor="middle">c = 6</text>
      <line x1="6" y1="34" x2="37.5" y2="34" stroke="currentColor" stroke-width="2"/>
      <line x1="6" y1="30" x2="6" y2="38" stroke="currentColor" stroke-width="1"/>
      <line x1="37.5" y1="30" x2="37.5" y2="38" stroke="currentColor" stroke-width="1"/>
      <text x="21" y="28" class="word" text-anchor="middle">3</text>
      <line x1="37.5" y1="34" x2="79.5" y2="34" stroke="currentColor" stroke-width="2"/>
      <line x1="79.5" y1="30" x2="79.5" y2="38" stroke="currentColor" stroke-width="1"/>
      <text x="58" y="28" class="word" text-anchor="middle">4</text>
      <line x1="69" y1="20" x2="69" y2="44" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/>
      <text x="88" y="50" class="word" text-anchor="middle">із запасом</text>
    </svg>
    <figcaption>3 + 4 = 7 &gt; 6<br><span>трикутник існує</span></figcaption>
  </figure>
</div>

Дві коротші сторони, покладені одна за одною, мають **перекрити** третю.
Якщо не дістають — трикутник не замкнеться.

Це найшвидший спосіб перевірити, чи існує трикутник із заданими сторонами:
досить порівняти дві менші сторони з найбільшою.

### Сума кутів

$$\alpha + \beta + \gamma = 180°$$

<div class="figure-wide">
<figure>
<svg viewBox="0 0 90 85" role="img" aria-label="Трикутник із кутами альфа, бета, гама">
<polygon points="10,70 80,70 52,15" fill="none" stroke="currentColor" stroke-width="1.8"/>
<path d="M 21.0 70.0 A 11 11 0 0 0 16.7 61.3" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 69.0 70.0 A 11 11 0 0 1 75.0 60.2" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 66.4 70.0 A 13.6 13.6 0 0 1 73.8 57.9" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 45.3 23.7 A 11 11 0 0 0 57.0 24.8" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 43.7 25.8 A 13.6 13.6 0 0 0 58.2 27.1" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 42.2 27.9 A 16.2 16.2 0 0 0 59.3 29.4" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="27.5" y="61.4" class="angle">α</text>
<text x="61.2" y="58.4" class="angle">β</text>
<text x="49.8" y="39.6" class="angle">γ</text>
</svg>
<figcaption>Різна кількість дужок означає, що кути різні. Скільки б трикутник
не розтягували, їх сума лишається 180°.</figcaption>
</figure>
</div>

Звідси випливають майже всі задачі на пошук кутів: знаючи два кути, третій
знаходиш відніманням.

### Проти більшої сторони — більший кут

$$b > a \iff \beta > \alpha$$

<div class="figure-wide">
<figure>
<svg viewBox="0 0 95 85" class="compact" role="img" aria-label="Більша сторона лежить проти більшого кута">
<polygon points="12,70 82,70 60,22" fill="none" stroke="currentColor" stroke-width="1.8"/>
<path d="M 23.0 70.0 A 11 11 0 0 0 19.8 62.2" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 71.0 70.0 A 11 11 0 0 1 77.4 60.0" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 68.4 70.0 A 13.6 13.6 0 0 1 76.3 57.6" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="26.8" y="63.9" class="angle">α</text>
<text x="66.3" y="60" class="angle">β</text>
<text x="31" y="43">b</text>
<text x="76" y="45">a</text>
</svg>
<figcaption>Сторона <b>b</b> довша за <b>a</b> — отже, кут <b>β</b> проти неї більший за <b>α</b>.</figcaption>
</figure>
</div>

**Приклад.** У трикутнику зі сторонами $a = 5$, $b = 8$, $c = 7$ найдовша
сторона — $b$. Отже, найбільший кут у ньому — $\beta$, той, що лежить проти
$b$. А найменший — $\alpha$, проти найкоротшої сторони $a = 5$.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 90 90" class="compact" role="img" aria-label="Трикутник зі сторонами 5, 8 і 7 у справжніх пропорціях">
<polygon points="10,70 69.5,70 63.4,27.9" fill="none" stroke="currentColor" stroke-width="1.8"/>
<path d="M 17.0 70.0 A 7 7 0 0 0 15.5 65.7" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 62.5 70.0 A 7 7 0 0 1 68.5 63.1" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 60.3 70.0 A 9.2 9.2 0 0 1 68.2 60.9" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 57.9 32.2 A 7 7 0 0 0 64.4 34.8" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 56.2 33.6 A 9.2 9.2 0 0 0 64.7 37.0" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 54.4 35.0 A 11.4 11.4 0 0 0 65.0 39.2" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="20.4" y="66.4" class="angle">α</text>
<text x="59.5" y="61.4" class="angle">β</text>
<text x="57.7" y="42.2" class="angle">γ</text>
<text x="26" y="42" text-anchor="middle">b = 8</text>
<text x="72" y="49">a = 5</text>
<text x="40" y="80">c = 7</text>
</svg>
<figcaption>Той самий трикутник у справжніх пропорціях. Проти найдовшої сторони
<b>b = 8</b> лежить найширший кут <b>β</b>, проти найкоротшої <b>a = 5</b> —
найвужчий <b>α</b>.</figcaption>
</figure>
</div>

Кутів рахувати не треба: порядок сторін одразу дає порядок кутів.

Стрілка працює в **обидва боки**: більшій стороні відповідає більший кут,
і навпаки. Тому найдовша сторона завжди лежить проти найбільшого кута.

Це пояснює, чому в прямокутному трикутнику гіпотенуза найдовша: вона лежить
проти прямого кута, а він найбільший.

### Зовнішній кут

**Зовнішній кут** — кут, суміжний із внутрішнім кутом трикутника: продовж
сторону за вершину — і побачиш його.

Зовнішній кут дорівнює сумі двох внутрішніх кутів, **не суміжних** із ним:

$$\delta = \alpha + \beta$$

<div class="figure-wide">
<figure>
<svg viewBox="0 0 100 85" class="compact" role="img" aria-label="Зовнішній кут дельта при продовженні основи">
<line x1="75" y1="70" x2="94" y2="70" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 2"/>
<polygon points="10,70 75,70 40,25" fill="none" stroke="currentColor" stroke-width="1.8"/>
<path d="M 21.0 70.0 A 11 11 0 0 0 16.1 60.8" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 33.9 34.2 A 11 11 0 0 0 46.8 33.7" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 32.5 36.3 A 13.6 13.6 0 0 0 48.3 35.7" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 69.0 70.0 A 6 6 0 0 1 71.3 65.3" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 66.8 70.0 A 8.2 8.2 0 0 1 70.0 63.5" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 64.6 70.0 A 10.4 10.4 0 0 1 68.6 61.8" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 92.0 70.0 A 17 17 0 0 0 64.6 56.6" fill="none" stroke="currentColor" stroke-width="1.3"/>
<text x="27.2" y="60.8" class="angle">α</text>
<text x="40.8" y="47.1" class="angle">β</text>
<text x="58" y="61.7" class="angle">γ</text>
<text x="86.2" y="47.1" class="angle">δ</text>
</svg>
<figcaption>Основу продовжено за вершину (пунктир). Зовнішній кут <b>δ</b> — між
продовженням і стороною. Він дорівнює <b>α + β</b> — сумі двох далеких кутів.</figcaption>
</figure>
</div>

Це не окрема аксіома, а наслідок суми кутів: $\delta = 180° - \gamma$,
а $\alpha + \beta = 180° - \gamma$ — те саме число. Тому вони рівні.

**Приклад.** Хай $\alpha = 50°$, $\beta = 70°$.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 100 85" class="compact" role="img" aria-label="Приклад: кути 50, 70, 60 градусів і зовнішній кут 120 градусів">
<line x1="70" y1="70" x2="92" y2="70" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 2"/>
<polygon points="10,70 70,70 45.6,27.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
<path d="M 21.0 70.0 A 11 11 0 0 0 17.1 61.6" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 38.5 36.0 A 11 11 0 0 0 51.1 37.1" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 36.9 38.0 A 13.6 13.6 0 0 0 52.4 39.4" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 64.0 70.0 A 6 6 0 0 1 67.0 64.8" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 61.8 70.0 A 8.2 8.2 0 0 1 65.9 62.9" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 59.6 70.0 A 10.4 10.4 0 0 1 64.8 61.0" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 87.0 70.0 A 17 17 0 0 0 61.5 55.3" fill="none" stroke="currentColor" stroke-width="1.3"/>
<text x="27.7" y="61.8" class="angle">50°</text>
<text x="43.7" y="49.6" class="angle">70°</text>
<text x="53.6" y="60.5" class="angle">60°</text>
<text x="82.8" y="47.9" class="angle">120°</text>
</svg>
<figcaption>Кути намальовані у справжню величину: <b>120°</b> зовні дорівнює
<b>50° + 70°</b> усередині.</figcaption>
</figure>
</div>

Довгий шлях — спершу знайти $\gamma$:

$$\gamma = 180° - 50° - 70° = 60°$$

$$\delta = 180° - \gamma = 180° - 60° = 120°$$

Короткий — одразу, без пошуку $\gamma$:

$$\delta = \alpha + \beta = 50° + 70° = 120°$$

У цьому й користь: зовнішній кут дає відповідь **в один крок**.

### Сума зовнішніх кутів

Якщо взяти **по одному** зовнішньому куту при кожній вершині, їх сума
завжди дорівнює $360°$:

$$\delta_1 + \delta_2 + \delta_3 = 360°$$

<div class="figure-wide">
<figure>
<svg viewBox="0 0 138 92" class="compact" role="img" aria-label="Три зовнішні кути трикутника в сумі дають 360 градусів">
<line x1="105" y1="65" x2="129" y2="65" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
<line x1="75" y1="20" x2="61.7" y2="0" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
<line x1="25" y1="65" x2="7.2" y2="81.1" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
<polygon points="25,65 105,65 75,20" fill="none" stroke="currentColor" stroke-width="1.6"/>
<path d="M 38.0 65.0 A 13 13 0 0 1 15.4 73.7" fill="none" stroke="currentColor" stroke-width="1.2"/>
<path d="M 97.8 54.2 A 13 13 0 0 1 118.0 65.0" fill="none" stroke="currentColor" stroke-width="1.2"/>
<path d="M 65.3 28.7 A 13 13 0 0 1 67.8 9.2" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="32.2" y="83.7" class="angle">δ₁</text>
<text x="114.4" y="47.4" class="angle">δ₂</text>
<text x="55.2" y="17.5" class="angle">δ₃</text>
</svg>
<figcaption>Кожну сторону продовжено в один бік по колу. Три зовнішні кути —
по одному при кожній вершині — разом дають повний оберт: <b>360°</b>.</figcaption>
</figure>
</div>

**Чому.** Кожен зовнішній кут разом зі своїм внутрішнім дає $180°$.
Трьох вершин — три такі пари:

$$(\delta_1 + \alpha) + (\delta_2 + \beta) + (\delta_3 + \gamma) = 3 \cdot 180° = 540°$$

Внутрішні кути дають $180°$, тож на зовнішні лишається:

$$540° - 180° = 360°$$

Це правило працює не лише для трикутника: сума зовнішніх кутів **будь-якого**
опуклого многокутника — завжди $360°$, скільки б у нього не було сторін.

### При кожній вершині — два зовнішні кути

Слова «по одному при кожній вершині» не випадкові. При одній вершині
зовнішніх кутів насправді **два**: сторону можна продовжити в один бік або
в інший.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 130 96" class="compact" role="img" aria-label="Два зовнішні кути при одній вершині трикутника рівні як вертикальні">
<line x1="92" y1="64" x2="118" y2="64" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
<line x1="92" y1="64" x2="108.4" y2="84.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
<polygon points="18,64 92,64 58,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<path d="M 84.4 54.7 A 12 12 0 0 1 104.0 64.0" fill="none" stroke="currentColor" stroke-width="1.2"/>
<path d="M 80.0 64.0 A 12 12 0 0 0 99.6 73.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
<path d="M 85.0 64.0 A 7 7 0 0 1 87.6 58.6" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="100.6" y="45.9" class="angle">δ</text>
<text x="83.4" y="82.1" class="angle">δ</text>
<text x="77.6" y="57.1" class="angle">β</text>
<text x="13" y="70" class="vtx">A</text>
<text x="110.1" y="72.6" class="vtx">B</text>
<text x="55" y="17" class="vtx">C</text>
</svg>
<figcaption>Продовжити можна сторону <b>AB</b> (вправо) або сторону <b>CB</b>
(вниз). Обидва зовнішні кути при вершині <b>B</b> — <b>вертикальні</b>,
а тому рівні між собою.</figcaption>
</figure>
</div>

Обидва вони дорівнюють одному й тому самому числу $180° - \beta$, тож на
практиці байдуже, який із них брати.

**Але в сумі $360°$ бере участь лише один із пари.** Якщо порахувати обидва
при кожній із трьох вершин, вийде вдвічі більше:

$$2 \cdot 360° = 720°$$

Тому у формулюванні й стоїть «взятих **по одному** при кожній вершині».

## Картки

### Сформулюй нерівність трикутника

$$|a - b| < c < a + b$$

Будь-яка сторона менша за суму двох інших і більша за модуль їх різниці.

### Як швидко перевірити, чи існує трикутник із заданими сторонами?

Скласти дві **менші** сторони й порівняти з найбільшою.

Сума менших більша за найбільшу — трикутник існує. Менша або рівна — ні.

### Чи існує трикутник зі сторонами 3, 4 і 8?

**Ні.**

$$3 + 4 = 7 < 8$$

Дві коротші сторони не дістають до третьої — замкнути їх неможливо.

### Чи існує трикутник зі сторонами 3, 4 і 6?

**Так.**

$$3 + 4 = 7 > 6$$

Сума двох менших сторін перекриває найбільшу — трикутник замикається.

### Чи існує трикутник зі сторонами 2, 3 і 5?

**Ні.**

$$2 + 3 = 5$$

Рівно $5$ — а треба **більше** за $5$. Сторони ляжуть в одну пряму,
трикутника не вийде: нерівність строга.

### Чи існує трикутник зі сторонами 6, 6 і 13?

**Ні.**

$$6 + 6 = 12 < 13$$

Дві рівні сторони разом коротші за третю — не дістануть.

### Дві сторони трикутника — 5 і 9. У яких межах може бути третя?

$$|9 - 5| < c < 9 + 5$$

$$4 < c < 14$$

Більша за різницю, менша за суму. Обидві межі строгі.

### Дві сторони трикутника — 7 і 3. У яких межах може бути третя?

$$4 < x < 10$$

Більша за різницю ($7 - 3$) і менша за суму ($7 + 3$).

### Чи існує трикутник зі сторонами 5, 5 і 10?

**Ні.**

$$5 + 5 = 10$$

Рівно стільки ж, скільки третя сторона, — це вже не трикутник, а відрізок.
Потрібно **строго більше**.

### Чому дорівнює сума кутів трикутника?

$$\alpha + \beta + \gamma = 180°$$

### Два кути трикутника — 47° і 63°. Чому дорівнює третій?

$$180° - 47° - 63° = 70°$$

### Чому дорівнює сума гострих кутів прямокутного трикутника?

$$90°$$

На прямий кут іде $90°$ із $180°$, решта $90°$ ділиться між двома гострими.

### Кути трикутника — 100°, 40° і 40°. Який це трикутник?

Одразу **два** імені: **тупокутний** (є кут $100°$) і **рівнобедрений** (два
кути рівні).

### У трикутнику кути 50°, 60° і 70°. Яка сторона найдовша?

Та, що лежить **проти 70°** — найбільшого кута.

### Чи може в трикутнику кожен кут бути меншим за 60°?

**Ні.**

Тоді сума була б меншою за $180°$. Отже **принаймні один** кут завжди
$60°$ або більший.

Так само принаймні один кут завжди $60°$ або менший.

### Проти рівних сторін трикутника лежать які кути?

**Рівні.**

І навпаки: проти рівних кутів лежать рівні сторони.

### Проти якої сторони лежить більший кут?

Проти **більшої**.

$$b > a \iff \beta > \alpha$$

Залежність працює в обидва боки.

### Що таке зовнішній кут трикутника?

Кут, суміжний із внутрішнім кутом трикутника.

### Чому дорівнює зовнішній кут трикутника?

Сумі двох внутрішніх кутів, не суміжних із ним:

$$\delta = \alpha + \beta$$

### Яка сторона прямокутного трикутника найдовша і чому?

**Гіпотенуза** — бо вона лежить проти прямого кута, а він найбільший
у прямокутному трикутнику.

### У трикутнику $a = 5$, $b = 8$, $c = 7$. Який кут найбільший?

**$\beta$** — той, що лежить проти найдовшої сторони $b = 8$.

Кути рахувати не треба: порядок сторін дає порядок кутів.

### Кути трикутника — 30°, 60° і 90°. Яка сторона найкоротша?

Та, що лежить проти кута $30°$ — найменшого.

### Який це трикутник за кутами, якщо його сторони 3, 4 і 5?

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Трикутник зі сторонами 3, 4, 5">
      <polygon points="15,70 75,70 15,25" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="42" y="80" class="word" text-anchor="middle">4</text>
      <text x="8" y="50" class="word" text-anchor="middle">3</text>
      <text x="50" y="43" class="word" text-anchor="middle">5</text>
    </svg>
  </figure>
</div>

---

**Прямокутний.**

$$3^2 + 4^2 = 9 + 16 = 25 = 5^2$$

Це найвідоміша трійка чисел, для якої трикутник виходить прямокутним.

### Чому дорівнює зовнішній кут δ?

<div class="figures">
  <figure>
    <svg viewBox="0 0 100 85" class="compact" role="img" aria-label="Трикутник із кутами 50 і 70 градусів і невідомим зовнішнім кутом">
      <line x1="70" y1="70" x2="92" y2="70" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 2"/>
      <polygon points="10,70 70,70 45.6,27.6" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M 21.0 70.0 A 11 11 0 0 0 17.1 61.6" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 38.5 36.0 A 11 11 0 0 0 51.1 37.1" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 36.9 38.0 A 13.6 13.6 0 0 0 52.4 39.4" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 87.0 70.0 A 17 17 0 0 0 61.5 55.3" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <text x="27.7" y="61.8" class="word" text-anchor="middle">50°</text>
      <text x="43.7" y="49.6" class="word" text-anchor="middle">70°</text>
      <text x="84" y="47.9" class="word" text-anchor="middle">δ = ?</text>
    </svg>
  </figure>
</div>

---

$$\delta = 50° + 70° = 120°$$

Зовнішній кут дорівнює сумі двох внутрішніх, не суміжних із ним.

### Чи може зовнішній кут трикутника бути меншим за внутрішній, не суміжний із ним?

**Ні, ніколи.**

Зовнішній кут дорівнює **сумі** двох таких кутів, тож він більший за кожен
із них окремо.

### Чому дорівнює сума зовнішніх кутів трикутника, взятих по одному при кожній вершині?

$$\delta_1 + \delta_2 + \delta_3 = 360°$$

### Чому сума зовнішніх кутів дорівнює саме 360°?

Кожен зовнішній кут разом зі своїм внутрішнім дає $180°$. Трьох вершин —
три пари:

$$3 \cdot 180° = 540°$$

Внутрішні кути забирають $180°$, тож зовнішнім лишається:

$$540° - 180° = 360°$$

### Скільки зовнішніх кутів при одній вершині трикутника?

<div class="figures">
  <figure>
    <svg viewBox="0 0 130 96" class="compact" role="img" aria-label="Вершина B з двома продовженнями сторін">
      <line x1="92" y1="64" x2="118" y2="64" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
      <line x1="92" y1="64" x2="108.4" y2="84.2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2"/>
      <polygon points="18,64 92,64 58,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M 84.4 54.7 A 12 12 0 0 1 104.0 64.0" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <path d="M 80.0 64.0 A 12 12 0 0 0 99.6 73.3" fill="none" stroke="currentColor" stroke-width="1.2"/>
      <text x="94" y="72" class="vtx">B</text>
    </svg>
  </figure>
</div>

---

**Два** — сторону можна продовжити в один бік або в інший.

Вони **вертикальні**, а тому рівні між собою: обидва дорівнюють $180° - \beta$.

Саме тому в правилі про $360°$ кажуть «взятих **по одному** при кожній
вершині»: якщо взяти обидва, вийде $720°$.

### Чому дорівнює сума зовнішніх кутів опуклого шестикутника?

$$360°$$

Так само, як у трикутника. Сума зовнішніх кутів будь-якого опуклого
многокутника — завжди $360°$, незалежно від кількості сторін.

### Два зовнішні кути трикутника — 100° і 150°. Чому дорівнює третій?

$$\delta_3 = 360° - 100° - 150° = 110°$$

### Зовнішній кут при вершині дорівнює 95°. Чому дорівнює внутрішній кут при тій самій вершині?

$$180° - 95° = 85°$$

Зовнішній і внутрішній кути при одній вершині — **суміжні**.
