/* RapidQuake map: Pereira (radar priority, checked against Copernicus EMS) and Tashkent (pre-event exposure).
   Logic and thresholds follow the team's original app; only the interface is new. */
import { COL, nf, short, esc, $, reduce } from './util.js';

export function initMap(D) {
const L = window.L, M = D.metrics;
const EMS = { destroyed: ['#ffffff', 'Destroyed'], damaged: ['#8fc1ff', 'Damaged'], possible: ['#111318', 'Possibly damaged'] };
const S = { city: 'P', level: 'comuna', src: 'radar', cls: new Set([1, 2, 3, 4, 5]), ems: new Set(['destroyed', 'damaged', 'possible']),
  aoi: true, hideLow: false, radar: false, tk: 'exposure', swipe: .5 };
const IMG = { base_p: 'img/base_p.webp', base_t: 'img/base_t.webp', before: 'img/before.webp', across: 'img/across.webp', tk_watch: 'img/tk_watch.webp', tashkent: 'img/tashkent.webp' };
const TK = window.RQ_TK, TS = TK.sum;

/* ---------- map ---------- */
const map = L.map('map', { zoomControl: false, zoomSnap: 0.25, attributionControl: true, scrollWheelZoom: false });
L.control.zoom({ position: 'topright' }).addTo(map);
L.control.scale({ imperial: false, position: 'bottomright' }).addTo(map);
map.attributionControl.setPrefix('Leaflet');
map.createPane('base').style.zIndex = 210;
map.createPane('radar').style.zIndex = 330;
map.createPane('radar2').style.zIndex = 331;
const img = D.images;
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  maxNativeZoom: 16, maxZoom: 19, attribution: 'Basemap © Esri, HERE, Garmin, © OpenStreetMap contributors' }).addTo(map);
const baseP = L.imageOverlay(IMG.base_p, img.base_p.bounds, { pane: 'base', attribution: '' });
const baseT = L.imageOverlay(IMG.base_t, TK.bounds.base_t, { pane: 'base', attribution: '' });
const radBefore = L.imageOverlay(IMG.before, img.before.bounds, { pane: 'radar', opacity: .92 });
const radAfter = L.imageOverlay(IMG.across, img.across.bounds, { pane: 'radar2', opacity: .92 });
const tkWatch = L.imageOverlay(IMG.tk_watch, TK.bounds.tk_watch, { pane: 'radar', opacity: .92 });
const tkBefore = L.imageOverlay(IMG.tashkent, TK.bounds.tashkent, { pane: 'radar', opacity: .95 });

// wheel zoom only after a click, so page scrolling never gets trapped in the map
const mapEl = $('map');
mapEl.addEventListener('click', () => { map.scrollWheelZoom.enable(); $('wheelHint').classList.add('off'); });
mapEl.addEventListener('mouseleave', () => { map.scrollWheelZoom.disable(); $('wheelHint').classList.remove('off'); });

/* ---------- classification (unchanged from the team's method) ---------- */
function rankClass(r) { return r == null ? 0 : r <= 10 ? 5 : r <= 25 ? 4 : r <= 50 ? 3 : r <= 100 ? 2 : 1; }
const MODES = {
  comuna: {
    radar: { cls: p => { const v = p.people_affected; return v <= 298 ? 1 : v <= 539 ? 2 : v <= 844 ? 3 : v <= 1469 ? 4 : 5; },
      rank: p => p.rank_radar, title: 'Radar priority: people potentially affected (est.)', labels: ['≤ 300', '300–540', '540–840', '840–1,470', '> 1,470'],
      val: p => [nf(p.people_affected), 'people (est.)'], barv: p => p.people_affected,
      sub: p => `change in ${nf(p.damage_frac * 100)} % of buildings` },
    shake: { cls: p => { const r = p.rank_shake; return r <= 2 ? 5 : r <= 5 ? 4 : r <= 9 ? 3 : r <= 14 ? 2 : 1; },
      rank: p => p.rank_shake, title: 'First estimate: residents × shaking', labels: ['ranks 15–19', '10–14', '6–9', '3–5', '1–2'],
      val: p => [`MMI ${nf(p.mmi, 1)}`, `${short(p.pop)} residents`], barv: p => p.shake_exposure,
      sub: () => 'USGS ShakeMap × WorldPop, minutes after the quake' },
    ems: { cls: p => { const v = p.score_ems; return v == null ? 0 : v >= 100 ? 5 : v >= 50 ? 4 : v >= 20 ? 3 : v >= 10 ? 2 : 1; },
      rank: p => p.rank_ems, title: 'Official damage (Copernicus EMS score)', labels: ['< 10', '10–20', '20–50', '50–100', '≥ 100'],
      val: p => [nf(p.n_destroyed + p.n_damaged + p.n_possible), 'damaged bldgs'], barv: p => p.score_ems,
      sub: p => `${p.n_destroyed} destroyed · ${p.n_damaged} damaged · ${p.n_possible} possible` }
  },
  cell: {
    radar: { cls: p => rankClass(p.rank_radar), rank: p => p.rank_radar, title: 'Radar priority (500 m squares)',
      labels: ['rank > 100', '51–100', '26–50', '11–25', 'top 10'], val: p => [nf(p.people_affected), 'people (est.)'],
      barv: p => p.people_affected, sub: p => `change in ${nf(p.damage_frac_raw * 100)} % of buildings` },
    shake: { cls: p => rankClass(p.rank_shake), rank: p => p.rank_shake, title: 'First estimate (500 m squares)',
      labels: ['rank > 100', '51–100', '26–50', '11–25', 'top 10'], val: p => [`MMI ${nf(p.mmi, 1)}`, `${nf(p.pop)} residents`],
      barv: p => p.pop * Math.max(p.mmi - 5, 0), sub: () => 'shaking × residents' },
    ems: { cls: p => { const n = p.n_ems; return !n ? 0 : n === 1 ? 2 : n <= 3 ? 3 : n <= 7 ? 4 : 5; }, rank: p => p.n_ems ? -p.n_ems : null,
      title: 'Official damage per square (EMS)', labels: ['—', '1 bldg', '2–3', '4–7', '8 +'], val: p => [nf(p.n_ems), 'damaged bldgs'],
      barv: p => p.n_ems, sub: () => 'Copernicus EMS, destroyed + damaged' }
  }
};
const mode = () => MODES[S.level][S.src];
const lowConf = p => S.src === 'radar' && p.radar_conf === 'low';
const visible = p => { const c = mode().cls(p); return c > 0 && S.cls.has(c) && !(S.hideLow && lowConf(p)); };
const EDGE = '#0b0d12';

/* ---------- Pereira layers ---------- */
const byId = new Map();
function polyStyle(f) {
  const p = f.properties, c = mode().cls(p), on = visible(p);
  if (c === 0) return { color: '#7c869c', weight: S.level === 'comuna' ? 1 : 0, dashArray: '3 3', fillColor: '#2a2f3d', fillOpacity: S.level === 'comuna' ? .5 : 0 };
  return { color: EDGE, weight: S.level === 'comuna' ? 1.3 : .7, dashArray: lowConf(p) ? '4 3' : null, fillColor: COL[c],
    fillOpacity: (on ? (lowConf(p) ? .45 : .84) : .06) * (S.radar ? .3 : 1), opacity: on ? 1 : .3 };
}
function popup(p, isCell) {
  const rows = isCell ? [
    ['Area', esc(p.area)], ['Residents', nf(p.pop)], ['Buildings with changed radar signal', nf(p.damage_frac_raw * 100) + ' %'],
    ['People potentially affected (est.)', nf(p.people_affected)], ['Radar rank', `#${p.rank_radar} of 295`], ['Shaking', 'MMI ' + nf(p.mmi, 1)],
    ['EMS damaged buildings', nf(p.n_ems)]]
    : [['Residents', nf(p.pop)], ['Buildings with changed radar signal', nf(p.damage_frac * 100, 1) + ' %'], ['People potentially affected (est.)', nf(p.people_affected)],
      ['Radar rank', `#${p.rank_radar} of 19`], ['Shaking', 'MMI ' + nf(p.mmi, 1)],
      ['Copernicus EMS', p.score_ems == null ? 'outside mapped area' : `${p.n_destroyed} destroyed · ${p.n_damaged} damaged · ${p.n_possible} possible`],
      ['Radar confidence', p.radar_conf === 'low' ? 'low (few built pixels)' : 'good']];
  const head = isCell ? `Square ${p.cell}` : `Comuna ${esc(p.name)}`;
  return `<b>${head}</b><table class="pop">${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`;
}
function bindFeature(f, layer, isCell) {
  const key = (isCell ? 'c' : 'm') + (isCell ? f.properties.cell : f.properties.codcom);
  byId.set(key, layer);
  layer.bindPopup(() => popup(f.properties, isCell));
  layer.on('mouseover', () => hl(key, true)).on('mouseout', () => hl(key, false))
    .on('click', () => { const li = document.querySelector(`[data-key="${key}"]`); if (li) scrollIn(li); });
}
// scroll a list row into view inside its panel only (never moves the page)
function scrollIn(li) { const pn = li.closest('.panel'); if (!pn) return; const a = li.offsetTop - pn.offsetTop;
  if (a < pn.scrollTop || a + li.offsetHeight > pn.scrollTop + pn.clientHeight) pn.scrollTo({ top: Math.max(0, a - 60), behavior: 'smooth' }); }
const comunas = L.geoJSON(D.comunas, { style: polyStyle, onEachFeature: (f, l) => bindFeature(f, l, false) });
const cells = L.geoJSON(D.cells, { style: polyStyle, onEachFeature: (f, l) => bindFeature(f, l, true) });
const outline = L.geoJSON(D.comunas, { style: { color: '#c9d4e8', weight: .9, fill: false, opacity: .55 }, interactive: false });
const aoi = L.geoJSON(D.ems_aoi, { style: { color: '#9db6ee', weight: 2, dashArray: '7 5', fill: false }, interactive: false });
const emsLayer = L.geoJSON(D.ems, {
  filter: f => S.ems.has(f.properties.dmg),
  pointToLayer: (f, ll) => { const k = f.properties.dmg; return L.circleMarker(ll, { radius: 4.4, color: k === 'possible' ? '#ffffff' : EDGE, weight: 1.3, fillColor: EMS[k][0], fillOpacity: 1 })
    .bindTooltip(EMS[k][1] + ' (Copernicus EMS)', { direction: 'top' }); }
});
const pins = L.layerGroup();
const P = L.layerGroup([baseP]);

function hl(key, on) {
  const l = byId.get(key); if (!l) return;
  if (on) { l.setStyle({ weight: 3.2, color: '#ffffff' }); l.bringToFront(); } else (S.level === 'comuna' ? comunas : cells).resetStyle(l);
  const li = document.querySelector(`[data-key="${key}"]`); if (li) li.classList.toggle('hl', on);
}

/* ---------- Tashkent: radar readiness for the whole city (team's tashkent_full data) ---------- */
const tkName = p => p.name.replace(/ tumani/i, '').replace('‘', '’');
const tkByKey = new Map();
const tkStyle = () => ({ color: '#ffffff', weight: 1.3, fillColor: '#ffffff', fillOpacity: 0 });
const tumans = L.geoJSON(TK.tumans, { style: tkStyle,
  onEachFeature: (f, l) => {
    const p = f.properties, key = 'r' + tkName(p); tkByKey.set(key, l);
    l.bindPopup(`<b>${esc(tkName(p))}</b><table class="pop">
      <tr><td>Buildings the radar watches reliably</td><td>${nf(p.watch_pct)} %</td></tr>
      <tr><td>Built-up area</td><td>${nf(p.built_km2, 1)} km²</td></tr>
      <tr><td>Inside the area we processed</td><td>${nf(p.coverage_pct)} %</td></tr></table>`);
    l.on('mouseover', () => tkHl(key, true)).on('mouseout', () => tkHl(key, false));
  }
});
function tkHl(key, on) {
  const l = tkByKey.get(key); if (!l) return;
  if (on) { l.setStyle(l._ex ? { weight: 3.2, color: '#ffffff' } : { weight: 3, fillOpacity: .14 }); l.bringToFront(); } else (l._ex ? districts : tumans).resetStyle(l);
  const li = document.querySelector(`[data-key="${CSS.escape(key)}"]`); if (li) li.classList.toggle('hl', on);
}
const T = L.layerGroup([baseT]);
/* exposure by district (team's first Tashkent dataset: Toshstat residents, OSM buildings) */
const tkCls = p => { const e = p.exposure; return e < .3104 ? 1 : e < .4828 ? 2 : e < .6552 ? 3 : e < .8276 ? 4 : 5; };
const exStyle = f => ({ color: EDGE, weight: 1.3, fillColor: COL[tkCls(f.properties)], fillOpacity: S.cls.has(tkCls(f.properties)) ? .84 : .06 });
const districts = L.geoJSON(D.tashkent, { style: exStyle,
  onEachFeature: (f, l) => {
    const p = f.properties, key = 't' + p.name_en; tkByKey.set(key, l); l._ex = true;
    l.bindPopup(`<b>${esc(p.name_en)}</b><table class="pop">
      <tr><td>Residents (2025)</td><td>${nf(p.pop)}</td></tr><tr><td>Density</td><td>${nf(p.pop_density)} /km²</td></tr>
      <tr><td>Buildings (OSM)</td><td>${nf(p.bld_n)}</td></tr><tr><td>Built-up share</td><td>${nf(p.built_share * 100, 1)} %</td></tr>
      <tr><td>Exposure index</td><td>${nf(p.exposure, 2)}</td></tr><tr><td>Rank</td><td>#${p.rank_exposure} of 12</td></tr></table>
      ${p.name_en === 'Yangihayot' ? '<p class="popnote">OSM building data incomplete: exposure likely underestimated.</p>' : ''}`);
    l.on('mouseover', () => tkHl(key, true)).on('mouseout', () => tkHl(key, false));
  }
});
const tkPins = L.layerGroup();
D.tashkent.features.forEach(f => { const l = tkByKey.get('t' + f.properties.name_en);
  L.marker(l.getBounds().getCenter(), { icon: L.divIcon({ className: '', html: `<div class="rnk">${f.properties.rank_exposure}</div>`, iconSize: [26, 26] }), interactive: false, keyboard: false }).addTo(tkPins); });

/* ---------- UI builders ---------- */
function kpis() {
  const k = S.city === 'P' ? [
    [nf(M.n_ems), 'buildings mapped as damaged in Pereira (Copernicus EMS)', ''],
    [nf(M.top10_ems * 100) + ' %', `of buildings mapped as damaged lie in the top-10 radar squares, which hold only ${nf(M.top10_built * 100)} % of all buildings`, 'hot'],
    ['ρ = ' + nf(M.rho_comuna, 2) + ` <small>n = ${M.n_comuna}</small>`, `Spearman rank correlation, radar vs official damage ranking, on a sample of ${M.n_comuna} comunas (p = ${nf(M.p_comuna, 2)})`, ''],
    [short(M.pop_pereira), 'residents in 19 comunas (WorldPop 2020)', '']
  ] : [
    [short(M.pop_tashkent), 'residents in 12 city districts (Toshstat, Oct 2025)', ''],
    ['8–9', 'seismic intensity zone, MSK-64 (whole city)', ''],
    [nf(TS.watch_pct) + ' %', 'of buildings can be watched reliably by NISAR radar', 'hot'],
    ['1966', 'M 5.1–5.3 shock under the city centre left about 100,000 people homeless', '']
  ];
  $('kpis').innerHTML = k.map(([v, l, c]) => `<div class="kpi ${c}"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
}
function seg(id, items, cur, row) {
  return `<div class="seg ${row ? 'row' : ''}" id="${id}">${items.map(([k, b, s]) =>
    `<button type="button" data-k="${k}" class="${k === cur ? 'on' : ''}" aria-pressed="${k === cur}"><span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</span></button>`).join('')}</div>`;
}
const ck = (id, on, label, sub = '') => `<label class="ck"><input type="checkbox" id="${id}" ${on ? 'checked' : ''}><i></i><span><b>${label}</b>${sub ? `<small>${sub}</small>` : ''}</span></label>`;
function leftP() {
  $('left').innerHTML = `
    <section class="grp"><h3>What was known, and when</h3>
    <div class="tl" id="src">${[['shake', '10 Aug', 'First estimate', 'Minutes after. USGS ShakeMap × residents.'],
      ['ems', '12 Aug', 'Copernicus EMS damage map', 'Two days after. Optical satellite, city centre only (reference).'],
      ['radar', '13 & 16 Aug', 'RapidQuake radar priority', 'NISAR passes. Whole city, free data, through clouds.']].map(([k, d, b, sm]) =>
      `<button type="button" data-k="${k}" class="${k === S.src ? 'on' : ''}" aria-pressed="${k === S.src}"><time>${d}</time><span><b>${b}</b><small>${sm}</small></span></button>`).join('')}</div>
    <p class="hint">Next NISAR passes every 12 days keep the map up to date.</p></section>
    <section class="grp"><h3>Detail</h3>
    ${seg('lvl', [['comuna', 'Comunas', ''], ['cell', '500 m squares', '']], S.level, true)}</section>
    <section class="grp"><h3>Layers</h3>
    ${ck('radC', S.radar, 'Radar before / after', 'NISAR coherence image with a swipe handle')}
    ${ck('emsC', S.ems.size > 0, 'Damaged buildings', 'mapped later by Copernicus EMS')}
    <div class="emschips" id="emsChips" ${S.ems.size ? '' : 'hidden'}>${Object.entries(EMS).map(([k, [c, l]]) =>
      `<button type="button" data-ems="${k}" class="${S.ems.has(k) ? '' : 'off'}" aria-pressed="${S.ems.has(k)}"><span class="dot ${k}"></span>${l} ${nf(M['n_' + k])}</button>`).join('')}</div>
    ${ck('aoiC', S.aoi, 'Area mapped by Copernicus EMS')}
    ${ck('lowC', S.hideLow, 'Hide low radar confidence', 'areas with few built-up pixels')}</section>`;
  $('src').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.src = b.dataset.k; S.cls = new Set([1, 2, 3, 4, 5]); render(); };
  $('lvl').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.level = b.dataset.k; S.cls = new Set([1, 2, 3, 4, 5]); render(); };
  $('emsChips').onclick = e => { const b = e.target.closest('button'); if (!b) return; const k = b.dataset.ems; S.ems.has(k) ? S.ems.delete(k) : S.ems.add(k); leftP(); drawP(); };
  $('emsC').onchange = e => { S.ems = e.target.checked ? new Set(['destroyed', 'damaged', 'possible']) : new Set(); leftP(); drawP(); };
  $('aoiC').onchange = e => { S.aoi = e.target.checked; drawP(); };
  $('lowC').onchange = e => { S.hideLow = e.target.checked; drawP(); rightP(); };
  $('radC').onchange = e => { S.radar = e.target.checked; drawP(); };
}
function leftT() {
  $('left').innerHTML = `
    <section class="grp"><div class="status"><b>Tashkent is ready</b><span>No earthquake now. Nothing to do.</span></div></section>
    <section class="grp"><h3>Map layer</h3>
    ${seg('tkL', [['exposure', 'Earthquake exposure', '60 % population density + 40 % built-up share, by district'],
      ['watch', 'NISAR radar visibility', 'Green: buildings the radar watches reliably. Orange: trees or construction, weaker signal.'],
      ['before', 'NISAR “before” image', 'The radar picture of the city today. A pass after an earthquake is compared with it.']], S.tk)}</section>
    <section class="grp"><h3>Why this map</h3>
    <p class="txt">Today's NISAR view of Tashkent is the “before” image. After an earthquake, the first NISAR pass is compared with it, and radar change × this exposure gives the inspection priority as soon as post-event data arrives.</p></section>
    <section class="grp"><h3>The 1966 Tashkent earthquake</h3>
    <p class="txt">26 April 1966: a very shallow (3–8 km) shock under the city centre, intensity VIII–IX (MSK-64). About 100,000 people were left homeless; reported deaths range from 10 to 200.</p></section>`;
  $('tkL').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.tk = b.dataset.k; S.cls = new Set([1, 2, 3, 4, 5]); render(); };
}
function chipClick(e) {
  const b = e.target.closest('button[data-c]'); if (!b) return; const c = +b.dataset.c;
  if (S.cls.has(c) && S.cls.size > 1) S.cls.delete(c); else S.cls.add(c);
  render();
}
function listItems() {
  const m = mode(), feats = (S.level === 'comuna' ? D.comunas : D.cells).features.map(f => f.properties)
    .filter(p => m.rank(p) != null && visible(p)).sort((a, b) => m.rank(a) - m.rank(b));
  return S.level === 'comuna' ? feats : feats.slice(0, 15);
}
const inkOn = c => c <= 2 ? '#111318' : '#fff';
function rightP() {
  const m = mode(), items = listItems(), max = Math.max(1, ...items.map(m.barv));
  const head = S.src === 'ems' ? 'Where damage was mapped' : 'Send teams here first';
  const note = S.src === 'ems' && S.level === 'comuna' ? 'Only 6 comunas have ≥ 50 % of their area mapped by Copernicus EMS. Ranked by severity: 3 × destroyed + 2 × damaged + possibly damaged.'
    : S.src === 'radar' ? (S.level === 'cell' ? 'Top 15 squares of 500 × 500 m, ranked by people potentially affected: share of buildings with a changed radar signal × residents.' : 'Ranked by people potentially affected: share of buildings with a changed radar signal × residents. Click a row to zoom.') : S.level === 'cell' ? 'Top 15 squares of 500 × 500 m. Click a row to zoom.' : 'Click a row to zoom to the comuna.';
  $('right').innerHTML = `<h3 class="big-h">${head}</h3><p class="hint">${note}</p>
    <ol class="list" id="list">${items.map((p, i) => {
      const key = (S.level === 'cell' ? 'c' + p.cell : 'm' + p.codcom), [v, u] = m.val(p), c = COL[m.cls(p)] || '#ccc';
      const name = S.level === 'cell' ? `${esc(p.area)} <span class="tag">sq ${p.cell}</span>` : esc(p.name) + (p.radar_conf === 'low' && S.src === 'radar' ? ' <span class="tag">low conf.</span>' : '');
      return `<li tabindex="0" data-key="${key}"><div class="n" style="background:${c};color:${inkOn(m.cls(p))}">${S.src === 'ems' && S.level === 'cell' ? i + 1 : Math.abs(m.rank(p))}</div>
        <div class="where"><b>${name}</b><small>${m.sub(p)}</small><div class="bar"><i style="width:${(m.barv(p) / max * 100).toFixed(1)}%;background:${c}"></i></div></div>
        <div class="val">${v}<small>${u}</small></div></li>`; }).join('') || '<li class="empty">No areas match the filters.</li>'}</ol>
    <p class="hint check"><b>${nf(M.top10_ems * 100)} %</b> of the buildings Copernicus mapped as damaged fall in the radar's top-10 squares. Spearman ρ = ${nf(M.rho_comuna, 2)} on ${M.n_comuna} comunas. <a href="#proof" data-go="proof">See the check</a></p>`;
  document.querySelectorAll('#list li[data-key]').forEach(li => {
    const k = li.dataset.key;
    li.onmouseenter = () => hl(k, true); li.onmouseleave = () => hl(k, false);
    li.onclick = li.onkeydown = e => { if (e.type === 'keydown' && e.key !== 'Enter') return; const l = byId.get(k); if (!l) return;
      userMoved = true; map.fitBounds(l.getBounds(), { maxZoom: S.level === 'cell' ? 16 : 15, padding: [40, 40] }); l.openPopup(); };
  });
}
function rightT() {
  if (S.tk === 'exposure') {
    const ex = D.tashkent.features.map(f => f.properties).filter(p => S.cls.has(tkCls(p))).sort((a, b) => a.rank_exposure - b.rank_exposure);
    $('right').innerHTML = `<h3 class="big-h">Most exposed districts</h3><p class="hint">Where an earthquake would put the most people and buildings at risk. Click a row to zoom.</p>
      <ol class="list" id="list">${ex.map(p => { const c = COL[tkCls(p)], key = 't' + p.name_en;
        return `<li tabindex="0" data-key="${esc(key)}"><div class="n" style="background:${c};color:${inkOn(tkCls(p))}">${p.rank_exposure}</div>
        <div class="where"><b>${esc(p.name_en)}${p.name_en === 'Yangihayot' ? ' <span class="tag">OSM incomplete</span>' : ''}</b><small>${nf(p.bld_n)} buildings · ${nf(p.pop_density)} people/km²</small><div class="bar"><i style="width:${(p.exposure * 100).toFixed(1)}%;background:${c}"></i></div></div>
        <div class="val">${nf(p.exposure, 2)}<small>${short(p.pop)} residents</small></div></li>`; }).join('')}</ol>
      <p class="hint check"><b>How exposure is computed.</b> Population density (Toshstat 2025) and the share of land covered by buildings (OpenStreetMap), each scaled 0–1 across the 12 districts and weighted 60 / 40. It is a pre-event risk baseline, not a damage estimate.</p>`;
    document.querySelectorAll('#list li[data-key]').forEach(li => {
      const k = li.dataset.key; li.onmouseenter = () => tkHl(k, true); li.onmouseleave = () => tkHl(k, false);
      li.onclick = li.onkeydown = e => { if (e.type === 'keydown' && e.key !== 'Enter') return; const l = tkByKey.get(k); userMoved = true; map.fitBounds(l.getBounds(), { padding: [40, 40] }); l.openPopup(); };
    });
    return;
  }
  const items = TK.tumans.features.map(f => f.properties).sort((a, b) => b.watch_pct - a.watch_pct);
  $('right').innerHTML = `<h3 class="big-h">How well the radar sees Tashkent</h3>
    <div class="bignum"><b>${nf(TS.watch_pct)} %</b><span>of the buildings can be watched reliably by the radar.</span></div>
    <ol class="list plain" id="list">${items.map(p => { const key = 'r' + tkName(p);
      return `<li tabindex="0" data-key="${esc(key)}"><div class="where"><b>${esc(tkName(p))}${p.coverage_pct < 95 ? ` <span class="tag">${nf(p.coverage_pct)} % in area</span>` : ''}</b><div class="bar"><i style="width:${p.watch_pct.toFixed(1)}%;background:#3c9a4a"></i></div></div>
      <div class="val">${nf(p.watch_pct)} %</div></li>`; }).join('')}</ol>
    <p class="hint">By district (tuman). Click a row to zoom.</p>`;
  document.querySelectorAll('#list li[data-key]').forEach(li => {
    const k = li.dataset.key; li.onmouseenter = () => tkHl(k, true); li.onmouseleave = () => tkHl(k, false);
    li.onclick = li.onkeydown = e => { if (e.type === 'keydown' && e.key !== 'Enter') return; const l = tkByKey.get(k); userMoved = true; map.fitBounds(l.getBounds(), { padding: [40, 40] }); l.openPopup(); };
  });
}
function legend() {
  let h; const chip = (c, label) => `<button type="button" data-c="${c}" class="lg ${S.cls.has(c) ? '' : 'off'}" aria-pressed="${S.cls.has(c)}"><i style="background:${COL[c]}"></i>${label}</button>`;
  if (S.city === 'P') {
    const m = mode();
    h = `<b class="lt">${m.title}</b><div class="lgs">${[5, 4, 3, 2, 1].filter(c => m.labels[c - 1] !== '—').map(c => chip(c, m.labels[c - 1])).join('')}</div>`;
    if (S.src === 'ems' && S.level === 'comuna') h += `<div class="lrow"><i style="background:#2a2f3d;border:1px dashed #7c869c"></i>not mapped by EMS</div>`;
    if (S.src === 'radar') h += `<div class="lrow"><i class="hatch"></i>dashed outline = low radar confidence</div>`;
    if (S.radar) h += `<div class="lblock"><b>NISAR coherence</b><div class="grad"></div><div class="gradl"><span>low · changed</span><span>high · stable</span></div></div>`;
    if (S.ems.size) h += `<div class="lrow"><span class="dot destroyed"></span><span class="dot damaged"></span><span class="dot possible"></span>EMS: destroyed · damaged · possible</div>`;
  } else if (S.tk === 'exposure') {
    h = `<b class="lt">Earthquake exposure index</b><div class="lgs">${['Very high', 'High', 'Medium', 'Low', 'Very low'].map((l, i) => chip(5 - i, l)).join('')}</div>
      <div class="lrow dim">No district falls in “Low”: a clear gap between the dense centre and the outer districts.</div>`;
  } else if (S.tk === 'watch') {
    h = `<b class="lt">NISAR radar visibility</b><div class="lrow"><i style="background:#3c9a4a"></i>reliably watched buildings</div><div class="lrow"><i style="background:#c8732e"></i>weaker signal (trees, construction)</div>`;
  } else {
    h = `<b class="lt">NISAR radar image, before any earthquake</b><div class="lrow dim">This is the picture a post-quake pass gets compared with.</div>`;
  }
  $('legend').innerHTML = h;
  $('legend').onclick = chipClick;
}

/* ---------- regional inset (Pereira) ---------- */
const SH = { 5: '#fecc5c', 6: '#fd8d3c', 7: '#f03b20', 8: '#bd0026' };
const imap = L.map('insetMap', { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false,
  boxZoom: false, keyboard: false, touchZoom: false }).setView([4.6, -76.2], 7);
L.geoJSON(D.shake, { style: f => ({ fillColor: SH[f.properties.mmi], fillOpacity: .88, color: EDGE, weight: .4 }), interactive: false }).addTo(imap);
const E = D.epicentre;
L.marker([E.lat, E.lon], { icon: L.divIcon({ className: '', html: '<div class="epi">★</div>', iconSize: [22, 22], iconAnchor: [11, 11] }), interactive: false })
  .bindTooltip('Epicentre', { permanent: true, direction: 'left', className: 'insetlbl', offset: [-9, 0] }).addTo(imap);
D.places.forEach(c => L.circleMarker([c.lat, c.lon], { radius: c.main ? 5 : 3, color: EDGE, weight: 1.5, fillColor: c.main ? '#ffffff' : '#aab3c7', fillOpacity: 1, interactive: false })
  .bindTooltip(c.name, { permanent: true, direction: 'right', className: 'insetlbl', offset: [5, 0] }).addTo(imap));
const fitInset = () => { imap.invalidateSize(); imap.fitBounds([[3.35, -77.45], [5.85, -75.2]]); };
let insetWanted = false;
function insetSync() { const show = S.city === 'P' && !S.radar; $('inset').hidden = !(show && insetWanted); $('insetO').hidden = !(show && !insetWanted); if (!$('inset').hidden) setTimeout(fitInset, 0); }
$('insetX').onclick = () => { insetWanted = false; insetSync(); };
$('insetO').onclick = () => { insetWanted = true; insetSync(); };

/* ---------- before / after swipe ---------- */
function clipAfter() {
  const el = radAfter.getElement(); if (!el || !S.radar) return;
  const x = mapEl.clientWidth * S.swipe, p = map.containerPointToLayerPoint([x, 0]), pos = L.DomUtil.getPosition(el);
  el.style.clipPath = `inset(0 0 0 ${Math.max(0, p.x - pos.x)}px)`;
  $('swLine').style.left = (S.swipe * 100) + '%'; $('swLine').setAttribute('aria-valuenow', Math.round(S.swipe * 100));
}
map.on('move zoom zoomend moveend viewreset resize', clipAfter);
(function () {
  const line = $('swLine'); let drag = false;
  const set = cx => { const r = mapEl.getBoundingClientRect(); S.swipe = Math.min(.97, Math.max(.03, (cx - r.left) / r.width)); clipAfter(); };
  line.addEventListener('pointerdown', e => { drag = true; line.setPointerCapture(e.pointerId); e.preventDefault(); e.stopPropagation(); });
  line.addEventListener('pointermove', e => { if (drag) set(e.clientX); });
  line.addEventListener('pointerup', () => { drag = false; }); line.addEventListener('pointercancel', () => { drag = false; });
  line.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') { S.swipe = Math.max(.03, S.swipe - .04); clipAfter(); } if (e.key === 'ArrowRight') { S.swipe = Math.min(.97, S.swipe + .04); clipAfter(); } });
})();

/* ---------- drawing ---------- */
function drawPins() {
  pins.clearLayers(); const m = mode();
  listItems().slice(0, 10).forEach((p, i) => {
    const l = byId.get(S.level === 'cell' ? 'c' + p.cell : 'm' + p.codcom); if (!l) return;
    const n = S.src === 'ems' && S.level === 'cell' ? i + 1 : Math.abs(m.rank(p));
    L.marker(l.getBounds().getCenter(), { icon: L.divIcon({ className: '', html: `<div class="rnk">${n}</div>`, iconSize: [26, 26] }), interactive: false, keyboard: false }).addTo(pins);
  });
}
function drawP() {
  [comunas, cells, outline, aoi, emsLayer, pins, radBefore, radAfter].forEach(l => map.removeLayer(l));
  if (S.radar) { radBefore.addTo(map); radAfter.addTo(map); }
  $('swipe').hidden = !S.radar;
  if (S.level === 'comuna') { comunas.setStyle(polyStyle); comunas.addTo(map); }
  else { cells.setStyle(polyStyle); cells.addTo(map); outline.addTo(map); }
  if (S.aoi) aoi.addTo(map);
  emsLayer.clearLayers(); emsLayer.addData(D.ems); if (S.ems.size) emsLayer.addTo(map);
  drawPins(); if (!S.radar) pins.addTo(map); legend(); insetSync();
  if (S.radar) { setTimeout(clipAfter, 0); setTimeout(clipAfter, 300); }
}
function render() {
  kpis();
  $('cityP').classList.toggle('on', S.city === 'P'); $('cityT').classList.toggle('on', S.city === 'T');
  $('mapTitle').innerHTML = S.city === 'P' ? 'Pereira, Colombia <small>M 7.4 earthquake, 10 August 2026</small>' : 'Tashkent, Uzbekistan <small>ready before the next earthquake</small>';
  if (S.city === 'P') { [T, tumans, districts, tkPins, tkWatch, tkBefore].forEach(l => map.removeLayer(l)); P.addTo(map); leftP(); rightP(); drawP(); }
  else {
    [P, comunas, cells, outline, aoi, emsLayer, pins, radBefore, radAfter].forEach(l => map.removeLayer(l)); $('swipe').hidden = true;
    T.addTo(map); [tkWatch, tkBefore, tumans, districts, tkPins].forEach(l => map.removeLayer(l));
    if (S.tk === 'exposure') { districts.setStyle(exStyle); districts.addTo(map); tkPins.addTo(map); } else { (S.tk === 'watch' ? tkWatch : tkBefore).addTo(map); tumans.addTo(map); } leftT(); rightT(); legend(); insetSync();
  }
}
let userMoved = false;
['pointerdown', 'wheel', 'touchstart'].forEach(ev => mapEl.addEventListener(ev, () => { userMoved = true; }, { passive: true }));
function fitCity() { map.stop(); map.invalidateSize(); map.fitBounds((S.city === 'P' ? comunas : tumans).getBounds(), { padding: [24, 24], animate: false }); }
if (window.ResizeObserver) new ResizeObserver(() => { map.invalidateSize(); if (!userMoved) fitCity(); clipAfter(); }).observe(mapEl);
window.addEventListener('load', () => { if (!userMoved) fitCity(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!userMoved) fitCity(); });
function go(city, keepView) {
  userMoved = !!keepView;
  $('left').scrollTop = 0; $('right').scrollTop = 0;
  S.city = city; S.cls = new Set([1, 2, 3, 4, 5]); render();
  if (!keepView) fitCity();
}

/* ---------- story mode (the team's six steps, word for word) ---------- */
const shakeMain = L.geoJSON(D.shake, { style: f => ({ fillColor: SH[f.properties.mmi], fillOpacity: .62, color: EDGE, weight: .6 }), interactive: false });
const rings = L.marker([E.lat, E.lon], { interactive: false, keyboard: false,
  icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="ring"></div><div class="ring"></div><div class="ring"></div><div class="epi" style="position:absolute;left:-11px;top:-11px">★</div>' }) });
const pereiraDot = L.marker([4.8133, -75.6961], { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="rnk city-pill">Pereira</div>' }) });
const pulses = L.layerGroup();
function pulseTop(n) {
  pulses.clearLayers();
  listItems().slice(0, n).forEach(p => { const l = byId.get(S.level === 'cell' ? 'c' + p.cell : 'm' + p.codcom); if (!l) return;
    L.marker(l.getBounds().getCenter(), { interactive: false, keyboard: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="pulse"></div>' }) }).addTo(pulses); });
  pulses.addTo(map);
}
const pad = { paddingTopLeft: [30, 30], paddingBottomRight: [30, 210] };
const isPt = b => Array.isArray(b) && typeof b[0] === 'number';
const fly = (b, z) => reduce ? (isPt(b) ? map.setView(b, z) : map.fitBounds(b, pad)) : (isPt(b) ? map.flyTo(b, z, { duration: 1.8 }) : map.flyToBounds(b, { duration: 1.8, ...pad }));
const STEPS = [
  { when: '10 August 2026, 07:34 local time', title: 'A magnitude 7.4 earthquake strikes western Colombia',
    text: 'The rupture is 103 km deep under Chocó. Shaking reaches intensity VII to VIII about 70 km away, in the city of Pereira.',
    run: () => { S.radar = false; go('P', true); [comunas, cells, pins, emsLayer, aoi, outline].forEach(l => map.removeLayer(l)); [shakeMain, rings, pereiraDot].forEach(l => l.addTo(map)); fly([4.62, -76.0], 8); } },
  { when: 'Minutes later', title: 'The first estimate points almost everywhere',
    text: 'Shaking × residents ranks the dense west and centre highest. It is fast, but it cannot tell which buildings actually failed.',
    run: () => { clearStory(); S.src = 'shake'; S.level = 'comuna'; render(); fly(comunas.getBounds()); } },
  { when: '12 August, two days after', title: `Copernicus maps ${nf(M.n_ems)} damaged buildings`,
    text: 'Experts read very high-resolution optical images by eye. It is accurate, but it took two days and covers only the city centre (dashed line).',
    run: () => { clearStory(); S.src = 'ems'; S.level = 'comuna'; S.ems = new Set(['destroyed', 'damaged', 'possible']); render(); fly(aoi.getBounds()); } },
  { when: '13 and 16 August, NISAR passes', title: 'Radar shows where the signal over buildings changed, across the whole city',
    text: 'NISAR images the whole city through cloud, day or night. A drop in radar coherence over buildings is an indicator of possible damage, not a confirmed collapse. Share of buildings with a changed signal × residents gives the ranking.',
    run: () => { clearStory(); S.src = 'radar'; S.level = 'comuna'; S.ems = new Set(); render(); fly(comunas.getBounds()); setTimeout(() => pulseTop(3), reduce ? 0 : 1900); } },
  { when: 'The check', title: `${nf(M.top10_ems * 100)} % of the mapped damage falls in the radar's top 10 squares`,
    text: `Those 10 squares hold only ${nf(M.top10_built * 100)} % of the city's buildings. On a sample of ${M.n_comuna} comunas the radar ranking correlates with the official one (Spearman ρ = ${nf(M.rho_comuna, 2)}). Boston, Centro and Universidad lead both rankings.`,
    run: () => { clearStory(); S.src = 'radar'; S.level = 'cell'; S.ems = new Set(['destroyed', 'damaged', 'possible']); render(); fly(aoi.getBounds()); setTimeout(() => pulseTop(3), reduce ? 0 : 1900); } },
  { when: 'Our hometown', title: 'Tashkent is ready before the next earthquake',
    text: 'The 1966 shock left 100,000 people homeless. Today NISAR\'s view of Tashkent is our “before” image, and the exposure ranking shows where 3.2 million residents are most at risk.',
    run: () => { clearStory(); S.tk = 'exposure'; go('T', true); map.invalidateSize(); map.fitBounds(tumans.getBounds(), pad); } }
];
let stI = -1;
function clearStory() { [shakeMain, rings, pereiraDot, pulses].forEach(l => map.removeLayer(l)); }
function showStep(i) {
  stI = Math.max(0, Math.min(STEPS.length - 1, i)); const st = STEPS[stI];
  $('story').hidden = false; $('mapwrap').classList.add('storying'); $('stWhen').textContent = st.when; $('stTitle').textContent = st.title; $('stText').textContent = st.text;
  $('stN').textContent = `${stI + 1} / ${STEPS.length}`;
  $('stDots').innerHTML = STEPS.map((_, k) => `<i class="${k <= stI ? 'on' : ''}"></i>`).join('');
  $('stPrev').disabled = stI === 0; $('stNext').textContent = stI === STEPS.length - 1 ? 'Explore the map' : 'Next';
  $('story').classList.remove('pop'); void $('story').offsetWidth; $('story').classList.add('pop');
  userMoved = true; st.run();
}
function endStory() { const was = stI >= 0; $('story').hidden = true; $('mapwrap').classList.remove('storying'); clearStory(); stI = -1; if (was) { userMoved = false; render(); fitCity(); } }
$('stNext').onclick = () => stI === STEPS.length - 1 ? endStory() : showStep(stI + 1);
$('stPrev').onclick = () => showStep(stI - 1);
$('stClose').onclick = endStory;
document.addEventListener('keydown', e => { if ($('story').hidden) return;
  if (e.key === 'Escape') endStory(); else if (e.key === 'ArrowRight') $('stNext').click(); else if (e.key === 'ArrowLeft' && stI > 0) showStep(stI - 1); });

$('fullMap').onclick = () => { const g = document.querySelector('.grid'), on = !g.classList.contains('wide'); g.classList.toggle('wide', on); $('fullMap').setAttribute('aria-pressed', on); $('fullMap').querySelector('span').textContent = on ? 'Show panels' : 'Expand map'; setTimeout(() => { map.invalidateSize(); if (!userMoved) fitCity(); clipAfter(); }, 60); };
$('cityP').onclick = () => { endStory(); go('P'); }; $('cityT').onclick = () => { endStory(); go('T'); };
go('P');
window.addEventListener('resize', () => map.invalidateSize());

return { startStory: () => { map.invalidateSize(); showStep(0); }, go, refit: () => { if (!userMoved) fitCity(); } };
}
