---
title: Види трикутників
section: Геометрія
topic: Трикутники
order: 1
---

## Конспект

**Трикутник** — фігура з трьох точок, що не лежать на одній прямій,
і трьох відрізків, які їх сполучають.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 200 125" role="img" aria-label="Будова трикутника: вершини A, B, C, сторони a, b, c, кути альфа, бета, гама">
<polygon points="25,100 175,100 75,22" fill="none" stroke="currentColor" stroke-width="1.8"/>
<circle cx="25" cy="100" r="2.2" fill="currentColor"/>
<circle cx="175" cy="100" r="2.2" fill="currentColor"/>
<circle cx="75" cy="22" r="2.2" fill="currentColor"/>
<text x="14" y="111" class="vertex">A</text>
<text x="180" y="111" class="vertex">B</text>
<text x="70" y="14" class="vertex">C</text>
<text x="97" y="116">c</text>
<text x="133" y="58">a</text>
<text x="40" y="58">b</text>
<path d="M 39.0 100.0 A 14 14 0 0 0 32.6 88.2" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 161.0 100.0 A 14 14 0 0 1 164.0 91.4" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 157.8 100.0 A 17.2 17.2 0 0 1 161.4 89.4" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 67.4 33.8 A 14 14 0 0 0 86.0 30.6" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 65.7 36.5 A 17.2 17.2 0 0 0 88.6 32.6" fill="none" stroke="currentColor" stroke-width="1"/>
<path d="M 64.0 39.2 A 20.4 20.4 0 0 0 91.1 34.5" fill="none" stroke="currentColor" stroke-width="1"/>
<text x="45.2" y="89" class="angle">α</text>
<text x="150.2" y="91.5" class="angle">β</text>
<text x="79.9" y="51" class="angle">γ</text>
</svg>
<figcaption>Три вершини, три сторони, три кути. Різна кількість дужок означає, що кути різні. Сторону позначають буквою тієї вершини, що лежить <b>навпроти</b> неї.</figcaption>
</figure>
</div>

**Периметр** — сума довжин усіх сторін:

$$P = a + b + c$$

Наприклад, для трикутника зі сторонами $5$, $7$ і $9$ см:

$$P = 5 + 7 + 9 = 21 \text{ см}$$

<div class="scheme">
<svg viewBox="0 0 700 205" role="img" aria-label="Схема: види трикутників за сторонами і за кутами">
<rect x="285" y="6" width="130" height="30" rx="6"/>
<text x="350" y="21" class="root">Види трикутників</text>
<path d="M 350 36 V 52 H 175 V 68 M 350 52 H 525 V 68"/>
<rect x="115" y="68" width="120" height="28" rx="6"/>
<text x="175" y="82" class="branch">за сторонами</text>
<rect x="465" y="68" width="120" height="28" rx="6"/>
<text x="525" y="82" class="branch">за кутами</text>
<path d="M 175 96 V 114 H 60 V 132 M 175 114 H 290 V 132 M 175 114 V 132"/>
<path d="M 525 96 V 114 H 410 V 132 M 525 114 H 640 V 132 M 525 114 V 132"/>
<rect x="6" y="132" width="108" height="30" rx="6"/>
<text x="60" y="147">Різносторонній</text>
<rect x="121" y="132" width="108" height="30" rx="6"/>
<text x="175" y="147">Рівнобедрений</text>
<rect x="236" y="132" width="108" height="30" rx="6"/>
<text x="290" y="147">Рівносторонній</text>
<rect x="356" y="132" width="108" height="30" rx="6"/>
<text x="410" y="147">Гострокутний</text>
<rect x="471" y="132" width="108" height="30" rx="6"/>
<text x="525" y="147">Прямокутний</text>
<rect x="586" y="132" width="108" height="30" rx="6"/>
<text x="640" y="147">Тупокутний</text>
</svg>
</div>

### За сторонами

Рисочки позначають рівні сторони.

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Різносторонній трикутник">
      <polygon points="10,70 78,70 52,15" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <text x="26" y="40">a</text>
      <text x="70" y="40">b</text>
      <text x="42" y="82">c</text>
    </svg>
    <figcaption>Різносторонній<br><span>усі сторони різні</span></figcaption>
  </figure>

  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Рівнобедрений трикутник">
      <polygon points="10,70 80,70 45,15" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="24.1" y1="40.4" x2="30.9" y2="44.6" stroke="currentColor" stroke-width="1.5"/>
      <line x1="59.1" y1="44.6" x2="65.9" y2="40.4" stroke="currentColor" stroke-width="1.5"/>
      <text x="1" y="37" class="word">бічна</text>
      <text x="63" y="37" class="word">бічна</text>
      <text x="32" y="83" class="word">основа</text>
    </svg>
    <figcaption>Рівнобедрений<br><span>дві сторони рівні</span></figcaption>
  </figure>

  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Рівносторонній трикутник">
      <polygon points="10,70 80,70 45,9.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="24" y1="37.7" x2="31" y2="41.7" stroke="currentColor" stroke-width="1.5"/>
      <line x1="59" y1="41.7" x2="66" y2="37.7" stroke="currentColor" stroke-width="1.5"/>
      <line x1="45" y1="66" x2="45" y2="74" stroke="currentColor" stroke-width="1.5"/>
      <text x="22" y="36">a</text>
      <text x="66" y="36">a</text>
      <text x="42" y="82">a</text>
    </svg>
    <figcaption>Рівносторонній<br><span>усі сторони рівні</span></figcaption>
  </figure>
</div>

### За кутами

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Гострокутний трикутник">
      <polygon points="12,70 78,70 48,18" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M 21.0 70.0 A 9 9 0 0 0 17.1 62.6" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 69.0 70.0 A 9 9 0 0 1 73.5 62.2" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 66.6 70.0 A 11.4 11.4 0 0 1 72.3 60.1" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 42.9 25.4 A 9 9 0 0 0 52.5 25.8" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 41.5 27.4 A 11.4 11.4 0 0 0 53.7 27.9" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M 40.1 29.3 A 13.8 13.8 0 0 0 54.9 30.0" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
    <figcaption>Гострокутний<br><span>усі кути гострі</span></figcaption>
  </figure>

  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Прямокутний трикутник">
      <polygon points="15,70 75,70 15,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polyline points="22,70 22,63 15,63" fill="none" stroke="currentColor" stroke-width="1"/>
      <text x="45" y="81" class="word" text-anchor="middle">катет</text>
      <text x="7" y="45" class="word" text-anchor="middle" transform="rotate(-90 7 45)">катет</text>
      <text x="50" y="39" class="word" text-anchor="middle" transform="rotate(39.8 50 39)">гіпотенуза</text>
    </svg>
    <figcaption>Прямокутний<br><span>один кут прямий</span></figcaption>
  </figure>

  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Тупокутний трикутник">
      <polygon points="10,70 85,70 30,52" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M 22.6 58.7 A 10 10 0 0 0 39.5 55.1" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
    <figcaption>Тупокутний<br><span>один кут тупий</span></figcaption>
  </figure>
</div>

Тупий або прямий кут у трикутнику може бути **лише один**. Бо сума всіх кутів
дорівнює $180°$, і два таких кути вже дали б $180°$ або більше, не лишивши
місця третьому.

Тому в прямокутному й тупокутному трикутнику решта два кути **завжди гострі**.

### Два поділи незалежні

Класифікація за сторонами і за кутами — це **дві різні шкали**, а не одна.
Кожен трикутник має вид за сторонами **і** вид за кутами одночасно.

Тому трикутник цілком може бути рівнобедреним **і** прямокутним водночас:
катети рівні, кути $45°$, $45°$, $90°$.

А от рівностороннім і прямокутним одночасно — **ніколи**: у рівносторонньому
всі кути по $60°$, тож прямому куту там немає звідки взятися.

## Картки

### Що таке трикутник?

Фігура з трьох точок, які **не лежать на одній прямій**, і трьох відрізків,
що їх сполучають.

Без умови «не на одній прямій» трикутника не вийде — точки злипнуться в лінію.

### Скільки елементів має трикутник?

**Шість**: три сторони і три кути.

### Чому дорівнює периметр трикутника?

$$P = a + b + c$$

### Як позначають сторони трикутника?

Сторону позначають буквою тієї вершини, яка лежить **навпроти** неї.

Сторона $a$ — навпроти вершини $A$, сторона $b$ — навпроти $B$, $c$ — навпроти $C$.

### Які є види трикутників за сторонами?

**Різносторонній** — усі сторони різні.
**Рівнобедрений** — дві сторони рівні.
**Рівносторонній** — усі три сторони рівні.

### Які є види трикутників за кутами?

**Гострокутний** — усі кути гострі.
**Прямокутний** — один кут прямий.
**Тупокутний** — один кут тупий.

### Як називають сторони рівнобедреного трикутника?

Дві рівні сторони — **бічні**, третя — **основа**.

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Рівнобедрений трикутник: бічні сторони й основа">
      <polygon points="10,70 80,70 45,15" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="24.1" y1="40.4" x2="30.9" y2="44.6" stroke="currentColor" stroke-width="1.5"/>
      <line x1="59.1" y1="44.6" x2="65.9" y2="40.4" stroke="currentColor" stroke-width="1.5"/>
      <text x="1" y="37" class="word">бічна</text>
      <text x="63" y="37" class="word">бічна</text>
      <text x="32" y="83" class="word">основа</text>
    </svg>
  </figure>
</div>

Майже всі властивості рівнобедреного трикутника формулюються саме через
основу — тож плутати їх не варто.

### Як позначити периметр рівнобедреного трикутника через бічну сторону й основу?

$$P = 2b + a$$

де $b$ — бічна сторона (їх дві), $a$ — основа.

### Чи є рівносторонній трикутник рівнобедреним?

**Так** — це його окремий випадок.

Усе, що справедливе для рівнобедреного, справедливе й для рівностороннього.
Навпаки — ні.

### Як називають сторони прямокутного трикутника?

Дві сторони при прямому куті — **катети**, сторона навпроти прямого кута —
**гіпотенуза**.

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Прямокутний трикутник: катети й гіпотенуза">
      <polygon points="15,70 75,70 15,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polyline points="22,70 22,63 15,63" fill="none" stroke="currentColor" stroke-width="1"/>
      <text x="45" y="81" class="word" text-anchor="middle">катет</text>
      <text x="7" y="45" class="word" text-anchor="middle" transform="rotate(-90 7 45)">катет</text>
      <text x="50" y="39" class="word" text-anchor="middle" transform="rotate(39.8 50 39)">гіпотенуза</text>
    </svg>
  </figure>
</div>

Гіпотенуза завжди найдовша: вона лежить проти найбільшого кута.

### Скільки тупих кутів може бути в трикутнику?

Лише **один**.

Два тупих кути разом дали б понад $180°$, а сума всіх кутів трикутника —
рівно $180°$.

### Чи може трикутник бути рівнобедреним і прямокутним водночас?

**Так.**

Катети рівні, кути $45°$, $45°$, $90°$.

### Чи може трикутник бути рівностороннім і прямокутним водночас?

**Ні.**

У рівносторонньому всі кути по $60°$, тож прямого кута там бути не може.

### Чому дорівнюють кути рівностороннього трикутника?

Усі три по $60°$.

$$180° : 3 = 60°$$

### Чому дорівнює периметр рівностороннього трикутника?

$$P = 3a$$

### Чому дорівнюють кути рівнобедреного прямокутного трикутника?

$$45°, \quad 45°, \quad 90°$$

На прямий кут іде $90°$, решта $90°$ ділиться порівну між двома рівними кутами
при основі.

### Скільки прямих кутів може бути в трикутнику?

Лише **один**.

Два прямих кути дали б уже $180°$, і на третій кут не лишилось би нічого.

### Чи кожен рівносторонній трикутник є гострокутним?

**Так.**

Усі його кути по $60°$, а $60° < 90°$ — отже, всі гострі.

### Який це трикутник за сторонами?

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Трикутник із двома рівними сторонами">
      <polygon points="10,70 80,70 45,15" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="24.1" y1="40.4" x2="30.9" y2="44.6" stroke="currentColor" stroke-width="1.5"/>
      <line x1="59.1" y1="44.6" x2="65.9" y2="40.4" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </figure>
</div>

---

**Рівнобедрений** — рисочки показують, що дві сторони рівні.

### Який це трикутник за сторонами?

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Трикутник із трьома рівними сторонами">
      <polygon points="10,70 80,70 45,9.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <line x1="24" y1="37.7" x2="31" y2="41.7" stroke="currentColor" stroke-width="1.5"/>
      <line x1="59" y1="41.7" x2="66" y2="37.7" stroke="currentColor" stroke-width="1.5"/>
      <line x1="45" y1="66" x2="45" y2="74" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </figure>
</div>

---

**Рівносторонній** — рисочки на всіх трьох сторонах.

### Який це трикутник за кутами?

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Трикутник із тупим кутом">
      <polygon points="10,70 85,70 30,52" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <path d="M 22.6 58.7 A 10 10 0 0 0 39.5 55.1" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
  </figure>
</div>

---

**Тупокутний** — позначений кут більший за $90°$.

### Який це трикутник за кутами?

<div class="figures">
  <figure>
    <svg viewBox="0 0 90 85" role="img" aria-label="Трикутник із прямим кутом">
      <polygon points="15,70 75,70 15,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polyline points="22,70 22,63 15,63" fill="none" stroke="currentColor" stroke-width="1"/>
    </svg>
  </figure>
</div>

---

**Прямокутний** — квадратик позначає прямий кут.
