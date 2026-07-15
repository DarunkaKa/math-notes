---
title: Ознаки рівності трикутників
section: Геометрія
topic: Трикутники
order: 3
---

## Конспект

Два трикутники **рівні**, якщо при накладанні вони суміщаються.

У рівних трикутників рівні **всі** шість елементів: три сторони і три кути.
Але щоб це довести, перевіряти всі шість не треба — досить **трьох**.
Які саме три — про це й кажуть ознаки.

### Порядок літер у записі

Запис $\triangle ABC = \triangle A_1B_1C_1$ означає більше, ніж «рівні».
Літери на однакових місцях позначають **відповідні** вершини:

$$\angle A = \angle A_1, \quad \angle B = \angle B_1, \quad \angle C = \angle C_1$$

$$AB = A_1B_1, \quad BC = B_1C_1, \quad AC = A_1C_1$$

Тому переставляти літери не можна: $\triangle ABC = \triangle B_1A_1C_1$ —
це вже інше твердження.

### I ознака: дві сторони і кут між ними

Якщо дві сторони й кут **між ними** одного трикутника відповідно дорівнюють
двом сторонам і куту між ними іншого — трикутники рівні.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Перша ознака рівності: дві сторони і кут між ними">
<polygon points="10,66 78,66 54,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polygon points="106,66 174,66 150,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<line x1="44.0" y1="62.8" x2="44.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="140.0" y1="62.8" x2="140.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="29.1" y1="42.4" x2="33.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
<line x1="30.4" y1="41.1" x2="34.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
<line x1="125.1" y1="42.4" x2="129.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
<line x1="126.4" y1="41.1" x2="130.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
<path d="M 18.0 66.0 A 8 8 0 0 0 15.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 114.0 66.0 A 8 8 0 0 0 111.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="4" y="73" class="vtx">A</text>
<text x="80" y="73" class="vtx">B</text>
<text x="52" y="19" class="vtx">C</text>
<text x="100" y="73" class="vtx">A₁</text>
<text x="176" y="73" class="vtx">B₁</text>
<text x="148" y="19" class="vtx">C₁</text>
</svg>
<figcaption>Позначки збігаються між трикутниками: одна риска = одна риска.
Кут <b>A</b> лежить <b>між</b> позначеними сторонами — це головна умова.</figcaption>
</figure>
</div>

$$\angle A = \angle A_1, \quad AB = A_1B_1, \quad AC = A_1C_1
\implies \triangle ABC = \triangle A_1B_1C_1$$

**Пастка.** Слова «між ними» — не прикраса. Якщо кут лежить **не між**
позначеними сторонами, ознака не працює: таких трикутників можна побудувати
два різні.

### II ознака: сторона і два прилеглих кути

Якщо сторона й два **прилеглих до неї** кути одного трикутника відповідно
дорівнюють стороні й двом прилеглим кутам іншого — трикутники рівні.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Друга ознака рівності: сторона і два прилеглих кути">
<polygon points="10,66 78,66 54,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polygon points="106,66 174,66 150,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<line x1="44.0" y1="62.8" x2="44.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="140.0" y1="62.8" x2="140.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
<path d="M 18.0 66.0 A 8 8 0 0 0 15.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 114.0 66.0 A 8 8 0 0 0 111.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 70.0 66.0 A 8 8 0 0 1 74.2 59.0" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 68.0 66.0 A 10 10 0 0 1 73.2 57.2" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 166.0 66.0 A 8 8 0 0 1 170.2 59.0" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 164.0 66.0 A 10 10 0 0 1 169.2 57.2" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="4" y="73" class="vtx">A</text>
<text x="80" y="73" class="vtx">B</text>
<text x="52" y="19" class="vtx">C</text>
<text x="100" y="73" class="vtx">A₁</text>
<text x="176" y="73" class="vtx">B₁</text>
<text x="148" y="19" class="vtx">C₁</text>
</svg>
<figcaption>Сторона <b>AB</b> і два кути на її кінцях. Одна дужка відповідає
одній дужці, дві — двом.</figcaption>
</figure>
</div>

$$AB = A_1B_1, \quad \angle A = \angle A_1, \quad \angle B = \angle B_1
\implies \triangle ABC = \triangle A_1B_1C_1$$

Насправді «прилеглих» тут теж можна послабити: знаючи два кути, третій
знаходиш відніманням від $180°$. Тож будь-які два кути й будь-яка сторона
підійдуть — аби сторона стояла в обох трикутниках на **тому самому** місці
відносно кутів.

### III ознака: три сторони

Якщо три сторони одного трикутника відповідно дорівнюють трьом сторонам
іншого — трикутники рівні.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Третя ознака рівності: три сторони">
<polygon points="10,66 78,66 54,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polygon points="106,66 174,66 150,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
<line x1="44.0" y1="62.8" x2="44.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="140.0" y1="62.8" x2="140.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="29.1" y1="42.4" x2="33.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
<line x1="30.4" y1="41.1" x2="34.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
<line x1="125.1" y1="42.4" x2="129.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
<line x1="126.4" y1="41.1" x2="130.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
<line x1="64.1" y1="47.1" x2="69.7" y2="44.0" stroke="currentColor" stroke-width="1.2"/>
<line x1="63.2" y1="45.5" x2="68.8" y2="42.5" stroke="currentColor" stroke-width="1.2"/>
<line x1="62.3" y1="44.0" x2="67.9" y2="40.9" stroke="currentColor" stroke-width="1.2"/>
<line x1="160.1" y1="47.1" x2="165.7" y2="44.0" stroke="currentColor" stroke-width="1.2"/>
<line x1="159.2" y1="45.5" x2="164.8" y2="42.5" stroke="currentColor" stroke-width="1.2"/>
<line x1="158.3" y1="44.0" x2="163.9" y2="40.9" stroke="currentColor" stroke-width="1.2"/>
<text x="4" y="73" class="vtx">A</text>
<text x="80" y="73" class="vtx">B</text>
<text x="52" y="19" class="vtx">C</text>
<text x="100" y="73" class="vtx">A₁</text>
<text x="176" y="73" class="vtx">B₁</text>
<text x="148" y="19" class="vtx">C₁</text>
</svg>
<figcaption>Кутів не позначено взагалі — і не треба. Три сторони жорстко
задають трикутник.</figcaption>
</figure>
</div>

$$AB = A_1B_1, \quad AC = A_1C_1, \quad BC = B_1C_1
\implies \triangle ABC = \triangle A_1B_1C_1$$

Це та сама жорсткість, через яку трикутник не «складається», на відміну від
чотирикутника: три палички, скріплені по кінцях, форму не міняють.

### Як вибрати ознаку

Дивись, що тобі **дано**:

| Дано | Ознака | Коротко |
|---|---|---|
| дві сторони + кут між ними | **I** | за двома сторонами і кутом між ними |
| сторона + два кути | **II** | за стороною і двома прилеглими кутами |
| три сторони | **III** | за трьома сторонами |

Якщо дано дві сторони й кут **не між ними** — жодна ознака не підходить.
Це не означає, що трикутники різні; це означає, що з цих даних рівність
не доводиться.

## Картки

### Які трикутники називають рівними?

Ті, що **суміщаються при накладанні**.

У рівних трикутників рівні всі шість елементів: три сторони і три кути.

### Скільки елементів досить перевірити, щоб довести рівність трикутників?

**Три** — правильно дібрані.

Саме про це й кажуть три ознаки рівності.

### Що означає порядок літер у записі $\triangle ABC = \triangle A_1B_1C_1$?

Літери на однакових місцях позначають **відповідні** вершини:
$\angle A = \angle A_1$, $\angle B = \angle B_1$, $\angle C = \angle C_1$,
а також $AB = A_1B_1$ і так далі.

Переставити літери — змінити твердження.

### Сформулюй I ознаку рівності трикутників

Якщо **дві сторони й кут між ними** одного трикутника відповідно дорівнюють
двом сторонам і куту між ними іншого — трикутники рівні.

### Сформулюй II ознаку рівності трикутників

Якщо **сторона й два прилеглих до неї кути** одного трикутника відповідно
дорівнюють стороні й двом прилеглим кутам іншого — трикутники рівні.

### Сформулюй III ознаку рівності трикутників

Якщо **три сторони** одного трикутника відповідно дорівнюють трьом сторонам
іншого — трикутники рівні.

### Назви всі три ознаки рівності коротко

**I** — за двома сторонами і кутом між ними.
**II** — за стороною і двома прилеглими до неї кутами.
**III** — за трьома сторонами.

### Чи рівні трикутники, у яких усі три кути рівні?

**Не обов'язково.**

Рівні кути дають лише **подібність** — однакову форму. Розмір може бути
різний: маленький і великий трикутники з кутами $60°/60°/60°$ мають рівні
кути, але рівними не є.

Щоб трикутники були рівні, потрібна хоча б одна рівна **сторона**.

### Дано $\triangle ABC = \triangle MNK$. Якій стороні дорівнює $AB$?

$$AB = MN$$

Літери на однакових місцях: $A \to M$, $B \to N$.

### Дано $\triangle ABC = \triangle MNK$. Чому дорівнює $\angle C$?

$$\angle C = \angle K$$

$C$ стоїть третьою, $K$ теж третя.

### Чи рівні периметри рівних трикутників?

**Так.**

У рівних трикутників рівні всі сторони, отже й суми сторін однакові.

### Чи рівні площі рівних трикутників?

**Так** — вони ж суміщаються при накладанні.

Увага: навпаки не працює. Рівні площі **не** означають рівні трикутники.

### Дано: три кути двох трикутників рівні. Яка це ознака рівності?

**Жодна.** Такої ознаки немає.

Три рівні кути дають лише **подібність** — форма та сама, а розмір може бути
будь-який.

### У двох трикутників однакові периметри. Чи вони рівні?

**Ні.**

Наприклад, $6$–$8$–$10$ і $7$–$8$–$9$: периметр в обох 24, а трикутники різні.

### У двох трикутників однакові площі. Чи вони рівні?

**Ні** — вони лише **рівновеликі**.

Наприклад, $5$–$5$–$6$ і $5$–$5$–$8$: площа в обох 12, а трикутники різні.

### Скільки всього елементів у трикутника і скільки досить перевірити?

Усього **шість**: три сторони і три кути.

А перевірити досить **трьох** — правильно дібраних. У цьому й уся суть ознак.

### Чому трикутник — жорстка фігура, а чотирикутник ні?

Бо три сторони однозначно задають трикутник (III ознака).

У чотирикутника сторін чотири, і при тих самих сторонах він може
«скластися» — форма не визначена однозначно.

### У трикутниках $ABC$ і $A_1B_1C_1$: $AB = A_1B_1$, $AC = A_1C_1$, $\angle A = \angle A_1$. Чи рівні вони?

**Так, за I ознакою.**

Кут $A$ лежить **між** сторонами $AB$ і $AC$ — саме те, що потрібно.

### У трикутниках $ABC$ і $A_1B_1C_1$: $AB = A_1B_1$, $AC = A_1C_1$, $\angle B = \angle B_1$. Чи можна стверджувати рівність?

**Ні.**

Кут $B$ лежить **не між** сторонами $AB$ і $AC$ — він при стороні $AB$,
але не між двома відомими. Жодна ознака не підходить.

### Яку ознаку тут використано?

<div class="figures">
  <figure>
    <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Два трикутники з позначеними двома сторонами і кутом між ними">
      <polygon points="10,66 78,66 54,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <polygon points="106,66 174,66 150,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <line x1="44.0" y1="62.8" x2="44.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
      <line x1="140.0" y1="62.8" x2="140.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
      <line x1="29.1" y1="42.4" x2="33.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
      <line x1="30.4" y1="41.1" x2="34.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
      <line x1="125.1" y1="42.4" x2="129.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
      <line x1="126.4" y1="41.1" x2="130.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
      <path d="M 18.0 66.0 A 8 8 0 0 0 15.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 114.0 66.0 A 8 8 0 0 0 111.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
  </figure>
</div>

---

**I ознаку** — позначено дві сторони і кут **між ними**.

### Чому в I ознаці важливі слова «кут між ними»?

Бо якщо кут лежить **не між** відомими сторонами, рівність не доводиться —
з таких даних можна побудувати два різні трикутники.

### Дано: дві сторони і кут між ними. Яка ознака?

**I ознака.**

### Дано: три сторони. Яка ознака?

**III ознака.**

### Дано: сторона і два кути. Яка ознака?

**II ознака.**

### Дано дві сторони і кут, що НЕ лежить між ними. Чи можна довести рівність?

**Ні** — жодна з трьох ознак не підходить.

Це не означає, що трикутники різні. Це означає, що **з цих даних** рівність
не випливає.

### Яку ознаку тут використано?

<div class="figures">
  <figure>
    <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Два трикутники з позначеними трьома сторонами">
      <polygon points="10,66 78,66 54,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <polygon points="106,66 174,66 150,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <line x1="44.0" y1="62.8" x2="44.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
      <line x1="140.0" y1="62.8" x2="140.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
      <line x1="29.1" y1="42.4" x2="33.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
      <line x1="30.4" y1="41.1" x2="34.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
      <line x1="125.1" y1="42.4" x2="129.6" y2="46.9" stroke="currentColor" stroke-width="1.2"/>
      <line x1="126.4" y1="41.1" x2="130.9" y2="45.6" stroke="currentColor" stroke-width="1.2"/>
      <line x1="64.1" y1="47.1" x2="69.7" y2="44.0" stroke="currentColor" stroke-width="1.2"/>
      <line x1="63.2" y1="45.5" x2="68.8" y2="42.5" stroke="currentColor" stroke-width="1.2"/>
      <line x1="62.3" y1="44.0" x2="67.9" y2="40.9" stroke="currentColor" stroke-width="1.2"/>
      <line x1="160.1" y1="47.1" x2="165.7" y2="44.0" stroke="currentColor" stroke-width="1.2"/>
      <line x1="159.2" y1="45.5" x2="164.8" y2="42.5" stroke="currentColor" stroke-width="1.2"/>
      <line x1="158.3" y1="44.0" x2="163.9" y2="40.9" stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </figure>
</div>

---

**III ознаку** — позначено три сторони, кутів не позначено взагалі.

### Яку ознаку тут використано?

<div class="figures">
  <figure>
    <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Два трикутники з позначеною стороною і двома кутами">
      <polygon points="10,66 78,66 54,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <polygon points="106,66 174,66 150,22" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <line x1="44.0" y1="62.8" x2="44.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
      <line x1="140.0" y1="62.8" x2="140.0" y2="69.2" stroke="currentColor" stroke-width="1.2"/>
      <path d="M 18.0 66.0 A 8 8 0 0 0 15.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 114.0 66.0 A 8 8 0 0 0 111.7 60.3" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 70.0 66.0 A 8 8 0 0 1 74.2 59.0" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 68.0 66.0 A 10 10 0 0 1 73.2 57.2" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 166.0 66.0 A 8 8 0 0 1 170.2 59.0" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 164.0 66.0 A 10 10 0 0 1 169.2 57.2" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
  </figure>
</div>

---

**II ознаку** — позначено одну сторону і два кути на її кінцях.
