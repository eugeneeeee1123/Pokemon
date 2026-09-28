# Pokemon 图鉴网站 — 内容与结构规划

修订：2026-09-22。交互全文见 §4.9 与 `interactions.md`。

静态站点。HTML + CSS + JavaScript。数据走 PokeAPI。不做回合对战、不做伤害公式、不做剧情。

目标：浅蓝色图鉴站，精灵球只负责开合与点缀。正式 8 页。详情不按每只宝可梦拆文件。

视觉与按钮以 `design.md` 为准。本文管信息架构、数据范围、实现顺序。

---

## 1. 项目定位

单站点、多 HTML 页的图鉴 + 腰带编成。

- 使用者不需要先懂宝可梦世界观。
- 完成标准：能按地区翻、能搜能筛、能看数值、能组 6 人腰带、能看这 6 只的属性缺口、能并排比两只。
- 视觉主轴：青纸档案 + 白标本砖 + 红白球交互。界面文案见 `design.md`。
- 技术约束：无打包器、无框架、浏览器直接打开。

数据源：

- REST：`https://pokeapi.co/api/v2/`
- 无密钥
- 立绘优先：`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`
- 备用像素：`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`
- Shiny：有 `front_shiny` 或对应 artwork 则显示切换，无则隐藏按钮

编号范围：National Dex `#001–#1025` 都允许进详情。  
列表默认关都 `#001–#151`。其他地区靠 `regions.html` 切区间后再拉该段列表。

---

## 2. 页面清单（8）

| # | 文件 | 界面名 | 作用 |
|---|---|---|---|
| 1 | `index.html` | Home | 青纸首页、大球入口、3 只标本 |
| 2 | `pokedex.html` | Dex | 网格、搜索、属性筛选、地区/区间过滤、分页 |
| 3 | `pokemon.html` | Detail | 详情模板，`?id=` 或 `?name=` |
| 4 | `types.html` | Types | 18 属性色票 + 克制表 |
| 5 | `team.html` | Belt | 6 槽腰带，localStorage |
| 6 | `lineup.html` | Lineup | 对战组合：腰带覆盖、缺口、两只并排 |
| 7 | `regions.html` | Regions | 地区入口，跳 Dex 并带 `?region=` |
| 8 | `about.html` | File | 数据来源与操作说明 |

不拆的页：

- 不为每只宝可梦各写一个 html
- 不为每个 type、每个地区各写一页
- 不单独做 loading / 404 / 设置页
- 不做对战场面页（无 HP 条对打）

顶栏（站名即 Home）：

`151 FILE | Dex · Regions · Types · Belt · Lineup · File`

详情不进顶栏。Lineup 也可从 Belt 页主按钮进入。

查询参数：

- `pokedex.html?type=water&q=pi&region=kanto&resist=fire`
- `pokemon.html?id=7`
- `pokemon.html?name=squirtle`
- `lineup.html?a=25&b=6`（可选，预填左右槽）
- `regions.html` 无参数
- `team.html` 无参数

`type` 与 `resist` 语义不同，禁止复用同一个参数。

---

## 3. 目录结构

```
/
├── index.html
├── pokedex.html
├── pokemon.html
├── types.html
├── team.html
├── lineup.html
├── regions.html
├── about.html
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── buttons.css
│   ├── pokeball.css
│   └── pages.css
├── js/
│   ├── api.js
│   ├── types-chart.js     # 写死 18×18，Types + Lineup 共用
│   ├── regions-data.js    # 地区 id 区间
│   ├── pokeball.js
│   ├── pokedex.js
│   ├── pokemon.js
│   ├── types.js
│   ├── team.js
│   ├── lineup.js
│   └── regions.js
└── assets/
    ├── favicon.svg        # 自绘精灵球；顶栏与标签页同一造型
    ├── favicon.ico        # 可选
    └── ball.wav           # 开球短音，默认不播
```

顶栏左侧 32px CSS 精灵球 + 全页 `<link rel="icon" href="assets/favicon.svg">`。禁止用别的图标。

共享顶栏：每页复制同一段 header。不上打包器。

---

## 4. 每页内容规格

### 4.1 `index.html`

- 青纸。左栏站名与说明，右栏大球（球即进 Dex）。
- 进站摇球最多 3 下，然后停。
- 说明写清：Kanto 151 默认，其他地区从 Regions 进。
- 主按钮文案：`Open the dex`
- 推荐 3 只写死 id：`25`、`6`、`150`。第一只砖更宽。
- 次入口文字链：`Open regions` → `regions.html`

### 4.2 `pokedex.html`

呈现锁定：**Spine + Ledger + Film** 同屏。禁止标本砖网格、Well、Stack。代码见 `dex-presentation.md`。

- 左脊：50 号一段，当前区裁切。点脊展开该段名录。
- 中名录：该段 ∩ 过滤结果。点行换台座。无焦点时 a–z 跳该段首字母。
- 右台座：当前立绘 + 名 + 色票 + `Add to belt` + `Open #id`。
- 底胶片尺：整份过滤列表。拖 / 滚轮 / 点格 / `←` `→`，松手吸格。
- 搜索：英文名或编号。唯一匹配 `selectIndex`。
- 属性芯片：单选，滤 `state.list`。`?resist=` 仍生效。
- `?resist=` 同样只过滤尺。
- 地区标签：`?region=`，默认 `kanto`，点回 Regions。
- 列表按地区区间请求，禁止循环打全区详情。
- 井开着时主按钮：`Open #025` → `pokemon.html?id=`
- 井旁：`Add to belt`；满员 `Belt full (6/6)`
- `Draw one`：随机当前过滤结果，尺滚到该格并开井（不直接跳详情）
- 看过：尺上编号降对比（`file151.seen`）
- 状态：loading / empty / error
- 首屏先画当前地区尺摘要；立绘按官方 artwork URL，不逐只打详情 JSON

### 4.3 `pokemon.html`

- 开合球入场。返回 `Close file`。
- MVP 字段：编号、英文名、artwork、types、身高体重（dm→m，hg→kg）、6 项能力条、abilities（hidden 标文字）。
- V1：shiny 切换。
- V2：进化链（Eevee 分支先跳过）。
- 中文名可选：`/pokemon-species/{id}` → `zh-Hans`。
- 按钮：`Add to belt` / `Close file` / `Compare in lineup`（带 `?a={当前id}` 进 Lineup）

### 4.4 `types.html`

- 18 色票。点击 → `pokedex.html?type={type}`（保留当前 region 若有）。
- 克制表用 `types-chart.js`，不请求 `/type/{name}`。
- 几乎无动态请求。

### 4.5 `team.html`

- 6 圆槽。空槽虚线球。
- `localStorage` 键：
  - `file151.belt`：id 数组，最长 6
  - `file151.seen`：点过详情的 id 数组
  - `file151.sound`：`"on"` / `"off"`，默认 `"off"`
- 进页按 id 按需 fetch。
- 操作：`Remove`、`Clear belt`、点槽进详情、槽与槽之间拖拽换序（不从 Dex 拖入）。
- 主按钮：`Check lineup` → `lineup.html`
- 满员时他页 Add 无效。

### 4.6 `lineup.html`（对战组合）

本页做编成分析，不做对打。

三块，从上到下：

**A. 腰带回看**  
读同一 `file151.belt`。6 只横排。无人则：`Belt empty. Open the dex and add up to 6.` 并链回 Dex。

**B. 属性组合**  
用腰带里每只的 1–2 个 type + `types-chart.js` 计算：

- Coverage：队伍至少一只打出 2 倍的攻击属性列表
- Holes：打队伍任何一只能出 2 倍的攻击属性列表（队伍弱点）
- Resists：队伍整体有抗（0.5 或 0）的属性
- 重复 type：同一 type 出现 ≥2 次时列出（组合警告，不是错误）

展示用色票墙，不是雷达图、不是分数。  
不计算 STAB 以外的招式（本页不读 moves）。攻击方按「该只有这些 type」近似，文案写明：`typed as the species types, not moves`。

色票跳转：Coverage → `pokedex.html?type=`；Holes → `pokedex.html?resist=`（防御倍率 ≤ 0.5）；Resists 只展示不跳。保留当前 `region`。

**C. 两只并排**  
左右各一槽。来源：

- `?a=` `?b=`
- 或从腰带点选填入
- 或搜索框（名 / 编号）各打 1 次详情

并排字段：立绘、type、6 项能力条（同项左右对齐，高出一侧海军、低出一侧浅青）、身高体重。  
不写胜负、不写速度谁先手结论以外的「赢」。可以在 Speed 行标较高一侧 `faster`，一句，不解释规则。

按钮：`Swap sides`、`Clear left`、`Clear right`。

### 4.7 `regions.html`

地区是图鉴的预设区间，不是新数据源。

桌面：左列表 + 右预览（该区只数、起止编号、一枚代表立绘写死）。  
点击地区 → `pokedex.html?region={slug}`。

写死表（`regions-data.js`）：

| slug | 界面名 | 编号 | 只数 | 预览 id |
|---|---|---|---|---|
| `kanto` | Kanto | 1–151 | 151 | 25 |
| `johto` | Johto | 152–251 | 100 | 155 |
| `hoenn` | Hoenn | 252–386 | 135 | 255 |
| `sinnoh` | Sinnoh | 387–493 | 107 | 392 |
| `unova` | Unova | 494–649 | 156 | 495 |
| `kalos` | Kalos | 650–721 | 72 | 656 |
| `alola` | Alola | 722–809 | 88 | 722 |
| `galar` | Galar | 810–898 | 89 | 810 |
| `hisui` | Hisui | 899–905 | 7 | 899 |
| `paldea` | Paldea | 906–1025 | 120 | 906 |

说明一行：`National Dex numbers. Forms and regional variants are not separate files in v1.`

不请求 `/pokedex/{name}`。区间写死，避免多一次列表协议。

### 4.8 `about.html`

静态。必须写清：

- 数据 PokeAPI，立绘 PokeAPI/sprites
- 非官方
- 搜索用英文名；腰带存在本机
- Lineup 只看种族 type，不看招式表
- 地区按 National Dex 编号切，不是游戏图鉴编号差异
- 球音开关：`Ball sound on` / `Ball sound off`，写入 `file151.sound`，默认 `"off"`
- 快捷键一览写在本页底部：`/` 搜索，`Esc` 关文件，详情 `←` `→`，Home / Dex `Draw one`

### 4.9 交互锁定

做：全局 1–5、各页 6–31、腰带槽内换序 32、Lineup 33–39、File 40、以及 A B F G H I J。  
不做：C 从 Dex 拖砖、D 双击 Add、E 长按预览。

Dex 指针：点胶片格 = 选中进井；点球/井 = 开合；`Open #id` 才进详情。加入只用 `Add to belt`。

| 编号 | 行为 |
|---|---|
| 1–5 | 顶栏、后退合球、`/` 聚焦搜索、`Esc` 关详情或清空搜索、reduced-motion 关动画 |
| 6–9 | Home 大球进 Dex、三标本进详情、链去 Regions、进站摇一次 |
| 10–16 | Dex 即时搜、回车进唯一匹配并开井、type 单选滤尺、地区标签回 Regions、点格选中、井开合、`Open #id` 进详情、Add、尺拖吸格 |
| 17–20 | 开合球、Add、shiny、Compare in lineup 带当前 id |
| 21–23 | Types 色票/表头/单元格点防御或攻击 type → Dex `?type=` |
| 24–26 | Regions 点行或 ↑↓+Enter 进 Dex `?region=` |
| 27–32 | Belt 点槽详情、Remove 左移补位、Clear、空槽去 Dex、Check lineup、**仅六槽内部**拖拽换序 |
| 33–39 | Lineup 点腰带填左右、搜索填槽、query 预填、Swap、Clear 左/右、Coverage 走 `?type=`、Holes 走 `?resist=`、Speed 标 `faster` |
| 40 | File 外链新标签 |
| A | `Draw one`：Home 仍开详情；Dex 随机当前过滤结果，尺吸格并开井 |
| B | 详情 `←` `→` 切同地区上一只/下一只 |
| F | 详情与 Lineup：`Copy link` → `clipboard.writeText(location.href)` |
| G | 进过详情的 id 写入 `file151.seen`；Dex 编号降对比，不另开收藏页 |
| H | 开球短音，默认关；仅 File 开关 |
| I | Types 表 hover 高亮该行该列 |
| J | Holes 色票 → `pokedex.html?resist={type}`，过滤防御倍率 ≤ 0.5。芯片显示 `resist fire`，可单独叉掉。可与 `type` `region` `q` 同时存在 |

音频文件：`assets/ball.wav` 一声，禁止循环、禁止自动播。`file151.sound !== "on"` 时不调 `Audio`。

---

## 5. 视觉规范

细节以 `design.md` 为准。这里只定分配。

- Home：档 C 大球一次
- Dex：档 A 砖角小球
- Detail：档 B 开合
- Regions / Types / Belt / Lineup / File：顶栏球，不播长动画
- Lineup 并排不用两套开合球，直接出图
- Regions 列表不是三等分功能卡；一列地区名 + 编号区间

---

## 6. 需要知道的最小设定

- 每只有 1–2 个 type。
- 编号是 National Dex id。
- 能力值 6 项，约 1–255。条宽 `value / 255 * 100%`。
- 请求用小写英文名或数字 id。
- height 分米、weight 百克 → 展示 `/10` 成 m / kg。
- 克制只分 2 / 1 / 0.5 / 0。双属性防御：两个倍率相乘（可到 4 或 0）。
- 18 type：  
  `normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy`

---

## 7. API 与缓存规则

| 场景 | 请求 | 次数 |
|---|---|---|
| 某地区列表 | `GET /pokemon?limit={n}&offset={start-1}` | 1 / 切地区 |
| 卡片图 | artwork URL 模板 | 0 次 JSON |
| 详情 | `GET /pokemon/{id\|name}` | 1 / 只 |
| 中文名 | `GET /pokemon-species/{id}` | 1 / 只，可选 |
| 进化链 | species → evolution-chain | 2 / 只，V2 |
| 首页 | 写死 3 个 URL 或 3 次详情 | ≤3 |
| Belt / Lineup 腰带 | 按本地 id 详情 | ≤6 |
| Lineup 并排搜索 | 左右各 1 次详情 | ≤2 |
| Types / Regions | 无 | 0 |

`api.js`：

- `getList(limit, offset)`
- `getPokemon(idOrName)`
- 内存 Map + `localStorage` 列表摘要（id / name / types / region）
- 切地区换 offset，不要把 1025 一次拉完

`types-chart.js`：攻击 type × 防御 type → 倍率。双防相乘在 Lineup 里做。

禁止：无节流并发全区详情。

---

## 8. 功能范围

### MVP

- 8 页骨架 + 共享顶栏 + 精灵球 favicon
- Dex：默认 Kanto + 搜索 + type / resist 筛选 + 看过编号降对比
- Regions：10 入口
- 详情：字段 + Add + shiny + Copy link + ← →
- Belt 6 槽 + 槽内换序 + localStorage
- Lineup：覆盖 / 缺口 / 并排 + query 预填
- `Draw one`（Home、Dex）
- 球音默认关
- loading / empty / error

### V1

- 首页球一次、详情开合
- 列表摘要缓存
- Types 表划亮行列
- Dex 同时吃 `region` + `type` + `resist` + `q`

### V2

- 进化链
- 中文名
- 地区预览改拉该区前 3 只活数据
- 招式表（若做，另开字段，不进 MVP）

### 明确不做

- 回合对战、伤害公式、PP、能力等级、道具
- 自动配队、推荐六人
- 地图、社交、TCG、图鉴朗读
- Dex 拖砖进腰带、双击 Add、长按预览
- 地区形态拆文件（Alolan / Galarian 当独立页）
- 打包器、后端

---

## 9. 实现顺序

1. tokens / base / buttons + 8 个空页和顶栏
2. `regions-data.js` + `types-chart.js`
3. 首页静态 + 3 只写死标本
4. `api.js` + Dex 默认 151
5. Regions 跳转 + Dex 读 `?region=` 换 offset
6. 搜索、type 筛选、空/错
7. 详情页
8. Belt localStorage
9. Lineup：腰带覆盖 + 并排
10. Types 色票与表
11. File 文案
12. 球动画档 A → C → B
13. `Draw one`、详情 ← →、Copy link、seen、resist、球音开关、Types 划亮、Belt 槽内拖拽

转场没做好之前，详情直接出面板。

---

## 10. 验收

- 断网时 File、Regions、Types 仍可打开。Dex / Detail / Lineup 请求失败有说明，不白屏。
- `25` 与 `pikachu` 进同一只。
- `pokedex.html?region=johto` 编号从 152 起。
- `type=fire` 与 `region=kanto` 同时生效。
- 腰带最多 6，刷新仍在。Lineup 与 Belt 读同一份数据。
- Lineup 在腰带有火+水时，Coverage 至少出现对草 2 倍；文案不宣称这是招式计算结果。
- `lineup.html?a=25&b=6` 左右预填。
- `pokedex.html?resist=fire` 只留下对该属性防御 ≤ 0.5 的只。
- 进过的详情在 Dex 编号颜色变淡。
- 默认无开球声；File 打开后才响。
- 砖单击进详情；没有双击、没有从 Dex 拖入。
- 列表请求按地区 1 次，不扫 1025 条详情。
- 青纸底始终可见。无回合对打界面。
