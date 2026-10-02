# 151 FILE — All-In-One Codebase

> 本文件汇集了 **151 File**（宝可梦纯原生前端 Web 站点）的全部源码。
> 包含 8 个主页面与扩展页面、5 个全局样式表、17 个前端 JS 核心模块、辅助脚本、矢量资源与参考样板。

---

## 目录 (Table of Contents)

**汇总统计**: 共打包 **40** 个文件 | **12,563** 行代码 | **409,472** 字节

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
- [1.12 `about.html` (File / 架构说明与数据源)](#112-abouthtml-file-架构说明与数据源)
- [1.13 `quiz.html` (Booster Pack Lab / 实体卡包拆包实验室)](#113-quizhtml-booster-pack-lab-实体卡包拆包实验室)

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
- [4.2 `assets/favicon.svg` (精灵球矢量图标)](#42-assetsfaviconsvg-精灵球矢量图标)
- [4.3 `.gitignore` (版本控制忽略文件)](#43-gitignore-版本控制忽略文件)

### 5. 附录参考模板 (Appendix & Demos)

- [5.1 `demo-interactive.html` (交互组件演示样板)](#51-demo-interactivehtml-交互组件演示样板)
- [5.2 `ui-template.html` (原始设计参考模板)](#52-ui-templatehtml-原始设计参考模板)

---

## 1. HTML 页面结构 (HTML Pages)

### 1.1 `index.html` (Home / 青纸首页)

- **文件路径**: `index.html`  
- **代码行数**: 339 行  
- **文件大小**: 15,943 字节  

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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
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
    <section class="daily-specimen-section" id="daily-specimen" style="background:var(--paper); border:1px solid var(--line); border-radius:4px; padding:1.25rem 1.5rem; margin-top:1.5rem;">
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
    <section class="collection-summary" style="margin-top:1.5rem; margin-bottom:1.5rem;">
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
- **代码行数**: 130 行  
- **文件大小**: 6,498 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dex — 151 File</title>
  <meta name="description" content="Browse all 1025 Pokémon in a ledger or card grid. Filter by region, type or resistance, and add favourites to your belt.">
  <meta name="theme-color" content="#071422">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Dex — 151 File">
  <meta property="og:description" content="Browse all 1025 Pokémon in a ledger or card grid. Filter by region, type or resistance, and add favourites to your belt.">
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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap dex-page">
    <h1 class="sr-only">Dex</h1>
    <!-- 工具条两行：控制一行，18 属性永远一行（窄屏只在这一行里横滑） -->
    <div class="tools">
      <div class="tools-bar">
      <select id="region-select" class="region-select" aria-label="Select Region">
        <option value="all">All Regions (#001–#1025)</option>
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

      <div class="view-toggle" role="group" aria-label="Display mode">
        <button type="button" class="view-btn is-active" id="btn-view-ledger" data-view="ledger" title="Ledger & Stage (台座名录)">
          📑 Ledger
        </button>
        <button type="button" class="view-btn" id="btn-view-grid" data-view="grid" title="Visual Cards Grid (全景网格)">
          ▦ Grid
        </button>
      </div>

      <input id="q" type="search" placeholder="name or number (press / to focus)" autocomplete="off" aria-label="Search by name or number">
      <button class="chip" id="draw" type="button">Draw one</button>
      <span class="count-badge" id="count-badge"></span>
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

    <!-- 模式 1：Dex 四区同屏布局 (Spine + Ledger + Stage + Film) -->
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

    <!-- 模式 2：全景 3D 卡片网格布局 (Visual Cards Grid) -->
    <div class="dex-grid" id="dex-grid-view" hidden></div>
  </main>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/pokedex.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>

```

---

### 1.3 `pokemon.html` (Detail / 详情与开球展台)

- **文件路径**: `pokemon.html`  
- **代码行数**: 59 行  
- **文件大小**: 2,387 字节  

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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap wide">
    <div id="file"></div>
  </main>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/api.js"></script>
  <script src="js/pokemon.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>

```

---

### 1.4 `regions.html` (Regions / 10 官方地区地图)

- **文件路径**: `regions.html`  
- **代码行数**: 97 行  
- **文件大小**: 5,315 字节  

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

  <script src="js/regions-data.js"></script>
  <script src="js/regions.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>

```

---

### 1.5 `types.html` (Types / 18 属性矩阵克制表)

- **文件路径**: `types.html`  
- **代码行数**: 78 行  
- **文件大小**: 3,289 字节  

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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
    <h1 class="page-title">Types</h1>
    <p class="lead">Attack down the left, defense across the top. Dual defense is multiplied on Lineup, not here. Click a type or a cell to open the dex filtered by the defending type.</p>

    <!-- 18 属性色票墙 -->
    <div class="wall" id="wall"></div>

    <!-- 18×18 属性对战矩阵板 -->
    <div class="board">
      <table class="types-table" id="chart"></table>
    </div>

    <!-- 图例说明 -->
    <div class="types-legend">
      <span><i class="dot" style="background:#3D7DCA"></i> 2× Super effective</span>
      <span><i class="dot" style="background:#1E3A55"></i> ½ Not very effective</span>
      <span><i class="dot" style="background:#071422; border:1px solid #1E3A55"></i> 0 Immune</span>
    </div>

    <!-- 当前选中属性与腰带克制推演 (Belt vs Type) -->
    <div id="belt-vs-box" class="belt-vs-box" aria-live="polite"></div>
  </main>

  <script src="js/store.js"></script>
  <script src="js/regions-data.js"></script>
  <script src="js/api.js"></script>
  <script src="js/types-chart.js"></script>
  <script src="js/types.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>

```

---

### 1.6 `moves.html` (Moves / 招式数据库与战斗属性)

- **文件路径**: `moves.html`  
- **代码行数**: 80 行  
- **文件大小**: 2,996 字节  

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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap">
    <h1 class="page-title">Moves</h1>
    <p class="lead" style="color:var(--ink-soft); margin-bottom:1.5rem;">
      Browse Pokémon battle moves by type, damage category, power, and accuracy.
    </p>

    <div class="tools-bar">
      <input
        id="move-search"
        type="search"
        placeholder="Search move name..."
        autocomplete="off"
        style="min-width: 14rem;"
      >

      <select id="move-type">
        <option value="">All types</option>
      </select>

      <select id="move-category">
        <option value="">All categories</option>
        <option value="physical">Physical</option>
        <option value="special">Special</option>
        <option value="status">Status</option>
      </select>
    </div>

    <div id="move-status" style="margin-bottom:1rem; font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;">Loading moves database...</div>
    <div id="move-grid" class="dex-grid"></div>
    <div id="move-pagination" style="margin-top:1.5rem; text-align:center;"></div>
  </main>

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
- **代码行数**: 68 行  
- **文件大小**: 2,643 字节  

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
      <input
        id="ability-search"
        type="search"
        placeholder="Search ability name..."
        autocomplete="off"
        style="min-width: 14rem;"
      >
    </div>

    <div id="ability-status" style="margin-bottom:1rem; font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;">Loading abilities index...</div>
    <div id="ability-grid" class="dex-grid"></div>
    <div id="ability-pagination" style="margin-top:1.5rem; text-align:center;"></div>
  </main>

  <script src="js/api.js"></script>
  <script src="js/abilities.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>

```

---

### 1.8 `collection.html` (Collection / 全图鉴与地区收集进度)

- **文件路径**: `collection.html`  
- **代码行数**: 95 行  
- **文件大小**: 3,865 字节  

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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap">
    <h1 class="page-title">Collection</h1>
    <p class="lead" style="color:var(--ink-soft); margin-bottom:1.5rem;">Archive progress ledger. Track specimen discoveries across National Dex and all 10 regions, stored locally.</p>

    <section class="collection-summary">
      <div>
        <span id="seen-count">0</span>
        <small>/ 1025 SEEN</small>
      </div>

      <div>
        <span id="favorite-count">0</span>
        <small>FAVORITES</small>
      </div>

      <div>
        <span id="belt-count">0</span>
        <small>IN BELT</small>
      </div>
    </section>

    <section style="margin-bottom:2.25rem;">
      <h2 style="font-size:1.15rem; margin-bottom:0.75rem;">National Dex</h2>
      <div class="progress" style="height:12px; margin-bottom:0.5rem;">
        <div id="national-progress"></div>
      </div>
      <p id="national-text" style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;"></p>
    </section>

    <section>
      <h2 style="font-size:1.15rem; margin-bottom:0.75rem;">Regions Breakdown</h2>
      <div id="region-progress"></div>
    </section>

    <!-- 勋章成就系统 (Achievements) -->
    <section id="achievements" style="margin-top:2.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <h2 style="font-size:1.15rem; margin:0 0 0.25rem;">Archive Achievements</h2>
          <p style="font-size:0.875rem; color:var(--ink-soft); margin:0;">Unlock commemorative badges as your specimen collection and field mastery progress.</p>
        </div>
        <span id="badge-unlocked-summary" style="font-family:var(--font-num); color:var(--mark); font-weight:700; font-size:0.875rem;">0 / 12 UNLOCKED</span>
      </div>
      <div class="badge-grid" id="badge-grid"></div>
    </section>
  </main>

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
- **代码行数**: 100 行  
- **文件大小**: 4,804 字节  

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
- **代码行数**: 95 行  
- **文件大小**: 4,047 字节  

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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器 -->
  <main id="main" class="wrap">
    <h1 class="page-title">Lineup</h1>
    <p class="lead">Typed as the species types, not moves. Coverage chips open Dex by attack type. Holes open Dex by <code>resist</code>.</p>

    <!-- 腰带 6 槽缩略栏 -->
    <h2 class="lineup-subheading">Belt</h2>
    <div class="lineup-belt" id="belt"></div>
    <p class="lineup-empty" id="belt-empty" hidden>Belt is empty. <a class="link-action" href="pokedex.html">Open the dex</a> and add up to 6.</p>

    <!-- 打击面覆盖 (Coverage) -->
    <h2 class="lineup-subheading">Coverage</h2>
    <div class="wall" id="coverage"></div>

    <!-- 防御盲点 (Holes) -->
    <h2 class="lineup-subheading">Holes</h2>
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
      </div>
      <div class="lineup-pane" id="right"></div>
    </div>

    <!-- 文字比对结论 (Verdict) -->
    <div class="lineup-verdict" id="lineup-verdict" hidden aria-live="polite"></div>
  </main>

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
- **代码行数**: 79 行  
- **文件大小**: 3,508 字节  

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

### 1.12 `about.html` (File / 架构说明与数据源)

- **文件路径**: `about.html`  
- **代码行数**: 128 行  
- **文件大小**: 6,116 字节  

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
        <a href="about.html" aria-current="page">File</a>
      </nav>
    </div>
  </header>

  <!-- 页面主体容器：约束在舒适阅读行宽 (wrap-doc) -->
  <main id="main" class="wrap wrap-doc">
    <h1 class="page-title">File</h1>
    <p class="page-desc">Unofficial Kanto-first dex. Not affiliated with Nintendo, Game Freak, or The Pokémon Company.</p>

    <!-- 这站存什么 / 不存什么 -->
    <section class="file-block">
      <h2>这站存什么</h2>
      <p style="margin-bottom:0.75rem; line-height:1.6;">只用你浏览器的 <code>localStorage</code>，存 4 样东西，全在本地：</p>
      <ul>
        <li><code>file151.belt</code>：你的 6 槽腰带名单（编号数组）。</li>
        <li><code>file151.seen</code>：你看过哪些宝可梦，在 Dex 网格角落留记号。</li>
        <li><code>file151.last</code>：上次打开的文件编号，首页直接一键继续。</li>
        <li><code>file151.sound</code>：叫声自动播放偏好（默认 <code>off</code>）。</li>
      </ul>
    </section>

    <section class="file-block">
      <h2>不存什么</h2>
      <p style="line-height:1.6;">没有账号，没有登录，没有追踪 Cookie，没有服务器后台，也没有数据分析打点。你关掉浏览器或清理本地缓存，记录就清零。没有任何数据会传到这台电脑之外。</p>
    </section>

    <!-- 数据从哪来 -->
    <section class="file-block">
      <h2>数据从哪来</h2>
      <ul>
        <li>种族基础数值、属性、特性、英文种属与描述：来自开放数据接口 <a href="https://pokeapi.co/" target="_blank" rel="noopener">PokeAPI</a>。</li>
        <li>3D 立绘渲染模型：来自官方立绘归档 <a href="https://github.com/PokeAPI/sprites" target="_blank" rel="noopener">PokeAPI/sprites</a>（HOME 渲染图与 192px 缩略图）。</li>
        <li>叫声音频：来自 <a href="https://github.com/PokeAPI/cries" target="_blank" rel="noopener">PokeAPI/cries</a> 原生音频归档。</li>
      </ul>
    </section>

    <!-- 腰带在这台机器 -->
    <section class="file-block">
      <h2>腰带在这台机器</h2>
      <p style="line-height:1.6;">你的六只腰带搭档只保存在当前这台设备的当前浏览器中。不会同步到其他设备，也不会因为换台机器而泄漏。它是你私人的一份野外记录。</p>
    </section>

    <!-- 精灵球音效开关 -->
    <section class="file-block" aria-labelledby="sound-heading">
      <h2 id="sound-heading">Sound</h2>
      <p class="soft" style="margin-bottom: 1rem;">Off by default. Writes <code>file151.sound</code>. When on, a cry plays once as a file opens or when you press Draw one. Tapping a Pokémon always plays its cry.</p>
      <button class="btn btn-paper" id="sound" type="button">Sound off</button>
    </section>

    <!-- 快捷键指南 -->
    <section class="file-block" aria-labelledby="keys-heading">
      <h2 id="keys-heading">Keys</h2>
      <table class="keys-table">
        <tbody>
          <tr><td><kbd>/</kbd></td><td>Focus search on Dex / Lineup</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close file or clear search</td></tr>
          <tr><td><kbd>←</kbd> <kbd>→</kbd></td><td>Prev / next number on Detail; Film on Dex</td></tr>
          <tr><td><kbd>↑</kbd> <kbd>↓</kbd></td><td>Move in Ledger</td></tr>
          <tr><td><kbd>a</kbd>–<kbd>z</kbd></td><td>Jump Ledger name in the open spine</td></tr>
        </tbody>
      </table>
    </section>
  </main>

  <script src="js/store.js"></script>
  <script src="js/pokeball.js"></script>
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

### 1.13 `quiz.html` (Booster Pack Lab / 实体卡包拆包实验室)

- **文件路径**: `quiz.html`  
- **代码行数**: 221 行  
- **文件大小**: 10,428 字节  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pack Lab — 151 File</title>
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
        <a href="about.html">File</a>
      </nav>
    </div>
  </header>

  <main id="main" class="wrap pack-lab-wrap">
    <div style="margin-bottom:1.5rem;">
      <h1 class="page-title">Booster Pack Lab</h1>
      <p class="lead" style="color:var(--ink-soft); margin-bottom:1.25rem;">
        Physical specimen expansion archive. Tear open field packs to catalogue official specimen prints into your local binder.
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
      <div class="type-row" id="pack-featured-chips">
        <button class="chip" data-set-id="me55" data-on>30th Celebration · 2026</button>
        <button class="chip" data-set-id="sv3pt5">Pokémon 151 · 2023</button>
        <button class="chip" data-set-id="base1">Base Set · 1999</button>
        <button class="chip" data-set-id="sv8pt5">Prismatic Evolutions · 2025</button>
        <button class="chip" data-set-id="swsh7">Evolving Skies · 2021</button>
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
      <div class="pack-binder-header" id="pack-binder-header">
        <h2>
          <span>Specimen Binder</span>
          <span id="binder-count-badge" style="font-family:var(--font-num); font-size:0.75rem; background:var(--sky); color:var(--mark); padding:0.15rem 0.5rem; border-radius:2px; font-weight:700;">
            0 Cards
          </span>
        </h2>
        <span class="pack-binder-toggle-icon">▼</span>
      </div>

      <div class="pack-binder-body">
        <div class="pack-binder-filters">
          <span style="font-family:var(--font-num); font-size:0.75rem; color:var(--ink-soft); font-weight:700; margin-right:0.25rem;">
            FILTER:
          </span>
          <button class="chip" data-filter="all" data-on>All Cards</button>
          <button class="chip" data-filter="sar">Special Illustration</button>
          <button class="chip" data-filter="ultra">Ultra Rare / ex</button>
          <button class="chip" data-filter="rare">Rare / Holo</button>
          <button class="chip" data-filter="uncommon">Uncommon</button>
          <button class="chip" data-filter="common">Common</button>
        </div>

        <div class="pack-binder-grid" id="pack-binder-grid">
          <!-- 收集卡牌缩略图由 JS 动态生成 -->
        </div>
      </div>
    </section>
  </main>

  <!-- 高清大卡预览 Modal -->
  <div class="tcg-modal-backdrop" id="tcg-modal">
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
  <script src="js/quiz.js"></script>
  <script src="js/global-search.js"></script>
</body>
</html>

```

---

## 2. CSS 样式模块 (CSS Stylesheets)

### 2.1 `css/tokens.css` (设计 Token & 变量)

- **文件路径**: `css/tokens.css`  
- **代码行数**: 48 行  
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
- **代码行数**: 225 行  
- **文件大小**: 5,259 字节  

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
}

.site-bar nav a {
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
- **代码行数**: 118 行  
- **文件大小**: 2,446 字节  

```css
/* ==========================================================================
   151 FILE — Buttons & Controls (Night Archive)
   ========================================================================== */

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
  background: #B9DDF0;
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
  color: var(--blue);
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
  background: #FFE066;
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

```

---

### 2.4 `css/pokeball.css` (开闭精灵球组件动画)

- **文件路径**: `css/pokeball.css`  
- **代码行数**: 237 行  
- **文件大小**: 4,729 字节  

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
  transform: translateY(-58%);
}

.stage-ball.is-open .lid-b {
  transform: translateY(58%);
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
- **代码行数**: 3,231 行  
- **文件大小**: 65,954 字节  

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
  padding-top: var(--s-6);
  width: 100%;
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
  margin-top: var(--s-8);
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

/* 宽屏把顶栏 + 本页锁进视口：名录和胶片在内部滚，页面本身不滚 */
@media (min-width: 45.01rem) {
  body:has(.dex-page) {
    height: 100dvh;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  body:has(.dex-page) .site-bar,
  body:has(.dex-page) .tools {
    flex: none;
  }
  body:has(.dex-page) .wrap.dex-page {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
  padding: 0.35rem 1rem 0.25rem;
  position: relative;
  min-height: 0;
  overflow: auto;
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
  margin: 0.4rem 0;
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

.film {
  grid-column: 2 / 4;
  display: flex;
  gap: 0.35rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0.15rem 0 0;
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
  background: var(--paper);
  box-shadow: 0 0.625rem 0 var(--line);
  border: 1px solid var(--line);
  border-radius: var(--r-file);
  padding: 0.75rem;
  max-width: 100%;
}

.types-table {
  border-collapse: collapse;
  font-family: var(--font-num);
  font-weight: 700;
  font-size: 0.68rem;
  line-height: 1;
  margin: 0 auto;
}

.types-table th,
.types-table td {
  width: 2.15rem;
  height: 2.15rem;
  min-width: 2.15rem;
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
  font-size: 0.65rem;
}

.types-table td a {
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
  background: #3D7DCA;
  color: #ffffff;
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
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--navy);
  border-radius: 6px;
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
  border-radius: 6px;
  overflow: hidden;
  background: var(--sky-deep);
  border: 1px solid var(--line);
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.5);
}

.field-map-img {
  width: 100%;
  height: auto;
  max-height: 580px;
  object-fit: cover;
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
  width: 32px;
  height: 32px;
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
  font-size: 0.6875rem;
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
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7);
  border-radius: var(--r-file);
  padding: 1.15rem 1.25rem;
  width: 290px;
  max-width: 90vw;
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
  animation: packTearPhysical 0.5s forwards ease-in-out;
  pointer-events: none;
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

/* Hit Borders for High Rarity (Crisp physical tokens, no blurry neon) */
.tcg-card-item.hit-glow-gold .tcg-card-front {
  border: 2px solid var(--mark);
}

.tcg-card-item.hit-glow-rainbow .tcg-card-front {
  border: 2px solid var(--mark);
  box-shadow: 0 4px 0 var(--line);
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

```

---

## 3. JavaScript 核心模块 (JavaScript Modules)

### 3.1 `js/api.js` (PokeAPI 异步请求与缓存)

- **文件路径**: `js/api.js`  
- **代码行数**: 441 行  
- **文件大小**: 14,873 字节  

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
  const CACHE_PREFIX = "file151.v2.";

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
     * 获取种族元数据：英文种属、100字以内 flavor、进化链 URL
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
          evoUrl: j.evolution_chain?.url || null
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
     * 获取招式详情与战斗属性
     */
    async getMove(nameOrId) {
      if (!nameOrId) return null;
      const key = String(nameOrId).trim().toLowerCase();
      const cacheKey = `${CACHE_PREFIX}move.${key}`;
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
    },

    /**
     * 获取特性完整信息及对应宝可梦列表
     */
    async getAbility(nameOrId) {
      if (!nameOrId) return null;
      const key = String(nameOrId).trim().toLowerCase();
      const cacheKey = `${CACHE_PREFIX}ability_full.${key}`;
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
- **代码行数**: 1,216 行  
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
- **代码行数**: 170 行  
- **文件大小**: 6,402 字节  

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
  const pinsLayer = document.getElementById("pins-layer");
  const popover = document.getElementById("recon-popover");
  const popoverClose = document.getElementById("recon-close-btn");
  const popoverType = document.getElementById("recon-type");
  const popoverName = document.getElementById("recon-name");
  const popoverDesc = document.getElementById("recon-desc");
  const popoverPokes = document.getElementById("recon-pokemons");

  if (!window.REGIONS) return;

  function getSpeciesName(id) {
    const item = (window.ALL_SPECIES_DATA || []).find(s => s[0] === id);
    return item ? item[1] : `#${id}`;
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
    if (pinsLayer) {
      pinsLayer.innerHTML = landmarks.map((lm, idx) => `
        <button class="map-pin" type="button" data-idx="${idx}" style="left: ${lm.x}%; top: ${lm.y}%;" aria-label="${lm.name}">
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
          showPopover(lm);
        });
      });
    }
  }

  function showPopover(lm) {
    if (!popover) return;
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

    const pinLeft = lm.x;
    const pinTop = lm.y;

    if (pinLeft > 55) {
      popover.style.right = `${100 - pinLeft + 3}%`;
      popover.style.left = "auto";
    } else {
      popover.style.left = `${pinLeft + 3}%`;
      popover.style.right = "auto";
    }

    if (pinTop > 60) {
      popover.style.bottom = `${100 - pinTop}%`;
      popover.style.top = "auto";
    } else {
      popover.style.top = `${Math.max(5, pinTop - 5)}%`;
      popover.style.bottom = "auto";
    }

    popover.hidden = false;
  }

  function closePopover() {
    if (popover) popover.hidden = true;
  }

  popoverClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopover();
  });

  document.getElementById("map-stage")?.addEventListener("click", (e) => {
    if (!e.target.closest(".recon-popover") && !e.target.closest(".map-pin")) {
      closePopover();
    }
  });

  selector?.addEventListener("change", (e) => {
    const slug = e.target.value;
    const found = window.REGIONS.find(r => r.slug === slug);
    if (found) renderInteractiveMap(found);
  });

  if (atlasEl) {
    atlasEl.innerHTML = window.REGIONS.map(r => `
      <div class="region-card" data-slug="${r.slug}" style="cursor:pointer;">
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
      </div>
    `).join("");

    atlasEl.querySelectorAll(".region-card").forEach(card => {
      card.addEventListener("click", () => {
        const slug = card.dataset.slug;
        const r = window.REGIONS.find(x => x.slug === slug);
        if (r) {
          renderInteractiveMap(r);
          document.getElementById("interactive-map-section")?.scrollIntoView({ behavior: "smooth" });
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
- **代码行数**: 117 行  
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
- **代码行数**: 137 行  
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
- **代码行数**: 551 行  
- **文件大小**: 22,616 字节  

```javascript
/**
 * 151 FILE — Dex Page Logic (Spine + Ledger + Stage + Film & Visual Cards Grid)
 * 遵循 pokemon-web-project-plan.md §4.2 与 §7
 * 支持全部 1025 只宝可梦全局浏览与 10 官方地区切卷
 * 支持双展示模式：1. Ledger 档案台座模式  2. Grid 全景卡片网格模式
 */

// 地区预置数据引用
const KANTO_PRESET = (typeof window !== "undefined" && window.getRegionPokemon ? window.getRegionPokemon("kanto") : []) || [];

// 属性色票与字色统一来自 types-chart.js（这里不再维护第二份，之前漏了 dark）
const tc = window.TYPES_CHART;
const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

// URL 查询参数
const params = new URLSearchParams(location.search);
const initialRegionSlug = params.get("region") || "all";
const currentRegion = window.getRegionBySlug ? window.getRegionBySlug(initialRegionSlug) : { slug: "all", name: "National", start: 1, end: 1025, offset: 0, limit: 1025 };

// 当前地区的 50 序号一段书脊分段
let SPINES = window.getRegionSpines ? window.getRegionSpines(currentRegion.start, currentRegion.end) : [[1, 50], [51, 100], [101, 151]];

// 记忆展示模式 (优先读 URL ?view=，其次 localStorage，默认 ledger)
const savedView = typeof localStorage !== "undefined" ? localStorage.getItem("file151.dex_view") : null;
const initialView = params.get("view") || savedView || "ledger";

// 响应式应用状态
const state = {
  displayMode: (initialView === "grid") ? "grid" : "ledger",
  region: currentRegion,
  type: params.get("type"),
  resist: params.get("resist"),
  q: params.get("q") || "",
  rawList: [],    // 当前地区拉取到的全部名单
  list: [],       // 经筛选后的当前展示名单
  i: 0,
  range: SPINES[0] || [1, 50],
  listRev: 0      // 每次 state.list 重新计算就 +1，用来决定要不要重画胶片和网格
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

// 加入腰带 (最多 6 只)
function addBelt(id) {
  if (!window.store.addBelt(id)) return;
  render();
}

const pad3 = (n) => String(n).padStart(3, "0");
const artOf = (id) => window.pokeApi.artUrl(id);
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
    cell?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }
}

function renderGrid(gridViewEl) {
  if (gridRev !== state.listRev) {
    if (!state.list.length) {
      gridViewEl.innerHTML = `<p class="empty" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">No Pokémon found in this filter.</p>`;
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

  // 1. 同步顶部工具栏状态 (地区下拉框、模式按键、数量标记、抗性芯片)
  const regSelect = document.getElementById("region-select");
  if (regSelect && regSelect.value !== state.region.slug) {
    regSelect.value = state.region.slug;
  }

  const countBadge = document.getElementById("count-badge");
  if (countBadge) {
    countBadge.textContent = `${state.list.length} files`;
  }

  const btnLedger = document.getElementById("btn-view-ledger");
  const btnGrid = document.getElementById("btn-view-grid");
  if (btnLedger && btnGrid) {
    btnLedger.classList.toggle("is-active", state.displayMode === "ledger");
    btnGrid.classList.toggle("is-active", state.displayMode === "grid");
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
    document.getElementById("spines").innerHTML = SPINES.map(([x, y]) => {
      const n = state.list.filter(m => m.id >= x && m.id <= y).length;
      return `<button type="button" data-a="${x}" data-b="${y}" ${x === a ? 'data-on' : ''} ${n ? '' : 'disabled'}>${pad3(x)}–${y}</button>`;
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
      : `<li class="empty" role="option" aria-disabled="true">No file in this spine.</li>`;
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
      stageEl.innerHTML = `<p class="empty">No file in this filter.</p>`;
    } else {
      const full = onBelt.length >= window.store.MAX_BELT;
      const has = onBelt.includes(p.id);

      stageEl.innerHTML = `
        <div class="stage-img-box" id="stageImgBox" title="Tap Pokémon to hear official Cry">
          <img src="${artOf(p.id)}" alt="${p.name} 3D Model" width="240" height="240" />
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
      document.getElementById("stageImgBox")?.addEventListener("click", () => {
        window.pokeApi.playCry(p.id); // 用户主动点击，不受声音开关限制
      });
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

  // 同步搜索框与属性芯片高亮
  const qEl = document.getElementById("q");
  if (qEl && qEl.value !== state.q) qEl.value = state.q;
  document.querySelectorAll(".chip[data-type]").forEach(c => {
    c.toggleAttribute("data-on", (c.dataset.type || "") === (state.type || ""));
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
  // 1. 切换展示模式 (Ledger / Grid)
  document.getElementById("btn-view-ledger")?.addEventListener("click", () => {
    if (state.displayMode === "ledger") return;
    state.displayMode = "ledger";
    localStorage.setItem("file151.dex_view", "ledger");
    render();
  });

  document.getElementById("btn-view-grid")?.addEventListener("click", () => {
    if (state.displayMode === "grid") return;
    state.displayMode = "grid";
    localStorage.setItem("file151.dex_view", "grid");
    render();
  });

  // 2. 地区选择下拉框切换
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

  // 6. 卡片网格点击委托 (卡片直达详情/播放叫声，按键加入腰带)
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
      if (state.list.length === 1) {
        location.href = `pokemon.html?id=${state.list[0].id}`;
      } else if (/^\d+$/.test(state.q)) {
        const num = Number(state.q);
        if (num >= 1 && num <= 1025) location.href = `pokemon.html?id=${num}`;
      }
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

  // 8c. 键盘：名录行和网格卡片用 Enter / 空格触发，和点击一致
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
    const picked = state.list[randIdx];
    if (picked && window.pokeApi) window.pokeApi.playCryAuto(picked.id);
  });

  // 10. 全局快捷键导航
  document.addEventListener("keydown", e => {
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
- **代码行数**: 300 行  
- **文件大小**: 13,019 字节  

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

  let isShiny = false;

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

  // 闪光切换：只换图片和文字
  function setShiny(mon, on) {
    isShiny = on;
    const art = document.getElementById("art");
    const cap = document.getElementById("art-caption");
    const btn = document.getElementById("shiny");
    if (art) art.src = on ? shinyArt(mon.id) : defaultArt(mon.id);
    if (cap) cap.textContent = on ? "★ Shiny Form (HOME 3D)" : "Default Form (HOME 3D)";
    if (btn) btn.textContent = on ? "Show default" : "Show shiny";
  }

  async function render(mon) {
    const region = getRegion(mon.id);
    const spec = await window.pokeApi.getSpecies(mon.id).catch(() => null);
    const abilityTexts = await Promise.all((mon.abilities || []).map(a => window.pokeApi.getAbilityText(a.name)));
    const evoIds = spec?.evoUrl ? await window.pokeApi.getEvoIds(spec.evoUrl).catch(() => []) : [];

    const statFields = [
      { key: "hp", label: "HP" },
      { key: "attack", label: "Attack" },
      { key: "defense", label: "Defense" },
      { key: "special-attack", label: "Sp. Atk" },
      { key: "special-defense", label: "Sp. Def" },
      { key: "speed", label: "Speed" }
    ];

    root.innerHTML = `
      <div class="detail">
        <div style="display:flex; flex-direction:column; align-items:center;">
          <button class="detail-art-stage" id="well" type="button" aria-label="Play Cry" title="Tap to play official cry">
            <img id="art" src="${defaultArt(mon.id)}" alt="${esc(mon.name)} 3D Model" />
          </button>
          <p id="art-caption" style="color:var(--ink-soft); font-size:0.75rem; font-family:var(--font-num); margin-top:0.75rem;">Default Form (HOME 3D)</p>
        </div>

        <div class="fields">
          ${mon.isOffline ? `
            <div style="margin-bottom:0.75rem; padding:0.5rem 0.75rem; background:rgba(238,21,21,0.08); border:1px solid rgba(238,21,21,0.25); border-radius:4px; font-size:0.75rem; color:var(--paper); display:flex; justify-content:space-between; align-items:center;">
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
              </div>
              <div style="display:flex; flex-direction:column; align-items:flex-end; gap:0.35rem;">
                <div>
                  ${mon.types.map(t =>
                    `<a class="chip" style="${typeStyle(t)} margin-left:0.4rem;" href="pokedex.html?type=${t}" title="Filter Dex by ${t}">${t}</a>`
                  ).join("")}
                </div>
                <span style="font-family:var(--font-num); font-weight:700; font-size:0.875rem; color:var(--ink-soft);">
                  ${Number(mon.height).toFixed(1)} m · ${Number(mon.weight).toFixed(1)} kg
                </span>
              </div>
            </div>
            ${spec?.flavor ? `<p class="flavor" style="margin:0; padding:0.4rem 0 0; border:0;">${esc(spec.flavor)}</p>` : ""}
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

              ${evoIds.length > 1 ? `
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
              ` : ""}
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

          <div class="fields-bottom">
            <p style="color:var(--ink-soft); font-family:var(--font-num); font-size:0.8125rem; margin:0 0 0.4rem 0; padding:0; border:0;">
              ${region.name} #${region.start}–${region.end}
            </p>

            <div class="detail-actions">
              <span id="belt-ctl">${beltControl(mon)}</span>
              <button class="btn btn-paper" id="favorite" type="button" aria-pressed="${store.isFavorite(mon.id)}">${store.isFavorite(mon.id) ? "★ Favorited" : "☆ Favorite"}</button>
              <button class="btn btn-paper" id="cry" type="button">Play cry</button>
              <button class="btn btn-paper" id="shiny" type="button">Show shiny</button>
              <a class="btn btn-paper" href="battle-lab.html?left=${mon.id}">Battle Lab</a>
              <a class="btn btn-paper" href="lineup.html?a=${mon.id}">Compare in lineup</a>
              <button class="btn btn-paper" id="copy" type="button">Copy link</button>
              <a class="btn btn-paper" href="pokedex.html?region=${region.slug}">Close file</a>
            </div>
          </div>
        </div>
      </div>
    `;

    const well = document.getElementById("well");
    well?.addEventListener("click", () => {
      window.pokeApi.playCry(mon.id);
    });

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
        const copyBtn = document.getElementById("copy");
        if (copyBtn) {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
        }
      } catch (_) {}
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
    root.innerHTML = `<h1 class="sr-only">Pokémon file</h1><p class="empty" role="alert" style="text-align:center; padding:4rem;">${html}</p>`;
  }

  // 页面主入口
  if (!key) {
    showMessage(`No Pokémon file specified. <a class="link-action" href="pokedex.html">Open the dex</a>.`);
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
      ? `PokeAPI did not answer. <a class="link-action" href="${esc(location.href)}">Open this page again</a>.`
      : `No file matches that name or number. <a class="link-action" href="pokedex.html">Open the dex</a>.`);
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
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight" && mon.id < 1025) {
      location.href = `pokemon.html?id=${mon.id + 1}`;
    }
    if (e.key === "ArrowLeft" && mon.id > 1) {
      location.href = `pokemon.html?id=${mon.id - 1}`;
    }
    if (e.key === "Escape") {
      location.href = `pokedex.html?region=${getRegion(mon.id).slug}`;
    }
  });
});

```

---

### 3.8 `js/types.js` (属性色票与矩阵交互)

- **文件路径**: `js/types.js`  
- **代码行数**: 109 行  
- **文件大小**: 4,925 字节  

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
    let html = `<thead><tr><th><span class="sr-only">Attacking type (rows) against defending type (columns)</span></th>${tc.TYPES.map((t, j) => `<th data-c="${j}" title="Defending: ${t}">${t.slice(0, 3)}</th>`).join("")}</tr></thead><tbody>`;

    tc.TYPES.forEach((atk, i) => {
      html += `<tr data-r="${i}"><th data-r="${i}" title="Attacking: ${atk}">${atk.slice(0, 3)}</th>`;
      tc.TYPES.forEach((def, j) => {
        const m = tc.getEffectiveness(atk, def);
        const cls = tc.getMultiplierClass(m);
        const lbl = tc.getMultiplierLabel(m);
        html += `<td class="${cls}" data-r="${i}" data-c="${j}"><a href="pokedex.html?type=${def}" title="${atk} -> ${def}: ${m}×">${lbl}</a></td>`;
      });
      html += `</tr>`;
    });

    html += `</tbody>`;
    chartEl.innerHTML = html;

    // 3. 十字聚焦高亮交互 (行与列)
    chartEl.addEventListener("mouseover", e => {
      const cell = e.target.closest("[data-r],[data-c]");
      if (!cell) return;
      chartEl.querySelectorAll(".hi").forEach(n => n.classList.remove("hi"));
      const r = cell.dataset.r;
      const c = cell.dataset.c;
      if (r !== undefined) {
        chartEl.querySelector(`tr[data-r="${r}"]`)?.classList.add("hi");
        chartEl.querySelectorAll(`th[data-r="${r}"]`).forEach(n => n.classList.add("hi"));
      }
      if (c !== undefined) {
        chartEl.querySelectorAll(`[data-c="${c}"]`).forEach(n => n.classList.add("hi"));
      }
    });

    chartEl.addEventListener("mouseleave", () => {
      chartEl.querySelectorAll(".hi").forEach(n => n.classList.remove("hi"));
    });

    // 4. 点击行/列头触发 Belt vs Type 推演
    chartEl.addEventListener("click", e => {
      const th = e.target.closest("th[data-r], th[data-c]");
      if (th) {
        const r = th.dataset.r;
        const c = th.dataset.c;
        const t = r !== undefined ? tc.TYPES[Number(r)] : tc.TYPES[Number(c)];
        if (t) beltVsType(t);
      }
    });
  }

  // 5. 点击属性色票触发 Belt vs Type 推演
  if (wallEl) {
    wallEl.addEventListener("click", e => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      e.preventDefault();
      const t = chip.textContent.trim().toLowerCase();
      beltVsType(t);
    });
  }

  // 计算本站腰带对目标属性的克制与弱点 (Belt vs Type)
  async function beltVsType(atk) {
    const box = document.getElementById("belt-vs-box");
    if (!box) return;
    const ids = window.store ? window.store.belt() : [];
    if (!ids.length) {
      box.innerHTML = `<div class="belt-vs-card"><p class="soft">Belt empty. <a class="link-action" href="pokedex.html">Open the dex</a> to add Pokémon to your belt.</p></div>`;
      return;
    }
    box.innerHTML = `<div class="belt-vs-card"><p class="soft">Checking belt vs ${atk}…</p></div>`;
    const mons = await Promise.all(ids.map(id => window.pokeApi ? window.pokeApi.getPokemon(id).catch(() => null) : null));
    const validMons = mons.filter(Boolean);
    const beats = validMons.filter(m => m.types.some(t => tc.getEffectiveness(t, atk) === 2));
    const fears = validMons.filter(m => tc.getDefensiveMultiplier(atk, m.types) >= 2);
    box.innerHTML = `
      <div class="belt-vs-card">
        <h3 style="margin:0 0 0.5rem; font-size:1rem; font-family:var(--font-ui); color:var(--ink);">
          Belt vs <span style="text-transform:capitalize;">${atk}</span>
          <a class="chip" style="${tc.getTypeStyle ? tc.getTypeStyle(atk) : ''} font-size:0.75rem; margin-left:0.5rem; text-decoration:none;" href="pokedex.html?type=${atk}">Dex: ${atk}</a>
        </h3>
        <p style="margin:0.25rem 0; font-size:0.875rem;">Hits ${atk} for 2×: ${beats.map(m => `<a href="pokemon.html?id=${m.id}" style="color:var(--ink); font-weight:700;">${m.name}</a>`).join(", ") || "None"}</p>
        <p style="margin:0.25rem 0; font-size:0.875rem; color:var(--ink-soft);">Takes 2× or more from ${atk}: ${fears.map(m => `<a href="pokemon.html?id=${m.id}" style="color:var(--ink); font-weight:700;">${m.name}</a>`).join(", ") || "None"}</p>
      </div>
    `;
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

```

---

### 3.9 `js/team.js` (腰带存储与拖拽排序)

- **文件路径**: `js/team.js`  
- **代码行数**: 297 行  
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
- **代码行数**: 336 行  
- **文件大小**: 12,737 字节  

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
      return `
        <input data-side="${side}" placeholder="Search name or #..." aria-label="${side} Pokemon search" />
        <p class="lineup-empty" ${requested ? 'role="alert"' : ""} style="text-align:center; padding: 2rem 0;">${msg}</p>
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
      <input data-side="${side}" value="${mon.name} (#${mon.id})" aria-label="${side} Pokemon: ${mon.name}" />
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
        emptyBox.textContent = "Some belt Pokémon could not load. Coverage below only counts the ones that did.";
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
      if (e.key !== "Enter") return;
      const targetInput = e.target;
      const side = targetInput.dataset.side;
      if (!side) return;

      const val = targetInput.value.replace(/^#/, "").replace(/\(.*?\)/, "").trim();
      if (!val) return;

      const found = await fetchPokemon(val);
      if (found) {
        if (side === "left") leftId = found.id;
        else rightId = found.id;
        render();
      } else {
        targetInput.style.borderColor = "var(--ball)";
        setTimeout(() => { targetInput.style.borderColor = ""; }, 1200);
      }
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
        const copyBtn = document.getElementById("copy");
        if (copyBtn) {
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
        }
      } catch (_) {}
    });

    // 6. 点击对比攻击属性
    document.getElementById("lineup-verdict")?.addEventListener("click", e => {
      const btn = e.target.closest("[data-focus]");
      if (!btn) return;
      const t = btn.dataset.focus;
      focusType = (focusType === t) ? null : t;
      renderVerdict();
    });

    // 初始化渲染
    render();
  });
})();

```

---

### 3.11 `js/moves.js` (招式库检索与分页渲染)

- **文件路径**: `js/moves.js`  
- **代码行数**: 154 行  
- **文件大小**: 5,933 字节  

```javascript
document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("move-grid");
  const search = document.getElementById("move-search");
  const typeSelect = document.getElementById("move-type");
  const categorySelect = document.getElementById("move-category");
  const statusEl = document.getElementById("move-status");
  const paginationEl = document.getElementById("move-pagination");
  const tc = window.TYPES_CHART;

  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

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
  const PAGE_SIZE = 36;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
    if (!listResp.ok) throw new Error("Failed to load moves list");
    const data = await listResp.json();
    allMoveEntries = data.results || [];
    statusEl.textContent = `Indexed ${allMoveEntries.length} moves.`;

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    statusEl.textContent = "Unable to load moves list. Please check your network.";
    return;
  }

  async function render() {
    statusEl.textContent = "Filtering and loading move details...";
    const q = search.value.trim().toLowerCase();
    const selectedType = typeSelect.value;
    const selectedCat = categorySelect.value;

    let matched = allMoveEntries.filter(m => {
      if (q && !m.name.includes(q)) return false;
      return true;
    });

    const totalMatched = matched.length;
    const totalPages = Math.ceil(totalMatched / PAGE_SIZE) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const pageSlice = matched.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    // Fetch details for the current slice
    const moveDetails = await Promise.all(
      pageSlice.map(item => window.pokeApi.getMove(item.name))
    );

    // Filter by type / category if selected
    let displayed = moveDetails.filter(m => {
      if (!m) return false;
      if (selectedType && m.type !== selectedType) return false;
      if (selectedCat && m.category !== selectedCat) return false;
      return true;
    });

    statusEl.textContent = `Showing ${displayed.length} of ${totalMatched} moves (Page ${currentPage}/${totalPages}).`;

    grid.innerHTML = displayed.map(m => `
      <article class="dex-card" style="display:flex; flex-direction:column; justify-content:space-between; min-height:12rem;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span class="id-badge">#${String(m.id).padStart(3, "0")}</span>
            <span class="chip" style="${typeStyle(m.type)} font-size:0.75rem;">${m.type}</span>
          </div>

          <h3 style="font-family:var(--font-ui); font-size:1.1rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.35rem;">
            ${m.name.replace(/-/g, " ")}
          </h3>

          <div style="display:flex; gap:0.4rem; margin-bottom:0.5rem; font-size:0.75rem;">
            <span style="background:var(--sky-deep); color:var(--ink-soft); padding:0.1rem 0.35rem; border-radius:2px; text-transform:capitalize; border:1px solid var(--line);">
              ${m.category || "status"}
            </span>
          </div>

          <p class="soft" style="font-size:0.8125rem; line-height:1.4; color:var(--ink-soft); margin-bottom:0.5rem;">
            ${m.description ? m.description.replace(/\n/g, " ") : "No description available."}
          </p>
        </div>

        <div style="font-family:var(--font-num); font-size:0.8125rem; color:var(--ink); padding-top:0.4rem; border-top:1px solid var(--line); display:flex; justify-content:space-between;">
          <span>PWR: <strong>${m.power ?? "—"}</strong></span>
          <span>ACC: <strong>${m.accuracy ? m.accuracy + "%" : "—"}</strong></span>
          <span>PP: <strong>${m.pp ?? "—"}</strong></span>
        </div>
      </article>
    `).join("");

    // Render pagination buttons
    if (totalPages > 1) {
      paginationEl.innerHTML = `
        <div style="display:inline-flex; gap:0.5rem; align-items:center;">
          <button class="btn btn-paper" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;">Page ${currentPage} of ${totalPages}</span>
          <button class="btn btn-paper" id="next-page" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
        </div>
      `;
      document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
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
- **代码行数**: 133 行  
- **文件大小**: 5,316 字节  

```javascript
document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("ability-grid");
  const search = document.getElementById("ability-search");
  const statusEl = document.getElementById("ability-status");
  const paginationEl = document.getElementById("ability-pagination");

  let allAbilities = [];
  let currentPage = 1;
  const PAGE_SIZE = 24;

  try {
    const listResp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
    if (!listResp.ok) throw new Error("Failed to load abilities");
    const data = await listResp.json();
    allAbilities = data.results || [];
    statusEl.textContent = `Indexed ${allAbilities.length} abilities.`;

    const urlQ = new URLSearchParams(location.search).get("q");
    if (urlQ && search) search.value = urlQ;
  } catch (err) {
    statusEl.textContent = "Unable to load abilities list. Please check your network.";
    return;
  }

  function getPokemonIdFromUrl(url) {
    const m = url.match(/\/pokemon\/(\d+)\//);
    return m ? m[1] : null;
  }

  async function render() {
    statusEl.textContent = "Filtering and loading ability details...";
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

    statusEl.textContent = `Showing ${details.filter(Boolean).length} of ${totalMatched} abilities (Page ${currentPage}/${totalPages}).`;

    grid.innerHTML = details.filter(Boolean).map(a => {
      const pokeList = a.pokemon || [];
      const previewList = pokeList.slice(0, 12);
      const remaining = pokeList.length - previewList.length;

      return `
        <article class="dex-card" style="display:flex; flex-direction:column; justify-content:space-between; min-height:14rem;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <span class="id-badge">#${String(a.id).padStart(3, "0")}</span>
              <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.75rem;">${pokeList.length} Pokémon</span>
            </div>

            <h3 style="font-family:var(--font-ui); font-size:1.15rem; font-weight:700; color:var(--ink); text-transform:capitalize; margin:0 0 0.4rem;">
              ${a.name.replace(/-/g, " ")}
            </h3>

            <p class="soft" style="font-size:0.8125rem; line-height:1.45; color:var(--ink-soft); margin-bottom:0.75rem;">
              ${a.description ? a.description.replace(/\n/g, " ") : "No description available."}
            </p>
          </div>

          <div>
            <p style="font-family:var(--font-ui); font-size:0.75rem; font-weight:700; color:var(--ink); margin:0 0 0.35rem; text-transform:uppercase; letter-spacing:0.04em;">
              Specimens
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:0.3rem;">
              ${previewList.map(p => {
                const pId = getPokemonIdFromUrl(p.url);
                return `
                  <a href="pokemon.html?${pId ? 'id=' + pId : 'name=' + p.name}"
                     class="chip"
                     style="font-size:0.75rem; text-decoration:none; text-transform:capitalize; padding:0.15rem 0.4rem;"
                     title="${p.name}">
                    ${p.name.replace(/-/g, " ")}
                  </a>
                `;
              }).join("")}
              ${remaining > 0 ? `<span style="font-size:0.75rem; color:var(--ink-soft); align-self:center;">+${remaining} more</span>` : ""}
            </div>
          </div>
        </article>
      `;
    }).join("");

    if (totalPages > 1) {
      paginationEl.innerHTML = `
        <div style="display:inline-flex; gap:0.5rem; align-items:center;">
          <button class="btn btn-paper" id="prev-page" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
          <span style="font-family:var(--font-num); color:var(--ink-soft); font-size:0.875rem;">Page ${currentPage} of ${totalPages}</span>
          <button class="btn btn-paper" id="next-page" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
        </div>
      `;
      document.getElementById("prev-page")?.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      document.getElementById("next-page")?.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
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
- **代码行数**: 172 行  
- **文件大小**: 5,669 字节  

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const seen = window.store?.seen?.() || [];
  const favorites = window.store?.favoriteIds?.() || [];
  const belt = window.store?.belt?.() || [];

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

  regionRoot.innerHTML = window.REGIONS.map(region => {
    const count = seen.filter(id => id >= region.start && id <= region.end).length;
    const percentage = region.count ? Math.min(100, (count / region.count) * 100).toFixed(1) : 0;

    return `
      <article class="collection-region">
        <div class="region-head">
          <a href="pokedex.html?region=${region.slug}" style="color:var(--ink); font-weight:700; text-decoration:none;">${region.name}</a>
          <span style="color:var(--mark); font-variant-numeric: tabular-nums;">
            ${count} / ${region.count} (${percentage}%)
          </span>
        </div>
        <div class="progress">
          <div style="width:${percentage}%"></div>
        </div>
      </article>
    `;
  }).join("");

  // Achievements Badge System
  const BADGES = [
    {
      id: "first_seen",
      name: "First Contact",
      icon: "👁",
      desc: "Register your first specimen in the seen archive.",
      test: (c) => c.seen >= 1
    },
    {
      id: "ten_seen",
      name: "Curious Researcher",
      icon: "🔬",
      desc: "Observe and register 10 unique Pokémon specimens.",
      test: (c) => c.seen >= 10
    },
    {
      id: "fifty_seen",
      name: "Field Biologist",
      icon: "📋",
      desc: "Expand your catalog to 50 observed specimens.",
      test: (c) => c.seen >= 50
    },
    {
      id: "hundred_seen",
      name: "Centurion",
      icon: "💯",
      desc: "Catalog 100 Pokémon across any regional territories.",
      test: (c) => c.seen >= 100
    },
    {
      id: "kanto_complete",
      name: "Kanto Master",
      icon: "🏆",
      desc: "Catalog all original 151 Kanto specimens (#001–#151).",
      test: (c) => c.kantoSeen >= 151
    },
    {
      id: "all_seen",
      name: "National Archivist",
      icon: "🌟",
      desc: "Complete the master national archive of 1,025 specimens.",
      test: (c) => c.seen >= 1025
    },
    {
      id: "first_fav",
      name: "First Favorite",
      icon: "⭐",
      desc: "Star your very first favorite specimen.",
      test: (c) => c.favorites >= 1
    },
    {
      id: "ten_favs",
      name: "Curator",
      icon: "🎖",
      desc: "Curate a showcase of 10 or more favorited specimens.",
      test: (c) => c.favorites >= 10
    },
    {
      id: "belt_full",
      name: "Full Belt",
      icon: "🎒",
      desc: "Equip a full team of 6 battle-ready specimens on your belt.",
      test: (c) => c.belt >= 6
    },
    {
      id: "all_types_seen",
      name: "Type Collector",
      icon: "🌈",
      desc: "Encounter and register at least 18 diverse specimens.",
      test: (c) => c.seen >= 18
    },
    {
      id: "quiz_streak_5",
      name: "Quiz Ace",
      icon: "🧠",
      desc: "Achieve a silhouette quiz streak of 5 correct guesses.",
      test: (c) => c.quizBest >= 5
    },
    {
      id: "quiz_streak_10",
      name: "Quiz Master",
      icon: "👑",
      desc: "Achieve a silhouette quiz streak of 10 correct guesses.",
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
      quizBest: quizBest
    };

    let unlockedCount = 0;
    badgeGrid.innerHTML = BADGES.map(b => {
      const unlocked = b.test(ctx);
      if (unlocked) unlockedCount++;
      return `
        <article class="badge-card ${unlocked ? 'earned' : 'locked'}">
          <div style="font-size:2rem; line-height:1; margin-bottom:0.5rem;">${unlocked ? b.icon : '🔒'}</div>
          <h4 style="font-family:var(--font-ui); font-size:1rem; font-weight:700; color:${unlocked ? 'var(--ink)' : 'var(--ink-soft)'}; margin:0 0 0.25rem;">
            ${unlocked ? b.name : 'Locked Badge'}
          </h4>
          <p style="font-size:0.8125rem; color:var(--ink-soft); margin:0; line-height:1.4;">
            ${b.desc}
          </p>
          <div style="margin-top:0.6rem; font-family:var(--font-num); font-size:0.6875rem; text-transform:uppercase; letter-spacing:0.04em; color:${unlocked ? 'var(--mark)' : 'var(--line)'}; font-weight:700;">
            ${unlocked ? '✓ UNLOCKED' : 'LOCKED'}
          </div>
        </article>
      `;
    }).join("");

    if (summaryBadgeEl) {
      summaryBadgeEl.textContent = `${unlockedCount} / ${BADGES.length} UNLOCKED`;
    }
  }
});

```

---

### 3.14 `js/battle-lab.js` (对战实验室与克制比对)

- **文件路径**: `js/battle-lab.js`  
- **代码行数**: 218 行  
- **文件大小**: 10,177 字节  

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const tc = window.TYPES_CHART;
  const typeStyle = (t) => (tc ? tc.getTypeStyle(t) : "background:#3A6A88; color:#ffffff;");

  const state = {
    left: null,
    right: null
  };

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
    if (!value) return;
    const cardEl = document.getElementById(`battle-${side}-card`);
    if (cardEl) {
      cardEl.innerHTML = `<p class="soft" style="font-size:0.875rem; color:var(--ink-soft); padding:1rem 0;">Loading specimen #${value}...</p>`;
    }

    try {
      const mon = await window.pokeApi.getPokemon(value);
      if (!mon) {
        if (cardEl) cardEl.innerHTML = `<p class="soft" style="color:var(--mark); padding:1rem 0;">Specimen not found: "${value}".</p>`;
        return;
      }
      state[side] = mon;
      render();
    } catch (_) {
      if (cardEl) cardEl.innerHTML = `<p class="soft" style="color:var(--mark); padding:1rem 0;">Error loading specimen.</p>`;
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

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(18rem, 1fr)); gap:1.25rem;">
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
- **代码行数**: 103 行  
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
- **代码行数**: 766 行  
- **文件大小**: 27,460 字节  

```javascript
// ==========================================================================
// TCG BOOSTER PACK LAB (Physical 10-card pack simulator & collection binder)
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
      cardSetCache.set(setId, cards);
      return cards;
    } catch (err) {
      console.warn("Failed to load set data:", err);
      // Minimal fallback so app never breaks
      const dummyCards = Array.from({ length: 50 }, (_, i) => ({
        id: `${setId}-${i + 1}`,
        number: String(i + 1),
        name: `Specimen #${i + 1}`,
        rarity: i < 30 ? "Common" : i < 45 ? "Uncommon" : "Rare",
        images: {
          small: `https://images.pokemontcg.io/${setId}/${i + 1}.png`,
          large: `https://images.pokemontcg.io/${setId}/${i + 1}_hires.png`
        }
      }));
      cardSetCache.set(setId, dummyCards);
      return dummyCards;
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
      } else {
        btn.removeAttribute("data-on");
      }
    });

    const statTotal = document.getElementById("pack-set-meta-total");
    const statName = document.getElementById("pack-set-meta-name");
    if (statTotal) statTotal.textContent = preset.total;
    if (statName) statName.textContent = preset.name.toUpperCase();

    renderBinderGrid();
    // Prefetch set data silently in background
    loadSetData(setId, true).catch(() => {});
  }

  // Physical 10-card slot distribution algorithm
  function generatePack(cards) {
    if (!cards || cards.length === 0) return [];

    // Bucket cards by rarity category
    const buckets = {
      common: [],
      uncommon: [],
      rare: [],
      holoDouble: [],
      illustration: [],
      ultra: [],
      sar: [],
      hyper: []
    };

    cards.forEach(card => {
      const r = (card.rarity || "").toLowerCase();
      if (r.includes("special illustration") || r.includes("sar")) {
        buckets.sar.push(card);
      } else if (r.includes("hyper") || r.includes("futuristic") || r.includes("gold")) {
        buckets.hyper.push(card);
      } else if (r.includes("ultra") || r.includes("secret") || r.includes("ex") || r.includes("vmax") || r.includes("vstar")) {
        buckets.ultra.push(card);
      } else if (r.includes("illustration rare")) {
        buckets.illustration.push(card);
      } else if (r.includes("double rare") || r.includes("pikachu rare") || r.includes("holo")) {
        buckets.holoDouble.push(card);
      } else if (r.includes("rare")) {
        buckets.rare.push(card);
      } else if (r.includes("uncommon")) {
        buckets.uncommon.push(card);
      } else {
        buckets.common.push(card);
      }
    });

    // Track card appearances to prevent excessive duplicates (max 2 copies per card)
    const cardCountMap = new Map();

    function pickCapped(pool, fallbackPool = cards, maxCap = 2) {
      const primary = (pool && pool.length > 0) ? pool : fallbackPool;
      const eligible = primary.filter(c => (cardCountMap.get(c.id) || 0) < maxCap);

      let chosen = null;
      if (eligible.length > 0) {
        chosen = eligible[Math.floor(Math.random() * eligible.length)];
      } else {
        const fallbackEligible = fallbackPool.filter(c => (cardCountMap.get(c.id) || 0) < maxCap);
        if (fallbackEligible.length > 0) {
          chosen = fallbackEligible[Math.floor(Math.random() * fallbackEligible.length)];
        } else {
          chosen = primary[Math.floor(Math.random() * primary.length)];
        }
      }

      if (chosen && chosen.id) {
        cardCountMap.set(chosen.id, (cardCountMap.get(chosen.id) || 0) + 1);
      }
      return chosen;
    }

    const pack = [];

    // Slot 1-5: 5 Common Cards
    for (let i = 0; i < 5; i++) {
      pack.push({ card: pickCapped(buckets.common, cards), foilType: "normal", slot: i + 1 });
    }

    // Slot 6-8: 3 Uncommon Cards
    for (let i = 0; i < 3; i++) {
      pack.push({ card: pickCapped(buckets.uncommon, buckets.common), foilType: "normal", slot: i + 6 });
    }

    // Slot 9: Reverse Holo / Foil Slot (70% UC foil, 25% Rare foil, 5% Illustration Rare)
    const roll9 = Math.random() * 100;
    if (roll9 < 70) {
      pack.push({ card: pickCapped(buckets.uncommon, cards), foilType: "reverse-foil", slot: 9 });
    } else if (roll9 < 95) {
      pack.push({ card: pickCapped(buckets.rare, buckets.uncommon), foilType: "reverse-foil", slot: 9 });
    } else {
      pack.push({ card: pickCapped(buckets.illustration, buckets.rare), foilType: "illustration", slot: 9 });
    }

    // Slot 10: HIT SLOT (Guaranteed Rare / Ultra / SAR)
    const roll10 = Math.random() * 100;
    let hitCard = null;
    let hitFoil = "rare";

    if (roll10 < 50 && buckets.rare.length > 0) {
      hitCard = pickCapped(buckets.rare);
      hitFoil = "rare";
    } else if (roll10 < 70 && (buckets.holoDouble.length > 0 || buckets.rare.length > 0)) {
      hitCard = pickCapped(buckets.holoDouble, buckets.rare);
      hitFoil = "holo";
    } else if (roll10 < 85 && (buckets.illustration.length > 0 || buckets.rare.length > 0)) {
      hitCard = pickCapped(buckets.illustration, buckets.rare);
      hitFoil = "illustration";
    } else if (roll10 < 95 && (buckets.ultra.length > 0 || buckets.rare.length > 0)) {
      hitCard = pickCapped(buckets.ultra, buckets.rare);
      hitFoil = "ultra";
    } else if (roll10 < 99 && (buckets.sar.length > 0 || buckets.ultra.length > 0)) {
      hitCard = pickCapped(buckets.sar, buckets.ultra);
      hitFoil = "sar";
    } else {
      // Hyper Rare / Jackpot
      hitCard = pickCapped(buckets.hyper, buckets.sar);
      hitFoil = "hyper";
    }

    pack.push({ card: hitCard || pickCapped(cards), foilType: hitFoil, slot: 10 });

    return pack;
  }

  // Tearing and opening flow
  async function openBoosterPack() {
    if (isTearing) return;
    isTearing = true;

    // Start tear animation on the pack
    if (foilPack) {
      foilPack.classList.add("is-tearing");
      playSynthSound("tear");
    }

    // Load cards in parallel
    const cards = await loadSetData(currentSetId);
    currentPackCards = generatePack(cards);

    incrementPacksOpened();

    // After tear animation finishes, switch views
    setTimeout(() => {
      if (sealedView) sealedView.style.display = "none";
      if (openedView) openedView.style.display = "block";
      if (foilPack) foilPack.classList.remove("is-tearing");
      isTearing = false;

      renderCardsGrid(currentPackCards);
    }, 600);
  }

  // Render the 10 cards in grid
  function renderCardsGrid(packItems) {
    if (!cardsGrid) return;
    cardsGrid.innerHTML = "";

    packItems.forEach((item, index) => {
      const card = item.card;
      const foilType = item.foilType;

      const cardEl = document.createElement("div");
      cardEl.className = "tcg-card-item";
      cardEl.dataset.index = index;

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
        <div class="tcg-card-inner">
          <div class="tcg-card-back">
            <img src="assets/card-back.jpg" class="card-back-img" alt="Pokémon Card Back">
            <span class="card-slot-num">#${item.slot}</span>
          </div>
          <div class="tcg-card-front">
            ${badgeHtml}
            <img src="${imgUrl}" alt="${card.name}" loading="lazy">
          </div>
        </div>
      `;

      // Flip on click
      cardEl.addEventListener("click", () => {
        flipCard(cardEl, item);
      });

      cardsGrid.appendChild(cardEl);
    });
  }

  // Flip an individual card
  function flipCard(cardEl, item) {
    if (cardEl.classList.contains("is-flipped")) {
      // If already flipped, clicking opens high-res preview modal
      openCardModal(item.card);
      return;
    }

    cardEl.classList.add("is-flipped");
    playSynthSound("flip");

    if (item.foilType === "sar" || item.foilType === "hyper" || item.foilType === "ultra") {
      playSynthSound("hit");
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
    if (openedView) openedView.style.display = "none";
    if (sealedView) sealedView.style.display = "flex";
    if (cardsGrid) cardsGrid.innerHTML = "";
    currentPackCards = [];
  }

  // Card detail high-res modal
  function openCardModal(card) {
    if (!tcgModal || !card) return;
    const hiresUrl = getCardImage(card, "large");
    if (tcgModalImg) {
      tcgModalImg.src = hiresUrl;
      tcgModalImg.alt = card.name;
    }
    if (tcgModalName) tcgModalName.textContent = card.name;
    if (tcgModalMeta) {
      tcgModalMeta.textContent = `#${card.number} · ${card.rarity || "Standard"} · ${card.artist || "Official"}`;
    }
    tcgModal.classList.add("is-active");
  }

  function closeCardModal() {
    if (tcgModal) tcgModal.classList.remove("is-active");
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
      const itemEl = document.createElement("div");
      itemEl.className = "binder-thumb-item";
      itemEl.title = `${c.name} (#${c.number}) - Owned: x${c.count || 1}`;
      itemEl.innerHTML = `
        <img src="${c.imageSmall || getCardImage(c, 'small')}" alt="${c.name}" loading="lazy">
        <span class="binder-thumb-count">x${c.count || 1}</span>
      `;
      itemEl.addEventListener("click", () => {
        openCardModal(c);
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
        binderSection.scrollIntoView({ behavior: "smooth" });
        renderBinderGrid();
      }
    });
  }

  if (binderHeader) {
    binderHeader.addEventListener("click", () => {
      if (binderSection) {
        binderSection.classList.toggle("is-open");
        if (binderSection.classList.contains("is-open")) {
          renderBinderGrid();
        }
      }
    });
  }

  // Filter chips in binder
  binderFilters.forEach(chip => {
    chip.addEventListener("click", () => {
      binderFilters.forEach(c => c.removeAttribute("data-on"));
      chip.setAttribute("data-on", "");
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
    if (e.key === "Escape" && tcgModal?.classList.contains("is-active")) {
      closeCardModal();
    }
  });

  // Initial Load
  updateStatsDisplay();
  updatePackAppearance(currentSetId);
  loadSetData(currentSetId, true).catch(() => {});
});

```

---

### 3.17 `js/global-search.js` (全局命令面板快捷检索)

- **文件路径**: `js/global-search.js`  
- **代码行数**: 236 行  
- **文件大小**: 7,181 字节  

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
          <input id="global-search-input" type="search" placeholder="Search Pokémon, moves, abilities..." autocomplete="off">
          <button class="search-close-btn" id="search-close-btn" type="button" aria-label="Close search">✕</button>
        </div>
        <ul id="global-search-results" class="search-results-list"></ul>
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
  }

  async function loadData() {
    if (!pokemonCache) {
      if (window.ALL_SPECIES && window.ALL_SPECIES.length === 1025) {
        pokemonCache = window.ALL_SPECIES;
      } else {
        try {
          const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
          const data = await resp.json();
          pokemonCache = (data.results || []).map((p, idx) => ({ id: idx + 1, name: p.name }));
        } catch (_) {
          pokemonCache = [];
        }
      }
    }

    if (!movesCache) {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/move?limit=950");
        const data = await resp.json();
        movesCache = (data.results || []).map(m => m.name);
      } catch (_) {
        movesCache = [];
      }
    }

    if (!abilitiesCache) {
      try {
        const resp = await fetch("https://pokeapi.co/api/v2/ability?limit=400");
        const data = await resp.json();
        abilitiesCache = (data.results || []).map(a => a.name);
      } catch (_) {
        abilitiesCache = [];
      }
    }
  }

  function openSearch() {
    createSearchDOM();
    const overlay = document.getElementById("search-overlay");
    const input = document.getElementById("global-search-input");
    if (!overlay || !input) return;

    overlay.hidden = false;
    input.value = "";
    input.focus();
    renderResults([]);
    loadData();
  }

  function closeSearch() {
    const overlay = document.getElementById("search-overlay");
    if (overlay) overlay.hidden = true;
    activeIndex = -1;
  }

  function handleSearch(e) {
    const q = e.target.value.trim().toLowerCase();
    if (q.length < 2) {
      renderResults([]);
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
  }

  function renderResults(results) {
    currentResults = results;
    activeIndex = results.length > 0 ? 0 : -1;
    const list = document.getElementById("global-search-results");
    if (!list) return;

    if (results.length === 0) {
      list.innerHTML = `<li class="search-empty">No matching records found.</li>`;
      return;
    }

    list.innerHTML = results.map((item, idx) => `
      <li class="search-item ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}">
        <span class="search-item-title">${item.title}</span>
        <span class="search-item-tag ${item.type.toLowerCase()}">${item.tag}</span>
      </li>
    `).join("");

    list.querySelectorAll(".search-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = Number(el.dataset.idx);
        navigate(currentResults[idx]);
      });
    });
  }

  function handleKeyNavigation(e) {
    if (e.key === "Escape") {
      closeSearch();
      return;
    }

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
      if (idx === activeIndex) el.scrollIntoView({ block: "nearest" });
    });
  }

  function navigate(item) {
    if (!item || !item.url) return;
    closeSearch();
    location.href = item.url;
  }

  // Global hotkey
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });

  window.openGlobalSearch = openSearch;
  window.closeGlobalSearch = closeSearch;
})();

```

---

## 4. 矢量资源、脚本与配置 (Assets, Scripts & Config)

### 4.1 `scripts/make-thumbs.mjs` (缩略图离线生成脚本)

- **文件路径**: `scripts/make-thumbs.mjs`  
- **代码行数**: 89 行  
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

### 4.2 `assets/favicon.svg` (精灵球矢量图标)

- **文件路径**: `assets/favicon.svg`  
- **代码行数**: 14 行  
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

### 4.3 `.gitignore` (版本控制忽略文件)

- **文件路径**: `.gitignore`  
- **代码行数**: 8 行  
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
- **代码行数**: 888 行  
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
- **代码行数**: 680 行  
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
