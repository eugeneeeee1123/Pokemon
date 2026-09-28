# 151 File — UI Design

修订：2026-09-28d。整站重布（色、字锁定不动）。Dex 仍是井 + 尺 + K–N。交互以 `interactions.md` 为准。

对象：关都 151 只的静态图鉴站。  
读者：跟风做前端的人，不一定懂设定。  
主任务：找一只、看数值、塞进 6 人队伍。

视觉身份：午后关都天空下的手持图鉴。页面是纸质档案，精灵球是唯一的玩具物件。不是红白主题站，不是 SaaS 仪表盘。

---

## 五轴

1. **Color**  
   轴是深蓝 → 白。浅青 `--sky` 可以做页底。页约 50% 浅青、30% 白档案、20% 海军字和键。红与黄只在球和编号。禁止 neon、禁止紫。

2. **Type**  
   两套：Oxanium 管编号、按钮、能力值；Atkinson Hyperlegible 管标题和说明。不用 Inter / Roboto / Poppins / Geist / Space Grotesk。

3. **Layout**  
   书桌，不是居中栏目。装订边是结构。井偏左坐在桌上，尺通栏贴视口底。球允许切出右缘。禁止把每页收进 1080 居中卡片里。

4. **Copy**  
   句子级、动词开头。按钮写结果：`Open #025`、`Add to belt`、`Close file`。禁止 Get started / Learn more / Unlock。

5. **Motion**  
   全站只承认三类编排：进站摇球一次、卡片小球 hover 晃、详情开合（可打断、从源点长出）。腰带槽拖拽是手势物理，不算第四套装饰动画。禁止每张卡 hover-scale、禁止每段 fade-up。开球短音默认关。按压反馈在 pointer-down，不在 click。

---

## 驳回的默认（Pass 2）

| 默认 | 为何丢掉 | 改成 |
|---|---|---|
| 居中 hero + pill badge + 双 CTA | SaaS 骨架 | 左栏标题，右栏大球即 CTA |
| 三张均分推荐卡 + 圆角图标 | 功能卡模板 | 三只标本横滑，第一只宽一倍 |
| 全站 `rounded-2xl shadow-lg` | 同一圆角同一阴影 | 档案 4px；球必须是正圆；按钮只切右下角 |
| 装饰性玻璃拟态（无内容可透） | slop | 仅当列表从顶栏下滚过时，顶栏才用轻霜；否则实色纸 |
| 渐变字标题 | 无语义 | 实色海军字，编号用黄块衬底 |
| Inter 或 Poppins | 训练均值 | Oxanium + Atkinson |
| 每卡左边 4px 彩条 | Dashboard 梗 | 属性用方块色票，贴在名字下 |

删掉的装饰：页脚四栏链接、New/Live 脉冲点、卡片悬停放大、中间点分隔的 meta 行。

---

## 色板

写入 `css/tokens.css`。色值保持本表。间距与字号用下面 rem token，不要在组件里再写死 px。

```css
:root {
  --sky:        #D7EEF8; /* 页底，占面积 */
  --sky-deep:   #B9DDF0; /* 页顶到页底的实色过渡，不是装饰光斑 */
  --paper:      #F7FBFE; /* 档案底 */
  --ink:        #12324A; /* 主字 */
  --ink-soft:   #3A6A88; /* 次字 */
  --navy:       #003A70; /* 主键、顶栏字、焦点 */
  --mark:       #FFCB05; /* 编号块、当前导航条 */
  --ball:       #EE1515; /* 只有球和「移除」的小点 */
  --line:       #8EB8D2; /* 描边 */
  --ok:         #2A7A4B; /* 加入成功，一条字，不用大绿块 */
  --focus:      #003A70;
  --blue:       #3D7DCA; /* 仅 hover / 当前尺格描边。不是页底，不是发光 */
}
```

色轴：深蓝 `#003A70` → 中蓝 `#3D7DCA`（仅 hover 描边）→ 浅青 `#D7EEF8`（页底）→ 白 `#F7FBFE`（档案）。  
官方黄、球红不进这条轴。禁止反向：不要从浅蓝 hover 成更浅，只许往海军走。

阴影只许一种：`0 10px 0 #8EB8D2`（硬投影，像压在档案上）。禁止 `rgba(0,0,0,.1)` 软雾。

### 属性色票

方 12×12 或 16×16，圆角 2px。字用白或海军，按对比选。

| type | fill | 字色 |
|---|---|---|
| normal | `#A8A878` | `#12324A` |
| fire | `#F08030` | `#fff` |
| water | `#6890F0` | `#fff` |
| electric | `#F8D030` | `#12324A` |
| grass | `#78C850` | `#12324A` |
| ice | `#98D8D8` | `#12324A` |
| fighting | `#C03028` | `#fff` |
| poison | `#A040A0` | `#fff` |
| ground | `#E0C068` | `#12324A` |
| flying | `#A890F0` | `#12324A` |
| psychic | `#F85888` | `#fff` |
| bug | `#A8B820` | `#12324A` |
| rock | `#B8A038` | `#12324A` |
| ghost | `#705898` | `#fff` |
| dragon | `#7038F8` | `#fff` |
| dark | `#705848` | `#fff` |
| steel | `#B8B8D0` | `#12324A` |
| fairy | `#EE99AC` | `#12324A` |

属性色只上色票和筛选芯片。不上页面背景、不上按钮填充。

### 能力条

轨道 `#D7EEF8`，填充按数值，不用单一绿：

- `0–59` `#8EB8D2`
- `60–99` `#3D7DCA`
- `100–149` `#003A70`
- `150+` `#EE1515`

宽度：`base_stat / 255 * 100%`。条高 8px，右上直角、左上 2px。数值用 Oxanium 写在条右。

---

## 字体

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">
```

| 角色 | 字体 | 规格 |
|---|---|---|
| 站点名、H1 | Atkinson 700 | 首页 56–72px / 内页 32px。字距 -0.02em |
| 正文、导航、说明 | Atkinson 400 | 16–18px，行高 1.45，行长 ≤ 42rem |
| 编号 `#025`、能力值、按钮 | Oxanium 700 | 编号 14–28px，等宽数字 `font-variant-numeric: tabular-nums` |
| 属性芯片 | Oxanium 500 | 11px，不大写追踪 |

禁止：标题里单独把一个词换色或斜体。禁止全大写 eyebrow。等宽只给编号和数值。

---

## 布局概念

档案夹打开放在青纸上。左订口 48px 空白当装订边（桌面）。内容左对齐。球是唯一正圆。

桌面栏宽：主栏 `min(1080px, calc(100% - 96px))`，左对齐到装订边，不水平居中整页。

```
HOME
+--+---------------------------+------------------+
|  | 151 FILE                  |                  |
|  | Kanto specimens           |     (  ball  )   |
|B |                           |      = CTA       |
|I | Open the dex              |                  |
|N |                           |  #025  #006  #150|
|D |                           |  wide  slim slim |
+--+---------------------------+------------------+

DEX
+--+----------------------------------------------+
|  | [find]  fire water …   Kanto · 151           |
|  |                                              |
|  |              (  well / ball )                |
|  |              Open #025   Add                 |
|  |                                              |
|  |  [#001][#002][#003][#004][#025][#026] →      |
|  |                 film strip                   |
+--+----------------------------------------------+

DETAIL
+--+------------------------+---------------------+
|  |  (open ball stage)     | #025                |
|  |      artwork           | Pikachu             |
|  |                        | [elec]              |
|  |  Close file            | 0.4 m   6.0 kg      |
|  |  Add to belt           | HP  ##### 35        |
+--+------------------------+---------------------+

TYPES
色票墙。第一行 6 个稍大，其余正常。点色票带 ?type= 回 Dex。
下方克制表是真表格，不是卡片网。

TEAM
一条腰带：6 个圆槽，不是 6 张卡。空槽是虚线球。满员不再出现 Add。
```

断点：

- `<720px`：装订边取消。首页球改到标题下。井缩小到 220px。尺一格 56px。详情上图下数据。
- `≥720px`：井 280px。尺一格 68px。装订边恢复。
- Dex 永不回到多列砖网格。

层次不用万能卡片：

- 页 = 青纸
- 顶栏 = 白条 + 底边
- 标本砖 = 白底、4px 圆角、硬投影；只有「一只宝可梦」用砖
- 筛选条、克制表、说明文字直接铺在青纸上

---

## 顶栏

高 56px + `env(safe-area-inset-top)`。`position: sticky; top: 0`。

默认（内容未滚到顶栏下）：不透明 `--paper`，底边 `2px solid var(--navy)`。

Dex / Regions 列表从顶栏下穿过时，才换成一层霜，不是装饰玻璃：

```css
.site-bar.is-over-content {
  background: color-mix(in srgb, var(--paper) 72%, transparent);
  backdrop-filter: blur(20px) saturate(160%);
  border-bottom: 1px solid color-mix(in srgb, var(--navy) 28%, transparent);
}
@media (prefers-reduced-transparency: reduce) {
  .site-bar { background: var(--paper); backdrop-filter: none; }
}
```

禁止第二层霜叠在第一层上。禁止整页毛玻璃。内容在顶栏下滚动，用 12px 渐隐遮罩代替第二条分割线。

```
[32px pokeball]  151 FILE     Dex  Regions  Types  Belt  Lineup  File
```

- **Navbar 左侧图标必须是精灵球**，不是字母标、不是汉堡、不是 generic 圆点。
- 球：CSS 结构与全站同一套（上红下白、黑中线、中心按钮），直径 32px。链到 `index.html`，`aria-label="151 File home"`。
- 顶栏球不播开合、不循环摇。当前页不是 Home 时完全静止。
- 站名 Atkinson 700 18px，链到 `index.html`
- 导航 Atkinson 400 15px，当前项下方 `3px solid var(--mark)`，不是 pill
- 详情页导航无高亮
- Team 在界面文案里叫 **Belt**，路由文件仍是 `team.html`
- About 在界面叫 **File**
- 不要汉堡到 720 以下再折叠；六个字排得下就横排，实在不够 Dex / Belt 优先

## Favicon

浏览器标签图标也是同一颗球，不是默认地球或不相关 PNG。

- 路径：`assets/favicon.svg`（主），可选再导出 `assets/favicon.ico` 给旧浏览器
- 画布 32×32 正圆球，透明底，不要青纸方底
- 几何与 CSS 球一致：上半 `#EE1515`，下半 `#F7FBFE`，中线 `#1A1A1A` 约 3px，中心白钮 + 黑圈
- 所有 HTML `<head>` 写：
  ```html
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  ```
- 禁止用官方精灵球商用图当 favicon。自绘 SVG。

搜索只出现在 Dex 顶栏右侧，不是全局。

---

## 按钮

### 形状规则

主键不是胶囊。  
矩形，高 44px（桌面）/ 48px（触控）。  
圆角：`4px 4px 14px 4px`（只切右下，像装置键）。  
正圆只留给球。

### 变体

| 名 | 用途 | 面 | 字 | 边 |
|---|---|---|---|---|
| `btn-primary` | 页内主操作，一区一个 | `--navy` | `#F7FBFE` | 无 |
| `btn-paper` | 次操作：Close file、Clear belt | `--paper` | `--navy` | 2px `--navy` |
| `btn-mark` | 稀有强调：Open shiny | `--mark` | `--ink` | 无 |
| `btn-ball` | 首页入口、卡片角上的球 | 正圆，CSS 球 | 无字或一行 Oxanium | 黑中线 |
| `btn-chip` | type 筛选 | 属性色或 `--paper` | 对比色 | 选中时 2px `--navy` |
| `btn-slot` | 腰带移除 | 透明 | `--ink-soft` | 无。左边 6px `--ball` 圆点 |

禁止第三颗并列主按钮。一区一个 `btn-primary`。

### 文案（固定）

| 动作 | 按钮 | 完成后 |
|---|---|---|
| 进图鉴 | `Open the dex` | — |
| 进详情 | 整砖可点，不写 View | — |
| 加入腰带 | `Add to belt` | `On the belt`（禁用） |
| 腰带已满 | 按钮消失，改一行 `Belt full (6/6)` | — |
| 移出 | `Remove` | 槽变空 |
| 清空 | `Clear belt` | 六个空槽 |
| 返回 | `Close file` | 回 Dex |
| 闪光 | `Show shiny` / `Show default` | 图换源 |
| 筛选清除 | `All types` | 芯片全灭 |
| 抗性过滤 | 芯片 `resist fire` | 叉掉该芯片 |
| 随机 | `Draw one` | 开当前地区详情 |
| 复制链接 | `Copy link` | `Copied` 1.5s |
| 球音 | `Ball sound on` / `Ball sound off` | 写入 `file151.sound` |

不要箭头后缀。不要 Submit。

### 状态

```css
.btn-primary:hover   { background: #00284D; }
.btn-primary:active  { transform: scale(0.97) translate(0, 2px); box-shadow: none; }
.btn-primary:disabled{ background: #8EB8D2; color: #F7FBFE; }
.btn-primary:focus-visible { outline: 3px solid var(--mark); outline-offset: 3px; }
```

反馈写在 `:active` / `pointerdown`，100ms `ease-out`，不要等 `click`。  
命中垫 +10px。手指滑出再滑回可取消。  
主键静止带硬投影 `0 4px 0 #00284D`。按下投影消失。  
`btn-paper` 投影 `0 4px 0 var(--navy)`。  
禁用不改透明度到看不清，改成浅青底。  
芯片、砖、球按钮同样 pointer-down 缩到 `0.97`，松手回 `1`。砖禁止 hover 放大。

### 尺寸

| class | 高 | 左右垫 | 字 |
|---|---|---|---|
| `.btn` | 44px | 18px | Oxanium 700 14px |
| `.btn-lg` | 52px | 22px | 16px — 仅首页 `Open the dex` |
| `.btn-sm` | 32px | 12px | 12px — 槽内 Remove |
| `.btn-ball.lg` | 220–280px | — | 首页 |
| `.btn-ball.sm` | 32px | — | 砖角、顶栏 |

芯片高 28px，左右 10px，圆角 4px，不是 999px。

---

## 分页组件

### Dex：井 + 尺

井：正圆，直径 220–280px。合上是全站同一套球，井内立绘 `filter: brightness(0)`。打开上半球上移、下半球下移，同一帧去掉滤镜上色。开合弹簧 damping 1.0 / response 0.4。禁止黑幕。

井心 44px 开合。井环是转盘，不另画刻度。

尺：横向一条，每格 `4.25rem`，白底、4px、硬投影。格内小立绘 + `#025`。当前格 2px `--navy` 边。看过编号用 `--ink-soft`。拖 1:1，松手投射后吸格。

书签齿：格顶 `0.75rem × 0.2rem` 的 `--mark` 条。编号缓冲：井右下 Oxanium，`#` + 数字，缺位 `_`。

井下主按钮一颗：`Open #025`。`Add to belt` 用 `btn-paper`。

### 首页标本

三只横排小尺，不是网格。第一只格加宽。点格进详情。

### 筛选芯片

未选：`--paper` + `--ink` + 1px `--line`  
选中：该 type 填充 + 2px `--navy`  
全部：`All types`，选中时海军底白字

### 搜索

高 44px，白底，2px `--navy` 底边，左右无圆角胶囊感（圆角 4px）。  
占位：`name or number`。  
字 Atkinson 16px。匹配计数用 Oxanium 写在框右：`12 / 151`。

### 详情舞台

开合层 `position: fixed`，青纸仍隐约在后，不盖黑遮罩。  
上半球 `--ball`，下半球白，中线 `--ink`，按钮圈黑。  
打开后左栏 artwork 最大 360px。右栏无卡片外壳，字段用 1px `--line` 横线隔开。

字段序：编号 → 名 → 色票 → 身高体重同一行 → 能力六条 → abilities（hidden 在名后写 `hidden`，不用徽章）。

### 腰带槽

正圆 120px，青托盘。有图则放 artwork。空则 CSS 虚线球。  
Remove 在圆下，`btn-sm btn-slot`。

### 空 / 错

- Dex 无结果：`No file matches "xyz". Clear the name or pick another type.`
- 请求失败：`PokeAPI did not answer. Open this page again.`
- 腰带空：`Belt empty. Open the dex and add up to 6.`
- 详情缺 id：`No file id. Close file.`

不道歉、不写 Something went wrong。

---

## 运动

编排仍只三处装饰 + 一处手势物理。数值用 Apple 表，不自造曲线。

| 场景 | 工具 | 参数 |
|---|---|---|
| 按钮 / 芯片 / 砖按下 | CSS `transform` | `scale(0.97)`，100ms ease-out，pointer-down |
| 首页进站摇球 | 一次性 rotate | ±8deg，最多 3 下，800ms 内停。无 overshoot 循环 |
| 砖角小球 hover | rotate | -10deg / 120ms，离开回 0。reduced-motion 则静止 |
| 详情开合（无手势中途） | 临界阻尼弹簧 | damping `1.0`，response `0.4`。路径：从被点砖的球心长出，关闭沿原路缩回同一砖 |
| 开合中途再点 / Esc | 打断 | 从当前 transform 接着走，禁止等动画结束再反向 |
| 腰带槽拖拽 | 1:1 + 松手弹簧 | 拖时跟手指；松手 damping `0.8`，response `0.3`；初速度 = 松手速度 |
| 槽拖过两端 | rubberband | `overshoot * dim * 0.55 / (dim + 0.55 * \|overshoot\|)` |
| 松手落点 | 动量投射 | `current + (v/1000)*0.998/(1-0.998)`，再吸到最近槽心 |

开合禁止用不可打断的长 `@keyframes` 当唯一实现。无手势时可以用 CSS；一旦允许打断，改读实时 transform 再定向。只动 `transform` 与 `opacity`。

`prefers-reduced-motion: reduce`：摇、开合位移、槽弹簧全部取消。详情 200ms 透明度交叉淡入。按压 `scale` 可留。

禁止：卡片 hover scale、滚动 fade-up、循环摇、闪光爆闪、进站以外的自动动画、开合未完成时锁输入。

---

## 触感与材质（Apple 对齐，身份不换）

目的：手感像按得到的物件。外观仍是青纸档案，不是 iOS 模板。

**直接操纵**

- 腰带换序：`pointerdown` 立刻高亮该槽，`setPointerCapture`，抓取点偏移保持，不吸到圆心。
- 移动阈值 10px 才算开始拖，避免和单击进详情抢手势。
- 松手用速度方向决定是否越过下一槽，不只看松开时的中心落在哪。
- Dex 砖不拖。

**空间一致**

- 详情球从源砖中心长出，关闭缩回同一点。`Draw one` 从大球或 Dex 的 Draw 按钮长出。
- 进从哪来，回从哪走。禁止开从中心放大、关往屏幕底滑走。

**材质**

- 页是实色青纸。详情打开时青纸仍可见，不盖 0.5 黑幕（非阻断式，保持流向）。
- 顶栏仅在内容穿过时上霜，见顶栏节。
- `prefers-reduced-transparency`：霜变实纸。
- `prefers-contrast: more`：实底 + 2px `--navy` 边。

**多通道**

- 球音只在开合完成那一帧触发，且 `file151.sound === "on"`。
- 无振动默认。有 Vibration API 也只在腰带槽吸住时一次，可关。

**字**

- H1：`letter-spacing: -0.02em`，`line-height: 1.08`
- 正文：tracking `0`，`line-height: 1.45`
- 编号 / 按钮 Oxanium：tracking `0.02em`
- 间距用 `rem`，跟用户字号走

**安全区**

- 顶栏、页边吃 `safe-area-inset-*`
- 触控主键高保持 44–48px

---

## 页面按钮与主操作

| 页 | 主按钮 | 次按钮 | 禁止 |
|---|---|---|---|
| Home | 大球 + `Open the dex` | 三只标本可点 | 第二颗 Get started |
| Dex | 无页级按钮；砖即入口 | `All types` | 每砖一个 View |
| Detail | `Add to belt` | `Close file`、`Show shiny` | Learn more |
| Types | 无；色票即链 | — | Explore types |
| Belt | `Clear belt`（有人时） | 每槽 `Remove` | Share team |
| File | 无 | 链到 pokeapi.co 用普通下划线 | 双 CTA |

---

## 间距尺度

根字号 `16px`。全部间距用 `rem`，跟系统字号走。底格 `0.25rem`（4px @16）。禁止再写散 px，安全区和 1px 发丝除外。

```css
:root {
  --s-1: 0.25rem;  /* 4  发丝间隙、色票内边 */
  --s-2: 0.5rem;   /* 8  能力条距、芯片内边 */
  --s-3: 0.75rem;  /* 12 详情字段块、砖内边竖 */
  --s-4: 1rem;     /* 16 页边移动、砖列距、按钮组 */
  --s-5: 1.25rem;  /* 20 按钮左右垫 */
  --s-6: 1.5rem;   /* 24 页边桌面右 */
  --s-7: 1.75rem;  /* 28 砖行距（行 > 列，档案行距） */
  --s-8: 2rem;     /* 32 顶栏下到内页标题 */
  --s-10: 2.5rem;  /* 40 */
  --s-12: 3rem;    /* 48 桌面左装订 */
  --s-14: 3.5rem;  /* 56 Home 标题上空、顶栏高 */
}
```

映射：

| 位置 | token |
|---|---|
| 移动页边 | `max(var(--s-4), env(safe-area-inset-*))` |
| 桌面左装订 | `var(--s-12)` |
| 桌面右 | `var(--s-6)` |
| 顶栏高 | `calc(var(--s-14) + env(safe-area-inset-top))` |
| 顶栏下 → 内页 H1 | `var(--s-8)` |
| 顶栏下 → Home H1 | `var(--s-14)` |
| 砖列距 | `var(--s-4)` |
| 砖行距 | `var(--s-7)` |
| 砖内垫 | `var(--s-3) var(--s-4)` |
| 详情字段 | `var(--s-3)` |
| 能力条距 | `var(--s-2)` |
| 按钮组 | `var(--s-4)` |
| 按钮左右 | `.btn` `var(--s-5)` / `.btn-lg` `1.375rem` / `.btn-sm` `var(--s-3)` |

控件最小高：`.btn` 2.75rem（44px @16）、触控 `.btn` 3rem、芯片 1.75rem。不要全站一个 `gap`。

---

## 字号尺度

Apple：大字收字距、紧行高；小字略放字距；层级用字重+字号+行高一起变。

```css
:root {
  --font-ui: "Atkinson Hyperlegible", ui-sans-serif, system-ui, sans-serif;
  --font-num: "Oxanium", ui-sans-serif, system-ui, sans-serif;
}
.h1-home {
  font: 700 clamp(2.25rem, 6vw, 4.5rem)/1.08 var(--font-ui);
  letter-spacing: -0.022em;
}
.h1-page {
  font: 700 2rem/1.12 var(--font-ui);
  letter-spacing: -0.018em;
}
.body {
  font: 400 1.0625rem/1.45 var(--font-ui); /* 17px @16 */
  letter-spacing: 0;
  max-width: 42rem;
}
.nav {
  font: 400 0.9375rem/1.3 var(--font-ui);
  letter-spacing: 0.01em;
}
.num {
  font: 700 1rem/1 var(--font-num);
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
}
.chip-type {
  font: 500 0.75rem/1 var(--font-num); /* 12px，不用 11px */
  letter-spacing: 0.04em;
}
```

自定义字体保留：Oxanium 是图鉴编号，不是「换掉 system-ui 装高级」。正文仍挂 `system-ui` 垫底。

---

## 色：什么符合 / 什么故意不合

符合 skill：

- 主色来自主题（青纸），不是 indigo 渐变
- 正文 `--ink` on `--sky` / `--paper` ≥ 4.5
- 霜上的字用 `--ink` 700，不用浅灰
- `prefers-contrast: more` 实底 + 2px 海军边
- 属性色只上色票，不上大面

故意不合（身份优先于 iOS 材质）：

- 不用系统分割线灰 `#C6C6C8`，用 `--line` 冷青
- 阴影是硬投影 `0 0.625rem 0 var(--line)`，不是 Apple 软投影
- 不做自动 Dark Mode。本站是午后青纸，夜间模式会毁身份。只响应 contrast / transparency / reduced-motion
- `--mark` 黄不当正文。只当编号底和导航条

---

## 特效 / hover / 过渡（2026-09-28d）

色轴锁定：海军 → 白，浅青可做底。  
`--sky` `--paper` 只做底，不做 hover 目标。Hover 只许往 `--blue` 或 `--navy`。  
禁止：提亮成更浅青、cyan 光晕、`box-shadow: 0 0 Npx`、电蓝渐变字。

### Hover 落点

| 控件 | 静止 | hover | active |
|---|---|---|---|
| `btn-primary` | `--navy` 面 | `#00284D`（比 navy 更深，不是更亮） | scale 0.97 + 投影掉 |
| `btn-paper` | 纸面 + 海军边 | 边和字改 `--blue`，面仍纸 | scale 0.97 |
| 顶栏链 | `--ink` | 字 `--navy`，底仍 3px `--mark` 只给当前页 | 无下划线动画拉长 |
| 尺格 | 纸 + 硬投影 `--line` | 边 2px `--blue`，投影改 `0 0.625rem 0 var(--navy)` | 当前格边 `--navy` |
| 书签齿 | `--mark` | 仍黄，不要变蓝 | — |
| 井环 | 无描边 | 2px `--blue` 环，无 glow | 转盘中不改色 |
| 井心 | 白钮 | 钮边 `--navy` | 开合 |
| 名录/表行 | 透明 | 底 `color-mix(in srgb, var(--blue) 12%, var(--paper))` | 当前行 18% |
| 芯片未选 | 纸 | 边 `--blue` | 选中仍属性色 |
| 文字链 | `--navy` | `#00284D` 下划线 1px `--blue` | — |

色变 ≤80ms 或即时。不要 300ms 浅蓝淡入深蓝。

### 特效白名单（只有这些）

1. 进站摇球一次（已有）  
2. 井开合弹簧 + 剪影去滤镜（开的那一帧去掉 `brightness(0)`，不要闪白）  
3. 尺 / 转盘跟手 + 松手吸格  
4. 按压 `scale(0.97)` 100ms ease-out  
5. 硬投影颜色在 hover 时从 `--line` 换成 `--navy`（100ms）  
6. 顶栏仅在内容穿过时上霜  

禁止当特效：粒子、霓虹描边、扫描线循环、卡片漂浮、光斑、blur 整页、hover 放大立绘。

### 过渡白名单

| 属性 | 何时 | 时长 / 曲线 |
|---|---|---|
| `transform`（scale 0.97） | pointer-down / up | 100ms ease-out |
| `transform`（开合、尺、槽、转盘松手） | 弹簧 | damping 1.0 默认；有动量 0.8；response 0.3–0.4 |
| `opacity` | reduced-motion 交叉淡入 | 200ms ease |
| `filter`（剪影 → 彩色） | 井打开 | 与开合同步，response 0.4 |
| `backdrop-filter` + 顶栏底 | 内容穿过顶栏 | 180ms ease |
| `box-shadow` 色 | hover 投影改海军 | 100ms ease |
| `border-color` | 尺格 / 纸按钮 hover | ≤80ms |

禁止：`transition: all`、对 `background-color` 做 300ms、width/height 布局动画、每段 fade-up、hover 放大砖或井。

---

## 无障碍

- 正文与底对比 ≥ 4.5。`--ink` on `--sky` 通过。`--mark` 上只放深字。
- 焦点环一律 3px `--mark`，offset 3px。不要 outline:none。
- 球按钮若无字，`aria-label="Open the dex"`。
- 属性色票旁仍写 type 英文，不只靠颜色。
- 开合动画尊重 `prefers-reduced-motion`。
- 顶栏霜尊重 `prefers-reduced-transparency`。
- 高对比模式下去掉霜，描边加实。

---

## CSS 落点

```
css/tokens.css    色、字、半径、阴影、条分段
css/base.css      reset、青纸、装订边、顶栏、表格
css/buttons.css   六变体 + 状态 + 芯片 + 搜索
css/pokeball.css  球结构、晃、开合、虚线空槽
css/pages.css     分页骨架
```

半径 token：

```css
--r-file: 4px;
--r-key:  4px 4px 14px 4px;
--r-ball: 50%;
--r-chip: 4px;
```

---

## 预交付核对

- [x] 把站名换成别的行业，青纸+黄编号+右下切角键+正圆球会不对味
- [x] 无紫渐变字、无 Inter/Poppins、无居中双 CTA、无三等分功能卡
- [x] 卡片只装标本，不装说明和表
- [x] 每区一个主键，文案是结果
- [x] 间距行距故意不均
- [x] 图像来自立绘，图标来自 CSS 球
- [x] 焦点、对比、reduced-motion / reduced-transparency 已写进规则
- [x] 开合可打断、腰带拖拽 1:1 + rubberband，装饰动画仍只有三处
- [x] 无 Unlock / Trusted by / Get started

本文件管外观。页面清单与 API 次数仍以 `pokemon-web-project-plan.md` 为准。
