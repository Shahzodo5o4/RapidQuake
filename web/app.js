/* RapidQuake web map: Pereira (radar priority, validated with Copernicus EMS) and Tashkent (pre-event exposure). */
(function () {
'use strict';
const D = window.RQ, M = D.metrics;
const $ = id => document.getElementById(id);
const COL = [null, '#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
const EMS = { destroyed: ['#7f0000', 'Destroyed'], damaged: ['#e34a33', 'Damaged'], possible: ['#fdbb84', 'Possibly damaged'] };
const nf = (v, d = 0) => v == null || isNaN(v) ? '—' : Number(v).toLocaleString('en', { maximumFractionDigits: d, minimumFractionDigits: d });
const short = v => v >= 1e6 ? nf(v / 1e6, 2) + 'M' : v >= 1e4 ? nf(v / 1e3) + 'k' : nf(v);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const S = { city: 'P', level: 'comuna', src: 'radar', cls: new Set([1, 2, 3, 4, 5]), ems: new Set(['destroyed', 'damaged', 'possible']),
  aoi: true, hideLow: false, radar: false, tk: 'exposure' };

/* ---------- map ---------- */
const map = L.map('map', { zoomControl: false, zoomSnap: 0.25, attributionControl: true });
L.control.zoom({ position: 'topright' }).addTo(map);
L.control.scale({ imperial: false, position: 'bottomright' }).addTo(map);
map.attributionControl.setPrefix('Leaflet');
map.createPane('base').style.zIndex = 210;
map.createPane('radar').style.zIndex = 330;
const img = D.images;
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  maxNativeZoom: 16, maxZoom: 19, attribution: 'Basemap © Esri, HERE, Garmin, © OpenStreetMap contributors' }).addTo(map);
const baseP = L.imageOverlay(img.base_p.img, img.base_p.bounds, { pane: 'base', attribution: '' });
const baseT = L.imageOverlay(img.base_t.img, img.base_t.bounds, { pane: 'base', attribution: '' });
const radBefore = L.imageOverlay(img.before.img, img.before.bounds, { pane: 'radar', opacity: .85 });
const radAfter = L.imageOverlay(img.across.img, img.across.bounds, { pane: 'radar', opacity: .5 });
const tkWatch = L.imageOverlay(img.tk_watch.img, img.tk_watch.bounds, { pane: 'radar', opacity: .9 });

/* ---------- classification ---------- */
function rankClass(r) { return r == null ? 0 : r <= 10 ? 5 : r <= 25 ? 4 : r <= 50 ? 3 : r <= 100 ? 2 : 1; }
const MODES = {
  comuna: {
    radar: { cls: p => { const v = p.people_affected; return v <= 298 ? 1 : v <= 539 ? 2 : v <= 844 ? 3 : v <= 1469 ? 4 : 5; },
      rank: p => p.rank_radar, title: 'Radar priority: people affected (est.)', labels: ['≤ 300', '300–540', '540–840', '840–1,470', '> 1,470'],
      val: p => [nf(p.people_affected), 'people affected'], barv: p => p.people_affected,
      sub: p => `${nf(p.damage_frac * 100)} % of buildings changed on radar` },
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
      labels: ['rank > 100', '51–100', '26–50', '11–25', 'top 10'], val: p => [nf(p.people_affected), 'people affected'],
      barv: p => p.people_affected, sub: p => `${nf(p.damage_frac_raw * 100)} % of buildings changed` },
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

/* ---------- Pereira layers ---------- */
const byId = new Map();
function polyStyle(f) {
  const p = f.properties, c = mode().cls(p), on = visible(p);
  if (c === 0) return { color: '#6f8396', weight: S.level === 'comuna' ? 1 : 0, dashArray: '3 3', fillColor: '#3a4b5c', fillOpacity: S.level === 'comuna' ? .45 : 0 };
  return { color: S.level === 'comuna' ? '#0f1a24' : '#0f1a24', weight: S.level === 'comuna' ? 1.2 : .6,
    dashArray: lowConf(p) ? '4 3' : null, fillColor: COL[c], fillOpacity: (on ? (lowConf(p) ? .45 : .82) : .07) * (S.radar ? .45 : 1), opacity: on ? 1 : .35 };
}
function popup(p, isCell) {
  const rows = isCell ? [
    ['Area', esc(p.area)], ['Residents', nf(p.pop)], ['Buildings changed on radar', nf(p.damage_frac_raw * 100) + ' %'],
    ['People affected (est.)', nf(p.people_affected)], ['Radar rank', `#${p.rank_radar} of 295`], ['Shaking', 'MMI ' + nf(p.mmi, 1)],
    ['EMS damaged buildings', nf(p.n_ems)]]
    : [['Residents', nf(p.pop)], ['Buildings changed on radar', nf(p.damage_frac * 100, 1) + ' %'], ['People affected (est.)', nf(p.people_affected)],
      ['Radar rank', `#${p.rank_radar} of 19`], ['Shaking', 'MMI ' + nf(p.mmi, 1)],
      ['Copernicus EMS', p.score_ems == null ? 'outside mapped area' : `${p.n_destroyed} destroyed · ${p.n_damaged} damaged · ${p.n_possible} possible`],
      ['Radar confidence', p.radar_conf === 'low' ? 'low (few built pixels)' : 'good']];
  const head = isCell ? `Square ${p.cell}` : `Comuna ${esc(p.name)}`;
  return `<b>${head}</b><table class="pop">${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`;
}
function bindFeature(f, layer, isCell) {
  const key = (isCell ? 'c' : 'm') + (isCell ? f.properties.cell : f.properties.codcom);
  byId.set(key, layer); layer._rqKey = key;
  layer.bindPopup(() => popup(f.properties, isCell));
  layer.on('mouseover', () => hl(key, true)).on('mouseout', () => hl(key, false))
    .on('click', () => { const li = document.querySelector(`[data-key="${key}"]`); if (li) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); });
}
const comunas = L.geoJSON(D.comunas, { style: polyStyle, onEachFeature: (f, l) => bindFeature(f, l, false) });
const cells = L.geoJSON(D.cells, { style: polyStyle, onEachFeature: (f, l) => bindFeature(f, l, true) });
const outline = L.geoJSON(D.comunas, { style: { color: '#c3cfdb', weight: .9, fill: false, opacity: .55 }, interactive: false });
const aoi = L.geoJSON(D.ems_aoi, { style: { color: '#35b7a6', weight: 2, dashArray: '7 5', fill: false }, interactive: false });
const emsLayer = L.geoJSON(D.ems, {
  filter: f => S.ems.has(f.properties.dmg),
  pointToLayer: (f, ll) => L.circleMarker(ll, { radius: 4.2, color: '#0f1a24', weight: 1.1, fillColor: EMS[f.properties.dmg][0], fillOpacity: 1 })
    .bindTooltip(EMS[f.properties.dmg][1] + ' (Copernicus EMS)', { direction: 'top' })
});
const pins = L.layerGroup();
const P = L.layerGroup([baseP]);

function hl(key, on) {
  const l = byId.get(key); if (!l) return;
  if (on) { l.setStyle({ weight: 3.2, color: '#ffffff' }); l.bringToFront(); } else (S.level === 'comuna' ? comunas : cells).resetStyle(l);
  const li = document.querySelector(`[data-key="${key}"]`); if (li) li.classList.toggle('hl', on);
}

/* ---------- Tashkent ---------- */
const tkCls = p => { const e = p.exposure; return e < .3104 ? 1 : e < .4828 ? 2 : e < .6552 ? 3 : e < .8276 ? 4 : 5; };
const tkByKey = new Map();
const tumans = L.geoJSON(D.tashkent, {
  style: f => S.tk === 'exposure'
    ? { color: '#0f1a24', weight: 1.2, fillColor: COL[tkCls(f.properties)], fillOpacity: S.cls.has(tkCls(f.properties)) ? .82 : .07 }
    : { color: '#e7eef5', weight: 1.4, fill: true, fillOpacity: 0 },
  onEachFeature: (f, l) => {
    const p = f.properties, key = 't' + p.name_en; tkByKey.set(key, l);
    l.bindPopup(`<b>${esc(p.name_en)}</b><table class="pop">
      <tr><td>Residents (2025)</td><td>${nf(p.pop)}</td></tr><tr><td>Density</td><td>${nf(p.pop_density)} /km²</td></tr>
      <tr><td>Buildings (OSM)</td><td>${nf(p.bld_n)}</td></tr><tr><td>Built-up share</td><td>${nf(p.built_share * 100, 1)} %</td></tr>
      <tr><td>Exposure index</td><td>${nf(p.exposure, 2)}</td></tr><tr><td>Rank</td><td>#${p.rank_exposure} of 12</td></tr></table>
      ${p.name_en === 'Yangihayot' ? '<p style="margin:6px 0 0;color:#97a8b9">OSM building data incomplete: exposure likely underestimated.</p>' : ''}`);
    l.on('mouseover', () => tkHl(key, true)).on('mouseout', () => tkHl(key, false));
  }
});
function tkHl(key, on) {
  const l = tkByKey.get(key); if (!l) return;
  if (on) { l.setStyle({ weight: 3.2, color: '#ffffff' }); l.bringToFront(); } else tumans.resetStyle(l);
  const li = document.querySelector(`[data-key="${CSS.escape(key)}"]`); if (li) li.classList.toggle('hl', on);
}
const tkPins = L.layerGroup();
D.tashkent.features.forEach(f => { const l = tkByKey.get('t' + f.properties.name_en);
  L.marker(l.getBounds().getCenter(), { icon: L.divIcon({ className: '', html: `<div class="rnk">${f.properties.rank_exposure}</div>`, iconSize: [24, 24] }), interactive: false, keyboard: false }).addTo(tkPins); });
const tb = img.tk_watch.bounds;
const tkNoData = L.layerGroup([
  L.geoJSON(D.tk_nodata, { style: { color: '#6f8396', weight: 1, dashArray: '3 4', fillColor: '#3a4b5c', fillOpacity: .7 }, interactive: false }),
  L.rectangle(tb, { color: '#35b7a6', weight: 1.6, dashArray: '8 6', fill: false, interactive: false }),
  L.marker([tb[1][0], tb[0][1]], { opacity: 0, interactive: false, keyboard: false, icon: L.divIcon({ className: '', iconSize: [0, 0] }) })
    .bindTooltip('NISAR area processed by our team', { permanent: true, direction: 'right', className: 'insetlbl', offset: [2, -10] })
]);
const T = L.layerGroup([baseT]);

/* ---------- UI builders ---------- */
function kpis() {
  const k = S.city === 'P' ? [
    [nf(M.n_ems), 'buildings mapped as damaged in Pereira (Copernicus EMS)', ''],
    [nf(M.top10_ems * 100) + ' %', `of damaged buildings lie in the top-10 radar squares, which hold only ${nf(M.top10_built * 100)} % of all buildings`, 'hot'],
    ['ρ = ' + nf(M.rho_comuna, 2), `radar ranking vs official damage ranking (${M.n_comuna} comunas, p = ${nf(M.p_comuna, 2)})`, ''],
    [short(M.pop_pereira), 'residents in 19 comunas (WorldPop 2020)', '']
  ] : [
    [short(M.pop_tashkent), 'residents in 12 city districts (Toshstat, Oct 2025)', ''],
    ['8–9', 'seismic intensity zone, MSK-64 (whole city)', ''],
    [nf(M.tk_watch_pct) + ' %', 'of buildings in the study area are reliably visible to NISAR radar', 'hot'],
    ['1966', 'M 5.1–5.3 shock under the city centre left about 100,000 people homeless', '']
  ];
  $('kpis').innerHTML = k.map(([v, l, c]) => `<div class="kpi ${c}"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  if (!kpis.done && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    kpis.done = true;
    document.querySelectorAll('.kpi .v').forEach(el => { const t = el.textContent, m = t.match(/[\d.]+/); if (!m) return;
      const end = parseFloat(m[0]), dec = (m[0].split('.')[1] || '').length, t0 = performance.now();
      const step = now => { const k2 = Math.min(1, (now - t0) / 1100), e = 1 - Math.pow(1 - k2, 3);
        el.textContent = t.replace(m[0], (end * e).toFixed(dec)); if (k2 < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step); });
  }
}
function seg(id, items, cur, row) {
  return `<div class="seg ${row ? 'row' : ''}" id="${id}">${items.map(([k, b, s]) =>
    `<button type="button" data-k="${k}" class="${k === cur ? 'on' : ''}" aria-pressed="${k === cur}"><i></i><span><b>${b}</b>${s ? `<small>${s}</small>` : ''}</span></button>`).join('')}</div>`;
}
function chips(labels, zeroLabel) {
  return `<div class="chips" id="chips">${[5, 4, 3, 2, 1].map(c => labels[c - 1] === '—' ? '' :
    `<button type="button" data-c="${c}" class="${S.cls.has(c) ? '' : 'off'}" aria-pressed="${S.cls.has(c)}"><i style="background:${COL[c]}"></i>${labels[c - 1]}</button>`).join('')}</div>
    ${zeroLabel ? `<p class="hint">${zeroLabel}</p>` : ''}`;
}
function leftP() {
  const m = mode();
  $('left').innerHTML = `
    <h3>What was known, and when</h3>
    <div class="tl" id="src">${[['shake', '10 Aug · minutes after', 'First estimate', 'USGS ShakeMap × residents'],
      ['ems', '12 Aug · 2 days after', 'Copernicus EMS damage map', 'optical satellite, city centre only (reference)'],
      ['radar', '13 & 16 Aug · NISAR passes', 'RapidQuake radar priority', 'whole city, free data, through clouds']].map(([k, d, b, sm]) =>
      `<button type="button" data-k="${k}" class="${k === S.src ? 'on' : ''}" aria-pressed="${k === S.src}"><i></i><span><em>${d}</em><b>${b}</b><small>${sm}</small></span></button>`).join('')}</div>
    <p class="hint">Next NISAR passes every 12 days keep the map up to date.</p>
    <h3>Detail level</h3>
    ${seg('lvl', [['comuna', 'Comunas', ''], ['cell', '500 m squares', '']], S.level, true)}
    <h3>Show priority classes</h3>
    ${chips(m.labels, S.src === 'ems' && S.level === 'comuna' ? 'Grey dashed = comuna outside the area mapped by Copernicus EMS.' : '')}
    <h3>Copernicus EMS damaged buildings</h3>
    ${Object.entries(EMS).map(([k, [c, l]]) => `<label class="check"><input type="checkbox" data-ems="${k}" ${S.ems.has(k) ? 'checked' : ''}><span><span class="dot" style="background:${c}"></span>${l} (${nf(M['n_' + k])})</span></label>`).join('')}
    <label class="check"><input type="checkbox" id="aoiC" ${S.aoi ? 'checked' : ''}><span>Area mapped by Copernicus EMS</span></label>
    <h3>Radar</h3>
    <label class="check"><input type="checkbox" id="lowC" ${S.hideLow ? 'checked' : ''}><span>Hide areas with low radar confidence (few built-up pixels)</span></label>
    <label class="check"><input type="checkbox" id="radC" ${S.radar ? 'checked' : ''}><span>Show NISAR coherence image with before / after slider</span></label>
    <div class="card"><h4>How it works</h4><p>1. NISAR L-band radar images the city every 12 days, day or night, through clouds.<br>
    2. We compare image pairs before and across the quake: where buildings collapse, the signal loses coherence.<br>
    3. Share of changed buildings × residents = people affected → areas ranked for inspection.</p></div>`;
  wireLeft();
}
function leftT() {
  $('left').innerHTML = `
    <h3>Map layer</h3>
    ${seg('tkL', [['exposure', 'Earthquake exposure', '60 % population density + 40 % built-up share'], ['watch', 'NISAR radar visibility', 'green = buildings the radar sees reliably']], S.tk)}
    ${S.tk === 'exposure' ? `<h3>Show exposure classes</h3>${chips(['Very low', 'Low', 'Medium', 'High', 'Very high'], 'No district falls in "Low": a clear gap between the dense centre and the outer districts.')}` : ''}
    <div class="card warm"><h4>The 1966 Tashkent earthquake</h4><div class="big">26 April 1966</div>
    <p>Very shallow (3–8 km) shock under the city centre, intensity VIII–IX (MSK-64). About 100,000 people were left homeless; reported deaths range from 10 to 200.</p></div>
    <div class="card"><h4>Why this map</h4><p>Today's NISAR view of Tashkent is the "before" image. After an earthquake, the first NISAR pass is compared with it, and radar damage × this exposure gives the inspection priority as soon as post-event data arrives.</p></div>`;
  $('tkL').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.tk = b.dataset.k; render(); };
  const ch = $('chips'); if (ch) ch.onclick = chipClick;
}
function chipClick(e) {
  const b = e.target.closest('button'); if (!b) return; const c = +b.dataset.c;
  if (S.cls.has(c) && S.cls.size > 1) S.cls.delete(c); else S.cls.add(c);
  render();
}
function wireLeft() {
  $('src').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.src = b.dataset.k; S.cls = new Set([1, 2, 3, 4, 5]); render(); };
  $('lvl').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.level = b.dataset.k; S.cls = new Set([1, 2, 3, 4, 5]); render(); };
  $('chips').onclick = chipClick;
  document.querySelectorAll('[data-ems]').forEach(cb => cb.onchange = () => { cb.checked ? S.ems.add(cb.dataset.ems) : S.ems.delete(cb.dataset.ems); drawP(); });
  $('aoiC').onchange = e => { S.aoi = e.target.checked; drawP(); };
  $('lowC').onchange = e => { S.hideLow = e.target.checked; drawP(); rightP(); };
  $('radC').onchange = e => { S.radar = e.target.checked; drawP(); };
}

function listItems() {
  const m = mode(), feats = (S.level === 'comuna' ? D.comunas : D.cells).features.map(f => f.properties)
    .filter(p => m.rank(p) != null && visible(p)).sort((a, b) => m.rank(a) - m.rank(b));
  return S.level === 'comuna' ? feats : feats.slice(0, 15);
}
function rightP() {
  const m = mode(), items = listItems(), max = Math.max(1, ...items.map(m.barv));
  const head = S.src === 'ems' ? 'Where damage was confirmed' : 'Send teams here first';
  const note = S.src === 'ems' && S.level === 'comuna' ? '<p class="hint">Only 6 comunas have ≥ 50 % of their area mapped by Copernicus EMS. Ranked by severity: 3 × destroyed + 2 × damaged + possibly damaged.</p>'
    : S.level === 'cell' ? '<p class="hint">Top 15 squares of 500 × 500 m. Click a row to zoom.</p>' : '<p class="hint">Click a row to zoom to the comuna.</p>';
  $('right').innerHTML = `<h3>${head}</h3>${note}
    <ol class="list" id="list">${items.map((p, i) => {
      const key = (S.level === 'cell' ? 'c' + p.cell : 'm' + p.codcom), [v, u] = m.val(p), c = COL[m.cls(p)] || '#ccc';
      const name = S.level === 'cell' ? `${esc(p.area)} <span class="tag">sq ${p.cell}</span>` : esc(p.name) + (p.radar_conf === 'low' && S.src === 'radar' ? ' <span class="tag">low conf.</span>' : '');
      return `<li tabindex="0" data-key="${key}"><div class="n" style="background:${c};color:${m.cls(p) <= 2 ? '#1f2328' : '#fff'}">${S.src === 'ems' && S.level === 'cell' ? i + 1 : Math.abs(m.rank(p))}</div>
        <div class="where"><b>${name}</b><div class="bar"><i style="width:${(m.barv(p) / max * 100).toFixed(1)}%;background:${c}"></i></div></div>
        <div class="val">${v}<small>${u}</small></div></li>`; }).join('') || '<li>No areas match the filters.</li>'}</ol>
    ${validationCard()}`;
  document.querySelectorAll('#list li[data-key]').forEach(li => {
    const k = li.dataset.key;
    li.onmouseenter = () => hl(k, true); li.onmouseleave = () => hl(k, false);
    li.onclick = li.onkeydown = e => { if (e.type === 'keydown' && e.key !== 'Enter') return; const l = byId.get(k); if (!l) return;
      map.fitBounds(l.getBounds(), { maxZoom: S.level === 'cell' ? 16 : 15, padding: [40, 40] }); l.openPopup(); };
  });
  document.querySelectorAll('#scatter [data-n]').forEach(g => {
    const p = D.comunas.features.find(f => f.properties.name === g.dataset.n).properties, k = 'm' + p.codcom;
    g.onmouseenter = () => { if (S.level === 'comuna') hl(k, true); }; g.onmouseleave = () => { if (S.level === 'comuna') hl(k, false); };
  });
}
function validationCard() {
  const V = D.validation, W = 300, H = 210, pad = 36, n = V.length, sx = r => pad + (r - 1) / (n - 1) * (W - pad - 14), sy = r => 14 + (r - 1) / (n - 1) * (H - 14 - pad);
  const ticks = [...Array(n).keys()].map(i => i + 1);
  return `<div class="card warm"><h4>Validation against Copernicus EMS</h4>
    <div class="big">ρ = ${nf(M.rho_comuna, 2)}</div>
    <p>Rank of each comuna by radar vs by the official damage map (${n} comunas with ≥ 50 % EMS coverage). Points on the line = same rank.</p>
    <svg id="scatter" viewBox="0 0 ${W} ${H}" role="img" aria-label="Scatter plot of radar rank versus EMS rank for ${n} comunas">
      <line x1="${sx(1)}" y1="${sy(1)}" x2="${sx(n)}" y2="${sy(n)}" stroke="#97a8b9" stroke-dasharray="4 4" stroke-width="1.2" opacity=".6"/>
      ${ticks.map(t => `<text x="${sx(t)}" y="${H - pad + 16}" font-size="10" text-anchor="middle" fill="#97a8b9">${t}</text><text x="${pad - 10}" y="${sy(t) + 3}" font-size="10" text-anchor="end" fill="#97a8b9">${t}</text>`).join('')}
      <text x="${(W + pad) / 2}" y="${H - 4}" font-size="10.5" text-anchor="middle" fill="#c3cfdb" font-weight="600">Radar rank (NISAR)</text>
      <text x="10" y="${(H - pad) / 2}" font-size="10.5" text-anchor="middle" fill="#c3cfdb" font-weight="600" transform="rotate(-90 10 ${(H - pad) / 2})">EMS rank</text>
      ${V.map(v => `<g data-n="${esc(v.name)}" style="cursor:pointer"><circle cx="${sx(v.radar_sub)}" cy="${sy(v.ems_sub)}" r="6" fill="#ff5a36" stroke="#0f1a24" stroke-width="1.5"/>
        <text x="${sx(v.radar_sub) + (v.radar_sub > n - 2 ? -9 : 9)}" y="${sy(v.ems_sub) + 4}" font-size="10.5" fill="#e7eef5" text-anchor="${v.radar_sub > n - 2 ? 'end' : 'start'}">${esc(v.name)}</text></g>`).join('')}
    </svg>
    <p><b>${nf(M.top10_ems * 100)} %</b> of damaged buildings fall in the top-10 radar squares (${nf(M.top10_built * 100)} % of all buildings).
    Under a damaged building the radar flags change <b>${nf(M.pix_hit / M.pix_rand, 1)}×</b> more often than under a random building.</p></div>`;
}
function rightT() {
  const items = D.tashkent.features.map(f => f.properties).filter(p => S.tk !== 'exposure' || S.cls.has(tkCls(p))).sort((a, b) => a.rank_exposure - b.rank_exposure);
  $('right').innerHTML = `<h3>Most exposed districts</h3><p class="hint">Where an earthquake would put the most people and buildings at risk.</p>
    <ol class="list" id="list">${items.map(p => { const c = COL[tkCls(p)], key = 't' + p.name_en;
      return `<li tabindex="0" data-key="${esc(key)}"><div class="n" style="background:${c};color:${tkCls(p) <= 2 ? '#1f2328' : '#fff'}">${p.rank_exposure}</div>
      <div class="where"><b>${esc(p.name_en)}${p.name_en === 'Yangihayot' ? ' <span class="tag">OSM incomplete</span>' : ''}</b><div class="bar"><i style="width:${(p.exposure * 100).toFixed(1)}%;background:${c}"></i></div></div>
      <div class="val">${nf(p.exposure, 2)}<small>${short(p.pop)} residents</small></div></li>`; }).join('')}</ol>
    <div class="card"><h4>How exposure is computed</h4><p>Population density (Toshstat 2025) and the share of land covered by buildings (OpenStreetMap), each scaled 0–1 across the 12 districts and weighted 60 / 40. It is a pre-event risk baseline, not a damage estimate.</p></div>`;
  document.querySelectorAll('#list li[data-key]').forEach(li => {
    const k = li.dataset.key; li.onmouseenter = () => tkHl(k, true); li.onmouseleave = () => tkHl(k, false);
    li.onclick = li.onkeydown = e => { if (e.type === 'keydown' && e.key !== 'Enter') return; const l = tkByKey.get(k); map.fitBounds(l.getBounds(), { padding: [40, 40] }); l.openPopup(); };
  });
}
function legend() {
  let h;
  if (S.city === 'P') {
    const m = mode();
    h = `<b>${m.title}</b>${[5, 4, 3, 2, 1].filter(c => m.labels[c - 1] !== '—').map(c => `<div><i style="background:${COL[c]}"></i>${m.labels[c - 1]}</div>`).join('')}`;
    if (S.src === 'ems' && S.level === 'comuna') h += `<div><i style="background:#3a4b5c;border:1px dashed #6f8396"></i>not mapped by EMS</div>`;
    if (S.src === 'radar') h += `<div><i class="hatch"></i>dashed outline = low radar confidence</div>`;
    if (S.radar) h += `<div style="display:block;margin-top:6px"><b style="margin:0">NISAR coherence</b><div class="grad"></div><div class="gradl"><span>low · changed</span><span>high · stable</span></div></div>`;
    if (S.ems.size) h += `<div><span class="dot" style="background:#7f0000"></span><span class="dot" style="background:#e34a33"></span><span class="dot" style="background:#fdbb84"></span>EMS damaged buildings</div>`;
  } else if (S.tk === 'exposure') {
    h = `<b>Earthquake exposure index</b>${['Very high', 'High', 'Medium', 'Low', 'Very low'].map((l, i) => `<div><i style="background:${COL[5 - i]}"></i>${l}</div>`).join('')}`;
  } else {
    h = `<b>NISAR radar visibility</b><div><i style="background:#3c9a4a"></i>reliably watched buildings</div><div><i style="background:#c8732e"></i>weaker signal (trees, construction)</div><div><i style="background:#3a4b5c;border:1px dashed #6f8396"></i>outside the area we processed</div>`;
  }
  $('legend').innerHTML = h.replace('<b>', '<b class="lt" title="Show or hide legend">');
  $('legend').querySelector('.lt').onclick = () => $('legend').classList.toggle('min');
}

/* ---------- regional inset (Pereira) ---------- */
const SH = { 5: '#fecc5c', 6: '#fd8d3c', 7: '#f03b20', 8: '#bd0026' };
const imap = L.map('insetMap', { zoomControl: false, attributionControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false,
  boxZoom: false, keyboard: false, touchZoom: false }).setView([4.6, -76.2], 7);
L.geoJSON(D.shake, { style: f => ({ fillColor: SH[f.properties.mmi], fillOpacity: .85, color: '#0f1a24', weight: .4 }), interactive: false }).addTo(imap);
const E = D.epicentre;
L.marker([E.lat, E.lon], { icon: L.divIcon({ className: '', html: '<div class="epi">★</div>', iconSize: [22, 22], iconAnchor: [11, 11] }), interactive: false })
  .bindTooltip('Epicentre', { permanent: true, direction: 'left', className: 'insetlbl', offset: [-9, 0] }).addTo(imap);
D.places.forEach(c => L.circleMarker([c.lat, c.lon], { radius: c.main ? 5 : 3, color: '#0f1a24', weight: 1.5, fillColor: c.main ? '#ffffff' : '#97a8b9', fillOpacity: 1, interactive: false })
  .bindTooltip(c.name, { permanent: true, direction: c.name === 'Armenia' || c.name === 'Cali' ? 'right' : 'right', className: 'insetlbl', offset: [5, 0] }).addTo(imap));
const fitInset = () => { imap.invalidateSize(); imap.fitBounds([[3.35, -77.45], [5.85, -75.2]]); };
if (window.innerWidth < 700 || $('map').clientHeight < 560) { $('inset').hidden = true; $('insetO').hidden = false; }
$('insetX').onclick = () => { $('inset').hidden = true; $('insetO').hidden = false; };
$('insetO').onclick = () => { $('inset').hidden = false; $('insetO').hidden = true; fitInset(); };

/* ---------- drawing ---------- */
function drawPins() {
  pins.clearLayers(); const m = mode();
  listItems().slice(0, 10).forEach((p, i) => {
    const l = byId.get(S.level === 'cell' ? 'c' + p.cell : 'm' + p.codcom); if (!l) return;
    const n = S.src === 'ems' && S.level === 'cell' ? i + 1 : Math.abs(m.rank(p));
    L.marker(l.getBounds().getCenter(), { icon: L.divIcon({ className: '', html: `<div class="rnk">${n}</div>`, iconSize: [24, 24] }), interactive: false, keyboard: false }).addTo(pins);
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
  drawPins(); pins.addTo(map); legend();
}
function render() {
  kpis();
  ['cityP', 'cityT'].forEach(id => $(id).classList.toggle('on', (id === 'cityP') === (S.city === 'P')));
  const showInset = S.city === 'P'; if (!showInset) { $('inset').hidden = true; $('insetO').hidden = true; } else if ($('insetO').hidden) { $('inset').hidden = false; setTimeout(fitInset, 0); }
  if (S.city === 'P') { map.removeLayer(T); map.removeLayer(tumans); map.removeLayer(tkPins); map.removeLayer(tkNoData); map.removeLayer(tkWatch); P.addTo(map); leftP(); rightP(); drawP(); }
  else {
    [P, comunas, cells, outline, aoi, emsLayer, pins, radBefore, radAfter].forEach(l => map.removeLayer(l)); $('swipe').hidden = true;
    T.addTo(map); if (S.tk === 'watch') { tkWatch.addTo(map); tkNoData.addTo(map); } else { map.removeLayer(tkWatch); map.removeLayer(tkNoData); }
    tumans.setStyle(tumans.options.style); tumans.addTo(map); if (S.tk === 'exposure') tkPins.addTo(map); else map.removeLayer(tkPins); leftT(); rightT(); legend();
  }
}
let userMoved = false;
['pointerdown', 'wheel', 'touchstart'].forEach(ev => $('map').addEventListener(ev, () => { userMoved = true; }, { passive: true }));
function fitCity() { map.invalidateSize(); map.fitBounds((S.city === 'P' ? comunas : tumans).getBounds(), { padding: [24, 24] }); }
if (window.ResizeObserver) new ResizeObserver(() => { map.invalidateSize(); if (!userMoved) fitCity(); }).observe($('map'));
window.addEventListener('load', () => { if (!userMoved) fitCity(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!userMoved) fitCity(); });
function go(city, keepView) {
  userMoved = !!keepView;
  $('left').scrollTop = 0; $('right').scrollTop = 0;
  S.city = city; S.cls = new Set([1, 2, 3, 4, 5]); render();
  if (!keepView) fitCity();
  try { history.replaceState(null, '', city === 'P' ? '#pereira' : '#tashkent'); } catch (e) { /* ignore */ }
}
/* ---------- story mode ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const shakeMain = L.geoJSON(D.shake, { style: f => ({ fillColor: SH[f.properties.mmi], fillOpacity: .62, color: '#0f1a24', weight: .6 }), interactive: false });
const rings = L.marker([E.lat, E.lon], { interactive: false, keyboard: false,
  icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="ring"></div><div class="ring"></div><div class="ring"></div><div class="epi" style="position:absolute;left:-11px;top:-11px">★</div>' }) });
const pereiraDot = L.marker([4.8133, -75.6961], { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="rnk" style="position:absolute;left:-12px;top:-12px;width:auto;padding:0 8px;border-radius:12px">Pereira</div>' }) });
const pulses = L.layerGroup();
function pulseTop(n) {
  pulses.clearLayers(); const m = mode();
  listItems().slice(0, n).forEach(p => { const l = byId.get(S.level === 'cell' ? 'c' + p.cell : 'm' + p.codcom); if (!l) return;
    L.marker(l.getBounds().getCenter(), { interactive: false, keyboard: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="pulse"></div>' }) }).addTo(pulses); });
  pulses.addTo(map);
}
const fly = (b, z) => reduce ? (Array.isArray(b) && typeof b[0] === 'number' ? map.setView(b, z) : map.fitBounds(b, { paddingTopLeft: [30, 30], paddingBottomRight: [30, 190] })) :
  (Array.isArray(b) && typeof b[0] === 'number' ? map.flyTo(b, z, { duration: 1.8 }) : map.flyToBounds(b, { duration: 1.8, paddingTopLeft: [30, 30], paddingBottomRight: [30, 190] }));
const STEPS = [
  { when: '10 August 2026, 07:34 local time', title: 'A magnitude 7.4 earthquake strikes western Colombia',
    text: 'The rupture is 103 km deep under Chocó. Shaking reaches intensity VII to VIII about 70 km away, in the city of Pereira.',
    run: () => { go('P', true); [comunas, cells, pins, emsLayer, aoi, outline].forEach(l => map.removeLayer(l)); [shakeMain, rings, pereiraDot].forEach(l => l.addTo(map)); fly([4.62, -76.0], 8); } },
  { when: 'Minutes later', title: 'The first estimate points almost everywhere',
    text: 'Shaking × residents ranks the dense west and centre highest. It is fast, but it cannot tell which buildings actually failed.',
    run: () => { clearStory(); S.src = 'shake'; S.level = 'comuna'; render(); fly(comunas.getBounds()); } },
  { when: '12 August, two days after', title: 'Copernicus maps 182 damaged buildings',
    text: 'Experts read very high-resolution optical images by eye. It is accurate, but it took two days and covers only the city centre (dashed line).',
    run: () => { clearStory(); S.src = 'ems'; S.level = 'comuna'; render(); fly(aoi.getBounds()); } },
  { when: '13 and 16 August, NISAR passes', title: 'Radar sees which buildings changed, everywhere',
    text: 'NISAR images the whole city through cloud, day or night. Where buildings collapse, the radar signal loses coherence. Share of changed buildings × residents gives the ranking.',
    run: () => { clearStory(); S.src = 'radar'; S.level = 'comuna'; S.ems = new Set(); render(); fly(comunas.getBounds()); setTimeout(() => pulseTop(3), reduce ? 0 : 1900); } },
  { when: 'The check', title: `${nf(M.top10_ems * 100)} % of the damage sits in the radar's top 10 squares`,
    text: `Those 10 squares hold only ${nf(M.top10_built * 100)} % of the city's buildings. The comuna ranking matches the official map with ρ = ${nf(M.rho_comuna, 2)}. Send teams to Boston, Centro and Universidad first.`,
    run: () => { clearStory(); S.src = 'radar'; S.level = 'cell'; S.ems = new Set(['destroyed', 'damaged', 'possible']); render(); fly(aoi.getBounds()); setTimeout(() => pulseTop(3), reduce ? 0 : 1900); } },
  { when: 'Our hometown', title: 'Tashkent is ready before the next earthquake',
    text: 'The 1966 shock left 100,000 people homeless. Today NISAR\'s view of Tashkent is our "before" image, and the exposure ranking shows where 3.2 million residents are most at risk.',
    run: () => { clearStory(); go('T', true); map.invalidateSize(); map.fitBounds(tumans.getBounds(), { paddingTopLeft: [30, 30], paddingBottomRight: [30, 190] }); } }
];
let stI = -1, stTimer = null;
function clearStory() { [shakeMain, rings, pereiraDot, pulses].forEach(l => map.removeLayer(l)); }
function showStep(i) {
  stI = Math.max(0, Math.min(STEPS.length - 1, i)); const st = STEPS[stI];
  $('story').hidden = false; document.querySelector('.mapwrap').classList.add('storying'); $('stWhen').textContent = st.when; $('stTitle').textContent = st.title; $('stText').textContent = st.text;
  $('stDots').innerHTML = STEPS.map((_, k) => `<i class="${k <= stI ? 'on' : ''}"></i>`).join('');
  $('stPrev').disabled = stI === 0; $('stNext').textContent = stI === STEPS.length - 1 ? 'Explore the map' : 'Next';
  userMoved = true; st.run();
}
function endStory() { const was = stI >= 0; $('story').hidden = true; document.querySelector('.mapwrap').classList.remove('storying'); clearStory(); stI = -1; if (was) { userMoved = false; fitCity(); } }
$('play').onclick = () => showStep(0);
$('stNext').onclick = () => stI === STEPS.length - 1 ? endStory() : showStep(stI + 1);
$('stPrev').onclick = () => showStep(stI - 1);
$('stClose').onclick = endStory;
document.addEventListener('keydown', e => { if ($('story').hidden) return;
  if (e.key === 'Escape') endStory(); else if (e.key === 'ArrowRight') $('stNext').click(); else if (e.key === 'ArrowLeft' && stI > 0) showStep(stI - 1); });

$('cityP').onclick = () => { endStory(); go('P'); }; $('cityT').onclick = () => { endStory(); go('T'); };
$('swipeR').oninput = e => radAfter.setOpacity(e.target.value / 100);
radAfter.setOpacity(.5);
go(location.hash === '#tashkent' ? 'T' : 'P');
window.addEventListener('resize', () => map.invalidateSize());
})();
