/* ============================================================
   AAA — Page « Recommandations de prévention »
   Étend le dictionnaire i18n (défini dans aaa.js) + filtres à facettes
   ============================================================ */

Object.assign(I18N.fr, {
  "bc.home": "Accueil",
  "bc.sst": "Sécurité & santé au travail",
  "bc.current": "Recommandations de prévention",
  "prev.eyebrow": "Documentation prévention",
  "prev.title": "Recommandations de prévention",
  "prev.lead": "Les recommandations de prévention sont des règles de l'art élaborées par le Service Prévention de l'AAA, avec le concours d'experts, pour vous aider à prévenir les risques selon votre secteur d'activité.",
  "prev.resume.title": "En résumé",
  "prev.resume.1": "Des règles de l'art pour évaluer et réduire les risques, secteur par secteur.",
  "prev.resume.2": "Filtrez par secteur d'activité et par type de risque pour trouver le bon document.",
  "prev.resume.3": "Besoin d'aide ? Le Service Prévention vous accompagne gratuitement.",
  "prev.searchLabel": "Rechercher un document",
  "prev.searchPh": "Rechercher une recommandation, un mot-clé…",
  "prev.bySector": "Filtrer par secteur d'activité",
  "prev.byRisk": "Filtrer par type de risque",
  "prev.reset": "Réinitialiser les filtres",
  "prev.empty": "Aucun document ne correspond à votre recherche. Modifiez ou réinitialisez les filtres.",
  "prev.download": "Télécharger",
  "prev.langsLabel": "Langues disponibles :",
  "prev.updated": "Mise à jour",
  "prev.svc.title": "Service Prévention",
  "prev.svc.desc": "Conseil, formations et recommandations gratuits pour les entreprises affiliées.",
  "prev.svc.cta": "Demander un conseil",
  "prev.filters": "Filtres",
  "prev.sort": "Trier :",
  "prev.sortRelevance": "Pertinence",
  "prev.sortAz": "A → Z",
  "prev.sortRecent": "Plus récents",
  "prev.allSectors": "Toutes activités",
  "prev.legal.title": "Références légales",
  "prev.docOne": "document", "prev.docMany": "documents"
});
Object.assign(I18N.de, {
  "bc.home": "Startseite",
  "bc.sst": "Sicherheit & Gesundheit am Arbeitsplatz",
  "bc.current": "Präventionsempfehlungen",
  "prev.eyebrow": "Präventionsdokumentation",
  "prev.title": "Präventionsempfehlungen",
  "prev.lead": "Die Präventionsempfehlungen sind anerkannte Regeln der Technik, die von der Präventionsabteilung der AAA gemeinsam mit Fachleuten erstellt werden, um Sie bei der Risikoprävention je nach Tätigkeitsbereich zu unterstützen.",
  "prev.resume.title": "Kurz gefasst",
  "prev.resume.1": "Anerkannte Regeln, um Risiken Branche für Branche zu bewerten und zu senken.",
  "prev.resume.2": "Filtern Sie nach Tätigkeitsbereich und Risikoart, um das passende Dokument zu finden.",
  "prev.resume.3": "Brauchen Sie Hilfe? Die Präventionsabteilung begleitet Sie kostenlos.",
  "prev.searchLabel": "Ein Dokument suchen",
  "prev.searchPh": "Eine Empfehlung, ein Stichwort suchen…",
  "prev.bySector": "Nach Tätigkeitsbereich filtern",
  "prev.byRisk": "Nach Risikoart filtern",
  "prev.reset": "Filter zurücksetzen",
  "prev.empty": "Kein Dokument entspricht Ihrer Suche. Ändern Sie die Filter oder setzen Sie sie zurück.",
  "prev.download": "Herunterladen",
  "prev.langsLabel": "Verfügbare Sprachen:",
  "prev.updated": "Aktualisiert",
  "prev.svc.title": "Präventionsabteilung",
  "prev.svc.desc": "Kostenlose Beratung, Schulungen und Empfehlungen für angeschlossene Unternehmen.",
  "prev.svc.cta": "Beratung anfragen",
  "prev.filters": "Filter",
  "prev.sort": "Sortieren:",
  "prev.sortRelevance": "Relevanz",
  "prev.sortAz": "A → Z",
  "prev.sortRecent": "Neueste",
  "prev.allSectors": "Alle Bereiche",
  "prev.legal.title": "Rechtliche Grundlagen",
  "prev.docOne": "Dokument", "prev.docMany": "Dokumente"
});
Object.assign(I18N.en, {
  "bc.home": "Home",
  "bc.sst": "Safety & health at work",
  "bc.current": "Prevention recommendations",
  "prev.eyebrow": "Prevention documentation",
  "prev.title": "Prevention recommendations",
  "prev.lead": "Prevention recommendations are codes of good practice drawn up by the AAA Prevention department, with the help of experts, to help you prevent risks according to your sector of activity.",
  "prev.resume.title": "In short",
  "prev.resume.1": "Codes of good practice to assess and reduce risks, sector by sector.",
  "prev.resume.2": "Filter by sector of activity and by type of risk to find the right document.",
  "prev.resume.3": "Need help? The Prevention department supports you free of charge.",
  "prev.searchLabel": "Search for a document",
  "prev.searchPh": "Search a recommendation, a keyword…",
  "prev.bySector": "Filter by sector of activity",
  "prev.byRisk": "Filter by type of risk",
  "prev.reset": "Reset filters",
  "prev.empty": "No document matches your search. Change or reset the filters.",
  "prev.download": "Download",
  "prev.langsLabel": "Available languages:",
  "prev.updated": "Updated",
  "prev.svc.title": "Prevention department",
  "prev.svc.desc": "Free advice, training and recommendations for affiliated companies.",
  "prev.svc.cta": "Request advice",
  "prev.filters": "Filters",
  "prev.sort": "Sort:",
  "prev.sortRelevance": "Relevance",
  "prev.sortAz": "A → Z",
  "prev.sortRecent": "Most recent",
  "prev.allSectors": "All sectors",
  "prev.legal.title": "Legal references",
  "prev.docOne": "document", "prev.docMany": "documents"
});

/* ---------- Référentiels ---------- */
const SECTORS = [
  { id: "construction", icon: "hat", fr: "Construction & second œuvre", de: "Bau & Ausbau", en: "Construction & finishing" },
  { id: "industrie", icon: "factory", fr: "Industrie & artisanat", de: "Industrie & Handwerk", en: "Industry & crafts" },
  { id: "transport", icon: "truck", fr: "Transport & logistique", de: "Transport & Logistik", en: "Transport & logistics" },
  { id: "agriculture", icon: "sprout", fr: "Agriculture & secteurs verts", de: "Landwirtschaft & Grünberufe", en: "Agriculture & green sectors" },
  { id: "sante", icon: "pulse", fr: "Santé", de: "Gesundheit", en: "Healthcare" },
  { id: "tertiaire", icon: "briefcase", fr: "Tertiaire", de: "Dienstleistungen", en: "Services" }
];
const RISKS = [
  { id: "commun", fr: "Commun / général", de: "Allgemein", en: "General" },
  { id: "chutes", fr: "Chutes de hauteur", de: "Absturz", en: "Falls from height" },
  { id: "machines", fr: "Machines & engins", de: "Maschinen & Geräte", en: "Machinery & equipment" },
  { id: "electrique", fr: "Électrique", de: "Elektrisch", en: "Electrical" },
  { id: "routier", fr: "Routier", de: "Verkehr", en: "Road" },
  { id: "ergonomie", fr: "Ergonomie", de: "Ergonomie", en: "Ergonomics" },
  { id: "chimique", fr: "Biologique & chimique", de: "Biologisch & chemisch", en: "Biological & chemical" }
];
const DOCS = [
  { sectors:["construction","industrie","transport","agriculture","sante","tertiaire"], risks:["commun"], type:"PDF", size:"0,7 Mo", year:"2025", langs:["FR","DE"], fr:"R00 — Introduction", de:"R00 — Einführung" },
  { sectors:["construction","industrie","transport","agriculture","sante","tertiaire"], risks:["commun"], type:"PDF", size:"2,1 Mo", year:"2025", langs:["FR","DE"], fr:"R01 — Recommandations générales", de:"R01 — Allgemeine Empfehlungen" },
  { sectors:["construction","transport","agriculture"], risks:["machines","routier"], type:"PDF", size:"2,8 Mo", year:"2025", langs:["FR","DE"], fr:"R02 — Conduite d'engins en sécurité", de:"R02 — Sicheres Führen von Maschinen" },
  { sectors:["construction"], risks:["chutes","machines","commun"], type:"PDF", size:"3,4 Mo", year:"2025", langs:["FR","DE"], fr:"R03 — Travaux de construction et de second œuvre", de:"R03 — Bau- und Ausbauarbeiten" },
  { sectors:["construction","tertiaire","agriculture"], risks:["chutes"], type:"PDF", size:"1,1 Mo", year:"2025", langs:["FR","DE"], fr:"R04 — Échelles et marchepieds", de:"R04 — Leitern und Tritte" },
  { sectors:["construction"], risks:["machines"], type:"PDF", size:"2,6 Mo", year:"2025", langs:["FR","DE"], fr:"R05 — Engins de chantier", de:"R05 — Baumaschinen" },
  { sectors:["industrie","transport"], risks:["machines","ergonomie"], type:"PDF", size:"1,9 Mo", year:"2025", langs:["FR","DE"], fr:"R06 — Chariots de manutention", de:"R06 — Flurförderzeuge" },
  { sectors:["industrie","transport"], risks:["machines"], type:"PDF", size:"1,3 Mo", year:"2025", langs:["FR","DE"], fr:"R07 — Ponts élévateurs", de:"R07 — Hebebühnen" },
  { sectors:["transport"], risks:["routier","machines"], type:"PDF", size:"2,2 Mo", year:"2025", langs:["FR","DE"], fr:"R08 — Véhicules", de:"R08 — Fahrzeuge" },
  { sectors:["construction","industrie"], risks:["machines"], type:"PDF", size:"2,4 Mo", year:"2025", langs:["FR","DE"], fr:"R09 — Grues", de:"R09 — Krane" },
  { sectors:["industrie"], risks:["machines"], type:"PDF", size:"2,0 Mo", year:"2025", langs:["FR","DE"], fr:"R10 — Équipements de travail mus par force motrice", de:"R10 — Kraftbetriebene Arbeitsmittel" },
  { sectors:["industrie","agriculture"], risks:["machines"], type:"PDF", size:"2,7 Mo", year:"2025", langs:["FR","DE"], fr:"R11 — Machines pour le travail du bois et matériaux similaires", de:"R11 — Holzbearbeitungsmaschinen" },
  { sectors:["industrie","construction"], risks:["chimique","machines"], type:"PDF", size:"1,8 Mo", year:"2025", langs:["FR","DE"], fr:"R12 — Soudage, oxycoupage et procédés semblables", de:"R12 — Schweißen und Brennschneiden" },
  { sectors:["construction","industrie"], risks:["chimique"], type:"PDF", size:"1,5 Mo", year:"2025", langs:["FR","DE"], fr:"R13 — Mise en œuvre de produits de revêtement", de:"R13 — Beschichtungsstoffe" },
  { sectors:["construction","industrie"], risks:["electrique"], type:"PDF", size:"2,3 Mo", year:"2025", langs:["FR","DE"], fr:"R14 — Travaux sur installations et matériel électriques", de:"R14 — Arbeiten an elektrischen Anlagen" },
  { sectors:["sante"], risks:["chimique"], type:"PDF", size:"2,9 Mo", year:"2025", langs:["FR","DE"], fr:"R15 — Agents biologiques et travaux dans la santé", de:"R15 — Biologische Arbeitsstoffe und Gesundheitswesen" },
  { sectors:["agriculture"], risks:["machines","chimique"], type:"PDF", size:"3,36 Mo", year:"2025", langs:["FR","DE"], fr:"R16 — Agriculture, sylviculture, horticulture et viticulture", de:"R16 — Land-, Forst-, Garten- und Weinbau" },
  { sectors:["construction"], risks:["chutes"], type:"PDF", size:"1,2 Mo", year:"2025", langs:["FR","DE"], fr:"R17 — Échafaudages de pied", de:"R17 — Standgerüste" },
  { sectors:["construction"], risks:["chutes"], type:"PDF", size:"1,0 Mo", year:"2025", langs:["FR","DE"], fr:"R18 — Échafaudages roulants", de:"R18 — Fahrgerüste" },
  { sectors:["construction","tertiaire","agriculture"], risks:["chutes"], type:"PDF", size:"2,5 Mo", year:"2025", langs:["FR","DE"], fr:"R19 — Travaux en hauteur en sécurité", de:"R19 — Sicheres Arbeiten in der Höhe" }
];

/* ---------- Icônes secteurs (line) ---------- */
const SEC_ICONS = {
  hat: '<path d="M7 18v-6a5 5 0 0 1 10 0v6M5 18h14M9 22h6"/>',
  factory: '<path d="M3 21V9l6 4V9l6 4V5l6 0v16Z"/><path d="M7 21v-3M12 21v-3M17 21v-3"/>',
  truck: '<path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  sprout: '<path d="M12 21v-7M12 14c0-4 3-7 8-7 0 4-3 7-8 7ZM12 14c0-3-2-5-7-5 0 3 2 5 7 5Z"/>',
  pulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  all: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>'
};
const TYPE_CLASS = { PDF: "t-pdf", Word: "t-word", ZIP: "t-zip" };

/* ---------- État ---------- */
const activeSectors = new Set();
const activeRisks = new Set();
let query = "";

function curLang() { return document.documentElement.lang || "fr"; }
function L(o) { return o[curLang()] || o.fr; }
function byId(arr, id) { return arr.find((x) => x.id === id); }

function renderFacets() {
  const sc = document.getElementById("sector-chips");
  const rc = document.getElementById("risk-chips");
  if (!sc || !rc) return;
  sc.innerHTML = SECTORS.map((s) =>
    `<button class="chip-btn" type="button" data-type="sector" data-id="${s.id}" aria-pressed="${activeSectors.has(s.id)}">
       <span class="chip-check" aria-hidden="true"></span>
       <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SEC_ICONS[s.icon]}</svg>
       <span>${L(s)}</span>
       <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
     </button>`).join("");
  rc.innerHTML = RISKS.map((r) =>
    `<button class="chip-btn" type="button" data-type="risk" data-id="${r.id}" aria-pressed="${activeRisks.has(r.id)}">
       <span class="chip-check" aria-hidden="true"></span>
       <span>${L(r)}</span>
       <svg class="chip-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
     </button>`).join("");
}

function matches(d) {
  if (activeSectors.size && !d.sectors.some((s) => activeSectors.has(s))) return false;
  if (activeRisks.size && !d.risks.some((r) => activeRisks.has(r))) return false;
  if (query) {
    const hay = (L(d) + " " + d.sectors.map((s) => L(byId(SECTORS, s))).join(" ") + " " + d.risks.map((r) => L(byId(RISKS, r))).join(" ")).toLowerCase();
    if (!hay.includes(query)) return false;
  }
  return true;
}

function renderCards() {
  const grid = document.getElementById("doc-grid");
  const empty = document.getElementById("doc-empty");
  const count = document.getElementById("result-count");
  const reset = document.getElementById("reset-filters");
  if (!grid) return;
  const dict = I18N[curLang()];
  let list = DOCS.filter(matches);
  const sortEl = document.getElementById("sort");
  const sort = sortEl ? sortEl.value : "relevance";
  if (sort === "az") list.sort((a, b) => L(a).localeCompare(L(b), curLang()));
  else if (sort === "recent") list.sort((a, b) => b.year.localeCompare(a.year) || L(a).localeCompare(L(b), curLang()));

  grid.innerHTML = list.map((d) => {
    const allSec = d.sectors.length >= 5;
    const secIcon = allSec ? "all" : byId(SECTORS, d.sectors[0]).icon;
    const secLabel = allSec ? dict["prev.allSectors"] : L(byId(SECTORS, d.sectors[0]));
    const langs = d.langs.map((l) => `<span class="lang-badge">${l}</span>`).join("");
    return `<article class="doc-card" data-component="Carte document">
      <div class="doc-thumb">
        <span class="doc-sectoricon" title="${secLabel}"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SEC_ICONS[secIcon]}</svg></span>
        <svg class="pdf-ico" viewBox="0 0 48 56" fill="none" aria-hidden="true"><path d="M6 2h26l10 10v40a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="#fff" stroke="#D6E0E8" stroke-width="2"/><path d="M32 2v10h10" fill="#EAF2FA" stroke="#D6E0E8" stroke-width="2"/></svg>
        <span class="doc-ext ${TYPE_CLASS[d.type]}">${d.type}</span>
      </div>
      <div class="doc-body">
        <span class="doc-sector">${secLabel}</span>
        <h3 class="doc-title">${L(d)}</h3>
        <div class="doc-meta">
          <span class="doc-langs"><span class="sr-only">${dict["prev.langsLabel"]}</span>${langs}</span>
          <span class="doc-size">${d.type} · ${d.size}</span>
        </div>
        <a class="btn btn--primary doc-dl" href="#0">
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>
          <span>${dict["prev.download"]}</span>
        </a>
      </div>
    </article>`;
  }).join("");

  const n = list.length;
  const word = n > 1 ? dict["prev.docMany"] : dict["prev.docOne"];
  if (count) count.innerHTML = `<strong>${n}</strong> ${word}`;
  if (empty) empty.hidden = n !== 0;
  const hasFilters = activeSectors.size || activeRisks.size || query;
  if (reset) reset.hidden = !hasFilters;
  renderActive();
}

function renderActive() {
  const wrap = document.getElementById("active-filters");
  if (!wrap) return;
  const pills = [];
  activeSectors.forEach((id) => pills.push({ type: "sector", id, label: L(byId(SECTORS, id)) }));
  activeRisks.forEach((id) => pills.push({ type: "risk", id, label: L(byId(RISKS, id)) }));
  wrap.innerHTML = pills.map((p) =>
    `<button class="active-pill" type="button" data-type="${p.type}" data-id="${p.id}" aria-label="Retirer le filtre ${p.label}"><span>${p.label}</span><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>`).join("");
}

function onChip(btn) {
  const set = btn.dataset.type === "sector" ? activeSectors : activeRisks;
  const id = btn.dataset.id;
  if (set.has(id)) set.delete(id); else set.add(id);
  btn.setAttribute("aria-pressed", String(set.has(id)));
  renderCards();
}

(function (cb) { if (document.readyState !== "loading") cb(); else document.addEventListener("DOMContentLoaded", cb); })(() => {
  renderFacets();
  renderCards();

  document.querySelectorAll(".chips").forEach((c) =>
    c.addEventListener("click", (e) => { const b = e.target.closest(".chip-btn"); if (b) onChip(b); }));

  const search = document.getElementById("doc-search");
  if (search) search.addEventListener("input", () => { query = search.value.trim().toLowerCase(); renderCards(); });

  const reset = document.getElementById("reset-filters");
  if (reset) reset.addEventListener("click", () => {
    activeSectors.clear(); activeRisks.clear(); query = "";
    if (search) search.value = "";
    renderFacets(); renderCards();
  });

  const sortEl = document.getElementById("sort");
  if (sortEl) sortEl.addEventListener("change", renderCards);

  const active = document.getElementById("active-filters");
  if (active) active.addEventListener("click", (e) => {
    const b = e.target.closest(".active-pill");
    if (!b) return;
    const set = b.dataset.type === "sector" ? activeSectors : activeRisks;
    set.delete(b.dataset.id);
    renderFacets(); renderCards();
  });

  // re-render au changement de langue (les libellés dynamiques suivent)
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => setTimeout(() => { renderFacets(); renderCards(); }, 0)));
});
