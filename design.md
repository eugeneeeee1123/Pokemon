# 151 File — UI Design

修订：2026-09-27。Apple 流体界面规则写入「触感与材质」。交互仍以 `interactions.md` 为准。砖单击进详情。无双击、无长按、无从 Dex 拖入。

对象：关都 151 只的静态图鉴站。  
读者：跟风做前端的人，不一定懂设定。  
主任务：找一只、看数值、塞进 6 人队伍。

视觉身份：午后关都天空下的手持图鉴。页面是纸质档案，精灵球是唯一的玩具物件。不是红白主题站，不是 SaaS 仪表盘。

---

## 五轴

1. **Color**  
   主色是天空冷青，不是 Tailwind sky、不是紫蓝渐变。红与黄只出现在球和编号上。页面 60% 青纸、30% 白档案、10% 海军+球红。

2. **Type**  
   两套：Oxanium 管编号、按钮、能力值；Atkinson Hyperlegible 管标题和说明。不用 Inter / Roboto / Poppins / Geist / Space Grotesk。

3. **Layout**  
   左对齐档案。首页左文右球，球本身是入口。图鉴不是三列均分功能卡。详情左大图右数据，不用套娃卡片。

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

写入 `css/tokens.css`。

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
}
```

品牌对照：官方黄 `#FFCB05`、蓝 `#3D7DCA`、海军 `#003A70` 只借海军和黄。页面青纸比官方蓝浅两档，避免整站变 logo 色。

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
|  | 151 FILE     [find name or number]    n/151  |
|  | fire water grass ...                         |
|  | #001 tile  #002 tile  #003 tile  #004 tile   |
|  | art in circle tray, number stamped top-left  |
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

- `<720px`：装订边取消。首页球改到标题下。Dex 两列。详情上图下数据。
- `720–1080`：Dex 三列。
- `>1080`：Dex 四列。装订边恢复。

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

### 标本砖（Dex / 首页推荐）

- 白底、4px 圆角、`0 10px 0 #8EB8D2`
- 左上编号黄块：`--mark` 底 + Oxanium `--ink`，格式 `#025`
- 中：直径 72% 的浅青圆托盘，artwork 居中，不裁成圆
- 下：名字 Atkinson 700 16px + 一排色票
- 右上 32px 小球，hover 才晃
- 整砖是链接。不要砖内再套按钮
- 首页第一只砖宽 `2fr`，后两只 `1fr`。禁止三等分

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

不要全站一个 `gap`。

- 页边：桌面左 48px 装订 + 右 24px；移动 16px
- 顶栏下到标题：32px（Home 56px）
- 砖网格：列距 16px，行距 28px（行更疏，像档案行距）
- 详情字段块：12px；能力条之间 8px
- 按钮组：主键和下一控件 16px，不均分 flex 拉满

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
