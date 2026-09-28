# 151 File — 交互锁定

修订：2026-09-28d。Dex = Spine + Ledger + Film。  
与 `dex-presentation.md`、计划 §4.2 同一套。

Dex：点脊换段；点名录或尺换当前只；`Open #id` 进详情。加入只用 `Add to belt`。  
禁止：网格、Well、Stack、Dex 拖砖（C）、双击 Add（D）、长按预览（E）。

## 做

| ID | 位置 | 行为 |
|---|---|---|
| 1 | 全局 | 顶栏：Dex Regions Types Belt Lineup File。站名+球回 Home |
| 2 | 全局 | 详情后退先合球 |
| 3 | 全局 | `/` 聚焦 Dex / Lineup 搜索 |
| 4 | 全局 | `Esc` 关详情、清搜索、清编号缓冲 |
| 5 | 全局 | `prefers-reduced-motion`：不摇、不开合位移 |
| 6–9 | Home | 大球进 Dex；三标本进详情；链去 Regions；进站摇一次 |
| 10–16 | Dex | 即时搜；回车唯一匹配；type/resist 滤 list；地区标签回 Regions；点脊 / 名录 / 尺；`Open #id`；Add；尺拖吸格 |
| 17–20 | Detail | 开合球；Add；shiny；Compare in lineup 带当前 id |
| 21–23 | Types | 色票 / 表头 / 单元格 → Dex `?type=` |
| 24–26 | Regions | 点行或 ↑↓+Enter → Dex `?region=` |
| 27–32 | Belt | 点槽详情；Remove 左移；Clear；空槽去 Dex；Check lineup；仅六槽内拖拽换序 |
| 33–39 | Lineup | 点腰带填左右；搜索填槽；`?a=&b=`；Swap；Clear 左/右；Coverage=`?type=`；Holes=`?resist=`；Speed 标 `faster` |
| 40 | File | 外链新标签；球音开关；快捷键说明 |
| A | Home / Dex | Home：随机进详情。Dex：随机当前过滤，尺吸格并开井 |
| B | Detail | `←` `→` 同地区相邻编号 |
| F | Detail / Lineup | `Copy link` |
| G | Dex | `file151.seen`，看过编号降对比 |
| H | File | `file151.sound`，默认 `off`；仅开球一声 `assets/ball.wav` |
| I | Types | 表 hover 划亮行列 |
| J | Lineup → Dex | Holes → `?resist=`。芯片 `resist fire` 可叉 |
| K | Dex 井环 | 刻度盘。圆环上转，角度映射当前过滤列表，松手吸只。不开关井 |
| L | Dex | 编号键入。无输入焦点时数字键最多 3 位，井旁 `_25`。满 3 位或 Enter 跳 id（须在当前过滤内）。Esc 清缓冲 |
| M | Dex 尺 | 书签齿。过滤结果中逢 `1,51,101…` 或区首，格顶一颗 `--mark` 齿。点齿跳段 |
| N | Dex 井 | 剪影井。合着 artwork `brightness(0)`。打开上色。reduced-motion 仍剪影，无额外过渡 |

## 存储

- `file151.belt` id[] ≤6
- `file151.seen` id[]
- `file151.sound` `"on"` \| `"off"` 默认 off

## 查询

```
pokedex.html?region=kanto&type=water&resist=fire&q=pi
pokemon.html?id=25
lineup.html?a=25&b=6
```

`type` 与 `resist` 禁止混用同一个参数。

## Dex 呈现

已锁定：井在上，尺在下，同一页。加上 K / L / M / N。

未采用：名录台座、档案叠、脊标簿、标本砖网格、双井、叫声、井拖进腰带。

禁止再加：圆形星系、3D 球仓、按身高排队。

### K / 井 手势分割

| 命中 | 手势 | 结果 |
|---|---|---|
| 井心约 44px | tap | 开 / 合。合剪影，开上色 |
| 井环（心外、球边内） | 移动 ≥10px 的圆周拖 | 转盘换只，不开关井 |
| 井环 | 移动 <10px | 忽略，不开关 |
| 胶片尺 | 横拖 / 点格 / 点齿 | 换只，井保持开合 |
| 井心 | 拖 | 忽略。禁止拖去腰带 |
