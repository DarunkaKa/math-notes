---
title: Прямокутний трикутник
section: Геометрія
topic: Трикутники
order: 10
---

## Конспект

**Прямокутний** — трикутник, у якого один кут **прямий**. Що таке катет і
гіпотенуза, вже було у «Видах трикутників»; тут — що прямокутний трикутник
**уміє**.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 130 88" class="compact" role="img" aria-label="Прямокутний трикутник: катети a і b при прямому куті, гіпотенуза c проти нього">
<polygon points="30,18 105,70 30,70" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="35,70 35,65 30,65" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="67.5" y="77" class="vtx" text-anchor="middle">a</text>
<text x="23.5" y="46" class="vtx" text-anchor="middle">b</text>
<text x="70.6338" y="41.4801" class="vtx" text-anchor="middle">c</text>
<text x="23" y="76.5" class="vtx">C</text>
<text x="107.5" y="76.5" class="vtx">B</text>
<text x="23" y="16.5" class="vtx">A</text>
</svg>
<figcaption>Катети <b>a</b> і <b>b</b> — це сторони при прямому куті. Гіпотенуза <b>c</b> лежить проти нього й завжди найдовша.</figcaption>
</figure>
</div>

Один кут тут відомий **наперед**, ще до всіх умов задачі. Це головне, і з цього
випливає майже все далі: прямий кут — це елемент, який тобі вже подарували.

### Гострі кути дають у сумі 90°

$$\alpha + \beta = 90°$$

Сума кутів трикутника — $180°$, один із них забрав $90°$, на два інші лишилось
$90°$ на двох.

**Наслідок, який економить час:** гострий кут тут завжди **один**. Знаєш
один — знаєш і другий, віднявши від $90°$. Тому «дано гострий кут $30°$» і
«дано гострий кут $60°$» — це в прямокутному трикутнику **та сама умова**.

### Ознак рівності п'ять — і кожній досить двох елементів

Звичайним трикутникам потрібні **три** елементи. Прямокутним — **два**.

**Чому.** Бо третій елемент уже даний: прямий кут. Ознаки прямокутних — це не
нові правила, які треба вчити окремо. Це старі I, II, III, у яких прямий кут
підставили безкоштовно:

| Що дано | Це насправді | Чому |
|---|---|---|
| **два катети** | **I**: дві сторони + кут між ними | кут між катетами і є прямий |
| **катет і гіпотенуза** | **III**: три сторони | другий катет знайдеться за Піфагором |
| **катет і прилеглий гострий кут** | **II**: сторона + два прилеглих кути | другий прилеглий кут — прямий |
| **катет і протилежний гострий кут** | **II** | цей кут дає й другий: $90° - \alpha$ |
| **гіпотенуза і гострий кут** | **II** | другий кут при ній — теж відомий |

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за двома катетами">
<polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="13.8" y1="46.5" x2="18.2" y2="46.5" stroke="currentColor" stroke-width="1.2"/>
<line x1="13.8" y1="43.5" x2="18.2" y2="43.5" stroke="currentColor" stroke-width="1.2"/>
<text x="9.5" y="74" class="vtx">C</text>
<text x="78.5" y="74" class="vtx">B</text>
<text x="9.5" y="22" class="vtx">A</text>
<polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="109.8" y1="46.5" x2="114.2" y2="46.5" stroke="currentColor" stroke-width="1.2"/>
<line x1="109.8" y1="43.5" x2="114.2" y2="43.5" stroke="currentColor" stroke-width="1.2"/>
<text x="105.5" y="74" class="vtx">C₁</text>
<text x="174.5" y="74" class="vtx">B₁</text>
<text x="105.5" y="22" class="vtx">A₁</text>
</svg>
<figcaption><b>За двома катетами.</b> Рисочок різна кількість — сторони різні, і малюнок не стверджує, що вони рівні між собою.</figcaption>
</figure>
</div>

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за катетом і гіпотенузою">
<polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="46.0328" y1="42.3375" x2="43.5095" y2="45.9421" stroke="currentColor" stroke-width="1.2"/>
<line x1="48.4905" y1="44.0579" x2="45.9672" y2="47.6625" stroke="currentColor" stroke-width="1.2"/>
<text x="9.5" y="74" class="vtx">C</text>
<text x="78.5" y="74" class="vtx">B</text>
<text x="9.5" y="22" class="vtx">A</text>
<polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="142.033" y1="42.3375" x2="139.51" y2="45.9421" stroke="currentColor" stroke-width="1.2"/>
<line x1="144.49" y1="44.0579" x2="141.967" y2="47.6625" stroke="currentColor" stroke-width="1.2"/>
<text x="105.5" y="74" class="vtx">C₁</text>
<text x="174.5" y="74" class="vtx">B₁</text>
<text x="105.5" y="22" class="vtx">A₁</text>
</svg>
<figcaption><b>За катетом і гіпотенузою.</b> Тієї самої довжини катет і та сама гіпотенуза — і трикутники збігаються.</figcaption>
</figure>
</div>

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за катетом і прилеглим гострим кутом">
<polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 66.9884 59.6919 A 11 11 0 0 0 65 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
<line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<text x="9.5" y="74" class="vtx">C</text>
<text x="78.5" y="74" class="vtx">B</text>
<text x="9.5" y="22" class="vtx">A</text>
<polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 162.988 59.6919 A 11 11 0 0 0 161 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
<line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<text x="105.5" y="74" class="vtx">C₁</text>
<text x="174.5" y="74" class="vtx">B₁</text>
<text x="105.5" y="22" class="vtx">A₁</text>
</svg>
<figcaption><b>За катетом і прилеглим гострим кутом.</b> Кут позначений при тій вершині, до якої катет прилягає.</figcaption>
</figure>
</div>

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за катетом і протилежним гострим кутом">
<polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 16 35 A 11 11 0 0 0 25.0116 30.3081" fill="none" stroke="currentColor" stroke-width="1.2"/>
<line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<text x="9.5" y="74" class="vtx">C</text>
<text x="78.5" y="74" class="vtx">B</text>
<text x="9.5" y="22" class="vtx">A</text>
<polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 112 35 A 11 11 0 0 0 121.012 30.3081" fill="none" stroke="currentColor" stroke-width="1.2"/>
<line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<text x="105.5" y="74" class="vtx">C₁</text>
<text x="174.5" y="74" class="vtx">B₁</text>
<text x="105.5" y="22" class="vtx">A₁</text>
</svg>
<figcaption><b>За катетом і протилежним гострим кутом.</b> Той самий катет, але кут — при протилежній вершині.</figcaption>
</figure>
</div>

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за гіпотенузою і гострим кутом">
<polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 66.9884 59.6919 A 11 11 0 0 0 65 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
<line x1="47.2616" y1="43.1977" x2="44.7384" y2="46.8023" stroke="currentColor" stroke-width="1.2"/>
<text x="9.5" y="74" class="vtx">C</text>
<text x="78.5" y="74" class="vtx">B</text>
<text x="9.5" y="22" class="vtx">A</text>
<polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 162.988 59.6919 A 11 11 0 0 0 161 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
<line x1="143.262" y1="43.1977" x2="140.738" y2="46.8023" stroke="currentColor" stroke-width="1.2"/>
<text x="105.5" y="74" class="vtx">C₁</text>
<text x="174.5" y="74" class="vtx">B₁</text>
<text x="105.5" y="22" class="vtx">A₁</text>
</svg>
<figcaption><b>За гіпотенузою і гострим кутом.</b> Рисочка тепер на гіпотенузі, а не на катеті.</figcaption>
</figure>
</div>

**Пастка.** Двох **кутів** не досить ніколи. Два гострі кути в прямокутному —
це насправді **один** кут (другий рахується з нього), а самі кути про розмір
не кажуть нічого. Такі трикутники **подібні**, але не рівні. Щоб була
рівність, серед двох елементів мусить бути хоча б **одна сторона**.

### Ознак подібності три — і це ті самі три

Та сама історія, тільки м'якша: замість «рівні» — «пропорційні».

| Що дано | Це насправді |
|---|---|
| **один гострий кут** | **II**: два кути — бо другий, прямий, у них уже спільний |
| **два катети пропорційні** | **I**: дві сторони + кут між ними |
| **катет і гіпотенуза пропорційні** | **III**: три сторони — третій катет підтягнеться за Піфагором |

<div class="figure-wide">
<figure>
<svg viewBox="0 0 178 80" class="pair" role="img" aria-label="Ознака подібності прямокутних трикутників за одним гострим кутом">
<polygon points="14,35 58,66 14,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="18.2,66 18.2,61.8 14,61.8" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 51.4601 61.3924 A 8 8 0 0 0 50 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
<polygon points="100,20.9091 164,66 100,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="105.4,66 105.4,60.6 100,60.6" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 155.825 60.2405 A 10 10 0 0 0 154 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
<figcaption><b>За одним гострим кутом.</b> Форма та сама, розмір інший: одного гострого кута досить, бо прямий у них спільний.</figcaption>
</figure>
</div>

<div class="figure-wide">
<figure>
<svg viewBox="0 0 178 80" class="pair" role="img" aria-label="Ознака подібності прямокутних трикутників за пропорційністю двох катетів">
<polygon points="14,35 58,66 14,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="18.2,66 18.2,61.8 14,61.8" fill="none" stroke="currentColor" stroke-width="0.9"/>
<polygon points="100,20.9091 164,66 100,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="105.4,66 105.4,60.6 100,60.6" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="36" y="74.5" class="vtx" text-anchor="middle">a</text>
<text x="9" y="53" class="vtx" text-anchor="middle">b</text>
<text x="132" y="74.5" class="vtx" text-anchor="middle">ka</text>
<text x="95" y="45.9545" class="vtx" text-anchor="middle">kb</text>
</svg>
<figcaption><b>За пропорційністю двох катетів.</b> Обидва катети більші в те саме число разів, а кут між ними — прямий в обох.</figcaption>
</figure>
</div>

<div class="figure-wide">
<figure>
<svg viewBox="0 0 178 80" class="pair" role="img" aria-label="Ознака подібності прямокутних трикутників за пропорційністю катета і гіпотенузи">
<polygon points="14,35 58,66 14,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="18.2,66 18.2,61.8 14,61.8" fill="none" stroke="currentColor" stroke-width="0.9"/>
<polygon points="100,20.9091 164,66 100,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="105.4,66 105.4,60.6 100,60.6" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="36" y="74.5" class="vtx" text-anchor="middle">a</text>
<text x="40.0918" y="47.8213" class="vtx" text-anchor="middle">c</text>
<text x="132" y="74.5" class="vtx" text-anchor="middle">ka</text>
<text x="136.092" y="40.7759" class="vtx" text-anchor="middle">kc</text>
</svg>
<figcaption><b>За пропорційністю катета і гіпотенузи.</b> Другий катет міряти не треба — він виходить пропорційним сам.</figcaption>
</figure>
</div>

### Теорема Піфагора

$$a^2 + b^2 = c^2$$

**Сума квадратів катетів дорівнює квадрату гіпотенузи.**

<div class="figure-wide">
<figure>
<svg viewBox="0 0 122 122" class="compact" role="img" aria-label="Теорема Піфагора: на сторонах прямокутного трикутника побудовані квадрати, сума площ квадратів на катетах дорівнює площі квадрата на гіпотенузі">
<polygon points="45,75 85,75 85,115 45,115" fill="currentColor" opacity="0.1"/>
<polygon points="45,75 85,75 85,115 45,115" fill="none" stroke="currentColor" stroke-width="1.0"/>
<polygon points="45,45 45,75 15,75 15,45" fill="currentColor" opacity="0.1"/>
<polygon points="45,45 45,75 15,75 15,45" fill="none" stroke="currentColor" stroke-width="1.0"/>
<polygon points="85,75 45,45 75,5 115,35" fill="currentColor" opacity="0.22"/>
<polygon points="85,75 45,45 75,5 115,35" fill="none" stroke="currentColor" stroke-width="1.0"/>
<polygon points="45,45 85,75 45,75" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="50,75 50,70 45,70" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="65" y="97.3" class="vtx" text-anchor="middle">a²</text>
<text x="30" y="62.3" class="vtx" text-anchor="middle">b²</text>
<text x="80" y="42.3" class="vtx" text-anchor="middle">c²</text>
</svg>
<figcaption>Слово «квадрат» тут можна розуміти буквально: два світлі квадрати на катетах разом дають рівно стільки площі, скільки темний на гіпотенузі. Трикутник — 3-4-5, тож <b>9 + 16 = 25</b>.</figcaption>
</figure>
</div>

**Обернена теорема теж правдива**, і це окремий інструмент. Якщо для сторін
$a$, $b$, $c$ виконується

$$a^2 + b^2 = c^2,$$

то трикутник **прямокутний**, причому $c$ — гіпотенуза. Тобто Піфагора можна
читати в обидва боки: пряма теорема рахує сторону, обернена **розпізнає**
прямий кут за трьома числами, нічого не міряючи.

Найвідоміша трійка — $3$, $4$, $5$: $9 + 16 = 25$. Ще $5$, $12$, $13$
і $8$, $15$, $17$.

### Співвідношення між сторонами і кутами

Поки що ми знали лише «проти більшого кута — більша сторона». Тут зв'язок стає
**числом**: у прямокутному трикутнику кожен гострий кут задає **відношення**
сторін.

| | Через сторони | Словами |
|---|---|---|
| $\sin\alpha$ | $\dfrac{a}{c}$ | протилежний катет до гіпотенузи |
| $\cos\alpha$ | $\dfrac{b}{c}$ | прилеглий катет до гіпотенузи |
| $\operatorname{tg}\alpha$ | $\dfrac{a}{b}$ | протилежний катет до прилеглого |
| $\operatorname{ctg}\alpha$ | $\dfrac{b}{a}$ | прилеглий катет до протилежного |

Тут $\alpha$ — кут при вершині $A$, а $a$ — катет **проти** нього.

**Чому синус гострого кута завжди менший за 1.** Бо це катет, поділений на
гіпотенузу, а гіпотенуза завжди довша. Дріб, у якого чисельник менший за
знаменник, більшим за одиницю не буває.

**Один кут — дві назви.** Катет, протилежний до $\alpha$, є прилеглим
до $\beta$. А $\beta = 90° - \alpha$. Звідси:

$$\sin\alpha = \cos(90° - \alpha), \qquad \cos\alpha = \sin(90° - \alpha)$$

$$\operatorname{tg}\alpha = \operatorname{ctg}(90° - \alpha), \qquad
\operatorname{ctg}\alpha = \operatorname{tg}(90° - \alpha)$$

Це не нові формули — це **той самий дріб, названий з іншого боку**. Один і той
самий катет для одного кута протилежний, а для другого прилеглий; звідси й
«ко-» в назві косинуса.

### Проєкції катетів: усе з однієї подібності

Проведи висоту до **гіпотенузи**. Вона розріже трикутник на два менші — і обидва
будуть **подібні до вихідного** (у кожного прямий кут і спільний гострий кут із
великим, а це вже ознака подібності).

<div class="figure-wide">
<figure>
<svg viewBox="0 0 130 88" class="compact" role="img" aria-label="Висота, проведена до гіпотенузи прямокутного трикутника, ділить її на дві проєкції катетів">
<polygon points="15,72 115,72 45,26.1742" fill="none" stroke="currentColor" stroke-width="1.6"/>
<line x1="45" y1="26.1742" x2="45" y2="72" stroke="currentColor" stroke-width="1.3"/>
<polyline points="42.2614,30.3575 46.4447,33.0962 49.1833,28.9129" fill="none" stroke="currentColor" stroke-width="0.9"/>
<polyline points="49,72 49,68 45,68" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="26" y="48.0871" class="vtx" text-anchor="middle">b</text>
<text x="83.5" y="48.0871" class="vtx" text-anchor="middle">a</text>
<text x="42" y="51.0871" class="vtx" text-anchor="middle">h</text>
<text x="30" y="79.5" class="vtx" text-anchor="middle">b<tspan font-size="70%" dy="1.2">c</tspan></text>
<text x="80" y="79.5" class="vtx" text-anchor="middle">a<tspan font-size="70%" dy="1.2">c</tspan></text>
<text x="9.5" y="76" class="vtx">A</text>
<text x="117" y="76" class="vtx">B</text>
<text x="43" y="23.6742" class="vtx">C</text>
<text x="47" y="79.5" class="vtx">H</text>
</svg>
<figcaption>Висота <b>h</b> ділить гіпотенузу на дві частини: <b>b<tspan font-size='70%'>c</tspan></b> — проєкція катета <b>b</b>, <b>a<tspan font-size='70%'>c</tspan></b> — проєкція катета <b>a</b>. Три трикутники на малюнку подібні між собою.</figcaption>
</figure>
</div>

**Проєкція катета** — це тінь, яку він відкидає на гіпотенузу; той шматок
гіпотенузи, що прилягає до нього.

З цієї подібності випливає все далі. Кожен **катет** — середнє пропорційне між
гіпотенузою і своєю проєкцією:

$$a^2 = a_c \cdot c, \qquad b^2 = b_c \cdot c$$

А **висота** — середнє пропорційне між двома проєкціями:

$$h^2 = a_c \cdot b_c$$

Висоту можна взяти й через сторони:

$$h = \frac{ab}{c} = \frac{a_c \, b_c}{a_c + b_c}$$

**Звідки $h = \frac{ab}{c}$** — без жодної подібності. Площу цього трикутника
можна порахувати двічі: через катети ($S = \frac{1}{2}ab$) і через гіпотенузу
з висотою до неї ($S = \frac{1}{2}ch$). Це те саме число, тому $ab = ch$.

Три формули, а запам'ятовувати треба одну думку: **квадрат — це добуток двох
сусідів**. Катет стоїть між гіпотенузою і своєю проєкцією, висота — між двома
проєкціями.

### Окремі випадки: 30-60-90 і 45-45-90

Два трикутники, у яких нічого рахувати не треба — усе відомо з однієї сторони.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Два окремі випадки з однаковою гіпотенузою: трикутник з кутами 30 і 60 градусів і рівнобедрений прямокутний трикутник з кутами по 45 градусів">
<polygon points="22,40 73.9615,70 22,70" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="27,70 27,65 22,65" fill="none" stroke="currentColor" stroke-width="0.9"/>
<polygon points="121,27.5736 163.426,70 121,70" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="126,70 126,65 121,65" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="47.8815" y="65.8119" class="vtx" text-anchor="middle">30°</text>
<text x="29.5" y="55.7904" class="vtx" text-anchor="middle">60°</text>
<text x="128.654" y="48.8512" class="vtx" text-anchor="middle">45°</text>
<text x="144.949" y="65.1463" class="vtx" text-anchor="middle">45°</text>
<text x="16.5" y="57.5" class="vtx" text-anchor="middle">a</text>
<text x="47.9808" y="78.5" class="vtx" text-anchor="middle">b</text>
<text x="115.5" y="51.2868" class="vtx" text-anchor="middle">a</text>
<text x="142.213" y="78.5" class="vtx" text-anchor="middle">a</text>
<text x="51.4808" y="52.1699" class="vtx" text-anchor="middle">c</text>
<text x="146.749" y="46.7513" class="vtx" text-anchor="middle">c</text>
</svg>
<figcaption>Гіпотенуза в обох однакова, а трикутники різні. Ліворуч катети <b>c/2</b> і <b>c√3/2</b>, праворуч — обидва по <b>c/√2</b>.</figcaption>
</figure>
</div>

| | Катет проти 30° | Катет проти 60° | Катети при 45° |
|---|---|---|---|
| **30-60-90** | $a = \dfrac{c}{2}$ | $b = \dfrac{c\sqrt{3}}{2}$ | — |
| **45-45-90** | — | — | $a = \dfrac{c}{\sqrt{2}}$ |

**Звідки береться $\frac{c}{2}$.** Це не новий факт. Візьми рівносторонній
трикутник зі стороною $c$ і проведи висоту — вона розділить його на **два
трикутники 30-60-90**. Гіпотенузою кожного стала бічна сторона $c$, а меншим
катетом — половина основи, тобто $\frac{c}{2}$. Ось і все.

**А 45-45-90 — це рівнобедрений прямокутний.** Катети рівні, бо лежать проти
рівних кутів. Гіпотенуза за Піфагором: $c^2 = a^2 + a^2 = 2a^2$, отже
$c = a\sqrt{2}$ — і навпаки, $a = \frac{c}{\sqrt{2}}$.

**Звідси ж читаються й значення тригонометрії.** Їх не треба вчити окремим
списком — це просто сторони цих двох трикутників, поділені одна на одну:

| | $30°$ | $45°$ | $60°$ |
|---|---|---|---|
| $\sin$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ |
| $\cos$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ |
| $\operatorname{tg}$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |

Подивись на рядки $\sin$ і $\cos$: вони **дзеркальні**. Це та сама пара
$\alpha$ і $90° - \alpha$, про яку йшлося вище, тільки в числах.

### Обидва кола: центр описаного видно оком

<div class="figure-wide">
<figure>
<svg viewBox="0 0 130 120" class="compact" role="img" aria-label="Описане коло прямокутного трикутника: його центр лежить на середині гіпотенузи, а радіус дорівнює половині гіпотенузи">
<circle cx="65" cy="66" r="45" fill="none" stroke="currentColor" stroke-width="1.1"/>
<polygon points="20,66 110,66 43.8738,26.2674" fill="none" stroke="currentColor" stroke-width="1.6"/>
<line x1="65" y1="66" x2="43.8738" y2="26.2674" stroke="currentColor" stroke-width="1.3"/>
<polyline points="41.2986,30.5532 45.5844,33.1284 48.1596,28.8425" fill="none" stroke="currentColor" stroke-width="0.9"/>
<circle cx="65" cy="66" r="1.7" fill="currentColor"/>
<line x1="42.5" y1="63.8" x2="42.5" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<line x1="87.5" y1="63.8" x2="87.5" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
<text x="12.5" y="68.8" class="vtx" text-anchor="middle">A</text>
<text x="117.5" y="68.8" class="vtx" text-anchor="middle">B</text>
<text x="40.3527" y="22.4453" class="vtx" text-anchor="middle">C</text>
<text x="64" y="75" class="vtx">O</text>
<text x="58.8516" y="45.7863" class="vtx" text-anchor="middle">R</text>
</svg>
<figcaption>Центр <b>O</b> сидить рівно на середині гіпотенузи, і вона стає діаметром. Відрізок <b>OC</b> — це одразу й радіус, і медіана до гіпотенузи.</figcaption>
</figure>
</div>

$$R = \frac{c}{2} = m_c$$

Що $R$ — половина гіпотенузи, вже було у «Вписаному і описаному колах». Нове
тут — друга рівність: **медіана, проведена до гіпотенузи, дорівнює радіусу**.
І це не збіг, а той самий відрізок: медіана йде з вершини $C$ у середину
гіпотенузи, а середина гіпотенузи — це і є центр. Тобто медіана $CO$ — це
радіус $OC$.

Звідси зручний наслідок: **медіана до гіпотенузи дорівнює її половині**. Вершина
прямого кута лежить на колі, тож вона рівновіддалена від обох кінців гіпотенузи
рівно на $R$.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 118 112" class="compact" role="img" aria-label="Вписане коло прямокутного трикутника торкається обох катетів і гіпотенузи, його радіус дорівнює половині різниці суми катетів і гіпотенузи">
<polygon points="22,40 102,100 22,100" fill="none" stroke="currentColor" stroke-width="1.6"/>
<circle cx="42" cy="80" r="20" fill="none" stroke="currentColor" stroke-width="1.1"/>
<polyline points="26.5,100 26.5,95.5 22,95.5" fill="none" stroke="currentColor" stroke-width="0.9"/>
<circle cx="42" cy="80" r="1.5" fill="currentColor"/>
<line x1="42" y1="80" x2="42" y2="100" stroke="currentColor" stroke-width="1.0"/>
<polyline points="45,100 45,97 42,97" fill="none" stroke="currentColor" stroke-width="0.9"/>
<text x="62" y="108" class="vtx" text-anchor="middle">a</text>
<text x="15.5" y="72" class="vtx" text-anchor="middle">b</text>
<text x="66.8" y="67.6" class="vtx" text-anchor="middle">c</text>
<text x="46" y="92" class="vtx" text-anchor="middle">r</text>
<text x="37" y="78" class="vtx">O</text>
<text x="16.5" y="105" class="vtx">C</text>
<text x="104.5" y="105" class="vtx">B</text>
<text x="16.5" y="38" class="vtx">A</text>
</svg>
<figcaption>Вписане коло торкається обох катетів і гіпотенузи. Від вершини прямого кута до точок дотику — рівно <b>r</b> в обидва боки: там квадрат.</figcaption>
</figure>
</div>

$$r = \frac{a + b - c}{2} = \frac{ab}{a + b + c}$$

**Чому $r = \frac{a + b - c}{2}$.** Коло торкається обох катетів, а від вершини
прямого кута до обох точок дотику — по $r$ (кут прямий, тож там виходить
квадрат зі стороною $r$). Решта катетів — це $a - r$ і $b - r$, і вони теж є
дотичними. А відрізки дотичних з однієї точки рівні, тому ці два шматки разом
складають усю гіпотенузу:

$$(a - r) + (b - r) = c \implies r = \frac{a + b - c}{2}$$

Друга формула — це стара $r = \frac{S}{p}$, у яку підставили $S = \frac{1}{2}ab$
і $p = \frac{a + b + c}{2}$. Нічого нового, просто коротший шлях.

### Площа: висота вже намальована

$$S = \frac{1}{2}ab$$

**Шукати висоту не треба — вона вже є.** Кожен катет перпендикулярний до
другого, отже кожен катет **і є висотою** до другого. Це та сама
$S = \frac{1}{2}ah$ з «Площі трикутника», просто тут $h$ збіглася з катетом.

<div class="figure-wide">
<figure>
<svg viewBox="0 0 130 88" class="compact" role="img" aria-label="Прямокутний трикутник із позначеними гострими кутами альфа при вершині A і бета при вершині B: катет a лежить проти альфа, катет b проти бета">
<polygon points="30,18 105,70 30,70" fill="none" stroke="currentColor" stroke-width="1.6"/>
<polyline points="35,70 35,65 30,65" fill="none" stroke="currentColor" stroke-width="0.9"/>
<path d="M 30 27 A 9 9 0 0 0 37.3962 23.128" fill="none" stroke="currentColor" stroke-width="1.2"/>
<path d="M 99.6583 66.2964 A 6.5 6.5 0 0 0 98.5 70" fill="none" stroke="currentColor" stroke-width="1.2"/>
<path d="M 98.0969 65.2139 A 8.4 8.4 0 0 0 96.6 70" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="67.5" y="77" class="vtx" text-anchor="middle">a</text>
<text x="23.5" y="46" class="vtx" text-anchor="middle">b</text>
<text x="70.6338" y="41.4801" class="vtx" text-anchor="middle">c</text>
<text x="23" y="76.5" class="vtx">C</text>
<text x="107.5" y="76.5" class="vtx">B</text>
<text x="23" y="16.5" class="vtx">A</text>
<text x="35.5656" y="30.9063" class="vtx" text-anchor="middle">α</text>
<text x="90.6838" y="67.7975" class="vtx" text-anchor="middle">β</text>
</svg>
<figcaption>Проти <b>α</b> лежить катет <b>a</b>, проти <b>β</b> — катет <b>b</b>. У формулах через кути важливо не переплутати саме це. Дуг різна кількість, бо й кути різні: рівності вони не стверджують.</figcaption>
</figure>
</div>

Якщо замість другого катета дано кут, його можна виразити:

$$S = \frac{1}{2}a^2 \operatorname{tg}\beta = \frac{1}{2}a^2 \operatorname{ctg}\alpha$$

$$S = \frac{1}{4}c^2 \sin 2\alpha = \frac{1}{4}c^2 \sin 2\beta$$

Це не нові формули, а $S = \frac{1}{2}ab$, у якій $b$ замінили на те, чому воно
дорівнює: $b = a\operatorname{tg}\beta$ у першому випадку, $a = c\sin\alpha$ і
$b = c\cos\alpha$ — у другому.

## Картки

### Який трикутник називають прямокутним?

Той, у якого один кут **прямий**.

### Чому в прямокутному трикутнику досить знати один гострий кут?

Бо другий рахується з нього: $90° - \alpha$.

Прямий кут забрав $90°$ із $180°$, і на два гострі лишилось $90°$ на двох.

### Гострий кут прямокутного трикутника дорівнює 32°. Чому дорівнює другий?

$$90° - 32° = 58°$$

### Скільки елементів треба, щоб довести рівність двох прямокутних трикутників?

**Два** — замість трьох.

Третій уже даний: прямий кут.

### Скільки ознак рівності мають прямокутні трикутники?

**П'ять.**

За двома катетами; за катетом і гіпотенузою; за катетом і прилеглим гострим
кутом; за катетом і протилежним гострим кутом; за гіпотенузою і гострим кутом.

### Чи це нові ознаки, яких не було у звичайних трикутників?

**Ні.** Це старі **I**, **II** і **III**, у які прямий кут підставили безкоштовно.

«За двома катетами» — це I ознака: кут між катетами і є прямий.

### Два прямокутні трикутники мають по два рівних гострих кути. Чи вони рівні?

**Ні** — лише **подібні**.

Кути про розмір не кажуть нічого. Серед двох елементів мусить бути хоча б
**одна сторона**.

### Яка це ознака рівності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за катетом і гіпотенузою">
  <polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="46.0328" y1="42.3375" x2="43.5095" y2="45.9421" stroke="currentColor" stroke-width="1.2"/>
  <line x1="48.4905" y1="44.0579" x2="45.9672" y2="47.6625" stroke="currentColor" stroke-width="1.2"/>
  <text x="9.5" y="74" class="vtx">C</text>
  <text x="78.5" y="74" class="vtx">B</text>
  <text x="9.5" y="22" class="vtx">A</text>
  <polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="142.033" y1="42.3375" x2="139.51" y2="45.9421" stroke="currentColor" stroke-width="1.2"/>
  <line x1="144.49" y1="44.0579" x2="141.967" y2="47.6625" stroke="currentColor" stroke-width="1.2"/>
  <text x="105.5" y="74" class="vtx">C₁</text>
  <text x="174.5" y="74" class="vtx">B₁</text>
  <text x="105.5" y="22" class="vtx">A₁</text>
  </svg>
  </figure>
</div>

---

**За катетом і гіпотенузою.**

Насправді це III ознака — три сторони: другий катет знайдеться за Піфагором.

### Яка це ознака рівності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за двома катетами">
  <polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="13.8" y1="46.5" x2="18.2" y2="46.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="13.8" y1="43.5" x2="18.2" y2="43.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="9.5" y="74" class="vtx">C</text>
  <text x="78.5" y="74" class="vtx">B</text>
  <text x="9.5" y="22" class="vtx">A</text>
  <polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="109.8" y1="46.5" x2="114.2" y2="46.5" stroke="currentColor" stroke-width="1.2"/>
  <line x1="109.8" y1="43.5" x2="114.2" y2="43.5" stroke="currentColor" stroke-width="1.2"/>
  <text x="105.5" y="74" class="vtx">C₁</text>
  <text x="174.5" y="74" class="vtx">B₁</text>
  <text x="105.5" y="22" class="vtx">A₁</text>
  </svg>
  </figure>
</div>

---

**За двома катетами.**

Це I ознака: дві сторони й кут між ними — а кут між катетами і є прямий.

### Яка це ознака рівності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за катетом і прилеглим гострим кутом">
  <polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 66.9884 59.6919 A 11 11 0 0 0 65 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <text x="9.5" y="74" class="vtx">C</text>
  <text x="78.5" y="74" class="vtx">B</text>
  <text x="9.5" y="22" class="vtx">A</text>
  <polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 162.988 59.6919 A 11 11 0 0 0 161 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <text x="105.5" y="74" class="vtx">C₁</text>
  <text x="174.5" y="74" class="vtx">B₁</text>
  <text x="105.5" y="22" class="vtx">A₁</text>
  </svg>
  </figure>
</div>

---

**За катетом і прилеглим гострим кутом.**

Кут позначений при вершині $B$ — тій, до якої катет прилягає.

### Яка це ознака рівності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за катетом і протилежним гострим кутом">
  <polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 16 35 A 11 11 0 0 0 25.0116 30.3081" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="46" y1="63.8" x2="46" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <text x="9.5" y="74" class="vtx">C</text>
  <text x="78.5" y="74" class="vtx">B</text>
  <text x="9.5" y="22" class="vtx">A</text>
  <polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 112 35 A 11 11 0 0 0 121.012 30.3081" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="142" y1="63.8" x2="142" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <text x="105.5" y="74" class="vtx">C₁</text>
  <text x="174.5" y="74" class="vtx">B₁</text>
  <text x="105.5" y="22" class="vtx">A₁</text>
  </svg>
  </figure>
</div>

---

**За катетом і протилежним гострим кутом.**

Катет той самий, але кут — при вершині $A$, навпроти нього.

### Яка це ознака рівності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Ознака рівності прямокутних трикутників за гіпотенузою і гострим кутом">
  <polygon points="16,24 76,66 16,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="21,66 21,61 16,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 66.9884 59.6919 A 11 11 0 0 0 65 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="47.2616" y1="43.1977" x2="44.7384" y2="46.8023" stroke="currentColor" stroke-width="1.2"/>
  <text x="9.5" y="74" class="vtx">C</text>
  <text x="78.5" y="74" class="vtx">B</text>
  <text x="9.5" y="22" class="vtx">A</text>
  <polygon points="112,24 172,66 112,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="117,66 117,61 112,61" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 162.988 59.6919 A 11 11 0 0 0 161 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <line x1="143.262" y1="43.1977" x2="140.738" y2="46.8023" stroke="currentColor" stroke-width="1.2"/>
  <text x="105.5" y="74" class="vtx">C₁</text>
  <text x="174.5" y="74" class="vtx">B₁</text>
  <text x="105.5" y="22" class="vtx">A₁</text>
  </svg>
  </figure>
</div>

---

**За гіпотенузою і гострим кутом.**

Дивись, де стоїть рисочка: цього разу на **гіпотенузі**, а не на катеті.

### Чому «за катетом і прилеглим гострим кутом» і «за катетом і протилежним гострим кутом» — майже одне й те саме?

Бо гострий кут у прямокутному трикутнику **один**: другий випливає з нього.

Різниця лише в тому, при якій вершині його позначили. Обидві зводяться до
II ознаки.

### У двох прямокутних трикутників рівні гіпотенузи і по гострому куту 40°. Рівні?

**Так** — за гіпотенузою і гострим кутом.

### Скільки ознак подібності мають прямокутні трикутники?

**Три:** за одним гострим кутом; за пропорційністю двох катетів; за
пропорційністю катета і гіпотенузи.

### Чому двом прямокутним трикутникам досить **одного** рівного гострого кута, щоб бути подібними?

Бо другий кут у них **уже спільний** — прямий.

Один гострий + один прямий = два кути, а це II ознака подібності.

### Катети одного трикутника 3 і 4, другого — 6 і 8. Чи подібні вони?

**Так**, з $k = 2$.

Обидва катети більші вдвічі, а кут між ними прямий в обох — це I ознака
подібності.

### Чи подібні між собою всі рівнобедрені прямокутні трикутники?

**Так, усі.**

Кути в них однакові завжди: $90°$, $45°$, $45°$. А одного гострого кута вже
досить.

### Яка це ознака подібності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 178 80" class="pair" role="img" aria-label="Ознака подібності прямокутних трикутників за одним гострим кутом">
  <polygon points="14,35 58,66 14,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="18.2,66 18.2,61.8 14,61.8" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 51.4601 61.3924 A 8 8 0 0 0 50 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <polygon points="100,20.9091 164,66 100,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="105.4,66 105.4,60.6 100,60.6" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <path d="M 155.825 60.2405 A 10 10 0 0 0 154 66" fill="none" stroke="currentColor" stroke-width="1.2"/>
  </svg>
  </figure>
</div>

---

**За одним гострим кутом.**

Трикутники різного розміру, а форма та сама. Другий кут у них уже спільний —
прямий, тож це II ознака подібності.

### Яка це ознака подібності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 178 80" class="pair" role="img" aria-label="Ознака подібності прямокутних трикутників за пропорційністю двох катетів">
  <polygon points="14,35 58,66 14,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="18.2,66 18.2,61.8 14,61.8" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <polygon points="100,20.9091 164,66 100,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="105.4,66 105.4,60.6 100,60.6" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <text x="36" y="74.5" class="vtx" text-anchor="middle">a</text>
  <text x="9" y="53" class="vtx" text-anchor="middle">b</text>
  <text x="132" y="74.5" class="vtx" text-anchor="middle">ka</text>
  <text x="95" y="45.9545" class="vtx" text-anchor="middle">kb</text>
  </svg>
  </figure>
</div>

---

**За пропорційністю двох катетів.**

Обидва катети більші в те саме число разів, а кут між ними прямий в обох —
це I ознака.

### Яка це ознака подібності?

<div class="figures">
  <figure>
  <svg viewBox="0 0 178 80" class="pair" role="img" aria-label="Ознака подібності прямокутних трикутників за пропорційністю катета і гіпотенузи">
  <polygon points="14,35 58,66 14,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="18.2,66 18.2,61.8 14,61.8" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <polygon points="100,20.9091 164,66 100,66" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="105.4,66 105.4,60.6 100,60.6" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <text x="36" y="74.5" class="vtx" text-anchor="middle">a</text>
  <text x="40.0918" y="47.8213" class="vtx" text-anchor="middle">c</text>
  <text x="132" y="74.5" class="vtx" text-anchor="middle">ka</text>
  <text x="136.092" y="40.7759" class="vtx" text-anchor="middle">kc</text>
  </svg>
  </figure>
</div>

---

**За пропорційністю катета і гіпотенузи.**

Другий катет міряти не треба: за Піфагором він виходить пропорційним сам.

### Сформулюй теорему Піфагора.

**Сума квадратів катетів дорівнює квадрату гіпотенузи.**

$$a^2 + b^2 = c^2$$

### Що стверджує цей малюнок?

<div class="figures">
  <figure>
  <svg viewBox="0 0 122 122" class="compact" role="img" aria-label="Теорема Піфагора: на сторонах прямокутного трикутника побудовані квадрати, сума площ квадратів на катетах дорівнює площі квадрата на гіпотенузі">
  <polygon points="45,75 85,75 85,115 45,115" fill="currentColor" opacity="0.1"/>
  <polygon points="45,75 85,75 85,115 45,115" fill="none" stroke="currentColor" stroke-width="1.0"/>
  <polygon points="45,45 45,75 15,75 15,45" fill="currentColor" opacity="0.1"/>
  <polygon points="45,45 45,75 15,75 15,45" fill="none" stroke="currentColor" stroke-width="1.0"/>
  <polygon points="85,75 45,45 75,5 115,35" fill="currentColor" opacity="0.22"/>
  <polygon points="85,75 45,45 75,5 115,35" fill="none" stroke="currentColor" stroke-width="1.0"/>
  <polygon points="45,45 85,75 45,75" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="50,75 50,70 45,70" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <text x="65" y="97.3" class="vtx" text-anchor="middle">a²</text>
  <text x="30" y="62.3" class="vtx" text-anchor="middle">b²</text>
  <text x="80" y="42.3" class="vtx" text-anchor="middle">c²</text>
  </svg>
  </figure>
</div>

---

**Теорему Піфагора** — буквально.

Два світлі квадрати на катетах разом дають рівно стільки площі, скільки темний
квадрат на гіпотенузі: $9 + 16 = 25$.

### Катети 3 і 4. Знайди гіпотенузу.

$$c^2 = 3^2 + 4^2 = 25 \implies c = 5$$

### Катет 6, гіпотенуза 10. Знайди другий катет.

$$b^2 = 10^2 - 6^2 = 64 \implies b = 8$$

Гіпотенуза стоїть із **мінусом**: вона найдовша, і від її квадрата віднімають.

### Катети по 1. Знайди гіпотенузу.

$$c^2 = 1 + 1 = 2 \implies c = \sqrt{2} \approx 1{,}4$$

### Сформулюй теорему, обернену до теореми Піфагора.

Якщо $a^2 + b^2 = c^2$, то трикутник **прямокутний**, а $c$ — гіпотенуза.

Це інструмент **розпізнавання**: прямий кут видно з трьох чисел, нічого не
міряючи.

### Сторони трикутника 5, 12, 13. Чи прямокутний він?

**Так.**

$$5^2 + 12^2 = 25 + 144 = 169 = 13^2$$

### Сторони трикутника 4, 5, 6. Чи прямокутний він?

**Ні.**

$$4^2 + 5^2 = 41, \qquad 6^2 = 36$$

$41 \neq 36$ — рівність не виконується.

### Чи можна застосувати теорему Піфагора до будь-якого трикутника?

**Ні** — тільки до прямокутного.

Без прямого кута рівність не виконується, і саме тому обернена теорема вміє
його розпізнавати.

### Чому дорівнює синус гострого кута прямокутного трикутника?

$$\sin\alpha = \frac{a}{c}$$

Протилежний катет поділити на гіпотенузу.

### Чому дорівнює косинус гострого кута прямокутного трикутника?

$$\cos\alpha = \frac{b}{c}$$

Прилеглий катет поділити на гіпотенузу.

### Чому дорівнює тангенс гострого кута прямокутного трикутника?

$$\operatorname{tg}\alpha = \frac{a}{b}$$

Протилежний катет поділити на прилеглий. Гіпотенуза тут не бере участі.

### Чому дорівнює котангенс гострого кута прямокутного трикутника?

$$\operatorname{ctg}\alpha = \frac{b}{a}$$

Прилеглий до протилежного — тангенс навпаки.

### Чи може синус гострого кута дорівнювати 1,2?

**Ніколи.**

Синус — це катет, поділений на гіпотенузу, а гіпотенуза завжди довша. Дріб
виходить менший за одиницю.

### Катет 3, гіпотенуза 5. Чому дорівнює синус кута, що лежить проти цього катета?

$$\sin\alpha = \frac{3}{5} = 0{,}6$$

### Чому $\sin\alpha = \cos(90° - \alpha)$?

Бо це **той самий дріб**, названий з іншого боку.

Катет, протилежний до $\alpha$, є прилеглим до $\beta = 90° - \alpha$. Для одного
кута він «протилежний», для другого — «прилеглий», а сторона та сама.

### Чому дорівнює $\operatorname{tg}\alpha$ через котангенс другого гострого кута?

$$\operatorname{tg}\alpha = \operatorname{ctg}(90° - \alpha)$$

Та сама історія, що й із синусом: сторони ті самі, змінюється лише, з якого
кута дивишся.

### Що таке проєкція катета на гіпотенузу?

Це його **тінь** на гіпотенузі — той її шматок, що прилягає до катета.

Висота, проведена до гіпотенузи, ділить її рівно на дві проєкції.

### Що спільного у трьох трикутників на цьому малюнку?

<div class="figures">
  <figure>
  <svg viewBox="0 0 130 88" class="compact" role="img" aria-label="Висота, проведена до гіпотенузи прямокутного трикутника, ділить її на дві проєкції катетів">
  <polygon points="15,72 115,72 45,26.1742" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="45" y1="26.1742" x2="45" y2="72" stroke="currentColor" stroke-width="1.3"/>
  <polyline points="42.2614,30.3575 46.4447,33.0962 49.1833,28.9129" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <polyline points="49,72 49,68 45,68" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <text x="9.5" y="76" class="vtx">A</text>
  <text x="117" y="76" class="vtx">B</text>
  <text x="43" y="23.6742" class="vtx">C</text>
  <text x="43.5" y="79.5" class="vtx">H</text>
  </svg>
  </figure>
</div>

---

Вони **всі троє подібні**.

Висота до гіпотенузи розрізає трикутник на два менші, і в кожного з них прямий
кут та спільний гострий кут із великим. Звідси й ростуть усі формули проєкцій.

### Чому дорівнює квадрат висоти, проведеної до гіпотенузи?

$$h^2 = a_c \cdot b_c$$

Добутку **двох проєкцій**. Висота — середнє пропорційне між ними.

### Чому дорівнює квадрат катета через його проєкцію?

$$a^2 = a_c \cdot c$$

Добутку гіпотенузи і **своєї** проєкції. Катет — середнє пропорційне між ними.

### Проєкції катетів на гіпотенузу — 9 і 16. Знайди висоту.

$$h^2 = 9 \cdot 16 = 144 \implies h = 12$$

### Проєкції катетів 9 і 16. Знайди гіпотенузу і обидва катети.

$$c = 9 + 16 = 25$$

$$a^2 = 16 \cdot 25 = 400 \implies a = 20, \qquad b^2 = 9 \cdot 25 = 225 \implies b = 15$$

Перевірка: $15^2 + 20^2 = 625 = 25^2$. Сходиться.

### Чому дорівнює висота, проведена до гіпотенузи, через катети?

$$h = \frac{ab}{c}$$

### Чому $h = \frac{ab}{c}$?

Бо площу можна порахувати **двічі**.

Через катети: $S = \frac{1}{2}ab$. Через гіпотенузу і висоту до неї:
$S = \frac{1}{2}ch$. Це те саме число, отже $ab = ch$.

### Катети 6 і 8. Знайди висоту, проведену до гіпотенузи.

$$c = 10, \qquad h = \frac{6 \cdot 8}{10} = 4{,}8$$

### Чому дорівнює катет, що лежить проти кута 30°?

**Половині гіпотенузи.**

$$a = \frac{c}{2}$$

### Чому катет проти 30° — це рівно половина гіпотенузи?

Бо це **половинка рівностороннього** трикутника.

Проведи в рівносторонньому зі стороною $c$ висоту — вона розділить його на два
трикутники 30-60-90. Гіпотенузою став бік $c$, а меншим катетом — половина
основи.

### Гіпотенуза 10, один із кутів 30°. Знайди менший катет.

$$a = \frac{10}{2} = 5$$

### Чому дорівнює катет, що лежить проти кута 60°?

$$b = \frac{c\sqrt{3}}{2}$$

### Гіпотенуза 8, кути 45° і 45°. Знайди катети.

$$a = \frac{8}{\sqrt{2}} = 4\sqrt{2} \approx 5{,}7$$

Обидва однакові: трикутник рівнобедрений.

### Чому в трикутнику 45-45-90 катети рівні?

Бо вони лежать проти **рівних кутів**.

Це рівнобедрений прямокутний трикутник — той самий, що й у «Видах трикутників».

### Катети рівнобедреного прямокутного трикутника по 5. Знайди гіпотенузу.

$$c^2 = 5^2 + 5^2 = 50 \implies c = 5\sqrt{2} \approx 7{,}1$$

### Що це за трикутники?

<div class="figures">
  <figure>
  <svg viewBox="0 0 190 82" class="pair" role="img" aria-label="Два окремі випадки з однаковою гіпотенузою: трикутник з кутами 30 і 60 градусів і рівнобедрений прямокутний трикутник з кутами по 45 градусів">
  <polygon points="22,40 73.9615,70 22,70" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="27,70 27,65 22,65" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <polygon points="121,27.5736 163.426,70 121,70" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="126,70 126,65 121,65" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <text x="47.8815" y="65.8119" class="vtx" text-anchor="middle">30°</text>
  <text x="29.5" y="55.7904" class="vtx" text-anchor="middle">60°</text>
  <text x="128.654" y="48.8512" class="vtx" text-anchor="middle">45°</text>
  <text x="144.949" y="65.1463" class="vtx" text-anchor="middle">45°</text>
  <text x="16.5" y="57.5" class="vtx" text-anchor="middle">a</text>
  <text x="47.9808" y="78.5" class="vtx" text-anchor="middle">b</text>
  <text x="115.5" y="51.2868" class="vtx" text-anchor="middle">a</text>
  <text x="142.213" y="78.5" class="vtx" text-anchor="middle">a</text>
  <text x="51.4808" y="52.1699" class="vtx" text-anchor="middle">c</text>
  <text x="146.749" y="46.7513" class="vtx" text-anchor="middle">c</text>
  </svg>
  </figure>
</div>

---

**30-60-90 і 45-45-90** — два окремі випадки.

Гіпотенуза в них однакова, а форма різна: ліворуч катети $\frac{c}{2}$ і
$\frac{c\sqrt{3}}{2}$, праворуч — обидва по $\frac{c}{\sqrt{2}}$.

### Чому дорівнює $\sin 30°$?

$$\sin 30° = \frac{1}{2}$$

Рахувати не треба: катет проти $30°$ — це половина гіпотенузи, а синус і є
цей катет, поділений на гіпотенузу.

### Чому дорівнює $\cos 30°$?

$$\cos 30° = \frac{\sqrt{3}}{2}$$

Прилеглий до $30°$ катет — це той, що проти $60°$, тобто $\frac{c\sqrt{3}}{2}$.
Поділи на $c$.

### Чому дорівнює $\operatorname{tg} 30°$?

$$\operatorname{tg} 30° = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3} \approx 0{,}58$$

Це просто один катет, поділений на другий: $\frac{c}{2} : \frac{c\sqrt{3}}{2}$.

### Чому дорівнює $\sin 45°$?

$$\sin 45° = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}} \approx 0{,}71$$

У трикутнику 45-45-90 катет дорівнює $\frac{c}{\sqrt{2}}$ — поділи на $c$.

Косинус той самий: обидва гострі кути по $45°$, обидва катети рівні.

### Чому дорівнює $\operatorname{tg} 45°$?

$$\operatorname{tg} 45° = 1$$

Тангенс — це катет на катет, а катети тут **рівні**. Ділення числа на себе.

### Чому $\sin 60° = \cos 30°$?

Бо $60°$ і $30°$ — це пара $\alpha$ і $90° - \alpha$.

Один і той самий катет: для $60°$ він протилежний, для $30°$ — прилеглий.
Обидва дорівнюють $\frac{\sqrt{3}}{2}$.

### Де лежить центр описаного кола прямокутного трикутника?

На **середині гіпотенузи**.

Сама гіпотенуза стає діаметром.

### Що це за малюнок?

<div class="figures">
  <figure>
  <svg viewBox="0 0 130 120" class="compact" role="img" aria-label="Описане коло прямокутного трикутника: його центр лежить на середині гіпотенузи, а радіус дорівнює половині гіпотенузи">
  <circle cx="65" cy="66" r="45" fill="none" stroke="currentColor" stroke-width="1.1"/>
  <polygon points="20,66 110,66 43.8738,26.2674" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <line x1="65" y1="66" x2="43.8738" y2="26.2674" stroke="currentColor" stroke-width="1.3"/>
  <polyline points="41.2986,30.5532 45.5844,33.1284 48.1596,28.8425" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <circle cx="65" cy="66" r="1.7" fill="currentColor"/>
  <line x1="42.5" y1="63.8" x2="42.5" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <line x1="87.5" y1="63.8" x2="87.5" y2="68.2" stroke="currentColor" stroke-width="1.2"/>
  <text x="12.5" y="68.8" class="vtx" text-anchor="middle">A</text>
  <text x="117.5" y="68.8" class="vtx" text-anchor="middle">B</text>
  <text x="40.3527" y="22.4453" class="vtx" text-anchor="middle">C</text>
  <text x="64" y="75" class="vtx">O</text>
  </svg>
  </figure>
</div>

---

**Описане коло прямокутного трикутника.**

Центр — на середині гіпотенузи, а відрізок від нього до вершини прямого кута —
це одразу й радіус, і медіана.

### Чому дорівнює медіана, проведена до гіпотенузи?

**Половині гіпотенузи** — тобто радіусу описаного кола.

$$m_c = \frac{c}{2} = R$$

Це не збіг: медіана йде з вершини прямого кута в середину гіпотенузи, а
середина гіпотенузи і є центром кола. Медіана $CO$ — це радіус $OC$.

### Гіпотенуза 26. Знайди медіану, проведену до неї, і радіус описаного кола.

Обидва по **13**.

$$m_c = R = \frac{26}{2} = 13$$

### Медіана, проведена до гіпотенузи, дорівнює 7. Знайди гіпотенузу.

$$c = 2 \cdot 7 = 14$$

### Чому дорівнює радіус вписаного кола прямокутного трикутника?

$$r = \frac{a + b - c}{2}$$

Сума катетів мінус гіпотенуза, поділити навпіл.

### Чому $r = \frac{a + b - c}{2}$?

Бо від вершини прямого кута до обох точок дотику — по $r$.

Там виходить квадрат зі стороною $r$. Решта катетів, $a - r$ і $b - r$, — це
відрізки дотичних, і разом вони складають усю гіпотенузу:
$(a - r) + (b - r) = c$.

### Катети 6 і 8. Знайди радіус вписаного кола.

$$c = 10, \qquad r = \frac{6 + 8 - 10}{2} = 2$$

Перевірка через $r = \frac{S}{p}$: $S = 24$, $p = 12$, $r = 2$. Сходиться.

### Що це за малюнок і чому дорівнює $r$?

<div class="figures">
  <figure>
  <svg viewBox="0 0 118 112" class="compact" role="img" aria-label="Вписане коло прямокутного трикутника торкається обох катетів і гіпотенузи, його радіус дорівнює половині різниці суми катетів і гіпотенузи">
  <polygon points="22,40 102,100 22,100" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="42" cy="80" r="20" fill="none" stroke="currentColor" stroke-width="1.1"/>
  <polyline points="26.5,100 26.5,95.5 22,95.5" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <circle cx="42" cy="80" r="1.5" fill="currentColor"/>
  <line x1="42" y1="80" x2="42" y2="100" stroke="currentColor" stroke-width="1.0"/>
  <polyline points="45,100 45,97 42,97" fill="none" stroke="currentColor" stroke-width="0.9"/>
  <text x="62" y="108" class="vtx" text-anchor="middle">a</text>
  <text x="15.5" y="72" class="vtx" text-anchor="middle">b</text>
  <text x="66.8" y="67.6" class="vtx" text-anchor="middle">c</text>
  <text x="46" y="92" class="vtx" text-anchor="middle">r</text>
  <text x="37" y="78" class="vtx">O</text>
  <text x="16.5" y="105" class="vtx">C</text>
  <text x="104.5" y="105" class="vtx">B</text>
  <text x="16.5" y="38" class="vtx">A</text>
  </svg>
  </figure>
</div>

---

**Вписане коло** прямокутного трикутника.

$$r = \frac{a + b - c}{2}$$

Від вершини прямого кута до обох точок дотику — по $r$: там квадрат.

### Чому дорівнює площа прямокутного трикутника?

$$S = \frac{1}{2}ab$$

Півдобуток **катетів**.

### Чому для площі прямокутного трикутника не треба шукати висоту?

Бо вона **вже намальована**: кожен катет є висотою до другого.

Катети перпендикулярні один до одного. Це та сама $S = \frac{1}{2}ah$, просто
тут $h$ збіглася з катетом.

### Катети 5 і 12. Знайди площу і гіпотенузу.

$$S = \frac{5 \cdot 12}{2} = 30, \qquad c^2 = 25 + 144 = 169 \implies c = 13$$

### Чому дорівнює площа прямокутного трикутника через катет і гострий кут?

$$S = \frac{1}{2}a^2 \operatorname{tg}\beta = \frac{1}{2}a^2 \operatorname{ctg}\alpha$$

Це $S = \frac{1}{2}ab$, у якій другий катет замінили на $b = a\operatorname{tg}\beta$.

### Чому дорівнює площа прямокутного трикутника через гіпотенузу і гострий кут?

$$S = \frac{1}{4}c^2 \sin 2\alpha$$

Знову $S = \frac{1}{2}ab$: підставили $a = c\sin\alpha$ і $b = c\cos\alpha$.

### Скільки даних треба, щоб знайти все про трикутник 30-60-90?

**Одне** — будь-яка одна сторона.

Кути відомі наперед, а сторони пов'язані як $\frac{c}{2}$,
$\frac{c\sqrt{3}}{2}$, $c$.

### Чи може рівносторонній трикутник бути прямокутним?

**Ніколи.**

У рівносторонньому всі кути по $60°$ — прямому куту немає звідки взятися.

### Трикутник 45-45-90 — це який трикутник за «Видами трикутників»?

**Рівнобедрений і прямокутний водночас.**

Це той самий випадок: катети рівні, бо лежать проти рівних кутів. Заборони
бути двома видами відразу немає — на відміну від рівностороннього.

### Формула $R = \frac{abc}{4S}$ і правило $R = \frac{c}{2}$ — чи не сперечаються вони?

**Ні.** Просто в прямокутному рахувати не треба.

Перевір на $6$–$8$–$10$: $S = 24$, і
$R = \frac{6 \cdot 8 \cdot 10}{4 \cdot 24} = \frac{480}{96} = 5$. А половина
гіпотенузи — теж $5$. Сходиться.

### $S = \frac{1}{2}ah$ із «Площі трикутника» і $S = \frac{1}{2}ab$ — це різні формули?

**Ні, та сама.**

Просто тут $h$ збіглася з катетом: катет перпендикулярний до другого катета,
отже він і є висотою до нього.

### Де лежить точка перетину висот прямокутного трикутника?

**У вершині прямого кута.**

Бо два катети — це вже дві висоти (кожен перпендикулярний до другого), а
перетинаються вони саме у вершині прямого кута.

### Що в прямокутному трикутнику відомо ще до умови задачі?

**Один кут** — прямий.

Саме тому тут усього менше: ознак рівності досить двох елементів, висота для
площі вже намальована, а центр описаного кола видно оком.
