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
