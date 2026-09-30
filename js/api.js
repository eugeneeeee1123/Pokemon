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

  /**
   * 把名字或编号统一成 PokeAPI 能识别的 key。
   * 有本地名录时一律转成编号：Mr. Mime、Type: Null、Nidoran♀ 这类名字直接请求会 404。
   */
  function resolveKey(idOrName) {
    const raw = String(idOrName).trim().toLowerCase();
    if (/^\d+$/.test(raw)) return raw;
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

      // 3. 网络请求
      const resp = await fetch(`${API_BASE}/pokemon/${encodeURIComponent(key)}`);
      if (!resp.ok) {
        throw new Error(`Pokemon not found: ${idOrName}`);
      }
      const data = await resp.json();

      // 显示名优先用本地名录（Mr. Mime），API 的 slug 是 mr-mime
      const local = window.getSpeciesById ? window.getSpeciesById(data.id) : null;
      const result = {
        id: data.id,
        name: local ? local.name : data.name.charAt(0).toUpperCase() + data.name.slice(1),
        types: data.types.sort((a, b) => a.slot - b.slot).map((t) => t.type.name),
        height: data.height / 10, // 分米转米
        weight: data.weight / 10, // 百克转千克
        stats: data.stats.map((s) => ({
          name: s.stat.name,
          value: s.base_stat
        })),
        abilities: data.abilities.map((a) => ({
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
  };

  window.pokeApi = api;

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
        img.style.visibility = "hidden";
      }
    },
    true
  );
})(window);
