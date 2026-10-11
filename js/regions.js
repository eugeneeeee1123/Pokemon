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
