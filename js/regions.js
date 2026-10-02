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
