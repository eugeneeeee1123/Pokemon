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
