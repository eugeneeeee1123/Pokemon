# Dex 呈现 — Ledger + Film + Spine

修订：2026-09-28。用户选定这三种。Well、Stack、标本砖网格不做。

三件套同时出现在 `pokedex.html`，不是三个模式开关：

```
[ 脊标  ] [ 名录（可滚） ] [ 台座：当前立绘 + 名 + 色票 + Add + Open ]
           [ 胶片尺：当前过滤列表，吸格 ]
```

窄屏：脊横排在顶，名录在上，台座中，尺钉在底。

---

## 状态

```js
const state = {
  region: "kanto",
  type: null,       // ?type=
  resist: null,     // ?resist=
  q: "",
  list: [],         // 过滤后的摘要 {id,name,types}
  i: 0,             // 当前在 list 里的下标
  range: [1, 50],   // 脊展开的 National 段，被 region 裁切
};

function current() { return state.list[state.i] || null; }
```

切 `list` 时：尽量保住当前 id；没有则落到新 list[0]。空 list 台座写 `No file in this filter.`

---

## Spine

```js
const SPINES = [[1,50],[51,100],[101,151],[152,251],[252,386],[387,493],[494,649],[650,721],[722,809],[810,898],[899,905],[906,1025]];

function spinesFor(regionStart, regionEnd) {
  return SPINES.filter(([a, b]) => b >= regionStart && a <= regionEnd)
    .map(([a, b]) => [Math.max(a, regionStart), Math.min(b, regionEnd)]);
}

function onSpine(a, b) {
  state.range = [a, b];
  const hit = state.list.findIndex(p => p.id >= a && p.id <= b);
  if (hit >= 0) selectIndex(hit);
  render();
}
```

键：脊按钮 `001–050`。当前段 `--mark` 底。段内 0 只时禁用，不藏。

---

## Ledger

名录只渲染当前脊段 ∩ `state.list`（不要一次画 1025 行）。

```js
function ledgerRows() {
  const [a, b] = state.range;
  return state.list.filter(p => p.id >= a && p.id <= b);
}

function selectIndex(i) {
  if (i < 0 || i >= state.list.length) return;
  state.i = i;
  const [a, b] = SPINES.find(([x, y]) => current().id >= x && current().id <= y) || state.range;
  state.range = [a, b];
  paintLedger();
  paintStage();
  snapFilm();
}

function onLedgerClick(id) {
  const i = state.list.findIndex(p => p.id === id);
  selectIndex(i);
}

// Finder 式首字母：无输入焦点时敲 a–z，跳到该段内第一个以该字母开头的名字
function onLetter(ch) {
  const rows = ledgerRows();
  const hit = rows.find(p => p.name.toLowerCase().startsWith(ch));
  if (hit) onLedgerClick(hit.id);
}
```

行高 2.25rem。当前行 `--paper` + 硬投影。看过 id（`file151.seen`）编号降对比。

台座：大立绘、`#025`、名、色票、`Add to belt`、`Open #025`（进 `pokemon.html?id=`）。点台座立绘 = `Open`，不在名录上开详情。

---

## Film

尺的数据是完整 `state.list`（跨脊），用来连翻全区过滤结果。

```js
function project(v, decel = 0.998) {
  return (v / 1000) * decel / (1 - decel);
}
function rubberband(over, dim, c = 0.55) {
  return (over * dim * c) / (dim + c * Math.abs(over));
}

function snapFilm() {
  const el = document.getElementById("film");
  const cell = el.querySelector(`[data-id="${current()?.id}"]`);
  cell?.scrollIntoView({ inline: "center", block: "nearest", behavior: reduceMotion() ? "auto" : "smooth" });
}

// pointer：1:1 滚 scrollLeft；松手
function onFilmUp(vx) {
  const el = document.getElementById("film");
  const cell = 68; // px，含 gap
  const projected = el.scrollLeft + project(vx);
  const max = (state.list.length - 1) * cell;
  let x = projected;
  if (x < 0) x = rubberband(x, el.clientWidth);
  if (x > max) x = max + rubberband(x - max, el.clientWidth);
  const i = Math.round(Math.max(0, Math.min(state.list.length - 1, x / cell)));
  selectIndex(i);
}
```

格：小图 + `#id`。当前格 2px `--navy` 边。`←` `→` = `selectIndex(i±1)`。滚轮横移 `deltaY` 到 `scrollLeft`。

---

## 关键 CSS

```css
.dex {
  display: grid;
  grid-template-columns: 7.5rem minmax(16rem, 22rem) 1fr;
  grid-template-rows: 1fr auto;
  gap: var(--s-4);
  min-height: calc(100dvh - 7rem);
}
.spines { grid-row: 1 / 3; }
.ledger { overflow: auto; border-top: 2px solid var(--navy); }
.stage { display: grid; justify-items: center; align-content: start; }
.film {
  grid-column: 2 / 4;
  display: flex;
  gap: 0.35rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: var(--s-4);
}
.film .cell { flex: 0 0 4rem; scroll-snap-align: center; }
@media (max-width: 45rem) {
  .dex { grid-template-columns: 1fr; }
  .film { position: sticky; bottom: 0; background: var(--sky); }
}
```

---

## 不做

Well 圆井、Stack 三张叠、标本砖网格、Dex 拖砖进腰带。
