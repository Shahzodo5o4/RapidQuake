import { animate, inView } from 'motion';
import { $, nf, esc, reduce } from './util.js';

const EASE_OUT = [0.23, 1, 0.32, 1];

export function initUI(D, api) {
  const deck = $('deck'), M = D.metrics, TS = window.RQ_TK.sum;
  const go = id => { const el = $(id); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); };
  document.addEventListener('click', e => { const a = e.target.closest('[data-go]'); if (!a) return; e.preventDefault(); go(a.dataset.go); });
  const play = () => { go('live-map'); setTimeout(() => api.map && api.map.startStory(), reduce ? 0 : 700); };
  $('playTop').onclick = play; $('playHero').onclick = play;

  const bar = $('bar');
  const onScroll = () => bar.classList.toggle('solid', deck.scrollTop > 30);
  deck.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const links = [...document.querySelectorAll('.nav a')];
  const secIO = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle('on', a.dataset.go === en.target.id)); }), { root: deck, threshold: .45 });
  document.querySelectorAll('main > section').forEach(s => secIO.observe(s));

  /* proof */
  const pct = v => nf(v * 100) + ' %', ratio = M.pix_hit / M.pix_rand;
  $('proofSub').textContent = `Copernicus EMS analysts mapped ${nf(M.n_ems)} damaged buildings in central Pereira from optical images (activation EMSR916). We compared our radar-based ranking with their map.`;
  $('stats').innerHTML = `
    <div class="stat hot reveal"><div class="v">${pct(M.top10_ems)}</div><p>of the buildings mapped as damaged fall inside the <b>top-10 radar squares</b>, which hold only ${pct(M.top10_built)} of the city's buildings.</p>
      <div class="cmp"><span><i style="width:${M.top10_ems * 100}%"></i></span><em>${pct(M.top10_ems)} of the damage</em><span class="g"><i style="width:${M.top10_built * 100}%"></i></span><em>${pct(M.top10_built)} of all buildings</em></div></div>
    <div class="stat reveal"><div class="v">ρ = ${nf(M.rho_comuna, 2)} <small>n = ${M.n_comuna}</small></div><p><b>Spearman rank correlation</b> between the radar ranking and the official damage ranking, on a sample of ${M.n_comuna} comunas with ≥ 50 % EMS coverage (p = ${nf(M.p_comuna, 2)}). A small sample, so treat it as a first check.</p></div>
    <div class="stat reveal"><div class="v">${nf(ratio, 1)}×</div><p>Under a building mapped as damaged, the radar change flag appears ${nf(ratio, 1)} times more often than under a random building (${pct(M.pix_hit)} vs ${pct(M.pix_rand)}).</p></div>
    <div class="stat reveal"><div class="v">${nf(M.n_ems)}</div><p>buildings in the official map: ${M.n_destroyed} destroyed, ${M.n_damaged} damaged, ${M.n_possible} possibly damaged.</p></div>`;
  const V = D.validation, W = 460, H = 340, pl = 58, pb = 54, pt = 18, pr = 22, n = V.length;
  const sx = r => pl + (r - 1) / (n - 1) * (W - pl - pr), sy = r => pt + (r - 1) / (n - 1) * (H - pt - pb), tk = [...Array(n).keys()].map(i => i + 1);
  $('scatterBox').innerHTML = `<figcaption><b>Radar rank vs official rank · Spearman ρ = ${nf(M.rho_comuna, 2)}, n = ${M.n_comuna} comunas</b><span>One dot per comuna with ≥ 50 % EMS coverage. On the dashed line both rankings agree exactly.</span></figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Radar rank versus Copernicus EMS rank for ${n} comunas">
      ${tk.map(t => `<line x1="${sx(t)}" y1="${pt}" x2="${sx(t)}" y2="${H - pb}" class="gl"/><line x1="${pl}" y1="${sy(t)}" x2="${W - pr}" y2="${sy(t)}" class="gl"/>
        <text x="${sx(t)}" y="${H - pb + 20}" text-anchor="middle" class="tk">${t}</text><text x="${pl - 12}" y="${sy(t) + 5}" text-anchor="end" class="tk">${t}</text>`).join('')}
      <line x1="${sx(1)}" y1="${sy(1)}" x2="${sx(n)}" y2="${sy(n)}" class="diag"/>
      <text x="${(W + pl - pr) / 2}" y="${H - 8}" text-anchor="middle" class="ax">Radar rank (NISAR)</text>
      <text x="16" y="${(H - pb + pt) / 2}" text-anchor="middle" class="ax" transform="rotate(-90 16 ${(H - pb + pt) / 2})">Official rank (EMS)</text>
      ${V.map(v => { const end = v.radar_sub > n - 2; return `<g><circle cx="${sx(v.radar_sub)}" cy="${sy(v.ems_sub)}" r="8" class="pt"/><text x="${sx(v.radar_sub) + (end ? -14 : 14)}" y="${sy(v.ems_sub) + 5}" text-anchor="${end ? 'end' : 'start'}" class="nm">${esc(v.name)}</text></g>`; }).join('')}
    </svg>`;
  $('expert').innerHTML = `
    <p><b>Radar.</b> NISAR L-band coherence. Normal = mean of 12-day pairs before the quake. Change = normal − pair across the quake, minus the city-wide drop. Buildings only (OSM), two orbits averaged, threshold 0.15 ≈ 2× normal spread.</p>
    <p><b>Priority.</b> Share of buildings with change × WorldPop population, per 500 m square and per comuna.</p>
    <p><b>Check vs Copernicus EMS EMSR916.</b> Top-10 squares = ${pct(M.top10_built)} of built-up area and ${pct(M.top10_ems)} of damaged buildings. Radar change under a damaged building ${pct(M.pix_hit)} vs ${pct(M.pix_rand)} for random buildings (×${nf(ratio, 1)}). Spearman per square ${nf(M.rho_cells, 2)}. Stable for thresholds 0.10–0.20.</p>`;

  /* research numbers that come from the project data */
  $('rcPop').textContent = nf(M.pop_tashkent / 1e6, 2) + 'M';
  $('rcPer').innerHTML = `Today about ${nf(Math.round(M.pop_pereira / 1000))},000 people live in Pereira's 19 comunas (WorldPop 2020).<sup><a href="#src8">8</a></sup>`;
  $('rcWatch').innerHTML = `Over Tashkent, ${nf(TS.watch_pct)} % of buildings already give a signal stable enough to watch.<sup><a href="#src8">8</a></sup>`;

  /* reveals: short, ease-out, staggered within a group, once */
  if (reduce) return;
  document.documentElement.classList.add('anim');
  document.querySelectorAll('.reveal').forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    const delay = Math.min(sibs.indexOf(el), 5) * 0.05;
    inView(el, () => { animate(el, { opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0px)'] }, { duration: 0.45, delay, ease: EASE_OUT }); }, { root: deck, amount: 0.05 });
  });
  requestAnimationFrame(() => document.querySelector('.hero').classList.add('ready'));
}
