# 151 FILE — All-In-One Codebase

> 本文件汇集了 **151 File**（宝可梦纯原生前端 Web 站点）的全部源码。
> 包含 15 个主页面与扩展页面、5 个全局样式表、17 个前端 JS 核心模块、辅助脚本、矢量资源、项目规范以及对话日志索引。

---

## 目录 (Table of Contents)

**汇总统计**: 共打包 **47** 个源码文件 | **19,022** 行代码 | **686,080** 字节

> 💡 **对话记录提示**: 本项目从立项至全部迭代的历史对话记录已汇编至独立文档 [`CHATLOG.md`](./CHATLOG.md)，共收录 20 个会话周期、189 轮交互记录。

---

### 1. HTML 页面结构 (HTML Pages)

- [1.1 `index.html` (Home / 青纸首页)](#11-indexhtml-home-青纸首页)
- [1.2 `pokedex.html` (Dex / 双视图全 1025 图鉴)](#12-pokedexhtml-dex-双视图全-1025-图鉴)
- [1.3 `pokemon.html` (Detail / 详情与开球展台)](#13-pokemonhtml-detail-详情与开球展台)
- [1.4 `regions.html` (Regions / 10 官方地区地图)](#14-regionshtml-regions-10-官方地区地图)
- [1.5 `types.html` (Types / 18 属性矩阵克制表)](#15-typeshtml-types-18-属性矩阵克制表)
- [1.6 `moves.html` (Moves / 招式数据库与战斗属性)](#16-moveshtml-moves-招式数据库与战斗属性)
- [1.7 `abilities.html` (Abilities / 特性效果与宝可梦索引)](#17-abilitieshtml-abilities-特性效果与宝可梦索引)
- [1.8 `collection.html` (Collection / 全图鉴与地区收集进度)](#18-collectionhtml-collection-全图鉴与地区收集进度)
- [1.9 `team.html` (Belt / 6 槽腰带编成)](#19-teamhtml-belt-6-槽腰带编成)
- [1.10 `lineup.html` (Lineup / 战力与属性缺口分析)](#110-lineuphtml-lineup-战力与属性缺口分析)
- [1.11 `battle-lab.html` (Battle Lab / 双宝可梦对战推演)](#111-battle-labhtml-battle-lab-双宝可梦对战推演)
- [1.12 `characters.html` (Characters / 动画与历代游戏核心人物名录)](#112-charactershtml-characters-动画与历代游戏核心人物名录)
- [1.13 `games.html` (Games / 历代正作游戏与各世代版本海报档案)](#113-gameshtml-games-历代正作游戏与各世代版本海报档案)
- [1.14 `about.html` (File / 架构说明与数据源)](#114-abouthtml-file-架构说明与数据源)
- [1.15 `quiz.html` (Booster Pack Lab / 实体卡包拆包实验室)](#115-quizhtml-booster-pack-lab-实体卡包拆包实验室)

### 2. CSS 样式模块 (CSS Stylesheets)

- [2.1 `css/tokens.css` (设计 Token & 变量)](#21-csstokenscss-设计-token-变量)
- [2.2 `css/base.css` (全局排版与基础样式)](#22-cssbasecss-全局排版与基础样式)
- [2.3 `css/buttons.css` (按钮与交互控件规范)](#23-cssbuttonscss-按钮与交互控件规范)
- [2.4 `css/pokeball.css` (开闭精灵球组件动画)](#24-csspokeballcss-开闭精灵球组件动画)
- [2.5 `css/pages.css` (各页面专用布局与响应式样式)](#25-csspagescss-各页面专用布局与响应式样式)

### 3. JavaScript 核心模块 (JavaScript Modules)

- [3.1 `js/api.js` (PokeAPI 异步请求与缓存)](#31-jsapijs-pokeapi-异步请求与缓存)
- [3.2 `js/regions-data.js` (10 地区编号区间字典)](#32-jsregions-datajs-10-地区编号区间字典)
- [3.3 `js/regions.js` (地区实地探索地图与生态点位交互)](#33-jsregionsjs-地区实地探索地图与生态点位交互)
- [3.4 `js/types-chart.js` (18×18 属性克制常数矩阵)](#34-jstypes-chartjs-18×18-属性克制常数矩阵)
- [3.5 `js/pokeball.js` (精灵球开合音效与转场控制)](#35-jspokeballjs-精灵球开合音效与转场控制)
- [3.6 `js/pokedex.js` (名录+胶片双视图/全1025只图鉴渲染)](#36-jspokedexjs-名录+胶片双视图全1025只图鉴渲染)
- [3.7 `js/pokemon.js` (详情页标本台/3D模型/Shiny切换)](#37-jspokemonjs-详情页标本台3d模型shiny切换)
- [3.8 `js/types.js` (属性色票与矩阵交互)](#38-jstypesjs-属性色票与矩阵交互)
- [3.9 `js/team.js` (腰带存储与拖拽排序)](#39-jsteamjs-腰带存储与拖拽排序)
- [3.10 `js/lineup.js` (弱点缺口计算与两只对比)](#310-jslineupjs-弱点缺口计算与两只对比)
- [3.11 `js/moves.js` (招式库检索与分页渲染)](#311-jsmovesjs-招式库检索与分页渲染)
- [3.12 `js/abilities.js` (特性库检索与宝可梦索引)](#312-jsabilitiesjs-特性库检索与宝可梦索引)
- [3.13 `js/collection.js` (图鉴与地区收集度统计)](#313-jscollectionjs-图鉴与地区收集度统计)
- [3.14 `js/battle-lab.js` (对战实验室与克制比对)](#314-jsbattle-labjs-对战实验室与克制比对)
- [3.15 `js/store.js` (本地存储与安全缓存管理)](#315-jsstorejs-本地存储与安全缓存管理)
- [3.16 `js/quiz.js` (TCG 卡包实验室/实体开包/去重算法/卡册收藏)](#316-jsquizjs-tcg-卡包实验室实体开包去重算法卡册收藏)
- [3.17 `js/global-search.js` (全局命令面板快捷检索)](#317-jsglobal-searchjs-全局命令面板快捷检索)

### 4. 矢量资源、脚本与配置 (Assets, Scripts & Config)

- [4.1 `scripts/make-thumbs.mjs` (缩略图离线生成脚本)](#41-scriptsmake-thumbsmjs-缩略图离线生成脚本)
- [4.2 `scripts/make-posters.mjs` (海报图离线生成脚本)](#42-scriptsmake-postersmjs-海报图离线生成脚本)
- [4.3 `scripts/make-game-posters.mjs` (游戏正作海报离线生成脚本)](#43-scriptsmake-game-postersmjs-游戏正作海报离线生成脚本)
- [4.4 `scripts/generate-chatlog.mjs` (项目对话与开发日志生成脚本)](#44-scriptsgenerate-chatlogmjs-项目对话与开发日志生成脚本)
- [4.5 `assets/favicon.svg` (精灵球矢量图标)](#45-assetsfaviconsvg-精灵球矢量图标)
- [4.6 `.gitignore` (版本控制忽略文件)](#46-gitignore-版本控制忽略文件)

### 5. 附录参考模板 (Appendix & Demos)

- [5.1 `demo-interactive.html` (交互组件演示样板)](#51-demo-interactivehtml-交互组件演示样板)
- [5.2 `ui-template.html` (原始设计参考模板)](#52-ui-templatehtml-原始设计参考模板)

### 6. 项目规范与产品档案 (Specifications & Guidelines)

- [6.1 `PRODUCT.md` (产品愿景与功能架构规范)](#61-productmd-产品愿景与功能架构规范)
- [6.2 `AGENTS.md` (Agent 操作红线与工程约束规范)](#62-agentsmd-agent-操作红线与工程约束规范)

---

## 1. HTML 页面结构 (HTML Pages)

### 1.1 `index.html` (Home / 青纸首页)

- **文件路径**: `index.html`  
- **代码行数**: 361 行  
- **文件大小**: 16,907 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>151 FILE — Kanto Archive</title>
  <meta name="description" content="151 FILE is a night-archive Pokédex: browse all 1025 species by region and type, build a six-Pokémon belt and compare lineups.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="151 FILE — Kanto Archive">
  <meta property="og:description" content="151 FILE is a night-archive Pokédex: browse all 1025 species by region and type, build a six-Pokémon belt and compare lineups.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">
  
  <!-- CSS 模块架构 (按照项目规划 §3 分离) -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航（最大宽度 72rem 对齐正文） -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap home-page">
    <!-- Hero 区块：左文本与动作，右侧大型精灵球 CTA -->
    <section class="hero">
      <div>
        <div class="meta-eyebrow">
          <span>KANTO SPECIMENS</span>
          <span>/</span>
          <span>#001–#151</span>
        </div>
        <h1 style="margin:0 0 var(--s-3); line-height:1;">
          <img src="assets/pokemon-logo.svg" alt="Pokémon" class="hero-pokemon-logo">
        </h1>
        <p>National Dex numbers. Open the Kanto 151 by default. Other regions live in Regions — not a second product.</p>
        <div class="actions">
          <a class="btn btn-primary btn-lg" href="pokedex.html?region=kanto">Open the dex</a>
          <a class="link-action" href="regions.html">Open regions</a>
          <button class="btn btn-paper" id="random-btn" type="button" style="margin-left:0.5rem;">Draw specimen</button>
        </div>
      </div>

      <!-- 大型精灵球：进站 wobble 最多 3 下，点击进 Dex -->
      <button class="hero-ball-btn" id="hero-ball" type="button" aria-label="Open the dex">
        <img src="assets/pokeball.png" alt="Open the dex" class="hero-ball-img">
      </button>
    </section>

    <!-- Daily Specimen 今日标本 -->
    <section class="daily-specimen-section" id="daily-specimen" style="background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:1rem 1.5rem; margin-top:1rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; border-bottom:1px solid var(--line); padding-bottom:0.5rem; margin-bottom:1rem;">
        <div class="meta-eyebrow" style="margin:0;">
          <span>TODAY'S SPECIMEN</span>
          <span>/</span>
          <span id="daily-date"></span>
        </div>
        <span id="daily-seen-tag" style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft);">Checking archive...</span>
      </div>

      <div id="daily-card" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1.25rem;">
        <div style="display:flex; align-items:center; gap:1.25rem;">
          <div id="daily-img-wrap" style="width:80px; height:80px; display:flex; align-items:center; justify-content:center; background:var(--sky-deep); border:1px solid var(--line); border-radius:4px;">
            <span style="font-size:0.75rem; color:var(--ink-soft);">Loading...</span>
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span class="id-badge" id="daily-id">#000</span>
              <h3 id="daily-name" style="font-family:var(--font-ui); font-size:1.25rem; font-weight:700; color:var(--ink); margin:0; text-transform:capitalize;">—</h3>
            </div>
            <div id="daily-types" style="display:flex; gap:0.35rem;"></div>
          </div>
        </div>
        <div style="display:flex; gap:0.75rem; align-items:center;">
          <a class="btn btn-primary" id="daily-open-link" href="#">Open file →</a>
        </div>
      </div>
    </section>

    <!-- Archive Status 概览 -->
    <section class="collection-summary" style="margin-top:0.75rem; margin-bottom:0.25rem;">
      <div>
        <span id="home-seen-count">0</span>
        <small>/ 1025 SEEN</small>
        <div class="progress" style="margin-top:0.6rem; height:6px;">
          <div id="home-seen-progress"></div>
        </div>
      </div>
      <div>
        <span id="home-fav-count">0</span>
        <small>FAVORITES</small>
        <div style="margin-top:0.6rem;">
          <a href="collection.html" style="font-family:var(--font-num); font-size:0.8125rem; color:var(--mark); text-decoration:none;">View collection →</a>
        </div>
      </div>
      <div>
        <span id="home-belt-count">0</span>
        <small>/ 6 IN BELT</small>
        <div style="margin-top:0.6rem;">
          <a href="team.html" style="font-family:var(--font-num); font-size:0.8125rem; color:var(--blue); text-decoration:none;">Manage belt →</a>
        </div>
      </div>
    </section>

    <!-- 标本档案条：初阶御三家 + 皮卡丘 + 拉普拉斯（整砖可点） -->
    <section class="specimens-section" aria-label="Pinned specimens">
      <div class="specimens-header">
        <span class="title">Pinned Specimens / 代表标本</span>
        <span class="hint">Tap Pokémon for Cry · Click tile to open file</span>
      </div>

      <div style="margin-bottom: 0.75rem;">
        <a id="resume" class="link-action" hidden href="#">Open last file</a>
      </div>

      <div class="specimens">
        <!-- #025 Pikachu (加宽首发) -->
        <a class="file-tile" href="pokemon.html?id=25" data-id="25" data-name="Pikachu">
          <div class="file-tile-top">
            <span class="id-badge">#025</span>
            <div class="type-badges">
              <span class="type-pill" style="background:#F8D030; color:#12324A;">ELEC</span>
            </div>
          </div>
          <div class="img-stage" title="Click Pokémon to play Cry & interact">
            <div class="stage-pedestal"></div>
            <div class="stage-shadow"></div>
            <div class="cry-ring"></div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" alt="Pikachu" class="specimen-img" width="220" height="220" loading="eager">
          </div>
          <div class="file-tile-info">
            <div class="file-tile-name">Pikachu</div>
            <div class="file-tile-meta">Mouse Pokémon · 0.4m · 6.0kg</div>
          </div>
        </a>

        <!-- #001 Bulbasaur (草系御三家) -->
        <a class="file-tile" href="pokemon.html?id=1" data-id="1" data-name="Bulbasaur">
          <div class="file-tile-top">
            <span class="id-badge">#001</span>
            <div class="type-badges">
              <span class="type-pill" style="background:#78C850; color:#12324A;">GRASS</span>
              <span class="type-pill" style="background:#A040A0; color:#fff;">POIS</span>
            </div>
          </div>
          <div class="img-stage" title="Click Pokémon to play Cry & interact">
            <div class="stage-pedestal"></div>
            <div class="stage-shadow"></div>
            <div class="cry-ring"></div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="Bulbasaur" class="specimen-img" width="180" height="180" loading="eager">
          </div>
          <div class="file-tile-info">
            <div class="file-tile-name">Bulbasaur</div>
            <div class="file-tile-meta">Seed Pokémon · 0.7m · 6.9kg</div>
          </div>
        </a>

        <!-- #004 Charmander (火系御三家) -->
        <a class="file-tile" href="pokemon.html?id=4" data-id="4" data-name="Charmander">
          <div class="file-tile-top">
            <span class="id-badge">#004</span>
            <div class="type-badges">
              <span class="type-pill" style="background:#F08030; color:#071422;">FIRE</span>
            </div>
          </div>
          <div class="img-stage" title="Click Pokémon to play Cry & interact">
            <div class="stage-pedestal"></div>
            <div class="stage-shadow"></div>
            <div class="cry-ring"></div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png" alt="Charmander" class="specimen-img" width="180" height="180" loading="eager">
          </div>
          <div class="file-tile-info">
            <div class="file-tile-name">Charmander</div>
            <div class="file-tile-meta">Lizard Pokémon · 0.6m · 8.5kg</div>
          </div>
        </a>

        <!-- #007 Squirtle (水系御三家) -->
        <a class="file-tile" href="pokemon.html?id=7" data-id="7" data-name="Squirtle">
          <div class="file-tile-top">
            <span class="id-badge">#007</span>
            <div class="type-badges">
              <span class="type-pill" style="background:#6890F0; color:#071422;">WATER</span>
            </div>
          </div>
          <div class="img-stage" title="Click Pokémon to play Cry & interact">
            <div class="stage-pedestal"></div>
            <div class="stage-shadow"></div>
            <div class="cry-ring"></div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png" alt="Squirtle" class="specimen-img" width="180" height="180" loading="eager">
          </div>
          <div class="file-tile-info">
            <div class="file-tile-name">Squirtle</div>
            <div class="file-tile-meta">Tiny Turtle · 0.5m · 9.0kg</div>
          </div>
        </a>

        <!-- #131 Lapras (乘龙/拉普拉斯) -->
        <a class="file-tile" href="pokemon.html?id=131" data-id="131" data-name="Lapras">
          <div class="file-tile-top">
            <span class="id-badge">#131</span>
            <div class="type-badges">
              <span class="type-pill" style="background:#6890F0; color:#071422;">WATER</span>
              <span class="type-pill" style="background:#98D8D8; color:#12324A;">ICE</span>
            </div>
          </div>
          <div class="img-stage" title="Click Pokémon to play Cry & interact">
            <div class="stage-pedestal"></div>
            <div class="stage-shadow"></div>
            <div class="cry-ring"></div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png" alt="Lapras" class="specimen-img" width="200" height="200" loading="eager">
          </div>
          <div class="file-tile-info">
            <div class="file-tile-name">Lapras</div>
            <div class="file-tile-meta">Transport · 2.5m · 220.0kg</div>
          </div>
        </a>
      </div>
    </section>
  </main>

  <footer class="home-footer site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/pokeball.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const id = window.store?.lastId();
      if (id) {
        const a = document.getElementById("resume");
        if (a) {
          a.hidden = false;
          a.href = `pokemon.html?id=${id}`;
          a.textContent = `Open last file #${String(id).padStart(3, "0")}`;
        }
      }

      const seen = window.store?.seen?.() || [];
      const favs = window.store?.favoriteIds?.() || [];
      const belt = window.store?.belt?.() || [];

      const seenEl = document.getElementById("home-seen-count");
      if (seenEl) seenEl.textContent = seen.length;
      const seenProg = document.getElementById("home-seen-progress");
      if (seenProg) seenProg.style.width = `${Math.min(100, (seen.length / 1025) * 100)}%`;

      const favEl = document.getElementById("home-fav-count");
      if (favEl) favEl.textContent = favs.length;

      const beltEl = document.getElementById("home-belt-count");
      if (beltEl) beltEl.textContent = belt.length;

      document.getElementById("random-btn")?.addEventListener("click", () => {
        const randId = Math.floor(Math.random() * 1025) + 1;
        location.href = `pokemon.html?id=${randId}`;
      });

      // Daily Specimen Logic
      function dailyId() {
        const d = new Date();
        const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
        return ((seed * 2654435761) >>> 0) % 1025 + 1;
      }

      async function renderDailySpecimen() {
        const d = new Date();
        const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        const dateEl = document.getElementById("daily-date");
        if (dateEl) dateEl.textContent = dateStr.toUpperCase();

        const curId = dailyId();
        const isSeen = (window.store?.seen?.() || []).includes(curId);

        const seenTag = document.getElementById("daily-seen-tag");
        if (seenTag) {
          seenTag.textContent = isSeen ? "SEEN IN ARCHIVE" : "UNDISCOVERED";
          seenTag.style.color = isSeen ? "var(--mark)" : "var(--ink-soft)";
        }

        const idBadge = document.getElementById("daily-id");
        if (idBadge) idBadge.textContent = `#${String(curId).padStart(3, "0")}`;

        const openLink = document.getElementById("daily-open-link");
        if (openLink) openLink.href = `pokemon.html?id=${curId}`;

        try {
          if (!window.pokeApi) return;
          const mon = await window.pokeApi.getPokemon(curId);
          if (!mon) return;

          const nameEl = document.getElementById("daily-name");
          if (nameEl) nameEl.textContent = mon.name;

          const imgWrap = document.getElementById("daily-img-wrap");
          if (imgWrap) {
            imgWrap.innerHTML = `<img src="${window.pokeApi.artUrl(curId)}" alt="${mon.name}" width="72" height="72" style="object-fit:contain; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3));" loading="lazy">`;
          }

          const typesWrap = document.getElementById("daily-types");
          if (typesWrap && mon.types) {
            typesWrap.innerHTML = mon.types.map(t => {
              const style = window.TYPES_CHART ? window.TYPES_CHART.getTypeStyle(t) : "background:#3A6A88; color:#fff;";
              return `<span class="chip" style="${style} font-size:0.75rem;">${t}</span>`;
            }).join("");
          }
        } catch (_) {}
      }

      renderDailySpecimen();
    });
  </script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.2 `pokedex.html` (Dex / 双视图全 1025 图鉴)

- **文件路径**: `pokedex.html`  
- **代码行数**: 140 行  
- **文件大小**: 7,189 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dex — 151 File</title>
  <meta name="description" content="Browse the Kanto 151 through a spine, ledger and film strip. Filter by type or resistance, then add a specimen to your belt.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Dex — 151 File">
  <meta property="og:description" content="Browse the Kanto 151 through a spine, ledger and film strip. Filter by type or resistance, then add a specimen to your belt.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html" aria-current="page">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap dex-page">
    <h1 class="sr-only">Dex</h1>
    <!-- 控制条：地区从 Regions 进入，搜索与属性只作用于当前地区 -->
    <div class="tools">
      <div class="tools-bar">
        <select id="region-select" class="region-select" aria-label="Select Region" style="font-family:var(--font-num); background:var(--paper); color:var(--ink); border:1px solid var(--line); border-radius:var(--r-btn); padding:0.25rem 0.5rem; font-size:0.8125rem;">
          <option value="all">National (#001–#1025)</option>
          <option value="kanto">Kanto (#001–#151)</option>
          <option value="johto">Johto (#152–#251)</option>
          <option value="hoenn">Hoenn (#252–#386)</option>
          <option value="sinnoh">Sinnoh (#387–#493)</option>
          <option value="unova">Unova (#494–#649)</option>
          <option value="kalos">Kalos (#650–#721)</option>
          <option value="alola">Alola (#722–#809)</option>
          <option value="galar">Galar (#810–#898)</option>
          <option value="hisui">Hisui (#899–#905)</option>
          <option value="paldea">Paldea (#906–#1025)</option>
        </select>
        <span class="count-badge" id="count-badge" aria-live="polite"></span>
        <input id="q" type="search" placeholder="Find a name or number" autocomplete="off" aria-label="Search the current region by name or number">
        <button class="chip" id="draw" type="button">Draw one</button>
        <output class="id" id="number-buffer" aria-live="polite" hidden></output>
      </div>
      <div class="type-row" role="toolbar" aria-label="Filter by type">
      <button class="chip" data-type="" data-on type="button">All types</button>
      <button class="chip" data-type="normal" type="button">normal</button>
      <button class="chip" data-type="fire" type="button">fire</button>
      <button class="chip" data-type="water" type="button">water</button>
      <button class="chip" data-type="electric" type="button">electric</button>
      <button class="chip" data-type="grass" type="button">grass</button>
      <button class="chip" data-type="ice" type="button">ice</button>
      <button class="chip" data-type="fighting" type="button">fighting</button>
      <button class="chip" data-type="poison" type="button">poison</button>
      <button class="chip" data-type="ground" type="button">ground</button>
      <button class="chip" data-type="flying" type="button">flying</button>
      <button class="chip" data-type="psychic" type="button">psychic</button>
      <button class="chip" data-type="bug" type="button">bug</button>
      <button class="chip" data-type="rock" type="button">rock</button>
      <button class="chip" data-type="ghost" type="button">ghost</button>
      <button class="chip" data-type="dragon" type="button">dragon</button>
      <button class="chip" data-type="dark" type="button">dark</button>
      <button class="chip" data-type="steel" type="button">steel</button>
      <button class="chip" data-type="fairy" type="button">fairy</button>
      <button class="chip" id="resist-chip" type="button" hidden></button>
      </div>
    </div>

    <!-- 同屏结构：Spine + Ledger + Stage + Film -->
    <div class="dex" id="dex-ledger-view">
      <!-- 左脊：50 号一段分册导航 -->
      <div class="spines" id="spines"></div>

      <!-- 中名录：该分册过滤清单，记录 #编号 + 英文名 -->
      <ul class="ledger" id="ledger" role="listbox" aria-label="Pokémon in this range"></ul>

      <!-- 右台座：3D 模型立绘、属性色票、加入腰带与详情入口 -->
      <div class="stage" id="stage"></div>

      <!-- 底胶片尺：整份过滤列表滚动条，支持吸格对齐 -->
      <div class="film" id="film"></div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#1025</span> National Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/pokedex.js?v=20261009b"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.3 `pokemon.html` (Detail / 详情与开球展台)

- **文件路径**: `pokemon.html`  
- **代码行数**: 102 行  
- **文件大小**: 4,045 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>File — 151 File</title>
  <meta name="description" content="Base stats, abilities, type matchups and official art for a single Pokémon file.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="File — 151 File">
  <meta property="og:description" content="Base stats, abilities, type matchups and official art for a single Pokémon file.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
  <style>
    /* The detail viewer uses a plain model stage, without the Poké Ball shell. */
    .detail-stage-box .stage-ball {
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      overflow: visible;
      cursor: default;
    }

    .detail-stage-box .stage-ball .lid-t,
    .detail-stage-box .stage-ball .lid-b,
    .detail-stage-box .stage-ball .lid-band,
    .detail-stage-box .stage-ball .lid-btn,
    .detail-stage-box #close-ball {
      display: none !important;
    }
  </style>
  <!-- 3D 渲染组件 (Google model-viewer) -->
  <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap wide">
    <div id="file"></div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js?v=3"></script>
  <script src="js/pokemon.js?v=9"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.4 `regions.html` (Regions / 10 官方地区地图)

- **文件路径**: `regions.html`  
- **代码行数**: 119 行  
- **文件大小**: 6,260 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Regions — 151 File</title>
  <meta name="description" content="Every region from Kanto to Paldea, with dex ranges and official maps.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Regions — 151 File">
  <meta property="og:description" content="Every region from Kanto to Paldea, with dex ranges and official maps.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html" aria-current="page">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
    <h1 class="page-title">Regions</h1>
    <p class="regions-lead">National Dex numbers. Official regional maps covering Kanto #001 through Paldea #1025. Forms are not separate files in v1. Click a region to open that slice of the dex.</p>

    <!-- 交互实地探索地图展台 (Interactive Regional Field Map) -->
    <section class="interactive-map-section" id="interactive-map-section" style="margin-bottom:2.5rem; background:var(--paper); border:1px solid var(--line); border-radius:6px; padding:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
        <div>
          <div class="meta-eyebrow" style="margin:0 0 0.25rem;">FIELD RECON ATLAS / 地区实地调查</div>
          <h2 id="current-region-title" style="font-family:var(--font-ui); font-size:1.5rem; color:var(--ink); margin:0 0 0.25rem;">Kanto Map & Habitat Pins</h2>
          <p id="current-region-desc" style="font-size:0.875rem; color:var(--ink-soft); margin:0;">Click glowing survey beacons to inspect landmark ecology and resident Pokémon specimens.</p>
        </div>
        <div style="display:flex; gap:0.75rem; align-items:center; flex-wrap:wrap;">
          <select id="region-selector" class="btn btn-paper" style="padding:0.5rem 0.85rem; font-family:var(--font-ui); font-weight:700; cursor:pointer;" aria-label="Select Region"></select>
          <a id="open-region-dex-btn" class="btn btn-primary" href="pokedex.html?region=kanto">Explore Region Dex →</a>
        </div>
      </div>

      <!-- 地图舞台与呼吸坐标点 -->
      <div class="field-map-stage" id="map-stage">
        <img id="active-map-img" class="field-map-img" src="assets/maps/kanto.webp" alt="Regional Map">
        <div class="pins-layer" id="pins-layer"></div>

        <!-- 浮动调查情报弹窗 (Recon Popover) -->
        <div class="recon-popover" id="recon-popover" hidden>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; margin-bottom:0.4rem;">
            <span class="recon-type-tag" id="recon-type">Habitat Type</span>
            <button class="recon-close-btn" id="recon-close-btn" type="button" aria-label="Close reconnaissance popup">✕</button>
          </div>
          <h3 class="recon-name" id="recon-name">Pallet Town</h3>
          <p class="recon-desc" id="recon-desc">Oak Pokémon Research Lab & quiet shores.</p>
          <div class="recon-pokemons-title">OBSERVED SPECIMENS / 栖息标本</div>
          <div class="recon-pokemons-list" id="recon-pokemons"></div>
        </div>
      </div>
    </section>

    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
      <h2 style="font-size:1.15rem; margin:0;">All 10 Regional Territories</h2>
      <span style="font-family:var(--font-num); font-size:0.8125rem; color:var(--ink-soft);">Select card to inspect map</span>
    </div>
    <!-- 10 官方地区地图画廊 (Atlas) -->
    <div class="atlas" id="atlas"></div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/regions-data.js"></script>
  <script src="js/regions.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.5 `types.html` (Types / 18 属性矩阵克制表)

- **文件路径**: `types.html`  
- **代码行数**: 97 行  
- **文件大小**: 4,205 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Types — 151 File</title>
  <meta name="description" content="The full 18×18 type effectiveness chart, with attacking and defending views.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Types — 151 File">
  <meta property="og:description" content="The full 18×18 type effectiveness chart, with attacking and defending views.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html" aria-current="page">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
    <h1 class="page-title">Types</h1>
    <p class="lead">Rows show attacking types; columns show defending types. Select a type label to filter the Dex, or a cell to browse by its defending type. Lineup handles dual-type defense.</p>

    <!-- 18 属性色票墙 -->
    <div class="wall" id="wall"></div>

    <!-- 18×18 属性对战矩阵板 -->
    <div class="board">
      <table class="types-table" id="chart"></table>
    </div>

    <!-- 图例说明 -->
    <div class="types-legend">
      <span><i class="dot" style="background:#3D7DCA"></i> 2× Super effective</span>
      <span><i class="dot" style="background:var(--paper); border:1px solid var(--line)"></i> 1× Normal effectiveness (blank cells)</span>
      <span><i class="dot" style="background:#1E3A55"></i> ½ Not very effective</span>
      <span><i class="dot" style="background:#071422; border:1px solid #1E3A55"></i> 0 Immune</span>
    </div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/types.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.6 `moves.html` (Moves / 招式数据库与战斗属性)

- **文件路径**: `moves.html`  
- **代码行数**: 108 行  
- **文件大小**: 3,966 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Moves — 151 File</title>
  <meta name="description" content="Browse Pokémon moves by type, category and battle properties.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html" aria-current="page">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap moves-page">
    <h1 class="page-title">Moves</h1>

    <div class="tools-bar">
      <label class="tool-field">
        <span>Search moves</span>
        <input
          id="move-search"
          type="search"
          placeholder="Search move name..."
          autocomplete="off"
          style="min-width: 14rem;"
        >
      </label>

      <label class="tool-field">
        <span>Type</span>
        <select id="move-type">
          <option value="">All types</option>
        </select>
      </label>

      <label class="tool-field">
        <span>Category</span>
        <select id="move-category">
          <option value="">All categories</option>
          <option value="physical">Physical</option>
          <option value="special">Special</option>
          <option value="status">Status</option>
        </select>
      </label>
    </div>

    <div id="move-status" class="move-status" aria-live="polite">Loading…</div>
    <div id="move-grid" class="dex-grid moves-grid"></div>
    <div id="move-pagination" class="move-pagination"></div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/moves.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.7 `abilities.html` (Abilities / 特性效果与宝可梦索引)

- **文件路径**: `abilities.html`  
- **代码行数**: 93 行  
- **文件大小**: 3,714 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Abilities — 151 File</title>
  <meta name="description" content="Browse Pokémon abilities, combat effects and specimen rosters.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html" aria-current="page">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap">
    <h1 class="page-title">Abilities</h1>
    <p class="lead" style="color:var(--ink-soft); margin-bottom:1.5rem;">
      Browse passive and combat abilities and inspect Pokémon that possess them.
    </p>

    <div class="tools-bar">
      <label class="tool-field">
        <span>Search abilities</span>
        <input
          id="ability-search"
          type="search"
          placeholder="Search ability name..."
          autocomplete="off"
          style="min-width: 14rem;"
        >
      </label>
    </div>

    <div id="ability-status" style="margin-bottom:1rem; font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;">Loading abilities index...</div>
    <div id="ability-grid" class="dex-grid"></div>
    <div id="ability-pagination" style="margin-top:1.5rem; margin-bottom:var(--s-8); text-align:center;"></div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/api.js"></script>
  <script src="js/abilities.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.8 `collection.html` (Collection / 全图鉴与地区收集进度)

- **文件路径**: `collection.html`  
- **代码行数**: 705 行  
- **文件大小**: 21,320 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Collection — 151 File</title>
  <meta name="description" content="Track your Pokémon discovery progress across the National Dex and 10 official regions.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
  <style>
    /* Dossier Ledger Header */
    .ledger-dossier-bar {
      display: grid;
      grid-template-columns: 1.25fr 1fr 1fr 1fr;
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      margin-bottom: 2rem;
      overflow: hidden;
    }
    .ledger-meta-block {
      background: rgba(7, 20, 34, 0.45);
      padding: 1.15rem 1.25rem;
      border-right: 1px solid var(--line);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.25rem;
    }
    .ledger-tag {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      letter-spacing: 0.08em;
      color: var(--mark);
      font-weight: 700;
    }
    .ledger-inst {
      font-family: var(--font-ui);
      font-size: 0.9375rem;
      color: var(--ink);
      font-weight: 700;
    }
    .ledger-status {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-family: var(--font-num);
      font-size: 0.6875rem;
      letter-spacing: 0.06em;
      color: var(--ok);
    }
    .status-indicator {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--ok);
      display: inline-block;
    }
    .ledger-cell {
      padding: 1.15rem 1.25rem;
      border-right: 1px solid var(--line);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .ledger-cell:last-child {
      border-right: none;
    }
    .ledger-label {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: var(--ink-soft);
      margin-bottom: 0.35rem;
    }
    .ledger-num-row {
      display: flex;
      align-items: baseline;
      gap: 0.35rem;
    }
    .ledger-num {
      font-family: var(--font-num);
      font-size: 2.15rem;
      line-height: 1;
      color: var(--mark);
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    .ledger-denom {
      font-family: var(--font-num);
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      color: var(--ink-soft);
    }

    /* Section Headings with Dossier Tag */
    .ledger-section-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .ledger-sub-tag {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      letter-spacing: 0.08em;
      color: var(--ink-soft);
    }

    /* Calibrated Gauge */
    .calibrated-gauge {
      position: relative;
      background: var(--sky-deep);
      border: 1px solid var(--line);
      border-radius: 2px;
      overflow: hidden;
    }
    .gauge-milestones {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.85rem;
    }
    .milestone-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-family: var(--font-num);
      font-size: 0.75rem;
      color: var(--ink-soft);
    }
    .milestone-badge img {
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
    }

    /* Expedition Belt Showcase */
    .ledger-action-link {
      font-family: var(--font-num);
      font-size: 0.8125rem;
      color: var(--mark);
      text-decoration: none;
      font-weight: 700;
    }
    .ledger-action-link:hover {
      text-decoration: underline;
    }
    .belt-roster-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 0.75rem;
      margin-top: 0.75rem;
    }
    .belt-specimen-card {
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 0.75rem 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      text-decoration: none;
      transition: border-color 140ms ease, background 140ms ease;
      min-height: 140px;
      position: relative;
    }
    .belt-specimen-card:hover {
      border-color: var(--mark);
      background: rgba(16, 35, 56, 0.9);
    }
    .belt-slot-tag {
      font-family: var(--font-num);
      font-size: 0.625rem;
      letter-spacing: 0.08em;
      color: var(--navy);
      align-self: flex-start;
      font-weight: 700;
    }
    .belt-art-wrap {
      width: 68px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.25rem 0;
    }
    .belt-art {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.45));
    }
    .belt-specimen-name {
      font-family: var(--font-ui);
      font-size: 0.875rem;
      color: var(--ink);
      display: block;
      margin-top: 0.15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      font-weight: 700;
    }
    .belt-specimen-num {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      color: var(--mark);
      font-weight: 700;
    }
    .belt-specimen-type {
      font-size: 0.6875rem;
      color: var(--ink-soft);
      text-transform: uppercase;
      margin-top: 0.15rem;
      font-weight: 700;
    }
    .belt-specimen-card.empty-slot {
      border-style: dashed;
      opacity: 0.7;
      justify-content: center;
    }
    .belt-specimen-card.empty-slot:hover {
      border-color: var(--navy);
      opacity: 1;
    }
    .empty-ball-ghost {
      width: 32px;
      height: 32px;
      opacity: 0.25;
      filter: grayscale(1);
    }
    .belt-empty-title {
      font-family: var(--font-ui);
      font-size: 0.8125rem;
      color: var(--navy);
      margin-top: 0.25rem;
      font-weight: 700;
    }
    .belt-empty-sub {
      font-size: 0.6875rem;
      color: var(--ink-soft);
    }

    /* 10 Regions Breakdown (5 columns x 2 rows) */
    #region-progress {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 0.75rem;
    }
    .collection-region {
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 0.85rem;
      margin-bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;
      transition: border-color 140ms ease;
      min-height: 125px;
    }
    .collection-region:hover {
      border-color: var(--navy);
    }
    .region-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0.35rem;
    }
    .region-meta-tag {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      color: var(--navy);
      letter-spacing: 0.08em;
      font-weight: 700;
    }
    .region-title {
      margin: 0.15rem 0 0;
      font-size: 0.9375rem;
    }
    .region-title-link {
      color: var(--ink);
      font-weight: 700;
      text-decoration: none;
    }
    .region-title-link:hover {
      color: var(--mark);
    }
    .region-mascot-art {
      width: 50px;
      height: 50px;
      object-fit: contain;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.45));
      flex-shrink: 0;
      pointer-events: none;
      transition: transform 160ms ease;
    }
    .collection-region:hover .region-mascot-art {
      transform: none;
    }
    .region-data-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 0.75rem;
    }
    .region-stat {
      color: var(--ink);
      font-family: var(--font-num);
      font-size: 0.75rem;
      font-variant-numeric: tabular-nums;
    }
    .region-rate {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      color: var(--mark);
      letter-spacing: 0.04em;
      font-weight: 700;
    }

    /* Priority Field Favorites Gallery */
    .favorites-gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 0.75rem;
      margin-top: 0.75rem;
    }
    .fav-specimen-card {
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 0.75rem 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      text-decoration: none;
      transition: border-color 140ms ease;
    }
    .fav-specimen-card:hover {
      border-color: var(--mark);
    }
    .fav-art-wrap {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.35rem;
    }
    .fav-art {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
    }
    .fav-specimen-name {
      font-family: var(--font-ui);
      font-size: 0.8125rem;
      color: var(--ink);
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    .fav-specimen-num {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      color: var(--mark);
    }
    .favorites-empty-shelf {
      grid-column: 1 / -1;
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 1.5rem 1.75rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .empty-shelf-ghosts {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    .ghost-mascot {
      width: 52px;
      height: 52px;
      object-fit: contain;
      opacity: 0.22;
      filter: grayscale(0.8);
    }
    .empty-shelf-copy strong {
      display: block;
      color: var(--ink);
      font-size: 0.9375rem;
      margin-bottom: 0.25rem;
    }
    .empty-shelf-copy p {
      color: var(--ink-soft);
      font-size: 0.8125rem;
      margin: 0;
    }

    /* Field Proficiency Seals (Monochrome / Brass Technical Stamps) */
    .badge-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.85rem;
    }
    .seal-card {
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.75rem;
      min-height: 140px;
      transition: border-color 140ms ease;
    }
    .seal-card.sealed {
      border-color: var(--mark);
      background: linear-gradient(180deg, rgba(255, 203, 5, 0.05) 0%, var(--paper) 100%);
    }
    .seal-card.unsealed {
      opacity: 0.6;
      background: rgba(16, 35, 56, 0.5);
    }
    .seal-mark {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--line);
      padding-bottom: 0.35rem;
    }
    .seal-serial {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: var(--navy);
    }
    .seal-card.sealed .seal-serial {
      color: var(--mark);
    }
    .seal-status-icon {
      font-family: var(--font-num);
      font-size: 0.8125rem;
      color: var(--line);
      font-weight: 700;
    }
    .seal-card.sealed .seal-status-icon {
      color: var(--mark);
    }
    .seal-title {
      font-family: var(--font-ui);
      font-size: 0.9375rem;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 0.25rem;
    }
    .seal-desc {
      font-size: 0.8125rem;
      color: var(--ink-soft);
      margin: 0;
      line-height: 1.35;
    }
    .seal-verdict {
      font-family: var(--font-num);
      font-size: 0.6875rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-weight: 700;
      margin-top: 0.25rem;
    }
    .seal-card.sealed .seal-verdict {
      color: var(--ok);
    }
    .seal-card.unsealed .seal-verdict {
      color: var(--ink-soft);
    }

    /* Responsive */
    @media (max-width: 960px) {
      .ledger-dossier-bar {
        grid-template-columns: repeat(2, 1fr);
      }
      .ledger-meta-block {
        grid-column: span 2;
        border-right: none;
        border-bottom: 1px solid var(--line);
      }
      .ledger-cell:nth-child(3) {
        border-right: 1px solid var(--line);
      }
      .ledger-cell:last-child {
        border-right: none;
      }
      .belt-roster-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      #region-progress {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .badge-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 560px) {
      .ledger-dossier-bar {
        grid-template-columns: 1fr;
      }
      .ledger-meta-block {
        grid-column: span 1;
      }
      .ledger-cell {
        border-right: none;
        border-bottom: 1px solid var(--line);
      }
      .ledger-cell:last-child {
        border-bottom: none;
      }
      .belt-roster-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      #region-progress {
        grid-template-columns: 1fr;
      }
      .badge-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html" aria-current="page">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap">
    <h1 class="page-title">Collection</h1>
    <p class="lead" style="color:var(--ink-soft); margin-bottom:1.5rem;">Archive progress ledger. Track specimen discoveries across National Dex and all 10 regions, stored locally.</p>

    <section class="ledger-dossier-bar" aria-label="Specimen archive metrics">
      <div class="ledger-meta-block">
        <span class="ledger-tag">SPECIMEN FIELD REGISTRY</span>
        <strong class="ledger-inst">Oak Ecological Archive</strong>
        <div class="ledger-status"><span class="status-indicator"></span>ACTIVE FILE</div>
      </div>

      <div class="ledger-cell">
        <span class="ledger-label">Cataloged Specimens</span>
        <div class="ledger-num-row">
          <span id="seen-count" class="ledger-num">0</span>
          <span class="ledger-denom">/ 1025</span>
        </div>
      </div>

      <div class="ledger-cell">
        <span class="ledger-label">Priority Specimens</span>
        <div class="ledger-num-row">
          <span id="favorite-count" class="ledger-num">0</span>
          <span class="ledger-denom">PINNED</span>
        </div>
      </div>

      <div class="ledger-cell">
        <span class="ledger-label">Expedition Belt</span>
        <div class="ledger-num-row">
          <span id="belt-count" class="ledger-num">0</span>
          <span class="ledger-denom">/ 6 SLOTS</span>
        </div>
      </div>
    </section>

    <section class="ledger-block" style="margin-bottom:2.25rem;">
      <div class="ledger-section-head">
        <h2 style="font-size:1.15rem; margin:0;">National Master Gauge</h2>
        <span class="ledger-sub-tag">001–1025 CONTINUOUS LEDGER</span>
      </div>
      <div class="progress calibrated-gauge" style="height:12px; margin-bottom:0.5rem;">
        <div id="national-progress"></div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <p id="national-text" style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem; margin:0;"></p>
        <div class="gauge-milestones">
          <span title="#001 Bulbasaur" class="milestone-badge"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="" width="22" height="22"> #001</span>
          <span title="#151 Mew" class="milestone-badge"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png" alt="" width="22" height="22"> #151</span>
          <span title="#493 Arceus" class="milestone-badge"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png" alt="" width="22" height="22"> #493</span>
          <span title="#1025 Pecharunt" class="milestone-badge"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1025.png" alt="" width="22" height="22"> #1025</span>
        </div>
      </div>
    </section>

    <!-- Expedition Belt Squad (Visual Specimen Showcase) -->
    <section class="ledger-block" style="margin-bottom:2.25rem;">
      <div class="ledger-section-head">
        <div>
          <h2 style="font-size:1.15rem; margin:0 0 0.25rem;">Expedition Belt Squad</h2>
          <p style="font-size:0.875rem; color:var(--ink-soft); margin:0;">Active 6-specimen deployment roster stored in belt memory.</p>
        </div>
        <a href="team.html" class="ledger-action-link">Open Belt Bay →</a>
      </div>
      <div id="belt-roster-grid" class="belt-roster-grid"></div>
    </section>

    <section class="ledger-block" style="margin-bottom:2.25rem;">
      <div class="ledger-section-head">
        <h2 style="font-size:1.15rem; margin:0;">Territorial Breakdown</h2>
        <span class="ledger-sub-tag">10 OFFICIAL REGIONS</span>
      </div>
      <div id="region-progress"></div>
    </section>

    <!-- Priority Field Favorites -->
    <section class="ledger-block" style="margin-bottom:2.25rem;">
      <div class="ledger-section-head">
        <div>
          <h2 style="font-size:1.15rem; margin:0 0 0.25rem;">Priority Field Specimens</h2>
          <p style="font-size:0.875rem; color:var(--ink-soft); margin:0;">Specimens flagged with star in Pokédex for dedicated observation.</p>
        </div>
        <span id="fav-count-indicator" class="ledger-sub-tag">0 PINNED</span>
      </div>
      <div id="favorites-specimen-gallery" class="favorites-gallery-grid"></div>
    </section>

    <!-- Field Proficiency Seals -->
    <section id="achievements" class="ledger-block" style="margin-top:2.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <h2 style="font-size:1.15rem; margin:0 0 0.25rem;">Field Proficiency Seals</h2>
          <p style="font-size:0.875rem; color:var(--ink-soft); margin:0;">Earn seals as you log Pokémon and complete challenges.</p>
        </div>
        <span id="badge-unlocked-summary" style="font-family:var(--font-num); color:var(--mark); font-weight:700; font-size:0.875rem;">0 / 10 ACTIVE · 2 ARCHIVED</span>
      </div>
      <div class="badge-grid" id="badge-grid"></div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/collection.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.9 `team.html` (Belt / 6 槽腰带编成)

- **文件路径**: `team.html`  
- **代码行数**: 122 行  
- **文件大小**: 5,749 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Belt — 151 File</title>
  <meta name="description" content="Your six-slot Pokémon belt, saved in this browser.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Belt — 151 File">
  <meta property="og:description" content="Your six-slot Pokémon belt, saved in this browser.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html" aria-current="page">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
    <h1 class="page-title">Belt</h1>
    <p class="lead">Six slots. Stored as <code>file151.belt</code> in this browser. Drag a filled slot onto another, or use the ◀ ▶ buttons, to reorder. Empty slot opens the dex.</p>

    <!-- 快捷操作区 -->
    <div class="actions" style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-bottom:1.25rem;">
      <a class="btn btn-primary" href="lineup.html">Check lineup</a>
      <button class="btn btn-paper" id="clear" type="button">Clear belt</button>
    </div>

    <!-- 6 槽位网格 -->
    <div class="slots" id="slots"></div>

    <!-- 满 6 只出现的一行分析：重复 type、最快、最慢 -->
    <div class="belt-summary" id="belt-summary" hidden></div>

    <!-- 满 6 只出现的数据诊断面板：六维雷达图与 18 属性防御热力 -->
    <section class="team-analysis-section" id="team-analysis" hidden style="margin-top:2rem; background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:1.5rem;">
      <h2 style="font-family:var(--font-ui); font-size:1.35rem; color:var(--ink); margin:0 0 0.5rem;">
        Team Defense & Stat Diagnostics
      </h2>
      <p style="font-size:0.875rem; color:var(--ink-soft); margin-bottom:1.5rem;">
        Composite radar showing the average baseline stats of your 6-specimen belt, alongside team defense coverage across all 18 types.
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr)); gap:2rem; align-items:start;">
        <!-- 六维雷达图 -->
        <div style="display:flex; flex-direction:column; align-items:center; background:var(--sky-deep); border:1px solid var(--line); border-radius:4px; padding:1.25rem;">
          <h3 style="font-family:var(--font-num); font-size:0.8125rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 1rem;">
            Base Stat Radar (Average)
          </h3>
          <canvas id="radar-canvas" width="300" height="300" style="max-width:100%; height:auto;"></canvas>
        </div>

        <!-- 18 属性防御热力条 -->
        <div>
          <h3 style="font-family:var(--font-num); font-size:0.8125rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 1rem;">
            18-Type Team Best Resistance
          </h3>
          <div id="defense-heatmap" style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;"></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/team.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.10 `lineup.html` (Lineup / 战力与属性缺口分析)

- **文件路径**: `lineup.html`  
- **代码行数**: 126 行  
- **文件大小**: 5,878 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lineup — 151 File</title>
  <meta name="description" content="Check a six-Pokémon belt for type coverage, holes and resistances, or compare two Pokémon side by side.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Lineup — 151 File">
  <meta property="og:description" content="Check a six-Pokémon belt for type coverage, holes and resistances, or compare two Pokémon side by side.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
    <nav aria-label="Breadcrumb" style="margin-bottom:0.5rem;">
      <a class="link-action" href="team.html">Belt</a>
      <span aria-hidden="true"> → </span>
      <span aria-current="page">Lineup</span>
    </nav>
    <h1 class="page-title">Lineup</h1>
    <p class="lead">Typed as the species types, not moves. Coverage chips open Dex by attack type. Holes open Dex by <code>resist</code>.</p>

    <!-- 腰带 6 槽缩略栏 -->
    <h2 class="lineup-subheading">Belt</h2>
    <div class="lineup-belt" id="belt"></div>
    <p class="lineup-empty" id="belt-empty" hidden>Belt is empty. <a class="link-action" href="pokedex.html">Open the dex</a> and add up to 6.</p>

    <!-- 打击面覆盖 (Coverage) -->
    <h2 class="lineup-subheading">Coverage</h2>
    <p class="lineup-note">Calculated from species types only. Shows opposing types that receive super-effective damage from at least one belt member's primary or secondary type. Does not account for moves, abilities, or stats.</p>
    <div class="wall" id="coverage"></div>

    <!-- 防御盲点 (Holes) -->
    <h2 class="lineup-subheading">Holes</h2>
    <p class="lineup-note">Shows attack types that deal super-effective damage to at least one current belt member. Based on species types and the type chart; abilities, held items, and moves are not included.</p>
    <div class="wall" id="holes"></div>

    <!-- 属性抵抗 (Resists) -->
    <h2 class="lineup-subheading">Resists</h2>
    <div class="wall" id="resists"></div>
    <p class="lineup-dupes" id="dupes"></p>

    <!-- 左右并排比对 (Side by side) -->
    <h2 class="lineup-subheading">Side by side</h2>
    <div class="lineup-pair">
      <div class="lineup-pane" id="left"></div>
      <div class="lineup-mid">
        <button class="btn btn-paper" id="swap" type="button">Swap sides</button>
        <button class="btn btn-paper" id="cl" type="button">Clear left</button>
        <button class="btn btn-paper" id="cr" type="button">Clear right</button>
        <button class="btn btn-paper" id="copy" type="button">Copy link</button>
        <p id="copy-feedback" class="lineup-note" role="status" aria-live="polite" hidden></p>
        <input id="copy-fallback" type="text" readonly hidden aria-label="Lineup link to copy manually" style="width:100%;">
      </div>
      <div class="lineup-pane" id="right"></div>
    </div>

    <!-- 文字比对结论 (Verdict) -->
    <div class="lineup-verdict" id="lineup-verdict" hidden aria-live="polite"></div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <!-- 脚本依赖 -->
  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/lineup.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.11 `battle-lab.html` (Battle Lab / 双宝可梦对战推演)

- **文件路径**: `battle-lab.html`  
- **代码行数**: 101 行  
- **文件大小**: 4,453 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Battle Lab — 151 File</title>
  <meta name="description" content="Compare two Pokémon specimens, base stats, speed tier and dual-type matchups.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html" aria-current="page">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap">
    <h1 class="page-title">Battle Lab</h1>
    <p class="lead" style="color:var(--ink-soft); margin-bottom:1.5rem;">
      Specimen matchup laboratory. Compare two Pokémon side-by-side, analyze base stat differences, speed advantage and type effectiveness.
    </p>

    <section class="lineup-pair">
      <div class="lineup-pane">
        <label for="battle-left" style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink-soft); font-weight:700;">SPECIMEN A</label>
        <input id="battle-left" type="search" placeholder="Type name or # (e.g. 25, Charizard) & Enter..." autocomplete="off">
        <div id="battle-left-card">
          <p class="soft" style="font-size:0.875rem; color:var(--ink-soft); padding:1rem 0;">Search or load a specimen on the left.</p>
        </div>
      </div>

      <div class="lineup-mid">VS</div>

      <div class="lineup-pane">
        <label for="battle-right" style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink-soft); font-weight:700;">SPECIMEN B</label>
        <input id="battle-right" type="search" placeholder="Type name or # (e.g. 130, Lapras) & Enter..." autocomplete="off">
        <div id="battle-right-card">
          <p class="soft" style="font-size:0.875rem; color:var(--ink-soft); padding:1rem 0;">Search or load a specimen on the right.</p>
        </div>
      </div>
    </section>

    <section id="battle-result" style="margin-top:2rem;"></section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/battle-lab.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.12 `characters.html` (Characters / 动画与历代游戏核心人物名录)

- **文件路径**: `characters.html`  
- **代码行数**: 1,136 行  
- **文件大小**: 44,770 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Characters — 151 File</title>
  <meta name="description" content="Meet the Trainers, Gym Leaders, researchers, Champions, and rivals who shape the Pokémon world.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
  <style>
    .characters-page {
      max-width: 68rem;
    }

    .characters-lede {
      max-width: 42rem;
      color: var(--ink-soft);
      margin-bottom: 1.5rem;
    }

    .character-index {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.25rem;
      padding: 0.9rem 0;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .character-index a,
    .character-source,
    .character-pokemon-link {
      color: var(--navy);
      text-decoration-thickness: 1px;
      text-underline-offset: 0.2em;
    }

    .character-index a:hover,
    .character-source:hover,
    .character-pokemon-link:hover {
      color: var(--mark);
    }

    .character-section {
      margin-top: 2.5rem;
      scroll-margin-top: 5rem;
    }

    .character-section h2 {
      padding-bottom: 0.65rem;
      border-bottom: 2px solid var(--line);
      margin-bottom: 0;
    }

    .character-record {
      display: grid;
      grid-template-columns: minmax(10rem, 0.72fr) minmax(0, 1.8fr);
      gap: 1rem 2rem;
      padding: 1.25rem 0;
      border-bottom: 1px solid var(--line);
    }

    .character-id,
    .character-meta,
    .character-links-label {
      font-family: var(--font-num);
      font-size: 0.7rem;
      color: var(--ink-soft);
      letter-spacing: 0.04em;
    }

    .character-id {
      display: block;
      margin-bottom: 0.4rem;
      color: var(--mark);
    }

    .character-name {
      margin: 0;
      font-size: 1.2rem;
    }

    .character-meta {
      margin-top: 0.35rem;
    }

    .character-copy p {
      margin: 0 0 0.6rem;
      line-height: 1.55;
    }

    .character-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem 1rem;
      align-items: baseline;
      margin-top: 0.75rem;
    }

    .character-links-label {
      text-transform: uppercase;
    }

    .gym-region-block {
      margin-top: 1.5rem;
    }

    .gym-region-title {
      font-size: 1.15rem;
      margin: 0 0 0.5rem;
      color: var(--navy);
    }

    .gym-table-wrap {
      overflow-x: auto;
      margin-bottom: 1.5rem;
    }

    .gym-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
    }

    .gym-table th,
    .gym-table td {
      padding: 0.5rem 0.65rem;
      border-bottom: 1px solid var(--line);
      text-align: left;
    }

    .gym-table th {
      font-family: var(--font-num);
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--ink-soft);
      background: color-mix(in srgb, var(--sky) 25%, transparent);
    }

    @media (max-width: 42rem) {
      .character-record {
        grid-template-columns: 1fr;
        gap: 0.65rem;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html" aria-current="page">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap characters-page">
    <p class="meta-eyebrow"><span>PEOPLE INDEX</span><span>/</span><span>08 DOSSIERS</span></p>
    <h1 class="page-title">Characters</h1>
    <p class="characters-lede">A field guide to the Trainers, Gym Leaders, researchers, Champions, and rivals who make the Pokémon world feel lived in. Each entry points to an official source and, where relevant, back to a Pokémon in the Dex.</p>

    <nav class="character-index" aria-label="Page sections">
      <a href="#travelers">Travelers</a>
      <a href="#kanto">Kanto figures</a>
      <a href="#gyms">Gyms</a>
      <a href="#champions">Champions</a>
      <a href="#adversaries">Adversaries</a>
      <a href="#battle-mechanics">Battle mechanics</a>
    </nav>

    <section class="character-section" id="travelers" aria-labelledby="travelers-title">
      <h2 id="travelers-title">Travelers</h2>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 001</span>
          <h3 class="character-name">Ash Ketchum</h3>
          <p class="character-meta">Trainer · begins in Kanto</p>
        </div>
        <div class="character-copy">
          <p>A spirited Trainer whose journey begins in Pallet Town with Pikachu. His travels bring new friends, rivals, and battles across the regions.</p>
          <div class="character-links">
            <span class="character-links-label">Partner</span>
            <a class="character-pokemon-link" href="pokemon.html?id=25">Pikachu · #025</a>
            <a class="character-source" href="https://www.pokemon.com/us/animation/seasons/23/episode-1-enter-pikachu" target="_blank" rel="noopener">Official episode ↗</a>
          </div>
        </div>
      </article>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 002</span>
          <h3 class="character-name">Misty</h3>
          <p class="character-meta">Cerulean Gym Leader · Kanto</p>
        </div>
        <div class="character-copy">
          <p>A Water-type specialist and longtime traveling companion of Ash. Her connection to Cerulean Gym ties her story to one of Kanto’s best-known locations.</p>
          <div class="character-links">
            <span class="character-links-label">Featured Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=121">Starmie · #121</a>
            <a class="character-source" href="https://www.pokemon.com/uk/news/a-peek-at-the-cards-of-the-pokemon-tcg-sword-shield-astral-radiance-trainer-gallery" target="_blank" rel="noopener">Official feature ↗</a>
          </div>
        </div>
      </article>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 003</span>
          <h3 class="character-name">Brock</h3>
          <p class="character-meta">Pewter Gym Leader · Kanto</p>
        </div>
        <div class="character-copy">
          <p>A steady traveling companion and former Pewter Gym Leader. Beyond battling, Brock hopes to become a Pokémon Breeder.</p>
          <div class="character-links">
            <span class="character-links-label">Featured Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=95">Onix · #095</a>
            <a class="character-source" href="https://www.pokemon.com/us/pokemon-news/lets-go-for-a-test-run" target="_blank" rel="noopener">Official feature ↗</a>
          </div>
        </div>
      </article>
    </section>

    <section class="character-section" id="kanto" aria-labelledby="kanto-title">
      <h2 id="kanto-title">Kanto figures</h2>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 004</span>
          <h3 class="character-name">Professor Oak</h3>
          <p class="character-meta">Pokémon researcher · Pallet Town</p>
        </div>
        <div class="character-copy">
          <p>A researcher whose work introduces many new Trainers to the world of Pokémon. His lab and field research appear throughout the Kanto stories.</p>
          <div class="character-links">
            <span class="character-links-label">Read more</span>
            <a class="character-source" href="https://www.pokemon.com/us/pokemon-video-games/pokemon-snap/" target="_blank" rel="noopener">Pokémon Snap overview ↗</a>
          </div>
        </div>
      </article>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 005</span>
          <h3 class="character-name">Red</h3>
          <p class="character-meta">Trainer · Kanto games</p>
        </div>
        <div class="character-copy">
          <p>A legendary Trainer from the Kanto games, known for letting his record and team speak for him.</p>
          <div class="character-links">
            <span class="character-links-label">Featured Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=6">Charizard · #006</a>
            <a class="character-source" href="https://www.pokemon.com/us/pokemon-video-games/pokemon-masters-ex" target="_blank" rel="noopener">Official game profile ↗</a>
          </div>
        </div>
      </article>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 006</span>
          <h3 class="character-name">Blue</h3>
          <p class="character-meta">Trainer · Kanto games</p>
        </div>
        <div class="character-copy">
          <p>Red’s formidable rival and Professor Oak’s grandson. His confidence makes him one of the classic Pokémon game rivals.</p>
          <div class="character-links">
            <span class="character-links-label">Featured Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=18">Pidgeot · #018</a>
            <a class="character-source" href="https://www.pokemon.com/us/pokemon-video-games/pokemon-masters-ex" target="_blank" rel="noopener">Official game profile ↗</a>
          </div>
        </div>
      </article>
    </section>

    <section class="character-section" id="gyms" aria-labelledby="gyms-title">
      <h2 id="gyms-title">Gyms</h2>
      <div class="character-copy">
        <p>Gyms are regional testing facilities run by type specialists. Each Gym tests whether a challenger understands type matchups and team balance instead of relying on a single favorite Pokémon.</p>
        <p>Defeating a Gym Leader earns an official Badge. Collecting eight Badges qualifies a Trainer for the regional Pokémon League and keeps traded Pokémon obedient in battle.</p>
        <p>Content in preparation.</p>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Kanto Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pewter City</td>
                <td>Brock</td>
                <td>Rock</td>
                <td>Boulder Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=95">Onix · #095</a></td>
              </tr>
              <tr>
                <td>Cerulean City</td>
                <td>Misty</td>
                <td>Water</td>
                <td>Cascade Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=121">Starmie · #121</a></td>
              </tr>
              <tr>
                <td>Vermilion City</td>
                <td>Lt. Surge</td>
                <td>Electric</td>
                <td>Thunder Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=26">Raichu · #026</a></td>
              </tr>
              <tr>
                <td>Celadon City</td>
                <td>Erika</td>
                <td>Grass</td>
                <td>Rainbow Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=45">Vileplume · #045</a></td>
              </tr>
              <tr>
                <td>Fuchsia City</td>
                <td>Koga / Janine</td>
                <td>Poison</td>
                <td>Soul Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=110">Weezing · #110</a></td>
              </tr>
              <tr>
                <td>Saffron City</td>
                <td>Sabrina</td>
                <td>Psychic</td>
                <td>Marsh Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=65">Alakazam · #065</a></td>
              </tr>
              <tr>
                <td>Cinnabar Island</td>
                <td>Blaine</td>
                <td>Fire</td>
                <td>Volcano Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=126">Magmar · #126</a></td>
              </tr>
              <tr>
                <td>Viridian City</td>
                <td>Giovanni / Blue</td>
                <td>Ground</td>
                <td>Earth Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=112">Rhydon · #112</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Johto Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Violet City</td>
                <td>Falkner</td>
                <td>Flying</td>
                <td>Zephyr Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=17">Pidgeotto · #017</a></td>
              </tr>
              <tr>
                <td>Azalea Town</td>
                <td>Bugsy</td>
                <td>Bug</td>
                <td>Hive Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=123">Scyther · #123</a></td>
              </tr>
              <tr>
                <td>Goldenrod City</td>
                <td>Whitney</td>
                <td>Normal</td>
                <td>Plain Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=241">Miltank · #241</a></td>
              </tr>
              <tr>
                <td>Ecruteak City</td>
                <td>Morty</td>
                <td>Ghost</td>
                <td>Fog Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=94">Gengar · #094</a></td>
              </tr>
              <tr>
                <td>Cianwood City</td>
                <td>Chuck</td>
                <td>Fighting</td>
                <td>Storm Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=62">Poliwrath · #062</a></td>
              </tr>
              <tr>
                <td>Olivine City</td>
                <td>Jasmine</td>
                <td>Steel</td>
                <td>Mineral Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=208">Steelix · #208</a></td>
              </tr>
              <tr>
                <td>Mahogany Town</td>
                <td>Pryce</td>
                <td>Ice</td>
                <td>Glacier Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=221">Piloswine · #221</a></td>
              </tr>
              <tr>
                <td>Blackthorn City</td>
                <td>Clair</td>
                <td>Dragon</td>
                <td>Rising Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=230">Kingdra · #230</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Hoenn Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rustboro City</td>
                <td>Roxanne</td>
                <td>Rock</td>
                <td>Stone Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=299">Nosepass · #299</a></td>
              </tr>
              <tr>
                <td>Dewford Town</td>
                <td>Brawly</td>
                <td>Fighting</td>
                <td>Knuckle Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=297">Hariyama · #297</a></td>
              </tr>
              <tr>
                <td>Mauville City</td>
                <td>Wattson</td>
                <td>Electric</td>
                <td>Dynamo Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=310">Manectric · #310</a></td>
              </tr>
              <tr>
                <td>Lavaridge Town</td>
                <td>Flannery</td>
                <td>Fire</td>
                <td>Heat Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=324">Torkoal · #324</a></td>
              </tr>
              <tr>
                <td>Petalburg City</td>
                <td>Norman</td>
                <td>Normal</td>
                <td>Balance Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=289">Slaking · #289</a></td>
              </tr>
              <tr>
                <td>Fortree City</td>
                <td>Winona</td>
                <td>Flying</td>
                <td>Feather Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=334">Altaria · #334</a></td>
              </tr>
              <tr>
                <td>Mossdeep City</td>
                <td>Tate &amp; Liza</td>
                <td>Psychic</td>
                <td>Mind Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=338">Solrock · #338</a></td>
              </tr>
              <tr>
                <td>Sootopolis City</td>
                <td>Wallace / Juan</td>
                <td>Water</td>
                <td>Rain Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=350">Milotic · #350</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Sinnoh Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oreburgh City</td>
                <td>Roark</td>
                <td>Rock</td>
                <td>Coal Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=408">Cranidos · #408</a></td>
              </tr>
              <tr>
                <td>Eterna City</td>
                <td>Gardenia</td>
                <td>Grass</td>
                <td>Forest Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=407">Roserade · #407</a></td>
              </tr>
              <tr>
                <td>Veilstone City</td>
                <td>Maylene</td>
                <td>Fighting</td>
                <td>Cobble Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=448">Lucario · #448</a></td>
              </tr>
              <tr>
                <td>Pastoria City</td>
                <td>Crasher Wake</td>
                <td>Water</td>
                <td>Fen Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=419">Floatzel · #419</a></td>
              </tr>
              <tr>
                <td>Hearthome City</td>
                <td>Fantina</td>
                <td>Ghost</td>
                <td>Relic Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=429">Mismagius · #429</a></td>
              </tr>
              <tr>
                <td>Canalave City</td>
                <td>Byron</td>
                <td>Steel</td>
                <td>Mine Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=411">Bastiodon · #411</a></td>
              </tr>
              <tr>
                <td>Snowpoint City</td>
                <td>Candice</td>
                <td>Ice</td>
                <td>Icicle Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=478">Froslass · #478</a></td>
              </tr>
              <tr>
                <td>Sunyshore City</td>
                <td>Volkner</td>
                <td>Electric</td>
                <td>Beacon Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=466">Electivire · #466</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Unova Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Striaton City</td>
                <td>Cilan, Chili &amp; Cress</td>
                <td>Grass / Fire / Water</td>
                <td>Trio Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=512">Simisage · #512</a></td>
              </tr>
              <tr>
                <td>Nacrene City</td>
                <td>Lenora</td>
                <td>Normal</td>
                <td>Basic Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=505">Watchog · #505</a></td>
              </tr>
              <tr>
                <td>Castelia City</td>
                <td>Burgh</td>
                <td>Bug</td>
                <td>Insect Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=542">Leavanny · #542</a></td>
              </tr>
              <tr>
                <td>Nimbasa City</td>
                <td>Elesa</td>
                <td>Electric</td>
                <td>Bolt Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=523">Zebstrika · #523</a></td>
              </tr>
              <tr>
                <td>Driftveil City</td>
                <td>Clay</td>
                <td>Ground</td>
                <td>Quake Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=530">Excadrill · #530</a></td>
              </tr>
              <tr>
                <td>Mistralton City</td>
                <td>Skyla</td>
                <td>Flying</td>
                <td>Jet Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=581">Swanna · #581</a></td>
              </tr>
              <tr>
                <td>Icirrus City</td>
                <td>Brycen</td>
                <td>Ice</td>
                <td>Freeze Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=615">Cryogonal · #615</a></td>
              </tr>
              <tr>
                <td>Opelucid City</td>
                <td>Drayden / Iris</td>
                <td>Dragon</td>
                <td>Legend Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=612">Haxorus · #612</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Kalos Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Santalune City</td>
                <td>Viola</td>
                <td>Bug</td>
                <td>Bug Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=666">Vivillon · #666</a></td>
              </tr>
              <tr>
                <td>Cyllage City</td>
                <td>Grant</td>
                <td>Rock</td>
                <td>Cliff Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=696">Tyrunt · #696</a></td>
              </tr>
              <tr>
                <td>Shalour City</td>
                <td>Korrina</td>
                <td>Fighting</td>
                <td>Rumble Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=448">Lucario · #448</a></td>
              </tr>
              <tr>
                <td>Courmarine City</td>
                <td>Ramos</td>
                <td>Grass</td>
                <td>Plant Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=673">Gogoat · #673</a></td>
              </tr>
              <tr>
                <td>Lumiose City</td>
                <td>Clemont</td>
                <td>Electric</td>
                <td>Voltage Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=695">Heliolisk · #695</a></td>
              </tr>
              <tr>
                <td>Laverre City</td>
                <td>Valerie</td>
                <td>Fairy</td>
                <td>Fairy Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=700">Sylveon · #700</a></td>
              </tr>
              <tr>
                <td>Anistar City</td>
                <td>Olympia</td>
                <td>Psychic</td>
                <td>Psychic Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=678">Meowstic · #678</a></td>
              </tr>
              <tr>
                <td>Snowbelle City</td>
                <td>Wulfric</td>
                <td>Ice</td>
                <td>Iceberg Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=713">Avalugg · #713</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Galar Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Turffield</td>
                <td>Milo</td>
                <td>Grass</td>
                <td>Grass Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=830">Eldegoss · #830</a></td>
              </tr>
              <tr>
                <td>Hulbury</td>
                <td>Nessa</td>
                <td>Water</td>
                <td>Water Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=834">Drednaw · #834</a></td>
              </tr>
              <tr>
                <td>Motostoke</td>
                <td>Kabu</td>
                <td>Fire</td>
                <td>Fire Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=851">Centiskorch · #851</a></td>
              </tr>
              <tr>
                <td>Stow-on-Side</td>
                <td>Bea / Allister</td>
                <td>Fighting / Ghost</td>
                <td>Fighting / Ghost Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=68">Machamp · #068</a></td>
              </tr>
              <tr>
                <td>Ballonlea</td>
                <td>Opal</td>
                <td>Fairy</td>
                <td>Fairy Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=869">Alcremie · #869</a></td>
              </tr>
              <tr>
                <td>Circhester</td>
                <td>Gordie / Melony</td>
                <td>Rock / Ice</td>
                <td>Rock / Ice Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=839">Coalossal · #839</a></td>
              </tr>
              <tr>
                <td>Spikemuth</td>
                <td>Piers / Marnie</td>
                <td>Dark</td>
                <td>Dark Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=862">Obstagoon · #862</a></td>
              </tr>
              <tr>
                <td>Hammerlocke</td>
                <td>Raihan</td>
                <td>Dragon</td>
                <td>Dragon Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=884">Duraludon · #884</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="gym-region-block">
        <h3 class="gym-region-title">Paldea Gyms</h3>
        <p class="character-meta" style="margin-bottom:0.5rem;">Content in preparation.</p>
        <div class="gym-table-wrap">
          <table class="gym-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Gym Leader</th>
                <th>Type</th>
                <th>Badge</th>
                <th>Signature Pokémon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cortondo</td>
                <td>Katy</td>
                <td>Bug</td>
                <td>Bug Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=920">Lokix · #920</a></td>
              </tr>
              <tr>
                <td>Artazon</td>
                <td>Brassius</td>
                <td>Grass</td>
                <td>Grass Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=185">Sudowoodo · #185</a></td>
              </tr>
              <tr>
                <td>Levincia</td>
                <td>Iono</td>
                <td>Electric</td>
                <td>Electric Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=939">Bellibolt · #939</a></td>
              </tr>
              <tr>
                <td>Cascarrafa</td>
                <td>Kofu</td>
                <td>Water</td>
                <td>Water Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=740">Crabominable · #740</a></td>
              </tr>
              <tr>
                <td>Medali</td>
                <td>Larry</td>
                <td>Normal</td>
                <td>Normal Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=398">Staraptor · #398</a></td>
              </tr>
              <tr>
                <td>Montenevera</td>
                <td>Ryme</td>
                <td>Ghost</td>
                <td>Ghost Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=972">Houndstone · #972</a></td>
              </tr>
              <tr>
                <td>Alfornada</td>
                <td>Tulip</td>
                <td>Psychic</td>
                <td>Psychic Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=671">Florges · #671</a></td>
              </tr>
              <tr>
                <td>Glaseado</td>
                <td>Grusha</td>
                <td>Ice</td>
                <td>Ice Badge</td>
                <td><a class="character-pokemon-link" href="pokemon.html?id=975">Cetitan · #975</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="character-section" id="champions" aria-labelledby="champions-title">
      <h2 id="champions-title">Champions</h2>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 007</span>
          <h3 class="character-name">Cynthia</h3>
          <p class="character-meta">Sinnoh Champion</p>
        </div>
        <div class="character-copy">
          <p>A composed Champion admired for her strength and generosity toward younger Trainers. Her Garchomp is one of the franchise’s most recognizable teams.</p>
          <div class="character-links">
            <span class="character-links-label">Signature Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=445">Garchomp · #445</a>
            <a class="character-source" href="https://www.pokemon.com/us/pokemon-news/ten-memorable-dragon-type-pokemon-trainers" target="_blank" rel="noopener">Official trainer profile ↗</a>
          </div>
        </div>
      </article>
    </section>

    <section class="character-section" id="adversaries" aria-labelledby="adversaries-title">
      <h2 id="adversaries-title">Adversaries</h2>
      <article class="character-record">
        <div>
          <span class="character-id">PERSON / 008</span>
          <h3 class="character-name">Jessie &amp; James</h3>
          <p class="character-meta">Team Rocket field agents</p>
        </div>
        <div class="character-copy">
          <p>The theatrical duo best known for pursuing Ash and Pikachu. Their schemes often fail, but their partnership and affection for their Pokémon give them more sides than simple villains.</p>
          <div class="character-links">
            <span class="character-links-label">Team partner</span>
            <a class="character-pokemon-link" href="pokemon.html?id=52">Meowth · #052</a>
            <a class="character-source" href="https://www.pokemon.com/us/pokemon-news/opinion-are-team-rocket-the-real-heroes" target="_blank" rel="noopener">Official feature ↗</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 001</span>
          <h3 class="character-name">Team Rocket</h3>
          <p class="character-meta">Syndicate · Kanto &amp; Johto</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leader</span>
            <span>Giovanni</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=53">Persian · #053</a>
            <a class="character-pokemon-link" href="pokemon.html?id=112">Rhydon · #112</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 002</span>
          <h3 class="character-name">Team Magma</h3>
          <p class="character-meta">Eco-syndicate · Hoenn</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leader</span>
            <span>Maxie</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=323">Camerupt · #323</a>
            <a class="character-pokemon-link" href="pokemon.html?id=383">Groudon · #383</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 003</span>
          <h3 class="character-name">Team Aqua</h3>
          <p class="character-meta">Eco-syndicate · Hoenn</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leader</span>
            <span>Archie</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=319">Sharpedo · #319</a>
            <a class="character-pokemon-link" href="pokemon.html?id=382">Kyogre · #382</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 004</span>
          <h3 class="character-name">Team Galactic</h3>
          <p class="character-meta">Cosmological cult · Sinnoh</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leader</span>
            <span>Cyrus</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=461">Weavile · #461</a>
            <a class="character-pokemon-link" href="pokemon.html?id=430">Honchkrow · #430</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 005</span>
          <h3 class="character-name">Team Plasma</h3>
          <p class="character-meta">Liberation movement · Unova</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leaders</span>
            <span>Ghetsis, N</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=635">Hydreigon · #635</a>
            <a class="character-pokemon-link" href="pokemon.html?id=644">Zekrom · #644</a>
            <a class="character-pokemon-link" href="pokemon.html?id=643">Reshiram · #643</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 006</span>
          <h3 class="character-name">Team Flare</h3>
          <p class="character-meta">Secret society · Kalos</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leader</span>
            <span>Lysandre</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=668">Pyroar · #668</a>
            <a class="character-pokemon-link" href="pokemon.html?id=130">Gyarados · #130</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 007</span>
          <h3 class="character-name">Team Skull &amp; Aether Foundation</h3>
          <p class="character-meta">Street crew &amp; Research foundation · Alola</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leaders</span>
            <span>Guzma, Lusamine</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=768">Golisopod · #768</a>
            <a class="character-pokemon-link" href="pokemon.html?id=36">Clefable · #036</a>
            <a class="character-pokemon-link" href="pokemon.html?id=793">Nihilego · #793</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 008</span>
          <h3 class="character-name">Macro Cosmos &amp; Team Yell</h3>
          <p class="character-meta">Corporate conglomerate &amp; Fan club · Galar</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leaders</span>
            <span>Chairman Rose, Piers</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=879">Copperajah · #879</a>
            <a class="character-pokemon-link" href="pokemon.html?id=862">Obstagoon · #862</a>
          </div>
        </div>
      </article>

      <article class="character-record">
        <div>
          <span class="character-id">ORG / 009</span>
          <h3 class="character-name">Team Star</h3>
          <p class="character-meta">Academy rebellious squads · Paldea</p>
        </div>
        <div class="character-copy">
          <p>Content in preparation.</p>
          <div class="character-links">
            <span class="character-links-label">Leader</span>
            <span>Penny</span>
            <span class="character-links-label">Associated Pokémon</span>
            <a class="character-pokemon-link" href="pokemon.html?id=700">Sylveon · #700</a>
          </div>
        </div>
      </article>
    </section>

    <section class="character-section" id="battle-mechanics" aria-labelledby="battle-mechanics-title">
      <h2 id="battle-mechanics-title">Battle mechanics</h2>
      <div class="character-copy"><p>Content in preparation.</p></div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>
</body>
</html>
```

---

### 1.13 `games.html` (Games / 历代正作游戏与各世代版本海报档案)

- **文件路径**: `games.html`  
- **代码行数**: 306 行  
- **文件大小**: 11,800 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pokémon Games — 151 File</title>
  <meta name="description" content="Pokémon game titles grouped by region.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
  <style>
    .games-page {
      max-width: 76rem;
    }
    .game-region-grid {
      display: flex;
      flex-direction: column;
      gap: var(--s-5);
      margin: var(--s-6) 0;
    }
    .game-region {
      min-width: 0;
      padding: var(--s-5);
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: var(--r-file);
      box-shadow: var(--shadow-file);
      display: grid;
      grid-template-columns: 340px minmax(0, 1fr);
      grid-template-rows: auto auto 1fr;
      column-gap: var(--s-5);
      row-gap: var(--s-2);
      align-items: start;
    }
    .game-poster-wrap {
      grid-column: 1;
      grid-row: 1 / span 4;
      border: 1px solid var(--line);
      border-radius: var(--r-file);
      overflow: hidden;
      background: rgba(0, 0, 0, 0.25);
      aspect-ratio: 2 / 1;
      margin-bottom: 0;
      height: 100%;
    }
    .game-poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.25s ease;
    }
    .game-region:hover .game-poster {
      transform: scale(1.02);
    }
    .game-region h2 {
      grid-column: 2;
      grid-row: 1;
      margin: 0;
      color: var(--ink);
      font: 700 1.35rem/1.2 var(--font-ui);
    }
    .game-region p {
      grid-column: 2;
      grid-row: 2;
      margin: var(--s-1) 0 var(--s-3);
      color: var(--ink-soft);
      line-height: 1.5;
    }
    .game-title-list {
      grid-column: 2;
      grid-row: 3;
      display: flex;
      flex-wrap: wrap;
      gap: var(--s-2);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .game-title-list li {
      min-width: 0;
      padding: 0.35rem 0.75rem;
      border: 1px solid var(--line);
      border-radius: var(--r-file);
      background: rgba(255, 255, 255, 0.02);
      color: var(--ink);
      font-size: 0.875rem;
      line-height: 1.35;
      font-family: var(--font-ui);
      transition: border-color 0.15s ease, background 0.15s ease;
    }
    .game-title-list li:hover {
      border-color: var(--navy);
      background: rgba(126, 182, 217, 0.08);
    }
    @media (max-width: 54rem) {
      .game-region {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .game-poster-wrap {
        grid-column: 1;
        grid-row: auto;
        margin-bottom: var(--s-3);
      }
      .game-region h2,
      .game-region p,
      .game-title-list {
        grid-column: 1;
        grid-row: auto;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav aria-label="Main navigation">
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html" aria-current="page">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap games-page">
    <h1 class="page-title">Pokémon Games</h1>
    <p class="page-desc">Core series releases, remakes, and regional expansions catalogued across nine generations of adventures.</p>
    <p><a class="link-action" href="about.html">Back to File</a></p>

    <section class="game-region-grid" aria-label="Pokémon games by region">
      <section class="game-region" id="kanto" aria-labelledby="kanto-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-kanto.webp" alt="Pokémon Red and Blue official cover art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="kanto-heading">Kanto</h2>
        <p>The foundational territory where the journey began, spanning the original Game Boy generation through modern Kanto returns.</p>
        <ul class="game-title-list">
          <li>Red</li>
          <li>Blue</li>
          <li>Yellow</li>
          <li>FireRed</li>
          <li>LeafGreen</li>
          <li>Let's Go, Pikachu! / Eevee!</li>
        </ul>
      </section>

      <section class="game-region" id="johto" aria-labelledby="johto-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-johto.webp" alt="Pokémon Gold and Silver official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="johto-heading">Johto</h2>
        <p>A tradition-rich land directly connected to Kanto, featuring the Bell Tower, Whirl Islands, and a path back across the border.</p>
        <ul class="game-title-list">
          <li>Gold</li>
          <li>Silver</li>
          <li>Crystal</li>
          <li>HeartGold</li>
          <li>SoulSilver</li>
        </ul>
      </section>

      <section class="game-region" id="hoenn" aria-labelledby="hoenn-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-hoenn.webp" alt="Pokémon Ruby and Sapphire official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="hoenn-heading">Hoenn</h2>
        <p>A tropical maritime expanse shaped by active volcanoes, oceanic trenches, and the awakening of super-ancient titans.</p>
        <ul class="game-title-list">
          <li>Ruby</li>
          <li>Sapphire</li>
          <li>Emerald</li>
          <li>Omega Ruby</li>
          <li>Alpha Sapphire</li>
        </ul>
      </section>

      <section class="game-region" id="sinnoh" aria-labelledby="sinnoh-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-sinnoh.webp" alt="Pokémon Diamond and Pearl official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="sinnoh-heading">Sinnoh</h2>
        <p>A northern realm divided by Mount Coronet, steeped in space-time creation myths and the ancestral frontier of Hisui.</p>
        <ul class="game-title-list">
          <li>Diamond</li>
          <li>Pearl</li>
          <li>Platinum</li>
          <li>Brilliant Diamond</li>
          <li>Shining Pearl</li>
          <li>Legends: Arceus</li>
        </ul>
      </section>

      <section class="game-region" id="unova" aria-labelledby="unova-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-unova.webp" alt="Pokémon Black and White official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="unova-heading">Unova</h2>
        <p>A modern metropolitan landscape framed by suspension bridges and an enduring struggle between truth and ideals.</p>
        <ul class="game-title-list">
          <li>Black</li>
          <li>White</li>
          <li>Black 2</li>
          <li>White 2</li>
        </ul>
      </section>

      <section class="game-region" id="kalos" aria-labelledby="kalos-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-kalos.webp" alt="Pokémon X and Y official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="kalos-heading">Kalos</h2>
        <p>A star-shaped cultural capital radiating from Lumiose City, where the mysteries of Mega Evolution were first uncovered.</p>
        <ul class="game-title-list">
          <li>X</li>
          <li>Y</li>
          <li>Legends: Z-A</li>
        </ul>
      </section>

      <section class="game-region" id="alola" aria-labelledby="alola-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-alola.webp" alt="Pokémon Sun and Moon official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="alola-heading">Alola</h2>
        <p>A sun-drenched archipelago of four natural islands and an artificial reef, defined by island trials and Ultra Space rifts.</p>
        <ul class="game-title-list">
          <li>Sun</li>
          <li>Moon</li>
          <li>Ultra Sun</li>
          <li>Ultra Moon</li>
          <li>Pokémon GO</li>
        </ul>
      </section>

      <section class="game-region" id="galar" aria-labelledby="galar-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-galar.webp" alt="Pokémon Sword and Shield official box art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="galar-heading">Galar</h2>
        <p>An industrial kingdom bordered by open Wild Areas, celebrated for stadium-scale league tournaments and Dynamax energy.</p>
        <ul class="game-title-list">
          <li>Sword</li>
          <li>Shield</li>
          <li>The Isle of Armor</li>
          <li>The Crown Tundra</li>
        </ul>
      </section>

      <section class="game-region" id="paldea" aria-labelledby="paldea-heading">
        <div class="game-poster-wrap">
          <img src="assets/posters/game-paldea.webp" alt="Pokémon Scarlet and Violet official cover art" width="600" height="300" loading="lazy" decoding="async" class="game-poster">
        </div>
        <h2 id="paldea-heading">Paldea</h2>
        <p>A vast open continent surrounding the Great Crater, driven by academy treasure hunts and Terastal crystal phenomena.</p>
        <ul class="game-title-list">
          <li>Scarlet</li>
          <li>Violet</li>
          <li>The Teal Mask</li>
          <li>The Indigo Disk</li>
        </ul>
      </section>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>
</body>
</html>
```

---

### 1.14 `about.html` (File / 架构说明与数据源)

- **文件路径**: `about.html`  
- **代码行数**: 1,036 行  
- **文件大小**: 76,490 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>File — 151 File</title>
  <meta name="description" content="About 151 FILE: data sources, credits and a fan-project disclaimer.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="File — 151 File">
  <meta property="og:description" content="About 151 FILE: data sources, credits and a fan-project disclaimer.">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">
  
  <!-- CSS 模块架构 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
  <style>
    .about-page {
      max-width: 80rem;
    }
    .about-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(20rem, 1fr);
      gap: 1.5rem;
      align-items: start;
      margin-top: var(--s-6);
    }
    .about-col {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .about-col > .file-block {
      margin: 0;
    }
    @media (max-width: 64rem) {
      .about-grid {
        grid-template-columns: 1fr;
      }
    }
    .timeline-map-block {
      margin-top: var(--s-6);
    }
    .timeline-map-intro {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      color: var(--ink-soft);
    }
    .timeline-map-layout {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 1fr);
      gap: 1.5rem;
      align-items: start;
    }
    .timeline-track {
      position: relative;
      padding-left: 1.25rem;
      border-left: 2px solid var(--line);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .timeline-item {
      position: relative;
    }
    .timeline-dot {
      position: absolute;
      left: calc(-1.25rem - 5px);
      top: 0.35rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--navy);
      border: 2px solid var(--paper);
      box-shadow: 0 0 0 1px var(--navy);
    }
    .timeline-item-title {
      font-family: var(--font-ui);
      font-size: 1rem;
      color: var(--ink);
      margin: 0 0 0.2rem;
    }
    .timeline-item-source {
      font-family: var(--font-mono, monospace);
      font-size: 0.75rem;
      color: var(--navy);
      letter-spacing: 0.02em;
      margin: 0 0 0.35rem;
    }
    .timeline-item-desc {
      font-size: 0.875rem;
      line-height: 1.55;
      color: var(--ink-soft);
      margin: 0;
    }
    .timeline-map-side {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .timeline-map-frame {
      border: 1px solid var(--line);
      border-radius: var(--r-file);
      overflow: hidden;
      background: var(--paper);
    }
    .timeline-map-img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      aspect-ratio: 16 / 10;
    }
    .timeline-map-caption {
      font-size: 0.8125rem;
      color: var(--ink-soft);
      padding: 0.5rem 0.75rem;
      margin: 0;
      border-top: 1px solid var(--line);
      background: rgba(0, 0, 0, 0.15);
    }
    .timeline-map-btn {
      align-self: flex-start;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }
    @media (max-width: 64rem) {
      .timeline-map-layout {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
    .media-card {
      display: grid;
      grid-template-columns: 100px minmax(0, 1fr);
      gap: 1.25rem;
      align-items: start;
    }
    .media-poster-wrap {
      border: 1px solid var(--line);
      border-radius: var(--r-card, 4px);
      overflow: hidden;
      background: var(--paper);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      aspect-ratio: 2 / 3;
      width: 100px;
    }
    .media-poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .media-content {
      min-width: 0;
    }
    @media (max-width: 40rem) {
      .media-card {
        grid-template-columns: 80px minmax(0, 1fr);
        gap: 0.85rem;
      }
      .media-poster-wrap {
        width: 80px;
      }
    }
    .media-guide-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--s-7) var(--s-4);
      margin-top: var(--s-3);
    }
    .media-guide-list .media-card {
      grid-template-columns: 11.25rem minmax(0, 1fr);
      gap: var(--s-4);
    }
    .media-guide-list .media-poster-wrap {
      width: 11.25rem;
    }
    @media (max-width: 72rem) {
      .media-guide-list {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 40rem) {
      .media-guide-list .media-card {
        grid-template-columns: minmax(0, 1fr);
      }
    }
    /* File：地图与可展开笔记，说明区使用分隔线代替卡片。 */
    .about-page .file-block {
      background: transparent; border: 0; border-radius: 0; box-shadow: none;
      padding: 0; transition: none;
    }
    .about-page .page-desc { max-width: 42rem; }
    .about-page .timeline-map-block {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
      grid-template-rows: auto auto 1fr;
      column-gap: var(--s-12); align-items: start; margin-block: var(--s-12);
    }
    .about-page #timeline-map-heading { font-size: 2rem; margin-bottom: var(--s-3); }
    .about-page .timeline-map-intro { max-width: 34ch; margin-bottom: var(--s-6); }
    .about-page .timeline-map-layout, .about-page .about-col { display: contents; }
    .about-page .timeline-track { padding: 0; border: 0; gap: 0; }
    .about-page .timeline-dot { display: none; }
    .about-page .timeline-item { border-top: 1px solid var(--line); }
    .about-page summary {
      display: flex; align-items: center; justify-content: space-between; gap: var(--s-4);
      min-height: 2.75rem; padding-block: var(--s-3); cursor: pointer; color: var(--ink);
    }
    .about-page summary::-webkit-details-marker { display: none; }
    .about-page summary::after { content: "+"; color: var(--navy); font-size: 1.25rem; }
    .about-page details[open] > summary::after { content: "−"; }
    .about-page summary:hover { color: var(--navy); }
    .about-page summary h3 { margin: 0; color: inherit; }
    .about-page .timeline-item-source { font-family: var(--font-ui); letter-spacing: 0; }
    .about-page .timeline-item-desc { padding-bottom: var(--s-5); }
    .about-page .timeline-map-side { grid-column: 2; grid-row: 1 / span 3; gap: var(--s-3); }
    .about-page .timeline-map-img { aspect-ratio: 16 / 10; object-fit: cover; }
    .about-page .timeline-map-caption { background: var(--sky); padding: var(--s-3); }
    .about-page .timeline-map-btn { min-height: 2.75rem; }
    .about-page .about-grid { gap: var(--s-8) var(--s-12); }
    .about-page .about-grid .file-block {
      grid-column: 1; margin: 0; border-top: 1px solid var(--line); padding-top: var(--s-5);
    }
    .about-page .file-block:has(#sound-heading) { grid-column: 2; grid-row: 1; }
    .about-page .file-block:has(#keys-heading) { grid-column: 2; grid-row: 2 / span 2; }
    .about-page .soft { font-family: var(--font-ui); font-size: 1rem; }
    .about-page .keys-table td:first-child { width: 28%; }
    #legendary-mythical > div { gap: var(--s-5) !important; margin-top: var(--s-4) !important; }
    #legendary-mythical > div > article {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
      column-gap: var(--s-6); row-gap: var(--s-2); padding-block: var(--s-5);
      border-top: 1px solid var(--line);
    }
    #legendary-mythical > div > article > h3,
    #legendary-mythical > div > article > p:not(.legendary-roster) { grid-column: 1; }
    #legendary-mythical .legendary-roster {
      grid-column: 2; grid-row: 1 / span 4; display: grid;
      grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
      gap: var(--s-2); align-content: start; margin: 0; font-size: 0;
    }
    #legendary-mythical .legendary-roster > b {
      grid-column: 1 / -1; color: var(--ink-soft); font-size: 0.8125rem;
    }
    #legendary-mythical .legendary-specimen {
      display: flex; min-width: 0; flex-direction: column; align-items: center;
      gap: var(--s-1); color: var(--navy); font-size: 0.8125rem;
      line-height: 1.2; text-align: center;
    }
    #legendary-mythical .legendary-specimen img {
      width: 6rem; height: 6rem; max-width: 100%; object-fit: contain; display: block;
    }
    #legendary-mythical .legendary-separator { display: none; }
    @media (max-width: 48rem) {
      #legendary-mythical > div > article { grid-template-columns: minmax(0, 1fr); }
      #legendary-mythical .legendary-roster { grid-column: 1; grid-row: auto; }
    }
    body:has(.about-page) .site-bar nav {
      min-width: 0; overflow-x: auto; white-space: nowrap; scrollbar-width: thin;
      -webkit-overflow-scrolling: touch;
    }
    body:has(.about-page) .site-bar nav a { flex: 0 0 auto; min-height: 2.75rem; display: inline-flex; align-items: center; }
    @media (max-width: 64rem) {
      .about-page .timeline-map-block, .about-page .about-grid { grid-template-columns: minmax(0, 1fr); }
      .about-page .timeline-map-side, .about-page .about-grid .file-block { grid-column: 1; grid-row: auto; }
      .about-page .file-block:has(#sound-heading), .about-page .file-block:has(#keys-heading) { grid-column: 1; grid-row: auto; }
      .about-page .timeline-map-side { margin-top: var(--s-6); }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <!-- 共享顶栏：32px 精灵球 + 站名 + 六链导航 -->
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html" aria-current="page">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器：使用两栏桌面网格消除右侧空白 -->
  <main id="main" class="wrap about-page">
    <h1 class="page-title">File</h1>
    <p class="page-desc">Unofficial Kanto-first dex. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    <p><a class="link-action" href="games.html">Browse Pokémon game titles →</a></p>

    <!-- 独立档案区块：正作时空脉络与地区地图 -->
    <section class="file-block timeline-map-block" id="timeline-map" aria-labelledby="timeline-map-heading">
      <h2 id="timeline-map-heading">World atlas</h2>
      <p class="timeline-map-intro">
        Four notes from the core games, alongside a map of Kanto. Open a note to read more.
      </p>

      <div class="timeline-map-layout">
        <!-- 左侧：纵向时间节点 -->
        <div class="timeline-track" role="list">
          <div class="timeline-item" role="listitem">
            <span class="timeline-dot" aria-hidden="true"></span>
            <details class="timeline-item-content">
              <summary><h3 class="timeline-item-title">Ancient Hisui and Kalos</h3></summary>
              <p class="timeline-item-source">Source: Legends: Arceus, X and Y</p>
              <p class="timeline-item-desc">Early hand-crafted Poké Balls are documented in Hisui. Three thousand years before modern leagues, AZ fired the ultimate weapon in Kalos, establishing an event that later split the series into two branches.</p>
            </details>
          </div>

          <div class="timeline-item" role="listitem">
            <span class="timeline-dot" aria-hidden="true"></span>
            <details class="timeline-item-content">
              <summary><h3 class="timeline-item-title">Kanto and Hoenn beginnings</h3></summary>
              <p class="timeline-item-source">Source: Red, Green, Blue, Ruby, Sapphire</p>
              <p class="timeline-item-desc">The original Kanto expedition and the Hoenn journey occur roughly concurrently. Team Rocket disbands in Kanto as ancient legendary Pokémon awaken in Hoenn.</p>
            </details>
          </div>

          <div class="timeline-item" role="listitem">
            <span class="timeline-dot" aria-hidden="true"></span>
            <details class="timeline-item-content">
              <summary><h3 class="timeline-item-title">Johto and Sinnoh league era</h3></summary>
              <p class="timeline-item-source">Source: Gold, Silver, Diamond, Pearl</p>
              <p class="timeline-item-desc">Set three years after events in Kanto. The Johto journey deals with Rocket remnants while Team Galactic provokes space-time disturbances across Sinnoh.</p>
            </details>
          </div>

          <div class="timeline-item" role="listitem">
            <span class="timeline-dot" aria-hidden="true"></span>
            <details class="timeline-item-content">
              <summary><h3 class="timeline-item-title">Mega Evolution timeline split</h3></summary>
              <p class="timeline-item-source">Source: Omega Ruby, Alpha Sapphire Delta Episode</p>
              <p class="timeline-item-desc">Dialogue during the Delta Episode establishes two distinct continuities: one where Mega Evolution was unlocked by the ultimate weapon, and an earlier branch where it never existed.</p>
            </details>
          </div>
        </div>

        <!-- 右侧：地图预览与 Regions 链接 -->
        <div class="timeline-map-side">
          <div class="timeline-map-frame">
            <img src="assets/maps/kanto.webp" alt="Kanto region survey map" width="800" height="500" loading="lazy" class="timeline-map-img">
            <p class="timeline-map-caption">Kanto field survey map (Generation I)</p>
          </div>
          <a href="regions.html" class="link-action timeline-map-btn">Open Regions atlas &rarr;</a>
        </div>
      </div>
    </section>

    <section class="file-block" id="animation-guide" aria-labelledby="animation-guide-heading">
      <h2 id="animation-guide-heading">Animation &amp; film guide</h2>
      <p class="soft">Overview of the TV series and films.</p>

      <details>
        <summary>Animated series</summary>
        <div class="media-guide-list">
          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-01.webp" alt="Poster: The Beginning &amp; Gold-Silver" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">The Beginning &amp; Gold-Silver (1997–2002)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 1–5 (Indigo League, Orange Islands, Johto Journeys, Johto League Champions, Master Quest)</p>
              <p style="margin:0 0 0.4rem;">Ash and Pikachu leave Pallet Town to challenge Gyms across Kanto, the Orange Islands, and Johto with Misty and Brock.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "Pokémon - I Choose You!", "Showdown at Dark City", "Gotta Catch Ya Later!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, <a href="characters.html#travelers">Misty</a>, <a href="characters.html#travelers">Brock</a>, <a href="characters.html#adversaries">Jessie &amp; James</a>, <a href="characters.html#kanto">Professor Oak</a></p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=1">Bulbasaur · #001</a>, <a href="pokemon.html?id=4">Charmander · #004</a>, <a href="pokemon.html?id=7">Squirtle · #007</a>, <a href="pokemon.html?id=6">Charizard · #006</a>, <a href="pokemon.html?id=52">Meowth · #052</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-02.webp" alt="Poster: Advanced Generation" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">Advanced Generation (2002–2006)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 6–9 (Advanced, Advanced Challenge, Advanced Battle, Battle Frontier)</p>
              <p style="margin:0 0 0.4rem;">Ash travels through Hoenn with Brock, May, and Max, then returns to Kanto to tackle the Battle Frontier.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "Get the Show on the Road!", "The Bicker the Better", "Pace - The Final Frontier!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, <a href="characters.html#travelers">Brock</a>, May, Max</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=252">Treecko · #252</a>, <a href="pokemon.html?id=254">Sceptile · #254</a>, <a href="pokemon.html?id=255">Torchic · #255</a>, <a href="pokemon.html?id=258">Mudkip · #258</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-03.webp" alt="Poster: Diamond &amp; Pearl" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">Diamond &amp; Pearl (2006–2010)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 10–13 (Diamond and Pearl, Battle Dimension, Galactic Battles, Sinnoh League Victors)</p>
              <p style="margin:0 0 0.4rem;">Ash, Brock, and Dawn travel through Sinnoh, facing rival Paul and stopping Team Galactic.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "Following a Maiden's Voyage!", "Tears for Fears!", "Battling a Thaw in Relations!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Dawn, <a href="characters.html#travelers">Brock</a>, <a href="characters.html#champions">Cynthia</a>, Paul</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=390">Chimchar · #390</a>, <a href="pokemon.html?id=392">Infernape · #392</a>, <a href="pokemon.html?id=393">Piplup · #393</a>, <a href="pokemon.html?id=445">Garchomp · #445</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-04.webp" alt="Poster: Black &amp; White" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">Black &amp; White (2010–2013)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 14–16 (Black &amp; White, Rival Destinies, Adventures in Unova)</p>
              <p style="margin:0 0 0.4rem;">Ash travels across Unova with Iris and Cilan, challenging the League and opposing Team Plasma.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "In The Shadow of Zekrom!", "Battling for the Love of Bug-Types!", "Survival of the Striaton Gym!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Iris, Cilan, N</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=495">Snivy · #495</a>, <a href="pokemon.html?id=498">Tepig · #498</a>, <a href="pokemon.html?id=501">Oshawott · #501</a>, <a href="pokemon.html?id=612">Haxorus · #612</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-05.webp" alt="Poster: XY" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">XY (2013–2016)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 17–19 (XY, Kalos Quest, XYZ)</p>
              <p style="margin:0 0 0.4rem;">In Kalos, Ash travels with Serena, Clemont, and Bonnie, mastering Battle Bond with Greninja and fighting Team Flare.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "Kalos, Where Dreams and Adventures Begin!", "A Frenzied Factory Fiasco!", "Down to the Fiery Finish!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Serena, Clemont, Bonnie, Alain</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=658">Greninja · #658</a>, <a href="pokemon.html?id=663">Talonflame · #663</a>, <a href="pokemon.html?id=706">Goodra · #706</a>, <a href="pokemon.html?id=448">Lucario · #448</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-06.webp" alt="Poster: Sun &amp; Moon" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">Sun &amp; Moon (2016–2019)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 20–22 (Sun &amp; Moon, Ultra Adventures, Ultra Legends)</p>
              <p style="margin:0 0 0.4rem;">Ash attends the Pokémon School in Alola, learns Z-Moves, and wins the region's first League.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "Alola to New Adventure!", "The Professors' New PBNJ!", "Enter the Champion!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Lillie, Gladion, Professor Kukui</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=722">Rowlet · #722</a>, <a href="pokemon.html?id=724">Decidueye · #724</a>, <a href="pokemon.html?id=745">Lycanroc · #745</a>, <a href="pokemon.html?id=727">Incineroar · #727</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-07.webp" alt="Poster: Journeys" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">Journeys (2019–2023)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Seasons 23–25 (Journeys, Master Journeys, Ultimate Journeys)</p>
              <p style="margin:0 0 0.4rem;">Ash and Goh travel across all eight regions as Ash works toward the World Coronation Series title.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "Enter Pikachu!", "The Climax of the World Coronation Series!", "The Rainbow and the Pokémon Master!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Goh, Chloe, Leon, <a href="characters.html#champions">Cynthia</a></p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=448">Lucario · #448</a>, <a href="pokemon.html?id=94">Gengar · #094</a>, <a href="pokemon.html?id=815">Cinderace · #815</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/series-08.webp" alt="Poster: Horizons" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.35rem; color:var(--navy);">Horizons (2023–present)</h3>
              <p class="soft" style="margin:0 0 0.4rem;">Season 26+ (The Sparkling of Terapagos, Terastal Debut)</p>
              <p style="margin:0 0 0.4rem;">New trainers Liko and Roy travel with the Rising Volt Tacklers to solve the mystery of an ancient pendant.</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Representative episodes:</b> "The Pendant That Starts It All", "The Door That Never Opens", "How Terrastallizing!"</p>
              <p style="font-size:0.875rem; margin:0 0 0.3rem;"><b>Characters:</b> Liko, Roy, Friede, Dot</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=906">Sprigatito · #906</a>, <a href="pokemon.html?id=909">Fuecoco · #909</a>, <a href="pokemon.html?id=912">Quaxly · #912</a>, <a href="pokemon.html?id=1024">Terapagos · #1024</a>, <a href="pokemon.html?id=25">Pikachu · #025</a></p>
            </div>
          </article>
        </div>
      </details>

      <details>
        <summary>Theatrical films</summary>
        <div class="media-guide-list">
          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-01.webp" alt="Poster: Mewtwo Strikes Back" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">1. Pokémon: The First Movie - Mewtwo Strikes Back (1998)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 1998</p>
              <p style="margin:0 0 0.35rem;">Cloned from Mew, Mewtwo rebels against humans and invites Ash to battle on New Island.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, <a href="characters.html#travelers">Misty</a>, <a href="characters.html#travelers">Brock</a>, <a href="characters.html#adversaries">Giovanni</a></p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=150">Mewtwo · #150</a>, <a href="pokemon.html?id=151">Mew · #151</a>, <a href="pokemon.html?id=25">Pikachu · #025</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-02.webp" alt="Poster: The Power of One" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">2. Pokémon the Movie 2000: The Power of One (1999)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 1999</p>
              <p style="margin:0 0 0.35rem;">A collector captures the legendary birds, and Ash helps Lugia restore the weather.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Melody, Lawrence III</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=249">Lugia · #249</a>, <a href="pokemon.html?id=144">Articuno · #144</a>, <a href="pokemon.html?id=145">Zapdos · #145</a>, <a href="pokemon.html?id=146">Moltres · #146</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-03.webp" alt="Poster: Spell of the Unown" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">3. Pokémon 3: The Movie - Spell of the Unown (2000)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2000</p>
              <p style="margin:0 0 0.35rem;">A young girl uses the Unown to create an illusionary Entei, crystallizing Greenfield and taking Ash's mother.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Molly Hale, Delia Ketchum</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=244">Entei · #244</a>, <a href="pokemon.html?id=201">Unown · #201</a>, <a href="pokemon.html?id=6">Charizard · #006</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-04.webp" alt="Poster: Celebi - Voice of the Forest" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">4. Pokémon 4Ever: Celebi - Voice of the Forest (2001)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2001</p>
              <p style="margin:0 0 0.35rem;">Ash and a time-traveling trainer named Sam protect Celebi from a Team Rocket hunter.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Sam (<a href="characters.html#kanto">Professor Oak</a>), Iron-Masked Marauder</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=251">Celebi · #251</a>, <a href="pokemon.html?id=245">Suicune · #245</a>, <a href="pokemon.html?id=248">Tyranitar · #248</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-05.webp" alt="Poster: Heroes: Latios and Latias" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">5. Pokémon Heroes: Latios and Latias (2002)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2002</p>
              <p style="margin:0 0 0.35rem;">In Alto Mare, Ash defends Latios and Latias from thieves trying to steal the Soul Dew.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Bianca, Lorenzo, Annie &amp; Oakley</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=380">Latias · #380</a>, <a href="pokemon.html?id=381">Latios · #381</a>, <a href="pokemon.html?id=196">Espeon · #196</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-06.webp" alt="Poster: Jirachi - Wish Maker" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">6. Pokémon: Jirachi - Wish Maker (2003)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2003</p>
              <p style="margin:0 0 0.35rem;">Max befriends the mythical Jirachi as an ex-Team Magma scientist tries to harness it to revive Groudon.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Max, Butler, Diane</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=385">Jirachi · #385</a>, <a href="pokemon.html?id=383">Groudon · #383</a>, <a href="pokemon.html?id=359">Absol · #359</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-07.webp" alt="Poster: Destiny Deoxys" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">7. Pokémon: Destiny Deoxys (2004)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2004</p>
              <p style="margin:0 0 0.35rem;">Deoxys lands in LaRousse City searching for its counterpart, triggering a battle with Rayquaza.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Tory Lund, Professor Lund</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=386">Deoxys · #386</a>, <a href="pokemon.html?id=384">Rayquaza · #384</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-08.webp" alt="Poster: Lucario and the Mystery of Mew" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">8. Pokémon: Lucario and the Mystery of Mew (2005)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2005</p>
              <p style="margin:0 0 0.35rem;">Ash teams up with an awakened Lucario to rescue Pikachu from the Tree of Beginning.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Sir Aaron, Lady Eileen, Kidd Summers</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=448">Lucario · #448</a>, <a href="pokemon.html?id=151">Mew · #151</a>, <a href="pokemon.html?id=377">Regirock · #377</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-09.webp" alt="Poster: Pokémon Ranger and the Temple of the Sea" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">9. Pokémon Ranger and the Temple of the Sea (2006)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2006</p>
              <p style="margin:0 0 0.35rem;">Ash and a Pokémon Ranger escort newly hatched Manaphy to an underwater temple ahead of pirates.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Jack Walker, Phantom</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=490">Manaphy · #490</a>, <a href="pokemon.html?id=382">Kyogre · #382</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-10.webp" alt="Poster: The Rise of Darkrai" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">10. Pokémon: The Rise of Darkrai (2007)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2007</p>
              <p style="margin:0 0 0.35rem;">Dialga and Palkia clash over Alamos Town while Darkrai fights to hold them back.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Alice, Tonio, Baron Alberto</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=491">Darkrai · #491</a>, <a href="pokemon.html?id=483">Dialga · #483</a>, <a href="pokemon.html?id=484">Palkia · #484</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-11.webp" alt="Poster: Giratina and the Sky Warrior" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">11. Pokémon: Giratina and the Sky Warrior (2008)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2008</p>
              <p style="margin:0 0 0.35rem;">Shaymin draws Ash into the Reverse World, where an inventor plots to harness Giratina's power.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Newton Graceland, Zero</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=492">Shaymin · #492</a>, <a href="pokemon.html?id=487">Giratina · #487</a>, <a href="pokemon.html?id=483">Dialga · #483</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-12.webp" alt="Poster: Arceus and the Jewel of Life" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">12. Pokémon: Arceus and the Jewel of Life (2009)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2009</p>
              <p style="margin:0 0 0.35rem;">Ash travels back in time to stop a betrayal against Arceus before the Pokémon destroys the present.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Damos, Sheena, Marcus</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=493">Arceus · #493</a>, <a href="pokemon.html?id=483">Dialga · #483</a>, <a href="pokemon.html?id=484">Palkia · #484</a>, <a href="pokemon.html?id=487">Giratina · #487</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-13.webp" alt="Poster: Zoroark: Master of Illusions" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">13. Pokémon: Zoroark: Master of Illusions (2010)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2010</p>
              <p style="margin:0 0 0.35rem;">Ash helps Zorua find its mother while stopping a corrupt businessman from controlling Zoroark.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Grings Kodai, Zorua, Karl</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=571">Zoroark · #571</a>, <a href="pokemon.html?id=570">Zorua · #570</a>, <a href="pokemon.html?id=251">Celebi · #251</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-14.webp" alt="Poster: Victini and Reshiram / Zekrom" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">14. Pokémon the Movie: Black / White - Victini and Reshiram / Zekrom (2011)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2011</p>
              <p style="margin:0 0 0.35rem;">A man captures Victini and awakens a legendary dragon to relocate an ancient castle.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Damon, Carlita, Juanita</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=494">Victini · #494</a>, <a href="pokemon.html?id=643">Reshiram · #643</a>, <a href="pokemon.html?id=644">Zekrom · #644</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-15.webp" alt="Poster: Kyurem vs. The Sword of Justice" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">15. Pokémon the Movie: Kyurem vs. The Sword of Justice (2012)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2012</p>
              <p style="margin:0 0 0.35rem;">Keldeo challenges Kyurem too soon and turns to Ash after freezing its mentors in battle.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Keldeo, Swords of Justice</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=647">Keldeo · #647</a>, <a href="pokemon.html?id=646">Kyurem · #646</a>, <a href="pokemon.html?id=638">Cobalion · #638</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-16.webp" alt="Poster: Genesect and the Legend Awakened" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">16. Pokémon the Movie: Genesect and the Legend Awakened (2013)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2013</p>
              <p style="margin:0 0 0.35rem;">A group of revived Genesect threatens New Tork City, leading Mewtwo to step in.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Eric, Red Genesect</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=649">Genesect · #649</a>, <a href="pokemon.html?id=150">Mewtwo · #150</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-17.webp" alt="Poster: Diancie and the Cocoon of Destruction" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">17. Pokémon the Movie: Diancie and the Cocoon of Destruction (2014)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2014</p>
              <p style="margin:0 0 0.35rem;">Diancie searches for Xerneas to save her home, but thieves accidentally awaken Yveltal.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Diancie, Millis Steel, Argus Steel</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=719">Diancie · #719</a>, <a href="pokemon.html?id=716">Xerneas · #716</a>, <a href="pokemon.html?id=717">Yveltal · #717</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-18.webp" alt="Poster: Hoopa and the Clash of Ages" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">18. Pokémon the Movie: Hoopa and the Clash of Ages (2015)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2015</p>
              <p style="margin:0 0 0.35rem;">Hoopa's released shadow power summons past legendary Pokémon into a battle across Dahara City.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Baraz, Meray, Hoopa</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=720">Hoopa · #720</a>, <a href="pokemon.html?id=384">Rayquaza · #384</a>, <a href="pokemon.html?id=493">Arceus · #493</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-19.webp" alt="Poster: Volcanion and the Mechanical Marvel" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">19. Pokémon the Movie: Volcanion and the Mechanical Marvel (2016)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2016</p>
              <p style="margin:0 0 0.35rem;">Bound to Volcanion by a magnetic ring, Ash helps rescue the artificial Pokémon Magearna from Azoth Kingdom.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Alva, Kimia, Raleigh</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=721">Volcanion · #721</a>, <a href="pokemon.html?id=801">Magearna · #801</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-20.webp" alt="Poster: I Choose You!" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">20. Pokémon the Movie: I Choose You! (2017)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2017</p>
              <p style="margin:0 0 0.35rem;">An alternate retelling of Ash and Pikachu's first days and their journey toward Mount Tensei.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Verity, Sorrel, Cross</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=25">Pikachu · #025</a>, <a href="pokemon.html?id=250">Ho-Oh · #250</a>, <a href="pokemon.html?id=802">Marshadow · #802</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-21.webp" alt="Poster: The Power of Us" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">21. Pokémon the Movie: The Power of Us (2018)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2018</p>
              <p style="margin:0 0 0.35rem;">Ash and five strangers work together when a festival fire threatens Fula City and Zeraora.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Risa, Margo, Callahan</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=249">Lugia · #249</a>, <a href="pokemon.html?id=807">Zeraora · #807</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-22.webp" alt="Poster: Mewtwo Strikes Back - Evolution" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">22. Pokémon: Mewtwo Strikes Back - Evolution (2019)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2019</p>
              <p style="margin:0 0 0.35rem;">A 3D CGI remake of the 1998 film, following Mewtwo's revolt and the battle on New Island.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, <a href="characters.html#adversaries">Giovanni</a></p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=150">Mewtwo · #150</a>, <a href="pokemon.html?id=151">Mew · #151</a></p>
            </div>
          </article>

          <article class="media-card">
            <div class="media-poster-wrap">
              <img src="assets/posters/movie-23.webp" alt="Poster: Secrets of the Jungle" width="480" height="720" loading="lazy" decoding="async" class="media-poster">
            </div>
            <div class="media-content">
              <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">23. Pokémon the Movie: Secrets of the Jungle (2020)</h3>
              <p class="soft" style="margin:0 0 0.35rem;">Year: 2020</p>
              <p style="margin:0 0 0.35rem;">Ash meets Koko, a boy raised by a Zarude, and helps protect the Great Tree from a researcher.</p>
              <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Characters:</b> <a href="characters.html#travelers">Ash Ketchum</a>, Koko, Dada Zarude, Dr. Zed</p>
              <p style="font-size:0.875rem; margin:0;"><b>Pokémon:</b> <a href="pokemon.html?id=893">Zarude · #893</a>, <a href="pokemon.html?id=251">Celebi · #251</a></p>
            </div>
          </article>
        </div>
      </details>
    </section>

    <section class="file-block" id="legendary-mythical" aria-labelledby="legendary-mythical-heading">
      <h2 id="legendary-mythical-heading">Legendary &amp; Mythical Pokémon</h2>
      <p class="soft">Regional catalogue of Legendary and Mythical species across all nine generations, with canonical appearances across the mainline games and theatrical releases.</p>

      <div style="display:flex; flex-direction:column; gap:1.25rem; margin-top:1rem;">
        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Kanto (Generation I)</h3>
          <p style="margin:0 0 0.4rem;">Kanto established the first legendary trio with the elemental winged mirages Articuno, Zapdos, and Moltres, roosting in remote wilderness across the region. Genetic research conducted on Faraway Island led Team Rocket scientists to clone Mew into the psychic powerhouse Mewtwo in the Cinnabar Island laboratory.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=144">Articuno · #144</a>, <a href="pokemon.html?id=145">Zapdos · #145</a>, <a href="pokemon.html?id=146">Moltres · #146</a>, <a href="pokemon.html?id=150">Mewtwo · #150</a>, <a href="pokemon.html?id=151">Mew · #151</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Red, Blue, Yellow, FireRed, LeafGreen, Let's Go, Pikachu! / Eevee!</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Mewtwo Strikes Back, The Power of One, Mewtwo Returns</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Johto (Generation II)</h3>
          <p style="margin:0 0 0.4rem;">Johto folklore centers on the destruction of Ecruteak City's Brass Tower, where three unnamed Pokémon perished in the flames and were resurrected by Ho-Oh as the legendary beasts Raikou, Entei, and Suicune. Sky guardian Lugia nested in the Whirl Islands, while time-traveling guardian Celebi protects the ancient shrine deep inside Ilex Forest.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=243">Raikou · #243</a>, <a href="pokemon.html?id=244">Entei · #244</a>, <a href="pokemon.html?id=245">Suicune · #245</a>, <a href="pokemon.html?id=249">Lugia · #249</a>, <a href="pokemon.html?id=250">Ho-Oh · #250</a>, <a href="pokemon.html?id=251">Celebi · #251</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Gold, Silver, Crystal, HeartGold, SoulSilver</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> The Power of One, Spell of the Unown, Celebi: Voice of the Forest, Zoroark: Master of Illusions</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Hoenn (Generation III)</h3>
          <p style="margin:0 0 0.4rem;">Hoenn's geography was shaped by primeval titan clashes between ancient ocean ruler Kyogre and landmass creator Groudon, kept in check by ozone layer sovereign Rayquaza. Sealed away in ancient stone ruins are the sealed titan trio Regirock, Regice, and Registeel, alongside roaming twin guardians Latias and Latios, wish-granting Jirachi, and extraterrestrial mutation Deoxys.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=377">Regirock · #377</a>, <a href="pokemon.html?id=378">Regice · #378</a>, <a href="pokemon.html?id=379">Registeel · #379</a>, <a href="pokemon.html?id=380">Latias · #380</a>, <a href="pokemon.html?id=381">Latios · #381</a>, <a href="pokemon.html?id=382">Kyogre · #382</a>, <a href="pokemon.html?id=383">Groudon · #383</a>, <a href="pokemon.html?id=384">Rayquaza · #384</a>, <a href="pokemon.html?id=385">Jirachi · #385</a>, <a href="pokemon.html?id=386">Deoxys · #386</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Ruby, Sapphire, Emerald, Omega Ruby, Alpha Sapphire</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Pokémon Heroes, Jirachi: Wish Maker, Destiny Deoxys</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Sinnoh &amp; Hisui (Generation IV &amp; Legends)</h3>
          <p style="margin:0 0 0.4rem;">Sinnoh cosmology recounts the creation of the cosmos by the original deity Arceus at the Spear Pillar atop Mount Coronet. Arceus brought forth Dialga to rule time, Palkia to govern space, and banished Giratina to the Distortion World, while the lake guardians Uxie, Mesprit, and Azelf brought forth knowledge, emotion, and willpower.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=480">Uxie · #480</a>, <a href="pokemon.html?id=481">Mesprit · #481</a>, <a href="pokemon.html?id=482">Azelf · #482</a>, <a href="pokemon.html?id=483">Dialga · #483</a>, <a href="pokemon.html?id=484">Palkia · #484</a>, <a href="pokemon.html?id=485">Heatran · #485</a>, <a href="pokemon.html?id=486">Regigigas · #486</a>, <a href="pokemon.html?id=487">Giratina · #487</a>, <a href="pokemon.html?id=488">Cresselia · #488</a>, <a href="pokemon.html?id=489">Phione · #489</a>, <a href="pokemon.html?id=490">Manaphy · #490</a>, <a href="pokemon.html?id=491">Darkrai · #491</a>, <a href="pokemon.html?id=492">Shaymin · #492</a>, <a href="pokemon.html?id=493">Arceus · #493</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Diamond, Pearl, Platinum, Brilliant Diamond, Shining Pearl, Legends: Arceus</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> The Rise of Darkrai, Giratina and the Sky Warrior, Arceus and the Jewel of Life</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Unova (Generation V)</h3>
          <p style="margin:0 0 0.4rem;">Unova history tells of an original dragon that split in two during a civil war between twin hero princes, dividing into Reshiram, dragon of truth, and Zekrom, dragon of ideals, with the frozen husk Kyurem remaining in the Giant Chasm. Defending the wild habitats are the Swords of Justice led by Cobalion, the Forces of Nature trio, and mythical guardians Victini, Meloetta, and Genesect.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=494">Victini · #494</a>, <a href="pokemon.html?id=638">Cobalion · #638</a>, <a href="pokemon.html?id=639">Terrakion · #639</a>, <a href="pokemon.html?id=640">Virizion · #640</a>, <a href="pokemon.html?id=641">Tornadus · #641</a>, <a href="pokemon.html?id=642">Thundurus · #642</a>, <a href="pokemon.html?id=643">Reshiram · #643</a>, <a href="pokemon.html?id=644">Zekrom · #644</a>, <a href="pokemon.html?id=645">Landorus · #645</a>, <a href="pokemon.html?id=646">Kyurem · #646</a>, <a href="pokemon.html?id=647">Keldeo · #647</a>, <a href="pokemon.html?id=648">Meloetta · #648</a>, <a href="pokemon.html?id=649">Genesect · #649</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Black, White, Black 2, White 2</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Victini and Reshiram / Zekrom, Kyurem vs. The Sword of Justice, Genesect and the Legend Awakened</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Kalos (Generation VI)</h3>
          <p style="margin:0 0 0.4rem;">Kalos myth revolves around the cycle of life and destruction embodied by the life-giving stag Xerneas and the death cocoon Yveltal, both tied to the energy of an ancient ultimate weapon. Maintaining ecological equilibrium beneath the surface is order custodian Zygarde, accompanied by underground jewel ruler Diancie, dimension-hopping djinn Hoopa, and steam-driven Volcanion.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=716">Xerneas · #716</a>, <a href="pokemon.html?id=717">Yveltal · #717</a>, <a href="pokemon.html?id=718">Zygarde · #718</a>, <a href="pokemon.html?id=719">Diancie · #719</a>, <a href="pokemon.html?id=720">Hoopa · #720</a>, <a href="pokemon.html?id=721">Volcanion · #721</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> X, Y, Legends: Z-A</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Diancie and the Cocoon of Destruction, Hoopa and the Clash of Ages, Volcanion and the Mechanical Marvel</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Alola (Generation VII)</h3>
          <p style="margin:0 0 0.4rem;">Alola's tropical islands are guarded by the four natural land spirits known as the Tapu. Planetary balance depends on Cosmog evolving into the radiant emissaries Solgaleo or Lunala to cross Ultra Wormholes, defending the world's light from the prism parasite Necrozma that once consumed Ultra Megalopolis.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=785">Tapu Koko · #785</a>, <a href="pokemon.html?id=786">Tapu Lele · #786</a>, <a href="pokemon.html?id=787">Tapu Bulu · #787</a>, <a href="pokemon.html?id=788">Tapu Fini · #788</a>, <a href="pokemon.html?id=789">Cosmog · #789</a>, <a href="pokemon.html?id=790">Cosmoem · #790</a>, <a href="pokemon.html?id=791">Solgaleo · #791</a>, <a href="pokemon.html?id=792">Lunala · #792</a>, <a href="pokemon.html?id=800">Necrozma · #800</a>, <a href="pokemon.html?id=801">Magearna · #801</a>, <a href="pokemon.html?id=802">Marshadow · #802</a>, <a href="pokemon.html?id=807">Zeraora · #807</a>, <a href="pokemon.html?id=808">Meltan · #808</a>, <a href="pokemon.html?id=809">Melmetal · #809</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Sun, Moon, Ultra Sun, Ultra Moon, Pokémon GO</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Sun &amp; Moon animated series, I Choose You!, The Power of Us</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Galar (Generation VIII)</h3>
          <p style="margin:0 0 0.4rem;">Galar ancient history recounts the Darkest Day, an energy cataclysm brought on by alien poison titan Eternatus that was stopped by heroic warrior wolves Zacian and Zamazenta wielding legendary arms. The Crown Tundra preserves ancient king Calyrex and its loyal steed, along with elder elemental regis and master martial bear Urshifu.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=888">Zacian · #888</a>, <a href="pokemon.html?id=889">Zamazenta · #889</a>, <a href="pokemon.html?id=890">Eternatus · #890</a>, <a href="pokemon.html?id=891">Kubfu · #891</a>, <a href="pokemon.html?id=892">Urshifu · #892</a>, <a href="pokemon.html?id=893">Zarude · #893</a>, <a href="pokemon.html?id=894">Regieleki · #894</a>, <a href="pokemon.html?id=895">Regidrago · #895</a>, <a href="pokemon.html?id=896">Glastrier · #896</a>, <a href="pokemon.html?id=897">Spectrier · #897</a>, <a href="pokemon.html?id=898">Calyrex · #898</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Sword, Shield, The Isle of Armor, The Crown Tundra</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Pokémon: Twilight Wings, Journeys series, Secrets of the Jungle</p>
        </article>

        <article>
          <h3 style="font-size:1.05rem; margin:0 0 0.25rem; color:var(--navy);">Paldea (Generation IX)</h3>
          <p style="margin:0 0 0.4rem;">Paldea holds ancient Paradox beasts brought through a temporal rift in Area Zero, alongside winged apex reptiles Koraidon and Miraidon. Buried across the provinces are the four cursed Treasures of Ruin awakened by royal greed, with the crystal turtle Terapagos fueling the Terastal crystallization phenomenon and mythical puppeteer Pecharunt manipulating Kitakami.</p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Pokémon:</b> <a href="pokemon.html?id=1001">Wo-Chien · #1001</a>, <a href="pokemon.html?id=1002">Chien-Pao · #1002</a>, <a href="pokemon.html?id=1003">Ting-Lu · #1003</a>, <a href="pokemon.html?id=1004">Chi-Yu · #1004</a>, <a href="pokemon.html?id=1007">Koraidon · #1007</a>, <a href="pokemon.html?id=1008">Miraidon · #1008</a>, <a href="pokemon.html?id=1014">Okidogi · #1014</a>, <a href="pokemon.html?id=1015">Munkidori · #1015</a>, <a href="pokemon.html?id=1016">Fezandipiti · #1016</a>, <a href="pokemon.html?id=1017">Ogerpon · #1017</a>, <a href="pokemon.html?id=1024">Terapagos · #1024</a>, <a href="pokemon.html?id=1025">Pecharunt · #1025</a></p>
          <p style="font-size:0.875rem; margin:0 0 0.25rem;"><b>Games:</b> Scarlet, Violet, The Teal Mask, The Indigo Disk</p>
          <p style="font-size:0.875rem; margin:0;"><b>Film &amp; Media:</b> Pokémon: Paldean Winds, Horizons series</p>
        </article>
      </div>
    </section>

    <div class="about-grid">
      <!-- 左栏：游戏正作世界观与时空脉络 -->
      <div class="about-col">
        <section class="file-block" id="world-canon" aria-labelledby="world-heading">
          <h2 id="world-heading">Game notes</h2>
          <details>
          <summary>Regions, timelines &amp; spacetime</summary>
          <p style="margin-bottom:1rem; line-height:1.6; color:var(--ink-soft);">
            Detailed regional geography, chronological sequences, and spacetime phenomena recorded across the main series.
          </p>

          <div style="border-top:1px solid var(--line); padding-top:1rem; margin-top:1rem;">
            <h3 style="font-family:var(--font-ui); font-size:1.1rem; color:var(--ink); margin:0 0 0.5rem;">In-Universe Game Canon</h3>
            <p style="font-size:0.875rem; color:var(--ink-soft); line-height:1.5; margin-bottom:0.75rem;">
              Source: Core series dialogue, trainer histories, and official geography maps from Game Freak releases.
            </p>

            <h4 style="font-family:var(--font-ui); font-size:0.95rem; color:var(--navy); margin:0.85rem 0 0.25rem;">Regions and Spatial Geography</h4>
            <p style="line-height:1.6; margin-bottom:0.75rem;">
              The first four regions (Kanto, Johto, Hoenn, and Sinnoh) sit in close geographic proximity, based on the real-world Japanese regions of Kanto, Kansai, Kyushu, and Hokkaido. Kanto and Johto share a contiguous land border connected by Route 27, Tohjo Falls, and the Magnet Train between Saffron City and Goldenrod City. Later titles moved to overseas territories: Unova is based on the New York metropolitan area, Kalos on northern France, Alola on Hawaii, Galar on the United Kingdom, and Paldea on the Iberian Peninsula. For regional borders, native dex slices, and field survey maps from Kanto #001 to Paldea #1025, see the <a href="regions.html">Regions</a> index.
            </p>

            <h4 style="font-family:var(--font-ui); font-size:0.95rem; color:var(--navy); margin:0.85rem 0 0.25rem;">Main Series Event Cross-Referencing</h4>
            <p style="line-height:1.6; margin-bottom:0.5rem;">
              How different regional adventures correlate across the core continuity:
            </p>
            <ul style="margin-bottom:0.75rem;">
              <li><strong>Kanto and Hoenn:</strong> Red disbands Team Rocket in Kanto at roughly the same time Brendan or May confronts Team Magma and Team Aqua across Hoenn.</li>
              <li><strong>Johto and Sinnoh:</strong> Three years later, Red trains atop Mt. Silver during the Johto league challenge, while Lucas or Dawn resolves the space-time rift created by Team Galactic in Sinnoh.</li>
              <li><strong>Unova through Paldea:</strong> Several years elapse before Black and White, followed two years later by Black 2 and White 2. Subsequent journeys across Kalos, Alola, Galar, and Paldea unfold chronologically forward in modern sequence.</li>
            </ul>

            <h4 style="font-family:var(--font-ui); font-size:0.95rem; color:var(--navy); margin:0.85rem 0 0.25rem;">Anomalous Spacetime Phenomena</h4>
            <p style="line-height:1.6; margin-bottom:0.5rem;">
              The game universe features specific localized breaches in space and time:
            </p>
            <ul style="margin-bottom:0.75rem;">
              <li><strong>Space-time rifts:</strong> Atmospheric tears over Mount Coronet in ancient Hisui, triggered by Giratina destabilizing the Temple of Sinnoh, which caused items and people from different centuries to fall through.</li>
              <li><strong>The Distortion World:</strong> A parallel plane where Giratina was banished. Normal gravity, surface orientation, and the standard forward flow of time do not apply there.</li>
              <li><strong>Ultra Wormholes:</strong> Interdimensional gateways in Alola opened by Solgaleo, Lunala, or Necrozma. These tunnels connect our world to extradimensional habitats such as Ultra Deep Sea and the ruined civilization of Ultra Megalopolis.</li>
              <li><strong>Area Zero and Paradox Pokémon:</strong> The Great Crater of Paldea houses a functioning time machine built by Professor Sada or Professor Turo. The machine extracted ancient past or distant future Paradox specimens into the present day.</li>
            </ul>
          </div>
          </details>
        </section>
      </div>

      <!-- 右栏：现实发布演进、地区直达、系统设置与快捷键 -->
      <div class="about-col">
        <section class="file-block" id="franchise-history" aria-labelledby="history-heading">
          <h2 id="history-heading">Release history</h2>
          <details>
          <summary>From Game Boy to Switch</summary>
          <p style="line-height:1.6; color:var(--ink-soft); margin-bottom:0.75rem;">
            The real-world development of the franchise spans thirty years of hardware changes:
          </p>
          <ul style="margin-bottom:0.75rem;">
            <li><strong>1996:</strong> Game Freak and Nintendo released <em>Pocket Monsters Red and Green</em> for the Game Boy in Japan, directed by Satoshi Tajiri with artwork by Ken Sugimori. This established the initial 151 species indexed on this site.</li>
            <li><strong>1998-1999:</strong> International localized releases as <em>Pokémon Red and Blue</em> established the global franchise.</li>
            <li><strong>Hardware generations:</strong> The series transitioned across Game Boy Color (1999, Gen II), Game Boy Advance (2002, Gen III), Nintendo DS (2006, Gen IV), Nintendo 3DS (2013, Gen VI), and Nintendo Switch (2019, Gen VIII).</li>
            <li><strong>Data compatibility:</strong> The 2002 release of <em>Ruby and Sapphire</em> rebuilt the core internal data structures for individual Pokémon (introducing 31-point Individual Values and personality values). Because of this unified structure, a Pokémon caught on a Game Boy Advance cartridge in 2002 can still be transferred upward through the DS, 3DS, and Pokémon Bank into Pokémon HOME on the Nintendo Switch today.</li>
          </ul>
          </details>
        </section>

        <section class="file-block" id="regions-shortcut" aria-labelledby="regions-shortcut-heading">
          <h2 id="regions-shortcut-heading">Regional index</h2>
          <p style="line-height:1.6; color:var(--ink-soft); margin-bottom:1rem;">
            Maps and National Dex ranges, region by region.
          </p>
          <a href="regions.html" class="link-action timeline-map-btn">Open Regions Atlas →</a>
        </section>

        <!-- 精灵球音效开关 -->
        <section class="file-block" aria-labelledby="sound-heading">
          <h2 id="sound-heading">Sound</h2>
          <p class="soft" style="margin-bottom: 1rem;">Off by default. Turn on cries when opening a file or drawing a Pokémon. Taps always play a cry.</p>
          <button class="btn btn-paper" id="sound" type="button">Sound off</button>
        </section>

        <!-- 快捷键指南 -->
        <section class="file-block" aria-labelledby="keys-heading">
          <h2 id="keys-heading">Keys</h2>
          <table class="keys-table">
            <tbody>
              <tr><td><kbd>/</kbd></td><td>Focus local search on Dex / Lineup; open global search elsewhere</td></tr>
              <tr><td><kbd>Esc</kbd></td><td>Close the Detail Poké Ball, then Detail; clear the Dex search or number buffer</td></tr>
              <tr><td><kbd>←</kbd> <kbd>→</kbd></td><td>Prev / next Pokémon in its region on Detail; Film on Dex</td></tr>
              <tr><td><kbd>F</kbd></td><td>Copy the current Detail or Lineup link</td></tr>
              <tr><td><kbd>↑</kbd> <kbd>↓</kbd></td><td>Move in Ledger</td></tr>
              <tr><td><kbd>a</kbd>–<kbd>z</kbd></td><td>Jump Ledger name in the open spine</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <script src="js/store.js"></script>
  <script src="js/pokeball.js"></script>
  <script>
    document.querySelectorAll("#legendary-mythical > div > article").forEach((article) => {
      const roster = [...article.querySelectorAll("p")].find((p) => p.querySelector('a[href*="pokemon.html?id="]'));
      if (!roster) return;
      roster.classList.add("legendary-roster");
      [...roster.childNodes].forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE || !node.textContent.includes(",")) return;
        const separator = document.createElement("span");
        separator.className = "legendary-separator";
        separator.textContent = node.textContent;
        separator.setAttribute("aria-hidden", "true");
        node.replaceWith(separator);
      });
      roster.querySelectorAll('a[href*="pokemon.html?id="]').forEach((link) => {
        const id = link.getAttribute("href").match(/[?&]id=(\d+)/)?.[1];
        if (!id) return;
        const image = document.createElement("img");
        image.src = `assets/thumbs/${id}.webp`;
        image.alt = ""; image.width = 192; image.height = 192;
        image.loading = "lazy"; image.decoding = "async";
        link.classList.add("legendary-specimen");
        link.prepend(image);
      });
    });
  </script>
  <script>
    // file151.sound 开关控制逻辑
    const soundBtn = document.getElementById("sound");

    function renderSoundState() {
      const isSoundOn = window.store.soundOn();
      soundBtn.textContent = isSoundOn ? "Sound on" : "Sound off";
      soundBtn.setAttribute("aria-pressed", isSoundOn ? "true" : "false");
    }

    soundBtn.addEventListener("click", () => {
      window.store.setSound(!window.store.soundOn());
      renderSoundState();
    });

    renderSoundState();
  </script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

### 1.15 `quiz.html` (Booster Pack Lab / 实体卡包拆包实验室)

- **文件路径**: `quiz.html`  
- **代码行数**: 246 行  
- **文件大小**: 12,317 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Quiz — 151 File</title>
  <meta name="description" content="Physical specimen expansion archive. Tear open field packs to catalogue official specimen prints into your local binder.">
  <meta name="theme-color" content="#071422">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Oxanium:wght@500;700&display=swap">

  <!-- 共享样式模块 -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <link rel="stylesheet" href="css/pokeball.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-bar">
    <div class="site-bar-inner">
      <a class="site-bar-brand" href="index.html" aria-label="151 File home">
        <img src="assets/pokeball.png" alt="" width="32" height="32" class="nav-ball-img">
      </a>
      <nav>
        <a href="pokedex.html">Dex</a>
        <a href="regions.html">Regions</a>
        <a href="types.html">Types</a>
        <a href="moves.html">Moves</a>
        <a href="abilities.html">Abilities</a>
        <a href="collection.html">Collection</a>
        <a href="team.html">Belt</a>
        <a href="battle-lab.html">Lab</a>
        <a href="quiz.html" aria-current="page">Quiz</a>
        <a href="characters.html">Characters</a>
        <a href="games.html">Games</a>
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap pack-lab-wrap">
    <div style="margin-bottom:1.5rem;">
      <h1 class="page-title">Quiz</h1>
      <p class="lead" style="color:var(--ink-soft); margin-bottom:1.25rem;">
        <strong>Booster Pack Lab</strong> · Physical specimen expansion archive. Tear open field packs to catalogue official specimen prints into your local binder.
      </p>

      <!-- 记分看板：采用全站统一结构与Oxanium等宽数字 -->
      <div class="quiz-score-board" style="grid-template-columns: repeat(3, 1fr); margin-bottom:0;">
        <div class="quiz-score-card">
          <span id="stat-packs-opened">0</span>
          <small>PACKS OPENED</small>
        </div>
        <div class="quiz-score-card">
          <span id="stat-cards-collected">0</span>
          <small>UNIQUE SPECIMENS</small>
        </div>
        <div class="quiz-score-card">
          <span id="pack-set-meta-total">161</span>
          <small id="pack-set-meta-name">30TH CELEBRATION</small>
        </div>
      </div>
    </div>

    <!-- 卡包控制栏与选择器 -->
    <section class="pack-controls-bar">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
        <span style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft); font-weight:700; letter-spacing:0.05em;">
          FEATURED EXPANSIONS
        </span>
        <span id="pack-set-meta" style="font-family:var(--font-num); font-size:0.75rem; color:var(--mark); font-weight:700;">
          30th Celebration · 161 Cards
        </span>
      </div>

      <!-- 快速预设按钮组：使用全站原生 .type-row 与 .chip 样式规范 -->
      <div class="type-row" id="pack-featured-chips" role="group" aria-label="Featured expansions">
        <button class="chip" type="button" data-set-id="me55" data-on aria-pressed="true">30th Celebration · 2026</button>
        <button class="chip" type="button" data-set-id="sv3pt5" aria-pressed="false">Pokémon 151 · 2023</button>
        <button class="chip" type="button" data-set-id="base1" aria-pressed="false">Base Set · 1999</button>
        <button class="chip" type="button" data-set-id="sv8pt5" aria-pressed="false">Prismatic Evolutions · 2025</button>
        <button class="chip" type="button" data-set-id="swsh7" aria-pressed="false">Evolving Skies · 2021</button>
      </div>

      <!-- 全系列下拉框 -->
      <div class="pack-selector-row">
        <div class="pack-select-group">
          <label for="pack-set-select">All Expansions:</label>
          <select id="pack-set-select" class="pack-set-select">
            <option value="me55">[2026] 30th Celebration (161 cards) — 30th Anniversary</option>
            <option value="me55c">[2026] 30th Celebration: Classic Collection (30 cards)</option>
            <option value="me1">[2025] Mega Evolution (188 cards)</option>
            <option value="sv10">[2025] Destined Rivals (244 cards)</option>
            <option value="sv9">[2025] Journey Together (190 cards)</option>
            <option value="sv8pt5">[2025] Prismatic Evolutions (180 cards)</option>
            <option value="sv8">[2024] Surging Sparks (252 cards)</option>
            <option value="sv7">[2024] Stellar Crown (175 cards)</option>
            <option value="sv6">[2024] Twilight Masquerade (226 cards)</option>
            <option value="sv4pt5">[2024] Paldean Fates (245 cards)</option>
            <option value="sv3pt5" selected>[2023] 151 (207 cards) — Classic 151 Modern Art</option>
            <option value="sv1">[2023] Scarlet & Violet Base (258 cards)</option>
            <option value="swsh12pt5">[2023] Crown Zenith (160 cards)</option>
            <option value="swsh7">[2021] Evolving Skies (237 cards)</option>
            <option value="swsh45">[2021] Shining Fates (73 cards)</option>
            <option value="base1">[1999] Base Set (102 cards) — 1999 Original First Edition</option>
            <option value="base2">[1999] Jungle (64 cards)</option>
            <option value="base3">[1999] Fossil (62 cards)</option>
            <option value="base5">[2000] Team Rocket (83 cards)</option>
            <option value="gym1">[2000] Gym Heroes (132 cards)</option>
          </select>
        </div>
        <button class="btn btn-primary" id="pack-open-trigger-btn" type="button">
          Tear pack
        </button>
      </div>
    </section>

    <!-- 拆包交互主舞台 -->
    <section class="pack-stage-container" id="pack-stage">
      <!-- 初始/封包状态：铝箔卡包展示 -->
      <div id="pack-sealed-view" style="display:flex; flex-direction:column; align-items:center;">
        <div class="pack-foil-wrapper" id="pack-foil-pack" title="Tear pack">
          <!-- 实体铝箔卡包完整包装封画 -->
          <img id="pack-cover-img" class="pack-cover-img" src="assets/packs/me55.jpg" alt="Official Booster Pack Packaging">
          <!-- 拟真铝箔金属高光覆层 -->
          <div class="pack-foil-sheen"></div>
          <!-- 撕包微交互浮标 -->
          <div class="pack-tear-tab">
            <span class="pack-tear-arrow">◀</span>
            <span class="pack-tear-label">TEAR TO OPEN</span>
            <span class="pack-tear-arrow">▶</span>
          </div>
        </div>

        <p style="font-family:var(--font-num); font-size:0.8125rem; color:var(--ink-soft); margin-top:1.5rem; text-align:center;">
          Tap the foil pack or press Tear pack to reveal 10 specimens.
        </p>
      </div>

      <!-- 开包状态：10 张卡牌揭晓展示区（默认隐藏） -->
      <div id="pack-opened-view" style="display:none; width:100%;">
        <div class="pack-cards-grid" id="pack-cards-grid">
          <!-- 10 张卡牌由 JS 动态生成 -->
        </div>

        <!-- 揭晓后续操作栏 -->
        <div class="pack-actions-bar">
          <button class="btn btn-primary" id="pack-again-btn" type="button">
            Tear another pack
          </button>
          <button class="btn btn-paper" id="pack-reveal-all-btn" type="button">
            Reveal all
          </button>
          <button class="btn btn-paper" id="pack-toggle-binder-btn" type="button">
            Open binder
          </button>
        </div>
      </div>

      <!-- 加载提示浮层 -->
      <div id="pack-loading-overlay" class="pack-loading-overlay">
        <p style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink);" id="pack-loading-msg">Fetching expansion card ledger...</p>
      </div>
    </section>

    <!-- 卡册抽屉（Binder Section，默认可折叠） -->
    <section class="pack-binder-section" id="pack-binder-section">
      <div class="pack-binder-header">
        <h2>
          <button class="pack-binder-header-toggle" id="pack-binder-header" type="button" aria-expanded="false" aria-controls="pack-binder-body">
            <span>Specimen Binder</span>
            <span id="binder-count-badge" style="font-family:var(--font-num); font-size:0.75rem; background:var(--sky); color:var(--mark); padding:0.15rem 0.5rem; border-radius:2px; font-weight:700;">
              0 Cards
            </span>
            <span class="pack-binder-toggle-icon" aria-hidden="true">▼</span>
          </button>
        </h2>
      </div>

      <div class="pack-binder-body" id="pack-binder-body">
        <div class="pack-binder-filters" role="group" aria-label="Filter binder cards by rarity">
          <span style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft); font-weight:700; margin-right:0.25rem;">
            FILTER:
          </span>
          <button class="chip" type="button" data-filter="all" data-on aria-pressed="true">All Cards</button>
          <button class="chip" type="button" data-filter="sar" aria-pressed="false">Special Illustration</button>
          <button class="chip" type="button" data-filter="ultra" aria-pressed="false">Ultra Rare / ex</button>
          <button class="chip" type="button" data-filter="rare" aria-pressed="false">Rare / Holo</button>
          <button class="chip" type="button" data-filter="uncommon" aria-pressed="false">Uncommon</button>
          <button class="chip" type="button" data-filter="common" aria-pressed="false">Common</button>
        </div>

        <div class="pack-binder-grid" id="pack-binder-grid">
          <!-- 收集卡牌缩略图由 JS 动态生成 -->
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="site-footer-range"><span>#001–#151</span> Kanto-first Pokémon archive</div>
    <div class="site-footer-top">
      <div class="site-footer-intro">
        <div class="site-footer-brand">151 FILE</div>
        <p class="site-footer-lead">Keep a little of Kanto with you.</p>
      </div>
      <div class="site-footer-seal" aria-hidden="true">
        <span>Kanto</span>
        <img src="assets/favicon.svg" alt="" width="112" height="112" loading="lazy">
        <span>Pokémon archive</span>
      </div>
    </div>
    <div class="site-footer-bottom">
      <span>Pokémon data from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></span>
      <p>Unofficial fan archive. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>
    </div>
  </footer>

  <!-- 高清大卡预览 Modal -->
  <div class="tcg-modal-backdrop" id="tcg-modal" role="dialog" aria-modal="true" aria-labelledby="tcg-modal-name" aria-describedby="tcg-modal-meta" aria-hidden="true" tabindex="-1" hidden style="display:none;">
    <div class="tcg-modal-card-wrap">
      <img id="tcg-modal-img" class="tcg-modal-card-img" src="" alt="High resolution card preview">
      <div class="tcg-modal-info">
        <h3 id="tcg-modal-name">Pokémon Name</h3>
        <p id="tcg-modal-meta">#001 · Illustration Rare · Yuu Nishida</p>
      </div>
      <button class="btn btn-paper" id="tcg-modal-close-btn" type="button" style="margin-top:0.5rem;">
        Close file
      </button>
    </div>
  </div>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
  <script src="js/quiz.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>
```

---

## 2. CSS 样式模块 (CSS Stylesheets)

### 2.1 `css/tokens.css` (设计 Token & 变量)

- **文件路径**: `css/tokens.css`  
- **代码行数**: 49 行  
- **文件大小**: 1,926 字节  

```css
/* ==========================================================================
   151 FILE — Design Tokens (Night Archive / 夜档规范)
   ========================================================================== */

:root {
  /* Color Palette — 夜档深色系统 */
  --sky:          #071422; /* 页底，占大面积 */
  --sky-deep:     #0B1C2E; /* 页顶到页底过渡 */
  --paper:        #102338; /* 顶栏底、档案标本砖底 */
  --ink:          #E4F1F8; /* 主字（高对比亮色） */
  --ink-soft:     #8EB8D2; /* 次字（软墨蓝） */
  --navy:         #7EB6D9; /* 链接色、次高亮 */
  --line:         #1E3A55; /* 结构描边、硬投影色 */
  --ok:           #7BC89A; /* 成功状态单行说明 */
  --focus:        #FFCB05; /* 键盘焦点环 */
  --navy-key:     #D7EEF8; /* 主键底（浅青底，深底上压得住） */
  --navy-key-ink: #071422; /* 主键字（深色墨） */
  --mark:         #FFCB05; /* 官方黄：编号底块、当前导航下划线 */
  --ball:         #EE1515; /* 精灵球红：球上半、移除小圆点 */
  --blue:         #3D7DCA; /* 尺格描边、交互微悬停边 */

  /* Spacing Scale (4px 步进 rem token) */
  --s-1:  0.25rem;  /* 4px */
  --s-2:  0.5rem;   /* 8px */
  --s-3:  0.75rem;  /* 12px */
  --s-4:  1rem;     /* 16px */
  --s-5:  1.25rem;  /* 20px */
  --s-6:  1.5rem;   /* 24px */
  --s-7:  1.75rem;  /* 28px */
  --s-8:  2rem;     /* 32px */
  --s-10: 2.5rem;   /* 40px */
  --s-12: 3rem;     /* 48px */
  --s-14: 3.5rem;   /* 56px */

  /* Typography Stacks */
  --font-ui:  "Atkinson Hyperlegible", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-num: "Oxanium", monospace, sans-serif;

  /* Corner Radii */
  --r-file: 4px;
  --r-key:  4px 4px 14px 4px;
  --r-ball: 50%;
  --r-chip: 4px;

  /* Shadows (硬投影) */
  --shadow-file: 0 10px 0 var(--line);
  --shadow-key:  0 4px 0 var(--line);
}
```

---

### 2.2 `css/base.css` (全局排版与基础样式)

- **文件路径**: `css/base.css`  
- **代码行数**: 252 行  
- **文件大小**: 5,897 字节  

```css
/* ==========================================================================
   151 FILE — Base Layout & Global Styles (Night Archive)
   ========================================================================== */

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-height: 100dvh;
}

body {
  font: 400 1.0625rem/1.45 var(--font-ui);
  color: var(--ink);
  background: linear-gradient(180deg, var(--sky-deep) 0%, var(--sky) 100%);
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings & Text */
h1, h2, h3, h4, p {
  margin-top: 0;
}

a {
  color: var(--navy);
  text-decoration: none;
  transition: color 80ms ease;
}

a:hover {
  color: var(--ink);
}

:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

/* Layout Container (带桌面左侧装订边，右侧通栏填满视口，消除右侧空旷) */
.wrap {
  width: 100%;
  margin: 0;
  padding: var(--s-6) max(var(--s-8), env(safe-area-inset-right)) 5rem max(var(--s-12), env(safe-area-inset-left));
}

/* ==========================================================================
   Shared Navigation Bar (32px 精灵球 + 站名 + 六链)
   ========================================================================== */
.site-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: var(--paper);
  border-bottom: 2px solid var(--line);
  transition: background-color 180ms ease, backdrop-filter 180ms ease, border-color 180ms ease;
}

/* 当内容滚动穿过顶栏时的轻霜效果 */
.site-bar.is-over-content {
  background: color-mix(in srgb, var(--paper) 72%, transparent);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border-bottom: 1px solid color-mix(in srgb, var(--line) 40%, transparent);
}

/* 顶栏内容容器：通栏 100% 宽度，导航菜单贴至右侧边缘 */
.site-bar-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: calc(var(--s-14) + env(safe-area-inset-top));
  width: 100%;
  margin: 0;
  padding: env(safe-area-inset-top) max(var(--s-8), env(safe-area-inset-right)) 0 max(var(--s-12), env(safe-area-inset-left));
}

.site-bar-brand {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.nav-ball-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  display: block;
  border-radius: 50%;
  transition: transform 100ms ease-out;
}

.site-bar-brand:active .nav-ball-img {
  transform: scale(0.92);
}

.site-bar .brand {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  color: var(--navy);
  text-decoration: none;
  white-space: nowrap;
}

.site-bar nav {
  margin-left: auto;
  display: flex;
  gap: 1.25rem;
  font-size: 0.9375rem;
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;
  padding-block: var(--s-1);
}

.site-bar nav a {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  min-height: 2.75rem;
  position: relative;
  text-decoration: none;
  color: var(--ink);
  padding: 0.375rem 0.125rem;
  transition: color 80ms ease;
}

.site-bar nav a:hover {
  color: var(--navy);
}

.site-bar nav a[aria-current="page"] {
  box-shadow: 0 3px 0 var(--mark);
}

/* Accessibility Preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .site-bar, .site-bar.is-over-content {
    background: var(--paper);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

@media (max-width: 48rem) {
  .wrap {
    padding-left: max(var(--s-4), env(safe-area-inset-left));
    padding-right: max(var(--s-4), env(safe-area-inset-right));
  }
  .site-bar-inner {
    gap: var(--s-3);
    padding-left: max(var(--s-4), 1rem);
    padding-right: max(var(--s-4), 1rem);
  }
  .site-bar nav {
    gap: 0.75rem;
    font-size: 0.875rem;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 2px;
  }
  .site-bar nav::-webkit-scrollbar {
    display: none;
  }
}

/* 手机窄屏：品牌 + 6 个导航项在 375px 放不下，品牌收成纯图标（链接已有 aria-label） */
@media (max-width: 34rem) {
  .site-bar .brand {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
  .site-bar-inner {
    gap: var(--s-2);
    padding-left: max(var(--s-3), env(safe-area-inset-left));
    padding-right: max(var(--s-3), env(safe-area-inset-right));
  }
  .site-bar nav {
    gap: var(--s-2);
    min-width: 0;
  }
}

/* 带 hidden 属性的元素必须真的隐藏：否则 .dex 等自带的 display 会盖过浏览器默认样式，
   被隐藏的名录视图仍占 ~656px，桌面端切到 Grid 后首屏是一片空白 */
[hidden] {
  display: none !important;
}

/* 无障碍：仅供读屏的文字、跳转到主内容、正文链接不能只靠颜色区分 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  left: var(--s-4);
  top: -4rem;
  z-index: 100;
  padding: var(--s-2) var(--s-4);
  background: var(--mark);
  color: var(--sky);
  font-weight: 700;
  border-radius: var(--r-key);
  transition: top 120ms ease;
}

.skip-link:focus {
  top: var(--s-2);
  color: var(--sky);
}

main p a:not([class]),
main li a:not([class]),
.link-action {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}
```

---

### 2.3 `css/buttons.css` (按钮与交互控件规范)

- **文件路径**: `css/buttons.css`  
- **代码行数**: 247 行  
- **文件大小**: 5,736 字节  

```css
/* ==========================================================================
   151 FILE — Buttons & Controls (Night Archive)
   ========================================================================== */

:root {
  --btn-primary-hover: #B9DDF0;
  --btn-mark-hover: #FFE066;
}

/* 基础装置按钮规范：只切右下角 (4px 4px 14px 4px) */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2.75rem;
  padding: 0 var(--s-5);
  border: 0;
  border-radius: var(--r-key);
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 100ms ease-out, background-color 80ms ease, border-color 80ms ease, box-shadow 100ms ease;
}

.btn:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: none;
}

.btn:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

/* 主操作按钮：浅青底深字，深底上压得住 */
.btn-primary {
  background: var(--navy-key);
  color: var(--navy-key-ink);
  box-shadow: 0 4px 0 var(--line);
}

.btn-primary:hover {
  background: var(--btn-primary-hover);
}

.btn-primary:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: none;
}

.btn-primary:disabled {
  background: var(--line);
  color: var(--ink-soft);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* 次操作按钮：深色档案纸底 + 2px 边框 */
.btn-paper {
  background: var(--paper);
  color: var(--navy);
  border: 2px solid var(--navy);
  box-shadow: 0 4px 0 var(--line);
}

.btn-paper:hover {
  border-color: var(--blue);
  color: var(--ink);
}

.btn-paper:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: none;
}

/* 稀有强调按钮：黄底深字 */
.btn-mark {
  background: var(--mark);
  color: var(--navy-key-ink);
  box-shadow: 0 4px 0 var(--line);
}

.btn-mark:hover {
  background: var(--btn-mark-hover);
}

/* 尺寸变体 */
.btn-lg {
  height: 3.25rem;
  padding: 0 1.375rem;
  font-size: 1rem;
}

.btn-sm {
  height: 2rem;
  padding: 0 var(--s-3);
  font-size: 0.75rem;
}

/* 文字动作链接 */
.link-action {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1rem;
  color: var(--navy);
  text-decoration: underline;
  text-underline-offset: 4px;
  display: inline-flex;
  align-items: center;
  transition: color 80ms ease;
}

.link-action:hover {
  color: var(--ink);
}

/* Detail viewer: keep modes, camera/actions and animation rows aligned. */
#stage-controls {
  width: min(100%, 24rem);
  gap: var(--s-3) var(--s-2);
  margin-top: var(--s-4);
  align-items: flex-start;
}

#stage-controls .btn {
  flex: 1 1 0;
  min-width: 0;
  height: 2.75rem;
  padding-inline: var(--s-2);
  font-size: 0.875rem;
  line-height: 1.2;
}

#stage-controls > .btn-mode {
  flex-basis: calc((100% - var(--s-4)) / 3);
}

#stage-controls .btn-mode.is-active,
#stage-controls #btn-rotate[aria-pressed="true"] {
  background: var(--navy-key);
  color: var(--navy-key-ink);
  border-color: var(--navy-key);
}

#stage-controls :is(#stage-camera-controls, #stage-base-actions) {
  gap: var(--s-2) !important;
  border-left: 0 !important;
  padding-left: 0 !important;
  min-width: 0;
}

#stage-controls :is(#stage-camera-controls, #stage-base-actions) .btn {
  padding-inline: var(--s-1);
  white-space: nowrap;
}

#stage-camera-controls { flex: 3 1 13rem; flex-wrap: nowrap !important; }
#stage-base-actions { flex: 2 1 8rem; }
#stage-feedback { flex-basis: 100%; text-align: center; }
#stage-feedback:empty { display: none; }

#stage-actions {
  gap: var(--s-2) !important;
  padding-top: var(--s-3) !important;
}

/* Keep the visibility state set by the existing 2D/3D controls. */
#stage-actions:not([style*="display: none"]):not([style*="display:none"]) {
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

#stage-actions > span { grid-column: 1 / -1; text-align: left; }

#stage-controls .btn:disabled {
  background: var(--line);
  border-color: var(--line);
  color: var(--ink-soft);
  box-shadow: none;
  transform: none;
  cursor: not-allowed;
}

@media (pointer: coarse) {
  #stage-controls .btn { height: var(--s-12); }
}

@media (max-width: 24rem) {
  .detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="] {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    color: var(--ink-soft);
  }

  .detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="]:is(:hover, :focus-visible) {
    background: var(--line);
    color: var(--ink);
  }
}

/* ponytail: reuse the native return link; draw the close mark as decoration. */
body:has(.detail) .detail .fields {
  position: relative;
  padding-block-start: 4rem;
}

.detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="] {
  position: absolute;
  inset-block-start: 1rem;
  inset-inline-end: 1rem;
  z-index: 1;
  width: 2.75rem;
  min-width: 44px;
  height: 2.75rem;
  min-height: 44px;
  padding: 0;
  font-size: 0;
}

.detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="]::before,
.detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="]::after {
  content: "";
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  width: 1rem;
  height: 2px;
  background: currentColor;
}

.detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="]::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.detail .fields-bottom .detail-actions > a[href^="pokedex.html?region="]::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
```

---

### 2.4 `css/pokeball.css` (开闭精灵球组件动画)

- **文件路径**: `css/pokeball.css`  
- **代码行数**: 240 行  
- **文件大小**: 4,779 字节  

```css
/* ==========================================================================
   151 FILE — Pokeball Component & Motion (Night Archive)
   ========================================================================== */

/* 精灵球：上红下白、黑中线、中心钮。全站正圆唯独给球 */
.ball {
  --size: 32px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  display: block;
  border: 0;
  padding: 0;
  background: #F7FBFE;
  box-shadow: inset 0 0 0 3px #1a1a1a;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 100ms ease-out, filter 150ms ease;
}

.ball:active {
  transform: scale(0.97);
}

/* 上半球红 */
.ball .t {
  position: absolute;
  inset: 0 0 50% 0;
  background: var(--ball);
  border-radius: 999px 999px 0 0;
}

/* 黑腰带中线 */
.ball .band {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 2px);
  height: 4px;
  background: #1a1a1a;
}

/* 中心开合按钮 */
.ball .btn {
  position: absolute;
  width: 28%;
  height: 28%;
  border-radius: 50%;
  left: 36%;
  top: 36%;
  background: #f4f4f4;
  box-shadow: 0 0 0 3px #1a1a1a;
}

/* 大号球（首页入口 / 220–280px） */
.ball.lg {
  --size: clamp(13rem, 30vw, 17.5rem);
  box-shadow: inset 0 0 0 8px #1a1a1a, 0 16px 32px rgba(0, 0, 0, 0.4);
}

.ball.lg .band {
  top: calc(50% - 6px);
  height: 12px;
}

.ball.lg .btn {
  box-shadow: 0 0 0 6px #1a1a1a;
}

/* 首页图片精灵球按钮 */
.hero-ball-btn {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 100ms ease-out;
}

.hero-ball-btn:active {
  transform: scale(0.97);
}

.hero-ball-img {
  width: clamp(12rem, 24vw, 16.5rem);
  height: clamp(12rem, 24vw, 16.5rem);
  object-fit: contain;
  display: block;
  border-radius: 50%;
  filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.5));
  transition: transform 100ms ease-out;
}

/* 首页进站摇球：±8deg，最多 3 下，800ms 内平滑停住 */
@keyframes wobble {
  0%, 100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-8deg);
  }
  75% {
    transform: rotate(8deg);
  }
}

.ball.is-wobble,
.hero-ball-btn.is-wobble {
  animation: wobble 0.26s ease-in-out 3;
}

@media (prefers-reduced-motion: reduce) {
  .ball.is-wobble,
  .hero-ball-btn.is-wobble {
    animation: none;
  }
}

/* 腰带空槽虚线球 */
.ball-slot-empty {
  width: var(--size, 7.5rem);
  height: var(--size, 7.5rem);
  border-radius: 50%;
  border: 2px dashed var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-soft);
  background: transparent;
}

/* ==========================================================================
   Detail Page Stage Ball (开合球动画)
   ========================================================================== */
.stage-ball {
  width: min(22rem, 85vw);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border: 6px solid #1a1a1a;
  background: #102338;
  cursor: pointer;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.stage-ball img {
  width: 76%;
  height: 76%;
  object-fit: contain;
  position: absolute;
  left: 12%;
  top: 12%;
  z-index: 1;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
  transition: transform 0.25s ease, filter 0.25s ease;
}

.stage-ball:hover img {
  transform: scale(1.05);
}

.stage-ball .lid-t,
.stage-ball .lid-b {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  transition: transform 500ms cubic-bezier(0.22, 0.7, 0.3, 1);
}

.stage-ball .lid-t {
  top: 0;
  height: 50%;
  background: var(--ball);
}

.stage-ball .lid-b {
  bottom: 0;
  height: 50%;
  background: #F7FBFE;
}

.stage-ball .lid-band {
  position: absolute;
  top: calc(50% - 7px);
  left: 0;
  right: 0;
  height: 14px;
  background: #1a1a1a;
  z-index: 3;
  transition: opacity 300ms ease;
}

.stage-ball .lid-btn {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f2f2f2;
  border: 6px solid #1a1a1a;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.2);
  z-index: 4;
  transition: opacity 300ms ease;
}

.stage-ball.is-open .lid-t {
  transform: translateY(-100%);
  pointer-events: none;
}

.stage-ball.is-open .lid-b {
  transform: translateY(100%);
  pointer-events: none;
}

.stage-ball.is-open .lid-band,
.stage-ball.is-open .lid-btn {
  opacity: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .stage-ball .lid-t,
  .stage-ball .lid-b {
    transition: opacity 200ms ease;
    transform: none !important;
  }
}

```

---

### 2.5 `css/pages.css` (各页面专用布局与响应式样式)

- **文件路径**: `css/pages.css`  
- **代码行数**: 4,206 行  
- **文件大小**: 85,847 字节  

```css
/* ==========================================================================
   151 FILE — Page Specific Layouts (Night Archive)
   ========================================================================== */

/* ==========================================================================
   Home Page (index.html)
   ========================================================================== */

/* Hero: 左文右球非对称结构 (Left-aligned text / Right Pokeball CTA) */
.hero {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--s-8);
  align-items: center;
  padding-top: var(--s-4);
  width: 100%;
}

.home-page {
  padding-bottom: var(--s-6);
}

body:has(> .site-bar + .wrap > .site-footer),
body:has(> .site-bar + .wrap + .site-footer) {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

body:has(> .site-bar + .wrap > .site-footer) > .wrap:has(> .site-footer) {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding-bottom: 0;
}

body:has(> .site-bar + .wrap + .site-footer) > .wrap {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding-bottom: var(--s-10);
}

.home-footer,
.site-footer {
  margin-top: auto;
  padding: var(--s-8) max(var(--s-8), env(safe-area-inset-right)) var(--s-8) max(var(--s-12), env(safe-area-inset-left));
  border-top: 1px solid var(--line);
  background: var(--sky-deep);
  color: var(--ink-soft);
  font: 400 0.875rem/1.5 var(--font-ui);
}

@media (max-width: 48rem) {
  .home-footer,
  .site-footer {
    padding-left: max(var(--s-4), env(safe-area-inset-left));
    padding-right: max(var(--s-4), env(safe-area-inset-right));
    padding-top: var(--s-6);
    padding-bottom: var(--s-6);
  }
}

.site-footer-range {
  display: inline-flex;
  align-items: center;
  margin: 0 0 var(--s-3);
}
.site-footer-range > span {
  padding-right: var(--s-2);
  color: var(--ink);
  font: 700 0.8125rem/1.5 var(--font-num);
}

.site-footer-top {
  display: block;
}

.site-footer-brand {
  color: var(--ink);
  font: 700 1rem/1.25 var(--font-num);
  letter-spacing: 0.04em;
}
.site-footer-intro {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--s-3);
  min-width: 0;
}

.site-footer p {
  margin: 0;
  max-width: 44ch;
  font-size: 0.875rem;
}
.site-footer .site-footer-lead {
  color: var(--ink-soft);
  font-size: 0.875rem;
}

.site-footer-seal {
  display: none;
}

.site-footer-bottom {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
  gap: var(--s-2) var(--s-6);
  margin-top: var(--s-3);
}

.site-footer-bottom a {
  display: inline-flex; align-items: center; min-height: 2.75rem; min-width: 2.75rem;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}
.site-footer-bottom p {
  max-width: 58ch;
  font-size: 0.8125rem;
  text-align: right;
}
@media (max-width: 48rem) {
  .site-footer { padding: var(--s-5) 0; }
  .site-footer-intro { gap: var(--s-2); }
  .site-footer-bottom p { text-align: left; }
}

.hero > div {
  max-width: 48rem;
}

.hero .hero-ball-btn {
  justify-self: end;
}

.hero .meta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-num);
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: 0.04em;
  margin-bottom: var(--s-2);
}

.hero h1 {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: clamp(2.25rem, 5.5vw, 4.25rem);
  line-height: 1.08;
  letter-spacing: -0.022em;
  margin: 0 0 var(--s-3);
  color: var(--ink);
}

.hero-pokemon-logo {
  max-width: clamp(220px, 32vw, 360px);
  width: 100%;
  height: auto;
  display: block;
  margin: var(--s-1) 0 var(--s-3);
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4));
}

.hero p {
  color: var(--ink-soft);
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 42rem;
  margin: 0 0 var(--s-5);
}

.hero .actions {
  display: flex;
  gap: var(--s-5);
  align-items: center;
  flex-wrap: wrap;
}

/* ==========================================================================
   Specimens Strip / 首页标本档案条 (5 只代表：御三家 + 皮卡丘 + 拉普拉斯)
   ========================================================================== */
.specimens-section {
  margin-top: var(--s-6);
  margin-bottom: var(--s-10);
  width: 100%;
}

.specimens-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--s-4);
  border-bottom: 1px solid var(--line);
  padding-bottom: var(--s-2);
}

.specimens-header .title {
  font-family: var(--font-num);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-transform: uppercase;
}

.specimens-header .hint {
  font-size: 0.875rem;
  color: var(--navy);
}

/* 标本栅格：通栏撑满视口，皮卡丘首发 1.35fr 加宽，拉普拉斯 1.15fr，初阶御三家各 1fr */
.specimens {
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr 1fr 1.15fr;
  gap: var(--s-4);
  width: 100%;
}

/* 单个标本砖 (File Tile) */
.file-tile {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  box-shadow: 0 10px 0 var(--line);
  padding: var(--s-3) var(--s-4);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  perspective: 700px;
  transform-style: preserve-3d;
  transition: transform 120ms cubic-bezier(0.2, 0, 0.2, 1), border-color 80ms ease, box-shadow 100ms ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.file-tile:hover {
  border-color: var(--blue);
  box-shadow: 0 10px 0 var(--navy);
}

.file-tile:active {
  transform: scale(0.98) translateY(2px);
  box-shadow: 0 4px 0 var(--line);
}

/* 标本卡顶栏：黄底编号 + 属性色票 */
.file-tile-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--s-2);
}

.file-tile .id-badge {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 1;
  background: var(--mark);
  color: var(--navy-key-ink);
  padding: 0.2rem 0.4rem;
  border-radius: 2px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.02em;
}

.file-tile .type-badges {
  display: flex;
  gap: 0.25rem;
}

.type-pill {
  font-family: var(--font-num);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.2rem 0.35rem;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* 标本图盘 (3D 交互舞台) */
.file-tile .img-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11rem;
  margin: var(--s-1) 0;
  position: relative;
  perspective: 600px;
  transform-style: preserve-3d;
  cursor: pointer;
}

/* 3D 地台光环与阴影（Pokémon GO 微型地台） */
.file-tile .stage-pedestal {
  position: absolute;
  bottom: 8px;
  width: 75%;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(126, 182, 217, 0.25) 0%, rgba(126, 182, 217, 0.05) 55%, transparent 75%);
  border: 1px solid rgba(126, 182, 217, 0.25);
  transform: rotateX(65deg);
  box-shadow: 0 0 16px rgba(61, 125, 202, 0.2);
  transition: transform 150ms ease, opacity 150ms ease;
  pointer-events: none;
}

.file-tile .stage-shadow {
  position: absolute;
  bottom: 12px;
  width: 55%;
  height: 18px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  filter: blur(5px);
  transform: rotateX(65deg);
  transition: transform 120ms ease, opacity 150ms ease, width 150ms ease;
  pointer-events: none;
}

/* 标本 3D 立绘 */
.file-tile img,
.file-tile .specimen-img {
  width: 100%;
  max-height: 9.8rem;
  object-fit: contain;
  filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.45));
  position: relative;
  z-index: 2;
  transform: translateZ(24px);
  transition: transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 150ms ease;
  pointer-events: auto;
}

.file-tile:hover img,
.file-tile:hover .specimen-img {
  filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.6));
}

/* 触碰声波波纹 */
.file-tile .cry-ring {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid var(--mark);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.2);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
}

.file-tile .cry-ring.is-animating {
  animation: ring-pulse 0.55s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}

/* 触碰动作动画集合 (Tap Reactions) */
.file-tile .specimen-img.anim-attack {
  animation: specimen-attack 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.2) forwards;
}
@keyframes specimen-attack {
  0% { transform: translateZ(24px) scale(1) translateY(0); }
  30% { transform: translateZ(50px) scale(1.12) translateY(-20px) rotate(-5deg); }
  60% { transform: translateZ(60px) scale(1.08) translateY(-10px) rotate(4deg); }
  100% { transform: translateZ(24px) scale(1) translateY(0) rotate(0deg); }
}

.file-tile .specimen-img.anim-cheer {
  animation: specimen-cheer 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
@keyframes specimen-cheer {
  0% { transform: translateZ(24px) scale(1) translateY(0) rotateY(0deg); }
  50% { transform: translateZ(45px) scale(1.1) translateY(-26px) rotateY(180deg); }
  100% { transform: translateZ(24px) scale(1) translateY(0) rotateY(360deg); }
}

.file-tile .specimen-img.anim-wobble {
  animation: specimen-wobble 0.45s ease-in-out forwards;
}
@keyframes specimen-wobble {
  0%, 100% { transform: translateZ(24px) translateX(0); }
  25% { transform: translateZ(35px) translateX(-10px) rotate(-6deg); }
  50% { transform: translateZ(40px) translateX(10px) rotate(6deg); }
  75% { transform: translateZ(30px) translateX(-5px) rotate(-3deg); }
}

@keyframes ring-pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.3);
    opacity: 0.9;
    border-color: var(--mark);
  }
  100% {
    transform: translate(-50%, -50%) scale(2.6);
    opacity: 0;
    border-color: rgba(255, 203, 5, 0);
  }
}

/* 标本底部名称与分类 */
.file-tile-info {
  margin-top: auto;
  border-top: 1px solid color-mix(in srgb, var(--line) 50%, transparent);
  padding-top: var(--s-2);
}

.file-tile-name {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.0625rem;
  color: var(--ink);
  margin-bottom: 0.125rem;
}

.file-tile-meta {
  font-family: var(--font-num);
  font-size: 0.75rem;
  color: var(--ink-soft);
}

/* 响应式断点 */
@media (max-width: 68rem) {
  .specimens {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 48rem) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: var(--s-8);
  }
  .hero .hero-ball-btn {
    order: -1;
    margin: 0 auto;
    justify-self: center;
  }
  .specimens {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: var(--s-3);
    padding-bottom: 1.25rem;
    -webkit-overflow-scrolling: touch;
  }
  .file-tile {
    min-width: 15rem;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
}

/* ==========================================================================
   About Page (about.html / File 档案说明页)
   ========================================================================== */
.wrap-doc {
  max-width: 46rem;
}

.page-title {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 1.12;
  letter-spacing: -0.018em;
  margin: var(--s-6) 0 var(--s-3);
  color: var(--ink);
}

.page-desc {
  font-size: 1.0625rem;
  line-height: 1.5;
  color: var(--ink-soft);
  margin-bottom: var(--s-6);
}

.file-block {
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: 0 10px 0 var(--line);
  border-radius: var(--r-file);
  padding: var(--s-5) var(--s-6);
  margin: var(--s-6) 0;
  transition: border-color 80ms ease, box-shadow 100ms ease;
}

.file-block:hover {
  border-color: var(--blue);
}

.file-block h2 {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.2;
  color: var(--ink);
  margin: 0 0 var(--s-3);
  letter-spacing: -0.01em;
}

.file-block ul {
  margin: 0;
  padding-left: 1.25rem;
}

.file-block li {
  color: var(--ink);
  line-height: 1.6;
  margin-bottom: 0.35rem;
}

.file-block .soft {
  color: var(--ink-soft);
  font-family: var(--font-num);
  font-size: 0.9em;
}

.file-block code {
  font-family: var(--font-num);
  font-size: 0.875rem;
  background: color-mix(in srgb, var(--sky) 70%, transparent);
  color: var(--navy);
  padding: 0.15rem 0.35rem;
  border-radius: 2px;
  border: 1px solid var(--line);
}

/* 快捷键表格 */
.keys-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  margin-top: var(--s-2);
}

.keys-table td {
  padding: 0.625rem 0.5rem;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
}

.keys-table tr:last-child td {
  border-bottom: none;
}

.keys-table td:first-child {
  width: 35%;
  white-space: nowrap;
}

.keys-table kbd {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 1;
  background: var(--mark);
  color: var(--navy-key-ink);
  padding: 0.2rem 0.45rem;
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  margin-right: 0.25rem;
}

/* ==========================================================================
   Dex Page (pokedex.html — Spine + Ledger + Stage + Film)
   ========================================================================== */
/* 名录页底部只留一条窄边，胶片停在首屏里、并离窗口底边一点 */
.wrap.dex-page {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}

/* 宽屏：Dex 是单屏工作台；名录自己滚动，页面和台座不滚动。 */
@media (min-width: 45.01rem) {
  body:has(.dex-page) .wrap.dex-page {
    /* 视口高 − 顶栏(3.5rem + 2px border) */
    height: calc(100dvh - 3.5rem - 2px - env(safe-area-inset-top, 0px));
    min-height: 0;
    flex: none;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 0;
  }
  body:has(.dex-page) > .site-footer {
    display: none;
  }
  body:has(.dex-page) .dex,
  body:has(.dex-page) .dex-grid {
    flex: 1 1 auto;
    min-height: 0;
    height: auto;
  }
  body:has(.dex-page) .dex-grid {
    overflow: auto;
  }
  body:has(.dex-page) .stage {
    overflow: visible;
    transform: translateY(-2.5rem);
  }
}

.tools {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.65rem;
}

.tools-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.65rem;
}

/* 18 个属性固定一行。宽屏排得下；窄了只在这一行横滑，页面不再被挤高 */
.type-row {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.35rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
  padding-block: 2px;
}

.type-row .chip {
  flex: 0 0 auto;
}

.tools input {
  height: 2.5rem;
  flex: 1 1 12rem;
  min-width: min(100%, 12rem);
  border: 0;
  border-bottom: 2px solid var(--navy);
  background: var(--paper);
  color: var(--ink);
  padding: 0 0.75rem;
  border-radius: 4px;
  font: 400 1rem/1 var(--font-ui);
}

.tools-bar #draw {
  height: 2.5rem;
  padding-inline: 0.75rem;
}

.tools input:focus {
  outline: 3px solid var(--mark);
  outline-offset: 3px;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1.625rem;
  padding: 0 0.6rem;
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: 4px;
  font: 500 0.75rem var(--font-num);
  line-height: 1;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: var(--ink);
  text-decoration: none;
  vertical-align: middle;
  transition: border-color 100ms ease, background 100ms ease, color 100ms ease;
}

.chip:hover {
  border-color: var(--navy);
}

.chip[data-on] {
  border: 2px solid var(--navy);
  background: var(--navy);
  color: var(--sky);
}

.region {
  font: 700 0.75rem/1 var(--font-num);
  color: var(--ink-soft);
  text-decoration: none;
}
.region:hover {
  color: var(--navy);
}

.dex {
  display: grid;
  grid-template-columns: 7.5rem minmax(16rem, 22rem) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) auto;
  column-gap: 0.85rem;
  row-gap: 0.35rem;
  min-height: 0;
}

.spines {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  grid-row: 1 / 3;
  min-height: 0;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
}

.spines::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.spines::-webkit-scrollbar-track {
  background: transparent;
}

.spines::-webkit-scrollbar-thumb {
  background: var(--line);
  border-radius: 2px;
}

.spines::-webkit-scrollbar-thumb:hover {
  background: var(--navy);
}

.spines::-webkit-scrollbar-button {
  display: none;
}

.spines button {
  border: 0;
  background: var(--sky-deep);
  color: var(--ink);
  text-align: left;
  padding: 0.7rem 0.5rem;
  font: 700 0.75rem/1 var(--font-num);
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: border-color 100ms ease, background 100ms ease, color 100ms ease;
}

.spines button:hover:not(:disabled) {
  background: var(--paper);
}

.spines button[data-on] {
  background: var(--mark);
  color: var(--sky);
  border-left-color: #D4A700;
}

.spines button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.ledger {
  list-style: none;
  margin: 0;
  padding: 0;
  min-height: 0;
  height: 100%;
  overflow: auto;
  border-top: 2px solid var(--navy);
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
}

.ledger li {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.55rem;
  align-items: center;
  min-height: 2.25rem;
  padding: 0.15rem 0.55rem 0.15rem 0.4rem;
  border-bottom: 1px solid var(--line);
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: background 100ms ease, border-color 100ms ease;
}

.ledger li:hover:not(.is-on) {
  background: color-mix(in srgb, var(--navy) 14%, transparent);
}

.ledger li.is-on {
  background: var(--paper);
  border-left-color: var(--mark);
}

.ledger li.is-on .ledger-name {
  font-weight: 700;
}

.ledger li.seen:not(.is-on) .ledger-name {
  color: var(--ink-soft);
}

.ledger li.empty {
  display: block;
  border-left-color: transparent;
  cursor: default;
}

/* 未选中只留等宽编号，名字才是扫读目标；选中行才点上黄标 */
.ledger .id {
  min-width: 2.7rem;
  text-align: right;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.1rem 0.2rem;
  border-radius: 2px;
  background: transparent;
  color: var(--ink-soft);
  font-variant-numeric: tabular-nums;
}

.ledger li.is-on .id {
  background: var(--mark);
  color: var(--sky);
}

.ledger-name {
  font: 500 0.9375rem/1.2 var(--font-ui);
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ledger-types {
  font: 500 0.75rem/1 var(--font-num);
  color: var(--ink-soft);
  white-space: nowrap;
}

.id {
  font: 700 0.8rem/1 var(--font-num);
  background: var(--mark);
  color: var(--sky);
  padding: 0.12rem 0.3rem;
  border-radius: 2px;
}

.stage {
  display: grid;
  justify-items: center;
  align-content: start;
  text-align: center;
  row-gap: 0.2rem;
  padding: 0.5rem 1rem;
  position: relative;
  min-height: 0;
  overflow: auto;
}

.stage > p:not(.name) {
  margin: 0;
}

.stage .stage-img-box {
  position: relative;
  width: min(16rem, 80%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.stage img {
  width: 100%;
  max-height: min(14rem, 30vh);
  object-fit: contain;
  filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.5));
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.stage .stage-img-box:hover img {
  transform: scale(1.05);
}

.stage .name {
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0.2rem 0;
}

.type {
  display: inline-block;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font: 700 0.75rem var(--font-num);
  margin: 0 0.15rem;
  background: #3A6A88;
  color: #fff;
  text-transform: uppercase;
}

.actions {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stage .actions {
  margin-top: 0.4rem;
}

.film {
  grid-column: 2 / 4;
  display: flex;
  gap: 0.35rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.15rem 0 0;
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
}

.ledger::-webkit-scrollbar,
.stage::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.ledger::-webkit-scrollbar-track,
.stage::-webkit-scrollbar-track {
  background: transparent;
}

.ledger::-webkit-scrollbar-thumb,
.stage::-webkit-scrollbar-thumb {
  background: var(--line);
  border-radius: 2px;
}

.ledger::-webkit-scrollbar-thumb:hover,
.stage::-webkit-scrollbar-thumb:hover {
  background: var(--navy);
}

.ledger::-webkit-scrollbar-button,
.stage::-webkit-scrollbar-button {
  display: none;
}

.film::-webkit-scrollbar {
  height: 0.5rem;
}

.film::-webkit-scrollbar-track {
  background: transparent;
}

.film::-webkit-scrollbar-thumb {
  background: var(--line);
  border-radius: 2px;
}

.film::-webkit-scrollbar-thumb:hover {
  background: var(--navy);
}

.film::-webkit-scrollbar-button {
  display: none;
}

.film button {
  flex: 0 0 4.2rem;
  scroll-snap-align: center;
  border: 2px solid transparent;
  background: var(--paper);
  padding: 0.3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  transition: border-color 0.1s ease;
}

.film button:hover {
  border-color: var(--navy);
}

.film button[data-on] {
  border-color: var(--blue);
}

.film img {
  width: 100%;
  height: 3rem;
  object-fit: contain;
  display: block;
}

.film .id {
  font-size: 0.65rem;
  padding: 1px 3px;
}

.empty {
  color: var(--ink-soft);
  padding: 1rem;
}

@media (min-width: 45.01rem) and (max-height: 48rem) {
  .stage {
    padding: 0.15rem 0.5rem 0;
  }
  .stage .stage-img-box {
    width: min(13rem, 70%);
  }
  .stage img {
    max-height: min(10rem, 20vh);
  }
  .stage > p {
    margin-block: 0;
  }
  .stage .name {
    margin-block: 0.15rem;
  }
  .stage .stage-meta > p {
    margin-block: 0;
  }
  .stage .actions {
    margin-top: 0.25rem;
  }
}

@media (max-width: 45rem) {
  .dex {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
    min-height: 0;
  }
  .spines {
    grid-row: auto;
    flex-direction: row;
    overflow-x: auto;
  }
  .ledger {
    height: auto;
    max-height: 46dvh;
  }
  .stage {
    overflow: visible;
  }
  .stage img {
    max-height: 14rem;
  }
  .film {
    position: sticky;
    bottom: 0;
    background: var(--sky);
    grid-column: 1;
    margin-top: 0;
    padding: 0.35rem 0;
  }
}

/* ==========================================================================
   Regions Page (regions.html — Atlas of 10 Official Regions)
   ========================================================================== */
.regions-lead {
  color: var(--ink-soft);
  max-width: 44rem;
  margin: 0 0 var(--s-6);
  font-size: 1.0625rem;
  line-height: 1.5;
}

.atlas {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}

@media (max-width: 68rem) {
  .atlas {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 36rem) {
  .atlas {
    grid-template-columns: 1fr;
  }
}

.region-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--paper);
  box-shadow: 0 10px 0 var(--line);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  padding: 0.75rem 0.85rem;
  text-decoration: none;
  color: inherit;
  transition: transform 120ms ease, border-color 100ms ease, box-shadow 120ms ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.region-card:hover {
  border-color: var(--mark);
  box-shadow: 0 10px 0 var(--navy);
  transform: translateY(-2px);
}

.region-card:active {
  transform: scale(0.98) translateY(2px);
  box-shadow: 0 4px 0 var(--line);
}

.region-card .map-thumb {
  width: 100%;
  height: 6.5rem;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--sky-deep);
  position: relative;
}

.region-card .map-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.region-card:hover .map-thumb img {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.region-card .region-info {
  display: flex;
  flex-direction: column;
}

.region-card .name {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--ink);
  margin: 0;
}

.region-card .ids {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  color: var(--ink-soft);
  margin: 0.25rem 0 0;
  letter-spacing: 0.02em;
}

.region-card .n {
  font-family: var(--font-num);
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--navy);
  margin: 0.35rem 0 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ==========================================================================
   Types Page Matrix & Chips
   ========================================================================== */
.wall {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.wall .chip {
  height: 1.75rem;
  padding: 0 0.65rem;
  border: 0;
  border-radius: 4px;
  font-family: var(--font-num);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.75rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--sky);
  transition: transform 100ms ease, filter 100ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.wall .chip:hover {
  transform: translateY(-1px);
  filter: brightness(1.1);
}

.wall .chip.w {
  color: #ffffff;
}

.board {
  overflow: auto;
  max-height: 70dvh;
  background: var(--paper);
  box-shadow: 0 0.625rem 0 var(--line);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  padding: 0.75rem;
  max-width: 100%;
}

.types-table {
  border-collapse: separate;
  border-spacing: 0;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1;
  margin: 0 auto;
}

.types-table th,
.types-table td {
  width: 2.75rem;
  height: 2.75rem;
  min-width: 2.75rem;
  text-align: center;
  border: 1px solid var(--line);
  padding: 0;
  box-sizing: border-box;
}

.types-table th {
  color: var(--ink-soft);
  font-weight: 500;
  background: var(--sky-deep);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.75rem;
}

.types-table td a,
.types-table th a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.types-table td.x4 {
  background: #EE1515;
  color: #ffffff;
}

.types-table td.x2 {
  background: var(--navy);
  color: var(--navy-key-ink);
}

.types-table td.xh {
  background: #1E3A55;
  color: var(--ink-soft);
}

.types-table td.xq {
  background: #162C42;
  color: #7A9FB8;
}

.types-table td.x0 {
  background: #071422;
  color: #688A9F;
}

.types-table tr.hi th,
.types-table tr.hi td,
.types-table th.hi,
.types-table td.hi {
  outline: 2px solid var(--mark);
  outline-offset: -2px;
  position: relative;
  z-index: 1;
}

.types-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1rem;
  font-family: var(--font-num);
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--ink-soft);
}

.types-legend span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.types-legend .dot {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 2px;
  display: inline-block;
}

/* ==========================================================================
   Lineup Page Styles
   ========================================================================== */
.lineup-belt {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.mini {
  width: 4.5rem;
  height: 4.5rem;
  background: var(--paper);
  box-shadow: 0 4px 0 var(--line);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0.35rem;
  cursor: pointer;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 100ms ease, border-color 100ms ease, box-shadow 100ms ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.mini:hover {
  border-color: var(--mark);
  transform: translateY(-2px);
  box-shadow: 0 6px 0 var(--navy);
}

.mini:active {
  transform: scale(0.96) translateY(2px);
  box-shadow: 0 2px 0 var(--line);
}

.mini[data-on] {
  outline: 2px solid var(--mark);
  border-color: var(--mark);
}

.mini img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.lineup-subheading {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.2;
  margin: 1.5rem 0 0.5rem;
  color: var(--ink);
}

.lineup-note {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--ink-soft);
  margin: -0.15rem 0 0.75rem;
  max-width: 48rem;
}

.lineup-pair {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: start;
  margin-top: 0.75rem;
}

.lineup-pane {
  background: var(--paper);
  box-shadow: 0 0.625rem 0 var(--line);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
}

.lineup-pane img {
  width: min(12rem, 100%);
  height: 12rem;
  object-fit: contain;
  display: block;
  margin: 0.5rem auto;
  filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.45));
}

.lineup-pane input {
  width: 100%;
  height: 2.75rem;
  padding: 0 0.5rem;
  margin: 0.25rem 0 0.75rem;
  border: 0;
  border-bottom: 2px solid var(--navy);
  background: var(--sky-deep);
  color: var(--ink);
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 1rem;
  border-radius: 4px 4px 0 0;
  transition: border-color 100ms ease, background 100ms ease;
}

.lineup-pane input:focus {
  border-bottom-color: var(--mark);
  background: #112840;
}

.lineup-pane input::placeholder {
  color: var(--ink-soft);
  font-weight: 400;
}

.lineup-pane .types-tag {
  text-align: center;
  margin: 0.25rem 0 0.75rem;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.lineup-stat {
  display: grid;
  grid-template-columns: 4.8rem 1fr 2.5rem;
  gap: 0.5rem;
  align-items: center;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.75rem;
  margin: 0.35rem 0;
}

.lineup-stat .stat-name {
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.lineup-stat .bar {
  height: 8px;
  background: var(--sky);
  border-radius: 4px;
  overflow: hidden;
}

.lineup-stat .bar > span {
  display: block;
  height: 100%;
  background: var(--line);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.lineup-stat .bar > span.stat-lead {
  background: #7EB6D9;
}

.lineup-stat .stat-val {
  text-align: right;
  color: var(--ink);
}

.lineup-stat .stat-val.faster {
  color: var(--mark);
}

.lineup-mid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 4rem;
}

.lineup-empty {
  color: var(--ink-soft);
  font-size: 0.9375rem;
}

.lineup-dupes {
  color: var(--navy);
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  margin: 0.4rem 0 0;
}

@media (max-width: 48rem) {
  .lineup-pair {
    grid-template-columns: 1fr;
  }
  .lineup-mid {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 0;
  }
}

/* ==========================================================================
   Dex Multi-View Styles (Ledger & Stage vs Visual Cards Grid)
   ========================================================================== */
.view-toggle {
  display: inline-flex;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2px;
  gap: 2px;
  align-items: center;
}

.view-btn {
  height: 2.2rem;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 3px;
  background: transparent;
  color: var(--ink-soft);
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: background-color 100ms ease, color 100ms ease;
  user-select: none;
}

.view-btn:hover {
  color: var(--ink);
}

.view-btn.is-active {
  background: var(--navy);
  color: var(--sky);
}

.region-select {
  height: 2.5rem;
  padding: 0 0.75rem;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: border-color 100ms ease;
}

.region-select:focus {
  border-color: var(--mark);
}

.dex-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  gap: 0.85rem;
  padding-bottom: 3rem;
  min-height: 50vh;
}

.dex-card {
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: 0 4px 0 var(--line);
  border-radius: var(--r-file);
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;
  transition: transform 120ms ease, border-color 100ms ease, box-shadow 120ms ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* Grid 一次渲染 1025 张：离屏卡片跳过布局/绘制（实测 layout+style 115ms→36ms）。
     12.68rem = 卡片实高 14.3rem 扣掉 padding+border，占位高度与真实高度基本一致 */
  content-visibility: auto;
  contain-intrinsic-block-size: auto 12.68rem;
}

.dex-card:hover {
  transform: translateY(-3px);
  border-color: var(--mark);
  box-shadow: 0 8px 0 var(--navy);
}

.dex-card:active {
  transform: scale(0.97) translateY(2px);
  box-shadow: 0 2px 0 var(--line);
}

.dex-card.seen .dex-card-id {
  opacity: 0.5;
}

.dex-card.on-belt {
  border-color: var(--navy);
}

.dex-card .dex-card-thumb {
  width: 96px;
  height: 96px;
  margin: 0.25rem 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dex-card .dex-card-thumb img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.35));
  transition: transform 180ms ease;
}

.dex-card:hover .dex-card-thumb img {
  transform: scale(1.12);
}

.dex-card .dex-card-id {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.75rem;
  background: var(--mark);
  color: var(--sky);
  padding: 0.1rem 0.35rem;
  border-radius: 2px;
  margin-bottom: 0.3rem;
  letter-spacing: 0.02em;
}

.dex-card .dex-card-name {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 0.9375rem;
  color: var(--ink);
  margin: 0 0 0.35rem;
  line-height: 1.15;
  word-break: break-word;
}

.dex-card .dex-card-types {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;
}

.dex-card .dex-card-type {
  font-family: var(--font-num);
  font-weight: 600;
  font-size: 0.65rem;
  padding: 0.1rem 0.35rem;
  border-radius: 3px;
  line-height: 1.1;
  text-transform: capitalize;
}

.dex-card .card-belt-btn {
  margin-top: 0.5rem;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.6875rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink-soft);
  border-radius: 3px;
  cursor: pointer;
  transition: border-color 100ms ease, background 100ms ease, color 100ms ease;
}

.dex-card .card-belt-btn:hover {
  background: var(--navy-key);
  color: var(--navy-key-ink);
  border-color: var(--navy-key);
}

.dex-card .card-belt-btn.on {
  background: var(--navy);
  color: var(--sky);
  border-color: var(--navy);
}

.dex-card .belt-badge {
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--ball);
  box-shadow: 0 0 0 2px var(--paper);
}

.count-badge {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.75rem;
  color: var(--ink-soft);
  margin-left: auto;
  align-self: center;
}

/* ==========================================================================
   Detail (Pokemon) Page Styles
   ========================================================================== */
.wrap.wide {
  max-width: 84rem;
}

body:has(.detail) .wrap.wide {
  padding-bottom: var(--s-6);
}

.detail {
  display: grid;
  grid-template-columns: minmax(18rem, 24rem) 1fr;
  gap: 2.5rem;
  align-items: start;
  margin-top: 1rem;
}

.detail-art-stage {
  width: 100%;
  aspect-ratio: 1;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: 0 0.625rem 0 var(--line);
  border-radius: var(--r-file);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}

.detail-art-stage:active {
  transform: scale(0.98);
}

.detail-art-stage img {
  width: 100%;
  height: 100%;
  max-width: 320px;
  max-height: 320px;
  object-fit: contain;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.45));
}

/* 3D Interactive Stage & Controls */
.stage-viewer-wrap {
  position: relative;
  width: min(22rem, 85vw);
  height: min(22rem, 85vw);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.stage-viewer-wrap model-viewer {
  width: 100%;
  height: 100%;
  outline: none;
  --poster-color: transparent;
  cursor: grab;
  filter: saturate(1.8) contrast(1.05) drop-shadow(0 14px 28px rgba(0, 0, 0, 0.5));
}

.stage-viewer-wrap model-viewer:active {
  cursor: grabbing;
}

.stage-controls {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stage-controls .btn-mode.is-active {
  background: var(--blue, #246BCE);
  color: #fff;
  border-color: var(--blue, #246BCE);
}

.stage-burst-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
}

.heart-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--mark, #EE1515);
  box-shadow: 0 0 8px rgba(238, 21, 21, 0.7);
  animation: floatHeart 1.2s cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
  pointer-events: none;
}

@keyframes floatHeart {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.6) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.3) translateY(-40px) rotate(-10deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1) translateY(-80px) rotate(15deg);
  }
}

.fields {
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: 0 0.625rem 0 var(--line);
  border-radius: var(--r-file);
  padding: 1.5rem 1.75rem;
}

.fields-top {
  padding-bottom: 0.5rem;
}

.field-title {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--ink);
  margin: 0 0 0.4rem 0 !important;
  padding: 0 !important;
  border: 0 !important;
}

.fields-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  padding: 0.85rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.fields-col {
  min-width: 0;
}

.fields-bottom {
  padding-top: 0.85rem;
}

@media (max-width: 58rem) {
  .fields-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

.id-badge {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.875rem;
  background: var(--mark);
  color: var(--sky);
  padding: 0.15rem 0.45rem;
  border-radius: 3px;
  display: inline-block;
  letter-spacing: 0.02em;
}

.detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding-top: 0.5rem;
}

/* ==========================================================================
   Belt (Team) Page Styles
   ========================================================================== */
.slots {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.slot {
  background: var(--paper);
  box-shadow: 0 0.625rem 0 var(--line);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  min-height: 13rem;
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: transform 120ms ease, border-color 100ms ease;
  user-select: none;
}

.slot[draggable="true"] {
  cursor: grab;
}

.slot.drag {
  opacity: 0.4;
  border-style: dashed;
}

.slot.empty {
  border: 2px dashed var(--line);
  box-shadow: none;
  color: var(--ink-soft);
  justify-content: center;
  text-decoration: none;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.8125rem;
  cursor: pointer;
  transition: border-color 120ms ease, color 120ms ease;
}

.slot.empty:hover {
  border-color: var(--mark);
  color: var(--ink);
}

.slot img {
  width: 100%;
  max-height: 7.5rem;
  object-fit: contain;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.35));
}

.slot .id {
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.75rem;
  background: var(--mark);
  color: var(--sky);
  padding: 0.1rem 0.35rem;
  border-radius: 2px;
}

.slot .name {
  font-family: var(--font-ui);
  font-weight: 700;
  font-size: 0.9375rem;
  margin: 0.35rem 0;
  color: var(--ink);
}

.slot .rm {
  border: 0;
  background: transparent;
  color: var(--ink-soft);
  cursor: pointer;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.75rem;
  margin-top: auto;
  padding: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 100ms ease;
}

.slot .rm:hover {
  color: var(--ball);
}

.slot .rm::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ball);
  margin-right: 0.35rem;
}

@media (max-width: 54rem) {
  .detail {
    grid-template-columns: 1fr;
  }
  .slots {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 34rem) {
  .slots {
    grid-template-columns: repeat(2, 1fr);
  }
}






/* ---------- 详情页能力条（之前只有 .lineup-stat 有样式） ---------- */
.stat {
  display: grid;
  grid-template-columns: 4.5rem 1fr 2.5rem;
  align-items: center;
  gap: var(--s-3, 0.75rem);
  margin: 0.4rem 0;
  font: 700 0.8125rem var(--font-num);
  color: var(--ink);
}

/* 矮桌面视口：收紧留白，避免详情内容被挤出屏幕 */
@media (min-width: 54.01rem) and (max-height: 44rem) {
  body:has(.detail) .wrap.wide {
    padding-top: var(--s-2);
    padding-bottom: var(--s-1);
  }

  body:has(.detail) .detail {
    grid-template-columns: minmax(16rem, 18rem) minmax(0, 1fr);
    gap: var(--s-4);
    margin-top: 0;
  }

  .detail .fields {
    padding: var(--s-2) var(--s-4);
  }

  .detail .fields-top {
    padding-bottom: 0;
  }

  .detail .fields-grid {
    grid-template-columns: 1.15fr 1fr;
    gap: var(--s-4);
    padding: 0;
  }

  .detail .fields-bottom {
    padding-top: var(--s-1);
  }

  .detail .detail-actions {
    gap: var(--s-2);
    padding-top: 0;
  }

  .detail .detail-actions .btn {
    padding-inline: var(--s-3);
  }

  .detail .stat {
    margin: 0;
  }
}

.stat > span:last-child { text-align: right; }
.stat .bar {
  height: 8px;
  background: var(--sky);
  border-radius: 2px 0 0 0;
  overflow: hidden;
}
.stat .bar i {
  display: block;
  height: 100%;
}

/* ---------- 腰带槽：左右挪动按钮 ---------- */
.slot-tools {
  display: flex;
  gap: 0.35rem;
  align-items: center;
  justify-content: center;
}
.slot .mv {
  min-width: 2rem;
  min-height: 2rem;
  padding: 0 0.4rem;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 3px;
  font: 700 0.75rem var(--font-num);
  cursor: pointer;
}
.slot .mv:disabled { opacity: 0.35; cursor: default; }
.slot .mv:not(:disabled):hover { border-color: var(--blue); }

/* 触屏：view-btn / 腰带挪动按钮撑到 44px；筛选 chip 视觉不变，只外扩点按热区（受行距限制约 39px，桌面不变） */
@media (pointer: coarse) {
  .view-btn,
  .slot .mv {
    min-width: 2.75rem;
    min-height: 2.75rem;
  }
  .dex-card .card-belt-btn {
    position: relative;
  }
  .dex-card .card-belt-btn::after {
    content: "";
    position: absolute;
    inset: -0.5rem -0.25rem;
  }
  .chip {
    position: relative;
  }
  .chip::after {
    content: "";
    position: absolute;
    inset: -0.5rem 0;
  }
}

/* Grid 卡片：名字是真链接，用 ::after 拉伸到整张卡；+ Belt 按钮抬高一层保持可点 */
.dex-card .dex-card-link,
.dex-card .dex-card-link:hover {
  color: inherit;
  text-decoration: none;
}
.dex-card .dex-card-link::after {
  content: "";
  position: absolute;
  inset: 0;
}
.dex-card .dex-card-link:focus-visible {
  outline: none;
}
.dex-card:has(.dex-card-link:focus-visible) {
  outline: 3px solid var(--mark);
  outline-offset: 2px;
}
.dex-card .card-belt-btn {
  position: relative;
  z-index: 1;
}

/* Dex Grid 卡片角标：已看过点、腰带点 */
.dex-card .card-dots {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.25rem;
  z-index: 2;
}
.dex-card .card-dots .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
.dex-card .card-dots .dot.seen {
  background: var(--navy);
}
.dex-card .card-dots .dot.belt {
  background: var(--ball);
}

/* Detail 标本档案详情扩展 */
.flavor {
  font-style: italic;
  color: var(--ink-soft);
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 0.6rem 0;
  border-left: 2px solid var(--mark);
  padding-left: 0.65rem;
}

.abilities-list {
  list-style: none;
  padding: 0;
  margin: 0.35rem 0;
  font-size: 0.875rem;
}
.abilities-list li {
  margin-bottom: 0.25rem;
  line-height: 1.4;
}
.abilities-list b {
  text-transform: capitalize;
  color: var(--ink);
}
.abilities-list .hidden-tag {
  color: var(--mark);
  font-size: 0.75rem;
  font-family: var(--font-num);
  font-weight: 700;
  margin-left: 0.2rem;
}

.evo-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.35rem 0;
  flex-wrap: wrap;
}
.evo-link {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.2rem 0.35rem;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--paper);
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.evo-link:hover {
  transform: translateY(-2px);
  border-color: var(--mark);
}
.evo-link.current {
  border-color: var(--blue);
  box-shadow: 0 0 0 1px var(--blue);
}
.evo-link img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}
.evo-link span {
  font-family: var(--font-num);
  font-size: 0.6875rem;
  color: var(--ink-soft);
}

/* Types: Belt vs Type 结果卡片 */
.belt-vs-card {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: 4px;
}

/* Belt: 满 6 只统计栏 */
.belt-summary {
  margin-top: 1.25rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: 4px;
  font-family: var(--font-num);
  font-size: 0.875rem;
  color: var(--ink);
}

/* Lineup: 文字结论 */
.lineup-verdict {
  margin-top: 1.25rem;
  padding: 0.85rem 1rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
}

/* ==========================================================================
   Collection System
   ========================================================================== */
.collection-summary {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.collection-summary > div {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 1.25rem;
  border-radius: 4px;
}

.collection-summary span {
  display: block;
  font-family: var(--font-num);
  font-size: 2rem;
  color: var(--mark);
}

.collection-summary small {
  font-family: var(--font-num);
  color: var(--ink-soft);
  letter-spacing: 0.05em;
  font-size: 0.75rem;
}

.progress {
  width: 100%;
  height: 10px;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  border-radius: 5px;
  overflow: hidden;
}

.progress > div {
  height: 100%;
  width: 0;
  background: var(--mark);
  border-radius: 4px;
  transition: width 300ms ease;
}

.region-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: .4rem;
  font-family: var(--font-num);
  font-size: 0.875rem;
}

.collection-region {
  margin-bottom: 1rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0.85rem 1rem;
}

.evo-node {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.evo-children {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ==========================================================================
   Moves & Abilities & Battle Lab
   ========================================================================== */
.tools-bar {
  display: flex;
  gap: 0.75rem;
  margin: 1.25rem 0 1.5rem;
  flex-wrap: wrap;
}

.tools-bar input,
.tools-bar select {
  padding: 0.5rem 0.85rem;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  color: var(--ink);
  font-family: inherit;
  font-size: 0.9375rem;
  border-radius: 4px;
}

.tools-bar input:focus,
.tools-bar select:focus {
  outline: none;
  border-color: var(--blue);
}

.move-status {
  min-height: 1.2em;
  margin: 0 0 0.65rem;
  color: var(--ink-soft);
  font: 500 0.75rem/1.2 var(--font-num);
  text-align: right;
}

.moves-page .moves-grid {
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 14rem), 1fr));
  gap: 0.75rem;
  min-height: 0;
  padding-bottom: 2rem;
}

.moves-page .move-card {
  min-height: 14rem;
  padding: 0;
  align-items: stretch;
  overflow: hidden;
  text-align: left;
}

.move-visual {
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  height: 5.25rem;
  overflow: hidden;
  border-bottom: 1px solid color-mix(in srgb, currentColor 25%, transparent);
}

.move-visual::before,
.move-visual::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.move-visual::before {
  width: 4.5rem;
  aspect-ratio: 1;
  border: 1px solid currentColor;
  border-radius: 50%;
  opacity: 0.3;
  animation: none;
}

.move-visual::after {
  inset: 0;
  background: repeating-linear-gradient(135deg, transparent 0 14px, currentColor 14px 15px);
  opacity: 0.1;
}

.move-visual-emblem {
  z-index: 1;
  display: grid;
  place-items: center;
  width: 2.75rem;
  aspect-ratio: 1;
  border: 1px solid color-mix(in srgb, currentColor 55%, transparent);
  border-radius: 50%;
  background: color-mix(in srgb, var(--paper) 30%, transparent);
  animation: none;
}

.move-visual-emblem svg {
  width: 1.4rem;
  height: 1.4rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.move-visual-label {
  position: absolute;
  right: 0.55rem;
  bottom: 0.4rem;
  z-index: 1;
  font: 700 0.6rem/1 var(--font-num);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.move-card-body {
  display: grid;
  flex: 1;
  gap: 0.7rem;
  padding: 0.65rem;
}

.move-card-heading {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 0.45rem;
}

.move-name {
  min-width: 0;
  margin: 0;
  color: var(--ink);
  font: 700 0.95rem/1.15 var(--font-ui);
  text-transform: capitalize;
  overflow-wrap: anywhere;
}

.move-type {
  flex: none;
  min-height: 1.5rem;
  height: auto;
  padding-inline: 0.45rem;
  font-size: 0.65rem;
  text-transform: uppercase;
}

.move-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: 0.45rem;
}

.move-meter-label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.2rem;
  color: var(--ink-soft);
  font: 600 0.62rem/1 var(--font-num);
}

.move-meter-label strong {
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 700;
}

.move-meter-track {
  height: 0.25rem;
  margin-top: 0.25rem;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 2px;
  background: var(--sky);
}

.move-meter-track span {
  display: block;
  height: 100%;
  background: var(--blue);
}

.move-details {
  margin-top: auto;
  border-top: 1px solid var(--line);
}

.move-details summary {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.65rem;
  color: var(--ink-soft);
  font: 600 0.7rem/1 var(--font-num);
  cursor: pointer;
  list-style: none;
}

.move-details summary::-webkit-details-marker {
  display: none;
}

.move-details summary::after {
  margin-left: auto;
  color: var(--blue);
  content: "+";
  font-size: 1rem;
}

.move-details[open] summary::after {
  content: "−";
}

.move-details p {
  margin: 0;
  padding: 0 0.65rem 0.65rem;
  color: var(--ink-soft);
  font: 400 0.75rem/1.4 var(--font-ui);
}

.move-pagination {
  margin-top: var(--s-6);
  margin-bottom: var(--s-10);
  text-align: center;
}

.move-pagination-inner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.move-pagination-inner span {
  color: var(--ink-soft);
  font: 500 0.75rem/1 var(--font-num);
}

@keyframes move-float {
  to { transform: translateY(-3px); }
}

@keyframes move-ring {
  to { transform: scale(1.12); opacity: 0.12; }
}

@media (prefers-reduced-motion: reduce) {
  .move-visual::before,
  .move-visual-emblem {
    animation: none;
  }
}

#ability-grid {
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;
  min-height: 0;
  padding-bottom: 2rem;
}

#ability-grid .ability-card {
  min-height: 15.75rem;
  padding: 0;
  align-items: stretch;
  overflow: hidden;
  text-align: left;
}

.ability-visual {
  position: relative;
  isolation: isolate;
  display: grid;
  place-items: center;
  height: 5rem;
  overflow: hidden;
  color: var(--navy);
  background: linear-gradient(115deg, var(--sky-deep), var(--paper));
  border-bottom: 1px solid var(--line);
}

.ability-visual::before,
.ability-visual::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.ability-visual::before {
  width: 4.25rem;
  aspect-ratio: 1;
  border: 1px solid currentColor;
  border-radius: 50%;
  opacity: 0.45;
  animation: none;
}

.ability-visual::after {
  inset: 0;
  background: repeating-linear-gradient(135deg, transparent 0 14px, currentColor 14px 15px);
  opacity: 0.1;
}

.ability-visual-pokemon {
  z-index: 1;
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  filter: drop-shadow(0 4px 0 var(--sky));
  animation: none;
}

.ability-visual-placeholder {
  z-index: 1;
  color: var(--ink);
  font: 700 2.5rem/1 var(--font-num);
}

.ability-visual-label {
  position: absolute;
  right: 0.55rem;
  bottom: 0.4rem;
  z-index: 1;
  color: var(--ink-soft);
  font: 700 0.6rem/1 var(--font-num);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.ability-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.65rem;
}

.ability-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.ability-count {
  color: var(--ink-soft);
  font: 500 0.7rem/1 var(--font-num);
}

.ability-name {
  margin: 0;
  color: var(--ink);
  font: 700 1rem/1.15 var(--font-ui);
  text-transform: capitalize;
  overflow-wrap: anywhere;
}

.ability-effect {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  color: var(--ink-soft);
  font: 400 0.76rem/1.4 var(--font-ui);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.ability-full-effect {
  margin-top: -0.2rem;
}

.ability-full-effect summary,
.ability-more-specimens summary {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--navy);
  font: 600 0.68rem/1.25 var(--font-num);
  cursor: pointer;
  list-style: none;
}

.ability-full-effect summary::-webkit-details-marker,
.ability-more-specimens summary::-webkit-details-marker {
  display: none;
}

.ability-full-effect summary::before,
.ability-more-specimens summary::before {
  content: "+";
  color: var(--mark);
  font-size: 0.9rem;
}

.ability-full-effect[open] summary::before,
.ability-more-specimens[open] summary::before {
  content: "−";
}

.ability-full-effect p {
  margin: 0.3rem 0 0;
  color: var(--ink-soft);
  font: 400 0.74rem/1.4 var(--font-ui);
}

.ability-roster {
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid var(--line);
}

.ability-roster-heading {
  margin: 0 0 0.35rem;
  color: var(--ink);
  font: 700 0.65rem/1 var(--font-num);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ability-specimen-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.ability-specimen-chip {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  overflow: hidden;
  padding: 0.17rem 0.4rem;
  border: 1px solid var(--line);
  border-radius: var(--r-chip);
  color: var(--ink-soft);
  background: var(--sky-deep);
  font: 500 0.68rem/1.25 var(--font-ui);
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
}

.ability-specimen-chip:hover {
  border-color: var(--mark);
  color: var(--ink);
}

.ability-specimen-chip:focus-visible,
.ability-full-effect summary:focus-visible,
.ability-more-specimens summary:focus-visible {
  outline: 2px solid var(--mark);
  outline-offset: 2px;
}

.ability-no-specimens {
  color: var(--ink-soft);
  font: 400 0.72rem/1.3 var(--font-ui);
}

.ability-more-specimens {
  margin-top: 0.4rem;
}

.ability-specimen-list-extra {
  padding-top: 0.4rem;
}

.ability-pagination-inner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.ability-pagination-inner span {
  color: var(--ink-soft);
  font: 500 0.75rem/1 var(--font-num);
}

@keyframes ability-float {
  to { transform: translateY(-3px); }
}

@keyframes ability-ring {
  to { transform: scale(1.12); opacity: 0.12; }
}

@media (prefers-reduced-motion: reduce) {
  .ability-visual::before,
  .ability-visual-pokemon {
    animation: none;
  }
}

@media (max-width: 76rem) {
  #ability-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
}

@media (max-width: 64rem) {
  #ability-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (max-width: 48rem) {
  #ability-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 36rem) {
  #ability-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 30rem) {
  #ability-grid { grid-template-columns: 1fr; }
}

.lineup-pair {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: start;
  margin: 1.5rem 0;
}

.lineup-mid {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--mark);
  padding-top: 5rem;
}

.lineup-pane {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lineup-pane input {
  padding: 0.5rem 0.75rem;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  color: var(--ink);
  font-family: inherit;
  border-radius: 4px;
}

.lineup-pane input:focus {
  outline: none;
  border-color: var(--blue);
}

.matchup-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  border-radius: 4px;
  margin-top: 1rem;
  font-family: var(--font-num);
}

.matchup-multiplier {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--mark);
}

@media (max-width: 700px) {
  .collection-summary {
    grid-template-columns: 1fr;
  }
  .lineup-pair {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .lineup-mid {
    padding-top: 0;
  }
}

/* ==========================================================================
   Global Quick Search (Command Palette)
   ========================================================================== */
.search-overlay {
  position: fixed;
  inset: 0;
  background: rgba(7, 20, 34, 0.78);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10vh 1rem 2rem;
  animation: fadeIn 120ms ease;
}

.search-panel {
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-file);
  border-radius: var(--r-file);
  width: 100%;
  max-width: 36rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.search-panel-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--line);
  background: var(--sky-deep);
}

.search-panel-header input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  color: var(--ink);
  font-family: inherit;
  font-size: 1.05rem;
  outline: none;
}

.search-panel-header input::placeholder {
  color: var(--ink-soft);
}

.search-close-btn {
  background: transparent;
  border: none;
  color: var(--ink-soft);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  min-width: 2.75rem;
  min-height: 2.75rem;
}
.search-close-btn:hover {
  color: var(--ink);
  background: var(--sky);
}

.search-results-list {
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
  max-height: 22rem;
  overflow-y: auto;
}

.search-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 1rem;
  cursor: pointer;
  transition: background 80ms ease;
}

.search-item:hover,
.search-item.active {
  background: var(--sky-deep);
}

.search-item-title {
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  color: var(--ink);
  font-weight: 500;
  text-transform: capitalize;
}

.search-item-tag {
  font-family: var(--font-num);
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.15rem 0.4rem;
  border-radius: 2px;
  letter-spacing: 0.04em;
  background: var(--sky);
  color: var(--ink-soft);
  border: 1px solid var(--line);
}

.search-item-tag.pokémon {
  background: rgba(255, 203, 5, 0.15);
  color: var(--mark);
  border-color: rgba(255, 203, 5, 0.35);
}

.search-item-tag.move {
  background: rgba(61, 125, 202, 0.15);
  color: var(--blue);
  border-color: rgba(61, 125, 202, 0.35);
}

.search-item-tag.ability {
  background: rgba(120, 200, 80, 0.15);
  color: #78C850;
  border-color: rgba(120, 200, 80, 0.35);
}

.search-empty {
  padding: 1.5rem 1rem;
  text-align: center;
  color: var(--ink-soft);
  font-size: 0.875rem;
}

.search-panel-footer {
  padding: 0.5rem 1rem;
  border-top: 1px solid var(--line);
  background: var(--sky);
  font-family: var(--font-num);
  font-size: 0.6875rem;
  color: var(--ink-soft);
}

.search-panel-footer kbd {
  background: var(--sky-deep);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 0.1rem 0.3rem;
  color: var(--ink);
}

/* ==========================================================================
   Who's That Pokémon Quiz
   ========================================================================== */
.quiz-score-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.quiz-score-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1rem 1.25rem;
  text-align: center;
}

.quiz-score-card span {
  display: block;
  font-family: var(--font-num);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--mark);
}

.quiz-score-card small {
  font-family: var(--font-num);
  font-size: 0.6875rem;
  color: var(--ink-soft);
  letter-spacing: 0.05em;
}

.quiz-stage-box {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quiz-silhouette-wrap {
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, var(--sky-deep) 0%, rgba(11, 28, 46, 0.4) 70%, transparent 100%);
  margin-bottom: 1.5rem;
}

.quiz-img-silhouette {
  filter: brightness(0);
  transition: filter 400ms ease;
  user-select: none;
  -webkit-user-drag: none;
}

.quiz-img-revealed {
  filter: brightness(1) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5));
  animation: revealPulse 500ms ease;
  user-select: none;
  -webkit-user-drag: none;
}

@keyframes revealPulse {
  0% { transform: scale(0.92); opacity: 0.8; }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); opacity: 1; }
}

.quiz-controls-form {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 32rem;
  flex-wrap: wrap;
  justify-content: center;
}

.quiz-controls-form input {
  flex: 1;
  min-width: 14rem;
  padding: 0.6rem 0.85rem;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  color: var(--ink);
  font-family: inherit;
  font-size: 1rem;
  border-radius: 4px;
}
.quiz-controls-form input:focus {
  outline: none;
  border-color: var(--blue);
}

.quiz-feedback-banner {
  width: 100%;
  max-width: 32rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  text-align: center;
  font-family: var(--font-ui);
  font-size: 0.9375rem;
  animation: fadeIn 150ms ease;
}

.quiz-feedback-banner.success {
  background: rgba(120, 200, 80, 0.15);
  border: 1px solid rgba(120, 200, 80, 0.4);
  color: #78C850;
}

.quiz-feedback-banner.warning {
  background: rgba(240, 128, 48, 0.15);
  border: 1px solid rgba(240, 128, 48, 0.4);
  color: #F08030;
}

.quiz-feedback-banner.error {
  background: rgba(238, 21, 21, 0.15);
  border: 1px solid rgba(238, 21, 21, 0.4);
  color: #EE1515;
}

/* ==========================================================================
   Achievement Badges
   ========================================================================== */
.badge-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.badge-card {
  padding: 1.15rem;
  border-radius: 4px;
  background: var(--paper);
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 120ms ease, border-color 120ms ease;
}

.badge-card.earned {
  border-color: var(--mark);
  box-shadow: 0 4px 12px rgba(255, 203, 5, 0.1);
}

.badge-card.earned:hover {
  transform: translateY(-2px);
}

.badge-card.locked {
  opacity: 0.55;
  filter: grayscale(0.8);
  border-style: dashed;
}

@media (max-width: 900px) {
  .badge-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .quiz-score-board {
    grid-template-columns: 1fr;
  }
  .badge-grid {
    grid-template-columns: 1fr;
  }
}

/* ==========================================================================
   Interactive Regional Field Map
   ========================================================================== */
.field-map-stage {
  position: relative;
  width: 100%;
  border-radius: var(--r-file);
  overflow: hidden;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-file);
}

.field-map-img {
  width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  filter: contrast(1.05) saturate(1.1);
  transition: opacity 200ms ease;
}

.pins-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.map-pin {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  outline: none;
  z-index: 10;
}

.map-pin-core {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--mark);
  border: 2px solid #071422;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 120ms ease, background 120ms ease;
}

.map-pin:hover .map-pin-core,
.map-pin.active .map-pin-core {
  transform: scale(1.15);
  background: #FFF;
}

.map-pin-pulse {
  display: none;
}

.map-pin-label {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-family: var(--font-num);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--ink);
  background: rgba(7, 20, 34, 0.85);
  border: 1px solid var(--line);
  padding: 0.15rem 0.4rem;
  border-radius: 2px;
  margin-top: 4px;
  pointer-events: none;
  opacity: 0.9;
  letter-spacing: 0.02em;
}

/* Recon Popover */
.recon-popover {
  position: absolute;
  z-index: 50;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-file);
  border-radius: var(--r-file);
  padding: 1.15rem 1.25rem;
  width: 290px;
  max-width: 90vw;
  max-height: calc(100% - 1rem);
  overflow-y: auto;
  animation: fadeIn 120ms ease;
}

.recon-close-btn {
  background: transparent;
  border: none;
  color: var(--ink-soft);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  line-height: 1;
  border-radius: 2px;
  min-width: 2.75rem;
  min-height: 2.75rem;
}
.recon-close-btn:hover {
  color: var(--ink);
  background: var(--sky);
}

.recon-type-tag {
  font-family: var(--font-num);
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--mark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.recon-name {
  font-family: var(--font-ui);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0.2rem 0 0.35rem;
}

.recon-desc {
  font-size: 0.8125rem;
  color: var(--ink-soft);
  line-height: 1.45;
  margin: 0 0 0.85rem;
}

.recon-pokemons-title {
  font-family: var(--font-num);
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--navy);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  border-top: 1px solid var(--line);
  padding-top: 0.5rem;
}

.recon-pokemons-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.recon-poke-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0.4rem 0.25rem;
  text-decoration: none;
  transition: transform 100ms ease, border-color 100ms ease;
}
.recon-poke-card:hover {
  border-color: var(--mark);
}

.recon-poke-card img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4));
}

.recon-poke-card span.id {
  font-family: var(--font-num);
  font-size: 0.625rem;
  color: var(--ink-soft);
  font-weight: 700;
}

.recon-poke-card span.name {
  font-family: var(--font-ui);
  font-size: 0.6875rem;
  color: var(--ink);
  font-weight: 700;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ==========================================================================
   TCG BOOSTER PACK LAB (QUIZ PAGE REPURPOSED)
   Strictly following design.md: night archive, hard shadows, 4px radii,
   no hover-scale, no rainbow glow, no decorative glassmorphism.
   ========================================================================== */

.pack-lab-wrap {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
}

/* Pack Controls Bar */
.pack-controls-bar {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.pack-selector-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--line);
  margin-top: 0.75rem;
}

.pack-select-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1 1 20rem;
  min-width: 0;
  max-width: 100%;
}

.pack-select-group label {
  font-family: var(--font-num);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.pack-set-select {
  flex: 1;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  height: 2.5rem;
  background: var(--sky-deep);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 0 0.75rem;
  font: 500 0.875rem var(--font-ui);
  cursor: pointer;
  outline: none;
}

.pack-set-select:focus {
  outline: 3px solid var(--focus);
  outline-offset: 2px;
}

/* Pack Stage Main Container */
.pack-stage-container {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 2.5rem 1.5rem;
  min-height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 4px 0 var(--line);
}

/* Pack Stage Loading Overlay */
.pack-loading-overlay {
  position: absolute;
  inset: 0;
  background: var(--sky);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 20;
}

.pack-loading-overlay.is-active {
  display: flex !important;
}

/* Foil Booster Pack Display (100% Authentic Physical Packaging) */
.pack-foil-wrapper {
  position: relative;
  width: 250px;
  height: 485px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  background: #0d1e30;
  box-shadow: 0 10px 0 var(--line), 0 16px 28px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 160ms cubic-bezier(0.2, 0.8, 0.4, 1), box-shadow 160ms ease;
}

.pack-foil-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 0 var(--line), 0 22px 35px rgba(0, 0, 0, 0.6);
}

.pack-foil-wrapper:active {
  transform: translateY(2px);
  box-shadow: 0 4px 0 var(--line);
}

.pack-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
}

/* Subtle physical metallic sheen overlay */
.pack-foil-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.04) 30%,
    rgba(255, 255, 255, 0.22) 48%,
    rgba(255, 255, 255, 0.04) 58%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
  mix-blend-mode: overlay;
  opacity: 0.75;
  transition: opacity 160ms ease;
  z-index: 5;
}

.pack-foil-wrapper:hover .pack-foil-sheen {
  opacity: 1;
}

/* Tear interaction indicator */
.pack-tear-tab {
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.75rem;
  background: rgba(7, 20, 34, 0.65);
  border-top: 1px dashed rgba(255, 203, 5, 0.6);
  border-bottom: 1px dashed rgba(255, 203, 5, 0.6);
  color: var(--mark);
  font-family: var(--font-num);
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  opacity: 0.85;
  transition: opacity 140ms ease, background 140ms ease;
  z-index: 10;
}

.pack-foil-wrapper:hover .pack-tear-tab {
  opacity: 1;
  background: rgba(7, 20, 34, 0.85);
}

.pack-tear-arrow {
  font-size: 0.5rem;
  opacity: 0.8;
}

/* Tearing animation state */
.pack-foil-wrapper.is-tearing {
  pointer-events: none;
}

.pack-foil-wrapper.is-tearing:not(.is-gsap-tearing) {
  animation: packTearPhysical 0.5s forwards ease-in-out;
}

@keyframes packTearPhysical {
  0% { transform: scale(1) translateY(0); filter: brightness(1); }
  35% { transform: scale(0.98) translateY(-6px) rotate(-1deg); filter: brightness(1.2); }
  70% { transform: scale(0.95) translateY(-14px) rotate(1deg); opacity: 0.7; }
  100% { transform: scale(0.9) translateY(-24px); opacity: 0; }
}

/* 10-Card Opening Grid */
.pack-cards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.85rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .pack-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 580px) {
  .pack-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}

/* 3D Card Item */
.tcg-card-item {
  width: 100%;
  aspect-ratio: 63 / 88;
  perspective: 800px;
  cursor: pointer;
  position: relative;
}

.tcg-card-item:active {
  transform: scale(0.97);
}

.tcg-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
  border-radius: 4px;
}

.tcg-card-item.is-flipped .tcg-card-inner {
  transform: rotateY(180deg);
}

/* Card Back (Official Pokémon TCG Physical Card Back) */
.tcg-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
  background: #142842;
  box-sizing: border-box;
  border: 1px solid var(--line);
  box-shadow: 0 4px 0 var(--line);
  overflow: hidden;
  transition: border-color 100ms ease;
}

.tcg-card-item:hover .tcg-card-back {
  border-color: var(--mark);
}

.card-back-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-slot-num {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-family: var(--font-num);
  font-size: 0.5625rem;
  font-weight: 700;
  color: var(--mark);
  background: rgba(7, 20, 34, 0.85);
  border: 1px solid var(--line);
  padding: 0.08rem 0.3rem;
  border-radius: 2px;
  line-height: 1;
}

/* Card Front */
.tcg-card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 4px;
  overflow: hidden;
  background: var(--sky-deep);
  box-sizing: border-box;
  border: 1px solid var(--line);
  box-shadow: 0 4px 0 var(--line);
  transition: border-color 100ms ease;
}

.tcg-card-item:hover .tcg-card-front {
  border-color: var(--navy);
}

.tcg-card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tcg-card-hit-flash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(112deg, transparent 34%, rgba(255, 255, 255, 0.78) 50%, transparent 66%);
  mix-blend-mode: screen;
  opacity: 0;
}

/* Hit Borders for High Rarity (Crisp physical tokens, no blurry neon) */
.tcg-card-item.hit-glow-gold .tcg-card-front {
  border: 2px solid var(--mark);
}

.tcg-card-item.hit-glow-rainbow .tcg-card-front {
  border: 2px solid var(--mark);
  box-shadow: 0 4px 0 var(--line);
}

@media (prefers-reduced-motion: reduce) {
  .pack-foil-wrapper,
  .tcg-card-inner {
    transition-duration: 0.16s;
  }

  .pack-foil-wrapper.is-tearing:not(.is-gsap-tearing) {
    animation: none;
    opacity: 0;
  }
}

/* Specimen Badge on card corner */
.tcg-card-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  font-family: var(--font-num);
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.15rem 0.35rem;
  border-radius: 2px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  pointer-events: none;
}

.tcg-card-badge.badge-sar {
  background: var(--ball);
  color: #fff;
}

.tcg-card-badge.badge-ultra {
  background: var(--mark);
  color: var(--navy-key-ink);
}

.tcg-card-badge.badge-rare {
  background: var(--navy);
  color: var(--sky);
}

/* Post-opening Actions Bar */
.pack-actions-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  width: 100%;
}

/* Binder Drawer & Gallery */
.pack-binder-section {
  margin-top: 2rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  box-shadow: 0 4px 0 var(--line);
  overflow: hidden;
}

.pack-binder-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--line);
  background: var(--sky-deep);
  cursor: pointer;
  user-select: none;
}

.pack-binder-header h2 {
  font-size: 1.125rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pack-binder-toggle-icon {
  font-size: 0.75rem;
  color: var(--ink-soft);
  transition: transform 180ms ease;
}

.pack-binder-section.is-open .pack-binder-toggle-icon {
  transform: rotate(180deg);
}

.pack-binder-body {
  padding: 1.25rem;
  display: none;
}

.pack-binder-section.is-open .pack-binder-body {
  display: block;
}

.pack-binder-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.pack-binder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 0.75rem;
  max-height: 38rem;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.binder-thumb-item {
  position: relative;
  aspect-ratio: 63 / 88;
  border-radius: 4px;
  overflow: hidden;
  background: var(--sky);
  border: 1px solid var(--line);
  box-shadow: 0 2px 0 var(--line);
  cursor: pointer;
  transition: border-color 100ms ease;
}

.binder-thumb-item:hover {
  border-color: var(--mark);
}

.binder-thumb-item:active {
  transform: scale(0.97);
}

.binder-thumb-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.binder-thumb-count {
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: var(--sky);
  color: var(--mark);
  font-family: var(--font-num);
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.1rem 0.3rem;
  border-radius: 2px;
  border: 1px solid var(--line);
  line-height: 1;
}

/* Card Detail Modal (Solid night sky background, no blurry glassmorphism) */
.tcg-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(7, 20, 34, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;
}

.tcg-modal-backdrop.is-active {
  opacity: 1;
  pointer-events: auto;
}

.tcg-modal-card-wrap {
  max-width: 380px;
  width: 100%;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 10px 0 var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.tcg-modal-card-img {
  width: 100%;
  aspect-ratio: 63 / 88;
  border-radius: 4px;
  border: 1px solid var(--line);
  object-fit: contain;
}

.tcg-modal-info {
  text-align: center;
  color: var(--ink);
}

.tcg-modal-info h3 {
  font-family: var(--font-ui);
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
}

.tcg-modal-info p {
  font-family: var(--font-num);
  font-size: 0.8125rem;
  color: var(--ink-soft);
  margin: 0;
}

/* UI review repairs: keep keyboard, labels and narrow layouts usable. */
.tools-bar input:focus-visible,
.tools-bar select:focus-visible,
.lineup-pane input:focus-visible,
.search-panel-header input:focus-visible,
.map-pin:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.tool-field,
.search-field {
  display: grid;
  gap: var(--s-1);
  min-width: 0;
}
.tool-field > span,
.search-input-label {
  color: var(--ink-soft);
  font: 400 0.75rem/1.4 var(--font-ui);
}
.search-field { flex: 1; }
.search-panel { max-height: 80dvh; }
.search-overlay { overflow-y: auto; }
.search-item { width: 100%; text-decoration: none; }
.search-item:focus-visible { outline-offset: -3px; }
.type-row button.chip,
.pack-binder-filters button.chip,
.pack-set-select { min-height: 2.75rem; }

.types-table thead th,
.types-table thead th.hi {
  position: sticky;
  top: 0;
  z-index: 2;
}
.types-table tbody th,
.types-table tbody tr.hi th {
  position: sticky;
  left: 0;
  z-index: 2;
}
.types-table thead th:first-child { left: 0; z-index: 3; }
.types-table a:focus-visible { outline-offset: -3px; }
.types-legend > span:first-child .dot { background: var(--navy) !important; }

#ability-grid {
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
}

.map-landmark-list { display: none; }
.map-landmark-button {
  appearance: none;
  min-height: 2.75rem;
  width: 100%;
  padding: var(--s-2);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  background: var(--paper);
  color: var(--ink);
  font: 400 0.875rem/1.4 var(--font-ui);
  text-align: left;
  cursor: pointer;
}
.map-landmark-button[aria-expanded="true"] { border-color: var(--mark); }
.recon-popover.is-below-map {
  position: relative;
  inset: auto !important;
  width: 100%;
  max-width: 100%;
  max-height: none;
  margin-top: var(--s-4);
}

.region-card,
.tcg-card-item,
.binder-thumb-item,
.pack-binder-header-toggle {
  appearance: none;
  font: inherit;
  color: inherit;
  text-align: left;
}
.tcg-card-item { padding: 0; border: 0; background: transparent; }
.tcg-card-inner { display: block; }
.binder-thumb-item { padding: 0; }
.pack-binder-header h2 { width: 100%; }
.pack-binder-header-toggle { display: flex; align-items: center; gap: var(--s-2); width: 100%; min-height: 2.75rem; padding: 0; border: 0; background: transparent; font-weight: 700; cursor: pointer; }
.pack-binder-toggle-icon { margin-left: auto; }
.binder-thumb-item:focus-visible { outline-offset: -3px; }

@media (max-width: 48rem) {
  .pins-layer { display: none; }
  .map-landmark-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--s-2); margin-top: var(--s-4); }
  .pack-select-group { flex-direction: column; align-items: stretch; }
  .tool-field { flex: 1 1 100%; }
  .tool-field input, .tool-field select { width: 100%; min-width: 0; }
  .pack-lab-wrap .quiz-score-card { min-width: 0; padding: var(--s-3) var(--s-2); }
  .pack-lab-wrap .quiz-score-card small { display: block; overflow-wrap: anywhere; font-size: 0.75rem; line-height: 1.4; }
  .pack-binder-header-toggle { flex-wrap: wrap; }
}
```

---

## 3. JavaScript 核心模块 (JavaScript Modules)

### 3.1 `js/api.js` (PokeAPI 异步请求与缓存)

- **文件路径**: `js/api.js`  
- **代码行数**: 526 行  
- **文件大小**: 18,108 字节  

```javascript
/**
 * 151 FILE — PokeAPI Client & Data Access
 * 遵循 pokemon-web-project-plan.md §7 与 AGENTS.md 约束
 * - getList(limit, offset)
 * - getPokemon(idOrName)
 * - 内存 Map + localStorage 列表与详情缓存
 * - 切地区换 offset，禁止一次性并发拉取 1025 条详情
 */

(function (window) {
  const API_BASE = "https://pokeapi.co/api/v2";

  // localStorage 缓存版本。以后详情数据加字段时把 v2 改成 v3，旧缓存自动作废。
  const CACHE_PREFIX = "file151.v3.";

  // 一次性清掉没有版本号的旧缓存
  try {
    Object.keys(localStorage)
      .filter((k) => /^file151\.(p_|list_)/.test(k))
      .forEach((k) => localStorage.removeItem(k));
  } catch (_) {}

  // 内存缓存
  const listMemoryCache = new Map();
  const pokemonMemoryCache = new Map();
  const speciesMemoryCache = new Map();
  const abilityMemoryCache = new Map();
  const evoMemoryCache = new Map();
  const evoTreeMemoryCache = new Map();
  const moveMemoryCache = new Map();
  const fullAbilityMemoryCache = new Map();

  /**
   * 把名字或编号统一成 PokeAPI 能识别的 key。
   * 有本地名录时一律转成编号：Mr. Mime、Type: Null、Nidoran♀ 这类名字直接请求会 404。
   */
  function resolveKey(idOrName) {
    const raw = String(idOrName).trim().toLowerCase().replace(/^#+/, "");
    if (/^\d+$/.test(raw)) return String(parseInt(raw, 10));
    // ♀/♂ 先换成 f/m，否则 Nidoran♀ 和 Nidoran♂ 会被当成同一个名字
    const norm = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/♀/g, "f").replace(/♂/g, "m").replace(/[^a-z0-9]/g, "");
    if (window.ALL_SPECIES) {
      const hit = window.ALL_SPECIES.find((sp) => norm(sp.name) === norm(raw));
      if (hit) return String(hit.id);
    }
    return raw;
  }

  function refId(ref) {
    const match = String(ref?.url || "").match(/\/(\d+)\/?$/);
    return match ? Number(match[1]) : null;
  }

  const api = {
    /**
     * 3D HOME 渲染图 URL (512x512)
     */
    artUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    },

    /**
     * 官方立绘 URL（HOME 缺图时的后备）
     */
    officialUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    },

    /**
     * 原生叫声音频 URL
     */
    cryUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
    },

    /**
     * 播放叫声 (音量 0.35)。只用于用户主动点击立绘的场合。
     */
    playCry(id, volume = 0.35) {
      try {
        const audio = new Audio(this.cryUrl(id));
        audio.volume = volume;
        audio.play().catch(() => {});
      } catch (_) {}
    },

    /**
     * 自动触发的叫声（进详情页、Draw one）。尊重 file151.sound，默认关。
     */
    playCryAuto(id) {
      if (window.store && window.store.soundOn()) this.playCry(id);
    },

    /**
     * 拉取指定地区/区间的列表 (limit, offset)
     * 优先走内存与 localStorage 缓存
     */
    async getList(limit = 151, offset = 0) {
      const cacheKey = `${CACHE_PREFIX}list_${offset}_${limit}`;

      // 1. 检查内存缓存
      if (listMemoryCache.has(cacheKey)) {
        return listMemoryCache.get(cacheKey);
      }

      // 2. 检查本地全量 10 世代预置
      if (typeof window !== "undefined" && window.ALL_SPECIES && window.ALL_SPECIES.length === 1025) {
        const slice = window.ALL_SPECIES.slice(offset, offset + limit);
        if (slice.length > 0) {
          listMemoryCache.set(cacheKey, slice);
          return slice;
        }
      }

      // 3. 检查 localStorage
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          const parsed = JSON.parse(local);
          listMemoryCache.set(cacheKey, parsed);
          return parsed;
        }
      } catch (_) {}

      // 3. 网络请求
      const resp = await fetch(`${API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
      if (!resp.ok) {
        throw new Error(`Failed to fetch pokemon list: ${resp.status}`);
      }
      const data = await resp.json();

      const results = data.results.map((item) => {
        const parts = item.url.split("/").filter(Boolean);
        const id = parseInt(parts[parts.length - 1], 10);
        const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        return {
          id,
          name,
          types: [] // 初始为空，由单独详情或 type 映射补充
        };
      });

      // 存入内存与本地存储
      listMemoryCache.set(cacheKey, results);
      try {
        localStorage.setItem(cacheKey, JSON.stringify(results));
      } catch (_) {}

      return results;
    },

    /**
     * 获取单个宝可梦详情 (id 或英文名)
     * 包含 types, stats, height, weight
     */
    async getPokemon(idOrName) {
      if (!idOrName) return null;
      const key = resolveKey(idOrName);
      const cacheKey = `${CACHE_PREFIX}p_${key}`;

      // 1. 检查内存缓存
      if (pokemonMemoryCache.has(key)) {
        return pokemonMemoryCache.get(key);
      }

      // 2. 检查 localStorage
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          const parsed = JSON.parse(local);
          pokemonMemoryCache.set(key, parsed);
          return parsed;
        }
      } catch (_) {}

      // 3. 网络请求 (带超时与自动重试)
      let data = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
          const timer = controller ? setTimeout(() => controller.abort(), 5000) : null;
          const resp = await fetch(`${API_BASE}/pokemon/${encodeURIComponent(key)}`, {
            signal: controller ? controller.signal : undefined
          });
          if (timer) clearTimeout(timer);
          if (resp.ok) {
            data = await resp.json();
            break;
          }
        } catch (_) {
          if (attempt === 0) await new Promise((r) => setTimeout(r, 300));
        }
      }

      if (data) {
        // 显示名优先用本地名录（Mr. Mime），API 的 slug 是 mr-mime
        const local = window.getSpeciesById ? window.getSpeciesById(data.id) : null;
        const result = {
          id: data.id,
          name: local ? local.name : data.name.charAt(0).toUpperCase() + data.name.slice(1),
          forms: (data.forms || []).map((form) => ({
            id: refId(form),
            name: form.name || "",
            url: form.url || null
          })).filter((form) => form.id || form.name),
          types: (data.types || []).sort((a, b) => a.slot - b.slot).map((t) => t.type.name),
          height: (data.height || 0) / 10, // 分米转米
          weight: (data.weight || 0) / 10, // 百克转千克
          stats: (data.stats || []).map((s) => ({
            name: s.stat.name,
            value: s.base_stat
          })),
          abilities: (data.abilities || []).map((a) => ({
            name: a.ability.name,
            is_hidden: a.is_hidden
          }))
        };

        // 存入内存与本地存储
        pokemonMemoryCache.set(key, result);
        pokemonMemoryCache.set(String(result.id), result);
        try {
          localStorage.setItem(`${CACHE_PREFIX}p_${result.id}`, JSON.stringify(result));
        } catch (_) {}

        return result;
      }

      // 4. 网络故障/超时时的优雅降级（本地档案兜底，确保页面永不白屏/空壳）
      const localSpec = /^\d+$/.test(key)
        ? (window.getSpeciesById ? window.getSpeciesById(Number(key)) : null)
        : (window.ALL_SPECIES || []).find((s) => s.name.toLowerCase() === key.toLowerCase());

      if (localSpec) {
        const fallback = {
          id: localSpec.id,
          name: localSpec.name,
          forms: [],
          types: localSpec.types || [],
          height: 1.0,
          weight: 10.0,
          stats: [
            { name: "hp", value: 70 },
            { name: "attack", value: 70 },
            { name: "defense", value: 70 },
            { name: "special-attack", value: 70 },
            { name: "special-defense", value: 70 },
            { name: "speed", value: 70 }
          ],
          abilities: [],
          isOffline: true
        };
        return fallback;
      }

      throw new Error(`Pokemon not found: ${idOrName}`);
    },

    /**
     * 获取种族元数据：英文种属、100字以内 flavor、进化链 URL、varieties 引用
     */
    async getSpecies(id) {
      if (!id) return null;
      const num = parseInt(id, 10);
      if (!num) return null;
      const cacheKey = `${CACHE_PREFIX}sp_${num}`;
      if (speciesMemoryCache.has(num)) return speciesMemoryCache.get(num);
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          const parsed = JSON.parse(local);
          speciesMemoryCache.set(num, parsed);
          return parsed;
        }
      } catch (_) {}
      try {
        const resp = await fetch(`${API_BASE}/pokemon-species/${num}`);
        if (!resp.ok) return null;
        const j = await resp.json();
        const flavor = (j.flavor_text_entries || []).find((x) => x.language && x.language.name === "en");
        const genus = (j.genera || []).find((x) => x.language && x.language.name === "en");
        const row = {
          id: j.id,
          genus: genus ? genus.genus : "",
          flavor: flavor ? flavor.flavor_text.replace(/\s+/g, " ").trim() : "",
          evoUrl: j.evolution_chain?.url || null,
          // ponytail: keep variety refs shallow; fetch a form only when a caller needs full data.
          varieties: (j.varieties || []).map((v) => {
            const pokemon = v?.pokemon || {};
            return {
              id: refId(pokemon),
              name: pokemon.name || "",
              url: pokemon.url || null,
              isDefault: Boolean(v?.is_default)
            };
          }).filter((v) => v.id || v.name)
        };
        speciesMemoryCache.set(num, row);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(row));
        } catch (_) {}
        return row;
      } catch (_) {
        return null;
      }
    },

    /**
     * 获取特性简明说明 (short_effect)
     */
    async getAbilityText(name) {
      if (!name) return "";
      const clean = String(name).toLowerCase().trim();
      const cacheKey = `${CACHE_PREFIX}ab_${clean}`;
      if (abilityMemoryCache.has(clean)) return abilityMemoryCache.get(clean);
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          abilityMemoryCache.set(clean, local);
          return local;
        }
      } catch (_) {}
      try {
        const resp = await fetch(`${API_BASE}/ability/${clean}`);
        if (!resp.ok) return "";
        const j = await resp.json();
        const en = (j.effect_entries || []).find((x) => x.language && x.language.name === "en");
        const text = en ? en.short_effect : (j.flavor_text_entries || []).find((x) => x.language && x.language.name === "en")?.flavor_text || "";
        const cleaned = text.replace(/\s+/g, " ").trim();
        abilityMemoryCache.set(clean, cleaned);
        try {
          localStorage.setItem(cacheKey, cleaned);
        } catch (_) {}
        return cleaned;
      } catch (_) {
        return "";
      }
    },

    /**
     * 获取同进化线关联种族的 ID 列表 (最多 8 只，包含分支)
     */
    async getEvoIds(evoUrl) {
      if (!evoUrl) return [];
      if (evoMemoryCache.has(evoUrl)) return evoMemoryCache.get(evoUrl);
      try {
        const resp = await fetch(evoUrl);
        if (!resp.ok) return [];
        const j = await resp.json();
        function chainIds(node, acc = []) {
          if (!node || !node.species || !node.species.url) return acc;
          const m = node.species.url.match(/\/(\d+)\/$/);
          const id = m ? Number(m[1]) : 0;
          if (id) acc.push(id);
          (node.evolves_to || []).forEach((n) => chainIds(n, acc));
          return acc;
        }
        const ids = [...new Set(chainIds(j.chain))].slice(0, 8);
        evoMemoryCache.set(evoUrl, ids);
        return ids;
      } catch (_) {
        return [];
      }
    },

    /**
     * 获取结构化进化树：保留所有分支，以及每条演化边的 evolution_details 条件。
     * 节点形状：{ species: { id, name, url }, evolution_details, evolves_to }
     */
    async getEvoTree(evoUrl) {
      if (!evoUrl) return null;
      if (evoTreeMemoryCache.has(evoUrl)) return evoTreeMemoryCache.get(evoUrl);
      const cacheKey = `${CACHE_PREFIX}evo_tree_${encodeURIComponent(evoUrl)}`;
      try {
        const local = localStorage.getItem(cacheKey);
        if (local) {
          const parsed = JSON.parse(local);
          if (parsed && parsed.species && Array.isArray(parsed.evolves_to)) {
            evoTreeMemoryCache.set(evoUrl, parsed);
            return parsed;
          }
        }
      } catch (_) {}
      try {
        const resp = await fetch(evoUrl);
        if (!resp.ok) return null;
        const j = await resp.json();
        function build(node) {
          if (!node?.species?.url) return null;
          return {
            species: {
              id: refId(node.species),
              name: node.species.name || "",
              url: node.species.url
            },
            evolution_details: Array.isArray(node.evolution_details) ? node.evolution_details : [],
            evolves_to: (node.evolves_to || []).map(build).filter(Boolean)
          };
        }
        const tree = build(j.chain);
        if (!tree) return null;
        evoTreeMemoryCache.set(evoUrl, tree);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(tree));
        } catch (_) {}
        return tree;
      } catch (_) {
        return null;
      }
    },

    /**
     * 获取招式详情与战斗属性
     */
    async getMove(nameOrId) {
      if (!nameOrId) return null;
      const key = String(nameOrId).trim().toLowerCase();
      if (moveMemoryCache.has(key)) return moveMemoryCache.get(key);
      const cacheKey = `${CACHE_PREFIX}move.${key}`;
      const request = (async () => {
        try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) return JSON.parse(cached);
        } catch (_) {}
        try {
          const resp = await fetch(`${API_BASE}/move/${encodeURIComponent(key)}`);
          if (!resp.ok) return null;
          const data = await resp.json();
          const move = {
            id: data.id,
            name: data.name,
            type: data.type?.name || "",
            category: data.damage_class?.name || "",
            power: data.power,
            accuracy: data.accuracy,
            pp: data.pp,
            priority: data.priority,
            description: data.flavor_text_entries?.find(x => x.language?.name === "en")?.flavor_text || ""
          };
          try {
            localStorage.setItem(cacheKey, JSON.stringify(move));
          } catch (_) {}
          return move;
        } catch (_) {
          return null;
        }
      })();
      moveMemoryCache.set(key, request);
      const move = await request;
      if (!move) moveMemoryCache.delete(key);
      return move;
    },

    /**
     * 获取特性完整信息及对应宝可梦列表
     */
    async getAbility(nameOrId) {
      if (!nameOrId) return null;
      const key = String(nameOrId).trim().toLowerCase();
      if (fullAbilityMemoryCache.has(key)) return fullAbilityMemoryCache.get(key);
      const cacheKey = `${CACHE_PREFIX}ability_full.${key}`;
      const request = (async () => {
        try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) return JSON.parse(cached);
        } catch (_) {}
        try {
          const resp = await fetch(`${API_BASE}/ability/${encodeURIComponent(key)}`);
          if (!resp.ok) return null;
          const data = await resp.json();
          const res = {
            id: data.id,
            name: data.name,
            description: (data.effect_entries || []).find(x => x.language?.name === "en")?.short_effect ||
              data.flavor_text_entries?.find(x => x.language?.name === "en")?.flavor_text || "",
            pokemon: (data.pokemon || []).map(x => ({
              name: x.pokemon.name,
              url: x.pokemon.url
            }))
          };
          try {
            localStorage.setItem(cacheKey, JSON.stringify(res));
          } catch (_) {}
          return res;
        } catch (_) {
          return null;
        }
      })();
      fullAbilityMemoryCache.set(key, request);
      const ability = await request;
      if (!ability) fullAbilityMemoryCache.delete(key);
      return ability;
    }
  };

  window.pokeApi = api;
  window.api = api;

  /**
   * 全站立绘兜底：HOME 缺图时换官方立绘，仍失败就隐藏，避免破图图标。
   * error 事件不冒泡，所以用捕获阶段监听。
   */
  document.addEventListener(
    "error",
    (e) => {
      const img = e.target;
      if (!img || img.tagName !== "IMG") return;
      if (img.src.includes("/shiny/")) return; // 闪光图缺失由详情页自己处理，不能悄悄换成普通图
      const m = /\/other\/home\/(\d+)\.png$/.exec(img.src);
      if (m && !img.dataset.fallback) {
        img.dataset.fallback = "1";
        img.src = api.officialUrl(m[1]);
      } else if (img.src.includes("/sprites/")) {
        const num = m ? m[1] : (img.src.match(/\/(\d+)\.png$/) || [])[1];
        if (num && !img.dataset.localFallback) {
          img.dataset.localFallback = "1";
          img.src = `assets/thumbs/${num}.webp`;
        } else {
          img.style.visibility = "hidden";
        }
      }
    },
    true
  );
})(window);
```

---

### 3.2 `js/regions-data.js` (10 地区编号区间字典)

- **文件路径**: `js/regions-data.js`  
- **代码行数**: 1,217 行  
- **文件大小**: 46,745 字节  

```javascript
/**
 * 151 FILE — Regions Data (10 官方地区编号写死表)
 * 遵循 pokemon-web-project-plan.md §4.7
 * National Dex #001–#1025 区间划分
 */

const REGIONS = [
  {
    slug: "kanto",
    name: "Kanto",
    start: 1, end: 151, count: 151, preview: 25, offset: 0, limit: 151,
    line: "Indigo plateau. First file.",
    landmarks: [
      { name: "Pallet Town", x: 26, y: 78, type: "Starting Town", desc: "Oak Pokémon Research Lab & quiet sea shores.", pokemons: [1, 4, 7] },
      { name: "Viridian Forest", x: 26, y: 52, type: "Temperate Canopy", desc: "Dense woodland labyrinth buzzing with electric & bug specimens.", pokemons: [25, 10, 13] },
      { name: "Mt. Moon", x: 44, y: 28, type: "Craggy Mountain", desc: "Meteorite craters home to moonlight dancers & subterranean flocks.", pokemons: [35, 41, 74] },
      { name: "Power Plant", x: 80, y: 35, type: "Industrial Ruins", desc: "Decommissioned high-voltage plant humming with electric fury.", pokemons: [145, 100, 125] },
      { name: "Seafoam Islands", x: 48, y: 88, type: "Glacial Cavern", desc: "Freezing twin ocean caverns housing glacial avian majesty.", pokemons: [144, 79, 86] },
      { name: "Cerulean Cave", x: 57, y: 22, type: "Restricted Hollow", desc: "Dangerous secret dungeon concealing the pinnacle psychic anomaly.", pokemons: [150, 64, 112] }
    ]
  },
  {
    slug: "johto",
    name: "Johto",
    start: 152, end: 251, count: 100, preview: 155, offset: 151, limit: 100,
    line: "Bell tower and Whirl Islands. Connected west.",
    landmarks: [
      { name: "New Bark Town", x: 84, y: 72, type: "Windy Meadow", desc: "Where the winds of a new journey blow.", pokemons: [152, 155, 158] },
      { name: "Ilex Forest", x: 38, y: 76, type: "Ancient Shrine Wood", desc: "Dense overgrown forest guarded by the forest time protector.", pokemons: [251, 163, 167] },
      { name: "Bell Tower", x: 42, y: 28, type: "Historic Spire", desc: "Sacred rainbow pagoda where the legendary bird descends.", pokemons: [250, 197, 196] },
      { name: "Whirl Islands", x: 22, y: 74, type: "Ocean Vortex", desc: "Four treacherous islands guarded by whirlpools and ocean guardian.", pokemons: [249, 226, 223] },
      { name: "Lake of Rage", x: 56, y: 18, type: "Highland Reservoir", desc: "Vast rainfall crater lake famous for the red gyarados sighting.", pokemons: [130, 129, 211] }
    ]
  },
  {
    slug: "hoenn",
    name: "Hoenn",
    start: 252, end: 386, count: 135, preview: 255, offset: 251, limit: 135,
    line: "Two oceans and an active volcano.",
    landmarks: [
      { name: "Littleroot Town", x: 24, y: 76, type: "Southern Haven", desc: "Birch Pokémon ecology institute.", pokemons: [252, 255, 258] },
      { name: "Mt. Chimney", x: 42, y: 32, type: "Active Volcano", desc: "Fiery volcanic caldera shrouded in ash and magma.", pokemons: [322, 324, 383] },
      { name: "Sootopolis City", x: 74, y: 54, type: "Sunken Crater Basin", desc: "Dazzling white city nestled inside an extinct volcanic crater.", pokemons: [382, 349, 350] },
      { name: "Sky Pillar", x: 68, y: 82, type: "Skyward Spire", desc: "Ancient weathered stone tower ascending into the ozone layer.", pokemons: [384, 277, 334] }
    ]
  },
  {
    slug: "sinnoh",
    name: "Sinnoh",
    start: 387, end: 493, count: 107, preview: 392, offset: 386, limit: 107,
    line: "Mount Coronet divides east and west.",
    landmarks: [
      { name: "Twinleaf Town", x: 18, y: 78, type: "Lakeside Village", desc: "Peaceful snow-bordered town beside Lake Verity.", pokemons: [387, 390, 393] },
      { name: "Mt. Coronet & Spear Pillar", x: 50, y: 44, type: "Continental Backbone", desc: "High-altitude shrine where space and time converge.", pokemons: [483, 484, 487] },
      { name: "Eterna Forest", x: 30, y: 36, type: "Mossy Old Growth", desc: "Old chateau nestled under mossy ancient trees.", pokemons: [407, 479, 427] },
      { name: "Snowpoint Temple", x: 52, y: 12, type: "Glacial Sanctum", desc: "Frozen ancestral sanctuary housing the colossal titan.", pokemons: [486, 459, 460] }
    ]
  },
  {
    slug: "unova",
    name: "Unova",
    start: 494, end: 649, count: 156, preview: 495, offset: 493, limit: 156,
    line: "Castelia bridges and metropolitan coast.",
    landmarks: [
      { name: "Nuvema Town", x: 64, y: 84, type: "Riverside Outset", desc: "Coastal rural gateway to the greater metropolis.", pokemons: [495, 498, 501] },
      { name: "Castelia City", x: 48, y: 68, type: "Mega Port City", desc: "Towering art deco skyscrapers and sea piers.", pokemons: [540, 546, 570] },
      { name: "Dragonspiral Tower", x: 48, y: 22, type: "Mythic Spire", desc: "The oldest structure in Unova, where ideals and truth awaken.", pokemons: [643, 644, 621] },
      { name: "Giant Chasm", x: 74, y: 34, type: "Meteor Impact Crater", desc: "Frigid forested basin containing alien absolute zero power.", pokemons: [646, 624, 626] }
    ]
  },
  {
    slug: "kalos",
    name: "Kalos",
    start: 650, end: 721, count: 72, preview: 656, offset: 649, limit: 72,
    line: "Lumiose radial star. Coastal cliffs and dolmens.",
    landmarks: [
      { name: "Vaniville Town", x: 62, y: 84, type: "Provincial Hamlet", desc: "Quaint European starting village.", pokemons: [650, 653, 656] },
      { name: "Lumiose City & Prism Tower", x: 50, y: 46, type: "Central Radial Metropolis", desc: "The City of Light, center of Kalos culture and Mega Evolution.", pokemons: [678, 667, 716] },
      { name: "Reflection Cave", x: 28, y: 52, type: "Crystal Mirror Cavern", desc: "Glimmering mirrored walls reflecting hidden psychic paths.", pokemons: [703, 688, 708] },
      { name: "Geosenge Town Menhirs", x: 26, y: 38, type: "Ancient Monoliths", desc: "Mysterious standing stones concealing the ancient ultimate weapon.", pokemons: [717, 718, 680] }
    ]
  },
  {
    slug: "alola",
    name: "Alola",
    start: 722, end: 809, count: 88, preview: 722, offset: 721, limit: 88,
    line: "Four natural islands and one artificial reef.",
    landmarks: [
      { name: "Melemele Island", x: 22, y: 52, type: "Island of Dawn", desc: "Iki Town and Hau'oli City, protected by Tapu Koko.", pokemons: [722, 725, 728] },
      { name: "Akala Island & Wela Volcano", x: 44, y: 36, type: "Volcanic Island", desc: "Fiery peaks and lush trial grounds under Tapu Lele.", pokemons: [757, 776, 759] },
      { name: "Aether Paradise", x: 50, y: 56, type: "Floating Eco-Facility", desc: "Man-made floating haven harboring ultra space wormholes.", pokemons: [772, 773, 791] },
      { name: "Ula'ula Island & Mt. Lanakila", x: 68, y: 46, type: "Sub-Zero Peak", desc: "Highest frozen summit and site of the Alola League.", pokemons: [792, 739, 782] }
    ]
  },
  {
    slug: "galar",
    name: "Galar",
    start: 810, end: 898, count: 89, preview: 810, offset: 809, limit: 89,
    line: "Industrial crown and open Wild Area.",
    landmarks: [
      { name: "Postwick & Slumbering Weald", x: 46, y: 88, type: "Mist-Veiled Sacred Grove", desc: "Ancient misty forest where the rusted sword and shield sleep.", pokemons: [810, 813, 816] },
      { name: "The Wild Area", x: 48, y: 64, type: "Vast Natural Expanse", desc: "Unbounded wilderness dotted with glowing Dynamax dens.", pokemons: [833, 840, 856] },
      { name: "Motostoke", x: 48, y: 50, type: "Steam Industrial Hub", desc: "Red brick railways, steam pipes and the opening gym challenge.", pokemons: [850, 837, 854] },
      { name: "Wyndon & Rose Tower", x: 48, y: 16, type: "Championship Citadel", desc: "Grand stadium arena holding the Galar Championship cup.", pokemons: [888, 889, 890] }
    ]
  },
  {
    slug: "hisui",
    name: "Hisui",
    start: 899, end: 905, count: 7, preview: 899, offset: 898, limit: 7,
    line: "Ancient Coronet wilderness before towns.",
    landmarks: [
      { name: "Jubilife Village", x: 30, y: 58, type: "Pioneer Settlement", desc: "The Galaxy Expedition Team's frontier outpost.", pokemons: [899, 900, 901] },
      { name: "Obsidian Fieldlands", x: 40, y: 70, type: "Verdant Wilderness", desc: "Untamed plains roaming with wild Alpha beasts.", pokemons: [902, 903, 904] },
      { name: "Coronet Highlands", x: 50, y: 42, type: "Sacred Mountain Crags", desc: "Ancient prehistoric peaks piercing the temporal sky rift.", pokemons: [905, 487, 493] }
    ]
  },
  {
    slug: "paldea",
    name: "Paldea",
    start: 906, end: 1025, count: 120, preview: 906, offset: 905, limit: 120,
    line: "Great Crater of Paldea open plateau.",
    landmarks: [
      { name: "Cabo Poco & Mesagoza", x: 48, y: 70, type: "Academy Terraces", desc: "Historic academy and sprawling central terrace city.", pokemons: [906, 909, 912] },
      { name: "The Great Crater (Area Zero)", x: 50, y: 50, type: "Terastal Spiral Abyss", desc: "Forbidden prehistoric / futuristic crater core glowing with Tera energy.", pokemons: [1007, 1008, 1024] },
      { name: "Glaseado Mountain", x: 52, y: 22, type: "Sub-Alpine Summit", desc: "Highest icy mountain in the region with steep ski slopes.", pokemons: [974, 975, 996] },
      { name: "Casseroya Lake", x: 30, y: 30, type: "Massive Freshwater Basin", desc: "Enormous inland lake housing colossal titan fish.", pokemons: [977, 978, 1004] }
    ]
  }
];

/**
 * 根据 slug 获取地区定义，支持 all / national 全量模式
 */
const ALL_REGION_DEF = { slug: "all", name: "National", start: 1, end: 1025, count: 1025, preview: 25, offset: 0, limit: 1025 };

function getRegionBySlug(slug) {
  if (!slug || slug === "all" || slug === "national") return ALL_REGION_DEF;
  const found = REGIONS.find(r => r.slug === slug.toLowerCase());
  return found || ALL_REGION_DEF;
}

/**
 * 为给定的编号区间生成 50 号一段的书脊分段
 * 例如 1–151 -> [[1, 50], [51, 100], [101, 151]]
 * 152–251 -> [[152, 200], [201, 250], [251, 251]]
 */
function getRegionSpines(start, end) {
  const spines = [];
  let cur = start;
  while (cur <= end) {
    // 找到当前段的终点：下一个以 00 或 50 结尾的整数，但不超过 end
    let nextBound = Math.floor(cur / 50) * 50 + 50;
    if (nextBound < cur) nextBound += 50;
    const segEnd = Math.min(nextBound, end);
    spines.push([cur, segEnd]);
    cur = segEnd + 1;
  }
  return spines;
}

// 暴露到 window 作用域供其它脚本使用
window.REGIONS = REGIONS;
window.getRegionBySlug = getRegionBySlug;
window.getRegionSpines = getRegionSpines;

/**
 * 10 官方世代全量 1025 只宝可梦（National Dex #001–#1025）
 * 格式：[id, name, types]
 */
const ALL_SPECIES_DATA = [
  [1,"Bulbasaur",["grass", "poison"]],
  [2,"Ivysaur",["grass", "poison"]],
  [3,"Venusaur",["grass", "poison"]],
  [4,"Charmander",["fire"]],
  [5,"Charmeleon",["fire"]],
  [6,"Charizard",["fire", "flying"]],
  [7,"Squirtle",["water"]],
  [8,"Wartortle",["water"]],
  [9,"Blastoise",["water"]],
  [10,"Caterpie",["bug"]],
  [11,"Metapod",["bug"]],
  [12,"Butterfree",["bug", "flying"]],
  [13,"Weedle",["bug", "poison"]],
  [14,"Kakuna",["bug", "poison"]],
  [15,"Beedrill",["bug", "poison"]],
  [16,"Pidgey",["normal", "flying"]],
  [17,"Pidgeotto",["normal", "flying"]],
  [18,"Pidgeot",["normal", "flying"]],
  [19,"Rattata",["normal"]],
  [20,"Raticate",["normal"]],
  [21,"Spearow",["normal", "flying"]],
  [22,"Fearow",["normal", "flying"]],
  [23,"Ekans",["poison"]],
  [24,"Arbok",["poison"]],
  [25,"Pikachu",["electric"]],
  [26,"Raichu",["electric"]],
  [27,"Sandshrew",["ground"]],
  [28,"Sandslash",["ground"]],
  [29,"Nidoran♀",["poison"]],
  [30,"Nidorina",["poison"]],
  [31,"Nidoqueen",["poison", "ground"]],
  [32,"Nidoran♂",["poison"]],
  [33,"Nidorino",["poison"]],
  [34,"Nidoking",["poison", "ground"]],
  [35,"Clefairy",["fairy"]],
  [36,"Clefable",["fairy"]],
  [37,"Vulpix",["fire"]],
  [38,"Ninetales",["fire"]],
  [39,"Jigglypuff",["normal", "fairy"]],
  [40,"Wigglytuff",["normal", "fairy"]],
  [41,"Zubat",["poison", "flying"]],
  [42,"Golbat",["poison", "flying"]],
  [43,"Oddish",["grass", "poison"]],
  [44,"Gloom",["grass", "poison"]],
  [45,"Vileplume",["grass", "poison"]],
  [46,"Paras",["bug", "grass"]],
  [47,"Parasect",["bug", "grass"]],
  [48,"Venonat",["bug", "poison"]],
  [49,"Venomoth",["bug", "poison"]],
  [50,"Diglett",["ground"]],
  [51,"Dugtrio",["ground"]],
  [52,"Meowth",["normal"]],
  [53,"Persian",["normal"]],
  [54,"Psyduck",["water"]],
  [55,"Golduck",["water"]],
  [56,"Mankey",["fighting"]],
  [57,"Primeape",["fighting"]],
  [58,"Growlithe",["fire"]],
  [59,"Arcanine",["fire"]],
  [60,"Poliwag",["water"]],
  [61,"Poliwhirl",["water"]],
  [62,"Poliwrath",["water", "fighting"]],
  [63,"Abra",["psychic"]],
  [64,"Kadabra",["psychic"]],
  [65,"Alakazam",["psychic"]],
  [66,"Machop",["fighting"]],
  [67,"Machoke",["fighting"]],
  [68,"Machamp",["fighting"]],
  [69,"Bellsprout",["grass", "poison"]],
  [70,"Weepinbell",["grass", "poison"]],
  [71,"Victreebel",["grass", "poison"]],
  [72,"Tentacool",["water", "poison"]],
  [73,"Tentacruel",["water", "poison"]],
  [74,"Geodude",["rock", "ground"]],
  [75,"Graveler",["rock", "ground"]],
  [76,"Golem",["rock", "ground"]],
  [77,"Ponyta",["fire"]],
  [78,"Rapidash",["fire"]],
  [79,"Slowpoke",["water", "psychic"]],
  [80,"Slowbro",["water", "psychic"]],
  [81,"Magnemite",["electric", "steel"]],
  [82,"Magneton",["electric", "steel"]],
  [83,"Farfetchd",["normal", "flying"]],
  [84,"Doduo",["normal", "flying"]],
  [85,"Dodrio",["normal", "flying"]],
  [86,"Seel",["water"]],
  [87,"Dewgong",["water", "ice"]],
  [88,"Grimer",["poison"]],
  [89,"Muk",["poison"]],
  [90,"Shellder",["water"]],
  [91,"Cloyster",["water", "ice"]],
  [92,"Gastly",["ghost", "poison"]],
  [93,"Haunter",["ghost", "poison"]],
  [94,"Gengar",["ghost", "poison"]],
  [95,"Onix",["rock", "ground"]],
  [96,"Drowzee",["psychic"]],
  [97,"Hypno",["psychic"]],
  [98,"Krabby",["water"]],
  [99,"Kingler",["water"]],
  [100,"Voltorb",["electric"]],
  [101,"Electrode",["electric"]],
  [102,"Exeggcute",["grass", "psychic"]],
  [103,"Exeggutor",["grass", "psychic"]],
  [104,"Cubone",["ground"]],
  [105,"Marowak",["ground"]],
  [106,"Hitmonlee",["fighting"]],
  [107,"Hitmonchan",["fighting"]],
  [108,"Lickitung",["normal"]],
  [109,"Koffing",["poison"]],
  [110,"Weezing",["poison"]],
  [111,"Rhyhorn",["ground", "rock"]],
  [112,"Rhydon",["ground", "rock"]],
  [113,"Chansey",["normal"]],
  [114,"Tangela",["grass"]],
  [115,"Kangaskhan",["normal"]],
  [116,"Horsea",["water"]],
  [117,"Seadra",["water"]],
  [118,"Goldeen",["water"]],
  [119,"Seaking",["water"]],
  [120,"Staryu",["water"]],
  [121,"Starmie",["water", "psychic"]],
  [122,"Mr. Mime",["psychic", "fairy"]],
  [123,"Scyther",["bug", "flying"]],
  [124,"Jynx",["ice", "psychic"]],
  [125,"Electabuzz",["electric"]],
  [126,"Magmar",["fire"]],
  [127,"Pinsir",["bug"]],
  [128,"Tauros",["normal"]],
  [129,"Magikarp",["water"]],
  [130,"Gyarados",["water", "flying"]],
  [131,"Lapras",["water", "ice"]],
  [132,"Ditto",["normal"]],
  [133,"Eevee",["normal"]],
  [134,"Vaporeon",["water"]],
  [135,"Jolteon",["electric"]],
  [136,"Flareon",["fire"]],
  [137,"Porygon",["normal"]],
  [138,"Omanyte",["rock", "water"]],
  [139,"Omastar",["rock", "water"]],
  [140,"Kabuto",["rock", "water"]],
  [141,"Kabutops",["rock", "water"]],
  [142,"Aerodactyl",["rock", "flying"]],
  [143,"Snorlax",["normal"]],
  [144,"Articuno",["ice", "flying"]],
  [145,"Zapdos",["electric", "flying"]],
  [146,"Moltres",["fire", "flying"]],
  [147,"Dratini",["dragon"]],
  [148,"Dragonair",["dragon"]],
  [149,"Dragonite",["dragon", "flying"]],
  [150,"Mewtwo",["psychic"]],
  [151,"Mew",["psychic"]],
  [152,"Chikorita",["grass"]],
  [153,"Bayleef",["grass"]],
  [154,"Meganium",["grass"]],
  [155,"Cyndaquil",["fire"]],
  [156,"Quilava",["fire"]],
  [157,"Typhlosion",["fire"]],
  [158,"Totodile",["water"]],
  [159,"Croconaw",["water"]],
  [160,"Feraligatr",["water"]],
  [161,"Sentret",["normal"]],
  [162,"Furret",["normal"]],
  [163,"Hoothoot",["normal", "flying"]],
  [164,"Noctowl",["normal", "flying"]],
  [165,"Ledyba",["bug", "flying"]],
  [166,"Ledian",["bug", "flying"]],
  [167,"Spinarak",["bug", "poison"]],
  [168,"Ariados",["bug", "poison"]],
  [169,"Crobat",["poison", "flying"]],
  [170,"Chinchou",["water", "electric"]],
  [171,"Lanturn",["water", "electric"]],
  [172,"Pichu",["electric"]],
  [173,"Cleffa",["fairy"]],
  [174,"Igglybuff",["normal", "fairy"]],
  [175,"Togepi",["fairy"]],
  [176,"Togetic",["fairy", "flying"]],
  [177,"Natu",["psychic", "flying"]],
  [178,"Xatu",["psychic", "flying"]],
  [179,"Mareep",["electric"]],
  [180,"Flaaffy",["electric"]],
  [181,"Ampharos",["electric"]],
  [182,"Bellossom",["grass"]],
  [183,"Marill",["water", "fairy"]],
  [184,"Azumarill",["water", "fairy"]],
  [185,"Sudowoodo",["rock"]],
  [186,"Politoed",["water"]],
  [187,"Hoppip",["grass", "flying"]],
  [188,"Skiploom",["grass", "flying"]],
  [189,"Jumpluff",["grass", "flying"]],
  [190,"Aipom",["normal"]],
  [191,"Sunkern",["grass"]],
  [192,"Sunflora",["grass"]],
  [193,"Yanma",["bug", "flying"]],
  [194,"Wooper",["water", "ground"]],
  [195,"Quagsire",["water", "ground"]],
  [196,"Espeon",["psychic"]],
  [197,"Umbreon",["dark"]],
  [198,"Murkrow",["dark", "flying"]],
  [199,"Slowking",["water", "psychic"]],
  [200,"Misdreavus",["ghost"]],
  [201,"Unown",["psychic"]],
  [202,"Wobbuffet",["psychic"]],
  [203,"Girafarig",["normal", "psychic"]],
  [204,"Pineco",["bug"]],
  [205,"Forretress",["bug", "steel"]],
  [206,"Dunsparce",["normal"]],
  [207,"Gligar",["ground", "flying"]],
  [208,"Steelix",["steel", "ground"]],
  [209,"Snubbull",["fairy"]],
  [210,"Granbull",["fairy"]],
  [211,"Qwilfish",["water", "poison"]],
  [212,"Scizor",["bug", "steel"]],
  [213,"Shuckle",["bug", "rock"]],
  [214,"Heracross",["bug", "fighting"]],
  [215,"Sneasel",["dark", "ice"]],
  [216,"Teddiursa",["normal"]],
  [217,"Ursaring",["normal"]],
  [218,"Slugma",["fire"]],
  [219,"Magcargo",["fire", "rock"]],
  [220,"Swinub",["ice", "ground"]],
  [221,"Piloswine",["ice", "ground"]],
  [222,"Corsola",["water", "rock"]],
  [223,"Remoraid",["water"]],
  [224,"Octillery",["water"]],
  [225,"Delibird",["ice", "flying"]],
  [226,"Mantine",["water", "flying"]],
  [227,"Skarmory",["steel", "flying"]],
  [228,"Houndour",["dark", "fire"]],
  [229,"Houndoom",["dark", "fire"]],
  [230,"Kingdra",["water", "dragon"]],
  [231,"Phanpy",["ground"]],
  [232,"Donphan",["ground"]],
  [233,"Porygon2",["normal"]],
  [234,"Stantler",["normal"]],
  [235,"Smeargle",["normal"]],
  [236,"Tyrogue",["fighting"]],
  [237,"Hitmontop",["fighting"]],
  [238,"Smoochum",["ice", "psychic"]],
  [239,"Elekid",["electric"]],
  [240,"Magby",["fire"]],
  [241,"Miltank",["normal"]],
  [242,"Blissey",["normal"]],
  [243,"Raikou",["electric"]],
  [244,"Entei",["fire"]],
  [245,"Suicune",["water"]],
  [246,"Larvitar",["rock", "ground"]],
  [247,"Pupitar",["rock", "ground"]],
  [248,"Tyranitar",["rock", "dark"]],
  [249,"Lugia",["psychic", "flying"]],
  [250,"Ho-Oh",["fire", "flying"]],
  [251,"Celebi",["psychic", "grass"]],
  [252,"Treecko",["grass"]],
  [253,"Grovyle",["grass"]],
  [254,"Sceptile",["grass"]],
  [255,"Torchic",["fire"]],
  [256,"Combusken",["fire", "fighting"]],
  [257,"Blaziken",["fire", "fighting"]],
  [258,"Mudkip",["water"]],
  [259,"Marshtomp",["water", "ground"]],
  [260,"Swampert",["water", "ground"]],
  [261,"Poochyena",["dark"]],
  [262,"Mightyena",["dark"]],
  [263,"Zigzagoon",["normal"]],
  [264,"Linoone",["normal"]],
  [265,"Wurmple",["bug"]],
  [266,"Silcoon",["bug"]],
  [267,"Beautifly",["bug", "flying"]],
  [268,"Cascoon",["bug"]],
  [269,"Dustox",["bug", "poison"]],
  [270,"Lotad",["water", "grass"]],
  [271,"Lombre",["water", "grass"]],
  [272,"Ludicolo",["water", "grass"]],
  [273,"Seedot",["grass"]],
  [274,"Nuzleaf",["grass", "dark"]],
  [275,"Shiftry",["grass", "dark"]],
  [276,"Taillow",["normal", "flying"]],
  [277,"Swellow",["normal", "flying"]],
  [278,"Wingull",["water", "flying"]],
  [279,"Pelipper",["water", "flying"]],
  [280,"Ralts",["psychic", "fairy"]],
  [281,"Kirlia",["psychic", "fairy"]],
  [282,"Gardevoir",["psychic", "fairy"]],
  [283,"Surskit",["bug", "water"]],
  [284,"Masquerain",["bug", "flying"]],
  [285,"Shroomish",["grass"]],
  [286,"Breloom",["grass", "fighting"]],
  [287,"Slakoth",["normal"]],
  [288,"Vigoroth",["normal"]],
  [289,"Slaking",["normal"]],
  [290,"Nincada",["bug", "ground"]],
  [291,"Ninjask",["bug", "flying"]],
  [292,"Shedinja",["bug", "ghost"]],
  [293,"Whismur",["normal"]],
  [294,"Loudred",["normal"]],
  [295,"Exploud",["normal"]],
  [296,"Makuhita",["fighting"]],
  [297,"Hariyama",["fighting"]],
  [298,"Azurill",["normal", "fairy"]],
  [299,"Nosepass",["rock"]],
  [300,"Skitty",["normal"]],
  [301,"Delcatty",["normal"]],
  [302,"Sableye",["dark", "ghost"]],
  [303,"Mawile",["steel", "fairy"]],
  [304,"Aron",["steel", "rock"]],
  [305,"Lairon",["steel", "rock"]],
  [306,"Aggron",["steel", "rock"]],
  [307,"Meditite",["fighting", "psychic"]],
  [308,"Medicham",["fighting", "psychic"]],
  [309,"Electrike",["electric"]],
  [310,"Manectric",["electric"]],
  [311,"Plusle",["electric"]],
  [312,"Minun",["electric"]],
  [313,"Volbeat",["bug"]],
  [314,"Illumise",["bug"]],
  [315,"Roselia",["grass", "poison"]],
  [316,"Gulpin",["poison"]],
  [317,"Swalot",["poison"]],
  [318,"Carvanha",["water", "dark"]],
  [319,"Sharpedo",["water", "dark"]],
  [320,"Wailmer",["water"]],
  [321,"Wailord",["water"]],
  [322,"Numel",["fire", "ground"]],
  [323,"Camerupt",["fire", "ground"]],
  [324,"Torkoal",["fire"]],
  [325,"Spoink",["psychic"]],
  [326,"Grumpig",["psychic"]],
  [327,"Spinda",["normal"]],
  [328,"Trapinch",["ground"]],
  [329,"Vibrava",["ground", "dragon"]],
  [330,"Flygon",["ground", "dragon"]],
  [331,"Cacnea",["grass"]],
  [332,"Cacturne",["grass", "dark"]],
  [333,"Swablu",["normal", "flying"]],
  [334,"Altaria",["dragon", "flying"]],
  [335,"Zangoose",["normal"]],
  [336,"Seviper",["poison"]],
  [337,"Lunatone",["rock", "psychic"]],
  [338,"Solrock",["rock", "psychic"]],
  [339,"Barboach",["water", "ground"]],
  [340,"Whiscash",["water", "ground"]],
  [341,"Corphish",["water"]],
  [342,"Crawdaunt",["water", "dark"]],
  [343,"Baltoy",["ground", "psychic"]],
  [344,"Claydol",["ground", "psychic"]],
  [345,"Lileep",["rock", "grass"]],
  [346,"Cradily",["rock", "grass"]],
  [347,"Anorith",["rock", "bug"]],
  [348,"Armaldo",["rock", "bug"]],
  [349,"Feebas",["water"]],
  [350,"Milotic",["water"]],
  [351,"Castform",["normal"]],
  [352,"Kecleon",["normal"]],
  [353,"Shuppet",["ghost"]],
  [354,"Banette",["ghost"]],
  [355,"Duskull",["ghost"]],
  [356,"Dusclops",["ghost"]],
  [357,"Tropius",["grass", "flying"]],
  [358,"Chimecho",["psychic"]],
  [359,"Absol",["dark"]],
  [360,"Wynaut",["psychic"]],
  [361,"Snorunt",["ice"]],
  [362,"Glalie",["ice"]],
  [363,"Spheal",["ice", "water"]],
  [364,"Sealeo",["ice", "water"]],
  [365,"Walrein",["ice", "water"]],
  [366,"Clamperl",["water"]],
  [367,"Huntail",["water"]],
  [368,"Gorebyss",["water"]],
  [369,"Relicanth",["water", "rock"]],
  [370,"Luvdisc",["water"]],
  [371,"Bagon",["dragon"]],
  [372,"Shelgon",["dragon"]],
  [373,"Salamence",["dragon", "flying"]],
  [374,"Beldum",["steel", "psychic"]],
  [375,"Metang",["steel", "psychic"]],
  [376,"Metagross",["steel", "psychic"]],
  [377,"Regirock",["rock"]],
  [378,"Regice",["ice"]],
  [379,"Registeel",["steel"]],
  [380,"Latias",["dragon", "psychic"]],
  [381,"Latios",["dragon", "psychic"]],
  [382,"Kyogre",["water"]],
  [383,"Groudon",["ground"]],
  [384,"Rayquaza",["dragon", "flying"]],
  [385,"Jirachi",["steel", "psychic"]],
  [386,"Deoxys",["psychic"]],
  [387,"Turtwig",["grass"]],
  [388,"Grotle",["grass"]],
  [389,"Torterra",["grass", "ground"]],
  [390,"Chimchar",["fire"]],
  [391,"Monferno",["fire", "fighting"]],
  [392,"Infernape",["fire", "fighting"]],
  [393,"Piplup",["water"]],
  [394,"Prinplup",["water"]],
  [395,"Empoleon",["water", "steel"]],
  [396,"Starly",["normal", "flying"]],
  [397,"Staravia",["normal", "flying"]],
  [398,"Staraptor",["normal", "flying"]],
  [399,"Bidoof",["normal"]],
  [400,"Bibarel",["normal", "water"]],
  [401,"Kricketot",["bug"]],
  [402,"Kricketune",["bug"]],
  [403,"Shinx",["electric"]],
  [404,"Luxio",["electric"]],
  [405,"Luxray",["electric"]],
  [406,"Budew",["grass", "poison"]],
  [407,"Roserade",["grass", "poison"]],
  [408,"Cranidos",["rock"]],
  [409,"Rampardos",["rock"]],
  [410,"Shieldon",["rock", "steel"]],
  [411,"Bastiodon",["rock", "steel"]],
  [412,"Burmy",["bug"]],
  [413,"Wormadam",["bug", "grass"]],
  [414,"Mothim",["bug", "flying"]],
  [415,"Combee",["bug", "flying"]],
  [416,"Vespiquen",["bug", "flying"]],
  [417,"Pachirisu",["electric"]],
  [418,"Buizel",["water"]],
  [419,"Floatzel",["water"]],
  [420,"Cherubi",["grass"]],
  [421,"Cherrim",["grass"]],
  [422,"Shellos",["water"]],
  [423,"Gastrodon",["water", "ground"]],
  [424,"Ambipom",["normal"]],
  [425,"Drifloon",["ghost", "flying"]],
  [426,"Drifblim",["ghost", "flying"]],
  [427,"Buneary",["normal"]],
  [428,"Lopunny",["normal"]],
  [429,"Mismagius",["ghost"]],
  [430,"Honchkrow",["dark", "flying"]],
  [431,"Glameow",["normal"]],
  [432,"Purugly",["normal"]],
  [433,"Chingling",["psychic"]],
  [434,"Stunky",["poison", "dark"]],
  [435,"Skuntank",["poison", "dark"]],
  [436,"Bronzor",["steel", "psychic"]],
  [437,"Bronzong",["steel", "psychic"]],
  [438,"Bonsly",["rock"]],
  [439,"Mime Jr.",["psychic", "fairy"]],
  [440,"Happiny",["normal"]],
  [441,"Chatot",["normal", "flying"]],
  [442,"Spiritomb",["ghost", "dark"]],
  [443,"Gible",["dragon", "ground"]],
  [444,"Gabite",["dragon", "ground"]],
  [445,"Garchomp",["dragon", "ground"]],
  [446,"Munchlax",["normal"]],
  [447,"Riolu",["fighting"]],
  [448,"Lucario",["fighting", "steel"]],
  [449,"Hippopotas",["ground"]],
  [450,"Hippowdon",["ground"]],
  [451,"Skorupi",["poison", "bug"]],
  [452,"Drapion",["poison", "dark"]],
  [453,"Croagunk",["poison", "fighting"]],
  [454,"Toxicroak",["poison", "fighting"]],
  [455,"Carnivine",["grass"]],
  [456,"Finneon",["water"]],
  [457,"Lumineon",["water"]],
  [458,"Mantyke",["water", "flying"]],
  [459,"Snover",["grass", "ice"]],
  [460,"Abomasnow",["grass", "ice"]],
  [461,"Weavile",["dark", "ice"]],
  [462,"Magnezone",["electric", "steel"]],
  [463,"Lickilicky",["normal"]],
  [464,"Rhyperior",["ground", "rock"]],
  [465,"Tangrowth",["grass"]],
  [466,"Electivire",["electric"]],
  [467,"Magmortar",["fire"]],
  [468,"Togekiss",["fairy", "flying"]],
  [469,"Yanmega",["bug", "flying"]],
  [470,"Leafeon",["grass"]],
  [471,"Glaceon",["ice"]],
  [472,"Gliscor",["ground", "flying"]],
  [473,"Mamoswine",["ice", "ground"]],
  [474,"Porygon-Z",["normal"]],
  [475,"Gallade",["psychic", "fighting"]],
  [476,"Probopass",["rock", "steel"]],
  [477,"Dusknoir",["ghost"]],
  [478,"Froslass",["ice", "ghost"]],
  [479,"Rotom",["electric", "ghost"]],
  [480,"Uxie",["psychic"]],
  [481,"Mesprit",["psychic"]],
  [482,"Azelf",["psychic"]],
  [483,"Dialga",["steel", "dragon"]],
  [484,"Palkia",["water", "dragon"]],
  [485,"Heatran",["fire", "steel"]],
  [486,"Regigigas",["normal"]],
  [487,"Giratina",["ghost", "dragon"]],
  [488,"Cresselia",["psychic"]],
  [489,"Phione",["water"]],
  [490,"Manaphy",["water"]],
  [491,"Darkrai",["dark"]],
  [492,"Shaymin",["grass"]],
  [493,"Arceus",["normal"]],
  [494,"Victini",["psychic", "fire"]],
  [495,"Snivy",["grass"]],
  [496,"Servine",["grass"]],
  [497,"Serperior",["grass"]],
  [498,"Tepig",["fire"]],
  [499,"Pignite",["fire", "fighting"]],
  [500,"Emboar",["fire", "fighting"]],
  [501,"Oshawott",["water"]],
  [502,"Dewott",["water"]],
  [503,"Samurott",["water"]],
  [504,"Patrat",["normal"]],
  [505,"Watchog",["normal"]],
  [506,"Lillipup",["normal"]],
  [507,"Herdier",["normal"]],
  [508,"Stoutland",["normal"]],
  [509,"Purrloin",["dark"]],
  [510,"Liepard",["dark"]],
  [511,"Pansage",["grass"]],
  [512,"Simisage",["grass"]],
  [513,"Pansear",["fire"]],
  [514,"Simisear",["fire"]],
  [515,"Panpour",["water"]],
  [516,"Simipour",["water"]],
  [517,"Munna",["psychic"]],
  [518,"Musharna",["psychic"]],
  [519,"Pidove",["normal", "flying"]],
  [520,"Tranquill",["normal", "flying"]],
  [521,"Unfezant",["normal", "flying"]],
  [522,"Blitzle",["electric"]],
  [523,"Zebstrika",["electric"]],
  [524,"Roggenrola",["rock"]],
  [525,"Boldore",["rock"]],
  [526,"Gigalith",["rock"]],
  [527,"Woobat",["psychic", "flying"]],
  [528,"Swoobat",["psychic", "flying"]],
  [529,"Drilbur",["ground"]],
  [530,"Excadrill",["ground", "steel"]],
  [531,"Audino",["normal"]],
  [532,"Timburr",["fighting"]],
  [533,"Gurdurr",["fighting"]],
  [534,"Conkeldurr",["fighting"]],
  [535,"Tympole",["water"]],
  [536,"Palpitoad",["water", "ground"]],
  [537,"Seismitoad",["water", "ground"]],
  [538,"Throh",["fighting"]],
  [539,"Sawk",["fighting"]],
  [540,"Sewaddle",["bug", "grass"]],
  [541,"Swadloon",["bug", "grass"]],
  [542,"Leavanny",["bug", "grass"]],
  [543,"Venipede",["bug", "poison"]],
  [544,"Whirlipede",["bug", "poison"]],
  [545,"Scolipede",["bug", "poison"]],
  [546,"Cottonee",["grass", "fairy"]],
  [547,"Whimsicott",["grass", "fairy"]],
  [548,"Petilil",["grass"]],
  [549,"Lilligant",["grass"]],
  [550,"Basculin",["water"]],
  [551,"Sandile",["ground", "dark"]],
  [552,"Krokorok",["ground", "dark"]],
  [553,"Krookodile",["ground", "dark"]],
  [554,"Darumaka",["fire"]],
  [555,"Darmanitan",["fire"]],
  [556,"Maractus",["grass"]],
  [557,"Dwebble",["bug", "rock"]],
  [558,"Crustle",["bug", "rock"]],
  [559,"Scraggy",["dark", "fighting"]],
  [560,"Scrafty",["dark", "fighting"]],
  [561,"Sigilyph",["psychic", "flying"]],
  [562,"Yamask",["ghost"]],
  [563,"Cofagrigus",["ghost"]],
  [564,"Tirtouga",["water", "rock"]],
  [565,"Carracosta",["water", "rock"]],
  [566,"Archen",["rock", "flying"]],
  [567,"Archeops",["rock", "flying"]],
  [568,"Trubbish",["poison"]],
  [569,"Garbodor",["poison"]],
  [570,"Zorua",["dark"]],
  [571,"Zoroark",["dark"]],
  [572,"Minccino",["normal"]],
  [573,"Cinccino",["normal"]],
  [574,"Gothita",["psychic"]],
  [575,"Gothorita",["psychic"]],
  [576,"Gothitelle",["psychic"]],
  [577,"Solosis",["psychic"]],
  [578,"Duosion",["psychic"]],
  [579,"Reuniclus",["psychic"]],
  [580,"Ducklett",["water", "flying"]],
  [581,"Swanna",["water", "flying"]],
  [582,"Vanillite",["ice"]],
  [583,"Vanillish",["ice"]],
  [584,"Vanilluxe",["ice"]],
  [585,"Deerling",["normal", "grass"]],
  [586,"Sawsbuck",["normal", "grass"]],
  [587,"Emolga",["electric", "flying"]],
  [588,"Karrablast",["bug"]],
  [589,"Escavalier",["bug", "steel"]],
  [590,"Foongus",["grass", "poison"]],
  [591,"Amoonguss",["grass", "poison"]],
  [592,"Frillish",["water", "ghost"]],
  [593,"Jellicent",["water", "ghost"]],
  [594,"Alomomola",["water"]],
  [595,"Joltik",["bug", "electric"]],
  [596,"Galvantula",["bug", "electric"]],
  [597,"Ferroseed",["grass", "steel"]],
  [598,"Ferrothorn",["grass", "steel"]],
  [599,"Klink",["steel"]],
  [600,"Klang",["steel"]],
  [601,"Klinklang",["steel"]],
  [602,"Tynamo",["electric"]],
  [603,"Eelektrik",["electric"]],
  [604,"Eelektross",["electric"]],
  [605,"Elgyem",["psychic"]],
  [606,"Beheeyem",["psychic"]],
  [607,"Litwick",["ghost", "fire"]],
  [608,"Lampent",["ghost", "fire"]],
  [609,"Chandelure",["ghost", "fire"]],
  [610,"Axew",["dragon"]],
  [611,"Fraxure",["dragon"]],
  [612,"Haxorus",["dragon"]],
  [613,"Cubchoo",["ice"]],
  [614,"Beartic",["ice"]],
  [615,"Cryogonal",["ice"]],
  [616,"Shelmet",["bug"]],
  [617,"Accelgor",["bug"]],
  [618,"Stunfisk",["ground", "electric"]],
  [619,"Mienfoo",["fighting"]],
  [620,"Mienshao",["fighting"]],
  [621,"Druddigon",["dragon"]],
  [622,"Golett",["ground", "ghost"]],
  [623,"Golurk",["ground", "ghost"]],
  [624,"Pawniard",["dark", "steel"]],
  [625,"Bisharp",["dark", "steel"]],
  [626,"Bouffalant",["normal"]],
  [627,"Rufflet",["normal", "flying"]],
  [628,"Braviary",["normal", "flying"]],
  [629,"Vullaby",["dark", "flying"]],
  [630,"Mandibuzz",["dark", "flying"]],
  [631,"Heatmor",["fire"]],
  [632,"Durant",["bug", "steel"]],
  [633,"Deino",["dark", "dragon"]],
  [634,"Zweilous",["dark", "dragon"]],
  [635,"Hydreigon",["dark", "dragon"]],
  [636,"Larvesta",["bug", "fire"]],
  [637,"Volcarona",["bug", "fire"]],
  [638,"Cobalion",["steel", "fighting"]],
  [639,"Terrakion",["rock", "fighting"]],
  [640,"Virizion",["grass", "fighting"]],
  [641,"Tornadus",["flying"]],
  [642,"Thundurus",["electric", "flying"]],
  [643,"Reshiram",["dragon", "fire"]],
  [644,"Zekrom",["dragon", "electric"]],
  [645,"Landorus",["ground", "flying"]],
  [646,"Kyurem",["dragon", "ice"]],
  [647,"Keldeo",["water", "fighting"]],
  [648,"Meloetta",["normal", "psychic"]],
  [649,"Genesect",["bug", "steel"]],
  [650,"Chespin",["grass"]],
  [651,"Quilladin",["grass"]],
  [652,"Chesnaught",["grass", "fighting"]],
  [653,"Fennekin",["fire"]],
  [654,"Braixen",["fire"]],
  [655,"Delphox",["fire", "psychic"]],
  [656,"Froakie",["water"]],
  [657,"Frogadier",["water"]],
  [658,"Greninja",["water", "dark"]],
  [659,"Bunnelby",["normal"]],
  [660,"Diggersby",["normal", "ground"]],
  [661,"Fletchling",["normal", "flying"]],
  [662,"Fletchinder",["fire", "flying"]],
  [663,"Talonflame",["fire", "flying"]],
  [664,"Scatterbug",["bug"]],
  [665,"Spewpa",["bug"]],
  [666,"Vivillon",["bug", "flying"]],
  [667,"Litleo",["fire", "normal"]],
  [668,"Pyroar",["fire", "normal"]],
  [669,"Flabebe",["fairy"]],
  [670,"Floette",["fairy"]],
  [671,"Florges",["fairy"]],
  [672,"Skiddo",["grass"]],
  [673,"Gogoat",["grass"]],
  [674,"Pancham",["fighting"]],
  [675,"Pangoro",["fighting", "dark"]],
  [676,"Furfrou",["normal"]],
  [677,"Espurr",["psychic"]],
  [678,"Meowstic",["psychic"]],
  [679,"Honedge",["steel", "ghost"]],
  [680,"Doublade",["steel", "ghost"]],
  [681,"Aegislash",["steel", "ghost"]],
  [682,"Spritzee",["fairy"]],
  [683,"Aromatisse",["fairy"]],
  [684,"Swirlix",["fairy"]],
  [685,"Slurpuff",["fairy"]],
  [686,"Inkay",["dark", "psychic"]],
  [687,"Malamar",["dark", "psychic"]],
  [688,"Binacle",["rock", "water"]],
  [689,"Barbaracle",["rock", "water"]],
  [690,"Skrelp",["poison", "water"]],
  [691,"Dragalge",["poison", "dragon"]],
  [692,"Clauncher",["water"]],
  [693,"Clawitzer",["water"]],
  [694,"Helioptile",["electric", "normal"]],
  [695,"Heliolisk",["electric", "normal"]],
  [696,"Tyrunt",["rock", "dragon"]],
  [697,"Tyrantrum",["rock", "dragon"]],
  [698,"Amaura",["rock", "ice"]],
  [699,"Aurorus",["rock", "ice"]],
  [700,"Sylveon",["fairy"]],
  [701,"Hawlucha",["fighting", "flying"]],
  [702,"Dedenne",["electric", "fairy"]],
  [703,"Carbink",["rock", "fairy"]],
  [704,"Goomy",["dragon"]],
  [705,"Sliggoo",["dragon"]],
  [706,"Goodra",["dragon"]],
  [707,"Klefki",["steel", "fairy"]],
  [708,"Phantump",["ghost", "grass"]],
  [709,"Trevenant",["ghost", "grass"]],
  [710,"Pumpkaboo",["ghost", "grass"]],
  [711,"Gourgeist",["ghost", "grass"]],
  [712,"Bergmite",["ice"]],
  [713,"Avalugg",["ice"]],
  [714,"Noibat",["flying", "dragon"]],
  [715,"Noivern",["flying", "dragon"]],
  [716,"Xerneas",["fairy"]],
  [717,"Yveltal",["dark", "flying"]],
  [718,"Zygarde",["dragon", "ground"]],
  [719,"Diancie",["rock", "fairy"]],
  [720,"Hoopa",["psychic", "ghost"]],
  [721,"Volcanion",["fire", "water"]],
  [722,"Rowlet",["grass", "flying"]],
  [723,"Dartrix",["grass", "flying"]],
  [724,"Decidueye",["grass", "ghost"]],
  [725,"Litten",["fire"]],
  [726,"Torracat",["fire"]],
  [727,"Incineroar",["fire", "dark"]],
  [728,"Popplio",["water"]],
  [729,"Brionne",["water"]],
  [730,"Primarina",["water", "fairy"]],
  [731,"Pikipek",["normal", "flying"]],
  [732,"Trumbeak",["normal", "flying"]],
  [733,"Toucannon",["normal", "flying"]],
  [734,"Yungoos",["normal"]],
  [735,"Gumshoos",["normal"]],
  [736,"Grubbin",["bug"]],
  [737,"Charjabug",["bug", "electric"]],
  [738,"Vikavolt",["bug", "electric"]],
  [739,"Crabrawler",["fighting"]],
  [740,"Crabominable",["fighting", "ice"]],
  [741,"Oricorio",["fire", "flying"]],
  [742,"Cutiefly",["bug", "fairy"]],
  [743,"Ribombee",["bug", "fairy"]],
  [744,"Rockruff",["rock"]],
  [745,"Lycanroc",["rock"]],
  [746,"Wishiwashi",["water"]],
  [747,"Mareanie",["poison", "water"]],
  [748,"Toxapex",["poison", "water"]],
  [749,"Mudbray",["ground"]],
  [750,"Mudsdale",["ground"]],
  [751,"Dewpider",["water", "bug"]],
  [752,"Araquanid",["water", "bug"]],
  [753,"Fomantis",["grass"]],
  [754,"Lurantis",["grass"]],
  [755,"Morelull",["grass", "fairy"]],
  [756,"Shiinotic",["grass", "fairy"]],
  [757,"Salandit",["poison", "fire"]],
  [758,"Salazzle",["poison", "fire"]],
  [759,"Stufful",["normal", "fighting"]],
  [760,"Bewear",["normal", "fighting"]],
  [761,"Bounsweet",["grass"]],
  [762,"Steenee",["grass"]],
  [763,"Tsareena",["grass"]],
  [764,"Comfey",["fairy"]],
  [765,"Oranguru",["normal", "psychic"]],
  [766,"Passimian",["fighting"]],
  [767,"Wimpod",["bug", "water"]],
  [768,"Golisopod",["bug", "water"]],
  [769,"Sandygast",["ghost", "ground"]],
  [770,"Palossand",["ghost", "ground"]],
  [771,"Pyukumuku",["water"]],
  [772,"Type: Null",["normal"]],
  [773,"Silvally",["normal"]],
  [774,"Minior",["rock", "flying"]],
  [775,"Komala",["normal"]],
  [776,"Turtonator",["fire", "dragon"]],
  [777,"Togedemaru",["electric", "steel"]],
  [778,"Mimikyu",["ghost", "fairy"]],
  [779,"Bruxish",["water", "psychic"]],
  [780,"Drampa",["normal", "dragon"]],
  [781,"Dhelmise",["ghost", "grass"]],
  [782,"Jangmo-o",["dragon"]],
  [783,"Hakamo-o",["dragon", "fighting"]],
  [784,"Kommo-o",["dragon", "fighting"]],
  [785,"Tapu Koko",["electric", "fairy"]],
  [786,"Tapu Lele",["psychic", "fairy"]],
  [787,"Tapu Bulu",["grass", "fairy"]],
  [788,"Tapu Fini",["water", "fairy"]],
  [789,"Cosmog",["psychic"]],
  [790,"Cosmoem",["psychic"]],
  [791,"Solgaleo",["psychic", "steel"]],
  [792,"Lunala",["psychic", "ghost"]],
  [793,"Nihilego",["rock", "poison"]],
  [794,"Buzzwole",["bug", "fighting"]],
  [795,"Pheromosa",["bug", "fighting"]],
  [796,"Xurkitree",["electric"]],
  [797,"Celesteela",["steel", "flying"]],
  [798,"Kartana",["grass", "steel"]],
  [799,"Guzzlord",["dark", "dragon"]],
  [800,"Necrozma",["psychic"]],
  [801,"Magearna",["steel", "fairy"]],
  [802,"Marshadow",["fighting", "ghost"]],
  [803,"Poipole",["poison"]],
  [804,"Naganadel",["poison", "dragon"]],
  [805,"Stakataka",["rock", "steel"]],
  [806,"Blacephalon",["fire", "ghost"]],
  [807,"Zeraora",["electric"]],
  [808,"Meltan",["steel"]],
  [809,"Melmetal",["steel"]],
  [810,"Grookey",["grass"]],
  [811,"Thwackey",["grass"]],
  [812,"Rillaboom",["grass"]],
  [813,"Scorbunny",["fire"]],
  [814,"Raboot",["fire"]],
  [815,"Cinderace",["fire"]],
  [816,"Sobble",["water"]],
  [817,"Drizzile",["water"]],
  [818,"Inteleon",["water"]],
  [819,"Skwovet",["normal"]],
  [820,"Greedent",["normal"]],
  [821,"Rookidee",["flying"]],
  [822,"Corvisquire",["flying"]],
  [823,"Corviknight",["flying", "steel"]],
  [824,"Blipbug",["bug"]],
  [825,"Dottler",["bug", "psychic"]],
  [826,"Orbeetle",["bug", "psychic"]],
  [827,"Nickit",["dark"]],
  [828,"Thievul",["dark"]],
  [829,"Gossifleur",["grass"]],
  [830,"Eldegoss",["grass"]],
  [831,"Wooloo",["normal"]],
  [832,"Dubwool",["normal"]],
  [833,"Chewtle",["water"]],
  [834,"Drednaw",["water", "rock"]],
  [835,"Yamper",["electric"]],
  [836,"Boltund",["electric"]],
  [837,"Rolycoly",["rock"]],
  [838,"Carkol",["rock", "fire"]],
  [839,"Coalossal",["rock", "fire"]],
  [840,"Applin",["grass", "dragon"]],
  [841,"Flapple",["grass", "dragon"]],
  [842,"Appletun",["grass", "dragon"]],
  [843,"Silicobra",["ground"]],
  [844,"Sandaconda",["ground"]],
  [845,"Cramorant",["flying", "water"]],
  [846,"Arrokuda",["water"]],
  [847,"Barraskewda",["water"]],
  [848,"Toxel",["electric", "poison"]],
  [849,"Toxtricity",["electric", "poison"]],
  [850,"Sizzlipede",["fire", "bug"]],
  [851,"Centiskorch",["fire", "bug"]],
  [852,"Clobbopus",["fighting"]],
  [853,"Grapploct",["fighting"]],
  [854,"Sinistea",["ghost"]],
  [855,"Polteageist",["ghost"]],
  [856,"Hatenna",["psychic"]],
  [857,"Hattrem",["psychic"]],
  [858,"Hatterene",["psychic", "fairy"]],
  [859,"Impidimp",["dark", "fairy"]],
  [860,"Morgrem",["dark", "fairy"]],
  [861,"Grimmsnarl",["dark", "fairy"]],
  [862,"Obstagoon",["dark", "normal"]],
  [863,"Perrserker",["steel"]],
  [864,"Cursola",["ghost"]],
  [865,"Sirfetchd",["fighting"]],
  [866,"Mr. Rime",["ice", "psychic"]],
  [867,"Runerigus",["ground", "ghost"]],
  [868,"Milcery",["fairy"]],
  [869,"Alcremie",["fairy"]],
  [870,"Falinks",["fighting"]],
  [871,"Pincurchin",["electric"]],
  [872,"Snom",["ice", "bug"]],
  [873,"Frosmoth",["ice", "bug"]],
  [874,"Stonjourner",["rock"]],
  [875,"Eiscue",["ice"]],
  [876,"Indeedee",["psychic", "normal"]],
  [877,"Morpeko",["electric", "dark"]],
  [878,"Cufant",["steel"]],
  [879,"Copperajah",["steel"]],
  [880,"Dracozolt",["electric", "dragon"]],
  [881,"Arctozolt",["electric", "ice"]],
  [882,"Dracovish",["water", "dragon"]],
  [883,"Arctovish",["water", "ice"]],
  [884,"Duraludon",["steel", "dragon"]],
  [885,"Dreepy",["dragon", "ghost"]],
  [886,"Drakloak",["dragon", "ghost"]],
  [887,"Dragapult",["dragon", "ghost"]],
  [888,"Zacian",["fairy"]],
  [889,"Zamazenta",["fighting"]],
  [890,"Eternatus",["poison", "dragon"]],
  [891,"Kubfu",["fighting"]],
  [892,"Urshifu",["fighting", "dark"]],
  [893,"Zarude",["dark", "grass"]],
  [894,"Regieleki",["electric"]],
  [895,"Regidrago",["dragon"]],
  [896,"Glastrier",["ice"]],
  [897,"Spectrier",["ghost"]],
  [898,"Calyrex",["psychic", "grass"]],
  [899,"Wyrdeer",["normal", "psychic"]],
  [900,"Kleavor",["bug", "rock"]],
  [901,"Ursaluna",["ground", "normal"]],
  [902,"Basculegion",["water", "ghost"]],
  [903,"Sneasler",["fighting", "poison"]],
  [904,"Overqwil",["dark", "poison"]],
  [905,"Enamorus",["fairy", "flying"]],
  [906,"Sprigatito",["grass"]],
  [907,"Floragato",["grass"]],
  [908,"Meowscarada",["grass", "dark"]],
  [909,"Fuecoco",["fire"]],
  [910,"Crocalor",["fire"]],
  [911,"Skeledirge",["fire", "ghost"]],
  [912,"Quaxly",["water"]],
  [913,"Quaxwell",["water"]],
  [914,"Quaquaval",["water", "fighting"]],
  [915,"Lechonk",["normal"]],
  [916,"Oinkologne",["normal"]],
  [917,"Tarountula",["bug"]],
  [918,"Spidops",["bug"]],
  [919,"Nymble",["bug"]],
  [920,"Lokix",["bug", "dark"]],
  [921,"Pawmi",["electric"]],
  [922,"Pawmo",["electric", "fighting"]],
  [923,"Pawmot",["electric", "fighting"]],
  [924,"Tandemaus",["normal"]],
  [925,"Maushold",["normal"]],
  [926,"Fidough",["fairy"]],
  [927,"Dachsbun",["fairy"]],
  [928,"Smoliv",["grass", "normal"]],
  [929,"Dolliv",["grass", "normal"]],
  [930,"Arboliva",["grass", "normal"]],
  [931,"Squawkabilly",["normal", "flying"]],
  [932,"Nacli",["rock"]],
  [933,"Naclstack",["rock"]],
  [934,"Garganacl",["rock"]],
  [935,"Charcadet",["fire"]],
  [936,"Armarouge",["fire", "psychic"]],
  [937,"Ceruledge",["fire", "ghost"]],
  [938,"Tadbulb",["electric"]],
  [939,"Bellibolt",["electric"]],
  [940,"Wattrel",["electric", "flying"]],
  [941,"Kilowattrel",["electric", "flying"]],
  [942,"Maschiff",["dark"]],
  [943,"Mabosstiff",["dark"]],
  [944,"Shroodle",["poison", "normal"]],
  [945,"Grafaiai",["poison", "normal"]],
  [946,"Bramblin",["grass", "ghost"]],
  [947,"Brambleghast",["grass", "ghost"]],
  [948,"Toedscool",["ground", "grass"]],
  [949,"Toedscruel",["ground", "grass"]],
  [950,"Klawf",["rock"]],
  [951,"Capsakid",["grass"]],
  [952,"Scovillain",["grass", "fire"]],
  [953,"Rellor",["bug"]],
  [954,"Rabsca",["bug", "psychic"]],
  [955,"Flittle",["psychic"]],
  [956,"Espathra",["psychic"]],
  [957,"Tinkatink",["fairy", "steel"]],
  [958,"Tinkatuff",["fairy", "steel"]],
  [959,"Tinkaton",["fairy", "steel"]],
  [960,"Wiglett",["water"]],
  [961,"Wugtrio",["water"]],
  [962,"Bombirdier",["flying", "dark"]],
  [963,"Finizen",["water"]],
  [964,"Palafin",["water"]],
  [965,"Varoom",["steel", "poison"]],
  [966,"Revavroom",["steel", "poison"]],
  [967,"Cyclizar",["dragon", "normal"]],
  [968,"Orthworm",["steel"]],
  [969,"Glimmet",["rock", "poison"]],
  [970,"Glimmora",["rock", "poison"]],
  [971,"Greavard",["ghost"]],
  [972,"Houndstone",["ghost"]],
  [973,"Flamigo",["flying", "fighting"]],
  [974,"Cetoddle",["ice"]],
  [975,"Cetitan",["ice"]],
  [976,"Veluza",["water", "psychic"]],
  [977,"Dondozo",["water"]],
  [978,"Tatsugiri",["dragon", "water"]],
  [979,"Annihilape",["fighting", "ghost"]],
  [980,"Clodsire",["poison", "ground"]],
  [981,"Farigiraf",["normal", "psychic"]],
  [982,"Dudunsparce",["normal"]],
  [983,"Kingambit",["dark", "steel"]],
  [984,"Great Tusk",["ground", "fighting"]],
  [985,"Scream Tail",["fairy", "psychic"]],
  [986,"Brute Bonnet",["grass", "dark"]],
  [987,"Flutter Mane",["ghost", "fairy"]],
  [988,"Slither Wing",["bug", "fighting"]],
  [989,"Sandy Shocks",["electric", "ground"]],
  [990,"Iron Treads",["ground", "steel"]],
  [991,"Iron Bundle",["ice", "water"]],
  [992,"Iron Hands",["fighting", "electric"]],
  [993,"Iron Jugulis",["dark", "flying"]],
  [994,"Iron Moth",["fire", "poison"]],
  [995,"Iron Thorns",["rock", "electric"]],
  [996,"Frigibax",["dragon", "ice"]],
  [997,"Arctibax",["dragon", "ice"]],
  [998,"Baxcalibur",["dragon", "ice"]],
  [999,"Gimmighoul",["ghost"]],
  [1000,"Gholdengo",["steel", "ghost"]],
  [1001,"Wo-Chien",["dark", "grass"]],
  [1002,"Chien-Pao",["dark", "ice"]],
  [1003,"Ting-Lu",["dark", "ground"]],
  [1004,"Chi-Yu",["dark", "fire"]],
  [1005,"Roaring Moon",["dragon", "dark"]],
  [1006,"Iron Valiant",["fairy", "fighting"]],
  [1007,"Koraidon",["fighting", "dragon"]],
  [1008,"Miraidon",["electric", "dragon"]],
  [1009,"Walking Wake",["water", "dragon"]],
  [1010,"Iron Leaves",["grass", "psychic"]],
  [1011,"Dipplin",["grass", "dragon"]],
  [1012,"Poltchageist",["grass", "ghost"]],
  [1013,"Sinistcha",["grass", "ghost"]],
  [1014,"Okidogi",["poison", "fighting"]],
  [1015,"Munkidori",["poison", "psychic"]],
  [1016,"Fezandipiti",["poison", "fairy"]],
  [1017,"Ogerpon",["grass"]],
  [1018,"Archaludon",["steel", "dragon"]],
  [1019,"Hydrapple",["grass", "dragon"]],
  [1020,"Gouging Fire",["fire", "dragon"]],
  [1021,"Raging Bolt",["electric", "dragon"]],
  [1022,"Iron Boulder",["rock", "psychic"]],
  [1023,"Iron Crown",["steel", "psychic"]],
  [1024,"Terapagos",["normal"]],
  [1025,"Pecharunt",["poison", "ghost"]],
];

const ALL_SPECIES = ALL_SPECIES_DATA.map(([id, name, types]) => ({ id, name, types }));

function getRegionPokemon(slug) {
  const reg = getRegionBySlug(slug);
  if (!reg) return [];
  return ALL_SPECIES.filter(p => p.id >= reg.start && p.id <= reg.end);
}

function getSpeciesById(id) {
  const num = Number(id);
  if (!num || num < 1 || num > 1025) return null;
  return ALL_SPECIES[num - 1] || null;
}

// 扩展全局暴露
window.ALL_SPECIES = ALL_SPECIES;
window.getRegionPokemon = getRegionPokemon;
window.getSpeciesById = getSpeciesById;
```

---

### 3.3 `js/regions.js` (地区实地探索地图与生态点位交互)

- **文件路径**: `js/regions.js`  
- **代码行数**: 270 行  
- **文件大小**: 10,910 字节  

```javascript
/**
 * 151 FILE — Regions Logic
 * 遵循 pokemon-web-project-plan.md §4.7 与目录规划
 * 交互式地区实地探索地图与地区图鉴卡片联动
 */

document.addEventListener("DOMContentLoaded", () => {
  const atlasEl = document.getElementById("atlas");
  const selector = document.getElementById("region-selector");
  const mapImg = document.getElementById("active-map-img");
  const titleEl = document.getElementById("current-region-title");
  const descEl = document.getElementById("current-region-desc");
  const dexBtn = document.getElementById("open-region-dex-btn");
  const mapStage = document.getElementById("map-stage");
  const pinsLayer = document.getElementById("pins-layer");
  const popover = document.getElementById("recon-popover");
  const popoverClose = document.getElementById("recon-close-btn");
  const popoverType = document.getElementById("recon-type");
  const popoverName = document.getElementById("recon-name");
  const popoverDesc = document.getElementById("recon-desc");
  const popoverPokes = document.getElementById("recon-pokemons");
  const mobileMapQuery = window.matchMedia("(max-width: 48rem)");
  const mapLandmarkList = document.createElement("div");
  mapLandmarkList.className = "map-landmark-list";
  mapLandmarkList.setAttribute("role", "group");
  mapLandmarkList.setAttribute("aria-label", "Map landmarks");
  let activeLandmarkIndex = null;
  let activeTrigger = null;
  let activeRegionLandmarks = [];

  if (!window.REGIONS) return;

  function getSpeciesName(id) {
    return window.getSpeciesById?.(id)?.name || `#${id}`;
  }

  function syncPopoverPlacement() {
    if (!mapStage || !popover) return;
    if (mobileMapQuery.matches) {
      if (mapStage.nextElementSibling !== mapLandmarkList) {
        mapStage.insertAdjacentElement("afterend", mapLandmarkList);
      }
      popover.classList.add("is-below-map");
      mapLandmarkList.insertAdjacentElement("afterend", popover);
      ["left", "right", "top", "bottom"].forEach(side => popover.style.removeProperty(side));
      return;
    }

    popover.classList.remove("is-below-map");
    mapStage.appendChild(popover);
    if (activeLandmarkIndex !== null) {
      positionPopover(activeRegionLandmarks[activeLandmarkIndex]);
    }
  }

  function positionPopover(lm) {
    if (!mapStage || !popover || !lm || mobileMapQuery.matches) return;
    const stageWidth = mapStage.clientWidth;
    const stageHeight = mapStage.clientHeight;
    const popoverWidth = popover.offsetWidth;
    const popoverHeight = popover.offsetHeight;
    const pinX = stageWidth * (lm.x / 100);
    const pinY = stageHeight * (lm.y / 100);
    const preferredLeft = pinX > stageWidth * 0.56
      ? pinX - popoverWidth - 14
      : pinX + 14;
    const preferredTop = pinY > stageHeight * 0.58
      ? pinY - popoverHeight - 14
      : pinY + 10;

    popover.style.right = "auto";
    popover.style.bottom = "auto";
    popover.style.left = `${Math.max(0, Math.min(preferredLeft, stageWidth - popoverWidth))}px`;
    popover.style.top = `${Math.max(0, Math.min(preferredTop, stageHeight - popoverHeight))}px`;
  }

  function setExpandedLandmark(index) {
    pinsLayer?.querySelectorAll(".map-pin").forEach(pin => {
      pin.setAttribute("aria-expanded", String(Number(pin.dataset.idx) === index));
    });
    mapLandmarkList.querySelectorAll(".map-landmark-button").forEach(button => {
      button.setAttribute("aria-expanded", String(Number(button.dataset.idx) === index));
    });
  }

  function focusLandmarkControl(index, preferred) {
    const isVisible = element => element?.isConnected && element.getClientRects().length > 0;
    if (isVisible(preferred)) {
      preferred.focus({ preventScroll: true });
      return;
    }
    const fallback = mobileMapQuery.matches
      ? mapLandmarkList.querySelector(`.map-landmark-button[data-idx="${index}"]`)
      : pinsLayer?.querySelector(`.map-pin[data-idx="${index}"]`);
    if (isVisible(fallback)) fallback.focus({ preventScroll: true });
  }

  if (selector) {
    selector.innerHTML = window.REGIONS.map(r => `
      <option value="${r.slug}">${r.name} (#${String(r.start).padStart(3, "0")}–${r.end})</option>
    `).join("");
  }

  function renderInteractiveMap(region) {
    if (selector) selector.value = region.slug;
    if (mapImg) {
      mapImg.src = `assets/maps/${region.slug}.webp`;
      mapImg.alt = `${region.name} Regional Map`;
    }
    if (titleEl) titleEl.textContent = `${region.name} Habitat Recon`;
    if (descEl) descEl.textContent = region.line || `Detailed geographical survey covering #${region.start} through #${region.end}.`;
    if (dexBtn) {
      dexBtn.href = `pokedex.html?region=${region.slug}`;
      dexBtn.textContent = `Explore ${region.name} Dex →`;
    }

    closePopover();

    const landmarks = region.landmarks || [];
    activeRegionLandmarks = landmarks;
    if (pinsLayer) {
      pinsLayer.innerHTML = landmarks.map((lm, idx) => `
        <button class="map-pin" type="button" data-idx="${idx}" style="left: ${lm.x}%; top: ${lm.y}%;" aria-label="${lm.name}" aria-controls="recon-popover" aria-expanded="false">
          <span class="map-pin-pulse"></span>
          <span class="map-pin-core"></span>
          <span class="map-pin-label">${lm.name}</span>
        </button>
      `).join("");

      pinsLayer.querySelectorAll(".map-pin").forEach(pinBtn => {
        pinBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const idx = Number(pinBtn.dataset.idx);
          const lm = landmarks[idx];
          if (!lm) return;
          showPopover(lm, pinBtn, idx);
        });
      });
    }

    mapLandmarkList.innerHTML = landmarks.map((lm, idx) => `
      <button class="map-landmark-button" type="button" data-idx="${idx}" aria-controls="recon-popover" aria-expanded="false">${lm.name}</button>
    `).join("");
    mapLandmarkList.querySelectorAll(".map-landmark-button").forEach(button => {
      button.addEventListener("click", () => {
        const idx = Number(button.dataset.idx);
        const lm = landmarks[idx];
        if (lm) showPopover(lm, button, idx);
      });
    });
    syncPopoverPlacement();
  }

  function showPopover(lm, trigger, index) {
    if (!popover) return;
    closePopover();
    activeLandmarkIndex = index;
    activeTrigger = trigger;
    if (popoverType) popoverType.textContent = lm.type || "Habitat";
    if (popoverName) popoverName.textContent = lm.name;
    if (popoverDesc) popoverDesc.textContent = lm.desc || "";

    if (popoverPokes) {
      popoverPokes.innerHTML = (lm.pokemons || []).map(id => {
        const name = getSpeciesName(id);
        const artUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        return `
          <a class="recon-poke-card" href="pokemon.html?id=${id}" title="Open #${id} ${name}">
            <img src="${artUrl}" alt="${name}" loading="lazy">
            <span class="id">#${String(id).padStart(3, "0")}</span>
            <span class="name">${name}</span>
          </a>
        `;
      }).join("");
    }

    popover.hidden = false;
    setExpandedLandmark(index);
    positionPopover(lm);
    popoverClose?.focus({ preventScroll: !mobileMapQuery.matches });
  }

  function closePopover(restoreFocus = false) {
    if (popover) popover.hidden = true;
    const closedIndex = activeLandmarkIndex;
    const trigger = activeTrigger;
    setExpandedLandmark(null);
    activeLandmarkIndex = null;
    activeTrigger = null;
    if (restoreFocus && closedIndex !== null) focusLandmarkControl(closedIndex, trigger);
  }

  popoverClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopover(true);
  });

  mapStage?.addEventListener("click", (e) => {
    if (!e.target.closest(".recon-popover") && !e.target.closest(".map-pin")) {
      closePopover();
    }
  });

  mapStage?.setAttribute("role", "group");
  mapStage?.setAttribute("aria-label", "Interactive regional map");
  popover?.setAttribute("role", "region");
  popover?.setAttribute("aria-labelledby", "recon-name");
  if (mapStage) mapStage.insertAdjacentElement("afterend", mapLandmarkList);
  window.addEventListener("resize", () => {
    if (activeLandmarkIndex !== null) {
      positionPopover(activeRegionLandmarks[activeLandmarkIndex]);
    }
  });
  const onMapBreakpointChange = () => syncPopoverPlacement();
  if (mobileMapQuery.addEventListener) {
    mobileMapQuery.addEventListener("change", onMapBreakpointChange);
  } else {
    mobileMapQuery.addListener(onMapBreakpointChange);
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && popover && !popover.hidden) {
      e.preventDefault();
      closePopover(true);
    }
  });

  selector?.addEventListener("change", (e) => {
    const slug = e.target.value;
    const found = window.REGIONS.find(r => r.slug === slug);
    if (found) renderInteractiveMap(found);
  });

  if (atlasEl) {
    atlasEl.innerHTML = window.REGIONS.map(r => `
      <a class="region-card" href="#interactive-map-section" data-slug="${r.slug}" aria-label="Inspect ${r.name} map, Pokédex numbers ${r.start} through ${r.end}" style="cursor:pointer;">
        <div class="map-thumb">
          <img src="assets/maps/${r.slug}.webp" alt="${r.name} Official Map" loading="lazy" width="272" height="185">
        </div>
        <div class="region-info">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
            <div>
              <p class="name">${r.name}</p>
              <p class="ids">#${String(r.start).padStart(3, "0")}–${r.end} · ${r.count} files</p>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${r.preview}.png" alt="" width="48" height="48" loading="lazy" style="filter:drop-shadow(0 4px 6px rgba(0,0,0,0.3)); flex-shrink:0;">
          </div>
          <p class="soft" style="font-size:0.8125rem; margin-top:0.4rem; color:var(--ink-soft); line-height:1.4;">${r.line}</p>
          <div style="margin-top:0.5rem; display:flex; gap:0.5rem; align-items:center;">
            <span style="font-family:var(--font-num); font-size:0.75rem; color:var(--mark); font-weight:700;">Inspect Recon Map ↗</span>
          </div>
        </div>
      </a>
    `).join("");

    atlasEl.querySelectorAll(".region-card").forEach(card => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const slug = card.dataset.slug;
        const r = window.REGIONS.find(x => x.slug === slug);
        if (r) {
          renderInteractiveMap(r);
          document.getElementById("interactive-map-section")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }
      });
    });
  }

  renderInteractiveMap(window.REGIONS[0]);
});
```

---

### 3.4 `js/types-chart.js` (18×18 属性克制常数矩阵)

- **文件路径**: `js/types-chart.js`  
- **代码行数**: 118 行  
- **文件大小**: 4,464 字节  

```javascript
/**
 * 151 FILE — Types Chart (18×18 官方属性克制表)
 * 遵循 pokemon-web-project-plan.md §4.4 与 §7
 * Types 页面与 Lineup 阵容推演共用
 */

(function (window) {
  const TYPES = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy"
  ];

  const TYPE_COLORS = {
    normal: "#A8A878", fire: "#F08030", water: "#6890F0", electric: "#F8D030",
    grass: "#78C850", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
    ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
    rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
    steel: "#B8B8D0", fairy: "#EE99AC"
  };

  const WHITE_TEXT_TYPES = new Set([
    "fighting", "poison", "ghost", "dragon", "dark"
  ]);

  /* 攻击方 -> 防御方 -> 倍率 (缺省值为 1) */
  const ATTACK_MULTIPLIERS = {
    normal: { rock: 0.5, ghost: 0, steel: 0.5 },
    fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
    water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
    electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
    grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
    ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
    fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
    poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
    ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
    flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
    psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
    bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
    rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
    ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
    dragon: { dragon: 2, steel: 0.5, fairy: 0 },
    dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
    steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
    fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
  };

  /**
   * 单对单克制倍率查询
   */
  function getEffectiveness(atk, def) {
    if (!atk || !def) return 1;
    const a = atk.toLowerCase();
    const d = def.toLowerCase();
    return (ATTACK_MULTIPLIERS[a] && ATTACK_MULTIPLIERS[a][d]) ?? 1;
  }

  /**
   * 防御方复合属性倍率（用于 Lineup 阵容推演与防御盲点分析）
   * defenderTypes 可以是单个属性或数组，如 ["fire", "flying"]
   */
  function getDefensiveMultiplier(atk, defenderTypes) {
    if (!atk || !defenderTypes) return 1;
    const types = Array.isArray(defenderTypes) ? defenderTypes : [defenderTypes];
    if (types.length === 0) return 1;
    return types.reduce((acc, def) => acc * getEffectiveness(atk, def), 1);
  }

  /**
   * 倍率对应的 CSS class
   */
  function getMultiplierClass(m) {
    if (m >= 4) return "x4";
    if (m === 2) return "x2";
    if (m === 0.5) return "xh";
    if (m === 0.25) return "xq";
    if (m === 0) return "x0";
    return "";
  }

  /**
   * 倍率展示文本
   */
  function getMultiplierLabel(m) {
    if (m >= 4) return "4";
    if (m === 2) return "2";
    if (m === 0.5) return "½";
    if (m === 0.25) return "¼";
    if (m === 0) return "0";
    return "";
  }

  /**
   * 属性胶囊的内联样式（背景色 + 对比文字色），Dex 与详情页共用
   */
  function getTypeStyle(t) {
    const bg = TYPE_COLORS[t] || "#3A6A88";
    const white = WHITE_TEXT_TYPES.has(t);
    return `background:${bg}; color:${white ? "#ffffff" : "#071422"};`;
  }

  const typesChart = {
    TYPES,
    TYPE_COLORS,
    WHITE_TEXT_TYPES,
    getTypeStyle,
    ATTACK_MULTIPLIERS,
    getEffectiveness,
    getDefensiveMultiplier,
    getMultiplierClass,
    getMultiplierLabel
  };

  window.TYPES_CHART = typesChart;
  window.TYPES = TYPES;
  window.TYPE_COLORS = TYPE_COLORS;
})(typeof window !== "undefined" ? window : global);
```

---

### 3.5 `js/pokeball.js` (精灵球开合音效与转场控制)

- **文件路径**: `js/pokeball.js`  
- **代码行数**: 138 行  
- **文件大小**: 4,724 字节  

```javascript
/**
 * 151 FILE — Pokeball & Navigation Behaviors (Night Archive)
 *
 * 核心交互：
 * 1. 首页进站大球 Wobble 动画（最多 3 下，800ms 内停；reduced-motion 禁用）
 * 2. 点大球进 Dex（带默认关都区域 ?region=kanto）
 * 3. 顶栏随滚动轻霜效果（is-over-content）
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. 顶栏滚动检测（内容穿过顶栏时施加轻霜）
  const siteBar = document.querySelector(".site-bar");
  if (siteBar) {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        siteBar.classList.add("is-over-content");
      } else {
        siteBar.classList.remove("is-over-content");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 2. 首页大球 Wobble 与点击跳转
  const heroBall = document.getElementById("hero-ball");
  if (heroBall) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      heroBall.classList.add("is-wobble");
      heroBall.addEventListener(
        "animationend",
        () => {
          heroBall.classList.remove("is-wobble");
        },
        { once: true }
      );
    }

    heroBall.addEventListener("click", () => {
      window.location.href = "pokedex.html?region=kanto";
    });
  }

  // 3. 首页代表标本 3D 景深悬浮与触碰叫声反馈 (Pokémon GO Style)
  const specimenTiles = document.querySelectorAll(".file-tile");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  specimenTiles.forEach((tile) => {
    const id = tile.dataset.id;
    const imgStage = tile.querySelector(".img-stage");
    const specimenImg = tile.querySelector(".specimen-img");
    const pedestal = tile.querySelector(".stage-pedestal");
    const shadow = tile.querySelector(".stage-shadow");
    const cryRing = tile.querySelector(".cry-ring");

    if (!imgStage || !specimenImg) return;

    // 3.1 鼠标移动 3D 景深悬浮视差
    if (!prefersReducedMotion) {
      tile.addEventListener("mousemove", (e) => {
        const rect = tile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 9;
        const rotateY = ((x - centerX) / centerX) * 11;

        tile.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;

        if (shadow && pedestal) {
          const shiftX = (-rotateY * 0.9).toFixed(1);
          shadow.style.transform = `rotateX(65deg) translateX(${shiftX}px)`;
          pedestal.style.transform = `rotateX(65deg) translateX(${shiftX * 0.6}px)`;
        }
      });

      tile.addEventListener("mouseleave", () => {
        tile.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
        if (shadow) shadow.style.transform = "rotateX(65deg) translateX(0)";
        if (pedestal) pedestal.style.transform = "rotateX(65deg) translateX(0)";
      });
    }

    // 3.2 点击宝可梦立绘区域：触碰动作 + PokeAPI 官方 Cry 叫声
    let isActing = false;
    imgStage.addEventListener("click", (e) => {
      // 阻止 <a> 标签立即导航，触发微交互
      e.preventDefault();
      e.stopPropagation();

      if (isActing) return;
      isActing = true;

      // 播放 PokeAPI 官方 Cry 叫声（音量 0.35）
      if (id) {
        try {
          const cryAudio = new Audio(
            `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`
          );
          cryAudio.volume = 0.35;
          cryAudio.play().catch(() => {});
        } catch (_) {}
      }

      // 声波扩散光环
      if (cryRing) {
        cryRing.classList.remove("is-animating");
        void cryRing.offsetWidth;
        cryRing.classList.add("is-animating");
      }

      // 随机动作：突击前冲 / 翻转欢呼 / 摇晃受击
      const actions = ["anim-attack", "anim-cheer", "anim-wobble"];
      const action = actions[Math.floor(Math.random() * actions.length)];

      specimenImg.classList.add(action);

      // 地台光影随跳跃收缩与淡化
      if (shadow) {
        shadow.style.transform = "rotateX(65deg) scale(0.65)";
        shadow.style.opacity = "0.3";
      }

      setTimeout(() => {
        specimenImg.classList.remove(action);
        if (shadow) {
          shadow.style.transform = "rotateX(65deg) scale(1)";
          shadow.style.opacity = "0.65";
        }
        isActing = false;
      }, 600);
    });
  });
});
```

---

### 3.6 `js/pokedex.js` (名录+胶片双视图/全1025只图鉴渲染)

- **文件路径**: `js/pokedex.js`  
- **代码行数**: 602 行  
- **文件大小**: 24,036 字节  

```javascript
/**
 * 151 FILE — Dex Page Logic (Spine + Ledger + Stage + Film)
 * 遵循 pokemon-web-project-plan.md §4.2 与 §7
 * 默认关都 151，只从 Regions 进入其他地区
 */

// 地区预置数据引用
const KANTO_PRESET = (typeof window !== "undefined" && window.getRegionPokemon ? window.getRegionPokemon("kanto") : []) || [];

// 属性色票与字色统一来自 types-chart.js（这里不再维护第二份，之前漏了 dark）
const tc = window.TYPES_CHART;
const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

// URL 查询参数
const params = new URLSearchParams(location.search);
const requestedRegionSlug = (params.get("region") || "").trim().toLowerCase();
const validRegionSlug = requestedRegionSlug === "all" || requestedRegionSlug === "national" ||
  (window.REGIONS || []).some(region => region.slug === requestedRegionSlug);
const initialRegionSlug = !requestedRegionSlug || validRegionSlug ? (requestedRegionSlug || "kanto") : "kanto";
const currentRegion = window.getRegionBySlug ? window.getRegionBySlug(initialRegionSlug) : { slug: "kanto", name: "Kanto", start: 1, end: 151, offset: 0, limit: 151 };

// 当前地区的 50 序号一段书脊分段
let SPINES = window.getRegionSpines ? window.getRegionSpines(currentRegion.start, currentRegion.end) : [[1, 50]];

// 响应式应用状态
const state = {
  displayMode: "ledger",
  region: currentRegion,
  type: params.get("type"),
  resist: params.get("resist"),
  q: params.get("q") || "",
  rawList: [],    // 当前地区拉取到的全部名单
  list: [],       // 经筛选后的当前展示名单
  i: 0,
  range: SPINES[0] || [1, 50],
  listRev: 0,
  numberBuffer: ""
};
let filmRev = -1;
let gridRev = -1;

// 方便测试与控制台交互
if (typeof window !== "undefined") {
  window.__dexState = state;
}

// 本地存储统一走 store.js（隐私模式下会抛错，那里已经处理）
const seen = () => window.store.seen();
const belt = () => window.store.belt();
const markSeen = (id) => window.store.markSeen(id);

// 把当前筛选写回地址栏，方便复制链接
function syncUrl() {
  const u = new URL(location.href);
  const set = (k, v) => (v ? u.searchParams.set(k, v) : u.searchParams.delete(k));
  set("region", state.region.slug === "all" ? "" : state.region.slug);
  set("type", state.type);
  set("resist", state.resist);
  set("q", state.q);
  history.replaceState(null, "", u.toString());
}

function current() {
  return state.list[state.i] || null;
}

// 过滤列表计算（当前地区 ∩ 当前筛选）。名录里已有 types，不需要再请求 /type/{name}。
function applyFilter() {
  const keepId = current()?.id;

  state.list = state.rawList.filter(p => {
    if (state.type && !p.types.includes(state.type)) return false;

    // 抗性过滤 (?resist=)：只留下对该属性防御倍率 ≤ 0.5 的
    if (state.resist && tc) {
      if (tc.getDefensiveMultiplier(state.resist, p.types) > 0.5) return false;
    }

    // 搜索过滤：名称包含或编号相等
    if (state.q) {
      const q = state.q.toLowerCase().trim();
      const matchName = p.name.toLowerCase().includes(q);
      const matchId = String(p.id) === q || String(p.id).padStart(3, "0") === q;
      if (!matchName && !matchId) return false;
    }

    return true;
  });

  state.listRev++;
  const keep = state.list.findIndex(p => p.id === keepId);
  state.i = keep >= 0 ? keep : 0;
  const selectedId = current()?.id;
  if (selectedId != null) {
    state.range = SPINES.find(([a, b]) => selectedId >= a && selectedId <= b) || state.range;
  }
}

// 切换选中的宝可梦索引
function selectIndex(i) {
  if (!state.list.length) { render(); return; }
  state.i = Math.max(0, Math.min(state.list.length - 1, i));
  const id = current().id;
  const spine = SPINES.find(([a, b]) => id >= a && id <= b) || state.range;
  state.range = spine;
  render();
}

function renderNumberBuffer() {
  const bufferEl = document.getElementById("number-buffer");
  if (!bufferEl) return;
  bufferEl.hidden = !state.numberBuffer;
  bufferEl.textContent = state.numberBuffer ? `_${state.numberBuffer}` : "";
}

function clearNumberBuffer() {
  state.numberBuffer = "";
  renderNumberBuffer();
}

function clearFilterAndSearch() {
  state.q = "";
  state.type = null;
  state.resist = null;
  const qInput = document.getElementById("q");
  if (qInput) qInput.value = "";
  applyFilter();
  render();
  syncUrl();
}

function selectBufferedNumber() {
  if (!state.numberBuffer) return false;
  const id = Number(state.numberBuffer);
  const hit = state.list.findIndex(p => p.id === id);
  clearNumberBuffer();
  if (hit < 0) return false;
  selectIndex(hit);
  return true;
}

// 加入腰带 (最多 6 只)
function addBelt(id) {
  if (!window.store.addBelt(id)) return;
  render();
}

const pad3 = (n) => String(n).padStart(3, "0");
const artOf = (id) => window.pokeApi.artUrl(id);
const dexScrollBehavior = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
// 列表/网格只显示 ~96px：优先用本地 192px 缩略图（scripts/make-thumbs.mjs 生成），缺失时回退到远程大图
const thumbOf = (id) => `assets/thumbs/${id}.webp`;
// 注意：api.js 的全局兜底已占用 data-fallback，这里用 data-full；且只处理“缩略图”失败，别截断它的兜底链
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName !== "IMG" || !img.dataset.full) return;
  if (!(img.getAttribute("src") || "").startsWith("assets/thumbs/")) return;
  img.src = img.dataset.full;
}, true);

// 网格里的“看过 / 在腰带上”标记就地更新，不重画 1025 张卡
function syncGridMarks() {
  const gridEl = document.getElementById("dex-grid-view");
  if (!gridEl) return;
  const onBelt = new Set(belt());
  const saw = new Set(seen());
  gridEl.querySelectorAll(".dex-card").forEach(card => {
    const id = Number(card.dataset.id);
    const on = onBelt.has(id);
    const hasSeen = saw.has(id);
    card.classList.toggle("seen", hasSeen);
    card.classList.toggle("on-belt", on);

    // 角落点：已看过点 (navy)、腰带点 (ball red)
    let dots = card.querySelector(".card-dots");
    if (!dots) {
      card.insertAdjacentHTML("afterbegin", '<div class="card-dots"><i class="dot seen" title="seen"></i><i class="dot belt" title="belt"></i></div>');
      dots = card.querySelector(".card-dots");
    }
    const dotSeen = dots.querySelector(".dot.seen");
    const dotBelt = dots.querySelector(".dot.belt");
    if (dotSeen) dotSeen.style.display = hasSeen ? "inline-block" : "none";
    if (dotBelt) dotBelt.style.display = on ? "inline-block" : "none";

    const badge = card.querySelector(".belt-badge");
    if (on && !badge) card.insertAdjacentHTML("afterbegin", '<span class="belt-badge" title="On the belt"></span>');
    if (!on && badge) badge.remove();
    const btn = card.querySelector(".card-belt-btn");
    if (btn) {
      btn.classList.toggle("on", on);
      btn.disabled = on;
      btn.textContent = on ? "On belt" : "+ Belt";
    }
  });
}

function renderFilm(p) {
  const filmEl = document.getElementById("film");
  if (!filmEl) return;
  // 列表没变就只切换当前格，不重建 1025 个按钮
  if (filmRev !== state.listRev) {
    filmEl.innerHTML = state.list.map(m =>
      `<button type="button" tabindex="-1" data-id="${m.id}" title="${m.name} (#${m.id})" aria-label="${m.name} #${m.id}"><img src="${thumbOf(m.id)}" data-full="${artOf(m.id)}" alt="" loading="lazy" /><span class="id">#${m.id}</span></button>`
    ).join("");
    filmRev = state.listRev;
  }
  const prevCell = filmEl.querySelector("[data-on]");
  prevCell?.removeAttribute("data-on");
  prevCell?.removeAttribute("aria-current");
  prevCell?.setAttribute("tabindex", "-1");
  const cell = p ? filmEl.querySelector(`[data-id="${p.id}"]`) : filmEl.firstElementChild;
  cell?.setAttribute("tabindex", "0"); // 1025 个按钮只留一个 Tab 停靠点，其余靠方向键
  if (p) {
    cell?.setAttribute("data-on", "");
    cell?.setAttribute("aria-current", "true");
    cell?.scrollIntoView({ inline: "center", block: "nearest", behavior: dexScrollBehavior() });
  }
}

function renderGrid(gridViewEl) {
  if (gridRev !== state.listRev) {
    if (!state.list.length) {
      gridViewEl.innerHTML = `
        <div class="dex-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p class="empty" style="margin-bottom: 1rem;">No Pokémon found matching the active search or filters.</p>
          <button class="btn btn-paper dex-clear-btn" type="button">Clear filters and search</button>
        </div>`;
    } else {
      const onBelt = new Set(belt());
      const saw = new Set(seen());
      gridViewEl.innerHTML = state.list.map(m => {
        const typesHtml = m.types.map(t => `<span class="dex-card-type" style="${typeStyle(t)}">${t}</span>`).join("");
        const hasSeen = saw.has(m.id);
        const on = onBelt.has(m.id);
        return `
          <article class="dex-card" data-id="${m.id}">
            <div class="card-dots">
              <i class="dot seen" title="seen" style="${hasSeen ? '' : 'display:none;'}"></i>
              <i class="dot belt" title="belt" style="${on ? '' : 'display:none;'}"></i>
            </div>
            <span class="dex-card-id">#${pad3(m.id)}</span>
            <div class="dex-card-thumb">
              <img src="${thumbOf(m.id)}" data-full="${artOf(m.id)}" alt="" loading="lazy" width="96" height="96" />
            </div>
            <p class="dex-card-name"><a class="dex-card-link" href="pokemon.html?id=${m.id}">${m.name}</a></p>
            <div class="dex-card-types">${typesHtml}</div>
            <button class="card-belt-btn" type="button" data-belt-id="${m.id}">+ Belt</button>
          </article>`;
      }).join("");
    }
    gridRev = state.listRev;
  }
  syncGridMarks();
}

// 渲染视图主逻辑
function render() {
  const saw = seen();
  const onBelt = belt();
  const p = current();

  // 1. 同步顶部工具栏状态（地区标签、数量标记、抗性芯片）
  const regionLink = document.getElementById("region-link");
  if (regionLink) {
    regionLink.href = "regions.html";
    regionLink.textContent = `${state.region.name} · #${pad3(state.region.start)}–#${pad3(state.region.end)}`;
  }

  const regionSelect = document.getElementById("region-select");
  if (regionSelect && regionSelect.value !== state.region.slug) {
    regionSelect.value = state.region.slug;
  }

  const countBadge = document.getElementById("count-badge");
  if (countBadge) {
    countBadge.textContent = `${state.list.length} files`;
  }

  const resistChip = document.getElementById("resist-chip");
  if (resistChip) {
    resistChip.hidden = !state.resist;
    resistChip.textContent = state.resist ? `resist ${state.resist} ✕` : "";
    resistChip.setAttribute("aria-label", state.resist ? `Remove resist ${state.resist} filter` : "");
  }

  const ledgerViewEl = document.getElementById("dex-ledger-view");
  const gridViewEl = document.getElementById("dex-grid-view");

  if (ledgerViewEl) ledgerViewEl.hidden = (state.displayMode !== "ledger");
  if (gridViewEl) gridViewEl.hidden = (state.displayMode !== "grid");

  // =========================================================================
  // 模式 1：Ledger & Stage (台座名录四区)
  // =========================================================================
  if (state.displayMode === "ledger") {
    const [a, b] = state.range;
    const rows = state.list.filter(m => m.id >= a && m.id <= b);

    // 1.1 左脊 (Spines)
    const spinesEl = document.getElementById("spines");
    spinesEl.setAttribute("role", "group");
    spinesEl.setAttribute("aria-label", "Select number range");
    spinesEl.innerHTML = SPINES.map(([x, y]) => {
      const n = state.list.filter(m => m.id >= x && m.id <= y).length;
      return `<button type="button" data-a="${x}" data-b="${y}" ${x === a ? 'data-on aria-pressed="true"' : 'aria-pressed="false"'} ${n ? '' : 'disabled'}>${pad3(x)}–${y}</button>`;
    }).join("");

    // 1.2 中名录 (Ledger)
    const ledgerEl = document.getElementById("ledger");
    const ledgerHadFocus = ledgerEl.contains(document.activeElement); // 重绘会销毁焦点元素，先记下来
    const tabStopId = rows.some(m => m.id === p?.id) ? p.id : rows[0]?.id; // 只有一个 Tab 停靠点（roving tabindex）
    ledgerEl.innerHTML = rows.length
      ? rows.map(m => {
          const typeNames = (m.types || []).join(" · ");
          return `<li class="${m.id === p?.id ? 'is-on' : ''} ${saw.includes(m.id) ? 'seen' : ''}" data-id="${m.id}" role="option" aria-selected="${m.id === p?.id}" aria-label="#${pad3(m.id)} ${m.name}${typeNames ? ", " + typeNames : ""}" tabindex="${m.id === tabStopId ? 0 : -1}"><span class="id">#${pad3(m.id)}</span><span class="ledger-name">${m.name}</span>${typeNames ? `<span class="ledger-types">${typeNames}</span>` : ""}</li>`;
        }).join("")
      : `<li class="empty" role="option" aria-disabled="true">No Pokémon found matching the active search or filters.</li>`;
    if (ledgerHadFocus) ledgerEl.querySelector('li[tabindex="0"]')?.focus();
    // 只滚名录自己，避免方向键把整页拽下去
    const onRow = ledgerEl.querySelector("li.is-on");
    if (onRow) {
      const pane = ledgerEl.getBoundingClientRect();
      const row = onRow.getBoundingClientRect();
      if (row.top < pane.top) ledgerEl.scrollTop -= pane.top - row.top;
      else if (row.bottom > pane.bottom) ledgerEl.scrollTop += row.bottom - pane.bottom;
    }

    // 1.3 右台座 (Stage)
    const stageEl = document.getElementById("stage");
    if (!p) {
      stageEl.innerHTML = `
        <div class="stage-empty-state" style="text-align: center; padding: 3rem 1rem;">
          <p class="empty" style="margin-bottom: 1rem;">No Pokémon found matching the active search or filters.</p>
          <button class="btn btn-paper dex-clear-btn" type="button" style="margin: 0 auto;">Clear filters and search</button>
        </div>`;
    } else {
      const full = onBelt.length >= window.store.MAX_BELT;
      const has = onBelt.includes(p.id);

      stageEl.innerHTML = `
        <div class="stage-img-box" id="stageImgBox">
          <img src="${artOf(p.id)}" alt="${p.name}" width="240" height="240" />
        </div>
        <p><span class="id">#${pad3(p.id)}</span></p>
        <p class="name">${p.name}</p>
        <p id="stageTypes">${p.types.map(t => `<span class="type" style="${typeStyle(t)}">${t}</span>`).join("")}</p>
        <div class="stage-meta" id="stageMeta"><p class="soft" style="font-size:0.8125rem;">#${pad3(p.id)}</p></div>
        <div class="actions">
          ${full && !has ? `<span class="empty">Belt full (6/6)</span>` : `<button class="btn btn-primary" id="add" ${has ? 'disabled' : ''}>${has ? 'On the belt' : 'Add to belt'}</button>`}
          <a class="btn btn-paper" href="pokemon.html?id=${p.id}">Open #${pad3(p.id)}</a>
        </div>`;

      // 异步加载当前只的三行死数据：种属、身高体重、本区编号
      (async () => {
        const curId = p.id;
        try {
          const [mon, spec] = await Promise.all([
            window.pokeApi ? window.pokeApi.getPokemon(curId).catch(() => null) : null,
            window.pokeApi ? window.pokeApi.getSpecies(curId).catch(() => null) : null
          ]);
          const metaBox = document.getElementById("stageMeta");
          if (!metaBox || current()?.id !== curId) return;
          const h = mon?.height != null ? `${Number(mon.height).toFixed(1)} m` : "";
          const w = mon?.weight != null ? `${Number(mon.weight).toFixed(1)} kg` : "";
          const hw = [h, w].filter(Boolean).join(" · ");
          metaBox.innerHTML = `
            ${spec?.genus ? `<p class="stage-genus" style="font-size:0.875rem; margin:0.15rem 0;">${spec.genus}</p>` : ""}
            ${hw ? `<p class="soft" style="font-size:0.8125rem; font-family:var(--font-num); color:var(--ink-soft); margin:0.15rem 0;">${hw}</p>` : ""}
            <p class="soft" style="font-size:0.8125rem; font-family:var(--font-num); color:var(--ink-soft); margin:0.15rem 0;">${state.region.name} #${pad3(curId)}</p>
          `;
        } catch (_) {}
      })();

      document.getElementById("add")?.addEventListener("click", () => addBelt(p.id));
    }

    // 1.4 底胶片尺 (Film Strip)
    renderFilm(p);
  }

  // =========================================================================
  // 模式 2：Visual Cards Grid (全景 3D 卡片网格)
  // =========================================================================
  if (state.displayMode === "grid" && gridViewEl) {
    renderGrid(gridViewEl);
  }

  // 同步搜索框、属性芯片和编号缓冲
  const qEl = document.getElementById("q");
  if (qEl && qEl.value !== state.q) qEl.value = state.q;
  renderNumberBuffer();
  document.querySelector(".type-row")?.setAttribute("role", "group");
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    const selected = (c.dataset.type || "") === (state.type || "");
    c.toggleAttribute("data-on", selected);
    c.setAttribute("aria-pressed", String(selected));
  });
}

// 页面加载启动
async function initDex() {
  // 1. 获取当前地区名单 (优先读取 10 地区本地写死完整名录)
  if (window.getRegionPokemon) {
    state.rawList = window.getRegionPokemon(state.region.slug) || [];
  }
  if (!state.rawList || state.rawList.length === 0) {
    if (state.region.slug === "kanto" && KANTO_PRESET.length > 0) {
      state.rawList = KANTO_PRESET;
    } else if (window.pokeApi) {
      try {
        state.rawList = await window.pokeApi.getList(state.region.limit, state.region.offset);
      } catch (e) {
        console.error("Failed to load region pokemon list", e);
        state.rawList = [];
      }
    }
  }

  // 2. 应用过滤条件
  applyFilter();

  // 3. 处理 URL 传入的起始 id
  const startId = Number(params.get("id"));
  if (startId) {
    const hitIdx = state.list.findIndex(p => p.id === startId);
    if (hitIdx >= 0) {
      state.i = hitIdx;
      const spine = SPINES.find(([a, b]) => startId >= a && startId <= b);
      if (spine) state.range = spine;
    }
  }

  // 4. 初次渲染
  render();
}

// 事件委托与监听
document.addEventListener("DOMContentLoaded", () => {
  // 地区页是唯一地区入口；保留监听以兼容旧页面嵌入的选择器。
  document.getElementById("region-select")?.addEventListener("change", e => {
    const slug = e.target.value;
    state.region = window.getRegionBySlug ? window.getRegionBySlug(slug) : { slug, name: "National", start: 1, end: 1025 };
    SPINES = window.getRegionSpines ? window.getRegionSpines(state.region.start, state.region.end) : [[1, 50]];
    state.range = SPINES[0] || [1, 50];

    if (window.getRegionPokemon) {
      state.rawList = window.getRegionPokemon(state.region.slug) || [];
    }
    applyFilter();
    render();
    syncUrl();
  });

  // 3. 书脊点击
  document.getElementById("spines")?.addEventListener("click", e => {
    const b = e.target.closest("button[data-a]");
    if (!b || b.disabled) return;
    state.range = [Number(b.dataset.a), Number(b.dataset.b)];
    const hit = state.list.findIndex(p => p.id >= state.range[0] && p.id <= state.range[1]);
    if (hit >= 0) state.i = hit;
    render();
  });

  // 4. 名录行点击
  document.getElementById("ledger")?.addEventListener("click", e => {
    const row = e.target.closest("[data-id]");
    if (!row) return;
    selectIndex(state.list.findIndex(p => p.id === Number(row.dataset.id)));
  });

  // 5. 胶片尺点击
  document.getElementById("film")?.addEventListener("click", e => {
    const cell = e.target.closest("[data-id]");
    if (!cell) return;
    selectIndex(state.list.findIndex(p => p.id === Number(cell.dataset.id)));
  });

  // 6. 兼容旧网格容器的点击委托
  document.getElementById("dex-grid-view")?.addEventListener("click", e => {
    const beltBtn = e.target.closest("[data-belt-id]");
    if (beltBtn) {
      e.stopPropagation();
      e.preventDefault();
      addBelt(Number(beltBtn.dataset.beltId));
      return;
    }

    // 卡片里是真链接：这里只记“看过”，跳转交给浏览器（Ctrl/中键/右键“新标签页打开”都可用）
    const card = e.target.closest(".dex-card[data-id]");
    if (card) markSeen(Number(card.dataset.id));
  });

  // 7. 搜索输入
  document.getElementById("q")?.addEventListener("input", e => {
    state.q = e.target.value.trim();
    applyFilter();
    render();
    syncUrl();
  });

  document.getElementById("q")?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      if (state.list.length === 1) selectIndex(0);
    }
  });

  // 8. 属性芯片点击
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    c.addEventListener("click", () => {
      const clickedType = c.dataset.type || null;
      state.type = (state.type === clickedType) ? null : clickedType;
      applyFilter();
      render();
      syncUrl();
    });
  });

  // 8b. 抗性芯片：点一下取消 ?resist= 过滤
  document.getElementById("resist-chip")?.addEventListener("click", () => {
    state.resist = null;
    applyFilter();
    render();
    syncUrl();
  });

  // 8b2. 清空筛选与搜索按钮
  document.addEventListener("click", e => {
    if (e.target.closest(".dex-clear-btn")) {
      clearFilterAndSearch();
    }
  });

  // 8c. 键盘：名录行和旧网格卡片用 Enter / 空格触发，和点击一致
  ["ledger", "dex-grid-view"].forEach(id => {
    document.getElementById(id)?.addEventListener("keydown", e => {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (e.target.closest("button, a")) return; // 卡片里的 + Belt 按钮和链接自己处理
      const row = e.target.closest("[data-id]");
      if (!row) return;
      e.preventDefault();
      row.click();
    });
  });

  // 9. 随机抽取
  document.getElementById("draw")?.addEventListener("click", () => {
    if (!state.list.length) return;
    const randIdx = Math.floor(Math.random() * state.list.length);
    selectIndex(randIdx);
  });

  // 10. 全局快捷键导航
  document.addEventListener("keydown", e => {
    const searchOverlay = document.getElementById("search-overlay");
    if (e.defaultPrevented || (searchOverlay && !searchOverlay.hidden)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return; // 不抢浏览器和系统快捷键（Cmd+R、Ctrl+C 等）
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) {
      if (e.key === "Escape") {
        state.q = "";
        applyFilter();
        render();
        syncUrl();
        document.getElementById("q")?.blur();
      }
      return;
    }
    if (e.key === "Escape") {
      clearNumberBuffer();
      return;
    }
    if (/^\d$/.test(e.key)) {
      state.numberBuffer = `${state.numberBuffer}${e.key}`.slice(-3);
      renderNumberBuffer();
      if (state.numberBuffer.length === 3) selectBufferedNumber();
      return;
    }
    if (e.key === "Enter" && state.numberBuffer) {
      e.preventDefault();
      selectBufferedNumber();
      return;
    }
    if (e.key === "/") {
      e.preventDefault();
      document.getElementById("q")?.focus();
    }
    if (state.displayMode === "ledger") {
      if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault(); // 否则页面会一边选中一边滚动
        selectIndex(state.i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1));
      }
      if (/^[a-z]$/i.test(e.key)) {
        const [a, b] = state.range;
        const hit = state.list.find(p => p.id >= a && p.id <= b && p.name.toLowerCase().startsWith(e.key.toLowerCase()));
        if (hit) selectIndex(state.list.findIndex(p => p.id === hit.id));
      }
    }
  });

  // 启动执行
  initDex();
});
```

---

### 3.7 `js/pokemon.js` (详情页标本台/3D模型/Shiny切换)

- **文件路径**: `js/pokemon.js`  
- **代码行数**: 1,101 行  
- **文件大小**: 53,917 字节  

```javascript
/**
 * 151 FILE — Pokemon Detail Page Logic
 * 遵循 pokemon-web-project-plan.md §4.3 与 AGENTS.md
 * - 开合球动画与原生叫声
 * - 3D HOME 立绘与 Shiny 闪光形态一键切换
 * - 6 项能力值条与属性、体态、特性
 * - 腰带加入、Lineup 阵容比对入口、复制链接、键盘左右切只
 */

document.addEventListener("DOMContentLoaded", async () => {
  const tc = window.TYPES_CHART;
  const store = window.store;

  const q = new URLSearchParams(location.search);
  const key = q.get("id") || q.get("name");
  const root = document.getElementById("file");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 属性色与字色统一来自 types-chart.js
  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

  // 页面里所有由 URL 或 API 带来的文本先转义再放进 innerHTML
  function esc(text) {
    return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function barColor(v) {
    if (v >= 150) return "#EE1515";
    if (v >= 100) return "#7EB6D9";
    if (v >= 60) return "#3D7DCA";
    return "#1E3A55";
  }

  function getRegion(id) {
    if (window.REGIONS) {
      const found = window.REGIONS.find(r => id >= r.start && id <= r.end);
      if (found) return found;
    }
    return { name: "National", start: 1, end: 1025, slug: "all" };
  }

  const defaultArt = (id) => window.pokeApi.artUrl(id);
  const shinyArt = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`;
  const legacyAnimatedSpriteUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  const staticModel3dUrl = (id) => `https://raw.githubusercontent.com/Pokemon-3D-api/assets/main/models/opt/regular/${id}.glb`;
  const model3dUrl = (id) => {
    if (id >= 1 && id <= 151) {
      return `https://raw.githubusercontent.com/06wj/pokemon/master/public/models/${String(id).padStart(3, "0")}/model.glb`;
    }
    return staticModel3dUrl(id);
  };

  // Bulbagarden Archives lists these official animation files for every Kanto ID.
  // The filenames follow the ID + species name + AG convention, with these archive spellings.
  const animeNameOverrides = { 29: "Nidoran", 32: "Nidoran", 83: "Farfetch'd" };
  const animeArtById = Object.fromEntries((window.ALL_SPECIES || [])
    .filter(species => species.id >= 1 && species.id <= 151)
    .map(({ id, name }) => {
      const fileName = animeNameOverrides[id] || name;
      const suffix = id === 52 ? " anime.png" : " AG anime.png";
      return [id, {
        file: `${String(id).padStart(3, "0")}${fileName}${suffix}`,
        series: id === 52 ? "DP+XY" : id === 151 ? "AG+XY" : "AG"
      }];
    }));
  const animeSeriesNames = {
    AG: "Pokémon the Series: Ruby and Sapphire",
    XY: "Pokémon the Series: XY",
    "DP+XY": "Pokémon the Series: Diamond and Pearl · Pokémon the Series: XY",
    "AG+XY": "Pokémon the Series: Ruby and Sapphire · Pokémon the Series: XY"
  };
  const animeArtUrl = (asset) => `https://archives.bulbagarden.net/wiki/Special:FilePath/${encodeURIComponent(asset.file)}`;
  const animeFilePageUrl = (asset) => `https://archives.bulbagarden.net/wiki/File:${encodeURIComponent(asset.file).replace(/%20/g, "_")}`;

  let isShiny = false;
  let isAnimeArt = false;
  let isLegacySprite = false;
  let stageModeController = null;

  // 腰带按钮区：加入后只刷新这一小块，不重画整页（否则开球动画会重播）
  function beltControl(mon) {
    const b = store.belt();
    const on = b.includes(mon.id);
    const full = b.length >= store.MAX_BELT && !on;
    return full
      ? `<span class="empty" style="align-self:center; font-family:var(--font-num); font-weight:700;">Belt full (6/6)</span>`
      : `<button class="btn btn-primary" id="add" type="button" ${on ? "disabled" : ""}>${on ? "On the belt" : "Add to belt"}</button>`;
  }

  function bindBeltControl(mon) {
    document.getElementById("add")?.addEventListener("click", () => {
      if (!store.addBelt(mon.id)) return;
      document.getElementById("belt-ctl").innerHTML = beltControl(mon);
    });
  }

  // 闪光切换：换图片和文字（如果是 3D 模式切到闪光 2D 图）
  function setShiny(mon, on) {
    isShiny = on;
    isAnimeArt = false;
    isLegacySprite = false;
    const art = document.getElementById("art");
    const poke3d = document.getElementById("poke-3d");
    const btn = document.getElementById("shiny");
    const btn3d = document.getElementById("btn-mode-3d");
    const btn2d = document.getElementById("btn-mode-2d");

    if (art) {
      art.src = on ? shinyArt(mon.id) : defaultArt(mon.id);
      art.alt = `${mon.name} official artwork`;
      if (on) {
        art.style.display = "block";
        if (poke3d) poke3d.style.display = "none";
        btn2d?.classList.add("is-active");
        btn3d?.classList.remove("is-active");
      }
    }
    stageModeController?.("2d");
    if (btn) btn.textContent = on ? "Show default" : "Show shiny";
  }

  function formatEvoCondition(details) {
    const choices = Array.isArray(details) ? details.filter(Boolean) : [];
    const preferred = choices.filter(d => d.is_default !== false);
    const rows = preferred.length ? preferred : choices;
    if (!rows.length) return "xxx";
    const refName = (ref) => ref?.name ? ref.name.replace(/-/g, " ") : "";
    const times = { day: "Day", night: "Night", dusk: "Dusk", dawn: "Dawn" };
    const relativeStats = { "-1": "Attack < Defense", "0": "Attack = Defense", "1": "Attack > Defense" };
    const labels = rows.map(d => {
      const parts = [];
      const time = times[d.time_of_day] || refName({ name: d.time_of_day });
      if (d.min_level != null) parts.push(`Lv. ${d.min_level}`);
      if (d.item?.name) parts.push(`Use ${refName(d.item)}`);
      if (d.trigger?.name === "trade") {
        if (d.held_item?.name) parts.push(`Trade holding ${refName(d.held_item)}`);
        else if (d.trade_species?.name) parts.push(`Trade with ${refName(d.trade_species)}`);
        else parts.push("Trade");
      }
      if (d.held_item?.name && d.trigger?.name !== "trade") parts.push(`Hold ${refName(d.held_item)}`);
      if (d.min_happiness != null) parts.push(time ? `Friendship (${time})` : "Friendship");
      if (d.min_affection != null) parts.push("Affection");
      if (d.min_beauty != null) parts.push(`Beauty ${d.min_beauty}`);
      if (d.gender === 1) parts.push("Female");
      if (d.gender === 2) parts.push("Male");
      if (d.known_move?.name) parts.push(`Know ${refName(d.known_move)}`);
      if (d.known_move_type?.name) parts.push(`${refName(d.known_move_type)} move`);
      if (d.location?.name) parts.push(`At ${refName(d.location)}`);
      if (d.party_species?.name) parts.push(`Party with ${refName(d.party_species)}`);
      if (d.party_type?.name) parts.push(`Party type ${refName(d.party_type)}`);
      if (relativeStats[String(d.relative_physical_stats)]) parts.push(relativeStats[String(d.relative_physical_stats)]);
      if (time && d.min_happiness == null) parts.push(time);
      if (d.needs_overworld_rain) parts.push("Rain");
      if (d.turn_upside_down) parts.push("Upside down");
      if (d.trigger?.name === "shed") parts.push("Empty slot");
      if (!parts.length && d.trigger?.name && d.trigger.name !== "level-up") parts.push(refName(d.trigger));
      return parts.join(", ") || "xxx";
    });
    return [...new Set(labels)].filter(Boolean).join(" OR ") || "xxx";
  }

  async function getEvoSteps(evoUrl) {
    if (!evoUrl) return null;
    const cacheKey = `file151.v3.evosteps_${encodeURIComponent(evoUrl)}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch (_) {}
    try {
      const data = await window.pokeApi.getEvoTree(evoUrl);
      if (!data) return null;
      const steps = [];
      function traverse(node) {
        const parentId = node.species?.id || 0;
        for (const child of (node.evolves_to || [])) {
          const childId = child.species?.id || 0;
          if (childId) {
            steps.push({
              fromId: parentId,
              toId: childId,
              condition: formatEvoCondition(child.evolution_details)
            });
          }
          traverse(child);
        }
      }
      traverse(data);
      const result = { rootId: data.species?.id || 0, steps };
      try {
        localStorage.setItem(cacheKey, JSON.stringify(result));
      } catch (_) {}
      return result;
    } catch (_) {
      return null;
    }
  }

  function formatFormName(rawName) {
    return rawName
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function renderFormsHtml(forms, mon) {
    return `
      <div class="forms-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:0.75rem;">
        ${forms.map(f => {
          const total = (f.stats || []).reduce((sum, s) => sum + s.value, 0);
          const isCurrent = f.id === mon.id || (f.isDefault && mon.id <= 1025);
          return `
            <div class="form-card" style="border:1px solid ${isCurrent ? 'var(--blue)' : 'var(--line)'}; border-radius:4px; padding:0.75rem; background:var(--paper); display:flex; flex-direction:column; gap:0.5rem; ${isCurrent ? 'box-shadow:0 0 0 1px var(--blue);' : ''}">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <img src="${defaultArt(f.id)}" alt="${esc(f.name)}" width="52" height="52" loading="lazy" style="object-fit:contain; flex-shrink:0;">
                <div style="min-width:0;">
                  <h4 style="margin:0 0 0.25rem; font-size:0.9rem; font-family:var(--font-ui); color:var(--ink); word-break:break-word;">${esc(formatFormName(f.name))}</h4>
                  <div style="display:flex; gap:0.25rem; flex-wrap:wrap;">
                    ${f.types.map(t => `<span class="chip" style="${typeStyle(t)} font-size:0.6875rem; padding:0.1rem 0.35rem;">${t}</span>`).join("")}
                  </div>
                </div>
              </div>
              <div style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft); display:grid; grid-template-columns:repeat(3, 1fr); gap:0.2rem 0.4rem; padding-top:0.35rem; border-top:1px dashed var(--line);">
                ${(f.stats || []).map(s => `
                  <div><span style="color:var(--ink); font-weight:700;">${s.value}</span> <span style="font-size:0.6875rem;">${s.name.replace("special-", "sp.").replace("attack", "atk").replace("defense", "def")}</span></div>
                `).join("")}
                <div style="grid-column:1 / -1; margin-top:0.2rem; font-weight:700; color:var(--navy);">Total: ${total}</div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  async function getForms(varieties, defaultMon) {
    if (!Array.isArray(varieties) || varieties.length <= 1) return [];
    const speciesId = defaultMon?.id || varieties.find(v => v.id)?.id;
    if (!speciesId) return [];
    const cacheKey = `file151.v3.forms_${speciesId}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch (_) {}
    try {
      const loaded = await Promise.all(
        varieties.map(async (v) => {
          try {
            const formMon = v.id === defaultMon?.id
              ? defaultMon
              : await window.pokeApi.getPokemon(v.id || v.name);
            if (!formMon) return null;
            return {
              name: v.name || formMon.name,
              isDefault: Boolean(v.isDefault),
              id: formMon.id,
              types: formMon.types || [],
              stats: formMon.stats || []
            };
          } catch (_) {
            return null;
          }
        })
      );
      const valid = loaded.filter(Boolean);
      try {
        localStorage.setItem(cacheKey, JSON.stringify(valid));
      } catch (_) {}
      return valid;
    } catch (_) {
      return [];
    }
  }

  async function render(mon) {
    const region = getRegion(mon.id);
    const spec = await window.pokeApi.getSpecies(mon.id).catch(() => null);
    const [abilityTexts, evoSteps] = await Promise.all([
      Promise.all((mon.abilities || []).map(a => window.pokeApi.getAbilityText(a.name))),
      spec?.evoUrl ? getEvoSteps(spec.evoUrl).catch(() => null) : Promise.resolve(null)
    ]);
    const evoIds = evoSteps
      ? [...new Set([evoSteps.rootId, ...evoSteps.steps.reduce((ids, step) => ids.concat(step.fromId, step.toId), [])].filter(Boolean))]
      : [];

    const statFields = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "special-attack", label: "Sp. Atk" },
      { key: "special-defense", label: "Sp. Def" },
      { key: "speed", label: "Speed" }
    ];

    const has3D = mon.id >= 1 && mon.id <= 1025;
    const animeArtwork = mon.id <= 151 ? animeArtById[mon.id] : null;
    const hasLegacyAnimatedSprite = mon.id >= 1 && mon.id <= 649;

    root.innerHTML = `
      <div class="detail">
        <div class="detail-stage-box" style="display:flex; flex-direction:column; align-items:center; width:100%;">
          <div class="stage-ball is-open">
            <div class="stage-viewer-wrap" id="stage-viewer-wrap" style="width:100%; height:100%; z-index:1;">
            ${has3D ? `
              <model-viewer
                id="poke-3d"
                src="${model3dUrl(mon.id)}"
                alt="${esc(mon.name)} ${mon.id > 151 ? "Static 3D Preview" : "3D Model Preview"}"
                camera-controls
                touch-action="pan-y"
                interaction-prompt="none"
                shadow-intensity="1.0"
                shadow-softness="0.8"
                environment-image="neutral"
                tone-mapping="neutral"
                exposure="1.15"
                camera-orbit="0deg 75deg 105%"
                min-camera-orbit="auto auto 40%"
                max-camera-orbit="auto auto 250%"
                loading="eager"
              >
                <div slot="poster" style="display:flex; align-items:center; justify-content:center; width:100%; height:100%;">
                  <img src="${defaultArt(mon.id)}" alt="${esc(mon.name)}" style="position:static; left:auto; top:auto; z-index:auto; width:85%; height:85%; object-fit:contain; filter:drop-shadow(0 12px 24px rgba(0,0,0,0.45));" />
                </div>
              </model-viewer>
            ` : ""}
              <img id="art" src="${isShiny ? shinyArt(mon.id) : defaultArt(mon.id)}" alt="${esc(mon.name)}" style="${has3D ? 'display:none;' : 'display:block;'} position:static; left:auto; top:auto; z-index:auto; width:76%; height:76%; object-fit:contain; filter:drop-shadow(0 12px 24px rgba(0,0,0,0.45));" />
              <div id="heart-burst" class="stage-burst-container" aria-hidden="true"></div>
            </div>
            <span class="lid-t" aria-hidden="true"></span>
            <span class="lid-b" aria-hidden="true"></span>
            <span class="lid-band" aria-hidden="true"></span>
            <button class="lid-btn" id="well" type="button" aria-label="Close Poké Ball" aria-expanded="true" aria-controls="stage-viewer-wrap" disabled aria-hidden="true"></button>
          </div>

          <div class="stage-controls" id="stage-controls">
            <button class="btn btn-sm btn-paper btn-mode ${has3D ? "is-active" : ""}" id="btn-mode-3d" type="button" title="Switch to 3D Mode" aria-pressed="${has3D}" ${has3D ? "" : "disabled"}>3D</button>
            <button class="btn btn-sm btn-paper btn-mode ${has3D ? "" : "is-active"}" id="btn-mode-2d" type="button" title="Switch to 2D Art" aria-pressed="${!has3D}">2D</button>
            ${mon.id <= 151 ? `
              <button class="btn btn-sm btn-paper btn-mode" id="btn-mode-anime" type="button" title="${animeArtwork ? "Show verified official animation artwork" : "No verified official animation artwork is mapped for this Pokémon"}" aria-label="Anime 2D mode${animeArtwork ? "" : " unavailable: no verified official animation artwork"}" aria-pressed="false" ${animeArtwork ? "" : "disabled"}>${animeArtwork ? "Anime 2D" : "Anime unavailable"}</button>
            ` : ""}
            ${hasLegacyAnimatedSprite ? `
              <button class="btn btn-sm btn-paper btn-mode" id="btn-mode-pixel" type="button" title="Show Pokémon Black and White animated pixel sprite" aria-label="Pixel GIF mode" aria-pressed="false">Pixel GIF</button>
            ` : ""}
            <button class="btn btn-sm btn-paper" id="close-ball" type="button" disabled aria-hidden="true">Close Poké Ball</button>
            ${has3D ? `
              <span id="stage-camera-controls" style="display:inline-flex; gap:0.35rem; flex-wrap:wrap; align-items:center; border-left:1px solid var(--line); padding-left:0.5rem;">
                <button class="btn btn-sm btn-paper" id="btn-rotate" type="button" title="${reduce ? "Automatic rotation is disabled by your reduced-motion preference" : "Toggle automatic rotation"}" aria-pressed="false" ${reduce ? "disabled" : ""}>Rotate</button>
                <button class="btn btn-sm btn-paper" id="btn-zoom-in" type="button" title="Zoom in" aria-label="Zoom in" disabled>Zoom +</button>
                <button class="btn btn-sm btn-paper" id="btn-zoom-out" type="button" title="Zoom out" aria-label="Zoom out" disabled>Zoom −</button>
              </span>
              <span id="stage-base-actions" style="display:inline-flex; gap:0.35rem; flex-wrap:wrap; align-items:center; border-left:1px solid var(--line); padding-left:0.5rem;">
                <button class="btn btn-sm btn-paper" id="btn-cry-stage" type="button" title="Play cry">Cry</button>
                <button class="btn btn-sm btn-paper" id="btn-react-stage" type="button" title="Show a reaction">React</button>
                <span id="stage-feedback" role="status" aria-live="polite" style="font-family:var(--font-num); font-size:0.75rem; color:var(--mark);"></span>
              </span>
            ` : ""}
            <span id="stage-actions" aria-label="Optional model animations" style="display:none; gap:0.35rem; flex-basis:100%; flex-wrap:wrap; align-items:center; justify-content:center; border-top:1px solid var(--line); padding-top:0.5rem;"></span>
          </div>

          <p id="art-caption" style="color:var(--ink-soft); font-size:0.75rem; font-family:var(--font-num); margin-top:0.4rem; text-align:center;">
            ${has3D ? (mon.id <= 151 ? "Loading 3D model…" : "Loading static 3D preview…") : "Default Form (2D Art)"}
          </p>
        </div>

        <div class="fields">
          ${mon.isOffline ? `
            <div style="margin-bottom:0.75rem; padding:0.5rem 0.75rem; background:rgba(238,21,21,0.08); border:1px solid rgba(238,21,21,0.25); border-radius:4px; font-size:0.75rem; color:var(--ink); display:flex; justify-content:space-between; align-items:center;">
              <span style="font-family:var(--font-num); font-weight:700; letter-spacing:0.04em;">[OFFLINE ARCHIVE] Live PokeAPI sync failed</span>
              <button class="btn btn-sm btn-paper" id="retry-sync" type="button">Retry sync</button>
            </div>
          ` : ""}

          <div class="fields-top">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.4rem;">
              <div>
                <span class="id-badge">#${String(mon.id).padStart(3, "0")}</span>
                <h1 style="font-family:var(--font-ui); font-size:1.85rem; font-weight:700; margin:0.25rem 0 0.1rem; letter-spacing:-0.02em; color:var(--ink);">${esc(mon.name)}</h1>
                ${spec?.genus ? `<span class="soft" style="font-size:0.875rem; color:var(--ink-soft);">${esc(spec.genus)}</span>` : ""}
                <span style="display:block; margin-top:0.35rem; font-family:var(--font-num); font-weight:700; font-size:0.875rem; color:var(--ink-soft);">
                  ${Number(mon.height).toFixed(1)} m · ${Number(mon.weight).toFixed(1)} kg
                </span>
                <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-top:0.45rem;">
                  ${mon.types.map(t =>
                    `<a class="chip" style="${typeStyle(t)}" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`
                  ).join("")}
                </div>
              </div>
            </div>
            ${spec?.flavor ? `<p class="flavor" style="margin:0; padding:0.4rem 0 0; border:0;">${esc(spec.flavor)}</p>` : ""}
            <div class="detail-actions" style="margin-top:0.75rem;">
              <span id="belt-ctl">${beltControl(mon)}</span>
              <button class="btn btn-paper" id="favorite" type="button" aria-pressed="${store.isFavorite(mon.id)}">${store.isFavorite(mon.id) ? "★ Favorited" : "☆ Favorite"}</button>
            </div>
          </div>

          <div class="fields-grid">
            <div class="fields-col">
              <div style="margin-bottom: 0.85rem;">
                <p class="field-title">Abilities</p>
                <ul class="abilities-list">
                  ${mon.abilities.map((a, i) =>
                    `<li><b>${esc(a.name.replace(/-/g, " "))}</b>${a.is_hidden ? ' <span class="hidden-tag">(hidden)</span>' : ""} — ${esc(abilityTexts[i] || "No description")}</li>`
                  ).join("")}
                </ul>
              </div>

              ${evoSteps && evoSteps.steps.length > 0 ? `
                <div>
                  <p class="field-title">Evolution Line &amp; Conditions</p>
                  ${(() => {
                    const isLinear = evoSteps.steps.every((s, i) => i === 0 || s.fromId === evoSteps.steps[i - 1].toId);
                    if (isLinear) {
                      return `
                        <div class="evo-row" style="align-items:center; flex-wrap:wrap; gap:0.4rem;">
                          <a class="evo-link ${evoSteps.rootId === mon.id ? 'current' : ''}" href="pokemon.html?id=${evoSteps.rootId}" title="#${evoSteps.rootId}">
                            <img src="${defaultArt(evoSteps.rootId)}" alt="#${evoSteps.rootId}" width="44" height="44" loading="lazy">
                            <span>#${String(evoSteps.rootId).padStart(3, "0")}</span>
                          </a>
                          ${evoSteps.steps.map(s => `
                            <div style="display:inline-flex; flex-direction:column; align-items:center; padding:0 0.15rem; min-width:3.2rem;">
                              <span style="font-family:var(--font-num); font-size:0.625rem; color:var(--mark); white-space:normal; max-width:18rem; text-align:center; overflow-wrap:anywhere; font-weight:700; background:rgba(238,21,21,0.08); padding:0.1rem 0.35rem; border-radius:3px; border:1px solid rgba(238,21,21,0.2);">${esc(s.condition)}</span>
                              <span style="color:var(--ink-soft); font-size:0.875rem; line-height:1; margin-top:0.15rem;">&rarr;</span>
                            </div>
                            <a class="evo-link ${s.toId === mon.id ? 'current' : ''}" href="pokemon.html?id=${s.toId}" title="#${s.toId}">
                              <img src="${defaultArt(s.toId)}" alt="#${s.toId}" width="44" height="44" loading="lazy">
                              <span>#${String(s.toId).padStart(3, "0")}</span>
                            </a>
                          `).join("")}
                        </div>
                      `;
                    }
                    return `
                      <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.35rem;">
                        ${evoSteps.steps.map(s => `
                          <div style="display:grid; grid-template-columns:max-content minmax(0,1fr) max-content; align-items:center; gap:0.45rem; width:100%;">
                            <a class="evo-link ${s.fromId === mon.id ? 'current' : ''}" style="justify-self:center;" href="pokemon.html?id=${s.fromId}" title="#${s.fromId}">
                              <img src="${defaultArt(s.fromId)}" alt="#${s.fromId}" width="38" height="38" loading="lazy">
                              <span>#${String(s.fromId).padStart(3, "0")}</span>
                            </a>
                            <div style="display:inline-flex; flex-direction:column; align-items:center; justify-self:stretch; width:100%; padding:0 0.15rem; min-width:0;">
                              <span style="font-family:var(--font-num); font-size:0.625rem; color:var(--mark); white-space:normal; max-width:18rem; text-align:center; overflow-wrap:anywhere; font-weight:700; background:rgba(238,21,21,0.08); padding:0.1rem 0.35rem; border-radius:3px; border:1px solid rgba(238,21,21,0.2);">${esc(s.condition)}</span>
                              <span style="color:var(--ink-soft); font-size:0.875rem; line-height:1; margin-top:0.15rem;">&rarr;</span>
                            </div>
                            <a class="evo-link ${s.toId === mon.id ? 'current' : ''}" style="justify-self:center;" href="pokemon.html?id=${s.toId}" title="#${s.toId}">
                              <img src="${defaultArt(s.toId)}" alt="#${s.toId}" width="38" height="38" loading="lazy">
                              <span>#${String(s.toId).padStart(3, "0")}</span>
                            </a>
                          </div>
                        `).join("")}
                      </div>
                    `;
                  })()}
                </div>
              ` : (evoIds.length > 1 ? `
                <div>
                  <p class="field-title">Evolution Line</p>
                  <div class="evo-row">
                    ${evoIds.map(eid => `
                      <a class="evo-link ${eid === mon.id ? 'current' : ''}" href="pokemon.html?id=${eid}" title="#${eid}">
                        <img src="${defaultArt(eid)}" alt="#${eid}" width="48" height="48" loading="lazy">
                        <span>#${String(eid).padStart(3, "0")}</span>
                      </a>
                    `).join("")}
                  </div>
                </div>
              ` : "")}
            </div>

            <div class="fields-col">
              <p class="field-title">Base Stats</p>
              <div class="stats-list">
                ${statFields.map(s => {
                  const statObj = mon.stats.find(st => st.name === s.key);
                  const v = statObj ? statObj.value : 0;
                  const pct = Math.min(100, Math.round((v / 255) * 100));
                  return `
                    <div class="stat">
                      <span>${s.label}</span>
                      <div class="bar"><i style="width:${pct}%; background:${barColor(v)}"></i></div>
                      <span>${v}</span>
                    </div>`;
                }).join("")}
              </div>
            </div>
          </div>

          ${spec?.varieties?.length > 1 ? `
            <details class="forms-comparison" id="forms-comparison" style="margin:1.25rem 0 0.5rem; padding-top:1rem; border-top:1px solid var(--line);">
              <summary class="field-title" style="margin-bottom:0.75rem; cursor:pointer;">Available Forms &amp; Variations (${spec.varieties.length})</summary>
              <div id="forms-content"><p class="soft">Open to load form comparison.</p></div>
            </details>
          ` : ""}

          <div class="fields-bottom">
            <p style="color:var(--ink-soft); font-family:var(--font-num); font-size:0.8125rem; margin:0 0 0.4rem 0; padding:0; border:0;">
              ${region.name} #${region.start}–${region.end}
            </p>

            <div class="detail-actions">
              <button class="btn btn-paper" id="cry" type="button">Play cry</button>
              <button class="btn btn-paper" id="shiny" type="button">${isShiny ? "Show default" : "Show shiny"}</button>
              <a class="btn btn-paper" href="battle-lab.html?left=${mon.id}">Battle Lab</a>
              <a class="btn btn-paper" href="lineup.html?a=${mon.id}">Compare in lineup</a>
              <button class="btn btn-paper" id="copy" type="button">Copy link</button>
              <a class="btn btn-paper" href="pokedex.html?region=${region.slug}">Close file</a>
            </div>
            <p id="copy-feedback" role="status" aria-live="polite" hidden style="margin:0.5rem 0; color:var(--ink-soft);"></p>
            <label id="copy-fallback-wrap" hidden style="display:block; margin-top:0.5rem;">
              Copy this link manually
              <input id="copy-fallback" type="text" readonly value="${esc(location.href)}" aria-label="Link to copy manually" style="display:block; width:100%; margin-top:0.25rem;">
            </label>
          </div>
        </div>
      </div>
    `;

    const formsDisclosure = document.getElementById("forms-comparison");
    formsDisclosure?.addEventListener("toggle", async () => {
      if (!formsDisclosure.open || formsDisclosure.dataset.loaded === "true" || formsDisclosure.dataset.loading === "true") return;
      const content = document.getElementById("forms-content");
      if (!content) return;
      formsDisclosure.dataset.loading = "true";
      content.textContent = "Loading form comparison…";
      const forms = await getForms(spec?.varieties, mon).catch(() => []);
      content.innerHTML = forms.length > 1
        ? renderFormsHtml(forms, mon)
        : `<p class="soft" role="status">Form comparison is unavailable right now.</p>`;
      formsDisclosure.dataset.loaded = "true";
      formsDisclosure.dataset.loading = "false";
    });

    if (has3D) {
      const poke3d = document.getElementById("poke-3d");
      const artImg = document.getElementById("art");
      const btn3d = document.getElementById("btn-mode-3d");
      const btn2d = document.getElementById("btn-mode-2d");
      const animeBtn = document.getElementById("btn-mode-anime");
      const legacyBtn = document.getElementById("btn-mode-pixel");
      const caption = document.getElementById("art-caption");
      const burst = document.getElementById("heart-burst");
      const cameraControls = document.getElementById("stage-camera-controls");
      const baseActions = document.getElementById("stage-base-actions");
      const actionsBox = document.getElementById("stage-actions");
      const rotateBtn = document.getElementById("btn-rotate");
      const zoomInBtn = document.getElementById("btn-zoom-in");
      const zoomOutBtn = document.getElementById("btn-zoom-out");
      const feedback = document.getElementById("stage-feedback");

      let animTimer = null;
      let sourceReady = false;
      let fallbackAttempted = false;
      let usingFallback = false;
      let modelFailed = false;
      let activeMode = "3d";
      let animeFailed = false;
      let legacySpriteFailed = false;
      let resolvedClips = new Map();

      const isStaticSource = () => mon.id > 151 || usingFallback;

      function syncStageMode(mode = activeMode) {
        if (mode === "3d" && modelFailed) mode = "2d";
        if (mode === "anime" && (!animeArtwork || animeFailed || isShiny)) mode = "2d";
        if (mode === "legacy" && (!hasLegacyAnimatedSprite || legacySpriteFailed || isShiny)) mode = "2d";
        activeMode = mode;
        const show3d = mode === "3d" && !isShiny;
        const showAnime = mode === "anime" && !isShiny;
        const showLegacy = mode === "legacy" && !isShiny;
        if (poke3d) poke3d.style.display = show3d ? "block" : "none";
        if (artImg) artImg.style.display = show3d ? "none" : "block";
        if (btn3d) {
          btn3d.classList.toggle("is-active", show3d);
          btn3d.setAttribute("aria-pressed", String(show3d));
        }
        if (btn2d) {
          btn2d.classList.toggle("is-active", mode === "2d");
          btn2d.setAttribute("aria-pressed", String(mode === "2d"));
        }
        if (animeBtn) {
          animeBtn.classList.toggle("is-active", showAnime);
          animeBtn.setAttribute("aria-pressed", String(showAnime));
          animeBtn.disabled = isShiny || animeFailed || !animeArtwork;
          animeBtn.textContent = animeFailed || !animeArtwork ? "Anime unavailable" : "Anime 2D";
          if (isShiny && animeArtwork && !animeFailed) {
            animeBtn.title = "Turn off Shiny to view official animation artwork";
            animeBtn.setAttribute("aria-label", "Anime 2D mode unavailable while Shiny is on");
          } else if (animeFailed) {
            animeBtn.title = "Official animation artwork could not be loaded for this Pokémon";
            animeBtn.setAttribute("aria-label", "Anime 2D mode unavailable: official animation artwork could not be loaded");
          } else if (animeArtwork) {
            animeBtn.title = "Show verified official animation artwork";
            animeBtn.setAttribute("aria-label", "Anime 2D mode");
          }
        }
        if (legacyBtn) {
          legacyBtn.classList.toggle("is-active", showLegacy);
          legacyBtn.setAttribute("aria-pressed", String(showLegacy));
          legacyBtn.disabled = isShiny || legacySpriteFailed;
          legacyBtn.textContent = legacySpriteFailed ? "Pixel unavailable" : "Pixel GIF";
          if (isShiny && !legacySpriteFailed) {
            legacyBtn.title = "Turn off Shiny to view the animated pixel sprite";
            legacyBtn.setAttribute("aria-label", "Pixel GIF mode unavailable while Shiny is on");
          } else if (legacySpriteFailed) {
            legacyBtn.title = "The animated pixel sprite could not be loaded for this Pokémon";
            legacyBtn.setAttribute("aria-label", "Pixel GIF mode unavailable: sprite could not be loaded");
          } else {
            legacyBtn.title = "Show Pokémon Black and White animated pixel sprite";
            legacyBtn.setAttribute("aria-label", "Pixel GIF mode");
          }
        }
        if (cameraControls) cameraControls.style.display = show3d ? "inline-flex" : "none";
        if (baseActions) baseActions.style.display = "inline-flex";
        if (actionsBox) actionsBox.style.display = show3d && !isStaticSource() && resolvedClips.size ? "inline-flex" : "none";
        if (zoomInBtn) zoomInBtn.disabled = !sourceReady || modelFailed;
        if (zoomOutBtn) zoomOutBtn.disabled = !sourceReady || modelFailed;
        if (rotateBtn) rotateBtn.disabled = reduce || !sourceReady || modelFailed;
        if (!show3d) {
          clearTimeout(animTimer);
          poke3d?.removeAttribute("auto-rotate");
          rotateBtn?.setAttribute("aria-pressed", "false");
          poke3d?.pause?.();
          if (burst) burst.replaceChildren();
          if (feedback) feedback.textContent = "";
        }
        if (caption) {
          if (show3d) {
            caption.textContent = !sourceReady
              ? (usingFallback ? "Loading static 3D fallback preview…" : mon.id > 151 ? "Loading static 3D preview…" : "Loading 3D model…")
              : usingFallback ? "Static 3D Preview (fallback) · Drag to rotate · Scroll/pinch to zoom" : mon.id > 151 ? "Static 3D Preview · Drag to rotate · Scroll/pinch to zoom" : "3D Model · Drag to rotate · Scroll/pinch to zoom";
          } else if (showAnime) {
            caption.textContent = `Official animation artwork · ${animeSeriesNames[animeArtwork.series] || "Pokémon animation"} · `;
            const source = document.createElement("a");
            source.href = animeFilePageUrl(animeArtwork);
            source.target = "_blank";
            source.rel = "noopener noreferrer";
            source.textContent = "Bulbagarden Archives source";
            caption.append(source);
          } else if (showLegacy) {
            caption.textContent = "Pokémon Black and White animated pixel sprite (Gen V)";
          } else {
            caption.textContent = isShiny
              ? "Shiny Form (standard 2D art) · Turn Shiny off to use Anime 2D"
              : animeFailed && mode === "2d"
                ? "Official anime art could not be loaded. Showing standard 2D art."
                : modelFailed ? "Default Form (2D Fallback)" : "Default Form (2D Art)";
          }
        }
      }

      stageModeController = syncStageMode;

      function getMatchingClip(pattern) {
        const available = poke3d?.availableAnimations || [];
        return available.find(a => pattern.test(a)) || null;
      }

      function getIdleClip() {
        return resolvedClips.get("idle") || null;
      }

      function playAction(actionName, duration = 2000) {
        if (!poke3d) return;
        clearTimeout(animTimer);
        const available = poke3d.availableAnimations || [];
        const clipKey = actionName === "pet" || actionName === "react" ? "happy" : actionName;
        const clip = resolvedClips.get(clipKey);
        if (!clip || !available.includes(clip) || isStaticSource() || activeMode !== "3d" || isShiny || modelFailed) return;
        const oneShot = ["attack", "happy", "pet", "react"].includes(actionName);
        if (clip) {
          try {
            poke3d.animationName = clip;
            poke3d.currentTime = 0;
            if (oneShot || reduce) poke3d.play({ repetitions: 1 });
            else poke3d.play();
          } catch (_) {}
        }
        if (oneShot && !reduce) {
          const idle = getIdleClip();
          if (!idle) return;
          animTimer = setTimeout(() => {
            if (activeMode !== "3d" || isShiny || modelFailed) return;
            try {
              poke3d.animationName = idle;
              poke3d.play();
            } catch (_) {}
          }, duration);
        }
      }

      function triggerHearts(e) {
        if (feedback) feedback.textContent = "Reacted ♥";
        if (reduce) return;
        if (!burst) return;
        const rect = burst.getBoundingClientRect();
        const x = e && e.clientX ? e.clientX - rect.left : rect.width / 2;
        const y = e && e.clientY ? e.clientY - rect.top : rect.height / 2;
        for (let i = 0; i < 4; i++) {
          const h = document.createElement("span");
          h.className = "heart-particle";
          h.style.left = `${x + (Math.random() * 60 - 30)}px`;
          h.style.top = `${y + (Math.random() * 40 - 20)}px`;
          burst.appendChild(h);
          setTimeout(() => h.remove(), 1200);
        }
      }

      function updateActionButtons() {
        const actionsBox = document.getElementById("stage-actions");
        if (!actionsBox || !poke3d) return;
        const available = poke3d.availableAnimations || [];
        if (available.length === 0) {
          actionsBox.replaceChildren();
          resolvedClips.clear();
          syncStageMode();
          return;
        }
        if (isStaticSource()) {
          resolvedClips.clear();
          actionsBox.replaceChildren();
          syncStageMode();
          return;
        }

        // Standard action set. Match each available clip once and retain its exact full name.
        const standardActions = [
          { key: "attack", label: "Attack", pattern: /attack|fight|strike|roar/i },
          { key: "happy", label: "Pet", pattern: /happy|glad|refresh|notice/i },
          { key: "walk", label: "Walk", pattern: /walk/i },
          { key: "run", label: "Run", pattern: /run/i },
          { key: "sleep", label: "Sleep", pattern: /sleep/i },
          { key: "idle", label: "Idle", pattern: /idle|wait|stand|loop/i }
        ];

        const matched = standardActions.filter(act => available.some(a => act.pattern.test(a)));
        resolvedClips = new Map(matched.map(act => [act.key, getMatchingClip(act.pattern)]));
        const idle = getIdleClip();
        if (!reduce && idle && activeMode === "3d" && !isShiny) {
          try {
            poke3d.animationName = idle;
            poke3d.play();
          } catch (_) {}
        }
        if (matched.length > 0) {
          actionsBox.innerHTML = `<span style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft);">Animations</span>${matched.map(act =>
            `<button class="btn btn-sm btn-paper btn-action" data-action="${act.key}" type="button">${act.label}</button>`
          ).join("")}`;
        } else {
          actionsBox.innerHTML = "";
        }

        actionsBox.querySelectorAll(".btn-action").forEach(btn => {
          btn.addEventListener("click", (e) => {
            const act = btn.dataset.action;
            if (act === "happy") triggerHearts(e);
            playAction(act, 2000);
          });
        });
        if (btn2d?.classList.contains("is-active")) {
          actionsBox.style.display = "none";
        }
        syncStageMode();
      }

      function handleModelLoad() {
        sourceReady = true;
        modelFailed = false;
        if (isStaticSource()) {
          resolvedClips.clear();
          if (actionsBox) actionsBox.replaceChildren();
          poke3d?.pause?.();
        }
        syncStageMode();
      }

      poke3d?.addEventListener("load", updateActionButtons);
      poke3d?.addEventListener("load", handleModelLoad);
      if (poke3d?.loaded) {
        updateActionButtons();
        handleModelLoad();
      }

      document.getElementById("btn-cry-stage")?.addEventListener("click", () => window.pokeApi.playCry(mon.id));
      document.getElementById("btn-react-stage")?.addEventListener("click", () => {
        triggerHearts();
        playAction("react", 1800);
      });
      rotateBtn?.addEventListener("click", () => {
        const rotating = rotateBtn.getAttribute("aria-pressed") !== "true";
        rotateBtn.setAttribute("aria-pressed", String(rotating));
        if (rotating) poke3d?.setAttribute("auto-rotate", "");
        else poke3d?.removeAttribute("auto-rotate");
      });

      function adjustZoom(direction) {
        if (!sourceReady || modelFailed || !poke3d?.getCameraOrbit) return;
        const { theta, phi, radius } = poke3d.getCameraOrbit();
        if (![theta, phi, radius].every(Number.isFinite) || radius <= 0) return;
        const nextRadius = radius * (direction < 0 ? 1.2 : 1 / 1.2);
        poke3d.cameraOrbit = `${theta}rad ${phi}rad ${nextRadius}m`;
        poke3d.jumpCameraToGoal?.();
      }
      zoomInBtn?.addEventListener("click", () => adjustZoom(1));
      zoomOutBtn?.addEventListener("click", () => adjustZoom(-1));

      // 切换 3D / 2D
      btn3d?.addEventListener("click", () => {
        if (isShiny) setShiny(mon, false);
        isAnimeArt = false;
        isLegacySprite = false;
        if (artImg) {
          artImg.src = defaultArt(mon.id);
          artImg.alt = `${mon.name} official artwork`;
        }
        if (poke3d) poke3d.style.display = "block";
        if (artImg) artImg.style.display = "none";
        btn3d.classList.add("is-active");
        btn2d?.classList.remove("is-active");
        const actionsBox = document.getElementById("stage-actions");
        if (actionsBox) actionsBox.style.display = "inline-flex";
        syncStageMode("3d");
      });

      btn2d?.addEventListener("click", () => {
        isAnimeArt = false;
        isLegacySprite = false;
        if (artImg) {
          artImg.src = isShiny ? shinyArt(mon.id) : defaultArt(mon.id);
          artImg.alt = `${mon.name} official artwork`;
        }
        syncStageMode("2d");
      });

      animeBtn?.addEventListener("click", () => {
        if (!animeArtwork || animeFailed || isShiny || !artImg) return;
        isAnimeArt = true;
        isLegacySprite = false;
        artImg.alt = `${mon.name} official animation artwork`;
        artImg.src = animeArtUrl(animeArtwork);
        syncStageMode("anime");
      });

      legacyBtn?.addEventListener("click", () => {
        if (!hasLegacyAnimatedSprite || legacySpriteFailed || isShiny || !artImg) return;
        isAnimeArt = false;
        isLegacySprite = true;
        artImg.alt = `${mon.name} animated pixel sprite from Pokémon Black and White`;
        artImg.src = legacyAnimatedSpriteUrl(mon.id);
        syncStageMode("legacy");
      });

      artImg?.addEventListener("error", () => {
        if (isAnimeArt && artImg.src === animeArtUrl(animeArtwork)) {
          isAnimeArt = false;
          animeFailed = true;
          animeBtn.disabled = true;
          animeBtn.title = "Official animation artwork could not be loaded for this Pokémon";
          animeBtn.setAttribute("aria-label", "Anime 2D mode unavailable: official animation artwork could not be loaded");
          animeBtn.setAttribute("aria-pressed", "false");
          artImg.alt = `${mon.name} official artwork`;
          artImg.src = defaultArt(mon.id);
          syncStageMode("2d");
          return;
        }
        if (isLegacySprite && artImg.src === legacyAnimatedSpriteUrl(mon.id)) {
          isLegacySprite = false;
          legacySpriteFailed = true;
          artImg.alt = `${mon.name} official artwork`;
          artImg.src = defaultArt(mon.id);
          syncStageMode("2d");
        }
      });

      // Fall back once to a static preview for Kanto, then keep the 2D art available.
      poke3d?.addEventListener("error", () => {
        sourceReady = false;
        clearTimeout(animTimer);
        poke3d.pause?.();
        poke3d.removeAttribute("auto-rotate");
        rotateBtn?.setAttribute("aria-pressed", "false");
        if (burst) burst.replaceChildren();
        if (feedback) feedback.textContent = "";
        resolvedClips.clear();
        if (actionsBox) {
          actionsBox.replaceChildren();
          actionsBox.style.display = "none";
        }
        if (mon.id <= 151 && !fallbackAttempted) {
          fallbackAttempted = true;
          usingFallback = true;
          poke3d.alt = `${mon.name} Static 3D Preview (fallback)`;
          poke3d.removeAttribute("autoplay");
          poke3d.removeAttribute("animation-name");
          poke3d.src = staticModel3dUrl(mon.id);
          syncStageMode();
          return;
        }
        modelFailed = true;
        if (poke3d) poke3d.style.display = "none";
        if (artImg) artImg.style.display = "block";
        if (btn3d) btn3d.disabled = true;
        btn2d?.classList.add("is-active");
        if (actionsBox) actionsBox.style.display = "none";
        syncStageMode("2d");
      });

      syncStageMode();
    }

    const well = document.getElementById("well");
    const closeBall = document.getElementById("close-ball");
    function setBallOpen(isOpen, isUserAction = false) {
      if (!well || well.disabled) return;
      const ball = well.closest(".stage-ball");
      const viewer = document.getElementById("stage-viewer-wrap");
      ball?.classList.toggle("is-open", isOpen);
      well.setAttribute("aria-expanded", String(isOpen));
      well.setAttribute("aria-label", isOpen ? "Close Poké Ball" : "Open Poké Ball");
      viewer?.toggleAttribute("inert", !isOpen);
      viewer?.setAttribute("aria-hidden", String(!isOpen));
      if (closeBall) closeBall.hidden = !isOpen;
      if (isOpen) {
        if (isUserAction) window.pokeApi.playCry(mon.id);
        else window.pokeApi.playCryAuto(mon.id);
      } else {
        well.focus();
      }
    }

    well?.addEventListener("click", (e) => {
      e.stopPropagation();
      setBallOpen(well.getAttribute("aria-expanded") !== "true", true);
    });
    const ballContainer = well?.closest(".stage-ball");
    ballContainer?.addEventListener("click", () => {
      if (!ballContainer.classList.contains("is-open")) {
        setBallOpen(true, true);
      }
    });
    closeBall?.addEventListener("click", () => setBallOpen(false, true));

    // Keep the plain viewer open; the disabled, hidden well makes this a no-op.
    setBallOpen(true, false);

    bindBeltControl(mon);

    const favBtn = document.getElementById("favorite");
    favBtn?.addEventListener("click", () => {
      const active = store.toggleFavorite(mon.id);
      favBtn.textContent = active ? "★ Favorited" : "☆ Favorite";
      favBtn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.getElementById("cry")?.addEventListener("click", () => {
      window.pokeApi.playCry(mon.id);
    });

    const shinyBtn = document.getElementById("shiny");
    shinyBtn?.addEventListener("click", () => setShiny(mon, !isShiny));

    // 该只没有闪光图：退回普通图并禁用按钮，不悄悄显示普通图冒充闪光
    document.getElementById("art")?.addEventListener("error", () => {
      if (!isShiny) return;
      setShiny(mon, false);
      shinyBtn.disabled = true;
      shinyBtn.textContent = "No shiny art";
    });

    document.getElementById("copy")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const feedback = document.getElementById("copy-feedback");
        const fallback = document.getElementById("copy-fallback-wrap");
        if (feedback) {
          feedback.hidden = false;
          feedback.textContent = "Page link copied.";
        }
        if (fallback) fallback.hidden = true;
        const copyBtn = document.getElementById("copy");
        if (copyBtn) {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
        }
      } catch (_) {
        const feedback = document.getElementById("copy-feedback");
        const fallback = document.getElementById("copy-fallback-wrap");
        const input = document.getElementById("copy-fallback");
        if (feedback) {
          feedback.hidden = false;
          feedback.textContent = "Clipboard access is unavailable. Copy the link below.";
        }
        if (fallback) fallback.hidden = false;
        if (input) {
          input.value = location.href;
          input.focus();
          input.select();
        }
      }
    });

    document.getElementById("retry-sync")?.addEventListener("click", () => {
      location.reload();
    });

    // 如果是离线名录降级模式，后台静默重试 1 次拉取实时数据，拉到后无缝更新
    if (mon.isOffline) {
      setTimeout(async () => {
        try {
          const fresh = await window.pokeApi.getPokemon(mon.id);
          if (fresh && !fresh.isOffline) {
            await render(fresh);
          }
        } catch (_) {}
      }, 2500);
    }
  }

  function showMessage(html) {
    root.innerHTML = `
      <h1 class="sr-only">Pokémon file</h1>
      <div style="text-align:center; padding:4rem 1rem;">
        <p class="empty" role="alert" style="margin-bottom:1rem;">${html}</p>
      </div>`;
  }

  // 页面主入口
  if (!key) {
    showMessage(`No Pokémon file specified. <a class="link-action" href="pokedex.html">Return to Dex</a>.`);
    return;
  }

  showMessage("Opening file…");

  let mon = null;
  try {
    mon = await window.pokeApi.getPokemon(key);
  } catch (_) {}

  if (!mon) {
    // 编号或名字在本地名录里，说明是网络问题；否则是输入有误
    const known = /^\d+$/.test(key)
      ? window.getSpeciesById && window.getSpeciesById(Number(key))
      : (window.ALL_SPECIES || []).some(s => s.name.toLowerCase() === key.toLowerCase());
    showMessage(known
      ? `Could not load Pokémon file from PokeAPI. <a class="link-action" href="${esc(location.href)}">Retry loading</a> or <a class="link-action" href="pokedex.html">Return to Dex</a>.`
      : `No Pokémon matches that number or name (valid range is 1 to 1025). <a class="link-action" href="pokedex.html">Return to Dex</a>.`);
    return;
  }

  store.markSeen(mon.id);
  store.setLast(mon.id);
  document.title = `#${String(mon.id).padStart(3, "0")} ${mon.name} — 151 File`;
  history.replaceState(null, "", `pokemon.html?id=${mon.id}`);
  await render(mon);

  // 进场叫声：只在声音开关打开时自动播放
  window.pokeApi.playCryAuto(mon.id);

  // 键盘快捷导航 (左右切换编号，Esc 返回图鉴)
  document.addEventListener("keydown", e => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const activeDialog = Array.from(document.querySelectorAll("dialog[open], [role='dialog'][aria-modal='true']"))
      .some(dialog => !dialog.closest("[hidden]"));
    if (activeDialog) return;

    const region = getRegion(mon.id);
    if (e.key === "Escape") {
      e.preventDefault();
      const openBall = document.querySelector(".stage-ball.is-open");
      if (openBall && !document.getElementById("well")?.disabled) {
        const closeButton = document.getElementById("close-ball");
        if (closeButton && !closeButton.hidden && !closeButton.disabled) {
          closeButton.click();
        } else {
          const well = document.getElementById("well");
          if (well) {
            well.disabled = false;
            well.click();
          }
        }
        return;
      }
      location.href = `pokedex.html?region=${region.slug}`;
      return;
    }

    const target = e.target;
    if (target?.isContentEditable || target?.closest?.("input, textarea, select, button, a, [contenteditable='true'], [role='button'], [role='textbox'], [role='combobox']")) return;
    if (e.key === "ArrowRight" && mon.id < region.end) {
      e.preventDefault();
      location.href = `pokemon.html?id=${mon.id + 1}`;
    }
    if (e.key === "ArrowLeft" && mon.id > region.start) {
      e.preventDefault();
      location.href = `pokemon.html?id=${mon.id - 1}`;
    }
    if (e.key.toLowerCase() === "f") {
      e.preventDefault();
      document.getElementById("copy")?.click();
    }
  });
});
```

---

### 3.8 `js/types.js` (属性色票与矩阵交互)

- **文件路径**: `js/types.js`  
- **代码行数**: 84 行  
- **文件大小**: 3,116 字节  

```javascript
/**
 * 151 FILE — Types Page UI Logic
 * 渲染 18 属性芯片与 18×18 克制矩阵，支持十字聚焦高亮
 */

document.addEventListener("DOMContentLoaded", () => {
  const tc = window.TYPES_CHART;
  if (!tc) return;

  const wallEl = document.getElementById("wall");
  const chartEl = document.getElementById("chart");

  // 1. 渲染顶部 18 属性色票芯片
  if (wallEl) {
    wallEl.innerHTML = tc.TYPES.map(t => {
      const isWhite = tc.WHITE_TEXT_TYPES.has(t);
      const bg = tc.TYPE_COLORS[t];
      return `<a class="chip ${isWhite ? 'w' : ''}" style="background:${bg}" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`;
    }).join("");
  }

  // 2. 渲染 18×18 攻击/防御克制表
  if (chartEl) {
    let html = `<thead><tr><th><span class="sr-only">Attacking type (rows) against defending type (columns)</span></th>${tc.TYPES.map((t, j) => `<th data-c="${j}" title="Defending: ${t}"><a href="pokedex.html?type=${t}" aria-label="Filter Dex by defending type ${t}">${t.slice(0, 3)}</a></th>`).join("")}</tr></thead><tbody>`;

    tc.TYPES.forEach((atk, i) => {
      html += `<tr data-r="${i}"><th data-r="${i}" title="Attacking: ${atk}"><a href="pokedex.html?type=${atk}" aria-label="Filter Dex by attacking type ${atk}">${atk.slice(0, 3)}</a></th>`;
      tc.TYPES.forEach((def, j) => {
        const m = tc.getEffectiveness(atk, def);
        const cls = tc.getMultiplierClass(m);
        const lbl = tc.getMultiplierLabel(m);
        html += `<td class="${cls}" data-r="${i}" data-c="${j}"><a href="pokedex.html?type=${def}" title="${atk} -> ${def}: ${m}×" aria-label="${atk} attacking ${def}: ${m}× effectiveness">${lbl}</a></td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody>`;
    chartEl.innerHTML = html;

    // 3. 十字聚焦高亮交互 (行与列)
    let hoveredCell = null;
    let focusedCell = null;
    const highlightCross = cell => {
      chartEl.querySelectorAll(".hi").forEach(n => n.classList.remove("hi"));
      if (!cell) return;
      const r = cell.dataset.r;
      const c = cell.dataset.c;
      if (r !== undefined) {
        chartEl.querySelector(`tr[data-r="${r}"]`)?.classList.add("hi");
        chartEl.querySelectorAll(`th[data-r="${r}"]`).forEach(n => n.classList.add("hi"));
      }
      if (c !== undefined) {
        chartEl.querySelectorAll(`[data-c="${c}"]`).forEach(n => n.classList.add("hi"));
      }
    };

    chartEl.addEventListener("mouseover", e => {
      const cell = e.target.closest("[data-r],[data-c]");
      if (!cell) return;
      hoveredCell = cell;
      highlightCross(cell);
    });

    chartEl.addEventListener("focusin", e => {
      const cell = e.target.closest("[data-r],[data-c]");
      if (!cell) return;
      focusedCell = cell;
      highlightCross(cell);
    });

    chartEl.addEventListener("focusout", e => {
      if (chartEl.contains(e.relatedTarget)) return;
      focusedCell = null;
      highlightCross(hoveredCell);
    });

    chartEl.addEventListener("mouseleave", () => {
      hoveredCell = null;
      highlightCross(focusedCell);
    });

  }
});
```

---

### 3.9 `js/team.js` (腰带存储与拖拽排序)

- **文件路径**: `js/team.js`  
- **代码行数**: 298 行  
- **文件大小**: 10,585 字节  

```javascript
/**
 * 151 FILE — Belt (Team) Page Logic
 * 遵循 pokemon-web-project-plan.md §4.5 与 AGENTS.md
 * - 键名固定：file151.belt (最长 6)
 * - 槽内拖拽换序
 * - 移除与一键清空
 * - 空槽直链 Dex
 */

document.addEventListener("DOMContentLoaded", () => {
  const slotsEl = document.getElementById("slots");
  const clearBtn = document.getElementById("clear");

  const load = () => window.store.belt();
  const save = (ids) => window.store.setBelt(ids);

  function art(id) {
    return window.pokeApi
      ? window.pokeApi.artUrl(id)
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  }

  function getName(id) {
    if (window.getSpeciesById) {
      const spec = window.getSpeciesById(id);
      if (spec) return spec.name;
    }
    return `#${id}`;
  }

  let ids = load();
  let fromIndex = null;

  async function render() {
    ids = load();
    const mons = await Promise.all(ids.map(id => window.pokeApi ? window.pokeApi.getPokemon(id).catch(() => null) : null));
    const cells = [];
    for (let i = 0; i < 6; i++) {
      const id = ids[i];
      const m = mons[i];
      if (!id || !m) {
        cells.push(`<a class="slot empty" href="pokedex.html" title="Open Pokédex to add a Pokémon">+ Empty slot<br><span style="font-size:0.75rem; font-weight:400; color:var(--ink-soft)">Open Dex</span></a>`);
        continue;
      }
      const speed = (m.stats?.find(s => s.name === "speed") || {}).value || 0;
      cells.push(`
        <article class="slot" draggable="true" data-i="${i}">
          <a href="pokemon.html?id=${id}" title="Open #${id} ${m.name}">
            <img src="${art(id)}" alt="${m.name} 3D Model" loading="lazy" />
          </a>
          <span class="id">#${String(id).padStart(3, "0")}</span>
          <p class="name">${m.name}</p>
          <p class="types-row" style="font-size:0.75rem; color:var(--ink-soft); margin:0.2rem 0; font-weight:700; text-transform:uppercase;">${(m.types || []).join(" · ")}</p>
          <p class="speed-row" style="font-size:0.75rem; font-family:var(--font-num); color:var(--ink-soft); margin-bottom:0.4rem;">spe ${speed}</p>
          <div class="slot-tools">
            <button class="mv" type="button" data-mv="-1" data-i="${i}" aria-label="Move ${m.name} left" ${i === 0 ? "disabled" : ""}>◀</button>
            <button class="rm" type="button" data-rm="${i}" title="Remove ${m.name} from belt">Remove</button>
            <button class="mv" type="button" data-mv="1" data-i="${i}" aria-label="Move ${m.name} right" ${i === ids.length - 1 ? "disabled" : ""}>▶</button>
          </div>
        </article>
      `);
    }

    if (slotsEl) {
      slotsEl.innerHTML = cells.join("");
      bindDragAndDrop();
    }

    const live = mons.filter(Boolean);
    const summaryLine = document.getElementById("belt-summary");
    if (summaryLine) {
      if (live.length < 6) {
        summaryLine.hidden = true;
      } else {
        const counts = {};
        live.forEach(m => (m.types || []).forEach(t => counts[t] = (counts[t] || 0) + 1));
        const dups = Object.entries(counts).filter(([, n]) => n >= 2).map(([t]) => t);
        const getSpe = (m) => (m.stats?.find(s => s.name === "speed") || {}).value || 0;
        const fast = live.reduce((a, b) => getSpe(a) >= getSpe(b) ? a : b);
        const slow = live.reduce((a, b) => getSpe(a) <= getSpe(b) ? a : b);
        summaryLine.hidden = false;
        summaryLine.textContent = [
          dups.length ? `Repeat: ${dups.join(", ")}` : "No repeat type",
          `Fastest ${fast.name} (${getSpe(fast)})`,
          `Slowest ${slow.name} (${getSpe(slow)})`
        ].join(" · ");
      }
    }

    const analysisEl = document.getElementById("team-analysis");
    if (analysisEl) {
      if (live.length < 6) {
        analysisEl.hidden = true;
      } else {
        analysisEl.hidden = false;
        renderRadar(live);
        renderHeatmap(live);
      }
    }
  }

  function renderRadar(live) {
    const canvas = document.getElementById("radar-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const center = { x: w / 2, y: h / 2 };
    const maxR = 105;
    const labels = ["HP", "ATK", "DEF", "SPE", "SPD", "SPA"];
    const keys = ["hp", "attack", "defense", "speed", "special-defense", "special-attack"];
    const totalAxes = labels.length;

    // 1. Draw web grid (3 rings)
    for (let level = 1; level <= 3; level++) {
      const r = (maxR / 3) * level;
      ctx.beginPath();
      for (let i = 0; i < totalAxes; i++) {
        const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
        const x = center.x + r * Math.cos(angle);
        const y = center.y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(42, 69, 94, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 2. Draw axis lines & labels
    ctx.font = "600 11px var(--font-num, sans-serif)";
    ctx.fillStyle = "#A8C2D8";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < totalAxes; i++) {
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const x = center.x + maxR * Math.cos(angle);
      const y = center.y + maxR * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = "rgba(42, 69, 94, 0.4)";
      ctx.stroke();

      const labelX = center.x + (maxR + 20) * Math.cos(angle);
      const labelY = center.y + (maxR + 15) * Math.sin(angle);
      ctx.fillText(labels[i], labelX, labelY);
    }

    // 3. Compute team average stats
    const avgStats = keys.map(k => {
      const sum = live.reduce((acc, m) => {
        const st = (m.stats || []).find(s => s.name === k);
        return acc + (st ? (st.value ?? st.base_stat ?? 0) : 0);
      }, 0);
      return Math.round(sum / live.length);
    });

    // 4. Draw polygon
    ctx.beginPath();
    for (let i = 0; i < totalAxes; i++) {
      const val = avgStats[i];
      const ratio = Math.min(1, Math.max(0.1, val / 150));
      const r = maxR * ratio;
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const x = center.x + r * Math.cos(angle);
      const y = center.y + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 203, 5, 0.25)";
    ctx.fill();
    ctx.strokeStyle = "#FFCB05";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Point dots
    for (let i = 0; i < totalAxes; i++) {
      const val = avgStats[i];
      const ratio = Math.min(1, Math.max(0.1, val / 150));
      const r = maxR * ratio;
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2;
      const x = center.x + r * Math.cos(angle);
      const y = center.y + r * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#FFCB05";
      ctx.fill();
    }
  }

  function renderHeatmap(live) {
    const container = document.getElementById("defense-heatmap");
    if (!container || !window.TYPES_CHART) return;
    const tc = window.TYPES_CHART;
    const TYPES = tc.TYPES || [
      "normal", "fire", "water", "electric", "grass", "ice",
      "fighting", "poison", "ground", "flying", "psychic", "bug",
      "rock", "ghost", "dragon", "dark", "steel", "fairy"
    ];

    const html = TYPES.map(atkType => {
      const mults = live.map(m => tc.getDefensiveMultiplier(atkType, m.types || []));
      const best = Math.min(...mults);

      let color = "#7EB6D9";
      let tag = "1.0× Even";
      if (best === 0) { color = "#78C850"; tag = "0× Immune"; }
      else if (best <= 0.25) { color = "#78C850"; tag = "0.25× Quad"; }
      else if (best <= 0.5) { color = "#78C850"; tag = "0.5× Resist"; }
      else if (best >= 2) { color = "#EE1515"; tag = `${best}× Weak`; }

      const typeStyle = tc.getTypeStyle ? tc.getTypeStyle(atkType) : "background:#2A455E; color:#fff;";

      return `
        <div style="display:flex; align-items:center; justify-content:space-between; background:var(--sky-deep); border:1px solid var(--line); border-radius:3px; padding:0.35rem 0.5rem; font-family:var(--font-num); font-size:0.75rem;">
          <span class="chip" style="${typeStyle} font-size:0.6875rem; padding:0.1rem 0.35rem;">${atkType}</span>
          <span style="color:${color}; font-weight:700;">${tag}</span>
        </div>
      `;
    }).join("");

    container.innerHTML = html;
  }

  function bindDragAndDrop() {
    const items = document.querySelectorAll(".slot[draggable]");
    items.forEach(el => {
      el.addEventListener("dragstart", () => {
        fromIndex = Number(el.dataset.i);
        el.classList.add("drag");
      });

      el.addEventListener("dragend", () => {
        fromIndex = null;
        el.classList.remove("drag");
      });

      el.addEventListener("dragover", e => {
        e.preventDefault();
      });

      el.addEventListener("drop", e => {
        e.preventDefault();
        const toIndex = Number(el.dataset.i);
        if (fromIndex == null || fromIndex === toIndex) return;

        const next = ids.slice();
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        ids = next;
        save(ids);
        render();
      });
    });
  }

  // 槽位事件监听（移除单只 / 左右挪动）。挪动按钮同时解决手机上 HTML5 拖拽无效和键盘无法换序。
  slotsEl?.addEventListener("click", e => {
    const mv = e.target.closest("[data-mv]");
    if (mv && !mv.disabled) {
      const from = Number(mv.dataset.i);
      const to = from + Number(mv.dataset.mv);
      if (to < 0 || to >= ids.length) return;
      const next = ids.slice();
      [next[from], next[to]] = [next[to], next[from]];
      ids = next;
      save(ids);
      render();
      // 重画后把焦点放回同一只的同方向按钮，方便连续按
      slotsEl.querySelector(`[data-mv="${mv.dataset.mv}"][data-i="${to}"]`)?.focus();
      return;
    }
    const btn = e.target.closest("[data-rm]");
    if (!btn) return;
    const idx = Number(btn.dataset.rm);
    ids.splice(idx, 1);
    save(ids);
    render();
  });

  // 清空整条腰带
  clearBtn?.addEventListener("click", () => {
    if (ids.length === 0) return;
    ids = [];
    save(ids);
    render();
  });

  render();
});
```

---

### 3.10 `js/lineup.js` (弱点缺口计算与两只对比)

- **文件路径**: `js/lineup.js`  
- **代码行数**: 420 行  
- **文件大小**: 16,919 字节  

```javascript
/**
 * 151 FILE — Lineup Page Logic (Coverage + Holes + Side-by-side comparison)
 * 遵循 pokemon-web-project-plan.md §4.4 与 AGENTS.md 约束
 * - 腰带键名固定：file151.belt (id 数组，最长 6)
 * - 纯种族属性相克推演，不含招式
 * - 左右并排比对：URL 参数 ?a= & ?b=
 * - Holes 链接使用 ?resist=，禁止复用 ?type=
 */

(function () {
  const tc = window.TYPES_CHART;
  const api = window.pokeApi;

  const q = new URLSearchParams(location.search);
  let leftId = q.get("a") ? Number(q.get("a")) || q.get("a") : null;
  let rightId = q.get("b") ? Number(q.get("b")) || q.get("b") : null;
  let pickSide = "left";

  let leftMon = null;
  let rightMon = null;

  // 读取本地腰带
  function getBeltIds() {
    return window.store.belt();
  }

  // 获取宝可梦数据。请求失败时返回 null，页面明确显示“没拿到数据”，
  // 不再用 50/50/50 的假数据冒充（之前离线时会把 6 项能力都显示成 50）。
  async function fetchPokemon(idOrName) {
    if (!idOrName || !api) return null;
    try {
      const mon = await api.getPokemon(String(idOrName).trim());
      if (!mon) return null;
      const statsMap = {};
      mon.stats.forEach(s => { statsMap[s.name] = s.value; });
      return { id: mon.id, name: mon.name, types: mon.types, stats: statsMap, art: api.artUrl(mon.id) };
    } catch (_) {
      return null;
    }
  }

  // 渲染属性色票芯片
  function renderChips(list, makeHref) {
    if (!list || list.length === 0) {
      return `<span class="lineup-empty">None</span>`;
    }
    return list.map(t => {
      const bg = tc ? tc.TYPE_COLORS[t] || '#3A6A88' : '#3A6A88';
      const isWhite = tc ? tc.WHITE_TEXT_TYPES.has(t) : false;
      return `<a class="chip ${isWhite ? 'w' : ''}" style="background:${bg}" href="${makeHref(t)}">${t}</a>`;
    }).join("");
  }

  // 计算腰带覆盖度与盲点
  function calculateCoverage(mons) {
    const cover = [];
    const holes = [];
    const resists = [];
    const validMons = mons.filter(Boolean);
    if (validMons.length === 0 || !tc) return { cover, holes, resists };

    tc.TYPES.forEach(t => {
      // 进攻覆盖面 (Coverage)：队伍中有任一宝可梦的原生属性克制目标防御属性 (2×)
      const canHit = validMons.some(m => m.types.some(st => tc.getEffectiveness(st, t) === 2));
      if (canHit) cover.push(t);

      // 防御盲点 (Holes)：当该属性进攻时，队伍中受到最高伤害的宝可梦受到 >= 2× 伤害
      const worstDef = Math.max(...validMons.map(m => tc.getDefensiveMultiplier(t, m.types)));
      if (worstDef >= 2) holes.push(t);

      // 抵抗覆盖 (Resists)：当该属性进攻时，队伍中至少有一只宝可梦可以抵抗 (<= 0.5×)
      const bestDef = Math.min(...validMons.map(m => tc.getDefensiveMultiplier(t, m.types)));
      if (bestDef <= 0.5) resists.push(t);
    });

    return { cover, holes, resists };
  }

  // 更新当前 URL 查询参数
  function updateUrl() {
    if (typeof location === "undefined" || !location.href) return;
    try {
      const u = new URL(location.href);
      if (leftId) u.searchParams.set("a", leftId); else u.searchParams.delete("a");
      if (rightId) u.searchParams.set("b", rightId); else u.searchParams.delete("b");
      if (typeof history !== "undefined" && history.replaceState) {
        history.replaceState(null, "", u.toString());
      }
    } catch (_) {}
  }

  // 渲染单侧对比面板
  function renderPaneHtml(side, mon, other, requested) {
    if (!mon) {
      const msg = requested
        ? "No data for that Pokémon. Check the name or number, or try again if PokeAPI is down."
        : "Empty side. Search above or tap a Pokémon on the belt.";
      const errorId = `${side}-search-error`;
      return `
        <input id="${side}-search" data-side="${side}" placeholder="Search name or #..." aria-label="${side} Pokemon search" ${requested ? `aria-invalid="true" aria-describedby="${errorId}"` : ""} />
        <p class="lineup-search-error" id="${errorId}" role="status" aria-live="polite" ${requested ? "" : "hidden"} style="color:var(--ball); margin:0.35rem 0;">${requested ? msg : ""}</p>
      `;
    }

    const statFields = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "special-attack", label: "Sp. Atk" },
      { key: "special-defense", label: "Sp. Def" },
      { key: "speed", label: "Speed" }
    ];

    const typesText = (mon.types || []).join(" · ");

    return `
      <input id="${side}-search" data-side="${side}" value="${mon.name} (#${mon.id})" aria-label="${side} Pokemon: ${mon.name}" />
      <p class="lineup-search-error" id="${side}-search-error" role="status" aria-live="polite" hidden style="color:var(--ball); margin:0.35rem 0;"></p>
      <img src="${mon.art}" alt="${mon.name} 3D Model" />
      <p class="types-tag">${typesText}</p>
      <div class="lineup-stats">
        ${statFields.map(s => {
          const v = mon.stats?.[s.key] || 0;
          const ov = other?.stats?.[s.key];
          const hasLead = ov != null && v > ov;
          const isFaster = s.key === "speed" && ov != null && v > ov;
          const pct = Math.min(100, Math.round((v / 255) * 100));

          return `
            <div class="lineup-stat">
              <span class="stat-name">${s.label}</span>
              <div class="bar">
                <span class="${hasLead ? 'stat-lead' : ''}" style="width: ${pct}%"></span>
              </div>
              <span class="stat-val ${isFaster ? 'faster' : ''}">${v}${isFaster ? ' ★' : ''}</span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function clearSearchError(input) {
    const error = document.getElementById(`${input.dataset.side}-search-error`);
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    if (error) {
      error.hidden = true;
      error.textContent = "";
    }
  }

  function showSearchError(input, message) {
    const error = document.getElementById(`${input.dataset.side}-search-error`);
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", `${input.dataset.side}-search-error`);
    if (error) {
      error.hidden = false;
      error.textContent = message;
    }
  }

  function hasOpenDialog() {
    const overlay = document.getElementById("search-overlay");
    if (overlay && !overlay.hidden) return true;
    return Array.from(document.querySelectorAll("dialog[open], [role='dialog'][aria-modal='true']"))
      .some(dialog => !dialog.closest("[hidden]"));
  }

  function isControlTarget(target) {
    return Boolean(target?.isContentEditable || target?.closest?.("input, textarea, select, button, a, [contenteditable='true'], [role='button'], [role='textbox'], [role='combobox']"));
  }

  function isEditableTarget(target) {
    const field = target?.closest?.("input, textarea, select, [contenteditable='true'], [role='textbox'], [role='combobox']");
    if (!field || field.disabled || field.readOnly) return false;
    if (field.tagName !== "INPUT") return true;
    return !["button", "submit", "reset", "checkbox", "radio", "hidden", "range", "color", "file", "image"].includes((field.type || "text").toLowerCase());
  }

  // 全量渲染主函数
  async function render() {
    const beltIds = getBeltIds();
    const beltBox = document.getElementById("belt");
    const emptyBox = document.getElementById("belt-empty");

    if (!beltIds.length) {
      if (beltBox) beltBox.innerHTML = "";
      if (emptyBox) {
        emptyBox.hidden = false;
        emptyBox.innerHTML = `Belt is empty. <a class="link-action" href="pokedex.html">Open the dex</a> and add up to 6.`;
      }
      document.getElementById("coverage").innerHTML = `<span class="lineup-empty">None</span>`;
      document.getElementById("holes").innerHTML = `<span class="lineup-empty">None</span>`;
      document.getElementById("resists").innerHTML = `<span class="lineup-empty">None</span>`;
      document.getElementById("dupes").textContent = "";
    } else {
      if (emptyBox) emptyBox.hidden = true;

      // 并发拉取腰带 6 只数据
      const beltMons = await Promise.all(beltIds.map(fetchPokemon));
      const validBelt = beltMons.filter(Boolean);
      if (validBelt.length < beltIds.length && emptyBox) {
        emptyBox.hidden = false;
        if (!validBelt.length) {
          emptyBox.innerHTML = `Could not load data for belt Pokémon. <button class="btn btn-paper" id="belt-retry" type="button" style="padding:0.25rem 0.5rem; font-size:0.8125rem; margin-left:0.5rem;">Retry loading</button> or <a class="link-action" href="pokedex.html">pick replacements in Dex</a>.`;
        } else {
          emptyBox.innerHTML = `Could not load data for some belt members. <button class="btn btn-paper" id="belt-retry" type="button" style="padding:0.25rem 0.5rem; font-size:0.8125rem; margin-left:0.5rem;">Retry</button>. Analysis below only includes loaded Pokémon.`;
        }
        document.getElementById("belt-retry")?.addEventListener("click", () => render());
      }

      // 渲染腰带缩略图
      if (beltBox) {
        beltBox.innerHTML = validBelt.map(m => {
          const isOn = (leftId === m.id || rightId === m.id);
          return `
            <button class="mini" type="button" data-id="${m.id}" ${isOn ? 'data-on' : ''} title="${m.name} (#${m.id})">
              <img src="${m.art}" alt="${m.name}" loading="lazy" />
            </button>
          `;
        }).join("");
      }

      // 计算并渲染覆盖面、弱点与抵抗
      const { cover, holes, resists } = calculateCoverage(validBelt);
      document.getElementById("coverage").innerHTML = renderChips(cover, t => `pokedex.html?type=${t}`);
      document.getElementById("holes").innerHTML = renderChips(holes, t => `pokedex.html?resist=${t}`);
      document.getElementById("resists").innerHTML = renderChips(resists, t => `pokedex.html?resist=${t}`);

      // 重复属性统计
      const typeCounts = {};
      validBelt.forEach(m => {
        m.types.forEach(t => { typeCounts[t] = (typeCounts[t] || 0) + 1; });
      });
      const dupTypes = Object.entries(typeCounts).filter(([, count]) => count >= 2).map(([t, count]) => `${t} (×${count})`);
      document.getElementById("dupes").textContent = dupTypes.length ? "Repeated types: " + dupTypes.join(", ") : "";
    }

    // 左右并排比对
    leftMon = leftId ? await fetchPokemon(leftId) : null;
    rightMon = rightId ? await fetchPokemon(rightId) : null;

    const leftPane = document.getElementById("left");
    const rightPane = document.getElementById("right");
    if (leftPane) leftPane.innerHTML = renderPaneHtml("left", leftMon, rightMon, leftId);
    if (rightPane) rightPane.innerHTML = renderPaneHtml("right", rightMon, leftMon, rightId);

    renderVerdict();
    updateUrl();
  }

  let focusType = null;

  function renderVerdict() {
    const verdictEl = document.getElementById("lineup-verdict");
    if (!verdictEl) return;
    if (!leftMon || !rightMon) {
      verdictEl.hidden = true;
      verdictEl.innerHTML = "";
      return;
    }

    const aSpe = leftMon.stats?.speed ?? 0;
    const bSpe = rightMon.stats?.speed ?? 0;
    const faster = aSpe === bSpe
      ? "Both have the same speed"
      : (aSpe > bSpe ? `${leftMon.name} is faster (${aSpe} vs ${bSpe})` : `${rightMon.name} is faster (${bSpe} vs ${aSpe})`);

    let tank = "";
    if (focusType && tc) {
      const la = tc.getDefensiveMultiplier(focusType, leftMon.types);
      const lb = tc.getDefensiveMultiplier(focusType, rightMon.types);
      tank = la === lb
        ? `Both take ${la}× from ${focusType}`
        : (la < lb ? `${leftMon.name} resists ${focusType} better (${la}× vs ${lb}×)` : `${rightMon.name} resists ${focusType} better (${lb}× vs ${la}×)`);
    } else {
      tank = "Pick an attack type below to compare resistance";
    }

    const verdictText = `${faster}. ${tank}.`;

    verdictEl.hidden = false;
    verdictEl.innerHTML = `
      <p style="margin:0 0 0.5rem; font-size:1rem; color:var(--ink); font-weight:700;">${verdictText}</p>
      <div style="display:flex; gap:0.3rem; flex-wrap:wrap; align-items:center;">
        <span style="font-size:0.75rem; color:var(--ink-soft); font-family:var(--font-num);">Compare vs attack:</span>
        ${tc ? tc.TYPES.map(t => `<button type="button" class="chip ${t === focusType ? 'is-focus' : ''}" data-focus="${t}" style="${tc.getTypeStyle(t)} font-size:0.7rem; border:${t === focusType ? '2px solid var(--ink)' : 'none'}; cursor:pointer; padding:0.15rem 0.4rem; border-radius:3px;">${t}</button>`).join("") : ""}
      </div>
    `;
  }

  // 事件监听与委托
  document.addEventListener("DOMContentLoaded", () => {
    // 1. 点击腰带迷你球
    document.getElementById("belt")?.addEventListener("click", e => {
      const btn = e.target.closest("[data-id]");
      if (!btn) return;
      const id = Number(btn.dataset.id);

      if (!leftId) {
        leftId = id;
      } else if (!rightId) {
        rightId = id;
      } else {
        if (pickSide === "left") {
          leftId = id;
          pickSide = "right";
        } else {
          rightId = id;
          pickSide = "left";
        }
      }
      render();
    });

    // 2. 左右两侧搜索输入 (Enter 确认)
    document.querySelector(".lineup-pair")?.addEventListener("keydown", async e => {
      if (e.defaultPrevented || e.key !== "Enter" || hasOpenDialog()) return;
      const targetInput = e.target;
      const side = targetInput.dataset.side;
      if (!side || targetInput.tagName !== "INPUT") return;

      const val = targetInput.value.replace(/^#/, "").replace(/\(.*?\)/, "").trim();
      if (!val) return;

      const found = await fetchPokemon(val);
      if (found) {
        if (side === "left") leftId = found.id;
        else rightId = found.id;
        render();
      } else {
        showSearchError(targetInput, "No Pokémon was found. Check the name or number, or retry if data is temporarily unavailable.");
      }
    });

    document.querySelector(".lineup-pair")?.addEventListener("input", e => {
      if (e.target?.dataset?.side) clearSearchError(e.target);
    });

    // 3. 交换两侧
    document.getElementById("swap")?.addEventListener("click", () => {
      const temp = leftId;
      leftId = rightId;
      rightId = temp;
      render();
    });

    // 4. 清除单侧
    document.getElementById("cl")?.addEventListener("click", () => {
      leftId = null;
      render();
    });

    document.getElementById("cr")?.addEventListener("click", () => {
      rightId = null;
      render();
    });

    // 5. 复制链接
    document.getElementById("copy")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        const feedback = document.getElementById("copy-feedback");
        const fallback = document.getElementById("copy-fallback");
        if (feedback) {
          feedback.hidden = false;
          feedback.textContent = "Lineup link copied.";
        }
        if (fallback) fallback.hidden = true;
        const copyBtn = document.getElementById("copy");
        if (copyBtn) {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
        }
      } catch (_) {
        const feedback = document.getElementById("copy-feedback");
        const fallback = document.getElementById("copy-fallback");
        if (feedback) {
          feedback.hidden = false;
          feedback.textContent = "Clipboard access is unavailable. Copy the link below.";
        }
        if (fallback) {
          fallback.value = location.href;
          fallback.hidden = false;
          fallback.focus();
          fallback.select();
        }
      }
    });

    // 6. 点击对比攻击属性
    document.getElementById("lineup-verdict")?.addEventListener("click", e => {
      const btn = e.target.closest("[data-focus]");
      if (!btn) return;
      const t = btn.dataset.focus;
      focusType = (focusType === t) ? null : t;
      renderVerdict();
    });

    document.addEventListener("keydown", e => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || hasOpenDialog()) return;
      if (e.key === "/") {
        if (isEditableTarget(e.target)) return;
        const input = document.querySelector('.lineup-pair input[data-side="left"]');
        if (!input) return;
        e.preventDefault();
        input.focus();
      } else if (e.key.toLowerCase() === "f") {
        if (isControlTarget(e.target)) return;
        e.preventDefault();
        document.getElementById("copy")?.click();
      }
    }, true);

    // 初始化渲染
    render();
  });
})();
```

---

### 3.11 `js/moves.js` (招式库检索与分页渲染)

- **文件路径**: `js/moves.js`  
- **代码行数**: 224 行  
- **文件大小**: 8,635 字节  

```javascript
document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("move-grid");
  const search = document.getElementById("move-search");
  const typeSelect = document.getElementById("move-type");
  const categorySelect = document.getElementById("move-category");
  const statusEl = document.getElementById("move-status");
  const paginationEl = document.getElementById("move-pagination");
  const tc = window.TYPES_CHART;
  statusEl?.setAttribute("aria-live", "polite");

  function setStatus(message, retryAction = null) {
    statusEl.replaceChildren(document.createTextNode(message));
    if (!retryAction) return;
    const retry = document.createElement("button");
    retry.className = "btn btn-paper";
    retry.type = "button";
    retry.textContent = "Retry";
    retry.addEventListener("click", retryAction, { once: true });
    statusEl.append(" ", retry);
  }

  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");
  const htmlEntities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => htmlEntities[char]);
  const filterMoveCache = new Map();
  function getMoveNames(resource, name) {
    const key = `${resource}/${name}`;
    if (!filterMoveCache.has(key)) {
      const request = fetch(`https://pokeapi.co/api/v2/${resource}/${encodeURIComponent(name)}`)
        .then(resp => {
          if (!resp.ok) throw new Error("Move filter unavailable");
          return resp.json();
        })
        .then(data => new Set((data.moves || []).map(move => move.name)))
        .catch(err => {
          filterMoveCache.delete(key);
          throw err;
        });
      filterMoveCache.set(key, request);
    }
    return filterMoveCache.get(key);
  }
  const categoryIcons = {
    physical: '<svg viewBox="0 0 24 24"><path d="M5 19 19 5M11 5h8v8"/></svg>',
    special: '<svg viewBox="0 0 24 24"><path d="m12 2 2.5 7.2L22 12l-7.5 2.8L12 22l-2.5-7.2L2 12l7.5-2.8L12 2Z"/></svg>',
    status: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>'
  };
  const statMeter = (label, value, max, suffix = "") => {
    const percent = Number.isFinite(value) ? Math.min(100, Math.max(0, value) / max * 100) : 0;
    const displayValue = value == null ? "—" : escapeHTML(value);
    return `
      <div class="move-meter">
        <div class="move-meter-label"><span>${label}</span><strong>${displayValue}${value == null ? "" : suffix}</strong></div>
        <div class="move-meter-track" aria-hidden="true"><span style="width:${percent}%"></span></div>
      </div>
    `;
  };

  const TYPES = [
    "normal", "fire", "water", "grass", "electric", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "steel", "dark", "fairy"
  ];

  TYPES.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t.toUpperCase();
    typeSelect.appendChild(opt);
  });

  let allMoveEntries = [];
  let currentPage = 1;
  let renderRevision = 0;
  const PAGE_SIZE = 18;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
    if (!listResp.ok) throw new Error("Failed to load moves list");
    const data = await listResp.json();
    allMoveEntries = data.results || [];

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    setStatus("Moves unavailable.", () => location.reload());
    return;
  }

  async function render() {
    const revision = ++renderRevision;
    setStatus("Loading…");
    const q = search.value.trim().toLowerCase();
    const selectedType = typeSelect.value;
    const selectedCat = categorySelect.value;

    let typeMoveNames = null;
    let categoryMoveNames = null;
    try {
      [typeMoveNames, categoryMoveNames] = await Promise.all([
        selectedType ? getMoveNames("type", selectedType) : null,
        selectedCat ? getMoveNames("move-damage-class", selectedCat) : null
      ]);
    } catch (_) {
      if (revision !== renderRevision) return;
      setStatus("Filters unavailable.", () => render());
      return;
    }
    if (revision !== renderRevision) return;

    const matched = allMoveEntries.filter(m =>
      (!q || m.name.includes(q)) &&
      (!typeMoveNames || typeMoveNames.has(m.name)) &&
      (!categoryMoveNames || categoryMoveNames.has(m.name))
    );

    const totalPages = Math.ceil(matched.length / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const pageSlice = matched.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    // Fetch details for the current slice
    const moveDetails = await Promise.all(
      pageSlice.map(item => window.pokeApi.getMove(item.name))
    );
    if (revision !== renderRevision) return;
    const successCount = moveDetails.filter(Boolean).length;
    const failedCount = moveDetails.length - successCount;

    const displayed = moveDetails.filter(m => {
      if (!m) return false;
      if (selectedType && m.type !== selectedType) return false;
      if (selectedCat && m.category !== selectedCat) return false;
      return true;
    });

    if (failedCount === pageSlice.length && failedCount > 0) {
      setStatus(`All ${pageSlice.length} move details on this page failed to load. ${matched.length} moves match.`, () => render());
    } else if (failedCount > 0) {
      setStatus(`${displayed.length} shown; ${successCount} loaded; ${failedCount} failed. ${matched.length} moves match.`, () => render());
    } else {
      setStatus(displayed.length ? `${displayed.length} shown` : "No matches");
    }

    grid.innerHTML = displayed.map(m => {
      const category = m.category || "status";
      const icon = categoryIcons[category] || categoryIcons.status;
      const categoryText = escapeHTML(category);
      const description = escapeHTML(m.description ? m.description.replace(/\n/g, " ") : "No description available.");
      return `
        <article class="dex-card move-card">
          <div class="move-visual" data-category="${categoryText}" style="${typeStyle(m.type)}" aria-hidden="true">
            <span class="move-visual-emblem">${icon}</span>
            <span class="move-visual-label">${categoryText}</span>
          </div>
          <div class="move-card-body">
            <div class="move-card-heading">
              <h2 class="move-name">${escapeHTML(m.name.replace(/-/g, " "))}</h2>
              <span class="chip move-type" style="${typeStyle(m.type)}">${escapeHTML(m.type)}</span>
            </div>
            <div class="move-stats">
              ${statMeter("PWR", m.power, 250)}
              ${statMeter("ACC", m.accuracy, 100, "%")}
              ${statMeter("PP", m.pp, 40)}
            </div>
          </div>
          <details class="move-details">
            <summary>Details</summary>
            <p>${description}</p>
          </details>
        </article>
      `;
    }).join("");

    // Render pagination buttons
    if (totalPages > 1) {
      paginationEl.innerHTML = `
        <div class="move-pagination-inner">
          <button class="btn btn-paper" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span>Page ${currentPage} / ${totalPages}</span>
          <button class="btn btn-paper" id="next-page" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
        </div>
      `;
      document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          render();
          window.scrollTo({ top: 0, behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }
      });
      document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          render();
          window.scrollTo({ top: 0, behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }
      });
    } else {
      paginationEl.innerHTML = "";
    }
  }

  let debounceTimer = null;
  search.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentPage = 1;
      render();
    }, 250);
  });

  typeSelect.addEventListener("change", () => {
    currentPage = 1;
    render();
  });

  categorySelect.addEventListener("change", () => {
    currentPage = 1;
    render();
  });

  render();
});
```

---

### 3.12 `js/abilities.js` (特性库检索与宝可梦索引)

- **文件路径**: `js/abilities.js`  
- **代码行数**: 187 行  
- **文件大小**: 7,584 字节  

```javascript
document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("ability-grid");
  const search = document.getElementById("ability-search");
  const statusEl = document.getElementById("ability-status");
  const paginationEl = document.getElementById("ability-pagination");
  statusEl.setAttribute("aria-live", "polite");
  const htmlEntities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => htmlEntities[char]);

  function setStatus(message, retryAction = null) {
    statusEl.replaceChildren(document.createTextNode(message));
    if (!retryAction) return;
    const retry = document.createElement("button");
    retry.className = "btn btn-paper";
    retry.type = "button";
    retry.textContent = "Retry";
    retry.addEventListener("click", retryAction, { once: true });
    statusEl.append(" ", retry);
  }

  let allAbilities = [];
  let currentPage = 1;
  let renderRevision = 0;
  const PAGE_SIZE = 18;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
    if (!listResp.ok) throw new Error("Failed to load abilities");
    const data = await listResp.json();
    allAbilities = data.results || [];

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    setStatus("Abilities unavailable.", () => location.reload());
    return;
  }

  function getPokemonIdFromUrl(url) {
    const m = url.match(/\/pokemon\/(\d+)\//);
    return m ? m[1] : null;
  }

  async function render() {
    const revision = ++renderRevision;
    setStatus("Loading…");
    const q = search.value.trim().toLowerCase();

    const matched = allAbilities.filter(a => {
      if (q && !a.name.includes(q)) return false;
      return true;
    });

    const totalMatched = matched.length;
    const totalPages = Math.ceil(totalMatched / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const pageSlice = matched.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    const details = await Promise.all(
      pageSlice.map(item => window.pokeApi.getAbility(item.name))
    );
    if (revision !== renderRevision) return;

    const availableDetails = details.filter(Boolean);
    const successCount = availableDetails.length;
    const failedCount = details.length - successCount;
    if (failedCount === details.length && failedCount > 0) {
      setStatus(`All ${details.length} ability details on this page failed to load. ${totalMatched} abilities match.`, () => render());
    } else if (failedCount > 0) {
      setStatus(`${availableDetails.length} shown; ${successCount} loaded; ${failedCount} failed. ${totalMatched} abilities match.`, () => render());
    } else {
      setStatus(availableDetails.length ? `${availableDetails.length} shown` : "No matches");
    }

    grid.innerHTML = availableDetails.map(a => {
      const pokeList = a.pokemon || [];
      const previewList = pokeList.slice(0, 3);
      const remainingList = pokeList.slice(previewList.length);
      const description = a.description ? a.description.replace(/\n/g, " ") : "No description available.";
      const excerptLimit = 132;
      const excerptEnd = description.length > excerptLimit
        ? description.lastIndexOf(" ", excerptLimit)
        : description.length;
      const excerpt = description.length > excerptLimit
        ? `${description.slice(0, excerptEnd > 0 ? excerptEnd : excerptLimit).trim()}…`
        : description;
      const safeDescription = escapeHTML(description);
      const safeExcerpt = escapeHTML(excerpt);
      const visualPokemon = pokeList.find(p => {
        const id = Number(getPokemonIdFromUrl(p.url));
        return id > 0 && id <= 1025;
      });
      const visualId = visualPokemon ? getPokemonIdFromUrl(visualPokemon.url) : null;
      const specimenLink = p => {
        const pId = getPokemonIdFromUrl(p.url);
        const href = pId ? `pokemon.html?id=${pId}` : `pokemon.html?name=${encodeURIComponent(p.name)}`;
        return `
          <a href="${escapeHTML(href)}"
             class="ability-specimen-chip"
             title="${escapeHTML(p.name)}">
            ${escapeHTML(p.name.replace(/-/g, " "))}
          </a>
        `;
      };

      return `
        <article class="dex-card ability-card">
          <div class="ability-visual" aria-hidden="true">
            ${visualId
              ? `<img class="ability-visual-pokemon" src="assets/thumbs/${visualId}.webp" alt="" loading="lazy" decoding="async">`
              : `<span class="ability-visual-placeholder">✦</span>`}
            <span class="ability-visual-label">Specimen</span>
          </div>
          <div class="ability-card-body">
            <div class="ability-meta">
              <span class="id-badge">#${escapeHTML(String(a.id).padStart(3, "0"))}</span>
              <span class="ability-count">${pokeList.length} Pokémon</span>
            </div>
            <h2 class="ability-name">${escapeHTML(a.name.replace(/-/g, " "))}</h2>
            <p class="ability-effect">${safeExcerpt}</p>
            ${description.length > excerpt.length ? `
              <details class="ability-full-effect">
                <summary>Full effect</summary>
                <p>${safeDescription}</p>
              </details>
            ` : ""}
            <div class="ability-roster">
              <p class="ability-roster-heading">Specimens</p>
              <div class="ability-specimen-list">
                ${previewList.length
                  ? previewList.map(specimenLink).join("")
                  : `<span class="ability-no-specimens">No linked Pokémon</span>`}
              </div>
              ${remainingList.length ? `
                <details class="ability-more-specimens">
                  <summary>${remainingList.length} more Pokémon</summary>
                  <div class="ability-specimen-list ability-specimen-list-extra">
                    ${remainingList.map(specimenLink).join("")}
                  </div>
                </details>
              ` : ""}
            </div>
          </div>
        </article>
      `;
    }).join("");

    if (totalPages > 1) {
      paginationEl.innerHTML = `
        <div class="ability-pagination-inner">
          <button class="btn btn-paper" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span>Page ${currentPage} of ${totalPages}</span>
          <button class="btn btn-paper" id="next-page" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
        </div>
      `;
      document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          render();
          window.scrollTo({ top: 0, behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }
      });
      document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          render();
          window.scrollTo({ top: 0, behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }
      });
    } else {
      paginationEl.innerHTML = "";
    }
  }

  let debounceTimer = null;
  search.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentPage = 1;
      render();
    }, 250);
  });

  render();
});
```

---

### 3.13 `js/collection.js` (图鉴与地区收集度统计)

- **文件路径**: `js/collection.js`  
- **代码行数**: 269 行  
- **文件大小**: 10,476 字节  

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const seen = window.store?.seen?.() || [];
  const favorites = window.store?.favoriteIds?.() || [];
  const belt = window.store?.belt?.() || [];
  const seenTypes = new Set(seen.flatMap(id => window.getSpeciesById?.(id)?.types || []));

  const seenCount = seen.length;

  const seenEl = document.getElementById("seen-count");
  if (seenEl) seenEl.textContent = seenCount;

  const favEl = document.getElementById("favorite-count");
  if (favEl) favEl.textContent = favorites.length;

  const beltEl = document.getElementById("belt-count");
  if (beltEl) beltEl.textContent = belt.length;

  const percent = Math.min(100, (seenCount / 1025) * 100).toFixed(1);

  const natProg = document.getElementById("national-progress");
  if (natProg) natProg.style.width = `${percent}%`;

  const natText = document.getElementById("national-text");
  if (natText) natText.textContent = `${seenCount} / 1025 Pokémon seen (${percent}%)`;

  const regionRoot = document.getElementById("region-progress");
  if (!regionRoot || !window.REGIONS) return;

  const REGION_CODES = ["KTO-01", "JTO-02", "HOE-03", "SIN-04", "UNV-05", "KAL-06", "ALO-07", "GAL-08", "HIS-09", "PAL-10"];

  regionRoot.innerHTML = window.REGIONS.map((region, idx) => {
    const count = seen.filter(id => id >= region.start && id <= region.end).length;
    const percentage = region.count ? Math.min(100, (count / region.count) * 100).toFixed(1) : 0;
    const code = REGION_CODES[idx] || `REG-${idx + 1}`;
    const mascotUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${region.preview}.png`;
    const spec = window.getSpeciesById ? window.getSpeciesById(region.preview) : null;
    const mascotName = spec ? spec.name : region.name;

    return `
      <article class="collection-region">
        <div class="region-card-top">
          <div>
            <span class="region-meta-tag">${code}</span>
            <h3 class="region-title"><a href="pokedex.html?region=${region.slug}" class="region-title-link">${region.name}</a></h3>
          </div>
          <img src="${mascotUrl}" alt="${mascotName}" class="region-mascot-art" loading="lazy" width="50" height="50">
        </div>
        <div class="region-data-row">
          <span class="region-stat">${count} / ${region.count}</span>
          <span class="region-rate">${percentage}% LOGGED</span>
        </div>
        <div class="progress calibrated-gauge" style="height:6px;">
          <div style="width:${percentage}%"></div>
        </div>
      </article>
    `;
  }).join("");

  // Belt Expedition Squad Showcase
  const beltGrid = document.getElementById("belt-roster-grid");
  if (beltGrid) {
    const beltCells = [];
    for (let i = 0; i < 6; i++) {
      const id = belt[i];
      if (id) {
        const spec = window.getSpeciesById ? window.getSpeciesById(id) : null;
        const name = spec ? spec.name : `#${id}`;
        const types = spec && spec.types ? spec.types.join(" · ") : "";
        const art = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        beltCells.push(`
          <a href="pokemon.html?id=${id}" class="belt-specimen-card" title="Open #${id} ${name}">
            <span class="belt-slot-tag">SLOT 0${i + 1}</span>
            <div class="belt-art-wrap">
              <img src="${art}" alt="${name}" loading="lazy" class="belt-art">
            </div>
            <strong class="belt-specimen-name">${name}</strong>
            <span class="belt-specimen-num">#${String(id).padStart(3, "0")}</span>
            <span class="belt-specimen-type">${types}</span>
          </a>
        `);
      } else {
        beltCells.push(`
          <a href="pokedex.html" class="belt-specimen-card empty-slot" title="Deploy specimen from Dex">
            <span class="belt-slot-tag">SLOT 0${i + 1}</span>
            <div class="belt-art-wrap">
              <img src="assets/pokeball.png" alt="" class="empty-ball-ghost">
            </div>
            <strong class="belt-empty-title">+ Empty</strong>
            <span class="belt-empty-sub">Open Dex</span>
          </a>
        `);
      }
    }
    beltGrid.innerHTML = beltCells.join("");
  }

  // Priority Field Favorites Gallery
  const favGrid = document.getElementById("favorites-specimen-gallery");
  const favIndicator = document.getElementById("fav-count-indicator");
  if (favGrid) {
    if (favIndicator) {
      favIndicator.textContent = `${favorites.length} PINNED`;
    }
    if (favorites.length === 0) {
      favGrid.innerHTML = `
        <div class="favorites-empty-shelf">
          <div class="empty-shelf-ghosts">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" alt="" class="ghost-mascot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png" alt="" class="ghost-mascot">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png" alt="" class="ghost-mascot">
          </div>
          <div class="empty-shelf-copy">
            <strong>No Priority Specimens Flagged</strong>
            <p>Star key specimens in the Pokédex to pin them onto this master research board.</p>
          </div>
          <a href="pokedex.html" class="btn btn-primary" style="text-decoration:none;">Open Dex Archive</a>
        </div>
      `;
    } else {
      favGrid.innerHTML = favorites.map(id => {
        const spec = window.getSpeciesById ? window.getSpeciesById(id) : null;
        const name = spec ? spec.name : `#${id}`;
        const art = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
        return `
          <a href="pokemon.html?id=${id}" class="fav-specimen-card" title="Open #${id} ${name}">
            <div class="fav-art-wrap">
              <img src="${art}" alt="${name}" loading="lazy" class="fav-art">
            </div>
            <strong class="fav-specimen-name">${name}</strong>
            <span class="fav-specimen-num">#${String(id).padStart(3, "0")}</span>
          </a>
        `;
      }).join("");
    }
  }

  // Field Proficiency Seals System (Dossier Technical Seals)
  const BADGES = [
    {
      id: "first_seen",
      code: "SEAL-01",
      name: "First Contact",
      desc: "Log first observed specimen in the archive ledger.",
      test: (c) => c.seen >= 1
    },
    {
      id: "ten_seen",
      code: "SEAL-10",
      name: "Field Surveyor",
      desc: "Catalog 10 distinct specimens in wild observation.",
      test: (c) => c.seen >= 10
    },
    {
      id: "fifty_seen",
      code: "SEAL-50",
      name: "Ecology Biologist",
      desc: "Record 50 specimen entries into the archive ledger.",
      test: (c) => c.seen >= 50
    },
    {
      id: "hundred_seen",
      code: "SEAL-100",
      name: "Centurion Scout",
      desc: "Catalog 100 specimens across surveyed territories.",
      test: (c) => c.seen >= 100
    },
    {
      id: "kanto_complete",
      code: "SEAL-KTO",
      name: "Kanto Complete",
      desc: "Register all 151 original Kanto specimens (#001–#151).",
      test: (c) => c.kantoSeen >= 151
    },
    {
      id: "all_seen",
      code: "SEAL-NAT",
      name: "Grand Archivist",
      desc: "Complete master record of 1,025 cataloged specimens.",
      test: (c) => c.seen >= 1025
    },
    {
      id: "first_fav",
      code: "SEAL-FAV1",
      name: "Field Marker",
      desc: "Star first priority specimen for targeted monitoring.",
      test: (c) => c.favorites >= 1
    },
    {
      id: "ten_favs",
      code: "SEAL-FAV10",
      name: "Archive Curator",
      desc: "Maintain 10 active priority specimens in the showcase.",
      test: (c) => c.favorites >= 10
    },
    {
      id: "belt_full",
      code: "SEAL-BLT6",
      name: "Equipped Squad",
      desc: "Prepare 6 active specimens on the tactical field belt.",
      test: (c) => c.belt >= 6
    },
    {
      id: "all_types_seen",
      code: "SEAL-TYP18",
      name: "Elemental Scope",
      desc: "Encounter specimens across all 18 elemental affinities.",
      test: (c) => c.seenTypes >= 18
    },
    {
      id: "quiz_streak_5",
      code: "SEAL-SIL5",
      name: "Silhouette Adept",
      desc: "Archived: preserves the best score from the former silhouette quiz. This challenge is no longer active.",
      archived: true,
      test: (c) => c.quizBest >= 5
    },
    {
      id: "quiz_streak_10",
      code: "SEAL-SIL10",
      name: "Master Examiner",
      desc: "Archived: preserves the best score from the former silhouette quiz. This challenge is no longer active.",
      archived: true,
      test: (c) => c.quizBest >= 10
    }
  ];

  const badgeGrid = document.getElementById("badge-grid");
  const summaryBadgeEl = document.getElementById("badge-unlocked-summary");
  if (badgeGrid) {
    const kantoCount = seen.filter(id => id >= 1 && id <= 151).length;
    const quizBest = window.store?.quizBest?.() || 0;
    const ctx = {
      seen: seenCount,
      favorites: favorites.length,
      belt: belt.length,
      kantoSeen: kantoCount,
      seenTypes: seenTypes.size,
      quizBest: quizBest
    };

    let unlockedCount = 0;
    const activeBadgeCount = BADGES.filter(b => !b.archived).length;
    const archivedBadgeCount = BADGES.length - activeBadgeCount;
    badgeGrid.innerHTML = BADGES.map(b => {
      const unlocked = b.test(ctx);
      if (unlocked && !b.archived) unlockedCount++;
      return `
        <article class="seal-card ${unlocked ? 'sealed' : 'unsealed'}">
          <div class="seal-mark">
            <span class="seal-serial">${b.code}</span>
            <span class="seal-status-icon">${unlocked ? '★' : '○'}</span>
          </div>
          <div class="seal-content">
            <h4 class="seal-title">${b.name}${b.archived ? " (Archived)" : ""}</h4>
            <p class="seal-desc">${b.desc}</p>
          </div>
          <div class="seal-verdict">
            ${b.archived ? `ARCHIVED · ${unlocked ? "LEGACY RECORD PRESERVED" : "NO LEGACY RECORD"}` : (unlocked ? 'VALIDATED & SEALED' : 'PENDING FIELD RECORD')}
          </div>
        </article>
      `;
    }).join("");

    if (summaryBadgeEl) {
      summaryBadgeEl.textContent = `${unlockedCount} / ${activeBadgeCount} ACTIVE · ${archivedBadgeCount} ARCHIVED`;
    }
  }
});
```

---

### 3.14 `js/battle-lab.js` (对战实验室与克制比对)

- **文件路径**: `js/battle-lab.js`  
- **代码行数**: 239 行  
- **文件大小**: 10,692 字节  

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const tc = window.TYPES_CHART;
  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

  const state = {
    left: null,
    right: null
  };
  const requestRevisions = { left: 0, right: 0 };

  function setCardMessage(cardEl, message, color = "var(--ink-soft)") {
    if (!cardEl) return;
    const note = document.createElement("p");
    note.className = "soft";
    note.style.cssText = `font-size:0.875rem; color:${color}; padding:1rem 0;`;
    note.textContent = message;
    cardEl.replaceChildren(note);
  }

  function stat(mon, name) {
    if (!mon || !mon.stats) return 0;
    const found = mon.stats.find(s => s.name === name);
    return found ? (found.value ?? found.base_stat ?? 0) : 0;
  }

  function bst(mon) {
    if (!mon || !mon.stats) return 0;
    return mon.stats.reduce((acc, s) => acc + (s.value ?? s.base_stat ?? 0), 0);
  }

  async function loadPokemon(side, value) {
    const revision = ++requestRevisions[side];
    const query = String(value || "").trim();
    const cardEl = document.getElementById(`battle-${side}-card`);
    state[side] = null;
    if (!query) {
      render();
      return;
    }
    renderResult();
    setCardMessage(cardEl, `Loading specimen #${query}...`);

    try {
      const mon = await window.pokeApi.getPokemon(query);
      if (revision !== requestRevisions[side]) return;
      if (!mon) {
        setCardMessage(cardEl, `Specimen not found: "${query}".`, "var(--mark)");
        renderResult();
        return;
      }
      state[side] = mon;
      render();
    } catch (_) {
      if (revision !== requestRevisions[side]) return;
      state[side] = null;
      setCardMessage(cardEl, "Error loading specimen.", "var(--mark)");
      renderResult();
    }
  }

  function renderCard(mon) {
    if (!mon) {
      return `<p class="soft" style="font-size:0.875rem; color:var(--ink-soft); padding:1rem 0;">Search or load a specimen.</p>`;
    }

    const hp = stat(mon, "hp");
    const atk = stat(mon, "attack");
    const def = stat(mon, "defense");
    const spa = stat(mon, "special-attack");
    const spd = stat(mon, "special-defense");
    const spe = stat(mon, "speed");
    const total = bst(mon);

    return `
      <article class="dex-card" style="padding:1rem; margin-top:0.75rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span class="id-badge">#${String(mon.id).padStart(3, "0")}</span>
          <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.8125rem;">BST ${total}</span>
        </div>

        <div style="text-align:center; margin-bottom:0.5rem;">
          <img src="${window.pokeApi.artUrl(mon.id)}" width="140" height="140" alt="${mon.name}" style="object-fit:contain; filter:drop-shadow(0 6px 8px rgba(0,0,0,0.4));">
          <h2 style="font-family:var(--font-ui); font-size:1.35rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0.4rem 0 0.2rem;">${mon.name}</h2>
          <div style="display:flex; justify-content:center; gap:0.4rem; margin-bottom:0.75rem;">
            ${mon.types.map(t => `<span class="chip" style="${typeStyle(t)} font-size:0.75rem;">${t}</span>`).join("")}
          </div>
        </div>

        <div style="border-top:1px solid var(--line); padding-top:0.5rem; font-family:var(--font-num); font-size:0.8125rem; line-height:1.6;">
          <div style="display:flex; justify-content:space-between;"><span>HP</span><strong>${hp}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Attack</span><strong>${atk}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Defense</span><strong>${def}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Sp. Atk</span><strong>${spa}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Sp. Def</span><strong>${spd}</strong></div>
          <div style="display:flex; justify-content:space-between; color:var(--mark);"><span>Speed</span><strong>${spe}</strong></div>
        </div>
      </article>
    `;
  }

  function calculateSTABMatchups(attacker, defender) {
    if (!attacker || !defender || !tc) return [];
    return attacker.types.map(atkType => {
      const mult = tc.getDefensiveMultiplier(atkType, defender.types);
      return { atkType, mult };
    });
  }

  function renderResult() {
    const root = document.getElementById("battle-result");
    if (!root) return;

    if (!state.left || !state.right) {
      root.innerHTML = "";
      return;
    }

    const a = state.left;
    const b = state.right;

    const aSpeed = stat(a, "speed");
    const bSpeed = stat(b, "speed");
    const speedWinner = aSpeed > bSpeed ? a.name : bSpeed > aSpeed ? b.name : null;

    const aToB = calculateSTABMatchups(a, b);
    const bToA = calculateSTABMatchups(b, a);

    const aMaxMult = aToB.length ? Math.max(...aToB.map(x => x.mult)) : 1;
    const bMaxMult = bToA.length ? Math.max(...bToA.map(x => x.mult)) : 1;

    root.innerHTML = `
      <div class="file-block" style="background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:1.5rem;">
        <h2 style="font-family:var(--font-ui); font-size:1.4rem; color:var(--ink); margin:0 0 1rem; border-bottom:1px solid var(--line); padding-bottom:0.5rem;">
          Matchup Diagnostics
        </h2>

        <!-- 速度比对 -->
        <div style="margin-bottom:1.5rem;">
          <h3 style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem;">
            Speed Priority
          </h3>
          <p style="font-size:1rem; margin:0 0 0.35rem; color:var(--ink);">
            <strong>${a.name}</strong> (${aSpeed}) vs <strong>${b.name}</strong> (${bSpeed})
          </p>
          <p class="soft" style="font-size:0.875rem; color:var(--ink-soft);">
            ${speedWinner
              ? `<span style="color:var(--mark); font-weight:700;">${speedWinner.toUpperCase()}</span> holds the initiative with a higher base speed.`
              : "Both specimens have equal speed (Speed tie)."}
          </p>
        </div>

        <!-- 属性打击面推演 -->
        <div>
          <h3 style="font-family:var(--font-num); font-size:0.875rem; color:var(--ink-soft); text-transform:uppercase; letter-spacing:0.05em; margin:0 0 0.5rem;">
            STAB Type Advantage
          </h3>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(min(100%, 18rem), 1fr)); gap:1.25rem;">
            <!-- A attacking B -->
            <div style="background:var(--sky-deep); border:1px solid var(--line); padding:1rem; border-radius:4px;">
              <p style="font-family:var(--font-ui); font-size:0.9375rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.5rem;">
                ${a.name} → ${b.name}
              </p>
              ${aToB.map(m => `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; font-family:var(--font-num); font-size:0.875rem;">
                  <span class="chip" style="${typeStyle(m.atkType)} font-size:0.75rem;">${m.atkType}</span>
                  <span style="font-weight:700; color:${m.mult >= 2 ? 'var(--mark)' : m.mult < 1 ? 'var(--ink-soft)' : 'var(--ink)'};">
                    ${m.mult}×
                  </span>
                </div>
              `).join("")}
              <p style="font-size:0.8125rem; color:var(--ink-soft); margin-top:0.5rem; border-top:1px solid var(--line); padding-top:0.4rem;">
                Peak STAB: <strong>${aMaxMult}×</strong> ${aMaxMult >= 2 ? '(Super Effective)' : aMaxMult === 0 ? '(No Effect)' : aMaxMult < 1 ? '(Not Very Effective)' : '(Standard)'}
              </p>
            </div>

            <!-- B attacking A -->
            <div style="background:var(--sky-deep); border:1px solid var(--line); padding:1rem; border-radius:4px;">
              <p style="font-family:var(--font-ui); font-size:0.9375rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.5rem;">
                ${b.name} → ${a.name}
              </p>
              ${bToA.map(m => `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; font-family:var(--font-num); font-size:0.875rem;">
                  <span class="chip" style="${typeStyle(m.atkType)} font-size:0.75rem;">${m.atkType}</span>
                  <span style="font-weight:700; color:${m.mult >= 2 ? 'var(--mark)' : m.mult < 1 ? 'var(--ink-soft)' : 'var(--ink)'};">
                    ${m.mult}×
                  </span>
                </div>
              `).join("")}
              <p style="font-size:0.8125rem; color:var(--ink-soft); margin-top:0.5rem; border-top:1px solid var(--line); padding-top:0.4rem;">
                Peak STAB: <strong>${bMaxMult}×</strong> ${bMaxMult >= 2 ? '(Super Effective)' : bMaxMult === 0 ? '(No Effect)' : bMaxMult < 1 ? '(Not Very Effective)' : '(Standard)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function render() {
    const leftCard = document.getElementById("battle-left-card");
    const rightCard = document.getElementById("battle-right-card");
    if (leftCard) leftCard.innerHTML = renderCard(state.left);
    if (rightCard) rightCard.innerHTML = renderCard(state.right);
    renderResult();
  }

  const leftInput = document.getElementById("battle-left");
  leftInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      loadPokemon("left", e.target.value.trim());
    }
  });
  leftInput?.addEventListener("change", (e) => {
    loadPokemon("left", e.target.value.trim());
  });

  const rightInput = document.getElementById("battle-right");
  rightInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      loadPokemon("right", e.target.value.trim());
    }
  });
  rightInput?.addEventListener("change", (e) => {
    loadPokemon("right", e.target.value.trim());
  });

  // URL search params: ?left=...&right=... or ?a=...&b=...
  const q = new URLSearchParams(location.search);
  const paramLeft = q.get("left") || q.get("a") || "25";
  const paramRight = q.get("right") || q.get("b") || "6";

  if (leftInput && paramLeft) leftInput.value = paramLeft;
  if (rightInput && paramRight) rightInput.value = paramRight;

  loadPokemon("left", paramLeft);
  loadPokemon("right", paramRight);
});
```

---

### 3.15 `js/store.js` (本地存储与安全缓存管理)

- **文件路径**: `js/store.js`  
- **代码行数**: 104 行  
- **文件大小**: 2,989 字节  

```javascript
/**
 * 151 FILE — localStorage helpers
 * 腰带、看过、声音开关统一从这里读写。
 * 隐私模式或存储已满时 localStorage 会抛错，这里全部吞掉并回退到空值。
 */
(function (window) {
  const KEYS = { belt: "file151.belt", seen: "file151.seen", sound: "file151.sound", last: "file151.last", favorites: "file151.favorites", quizBest: "file151.quiz.best", quizTotal: "file151.quiz.total" };
  const MAX_BELT = 6;
  const MAX_ID = 1025;

  function readIds(key) {
    try {
      const raw = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(raw)
        ? raw.map(Number).filter((n) => Number.isInteger(n) && n > 0 && n <= MAX_ID)
        : [];
    } catch (_) {
      return [];
    }
  }

  function writeIds(key, ids) {
    try {
      localStorage.setItem(key, JSON.stringify(ids));
      return true;
    } catch (_) {
      return false;
    }
  }

  const store = {
    MAX_BELT,
    belt: () => readIds(KEYS.belt).slice(0, MAX_BELT),
    setBelt: (ids) => writeIds(KEYS.belt, ids.slice(0, MAX_BELT)),
    addBelt(id) {
      const b = store.belt();
      if (b.includes(id) || b.length >= MAX_BELT) return false;
      return writeIds(KEYS.belt, b.concat(id));
    },
    seen: () => readIds(KEYS.seen),
    markSeen(id) {
      const s = store.seen();
      if (!s.includes(id)) writeIds(KEYS.seen, s.concat(id));
    },
    soundOn() {
      try {
        return localStorage.getItem(KEYS.sound) === "on";
      } catch (_) {
        return false;
      }
    },
    setSound(on) {
      try {
        localStorage.setItem(KEYS.sound, on ? "on" : "off");
      } catch (_) {}
    },
    lastId() {
      try {
        const n = Number(localStorage.getItem(KEYS.last) || 0);
        return n > 0 && n <= MAX_ID ? n : null;
      } catch (_) {
        return null;
      }
    },
    setLast(id) {
      try {
        const n = Number(id);
        if (n > 0 && n <= MAX_ID) localStorage.setItem(KEYS.last, String(n));
      } catch (_) {}
    },
    favoriteIds() {
      return readIds(KEYS.favorites);
    },
    isFavorite(id) {
      return store.favoriteIds().includes(Number(id));
    },
    toggleFavorite(id) {
      const n = Number(id);
      const ids = store.favoriteIds();
      const next = ids.includes(n) ? ids.filter(x => x !== n) : [...ids, n];
      writeIds(KEYS.favorites, next);
      return next.includes(n);
    },
    quizBest() {
      try { return Number(localStorage.getItem(KEYS.quizBest) || 0); } catch (_) { return 0; }
    },
    setQuizBest(n) {
      try { localStorage.setItem(KEYS.quizBest, String(n)); } catch (_) {}
    },
    quizTotal() {
      try { return Number(localStorage.getItem(KEYS.quizTotal) || 0); } catch (_) { return 0; }
    },
    incQuizTotal() {
      try {
        const next = store.quizTotal() + 1;
        localStorage.setItem(KEYS.quizTotal, String(next));
        return next;
      } catch (_) { return 0; }
    }
  };

  window.store = store;
})(window);
```

---

### 3.16 `js/quiz.js` (TCG 卡包实验室/实体开包/去重算法/卡册收藏)

- **文件路径**: `js/quiz.js`  
- **代码行数**: 913 行  
- **文件大小**: 34,275 字节  

```javascript
// ==========================================================================
// TCG BOOSTER PACK LAB (Expansion-specific pack simulator & collection binder)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // DOM References
  const setSelect = document.getElementById("pack-set-select");
  const openTriggerBtn = document.getElementById("pack-open-trigger-btn");
  const packStage = document.getElementById("pack-stage");
  const sealedView = document.getElementById("pack-sealed-view");
  const openedView = document.getElementById("pack-opened-view");
  const foilPack = document.getElementById("pack-foil-pack");
  const cardsGrid = document.getElementById("pack-cards-grid");
  const loadingOverlay = document.getElementById("pack-loading-overlay");
  const loadingMsg = document.getElementById("pack-loading-msg");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const statPacksOpened = document.getElementById("stat-packs-opened");
  const statCardsCollected = document.getElementById("stat-cards-collected");
  const packSetMeta = document.getElementById("pack-set-meta");
  const featuredChipsWrap = document.getElementById("pack-featured-chips");

  const packCoverImg = document.getElementById("pack-cover-img");
  const foilSeriesTag = document.getElementById("foil-series-tag");
  const foilLogoImg = document.getElementById("foil-logo-img");
  const foilMascotImg = document.getElementById("foil-mascot-img");
  const foilSymbolImg = document.getElementById("foil-symbol-img");
  const foilTitle = document.getElementById("foil-title");
  const foilGraphicImg = document.getElementById("foil-graphic-img");

  const packAgainBtn = document.getElementById("pack-again-btn");
  const packRevealAllBtn = document.getElementById("pack-reveal-all-btn");
  const packToggleBinderBtn = document.getElementById("pack-toggle-binder-btn");

  const binderSection = document.getElementById("pack-binder-section");
  const binderHeader = document.getElementById("pack-binder-header");
  const binderCountBadge = document.getElementById("binder-count-badge");
  const binderGrid = document.getElementById("pack-binder-grid");
  const binderFilters = document.querySelectorAll(".pack-binder-filters .chip");

  const tcgModal = document.getElementById("tcg-modal");
  const tcgModalImg = document.getElementById("tcg-modal-img");
  const tcgModalName = document.getElementById("tcg-modal-name");
  const tcgModalMeta = document.getElementById("tcg-modal-meta");
  const tcgModalCloseBtn = document.getElementById("tcg-modal-close-btn");
  let modalTrigger = null;
  let inertBeforeModal = [];

  // In-memory cache for fetched card sets
  const cardSetCache = new Map();

  // Known metadata for featured sets
  const SET_PRESETS = {
    "me55": {
      name: "30th Celebration",
      series: "Mega Evolution",
      logo: "https://images.scrydex.com/pokemon/me55-logo/logo",
      symbol: "https://images.scrydex.com/pokemon/me55-symbol/symbol",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "linear-gradient(180deg, #18283d 0%, #111f30 40%, #0a1420 100%)",
      total: 161,
      tag: "30th ANNIV · 2026"
    },
    "me55c": {
      name: "30th Celebration: Classic",
      series: "Mega Evolution",
      logo: "https://images.scrydex.com/pokemon/me55-logo/logo",
      symbol: "https://images.scrydex.com/pokemon/me55-symbol/symbol",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      color: "linear-gradient(180deg, #3d1c1c 0%, #2a1212 40%, #160808 100%)",
      total: 30,
      tag: "CLASSIC"
    },
    "sv3pt5": {
      name: "Pokémon 151",
      series: "Scarlet & Violet",
      logo: "https://images.pokemontcg.io/sv3pt5/logo.png",
      symbol: "https://images.pokemontcg.io/sv3pt5/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      color: "linear-gradient(180deg, #173852 0%, #10293d 40%, #0a1a26 100%)",
      total: 207,
      tag: "151 FILE"
    },
    "base1": {
      name: "Base Set (1999)",
      series: "Base",
      logo: "https://images.pokemontcg.io/base1/logo.png",
      symbol: "https://images.pokemontcg.io/base1/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      color: "linear-gradient(180deg, #1e3a54 0%, #142a3d 40%, #0c1a26 100%)",
      total: 102,
      tag: "VINTAGE"
    },
    "sv8pt5": {
      name: "Prismatic Evolutions",
      series: "Scarlet & Violet",
      logo: "https://images.pokemontcg.io/sv8pt5/logo.png",
      symbol: "https://images.pokemontcg.io/sv8pt5/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      color: "linear-gradient(180deg, #351a44 0%, #251230 40%, #160a1c 100%)",
      total: 180,
      tag: "EEVEE"
    },
    "swsh7": {
      name: "Evolving Skies",
      series: "Sword & Shield",
      logo: "https://images.pokemontcg.io/swsh7/logo.png",
      symbol: "https://images.pokemontcg.io/swsh7/symbol.png",
      coverArt: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png",
      color: "linear-gradient(180deg, #193e32 0%, #122c24 40%, #0a1a15 100%)",
      total: 237,
      tag: "DRAGONS"
    }
  };

  // State
  let currentSetId = localStorage.getItem("file151.tcg_current_set") || "me55";
  let currentPackCards = [];
  let isTearing = false;

  // Sound Synth Helpers (AudioContext)
  function playSynthSound(type) {
    const isSoundOn = localStorage.getItem("file151.sound") === "on";
    if (!isSoundOn) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === "tear") {
        // White noise burst for foil tear
        const bufferSize = ctx.sampleRate * 0.25;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 1800;
        noise.connect(filter);
        filter.connect(ctx.destination);
        noise.start();
      } else if (type === "flip") {
        // Soft paper card flip click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(480, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === "hit") {
        // High rare shimmer chime
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 0.4);
        });
      }
    } catch (_) {}
  }

  // LocalStorage Binder Store
  function getBinder() {
    try {
      return JSON.parse(localStorage.getItem("file151.tcg_binder") || "{}");
    } catch (_) {
      return {};
    }
  }

  function saveBinderCard(card) {
    const binder = getBinder();
    if (!binder[card.id]) {
      binder[card.id] = {
        id: card.id,
        name: card.name,
        number: card.number,
        rarity: card.rarity || "Common",
        setId: currentSetId,
        imageSmall: getCardImage(card, "small"),
        imageLarge: getCardImage(card, "large"),
        count: 1
      };
    } else {
      binder[card.id].count = (binder[card.id].count || 1) + 1;
    }
    localStorage.setItem("file151.tcg_binder", JSON.stringify(binder));
    return binder;
  }

  function getStats() {
    try {
      return JSON.parse(localStorage.getItem("file151.tcg_stats") || '{"packsOpened":0}');
    } catch (_) {
      return { packsOpened: 0 };
    }
  }

  function incrementPacksOpened() {
    const stats = getStats();
    stats.packsOpened = (stats.packsOpened || 0) + 1;
    localStorage.setItem("file151.tcg_stats", JSON.stringify(stats));
    updateStatsDisplay();
  }

  function updateStatsDisplay() {
    const stats = getStats();
    const binder = getBinder();
    const uniqueCount = Object.keys(binder).length;

    if (statPacksOpened) statPacksOpened.textContent = stats.packsOpened || 0;
    if (statCardsCollected) statCardsCollected.textContent = uniqueCount;
    if (binderCountBadge) binderCountBadge.textContent = `${uniqueCount} Specimens`;
  }

  // Resolves image CDN reliably for both older pokemontcg.io and newer scrydex.com sets
  function getCardImage(card, size = "small") {
    if (card.images) {
      if (size === "large" && card.images.large) return card.images.large;
      if (card.images.small) return card.images.small;
    }
    // Fallback template
    return `https://images.pokemontcg.io/${currentSetId}/${card.number}.png`;
  }

  // Fetch or retrieve card set from memory cache / GitHub
  async function loadSetData(setId, isBackground = false) {
    if (cardSetCache.has(setId)) {
      return cardSetCache.get(setId);
    }

    if (!isBackground) {
      if (loadingOverlay) loadingOverlay.classList.add("is-active");
      if (loadingMsg) loadingMsg.textContent = `Fetching ${setId.toUpperCase()} expansion ledger...`;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      const url = `https://raw.githubusercontent.com/PokemonTCG/pokemon-tcg-data/master/cards/en/${setId}.json`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const cards = await res.json();
      if (!Array.isArray(cards) || cards.length === 0) throw new Error("Empty card ledger");
      cardSetCache.set(setId, cards);
      return cards;
    } catch (err) {
      console.warn("Failed to load set data:", err);
      throw err;
    } finally {
      if (!isBackground && loadingOverlay) {
        loadingOverlay.classList.remove("is-active");
      }
    }
  }

  // Authentic Physical Booster Pack Packaging artwork map
  const PACK_ART_MAP = {
    "me55": "assets/packs/me55.jpg",
    "me55c": "assets/packs/me55.jpg",
    "sv3pt5": "assets/packs/sv3pt5.jpg",
    "base1": "assets/packs/base1.jpg",
    "sv8pt5": "assets/packs/sv8pt5.jpg",
    "swsh7": "assets/packs/swsh7.jpg",
    "sv1": "assets/packs/sv1.jpg",
    "sv6": "assets/packs/sv6.jpg",
    "sv4pt5": "assets/packs/sv4pt5.jpg",
    "swsh12pt5": "assets/packs/swsh12pt5.jpg",
    "base2": "assets/packs/base2.jpg",
    "base3": "assets/packs/base3.jpg"
  };

  function getPackCoverArt(setId) {
    return PACK_ART_MAP[setId] || "assets/packs/sv3pt5.jpg";
  }

  // Update pack wrapper visual appearance based on selected set
  function updatePackAppearance(setId) {
    currentSetId = setId;
    localStorage.setItem("file151.tcg_current_set", setId);

    const preset = SET_PRESETS[setId] || {
      name: setId.toUpperCase(),
      series: "EXPANSION",
      symbol: "https://images.pokemontcg.io/sv3pt5/symbol.png",
      color: "linear-gradient(135deg, #1b354f 0%, #0d1e30 50%, #204163 100%)",
      total: "---"
    };

    if (packCoverImg) {
      packCoverImg.src = getPackCoverArt(setId);
      packCoverImg.alt = `${preset.name} Official Booster Pack Packaging`;
    }

    if (foilSeriesTag) foilSeriesTag.textContent = preset.series;
    if (foilTitle) foilTitle.textContent = preset.name;
    if (foilLogoImg && preset.logo) {
      foilLogoImg.src = preset.logo;
      foilLogoImg.alt = `${preset.name} Logo`;
    }
    if (foilMascotImg && preset.coverArt) {
      foilMascotImg.src = preset.coverArt;
      foilMascotImg.alt = `${preset.name} Mascot`;
    }
    if (foilSymbolImg && preset.symbol) {
      foilSymbolImg.src = preset.symbol;
      foilSymbolImg.alt = `${preset.name} Symbol`;
    }
    if (foilGraphicImg && preset.symbol) foilGraphicImg.src = preset.symbol;

    const foilBody = document.querySelector(".pack-foil-body");
    if (foilBody && preset.color) {
      foilBody.style.background = preset.color;
    }

    if (packSetMeta) {
      packSetMeta.textContent = `${preset.name} · ${preset.total} Cards`;
    }

    // Update select element if different
    if (setSelect && setSelect.value !== setId) {
      setSelect.value = setId;
    }

    // Update featured chip active states using native [data-on]
    document.querySelectorAll("#pack-featured-chips .chip").forEach(btn => {
      if (btn.dataset.setId === setId) {
        btn.setAttribute("data-on", "");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.removeAttribute("data-on");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    const statTotal = document.getElementById("pack-set-meta-total");
    const statName = document.getElementById("pack-set-meta-name");
    if (statTotal) statTotal.textContent = preset.total;
    if (statName) statName.textContent = preset.name.toUpperCase();

    const cardCount = setId === "me55c" ? 3 : setId === "me55" ? 5
      : /^(base[1235]|gym1)$/.test(setId) ? 11 : 10;
    const packHint = sealedView?.querySelector("p");
    if (packHint) {
      packHint.textContent = `Tap the foil pack or press Tear pack to reveal ${cardCount} expansion cards.`
        + (setId === "me55" ? " The pack also contains a foil Basic Energy, not shown."
          : cardCount === 10 ? " Separately packed Energy and code cards are not shown." : "")
        + " Rarity odds are simulated.";
    }

    renderBinderGrid();
    // Prefetch set data silently in background
    loadSetData(setId, true).catch(() => {});
  }

  // Expansion-specific pack slots
  function generatePack(cards) {
    if (!cards || cards.length === 0) throw new Error("No cards available for this pack");

    // Bucket cards by rarity category
    const buckets = {
      common: [],
      uncommon: [],
      energy: [],
      rare: [],
      holoDouble: [],
      illustration: [],
      ultra: [],
      sar: [],
      hyper: [],
      special: []
    };

    cards.forEach(card => {
      const r = (card.rarity || "").toLowerCase();
      if (card.supertype === "Energy" && !card.rarity) {
        buckets.energy.push(card);
      } else if (r.includes("special illustration") || r.includes("sar")) {
        buckets.sar.push(card);
      } else if (r.includes("hyper") || r.includes("futuristic") || r.includes("gold") || r.includes("rainbow") || r.includes("secret")) {
        buckets.hyper.push(card);
      } else if (r.includes("ultra") || r.includes("ex") || r.includes("vmax") || r.includes("vstar")) {
        buckets.ultra.push(card);
      } else if (r.includes("illustration rare")) {
        buckets.illustration.push(card);
      } else if (r.includes("double rare") || r.includes("holo")) {
        buckets.holoDouble.push(card);
      } else if (r.includes("shiny") || r.includes("radiant") || r.includes("amazing") || r.includes("ace spec") || r.includes("legend") || r.includes("prime") || r.includes("break")) {
        buckets.special.push(card);
      } else if (r.includes("rare")) {
        buckets.rare.push(card);
      } else if (r.includes("uncommon")) {
        buckets.uncommon.push(card);
      } else {
        buckets.common.push(card);
      }
    });

    // Card counts and guaranteed slots follow the printed packs. Chase weights are estimates.
    const used = new Set();
    const pack = [];
    function add(pool, foilType = "normal") {
      const available = pool.filter(card => card?.id && !used.has(card.id));
      if (!available.length) throw new Error(`Incomplete ${currentSetId} card pool`);
      const card = available[Math.floor(Math.random() * available.length)];
      used.add(card.id);
      pack.push({ card, foilType, slot: pack.length + 1 });
    }

    function addWeighted(choices) {
      const available = choices.filter(choice => choice.pool.some(card => card?.id && !used.has(card.id)));
      if (!available.length) throw new Error(`No eligible ${currentSetId} cards for this slot`);
      let roll = Math.random() * available.reduce((sum, choice) => sum + choice.weight, 0);
      const choice = available.find(option => (roll -= option.weight) < 0) || available[available.length - 1];
      add(choice.pool, choice.foilType);
    }

    if (currentSetId === "me55c") {
      for (let i = 0; i < 3; i++) add(cards, "holo");
      return pack;
    }

    if (currentSetId === "me55") {
      const others = [
        { pool: buckets.common, weight: 65, foilType: "holo" },
        { pool: buckets.rare.filter(card => card.rarity !== "Pikachu Rare"), weight: 23, foilType: "holo" },
        { pool: buckets.holoDouble, weight: 5, foilType: "holo" },
        { pool: buckets.illustration, weight: 4, foilType: "illustration" },
        { pool: buckets.sar, weight: 2, foilType: "sar" },
        { pool: buckets.hyper, weight: 1, foilType: "hyper" }
      ];
      for (let i = 0; i < 4; i++) addWeighted(others);
      add(cards.filter(card => card.rarity === "Pikachu Rare"), "holo");
      return pack;
    }

    if (/^(base[1235]|gym1)$/.test(currentSetId)) {
      const energyCount = currentSetId === "base1" ? 2 : currentSetId === "gym1" ? 1 : 0;
      for (let i = 0; i < 7 - energyCount; i++) add(buckets.common);
      for (let i = 0; i < energyCount; i++) add(buckets.energy);
      for (let i = 0; i < 3; i++) add(buckets.uncommon);
      addWeighted([
        { pool: buckets.rare, weight: 2, foilType: "rare" },
        { pool: buckets.holoDouble, weight: 1, foilType: "holo" },
        { pool: buckets.hyper, weight: 0.02, foilType: "hyper" }
      ]);
      return pack;
    }

    const modern = /^(sv|me)/.test(currentSetId);
    for (let i = 0; i < (modern ? 4 : 5); i++) add(buckets.common);
    for (let i = 0; i < 3; i++) add(buckets.uncommon);
    const foilChoices = [
      { pool: buckets.common, weight: 55, foilType: "reverse-foil" },
      { pool: buckets.uncommon, weight: 35, foilType: "reverse-foil" },
      { pool: buckets.rare, weight: 5, foilType: "reverse-foil" },
      { pool: buckets.special, weight: 3, foilType: "holo" },
      { pool: buckets.illustration, weight: 2, foilType: "illustration" }
    ];
    for (let i = 0; i < (modern ? 2 : 1); i++) addWeighted(foilChoices);
    addWeighted([
      { pool: buckets.rare, weight: 55, foilType: "rare" },
      { pool: buckets.holoDouble, weight: 25, foilType: "holo" },
      { pool: buckets.special, weight: 3, foilType: "holo" },
      { pool: buckets.illustration, weight: 8, foilType: "illustration" },
      { pool: buckets.ultra, weight: 7, foilType: "ultra" },
      { pool: buckets.sar, weight: 1.5, foilType: "sar" },
      { pool: buckets.hyper, weight: 0.5, foilType: "hyper" }
    ]);
    return pack;
  }

  function clearTearState() {
    if (!foilPack) return;
    window.gsap?.killTweensOf(foilPack);
    window.gsap?.set(foilPack, { clearProps: "transform,opacity,filter" });
    foilPack.classList.remove("is-tearing", "is-gsap-tearing");
  }

  function playPackTearAnimation() {
    if (!foilPack) return Promise.resolve();
    foilPack.classList.add("is-tearing");
    if (!window.gsap) return new Promise(resolve => setTimeout(resolve, 600));

    foilPack.classList.add("is-gsap-tearing");
    return new Promise(resolve => {
      const timeline = window.gsap.timeline({ onComplete: resolve });
      if (prefersReducedMotion) {
        timeline.to(foilPack, { opacity: 0, duration: 0.18, ease: "power2.out" });
        return;
      }
      timeline
        .to(foilPack, { scale: 0.97, y: -8, rotation: -1, duration: 0.16, ease: "power2.out" })
        .to(foilPack, { scale: 0.94, y: -24, rotation: 1.2, opacity: 0.72, duration: 0.2, ease: "power2.inOut" })
        .to(foilPack, { scale: 0.91, y: -40, rotation: 0, opacity: 0, duration: 0.18, ease: "power3.out" });
    });
  }

  function animatePackCards() {
    const cardEls = cardsGrid?.querySelectorAll(".tcg-card-item");
    if (!window.gsap || !cardEls?.length || prefersReducedMotion) return;
    window.gsap.set(cardEls, { opacity: 0, y: 28, rotation: -2 });
    window.gsap.to(cardEls, {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.36,
      ease: "power3.out",
      stagger: 0.055,
      clearProps: "transform,opacity"
    });
  }

  // Tearing and opening flow
  async function openBoosterPack() {
    if (isTearing) return;
    isTearing = true;
    const selectedSetId = currentSetId;

    const tearAnimation = playPackTearAnimation();
    playSynthSound("tear");

    try {
      const cards = await loadSetData(selectedSetId);
      if (selectedSetId !== currentSetId) {
        clearTearState();
        isTearing = false;
        return;
      }
      currentPackCards = generatePack(cards);
      incrementPacksOpened();

      await tearAnimation;
      if (selectedSetId !== currentSetId) {
        clearTearState();
        isTearing = false;
        return;
      }
      if (sealedView) sealedView.style.display = "none";
      if (openedView) openedView.style.display = "block";
      clearTearState();
      isTearing = false;
      renderCardsGrid(currentPackCards);
    } catch (err) {
      console.warn("Could not open pack:", err);
      clearTearState();
      isTearing = false;
      const packHint = sealedView?.querySelector("p");
      if (packHint) packHint.textContent = "Card data unavailable. Check your connection and try again.";
    }
  }

  // Render the opened cards in grid
  function renderCardsGrid(packItems) {
    if (!cardsGrid) return;
    cardsGrid.innerHTML = "";

    packItems.forEach((item, index) => {
      const card = item.card;
      const foilType = item.foilType;

      const cardEl = document.createElement("button");
      cardEl.type = "button";
      cardEl.className = "tcg-card-item";
      cardEl.dataset.index = index;
      cardEl.setAttribute("aria-pressed", "false");
      cardEl.setAttribute("aria-label", `Reveal card slot ${item.slot}`);

      // Glow highlights for big hits
      if (foilType === "sar" || foilType === "hyper") {
        cardEl.classList.add("hit-glow-rainbow");
      } else if (foilType === "ultra" || foilType === "illustration") {
        cardEl.classList.add("hit-glow-gold");
      }

      // Rarity badge
      let badgeHtml = "";
      const rarity = card.rarity || "";
      if (rarity.toLowerCase().includes("special illustration") || rarity.toLowerCase().includes("sar")) {
        badgeHtml = `<span class="tcg-card-badge badge-sar">SAR</span>`;
      } else if (rarity.toLowerCase().includes("ultra") || rarity.toLowerCase().includes("ex")) {
        badgeHtml = `<span class="tcg-card-badge badge-ultra">ULTRA</span>`;
      } else if (rarity.toLowerCase().includes("illustration")) {
        badgeHtml = `<span class="tcg-card-badge badge-ultra">IR</span>`;
      } else if (rarity.toLowerCase().includes("rare")) {
        badgeHtml = `<span class="tcg-card-badge badge-rare">RARE</span>`;
      }

      const imgUrl = getCardImage(card, "small");

      cardEl.innerHTML = `
        <span class="tcg-card-inner">
          <span class="tcg-card-back">
            <img src="assets/card-back.jpg" class="card-back-img" alt="Pokémon Card Back">
            <span class="card-slot-num">#${item.slot}</span>
          </span>
          <span class="tcg-card-front" aria-hidden="true" inert>
            ${badgeHtml}
            <img src="${imgUrl}" alt="${card.name}" loading="lazy">
            <span class="tcg-card-hit-flash" aria-hidden="true"></span>
          </span>
        </span>
      `;

      // Flip on click
      cardEl.addEventListener("click", () => {
        flipCard(cardEl, item);
      });

      cardsGrid.appendChild(cardEl);
    });
    animatePackCards();
  }

  // Flip an individual card
  function flipCard(cardEl, item) {
    if (cardEl.classList.contains("is-flipped")) {
      // If already flipped, clicking opens high-res preview modal
      openCardModal(item.card, cardEl);
      return;
    }

    cardEl.classList.add("is-flipped");
    cardEl.setAttribute("aria-pressed", "true");
    cardEl.setAttribute("aria-label", `Open high-resolution preview of ${item.card.name}, card #${item.card.number}`);
    const cardBack = cardEl.querySelector(".tcg-card-back");
    const cardFront = cardEl.querySelector(".tcg-card-front");
    if (cardBack) {
      cardBack.setAttribute("aria-hidden", "true");
      cardBack.inert = true;
    }
    if (cardFront) {
      cardFront.removeAttribute("aria-hidden");
      cardFront.inert = false;
    }
    playSynthSound("flip");

    if (item.foilType === "sar" || item.foilType === "hyper" || item.foilType === "ultra") {
      playSynthSound("hit");
      const hitFlash = cardEl.querySelector(".tcg-card-hit-flash");
      if (window.gsap && hitFlash && !prefersReducedMotion) {
        window.gsap.fromTo(hitFlash, { opacity: 0, xPercent: -140 }, {
          opacity: 0.7,
          xPercent: 140,
          duration: 0.48,
          ease: "power2.out",
          clearProps: "transform,opacity"
        });
      }
    }

    // Save to collection binder
    saveBinderCard(item.card);
    updateStatsDisplay();
  }

  // Reveal all cards with staggering
  function revealAllCards() {
    const cardEls = document.querySelectorAll(".tcg-card-item:not(.is-flipped)");
    cardEls.forEach((cardEl, idx) => {
      setTimeout(() => {
        const itemIdx = parseInt(cardEl.dataset.index, 10);
        const item = currentPackCards[itemIdx];
        if (item && !cardEl.classList.contains("is-flipped")) {
          flipCard(cardEl, item);
        }
      }, idx * 100);
    });
  }

  // Reset stage to sealed pack view
  function resetToSealedPack() {
    clearTearState();
    if (openedView) openedView.style.display = "none";
    if (sealedView) sealedView.style.display = "flex";
    if (cardsGrid) cardsGrid.innerHTML = "";
    currentPackCards = [];
  }

  // Card detail high-res modal
  function openCardModal(card, trigger = document.activeElement) {
    if (!tcgModal || !card) return;
    if (!tcgModal.classList.contains("is-active")) {
      modalTrigger = trigger;
      inertBeforeModal = Array.from(document.body.children)
        .filter(element => element !== tcgModal)
        .map(element => [element, element.inert]);
      inertBeforeModal.forEach(([element]) => { element.inert = true; });
    }
    const hiresUrl = getCardImage(card, "large");
    if (tcgModalImg) {
      tcgModalImg.src = hiresUrl;
      tcgModalImg.alt = card.name;
    }
    if (tcgModalName) tcgModalName.textContent = card.name;
    if (tcgModalMeta) {
      tcgModalMeta.textContent = `#${card.number} · ${card.rarity || "Standard"} · ${card.artist || "Official"}`;
    }
    tcgModal.hidden = false;
    tcgModal.setAttribute("aria-hidden", "false");
    tcgModal.style.display = "flex";
    tcgModal.classList.add("is-active");
    tcgModalCloseBtn?.focus({ preventScroll: true });
  }

  function closeCardModal() {
    if (!tcgModal || !tcgModal.classList.contains("is-active")) return;
    tcgModal.classList.remove("is-active");
    tcgModal.hidden = true;
    tcgModal.setAttribute("aria-hidden", "true");
    tcgModal.style.display = "none";
    inertBeforeModal.forEach(([element, wasInert]) => {
      if (element.isConnected) element.inert = wasInert;
    });
    inertBeforeModal = [];
    const trigger = modalTrigger;
    modalTrigger = null;
    if (trigger?.isConnected && !trigger.disabled) {
      trigger.focus({ preventScroll: true });
    }
  }

  // Binder Grid rendering with filters
  function renderBinderGrid(filter = "all") {
    if (!binderGrid) return;
    const binder = getBinder();
    const cards = Object.values(binder).filter(c => c.setId === currentSetId);

    binderGrid.innerHTML = "";

    if (cards.length === 0) {
      binderGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--ink-soft); font-family: var(--font-num);">
          No specimens collected from this expansion yet. Tear open a pack to begin your ledger!
        </div>
      `;
      return;
    }

    const filtered = cards.filter(c => {
      if (filter === "all") return true;
      const r = (c.rarity || "").toLowerCase();
      if (filter === "sar") return r.includes("special illustration") || r.includes("sar");
      if (filter === "ultra") return r.includes("ultra") || r.includes("ex") || r.includes("vmax");
      if (filter === "rare") return r.includes("rare");
      if (filter === "uncommon") return r.includes("uncommon");
      if (filter === "common") return r.includes("common");
      return true;
    });

    filtered.forEach(c => {
      const itemEl = document.createElement("button");
      itemEl.type = "button";
      itemEl.className = "binder-thumb-item";
      itemEl.title = `${c.name} (#${c.number}) - Owned: x${c.count || 1}`;
      itemEl.setAttribute("aria-label", `Open ${c.name}, card #${c.number}, owned ${c.count || 1}`);
      itemEl.innerHTML = `
        <img src="${c.imageSmall || getCardImage(c, 'small')}" alt="" loading="lazy">
        <span class="binder-thumb-count">x${c.count || 1}</span>
      `;
      itemEl.addEventListener("click", () => {
        openCardModal(c, itemEl);
      });
      binderGrid.appendChild(itemEl);
    });
  }

  // Event Listeners
  if (foilPack) {
    foilPack.addEventListener("click", openBoosterPack);
  }

  if (openTriggerBtn) {
    openTriggerBtn.addEventListener("click", openBoosterPack);
  }

  if (packAgainBtn) {
    packAgainBtn.addEventListener("click", () => {
      resetToSealedPack();
      openBoosterPack();
    });
  }

  if (packRevealAllBtn) {
    packRevealAllBtn.addEventListener("click", revealAllCards);
  }

  if (packToggleBinderBtn) {
    packToggleBinderBtn.addEventListener("click", () => {
      if (binderSection) {
        binderSection.classList.add("is-open");
        binderHeader?.setAttribute("aria-expanded", "true");
        binderSection.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        renderBinderGrid();
      }
    });
  }

  if (binderHeader) {
    binderHeader.addEventListener("click", () => {
      if (binderSection) {
        binderSection.classList.toggle("is-open");
        binderHeader.setAttribute("aria-expanded", String(binderSection.classList.contains("is-open")));
        if (binderSection.classList.contains("is-open")) {
          renderBinderGrid();
        }
      }
    });
  }

  // Filter chips in binder
  binderFilters.forEach(chip => {
    chip.addEventListener("click", () => {
      binderFilters.forEach(c => {
        c.removeAttribute("data-on");
        c.setAttribute("aria-pressed", "false");
      });
      chip.setAttribute("data-on", "");
      chip.setAttribute("aria-pressed", "true");
      renderBinderGrid(chip.dataset.filter);
    });
  });

  // Featured Chips
  if (featuredChipsWrap) {
    featuredChipsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const setId = btn.dataset.setId;
      if (setId && setId !== currentSetId) {
        resetToSealedPack();
        updatePackAppearance(setId);
      }
    });
  }

  // Select dropdown change
  if (setSelect) {
    setSelect.addEventListener("change", () => {
      const setId = setSelect.value;
      if (setId && setId !== currentSetId) {
        resetToSealedPack();
        updatePackAppearance(setId);
      }
    });
  }

  // Modal close handlers
  if (tcgModalCloseBtn) {
    tcgModalCloseBtn.addEventListener("click", closeCardModal);
  }
  if (tcgModal) {
    tcgModal.addEventListener("click", (e) => {
      if (e.target === tcgModal) closeCardModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (!tcgModal?.classList.contains("is-active")) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeCardModal();
      e.stopImmediatePropagation();
      return;
    }
    if (e.key !== "Tab") {
      e.stopImmediatePropagation();
      return;
    }

    const focusable = Array.from(tcgModal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(element => element.getClientRects().length > 0 && !element.closest("[hidden], [inert]"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first) {
      e.preventDefault();
      tcgModal.focus();
    } else if (!tcgModal.contains(document.activeElement)) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
    e.stopImmediatePropagation();
  }, true);

  // Initial Load
  updateStatsDisplay();
  updatePackAppearance(currentSetId);
  loadSetData(currentSetId, true).catch(() => {});
});
```

---

### 3.17 `js/global-search.js` (全局命令面板快捷检索)

- **文件路径**: `js/global-search.js`  
- **代码行数**: 383 行  
- **文件大小**: 13,410 字节  

```javascript
/**
 * 151 FILE — Global Quick Search (Command Palette)
 * 全局即时快捷搜索：按 / 打开，Esc 关闭，↑↓ 切换，Enter 直达
 * 同时检索 Pokémon、Moves、Abilities
 */
(function () {
  let pokemonCache = null;
  let movesCache = null;
  let abilitiesCache = null;
  let activeIndex = -1;
  let currentResults = [];
  let dataLoadPromise = null;
  let dataLoadState = "idle";
  let dataLoadFailures = [];
  let returnFocusTo = null;
  let backgroundInertState = [];

  function createSearchDOM() {
    if (document.getElementById("search-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "search-overlay";
    overlay.id = "search-overlay";
    overlay.hidden = true;

    overlay.innerHTML = `
      <div class="search-panel" role="dialog" aria-modal="true" aria-label="Global Search">
        <div class="search-panel-header">
          <span style="font-family:var(--font-num); color:var(--mark); font-weight:700; font-size:1.1rem; padding-left:0.5rem;">/</span>
          <label class="search-field">
            <span class="search-input-label">Search</span>
            <input id="global-search-input" type="search" placeholder="Search Pokémon, moves, abilities..." autocomplete="off" aria-describedby="global-search-status">
          </label>
          <button class="search-close-btn" id="search-close-btn" type="button" aria-label="Close search">✕</button>
        </div>
        <ul id="global-search-results" class="search-results-list"></ul>
        <p id="global-search-status" class="search-empty" role="status" aria-live="polite"></p>
        <div class="search-panel-footer">
          <span><kbd>/</kbd> Open · <kbd>Esc</kbd> Close · <kbd>↑</kbd><kbd>↓</kbd> Select · <kbd>Enter</kbd> Jump</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById("global-search-input");
    const closeBtn = document.getElementById("search-close-btn");

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSearch();
    });

    closeBtn.addEventListener("click", closeSearch);

    input.addEventListener("input", handleSearch);
    input.addEventListener("keydown", handleKeyNavigation);
    overlay.addEventListener("keydown", handleDialogKeydown);
    overlay.querySelector("#global-search-status").addEventListener("click", e => {
      if (e.target.closest("#global-search-retry")) {
        input.focus();
        loadData();
        renderSearchQuery();
      }
    });
  }

  function showSearchStatus(message, retry = false) {
    const status = document.getElementById("global-search-status");
    if (!status) return;
    status.replaceChildren(document.createTextNode(message));
    if (retry) {
      const button = document.createElement("button");
      button.id = "global-search-retry";
      button.className = "btn btn-paper";
      button.type = "button";
      button.textContent = "Retry";
      status.append(" ", button);
    }
  }

  function loadData() {
    if (dataLoadPromise) return dataLoadPromise;
    if (dataLoadState === "ready") return Promise.resolve([]);

    dataLoadState = "loading";
    const loaders = [
      async () => {
        if (pokemonCache) return;
        if (window.ALL_SPECIES && window.ALL_SPECIES.length === 1025) {
          pokemonCache = window.ALL_SPECIES;
          return;
        }
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        if (!resp.ok) throw new Error("Pokémon index unavailable");
        const data = await resp.json();
        pokemonCache = (data.results || []).map((p, idx) => ({ id: idx + 1, name: p.name }));
      },
      async () => {
        if (movesCache) return;
        const resp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
        if (!resp.ok) throw new Error("Move index unavailable");
        const data = await resp.json();
        movesCache = (data.results || []).map(m => m.name);
      },
      async () => {
        if (abilitiesCache) return;
        const resp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
        if (!resp.ok) throw new Error("Ability index unavailable");
        const data = await resp.json();
        abilitiesCache = (data.results || []).map(a => a.name);
      }
    ];

    showSearchStatus("Loading search records…");
    dataLoadPromise = Promise.all(loaders.map(async (loader, idx) => {
      try {
        await loader();
        return null;
      } catch (_) {
        return ["Pokémon", "moves", "abilities"][idx];
      }
    })).then(failures => {
      dataLoadFailures = failures.filter(Boolean);
      dataLoadState = dataLoadFailures.length ? "partial" : "ready";
      if (document.getElementById("search-overlay") && !document.getElementById("search-overlay").hidden) {
        renderSearchQuery();
      }
      return dataLoadFailures;
    }).finally(() => {
      dataLoadPromise = null;
    });
    return dataLoadPromise;
  }

  function openSearch() {
    createSearchDOM();
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("global-search-input");
    if (!overlay || !input) return;

    if (!overlay.hidden) return;
    returnFocusTo = document.activeElement;
    overlay.hidden = false;
    setBackgroundInert(true);
    input.value = "";
    input.focus();
    renderResults([]);
    loadData();
    renderSearchQuery();
  }

  function closeSearch() {
    const overlay = document.getElementById("search-overlay");
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    activeIndex = -1;
    currentResults = [];
    setBackgroundInert(false);
    const focusTarget = returnFocusTo;
    returnFocusTo = null;
    if (focusTarget?.isConnected && typeof focusTarget.focus === "function") focusTarget.focus();
  }

  function setBackgroundInert(inert) {
    const overlay = document.getElementById("search-overlay");
    if (inert) {
      backgroundInertState = [...document.body.children]
        .filter(node => node !== overlay)
        .map(node => ({ node, wasInert: node.inert }));
      backgroundInertState.forEach(({ node }) => { node.inert = true; });
      return;
    }
    backgroundInertState.forEach(({ node, wasInert }) => {
      if (node.isConnected) node.inert = wasInert;
    });
    backgroundInertState = [];
  }

  function handleDialogKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeSearch();
      return;
    }
    if (e.key !== "Tab") return;

    const overlay = document.getElementById("search-overlay");
    const focusable = [...overlay.querySelectorAll('input:not([disabled]), button:not([disabled]), a[href]')];
    if (!focusable.length) {
      e.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (document.activeElement === last || !overlay.contains(document.activeElement))) {
      e.preventDefault();
      first.focus();
    }
  }

  function handleSearch() {
    renderSearchQuery();
  }

  function renderSearchQuery() {
    const q = document.getElementById("global-search-input")?.value.trim().toLowerCase() || "";
    if (q.length < 2) {
      renderResults([]);
      showSearchStatus("Enter at least 2 characters to search.");
      return;
    }

    if (dataLoadState === "loading" || dataLoadState === "idle") {
      renderResults([]);
      showSearchStatus("Loading search records…");
      return;
    }

    const results = [];

    // 1. Pokémon (max 4)
    if (pokemonCache) {
      const pMatches = pokemonCache.filter(p => {
        const cleanName = p.name.toLowerCase();
        return cleanName.includes(q) || String(p.id) === q;
      }).slice(0, 4);

      pMatches.forEach(p => {
        results.push({
          type: "Pokémon",
          title: `#${String(p.id).padStart(3, "0")} ${p.name.replace(/-/g, " ")}`,
          url: `pokemon.html?id=${p.id}`,
          tag: "SPECIMEN"
        });
      });
    }

    // 2. Moves (max 3)
    if (movesCache) {
      const mMatches = movesCache.filter(m => m.toLowerCase().includes(q)).slice(0, 3);
      mMatches.forEach(m => {
        results.push({
          type: "Move",
          title: m.replace(/-/g, " "),
          url: `moves.html?q=${encodeURIComponent(m)}`,
          tag: "MOVE"
        });
      });
    }

    // 3. Abilities (max 3)
    if (abilitiesCache) {
      const aMatches = abilitiesCache.filter(a => a.toLowerCase().includes(q)).slice(0, 3);
      aMatches.forEach(a => {
        results.push({
          type: "Ability",
          title: a.replace(/-/g, " "),
          url: `abilities.html?q=${encodeURIComponent(a)}`,
          tag: "ABILITY"
        });
      });
    }

    renderResults(results);
    if (results.length) {
      showSearchStatus(
        `${results.length} results. ${dataLoadFailures.length ? "Some search records could not be loaded." : ""}`.trim(),
        dataLoadFailures.length > 0
      );
    } else if (dataLoadFailures.length) {
      showSearchStatus("Search is incomplete because some records could not be loaded.", true);
    } else {
      showSearchStatus("No matching records found.");
    }
  }

  function renderResults(results) {
    currentResults = results;
    activeIndex = results.length > 0 ? 0 : -1;
    const list = document.getElementById("global-search-results");
    if (!list) return;
    if (list.contains(document.activeElement)) {
      document.getElementById("global-search-input")?.focus();
    }

    list.innerHTML = results.map((item, idx) => `
      <li><a class="search-item ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}" href="${item.url}" ${idx === activeIndex ? 'aria-current="true"' : ""}>
        <span class="search-item-title">${item.title}</span>
        <span class="search-item-tag ${item.type.toLowerCase()}">${item.tag}</span>
      </a></li>
    `).join("");
  }

  function handleKeyNavigation(e) {
    if (currentResults.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % currentResults.length;
      updateActiveItem();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length;
      updateActiveItem();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < currentResults.length) {
        navigate(currentResults[activeIndex]);
      }
    }
  }

  function updateActiveItem() {
    const list = document.getElementById("global-search-results");
    if (!list) return;
    const items = list.querySelectorAll(".search-item");
    items.forEach((el, idx) => {
      el.classList.toggle("active", idx === activeIndex);
      if (idx === activeIndex) {
        el.setAttribute("aria-current", "true");
        const listBox = list.getBoundingClientRect();
        const itemBox = el.getBoundingClientRect();
        if (itemBox.top < listBox.top) list.scrollTop -= listBox.top - itemBox.top;
        else if (itemBox.bottom > listBox.bottom) list.scrollTop += itemBox.bottom - listBox.bottom;
      } else {
        el.removeAttribute("aria-current");
      }
    });
    const active = currentResults[activeIndex];
    if (active) {
      const notice = `Result ${activeIndex + 1} of ${currentResults.length}: ${active.title}.`;
      showSearchStatus(
        `${notice} ${dataLoadFailures.length ? "Some search records could not be loaded." : ""}`.trim(),
        dataLoadFailures.length > 0
      );
    }
  }

  function navigate(item) {
    if (!item || !item.url) return;
    closeSearch();
    location.href = item.url;
  }

  // Global hotkey
  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented) return;
    const overlay = document.getElementById("search-overlay");
    if (overlay && !overlay.hidden) return;
    const otherModalOpen = [...document.querySelectorAll('dialog[open], [role="dialog"][aria-modal="true"]')]
      .some(modal => modal !== overlay && !modal.hidden && modal.getAttribute("aria-hidden") !== "true");
    if (otherModalOpen) return;
    if (/(?:^|\/)(?:pokedex|lineup)\.html$/.test(location.pathname)) return;
    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  function revealCurrentNavLink() {
    const current = document.querySelector(".site-bar nav [aria-current='page']");
    const nav = current?.closest("nav");
    if (!current || !nav) return;
    const navBox = nav.getBoundingClientRect();
    const linkBox = current.getBoundingClientRect();
    if (linkBox.left < navBox.left) nav.scrollLeft -= navBox.left - linkBox.left;
    else if (linkBox.right > navBox.right) nav.scrollLeft += linkBox.right - navBox.right;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealCurrentNavLink, { once: true });
  } else {
    revealCurrentNavLink();
  }

  window.openGlobalSearch = openSearch;
  window.closeGlobalSearch = closeSearch;
})();
```

---

## 4. 矢量资源、脚本与配置 (Assets, Scripts & Config)

### 4.1 `scripts/make-thumbs.mjs` (缩略图离线生成脚本)

- **文件路径**: `scripts/make-thumbs.mjs`  
- **代码行数**: 90 行  
- **文件大小**: 2,877 字节  

```javascript
// 生成 Dex 列表 / 网格 / 胶片尺用的 192px WebP 缩略图。
//
// 为什么：卡片只显示 ~96px，却在加载 512×512 的 HOME 大图（平均 ~116 KB）。
// 缩到 192px（2× 屏够用）后平均 ~8 KB，约小 14 倍；全集 1025 张约 8 MB。
//
// 用法（在仓库根目录）：
//   npm i --no-save sharp
//   node scripts/make-thumbs.mjs            # 全部 1..1025，已存在的会跳过
//   node scripts/make-thumbs.mjs 1 151      # 只生成 #1–#151
//
// 输出：assets/thumbs/{id}.webp（缺失时页面会自动回退到远程大图，不会坏）

import { mkdir, access, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const OUT_DIR = fileURLToPath(new URL("../assets/thumbs/", import.meta.url));
const SRC = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

const SIZE = 192;
const QUALITY = 80;
const CONCURRENCY = 8;
const RETRIES = 2;

const [from = 1, to = 1025] = process.argv.slice(2).map(Number);
if (!Number.isInteger(from) || !Number.isInteger(to) || from < 1 || to < from) {
  console.error("用法: node scripts/make-thumbs.mjs [起始id] [结束id]");
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

const exists = (p) => access(p).then(() => true, () => false);

async function fetchBuffer(url) {
  let lastErr;
  for (let i = 0; i <= RETRIES; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }
  throw lastErr;
}

const stats = { made: 0, skipped: 0, failed: [], bytes: 0 };

async function one(id) {
  const file = `${OUT_DIR}${id}.webp`;
  if (await exists(file)) {
    stats.skipped++;
    return;
  }
  try {
    const png = await fetchBuffer(SRC(id));
    const webp = await sharp(png)
      .resize(SIZE, SIZE, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(file, webp);
    stats.made++;
    stats.bytes += webp.length;
  } catch (err) {
    stats.failed.push(`${id} (${err.message})`);
  }
}

const ids = Array.from({ length: to - from + 1 }, (_, i) => from + i);
let cursor = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < ids.length) await one(ids[cursor++]);
  })
);

const kb = (n) => (n / 1024).toFixed(1);
console.log(
  `done: made ${stats.made}, skipped ${stats.skipped}, failed ${stats.failed.length}` +
    (stats.made ? `, avg ${kb(stats.bytes / stats.made)} KB, total ${kb(stats.bytes)} KB` : "")
);
if (stats.failed.length) {
  console.log("failed ids:", stats.failed.join(", "));
  process.exitCode = 1;
}
```

---

### 4.2 `scripts/make-posters.mjs` (海报图离线生成脚本)

- **文件路径**: `scripts/make-posters.mjs`  
- **代码行数**: 87 行  
- **文件大小**: 4,394 字节  

```javascript
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const POSTERS = [
  // 8 Animated Series
  { id: "series-01", url: "https://media.kitsu.app/anime/486/poster_image/medium-25e3d01f2d2f0a81dc139e4993ed74d8.jpeg" },
  { id: "series-02", url: "https://media.kitsu.app/anime/poster_images/1404/medium.jpg" },
  { id: "series-03", url: "https://media.kitsu.app/anime/poster_images/1405/medium.jpg" },
  { id: "series-04", url: "https://media.kitsu.app/anime/poster_images/5605/medium.jpg" },
  { id: "series-05", url: "https://media.kitsu.app/anime/poster_images/7850/medium.jpg" },
  { id: "series-06", url: "https://media.kitsu.app/anime/poster_images/12533/medium.jpg" },
  { id: "series-07", url: "https://media.kitsu.app/anime/poster_images/42534/medium.jpg" },
  { id: "series-08", url: "https://media.kitsu.app/anime/46859/poster_image/medium-2d23c0195d27ee7308bb6f0e83b2b808.jpeg" },

  // 23 Theatrical Movies
  { id: "movie-01", url: "https://media.kitsu.app/anime/poster_images/487/original.jpg" },
  { id: "movie-02", url: "https://media.kitsu.app/anime/poster_images/1001/original.jpg" },
  { id: "movie-03", url: "https://media.kitsu.app/anime/poster_images/1002/original.jpg" },
  { id: "movie-04", url: "https://media.kitsu.app/anime/poster_images/1003/original.jpg" },
  { id: "movie-05", url: "https://media.kitsu.app/anime/poster_images/1004/original.jpg" },
  { id: "movie-06", url: "https://media.kitsu.app/anime/poster_images/1005/original.jpg" },
  { id: "movie-07", url: "https://media.kitsu.app/anime/poster_images/1006/original.jpg" },
  { id: "movie-08", url: "https://media.kitsu.app/anime/poster_images/1368/original.jpg" },
  { id: "movie-09", url: "https://media.kitsu.app/anime/poster_images/1992/original.jpg" },
  { id: "movie-10", url: "https://media.kitsu.app/anime/poster_images/2597/original.jpg" },
  { id: "movie-11", url: "https://media.kitsu.app/anime/poster_images/3419/original.jpg" },
  { id: "movie-12", url: "https://media.kitsu.app/anime/poster_images/4460/original.jpg" },
  { id: "movie-13", url: "https://media.kitsu.app/anime/poster_images/5083/original.jpg" },
  { id: "movie-14", url: "https://media.kitsu.app/anime/poster_images/6327/original.jpg" },
  { id: "movie-15", url: "https://media.kitsu.app/anime/poster_images/6786/original.jpg" },
  { id: "movie-16", url: "https://media.kitsu.app/anime/poster_images/7489/original.jpg" },
  { id: "movie-17", url: "https://media.kitsu.app/anime/poster_images/8149/original.jpg" },
  { id: "movie-18", url: "https://media.kitsu.app/anime/poster_images/8903/original.png" },
  { id: "movie-19", url: "https://media.kitsu.app/anime/poster_images/11202/large.jpg" },
  { id: "movie-20", url: "https://media.kitsu.app/anime/poster_images/12941/original.jpg" },
  { id: "movie-21", url: "https://media.kitsu.app/anime/poster_images/41413/original.jpg" },
  { id: "movie-22", url: "https://media.kitsu.app/anime/41871/poster_image/3eadcf949282d8782ed3a60922f91760.png" },
  { id: "movie-23", url: "https://media.kitsu.app/anime/poster_images/43025/original.jpg" }
];

const OUT_DIR = "assets/posters/";
const WIDTH = 480;
const HEIGHT = 720;
const QUALITY = 82;

await mkdir(OUT_DIR, { recursive: true });

async function fetchBuffer(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "151File/1.0 (Fan Archive; https://github.com/eugeneeeee1123/Pokemon)"
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (i === 2) throw err;
      await new Promise(r => setTimeout(r, 600 * (i + 1)));
    }
  }
}

let done = 0;
let errors = [];

for (const item of POSTERS) {
  const target = `${OUT_DIR}${item.id}.webp`;
  try {
    const raw = await fetchBuffer(item.url);
    const webp = await sharp(raw)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(target, webp);
    done++;
    console.log(`[${done}/${POSTERS.length}] saved ${target} (${(webp.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed ${item.id}:`, err.message);
    errors.push(item.id);
  }
}

console.log(`Finished: ${done} succeeded, ${errors.length} failed.`);
if (errors.length) process.exit(1);
```

---

### 4.3 `scripts/make-game-posters.mjs` (游戏正作海报离线生成脚本)

- **文件路径**: `scripts/make-game-posters.mjs`  
- **代码行数**: 62 行  
- **文件大小**: 2,410 字节  

```javascript
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const POSTERS = [
  { id: "game-kanto", url: "https://upload.wikimedia.org/wikipedia/en/a/af/Pok%C3%A9mon_Red_and_Blue_cover_art.webp" },
  { id: "game-johto", url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Pok%C3%A9mon_box_art_-_Gold_Version.png" },
  { id: "game-hoenn", url: "https://upload.wikimedia.org/wikipedia/en/b/be/PokemonRubySapphireBox.jpg" },
  { id: "game-sinnoh", url: "https://upload.wikimedia.org/wikipedia/en/2/2e/PokemonDiamondPearlBoxArt.jpg" },
  { id: "game-unova", url: "https://upload.wikimedia.org/wikipedia/en/e/e1/Pokemon_Black_Box_Artwork.jpg" },
  { id: "game-kalos", url: "https://upload.wikimedia.org/wikipedia/en/d/dc/Pokemon_X_and_Y_box_art.jpg" },
  { id: "game-alola", url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Pokemon_Sun_Boxart.jpg" },
  { id: "game-galar", url: "https://upload.wikimedia.org/wikipedia/en/f/fa/Pok%C3%A9mon_Sword_and_Shield.jpg" },
  { id: "game-paldea", url: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png" }
];

const OUT_DIR = "assets/posters/";
const WIDTH = 600;
const HEIGHT = 300;
const QUALITY = 85;

await mkdir(OUT_DIR, { recursive: true });

async function fetchBuffer(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "151FileArchive/1.0 (Fan Archive; contact: yijuntee@gmail.com)"
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (i === 2) throw err;
      await new Promise(r => setTimeout(r, 600 * (i + 1)));
    }
  }
}

let done = 0;
let errors = [];

for (const item of POSTERS) {
  const target = `${OUT_DIR}${item.id}.webp`;
  try {
    const raw = await fetchBuffer(item.url);
    const webp = await sharp(raw)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();
    await writeFile(target, webp);
    done++;
    console.log(`[${done}/${POSTERS.length}] saved ${target} (${(webp.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`Failed ${item.id}:`, err.message);
    errors.push(item.id);
  }
}

console.log(`Finished: ${done} succeeded, ${errors.length} failed.`);
if (errors.length) process.exit(1);
```

---

### 4.4 `scripts/generate-chatlog.mjs` (项目对话与开发日志生成脚本)

- **文件路径**: `scripts/generate-chatlog.mjs`  
- **代码行数**: 112 行  
- **文件大小**: 5,836 字节  

```javascript
import fs from "node:fs";
import path from "node:path";

const brainDir = "/Users/eugebe/.gemini/antigravity/brain";

const pokemonSessions = [
  { id: "aafd67a1-fd35-4ed3-a18b-cb8f85952b10", title: "Git Pull 与初始仓库同步" },
  { id: "1da4741a-0199-4bcc-97f1-d5a8163fc454", title: "高分辨率图库资源整理 (assets/images/gallery)" },
  { id: "1fb2c653-01bd-4214-b6bc-7325f7fdaf35", title: "图鉴布局、3D 标本台与仓库提交" },
  { id: "a67110fb-6a37-4951-bd3a-1888be12324f", title: "图鉴双视图渲染、胶片排版与深色档案风格" },
  { id: "fbbc6b9d-2090-4e1c-9c6f-775464074b7c", title: "TCG 实体卡包拆包实验室开发与去重算法" },
  { id: "d54e9137-b666-4dd4-a500-db9f789dec4a", title: "Git 代码拉取同步" },
  { id: "7fc45237-ff43-4d38-b892-9b604094c5e3", title: "Git 变更提交与远程推送" },
  { id: "8445cff0-40f4-4a0e-86ab-591c1eb3f2a5", title: "About 页面世界观、时空背景与排版填充" },
  { id: "bfb5e824-bd9b-4105-80e4-a959a7e345f7", title: "世界观文案本地化与自然语言重写" },
  { id: "6bf16f7c-e7af-484d-bc05-58a1f66d3c65", title: "Types 页面优化方案与 Characters 馆主文案" },
  { id: "f293347f-a792-408d-b9bc-8845450ec71f", title: "历代动画与剧场版大纲规划" },
  { id: "da2ee182-f01b-4c0a-a42f-936ce6fa1581", title: "首页视觉丰富化与解决方案探讨" },
  { id: "1919eb30-9847-47fd-bea9-6a0aa8479e76", title: "底部页脚独立与全站 Footer 布局修复" },
  { id: "9cb0db4f-e864-4d52-8251-6ae4ac38f17f", title: "About 页面海报压制（720p WebP）与占位清理" },
  { id: "1fc53583-42cd-4779-beec-9f361537a53d", title: "全代码打包 allinone.md 文档全量更新" },
  { id: "a625d2a7-c7a6-4ee8-af2f-cba478f3dad7", title: "动画电影文案精简与自然语言优化" },
  { id: "ab15aa3f-7543-4f11-9013-dda0e8470add", title: "宝可梦 3D 模型互动与 152-1025 全世代模型接驳" },
  { id: "7235df5f-49db-493a-93a3-61f00916ef31", title: "属性画廊 Image Gallery 方案探讨与规格设计" },
  { id: "74ad8fd4-d923-4097-bea2-9ee97de41129", title: "Games 页面正作介绍与各世代文案补齐" },
  { id: "be0464a1-35f0-4060-bdfe-b4a54d3ed4d2", title: "Games 页面官方海报接入、横向卡片布局与 Git 提交归档" }
];

function cleanUserContent(raw) {
  if (!raw) return "";
  let text = raw.replace(/<ADDITIONAL_METADATA>[\s\S]*$/, "").trim();
  text = text.replace(/<USER_REQUEST>/g, "").replace(/<\/USER_REQUEST>/g, "").trim();
  return text;
}

function formatSession(s, idx) {
  const p = path.join(brainDir, s.id, ".system_generated/logs/transcript_full.jsonl");
  if (!fs.existsSync(p)) return { out: "", turnsCount: 0, dateStr: "未知" };
  const lines = fs.readFileSync(p, "utf8").split("\n").filter(Boolean);
  
  const turns = [];
  let currentTurn = null;

  for (const line of lines) {
    try {
      const item = JSON.parse(line);
      if (item.type === "USER_INPUT") {
        if (currentTurn) turns.push(currentTurn);
        const text = cleanUserContent(item.content);
        currentTurn = {
          userText: text,
          userTime: item.created_at,
          assistantReplies: [],
          toolsUsed: []
        };
      } else if (item.type === "PLANNER_RESPONSE") {
        if (!currentTurn) continue;
        if (item.content && item.content.trim()) {
          currentTurn.assistantReplies.push(item.content.trim());
        }
        if (item.tool_calls && Array.isArray(item.tool_calls)) {
          item.tool_calls.forEach(tc => {
            const sum = tc.args && (tc.args.toolSummary || tc.name);
            if (sum && !currentTurn.toolsUsed.includes(sum)) currentTurn.toolsUsed.push(sum);
          });
        }
      }
    } catch(e) {}
  }
  if (currentTurn) turns.push(currentTurn);

  let firstTime = turns[0] ? turns[0].userTime : "";
  let dateStr = firstTime ? firstTime.slice(0, 10) : "未知日期";

  let out = `### 会话 ${String(idx + 1).padStart(2, "0")}: ${s.title}\n\n`;
  out += `- **会话 ID**: \`${s.id}\`\n`;
  out += `- **记录日期**: ${dateStr}\n`;
  out += `- **交互轮数**: ${turns.length} 轮对话\n\n`;

  turns.forEach((t, tIdx) => {
    out += `#### Turn ${tIdx + 1} (${t.userTime ? t.userTime.slice(11, 19) + " UTC" : ""})\n\n`;
    out += `**User**:\n> ${t.userText.split("\n").join("\n> ")}\n\n`;
    
    if (t.assistantReplies.length > 0) {
      out += `**Assistant**:\n\n${t.assistantReplies.join("\n\n---\n\n")}\n\n`;
    } else {
      let toolsDesc = t.toolsUsed.length > 0 ? ` (执行操作: ${t.toolsUsed.slice(0, 5).join(", ")}${t.toolsUsed.length > 5 ? " 等" : ""})` : "";
      out += `**Assistant**:\n\n*[处理中/执行指令${toolsDesc}]*\n\n`;
    }
  });

  out += "---\n\n";
  return { out, turnsCount: turns.length, dateStr };
}

let allText = "# 151 FILE — 项目完整对话与开发日志 (Chat & Development Logs)\n\n";
allText += "> 本文档汇集记录了 **151 File**（宝可梦纯原生全世代 Web 档案站点）从架构规划、功能演进、页面打磨到资源制作的完整会话记录。\n\n---\n\n## 目录 (Table of Contents)\n\n";
allText += "| 序号 | 日期 | 会话 ID | 主要议题 / 开发模块 | 轮数 |\n| :--- | :--- | :--- | :--- | :---: |\n";

const sessionOutputs = [];
pokemonSessions.forEach((s, idx) => {
  const { out, turnsCount, dateStr } = formatSession(s, idx);
  allText += `| ${idx + 1} | ${dateStr} | \`${s.id.slice(0, 8)}...\` | [${s.title}](#会话-${String(idx + 1).padStart(2, "0")}-${s.title.toLowerCase().replace(/[\s\(\)\/]/g, "-")}) | ${turnsCount} |\n`;
  sessionOutputs.push(out);
});

allText += "\n---\n\n## 详细会话记录 (Session Logs)\n\n";
allText += sessionOutputs.join("");

fs.writeFileSync("CHATLOG.md", allText, "utf8");
console.log("CHATLOG.md written successfully!");
```

---

### 4.5 `assets/favicon.svg` (精灵球矢量图标)

- **文件路径**: `assets/favicon.svg`  
- **代码行数**: 15 行  
- **文件大小**: 541 字节  

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <clipPath id="ball-circle">
      <circle cx="16" cy="16" r="16" />
    </clipPath>
  </defs>
  <g clip-path="url(#ball-circle)">
    <rect x="0" y="0" width="32" height="16" fill="#EE1515" />
    <rect x="0" y="16" width="32" height="16" fill="#FFFFFF" />
    <rect x="0" y="14.6" width="32" height="2.8" fill="#1A1A1A" />
    <circle cx="16" cy="16" r="5" fill="#1A1A1A" />
    <circle cx="16" cy="16" r="2.8" fill="#FFFFFF" />
  </g>
</svg>
```

---

### 4.6 `.gitignore` (版本控制忽略文件)

- **文件路径**: `.gitignore`  
- **代码行数**: 9 行  
- **文件大小**: 79 字节  

```gitignore
.DS_Store
Icon?
Icon\r
.Spotlight-V100
.Trashes
node_modules/
files/
files.zip
```

---

## 5. 附录参考模板 (Appendix & Demos)

### 5.1 `demo-interactive.html` (交互组件演示样板)

- **文件路径**: `demo-interactive.html`  
- **代码行数**: 889 行  
- **文件大小**: 27,724 字节  

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon GO 风格 3D 交互实验台 · 151 FILE</title>
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/buttons.css">
  <style>
    /* 实验台专属页面样式 */
    .lab-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: radial-gradient(circle at 50% 30%, #0F2A44 0%, var(--sky) 70%);
      color: var(--ink);
      padding: var(--s-6) var(--s-6) var(--s-12);
      box-sizing: border-box;
    }

    .lab-header {
      max-width: 900px;
      margin: 0 auto var(--s-6);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: var(--s-4);
      border-bottom: 1px solid var(--line);
      padding-bottom: var(--s-4);
    }

    .lab-title h1 {
      font-size: 1.5rem;
      margin: 0 0 var(--s-1);
      color: var(--ink);
      letter-spacing: -0.02em;
    }

    .lab-title p {
      margin: 0;
      font-size: 0.85rem;
      color: var(--ink-soft);
    }

    .lab-back-link {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--navy);
      text-decoration: none;
      padding: 6px 12px;
      border: 1px solid var(--line);
      background: var(--paper);
    }
    .lab-back-link:hover {
      border-color: var(--navy);
      color: var(--ink);
    }

    /* 快捷切换栏 */
    .selector-bar {
      max-width: 900px;
      margin: 0 auto var(--s-6);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .selector-label {
      font-size: 0.8rem;
      color: var(--ink-soft);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-right: 4px;
    }

    .specimen-chip {
      background: var(--paper);
      border: 1px solid var(--line);
      color: var(--ink);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      padding: 6px 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
      box-shadow: 0 2px 0 var(--line);
    }
    .specimen-chip:hover {
      border-color: var(--mark);
      transform: translateY(-1px);
    }
    .specimen-chip.is-active {
      background: var(--mark);
      color: #071422;
      border-color: #D4A700;
      font-weight: 700;
      box-shadow: 0 3px 0 #A88400;
    }

    .custom-id-input {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: var(--paper);
      border: 1px solid var(--line);
      padding: 4px 8px;
      margin-left: auto;
    }
    .custom-id-input input {
      background: transparent;
      border: none;
      color: var(--ink);
      font-family: var(--font-mono);
      font-size: 0.85rem;
      width: 50px;
      text-align: center;
      outline: none;
    }
    .custom-id-input button {
      background: var(--navy-key);
      color: var(--navy-key-ink);
      border: none;
      padding: 3px 8px;
      font-size: 0.75rem;
      font-weight: 700;
      cursor: pointer;
    }

    /* 主舞台区 */
    .lab-main {
      max-width: 900px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: var(--s-6);
      align-items: start;
    }

    @media (max-width: 768px) {
      .lab-main {
        grid-template-columns: 1fr;
      }
    }

    /* 3D 舞台容器 */
    .stage-wrapper {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: var(--s-8) var(--s-6);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 0 var(--line);
      perspective: 1000px;
      overflow: hidden;
      min-height: 440px;
      user-select: none;
    }

    /* 舞台背景科技光标网格 */
    .stage-grid-bg {
      position: absolute;
      inset: 0;
      background-image: 
        radial-gradient(circle at center, rgba(126, 182, 217, 0.08) 0%, transparent 70%),
        linear-gradient(to right, rgba(30, 58, 85, 0.25) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(30, 58, 85, 0.25) 1px, transparent 1px);
      background-size: 100% 100%, 32px 32px, 32px 32px;
      pointer-events: none;
    }

    /* 舞台顶部 HUD 状态 */
    .stage-hud {
      position: absolute;
      top: 14px;
      left: 18px;
      right: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--ink-soft);
      pointer-events: none;
      z-index: 5;
    }

    .hud-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(7, 20, 34, 0.65);
      padding: 4px 10px;
      border: 1px solid var(--line);
    }
    .hud-id {
      color: var(--mark);
      font-weight: 700;
    }

    /* 3D 互动卡体 */
    .pokemon-card-3d {
      width: 100%;
      max-width: 380px;
      height: 340px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      transition: transform 0.1s cubic-bezier(0.2, 0, 0.2, 1);
      cursor: grab;
    }
    .pokemon-card-3d:active {
      cursor: grabbing;
    }

    /* 3D 地台光环与悬浮阴影（Pokémon GO 经典地台） */
    .pokemon-pedestal {
      position: absolute;
      bottom: 20px;
      width: 220px;
      height: 60px;
      border-radius: 50%;
      background: radial-gradient(ellipse at center, rgba(126, 182, 217, 0.35) 0%, rgba(126, 182, 217, 0.08) 50%, transparent 75%);
      border: 1px solid rgba(126, 182, 217, 0.3);
      transform: rotateX(65deg) translateZ(-10px);
      box-shadow: 0 0 24px rgba(61, 125, 202, 0.3);
      transition: all 0.2s ease;
      pointer-events: none;
    }

    .pokemon-shadow {
      position: absolute;
      bottom: 28px;
      width: 140px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.65);
      filter: blur(8px);
      transform: rotateX(65deg) translateZ(-5px);
      transition: transform 0.1s ease, width 0.2s ease, opacity 0.2s ease;
      pointer-events: none;
    }

    /* 宝可梦 3D 模型渲染图 */
    .pokemon-model-img {
      max-width: 260px;
      max-height: 260px;
      width: auto;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 12px 18px rgba(0, 0, 0, 0.5));
      transform: translateZ(50px);
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      z-index: 2;
      pointer-events: auto;
    }

    /* 触碰光环波纹动效 */
    .burst-ring {
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid var(--mark);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0;
      pointer-events: none;
      z-index: 1;
    }
    .burst-ring.is-animating {
      animation: ring-pulse 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
    }

    @keyframes ring-pulse {
      0% {
        transform: translate(-50%, -50%) scale(0.3);
        opacity: 0.9;
        border-color: var(--mark);
      }
      100% {
        transform: translate(-50%, -50%) scale(2.8);
        opacity: 0;
        border-color: rgba(255, 203, 5, 0);
      }
    }

    /* 动作动画集合 (Animations) */
    /* 1. 跃起攻击 (Attack Jump) */
    .anim-attack {
      animation: poke-attack 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.2) forwards;
    }
    @keyframes poke-attack {
      0% { transform: translateZ(50px) scale(1) translateY(0); }
      30% { transform: translateZ(90px) scale(1.15) translateY(-36px) rotate(-6deg); }
      60% { transform: translateZ(100px) scale(1.12) translateY(-20px) rotate(4deg); }
      100% { transform: translateZ(50px) scale(1) translateY(0) rotate(0deg); }
    }

    /* 2. 欢呼旋转跳 (Cheer Spin Jump) */
    .anim-cheer {
      animation: poke-cheer 0.65s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
    @keyframes poke-cheer {
      0% { transform: translateZ(50px) scale(1) translateY(0) rotateY(0deg); }
      40% { transform: translateZ(80px) scale(1.1) translateY(-45px) rotateY(180deg); }
      80% { transform: translateZ(70px) scale(1.05) translateY(-10px) rotateY(360deg); }
      100% { transform: translateZ(50px) scale(1) translateY(0) rotateY(360deg); }
    }

    /* 3. 摇晃受击 (Wobble Shock) */
    .anim-wobble {
      animation: poke-wobble 0.5s ease-in-out forwards;
    }
    @keyframes poke-wobble {
      0%, 100% { transform: translateZ(50px) translateX(0); }
      20% { transform: translateZ(40px) translateX(-14px) rotate(-8deg); }
      40% { transform: translateZ(60px) translateX(14px) rotate(8deg); }
      60% { transform: translateZ(45px) translateX(-8px) rotate(-4deg); }
      80% { transform: translateZ(55px) translateX(6px) rotate(3deg); }
    }

    /* 闪光星光粒子 (Shiny Sparkle) */
    .sparkle-particle {
      position: absolute;
      width: 14px;
      height: 14px;
      background: radial-gradient(circle, #FFF 10%, #FFCB05 60%, transparent 90%);
      pointer-events: none;
      z-index: 3;
      clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);
      animation: sparkle-fade 0.8s ease-out forwards;
    }
    @keyframes sparkle-fade {
      0% { transform: scale(0) rotate(0deg); opacity: 0; }
      50% { transform: scale(1.3) rotate(90deg); opacity: 1; }
      100% { transform: scale(0) rotate(180deg); opacity: 0; }
    }

    /* 提示条 */
    .stage-hint {
      position: absolute;
      bottom: 12px;
      font-size: 0.75rem;
      color: var(--ink-soft);
      display: flex;
      align-items: center;
      gap: 6px;
      background: rgba(7, 20, 34, 0.7);
      padding: 4px 10px;
      border: 1px dashed var(--line);
      pointer-events: none;
    }

    /* 右侧控制面板 */
    .controls-panel {
      background: var(--paper);
      border: 1px solid var(--line);
      padding: var(--s-6);
      box-shadow: 0 10px 0 var(--line);
      display: flex;
      flex-direction: column;
      gap: var(--s-5);
    }

    .panel-section-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--ink);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid var(--line);
      padding-bottom: 6px;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .action-btn-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .action-btn {
      background: #0B1C2E;
      border: 1px solid var(--line);
      color: var(--ink);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      padding: 10px 8px;
      text-align: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      transition: all 0.15s ease;
    }
    .action-btn:hover {
      border-color: var(--navy);
      background: #142F4C;
      color: #FFF;
    }
    .action-btn:active {
      transform: translateY(2px);
    }
    .action-btn .btn-icon {
      font-size: 1.1rem;
    }

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
      padding: 4px 0;
    }

    .toggle-switch {
      background: #071422;
      border: 1px solid var(--line);
      border-radius: 12px;
      width: 44px;
      height: 24px;
      position: relative;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .toggle-switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--ink-soft);
      transition: all 0.2s ease;
    }
    .toggle-switch.is-on {
      background: var(--navy);
      border-color: var(--navy-key);
    }
    .toggle-switch.is-on::after {
      left: 22px;
      background: var(--mark);
    }

    /* 声音音量滑块 */
    .volume-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .volume-row input[type="range"] {
      flex: 1;
      accent-color: var(--mark);
      background: #071422;
    }
    .volume-val {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--ink-soft);
      min-width: 32px;
    }

    /* 特性说明清单 */
    .lab-notes {
      font-size: 0.8rem;
      line-height: 1.5;
      color: var(--ink-soft);
      background: #0B1C2E;
      padding: 12px;
      border-left: 3px solid var(--mark);
    }
    .lab-notes strong {
      color: var(--ink);
    }
  </style>
</head>
<body class="lab-layout">

  <!-- 顶栏说明 -->
  <header class="lab-header">
    <div class="lab-title">
      <h1>151 FILE · 交互实验台 (Interactive Lab)</h1>
      <p>Pokémon GO 风格 3D 模型悬浮视差、触碰反应、闪光切换与原生叫声试验</p>
    </div>
    <a href="index.html" class="lab-back-link">← 返回 Home (主页)</a>
  </header>

  <!-- 标本快捷切换条 -->
  <nav class="selector-bar" aria-label="Specimens Selector">
    <span class="selector-label">快速选择:</span>
    <button class="specimen-chip is-active" data-id="25" data-name="Pikachu" data-type="Electric">
      <span>#025</span> Pikachu
    </button>
    <button class="specimen-chip" data-id="1" data-name="Bulbasaur" data-type="Grass/Poison">
      <span>#001</span> Bulbasaur
    </button>
    <button class="specimen-chip" data-id="4" data-name="Charmander" data-type="Fire">
      <span>#004</span> Charmander
    </button>
    <button class="specimen-chip" data-id="7" data-name="Squirtle" data-type="Water">
      <span>#007</span> Squirtle
    </button>
    <button class="specimen-chip" data-id="94" data-name="Gengar" data-type="Ghost/Poison">
      <span>#094</span> Gengar
    </button>
    <button class="specimen-chip" data-id="150" data-name="Mewtwo" data-type="Psychic">
      <span>#150</span> Mewtwo
    </button>

    <div class="custom-id-input">
      <span style="font-size:0.75rem; color:var(--ink-soft);">#</span>
      <input type="number" id="customIdInput" min="1" max="151" placeholder="1-151" value="">
      <button id="customIdBtn">Load</button>
    </div>
  </nav>

  <!-- 核心主区域 -->
  <main class="lab-main">
    
    <!-- 3D 互动舞台 -->
    <section class="stage-wrapper" id="stageWrapper">
      <div class="stage-grid-bg"></div>

      <!-- HUD 信息 -->
      <div class="stage-hud">
        <div class="hud-badge">
          <span class="hud-id" id="hudId">#025</span>
          <span id="hudName" style="color:var(--ink); font-weight:700;">PIKACHU</span>
          <span id="hudType" style="color:var(--ink-soft); font-size:0.75rem;">ELECTRIC</span>
        </div>
        <div class="hud-badge" id="hudShinyState">
          <span style="color:var(--ink-soft);">NORMAL</span>
        </div>
      </div>

      <!-- 3D 浮动卡体 -->
      <div class="pokemon-card-3d" id="pokemonCard3D" title="移动鼠标查看 3D 视角，点击触发互动！">
        <!-- 触碰波纹环 -->
        <div class="burst-ring" id="burstRing"></div>

        <!-- 3D 地台光环与阴影 -->
        <div class="pokemon-pedestal" id="pedestal"></div>
        <div class="pokemon-shadow" id="shadow"></div>

        <!-- 3D 模型立绘 (Pokémon HOME 渲染图) -->
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" 
          alt="Pikachu 3D Render" 
          class="pokemon-model-img" 
          id="pokemonModelImg"
          draggable="false"
        >
      </div>

      <!-- 底部操作提示 -->
      <div class="stage-hint">
        <span>💡 <b>在卡片内移动鼠标</b>感受 3D 悬浮视角 · <b>单击立绘</b>触碰反应与叫声</span>
      </div>
    </section>

    <!-- 右侧互动控制台 -->
    <aside class="controls-panel">
      <h2 class="panel-section-title">
        <span>触碰动作测试</span>
        <span style="font-size:0.7rem; color:var(--mark);">TAP ACTIONS</span>
      </h2>

      <div class="action-btn-grid">
        <button class="action-btn" id="btnAttack">
          <span class="btn-icon">⚡</span>
          <span>Attack (突击)</span>
        </button>
        <button class="action-btn" id="btnCheer">
          <span class="btn-icon">✨</span>
          <span>Cheer (翻转)</span>
        </button>
        <button class="action-btn" id="btnWobble">
          <span class="btn-icon">💢</span>
          <span>Wobble (受击)</span>
        </button>
        <button class="action-btn" id="btnCryOnly">
          <span class="btn-icon">🔊</span>
          <span>Play Cry (叫声)</span>
        </button>
      </div>

      <h2 class="panel-section-title">
        <span>形态与视觉选项</span>
        <span style="font-size:0.7rem; color:var(--mark);">APPEARANCE</span>
      </h2>

      <!-- 闪光形态开关 -->
      <div class="toggle-row">
        <span>✨ 闪光形态 (Shiny Form)</span>
        <div class="toggle-switch" id="shinyToggle" role="switch" aria-checked="false"></div>
      </div>

      <!-- 3D 视差微动开关 -->
      <div class="toggle-row">
        <span>📐 3D 空间跟随 (Tilt Effect)</span>
        <div class="toggle-switch is-on" id="tiltToggle" role="switch" aria-checked="true"></div>
      </div>

      <!-- 声音控制 -->
      <h2 class="panel-section-title">
        <span>叫声音效 (Official Cry)</span>
        <span style="font-size:0.7rem; color:var(--mark);">AUDIO</span>
      </h2>

      <div class="toggle-row">
        <span>互动发声 (file151.sound)</span>
        <div class="toggle-switch is-on" id="soundToggle" role="switch" aria-checked="true"></div>
      </div>

      <div class="volume-row">
        <span style="font-size:0.8rem;">音量</span>
        <input type="range" id="volumeSlider" min="0" max="1" step="0.05" value="0.35">
        <span class="volume-val" id="volumeVal">35%</span>
      </div>

      <!-- 机制说明 -->
      <div class="lab-notes">
        <strong>架构说明：</strong><br>
        1. 采用 Pokémon HOME 512×512 官方 3D 渲染图（原生支持普通形态与闪光形态）。<br>
        2. 原生 CSS 3D `perspective` 透视矩阵，配合光标坐标计算倾角，零外部 3D 库，极速流畅。<br>
        3. 叫声直连 PokeAPI 官方音频库，完全符合 `pokemon-web-project-plan.md` 规范。
      </div>
    </aside>

  </main>

  <script>
    // 状态机
    const state = {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      isShiny: false,
      enableTilt: true,
      soundEnabled: true,
      volume: 0.35,
      isActionRunning: false
    };

    // DOM 元素引用
    const stageWrapper = document.getElementById('stageWrapper');
    const card = document.getElementById('pokemonCard3D');
    const modelImg = document.getElementById('pokemonModelImg');
    const shadow = document.getElementById('shadow');
    const pedestal = document.getElementById('pedestal');
    const burstRing = document.getElementById('burstRing');
    const hudId = document.getElementById('hudId');
    const hudName = document.getElementById('hudName');
    const hudType = document.getElementById('hudType');
    const hudShinyState = document.getElementById('hudShinyState');

    const shinyToggle = document.getElementById('shinyToggle');
    const tiltToggle = document.getElementById('tiltToggle');
    const soundToggle = document.getElementById('soundToggle');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeVal = document.getElementById('volumeVal');

    const btnAttack = document.getElementById('btnAttack');
    const btnCheer = document.getElementById('btnCheer');
    const btnWobble = document.getElementById('btnWobble');
    const btnCryOnly = document.getElementById('btnCryOnly');

    // 生成图片与叫声 URL
    function getModelUrl(id, isShiny) {
      const folder = isShiny ? 'home/shiny' : 'home';
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${folder}/${id}.png`;
    }

    function getCryUrl(id) {
      return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
    }

    // 播放官方 Cry 叫声
    function playCry() {
      if (!state.soundEnabled) return;
      try {
        const audio = new Audio(getCryUrl(state.id));
        audio.volume = state.volume;
        audio.play().catch(err => {
          console.log('Audio autoplay prevented or error:', err);
        });
      } catch (e) {
        console.warn('Audio play failed', e);
      }
    }

    // 触发波纹爆发环
    function triggerBurstRing() {
      burstRing.classList.remove('is-animating');
      void burstRing.offsetWidth; // 触发重绘
      burstRing.classList.add('is-animating');
    }

    // 触发闪光粒子
    function createSparkles() {
      const rect = card.getBoundingClientRect();
      for (let i = 0; i < 7; i++) {
        const p = document.createElement('div');
        p.className = 'sparkle-particle';
        const offsetX = (Math.random() - 0.5) * 180;
        const offsetY = (Math.random() - 0.5) * 180;
        p.style.left = `calc(50% + ${offsetX}px)`;
        p.style.top = `calc(50% + ${offsetY}px)`;
        stageWrapper.appendChild(p);
        setTimeout(() => p.remove(), 800);
      }
    }

    // 触发动作
    function triggerAction(animClass) {
      if (state.isActionRunning) return;
      state.isActionRunning = true;

      // 播放叫声与光环
      playCry();
      triggerBurstRing();
      if (state.isShiny) {
        createSparkles();
      }

      modelImg.classList.add(animClass);

      // 地台与阴影联动
      shadow.style.transform = 'rotateX(65deg) translateZ(-5px) scale(0.7)';
      shadow.style.opacity = '0.35';

      setTimeout(() => {
        modelImg.classList.remove(animClass);
        shadow.style.transform = 'rotateX(65deg) translateZ(-5px) scale(1)';
        shadow.style.opacity = '0.65';
        state.isActionRunning = false;
      }, 650);
    }

    // 更新宝可梦展示
    function loadPokemon(id, name, type) {
      state.id = parseInt(id, 10);
      state.name = name || `Pokemon #${id}`;
      state.type = type || 'Unknown';

      hudId.textContent = `#${String(state.id).padStart(3, '0')}`;
      hudName.textContent = state.name.toUpperCase();
      hudType.textContent = state.type.toUpperCase();

      modelImg.src = getModelUrl(state.id, state.isShiny);
      modelImg.alt = `${state.name} 3D Render`;

      // 切换标本时轻微欢呼提示
      triggerAction('anim-attack');
    }

    // 3D 鼠标跟随视差效果 (Tilt & Perspective)
    stageWrapper.addEventListener('mousemove', (e) => {
      if (!state.enableTilt || state.isActionRunning) return;

      const rect = stageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 计算倾角（限制在 -15deg 到 15deg）
      const rotateX = ((centerY - y) / centerY) * 14;
      const rotateY = ((x - centerX) / centerX) * 16;

      card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      
      // 阴影与地台微位移反向运动增强景深
      shadow.style.transform = `rotateX(65deg) translateZ(-5px) translateX(${(-rotateY * 1.5).toFixed(1)}px)`;
      pedestal.style.transform = `rotateX(65deg) translateZ(-10px) translateX(${(-rotateY * 0.8).toFixed(1)}px)`;
    });

    stageWrapper.addEventListener('mouseleave', () => {
      if (!state.enableTilt) return;
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      shadow.style.transform = 'rotateX(65deg) translateZ(-5px) translateX(0)';
      pedestal.style.transform = 'rotateX(65deg) translateZ(-10px) translateX(0)';
    });

    // 点击立绘或卡体触发受碰动作
    card.addEventListener('click', () => {
      const actions = ['anim-attack', 'anim-cheer', 'anim-wobble'];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      triggerAction(randomAction);
    });

    // 快捷切换按钮事件
    document.querySelectorAll('.specimen-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.specimen-chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        loadPokemon(chip.dataset.id, chip.dataset.name, chip.dataset.type);
      });
    });

    // 自定义编号输入
    const customIdInput = document.getElementById('customIdInput');
    const customIdBtn = document.getElementById('customIdBtn');
    function handleCustomId() {
      const val = parseInt(customIdInput.value, 10);
      if (val >= 1 && val <= 151) {
        document.querySelectorAll('.specimen-chip').forEach(c => c.classList.remove('is-active'));
        loadPokemon(val, `Specimen #${val}`, 'Kanto 151');
      } else {
        alert('请输入 1 到 151 之间的编号');
      }
    }
    customIdBtn.addEventListener('click', handleCustomId);
    customIdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleCustomId();
    });

    // 控制台按钮事件
    btnAttack.addEventListener('click', (e) => { e.stopPropagation(); triggerAction('anim-attack'); });
    btnCheer.addEventListener('click', (e) => { e.stopPropagation(); triggerAction('anim-cheer'); });
    btnWobble.addEventListener('click', (e) => { e.stopPropagation(); triggerAction('anim-wobble'); });
    btnCryOnly.addEventListener('click', (e) => { e.stopPropagation(); playCry(); triggerBurstRing(); });

    // 闪光切换
    shinyToggle.addEventListener('click', () => {
      state.isShiny = !state.isShiny;
      shinyToggle.classList.toggle('is-on', state.isShiny);
      shinyToggle.setAttribute('aria-checked', state.isShiny);

      hudShinyState.innerHTML = state.isShiny 
        ? '<span style="color:var(--mark); font-weight:700;">✨ SHINY</span>' 
        : '<span style="color:var(--ink-soft);">NORMAL</span>';

      modelImg.src = getModelUrl(state.id, state.isShiny);
      if (state.isShiny) {
        createSparkles();
      }
      playCry();
    });

    // 3D 跟随开关
    tiltToggle.addEventListener('click', () => {
      state.enableTilt = !state.enableTilt;
      tiltToggle.classList.toggle('is-on', state.enableTilt);
      tiltToggle.setAttribute('aria-checked', state.enableTilt);
      if (!state.enableTilt) {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }
    });

    // 声音开关
    soundToggle.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      soundToggle.classList.toggle('is-on', state.soundEnabled);
      soundToggle.setAttribute('aria-checked', state.soundEnabled);
    });

    // 音量滑块
    volumeSlider.addEventListener('input', (e) => {
      state.volume = parseFloat(e.target.value);
      volumeVal.textContent = `${Math.round(state.volume * 100)}%`;
    });
  </script>
</body>
</html>
```

---

### 5.2 `ui-template.html` (原始设计参考模板)

- **文件路径**: `ui-template.html`  
- **代码行数**: 681 行  
- **文件大小**: 20,283 字节  

```html
<!doctype html>
<html lang="zh-Hans">
<head><script type="application/json" data-od-external-dependencies>["https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"]</script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>界面模板</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: color-mix(in oklch, #1677ff 10%, #ffffff);
      --surface: color-mix(in oklch, #1677ff 18%, #ffffff);
      --surface-deep: color-mix(in oklch, #1677ff 28%, #ffffff);
      --fg: #111111;
      --muted: #6b7280;
      --border: color-mix(in oklch, #1677ff 40%, #ffffff);
      --accent: #1677ff;
      --press: color-mix(in oklch, #1677ff 58%, #111111);
      --radius: 8px;
      --line: 1px;
      --step: 8px;
      --font: Inter, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      --fast: 160ms ease;
    }

    *, *::before, *::after { box-sizing: border-box; }

    html { scroll-behavior: auto; }

    body {
      margin: 0;
      background: var(--bg);
      color: #111111;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    :focus {
      outline: 2px solid #1677ff;
      outline-offset: 2px;
    }

    :focus:not(:focus-visible) { outline: none; }

    :focus-visible {
      outline: 2px solid #1677ff;
      outline-offset: 2px;
    }

    .skip {
      position: absolute;
      left: 8px;
      top: 8px;
      z-index: 5;
      transform: translateY(-140%);
      padding: 8px 16px;
      border-radius: 8px;
      background: var(--press);
      color: #ffffff;
      font-weight: 700;
      text-decoration: none;
      transition: transform 160ms ease;
    }

    .skip:focus { transform: translateY(0); }

    .wrap {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
    }

    .topnav {
      position: sticky;
      top: 0;
      z-index: 4;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
    }

    .topnav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-height: 64px;
    }

    .brand {
      margin: 0;
      color: #111111;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .nav-link {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      padding: 8px 12px;
      border: 1px solid transparent;
      border-radius: 8px;
      color: #111111;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      transition: background-color 160ms ease, border-color 160ms ease;
    }

    .nav-link:hover {
      background: var(--surface-deep);
      border-color: var(--border);
      color: #111111;
    }

    main { padding-bottom: 64px; }

    section { padding-top: 48px; }

    .hero { padding-top: 40px; }

    .eyebrow {
      margin: 0 0 8px;
      color: #111111;
      font-size: 14px;
      font-weight: 700;
    }

    h1, h2, h3, p { overflow-wrap: anywhere; }

    h1 {
      margin: 0;
      max-width: 16ch;
      color: #111111;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: 0;
    }

    h2 {
      margin: 0 0 8px;
      color: #111111;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.25;
    }

    h3 {
      margin: 0 0 8px;
      color: #111111;
      font-size: 20px;
      font-weight: 700;
      line-height: 1.3;
    }

    .lead {
      max-width: 62ch;
      margin: 16px 0 0;
      color: #111111;
      font-size: 16px;
    }

    .note {
      margin: 8px 0 0;
      color: #111111;
      font-size: 14px;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 8px;
      margin-top: 32px;
    }

    .swatch {
      min-width: 0;
      padding: 8px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
    }

    .chip {
      display: flex;
      align-items: flex-end;
      height: 64px;
      padding: 8px;
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
    }

    .chip-bg { background: var(--bg); color: #111111; }
    .chip-surface { background: var(--surface); color: #111111; }
    .chip-border { background: var(--border); color: #111111; }
    .chip-accent { background: #1677ff; color: #ffffff; }
    .chip-fg { background: #111111; color: #ffffff; }
    .chip-paper { background: #ffffff; color: #111111; }

    .swatch-name {
      margin: 8px 0 0;
      color: #111111;
      font-size: 14px;
      font-weight: 700;
    }

    .swatch-hex {
      margin: 0;
      color: #111111;
      font-size: 14px;
      font-weight: 400;
    }

    .section-head { max-width: 68ch; margin-bottom: 24px; }

    .type-list {
      display: grid;
      gap: 8px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .type-row {
      display: grid;
      grid-template-columns: 120px 88px minmax(0, 1fr);
      gap: 16px;
      align-items: baseline;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
    }

    .type-meta {
      margin: 0;
      color: #111111;
      font-size: 14px;
      font-weight: 700;
    }

    .sample-display {
      margin: 0;
      color: #111111;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.15;
    }

    .sample-title {
      margin: 0;
      color: #111111;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.25;
    }

    .sample-body {
      margin: 0;
      color: #111111;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    .sample-meta {
      margin: 0;
      color: #111111;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    }

    .btn-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 12px 20px;
      border-radius: 8px;
      border: 1px solid var(--border);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease, transform 160ms ease;
    }

    .btn-primary {
      min-height: 48px;
      padding: 12px 22px;
      border-color: #1677ff;
      background: #1677ff;
      color: #ffffff;
      font-size: 20px;
    }

    .btn-primary:hover {
      border-color: var(--press);
      background: var(--press);
      color: #ffffff;
      transform: translateY(-2px);
    }

    .btn-primary:active {
      border-color: var(--press);
      background: var(--press);
      color: #ffffff;
      transform: translateY(0);
    }

    .btn-secondary {
      border-color: var(--border);
      background: var(--surface);
      color: #111111;
    }

    .btn-secondary:hover {
      border-color: var(--press);
      background: var(--surface-deep);
      color: #111111;
      transform: translateY(-2px);
    }

    .btn-secondary:active {
      border-color: var(--press);
      background: var(--surface-deep);
      color: #111111;
      transform: translateY(0);
    }

    .btn-ghost {
      border-color: transparent;
      background: transparent;
      color: #111111;
    }

    .btn-ghost:hover {
      border-color: var(--border);
      background: var(--surface);
      color: #111111;
    }

    .btn:disabled,
    .btn:disabled:hover {
      border-color: var(--border);
      background: var(--surface);
      color: #6b7280;
      transform: none;
      cursor: not-allowed;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
      padding: 24px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
      color: #111111;
      transition: border-color 160ms ease, transform 160ms ease, background-color 160ms ease;
    }

    .card:hover {
      border-color: var(--press);
      background: var(--surface-deep);
      transform: translateY(-2px);
    }

    .card p { margin: 0; color: #111111; }

    .text-link {
      display: inline-flex;
      align-items: center;
      align-self: flex-start;
      min-height: 44px;
      color: #111111;
      font-weight: 700;
      text-underline-offset: 4px;
      transition: background-color 160ms ease;
    }

    .text-link:hover {
      background: var(--surface-deep);
      color: #111111;
    }

    form {
      display: grid;
      gap: 16px;
      max-width: 560px;
      padding: 24px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
    }

    .field { display: grid; gap: 8px; }

    label {
      color: #111111;
      font-size: 14px;
      font-weight: 700;
    }

    input, select, textarea {
      width: 100%;
      min-height: 44px;
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--bg);
      color: #111111;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      transition: border-color 160ms ease, background-color 160ms ease;
    }

    textarea { min-height: 120px; resize: vertical; }

    input::placeholder, textarea::placeholder { color: #111111; }

    input:hover, select:hover, textarea:hover {
      border-color: var(--press);
      background: var(--bg);
      color: #111111;
    }

    input:focus-visible, select:focus-visible, textarea:focus-visible {
      border-color: #1677ff;
      background: var(--bg);
      color: #111111;
    }

    .hint { margin: 0; color: #111111; font-size: 14px; }

    .token-block {
      margin: 24px 0 0;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--surface);
      color: #111111;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.6;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .foot {
      margin-top: 48px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      color: #111111;
      font-size: 14px;
    }

    @media (max-width: 800px) {
      h1 { font-size: 32px; }
      .swatches { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .type-row { grid-template-columns: 1fr; gap: 4px; }
      .cards { grid-template-columns: 1fr; }
      .topnav-inner { align-items: flex-start; flex-direction: column; padding: 8px 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        transition: none;
      }
    }
  </style>
</head>
<body>
  <a class="skip" href="#content" data-od-id="skip-link">跳到内容</a>
  <header class="topnav" data-od-id="site-nav">
    <div class="wrap topnav-inner">
      <a class="brand" href="#content" data-od-id="brand">界面模板</a>
      <nav aria-label="页内导航">
        <ul class="nav-links">
          <li><a class="nav-link" href="#colors" data-od-id="nav-colors">色彩</a></li>
          <li><a class="nav-link" href="#type" data-od-id="nav-type">字体</a></li>
          <li><a class="nav-link" href="#buttons" data-od-id="nav-buttons">按钮</a></li>
          <li><a class="nav-link" href="#cards" data-od-id="nav-cards">卡片</a></li>
          <li><a class="nav-link" href="#form" data-od-id="nav-form">表单</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="content">
    <div class="wrap">
      <section class="hero" data-od-id="hero">
        <p class="eyebrow" data-od-id="hero-eyebrow">色彩 · 字体 · 按钮</p>
        <h1 data-od-id="hero-title">按钮、字体与色彩</h1>
        <p class="lead" data-od-id="hero-lead">页面由同一支蓝的深浅铺开。近黑和白色只用来写字：浅底上是近黑，实心按钮上是白色。悬停改的是蓝的深浅、边框和位置。</p>
      </section>

      <section id="colors" data-od-id="colors">
        <div class="section-head">
          <h2 data-od-id="colors-title">色彩</h2>
          <p class="note">浅底、表面、描边都从强调蓝混出。近黑和反白不拿来铺底，色板里这两格只说明文字颜色。</p>
        </div>
        <div class="swatches">
          <article class="swatch" data-od-id="swatch-bg">
            <div class="chip chip-bg" role="img" aria-label="浅蓝画布">底</div>
            <p class="swatch-name">浅底</p>
            <p class="swatch-hex">蓝 10%</p>
          </article>
          <article class="swatch" data-od-id="swatch-surface">
            <div class="chip chip-surface" role="img" aria-label="蓝色表面">面</div>
            <p class="swatch-name">表面</p>
            <p class="swatch-hex">蓝 18%</p>
          </article>
          <article class="swatch" data-od-id="swatch-border">
            <div class="chip chip-border" role="img" aria-label="蓝色分割线">线</div>
            <p class="swatch-name">描边</p>
            <p class="swatch-hex">蓝 40%</p>
          </article>
          <article class="swatch" data-od-id="swatch-accent">
            <div class="chip chip-accent" role="img" aria-label="强调蓝">钮</div>
            <p class="swatch-name">强调</p>
            <p class="swatch-hex">#1677ff</p>
          </article>
          <article class="swatch" data-od-id="swatch-fg">
            <div class="chip chip-fg" role="img" aria-label="近黑文字">字</div>
            <p class="swatch-name">文字</p>
            <p class="swatch-hex">#111111</p>
          </article>
          <article class="swatch" data-od-id="swatch-paper">
            <div class="chip chip-paper" role="img" aria-label="反白文字">字</div>
            <p class="swatch-name">反白</p>
            <p class="swatch-hex">#ffffff</p>
          </article>
        </div>
      </section>

      <section id="type" data-od-id="type">
        <div class="section-head">
          <h2 data-od-id="type-title">字体</h2>
          <p class="note">展示和正文都用 Inter。字重只有 400 和 700。浅底上的字一律近黑，不靠变灰来区分层级。</p>
        </div>
        <ul class="type-list">
          <li class="type-row" data-od-id="type-display">
            <p class="type-meta">展示 · 40</p>
            <p class="type-meta">700</p>
            <p class="sample-display">图鉴条目</p>
          </li>
          <li class="type-row" data-od-id="type-heading">
            <p class="type-meta">标题 · 28</p>
            <p class="type-meta">700</p>
            <p class="sample-title">关都地区</p>
          </li>
          <li class="type-row" data-od-id="type-body">
            <p class="type-meta">正文 · 16</p>
            <p class="type-meta">400</p>
            <p class="sample-body">记录按编号排列。每条保留属性、身高和栖息地。正文停在近黑，悬停不把字变浅。</p>
          </li>
          <li class="type-row" data-od-id="type-caption">
            <p class="type-meta">注释 · 14</p>
            <p class="type-meta">400</p>
            <p class="sample-meta">编号 001–151 · 注释靠字号区分，颜色仍是近黑</p>
          </li>
        </ul>
      </section>

      <section id="buttons" data-od-id="buttons">
        <div class="section-head">
          <h2 data-od-id="buttons-title">按钮</h2>
          <p class="note">全页只有一颗实心主按钮。悬停时白字留在原处，底色从强调蓝收到更深的蓝，并上移 2 像素。</p>
        </div>
        <div class="btn-row">
          <button class="btn btn-primary" type="button" data-od-id="btn-primary">主要按钮</button>
          <button class="btn btn-secondary" type="button" data-od-id="btn-secondary">次要按钮</button>
          <button class="btn btn-ghost" type="button" data-od-id="btn-ghost">文字按钮</button>
          <button class="btn btn-secondary" type="button" disabled data-od-id="btn-disabled">禁用</button>
        </div>
      </section>

      <section id="cards" data-od-id="cards">
        <div class="section-head">
          <h2 data-od-id="cards-title">卡片</h2>
          <p class="note">表面是更深一档的蓝，描边 1 像素，圆角 8 像素。悬停时蓝再深一档，卡片上移，正文仍是近黑。</p>
        </div>
        <div class="cards">
          <article class="card" data-od-id="card-entry">
            <p class="eyebrow">条目</p>
            <h3>妙蛙种子</h3>
            <p>草 / 毒。卡片本身不放第二颗主按钮，下一步用文字链接。</p>
            <a class="text-link" href="#form" data-od-id="card-entry-link">查看记录</a>
          </article>
          <article class="card" data-od-id="card-habitat">
            <p class="eyebrow">栖息地</p>
            <h3>常青森林</h3>
            <p>同一套悬停：边框收到深蓝，底从表面色再加深，不回到白底。</p>
            <a class="text-link" href="#colors" data-od-id="card-habitat-link">回到色板</a>
          </article>
        </div>
      </section>

      <section id="form" data-od-id="form">
        <div class="section-head">
          <h2 data-od-id="form-title">表单</h2>
          <p class="note">输入框停在浅底上。悬停只把描边收到深蓝。焦点环用强调蓝。提交用次要按钮，避免和主按钮抢同一动作。</p>
        </div>
        <form data-od-id="entry-form" action="#form">
          <div class="field">
            <label for="entry-name">条目名称</label>
            <input id="entry-name" name="entry-name" type="text" required autocomplete="off" placeholder="例如：妙蛙种子">
          </div>
          <div class="field">
            <label for="entry-region">地区</label>
            <select id="entry-region" name="entry-region">
              <option>关都</option>
              <option>城都</option>
              <option>丰缘</option>
              <option>神奥</option>
              <option>合众</option>
            </select>
          </div>
          <div class="field">
            <label for="entry-note">备注</label>
            <textarea id="entry-note" name="entry-note" placeholder="属性、身高、栖息地"></textarea>
            <p class="hint">必填项只有名称。未填写时，浏览器会拦住提交。</p>
          </div>
          <button class="btn btn-secondary" type="submit" data-od-id="form-submit">保存备注</button>
        </form>
        <pre class="token-block" data-od-id="token-snippet">:root {
  --bg: color-mix(in oklch, #1677ff 10%, #ffffff);
  --surface: color-mix(in oklch, #1677ff 18%, #ffffff);
  --surface-deep: color-mix(in oklch, #1677ff 28%, #ffffff);
  --fg: #111111;
  --border: color-mix(in oklch, #1677ff 40%, #ffffff);
  --accent: #1677ff;
  --press: color-mix(in oklch, #1677ff 58%, #111111);
  --radius: 8px;
  --font: Inter, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}</pre>
        <p class="foot" data-od-id="footer-note">组件样式都在这份文件里。蓝的深浅从 #1677ff 混出。Inter 加载失败时使用系统无衬线。</p>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 6. 项目规范与产品档案 (Specifications & Guidelines)

### 6.1 `PRODUCT.md` (产品愿景与功能架构规范)

- **文件路径**: `PRODUCT.md`  
- **代码行数**: 34 行  
- **文件大小**: 1,738 字节  

```markdown
# Product

## Register

product

## Users

People looking up Pokémon, including readers who may not know the franchise well. They need to find a specimen by name, number, type, or region, understand its reference data, and assemble a six-Pokémon belt.

## Product Purpose

151 FILE is a static, multi-page Pokédex and team-reference site. It opens on the Kanto 151, supports browsing other National Dex regions on demand, and lets users inspect species data, type matchups, and six-member team coverage without requiring an account.

## Brand Personality

Archival, clear, lightly playful. The site should feel like a handheld field archive under a night sky; the Poké Ball supplies the small moment of play.

## Anti-references

Avoid generic SaaS dashboards, marketing-page scaffolding, unexplained franchise jargon, a red-and-white theme across the whole interface, and decorative multi-column footer links.

## Design Principles

- Make core reference tasks understandable without prior Pokémon knowledge.
- Keep the Kanto 151 as the default and fetch broader data only when the user asks for it.
- Keep browsing, species details, type reference, and the six-slot belt in clear page-level routes.
- Use the night-archive visual language for structure and reserve playful motion for the Poké Ball and meaningful interactions.
- Make navigation and controls work with a keyboard, visible focus, and reduced-motion preferences.

## Accessibility & Inclusion

No formal WCAG conformance level is specified in the project docs. Preserve semantic landmarks and the skip link, keep keyboard focus visible, avoid conveying meaning through color alone, and honor reduced-motion, increased-contrast, and reduced-transparency preferences.
```

---

### 6.2 `AGENTS.md` (Agent 操作红线与工程约束规范)

- **文件路径**: `AGENTS.md`  
- **代码行数**: 158 行  
- **文件大小**: 5,365 字节  

```markdown
# AGENTS.md

修订：2026-09-22。交互以 `interactions.md` 与计划 §4.9 为准。

对本仓库动手的模型、IDE agent、Gemini、Antigravity、Cursor、Claude、Grok，全部受这份文件约束。  
用户口头允许只覆盖他当轮点名的文件。未点名的文件视为禁止区。

权威顺序（冲突时按此执行，不得自行调和）：

1. 用户本轮原话
2. 本文件
3. `interactions.md`
4. `pokemon-web-project-plan.md`
5. `design.md`
6. 现有代码

禁止用「为了更好」「清理一下」「顺手重构」覆盖上面任何一层。

---

## 0. 默认姿态

- 先读，再改，改完停。
- 一次只做用户要的那一件事。
- 发现可改进项：写在回复里，等下一句指令。不要直接改。
- 不确定就停。问一句，等回复。不要猜着删。

---

## 1. 禁止清单（无白名单许可一律违规）

1. 删除文件、清空文件、把文件改成空壳。
2. `rm`、`git reset --hard`、`git checkout --`、`git clean`、覆盖式重写整个文件（除非用户写明「整文件重写」）。
3. 改名、移动、合并、拆分已有文件。
4. 改 `AGENTS.md`、`pokemon-web-project-plan.md`、`design.md`，除非用户本轮明确点名该文件。
5. 删注释、删未使用函数、删 CSS 规则、删 HTML 区块，理由是「没用到」。
6. 升级、降级、更换依赖、加打包器、加框架、改目录结构。
7. 把 8 页合成 SPA、引入 React/Vue/Tailwind/组件库。
8. 扩大 API 范围、加对战伤害公式、加用户没点名的第 9 页。
9. 改视觉 token、字体、按钮文案，使其偏离 `design.md`。
10. 格式化整仓库、全文件 Prettier、统一引号/分号风格，作为「顺手」。
11. 提交 git、push、force push、改 remote。
12. 把密钥、账号、localStorage 以外的数据传到第三方。

违规处理：停下，列出你本想做的操作，等用户说「可以」或「改某某文件」。

---

## 2. 必须先通知、等允许

以下操作即使你认为正确，也必须先用一条消息列出路径和原因，得到明确同意后再执行：

- 删除任何路径
- 重写超过约 80 行的已有文件
- 新增计划里没有的文件
- 改顶栏信息架构、路由文件名、`file151.belt` 键名
- 改 Regions 编号表、克制表数值
- 把已完成页面的 DOM 结构推倒重来

同意的有效形式（必须针对本轮具体文件）：

- 「可以删 `css/old.css`」
- 「整文件重写 `lineup.js`」
- 「按 design.md 改 `buttons.css`」

无效同意：

- 「帮我优化一下」
- 「看着办」
- 「弄好就行」
- 上一轮对其他文件的允许

---

## 3. 允许的工作方式

用户点名任务时：

1. 列出将要改的文件路径（最多本轮需要的那些）。
2. 用补丁改，不要无故整文件覆盖。
3. 能小改就小改。新增函数优于改旧函数行为。
4. 改完在回复里给变更清单：路径 + 各一行。
5. 不做清单外的第二件事。

新建文件仅限 `pokemon-web-project-plan.md` 第 3 节已写明的路径。计划里没有的路径 = 先问。

---

## 4. 范围锁

| 用户说的 | 你能动 |
|---|---|
| 修 Dex 筛选 | `pokedex.html` / `pokedex.js` / 必要时 `api.js` |
| 改按钮样式 | `buttons.css` / `tokens.css` |
| 加 Lineup 计算 | `lineup.js` / `types-chart.js` / `lineup.html` |
| 改文案规划 | 被点名的那一份 md |

禁止「修筛选顺便把 About 重写」。  
禁止「改 CSS 顺便把 class 名全局替换」。

页面与界面名不得擅自改：

Home, Dex, Detail, Types, Belt, Lineup, Regions, File  
文件名：`index.html` `pokedex.html` `pokemon.html` `types.html` `team.html` `lineup.html` `regions.html` `about.html`

---

## 5. 数据与产品锁

- 腰带键名固定：`file151.belt`，值为 id 数组，最长 6。
- 看过：`file151.seen`。声音：`file151.sound`，默认 `"off"`。
- Dex 呈现只准 Well + Film，外加 K 转盘、L 编号键、M 书签齿、N 剪影。禁止改回砖网格。
- Dex 禁止拖砖进腰带、双击 Add、长按预览。尺拖与井环转盘只换当前只。井心 tap 才开合。
- Holes 跳转用 `?resist=`，禁止复用 `?type=`。
- Lineup 只读种族 type + `types-chart.js`。不加招式伤害。
- Regions 用 `regions-data.js` 写死区间。不改表除非用户改计划。
- 默认列表 Kanto 1–151。切地区才换 offset。
- 不一次拉取 1025 条详情。

---

## 6. 回复格式

改代码后的回复只含：

1. 做了什么（短句）
2. 改了哪些路径
3. 没做但发现的问题（可选，不自动修）

禁止：

- 静默改完不提文件名
- 用「小清理」「轻微调整」掩盖删除
- 在用户没要预览时大段重贴无关文件

---

## 7. 冲突与幻觉

- 计划与 design 冲突：停，引用两处原文，等用户裁断。不要自己选。
- API 字段不确定：先查 PokeAPI 或现有 `api.js`。不要编字段。
- 用户纠正你：下一轮按纠正后的事实做，不要把旧改动再改回去，除非他要求回滚。

---

## 8. 回滚

用户说「撤」「还原」「谁让你删」：

1. 立刻停止新改动。
2. 用本轮 diff 能还原的部分还原。
3. 列无法还原的路径，等指示。
4. 不辩解，不借机再重构。

---

完。没有许可就当不允许。
```

