# 151 File — 交互锁定

修订：2026-09-22。  
与 `pokemon-web-project-plan.md` §4.9 同一套，不另开第 9 页。

砖单击 → 详情。加入只用 `Add to belt`。  
禁止：Dex 拖砖（C）、双击 Add（D）、长按预览（E）。

## 做

| ID | 位置 | 行为 |
|---|---|---|
| 1 | 全局 | 顶栏：Dex Regions Types Belt Lineup File。站名+球回 Home |
| 2 | 全局 | 详情后退先合球 |
| 3 | 全局 | `/` 聚焦 Dex / Lineup 搜索 |
| 4 | 全局 | `Esc` 关详情或清空搜索 |
| 5 | 全局 | `prefers-reduced-motion`：不摇、不开合 |
| 6–9 | Home | 大球进 Dex；三标本进详情；链去 Regions；进站摇一次 |
| 10–16 | Dex | 即时搜；回车进唯一匹配；type 单选；地区标签回 Regions；加载更多；单击详情；Add 键；小球 hover |
| 17–20 | Detail | 开合球；Add；shiny；Compare in lineup 带当前 id |
| 21–23 | Types | 色票 / 表头 / 单元格 → Dex `?type=` |
| 24–26 | Regions | 点行或 ↑↓+Enter → Dex `?region=` |
| 27–32 | Belt | 点槽详情；Remove 左移；Clear；空槽去 Dex；Check lineup；**仅六槽内**拖拽换序 |
| 33–39 | Lineup | 点腰带填左右；搜索填槽；`?a=&b=`；Swap；Clear 左/右；Coverage=`?type=`；Holes=`?resist=`；Speed 标 `faster` |
| 40 | File | 外链新标签；球音开关；快捷键说明 |
| A | Home / Dex | `Draw one` 当前地区随机 id，进详情 |
| B | Detail | `←` `→` 同地区相邻编号 |
| F | Detail / Lineup | `Copy link` |
| G | Dex | `file151.seen`，看过编号降对比 |
| H | File | `file151.sound`，默认 `off`；仅开球一声 `assets/ball.wav` |
| I | Types | 表 hover 划亮行列 |
| J | Lineup → Dex | Holes → `?resist=`，防御倍率 ≤ 0.5。芯片 `resist fire` 可叉。可与 type/region/q 共存 |

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
