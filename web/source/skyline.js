/* "Pereira in 3D": one tower per 500 m square, built from the team's real cells.
   Height = people affected (radar) or residents × shaking (first estimate). */
import * as THREE from 'three';
import { COL, nf, esc, reduce, clamp } from './util.js';

export function initSkyline(canvas, box, D, els) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch (e) { box.classList.add('no-gl'); return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 500);
  const pivot = new THREE.Group(); scene.add(pivot);
  scene.add(new THREE.AmbientLight(0xffffff, 1.15));
  const sun = new THREE.DirectionalLight(0xffffff, 1.5); sun.position.set(30, 60, 20); scene.add(sun);
  const fill = new THREE.DirectionalLight(0x6f93e6, .9); fill.position.set(-40, 20, -30); scene.add(fill);

  const feats = D.cells.features, n = feats.length;
  const cen = feats.map(f => { const r = f.geometry.coordinates[0]; let x = 0, y = 0; for (let i = 0; i < 4; i++) { x += r[i][0]; y += r[i][1]; } return [x / 4, y / 4]; });
  const lon0 = (Math.min(...cen.map(c => c[0])) + Math.max(...cen.map(c => c[0]))) / 2, lat0 = (Math.min(...cen.map(c => c[1])) + Math.max(...cen.map(c => c[1]))) / 2;
  const kx = 111.32 * Math.cos(lat0 * Math.PI / 180) / .5, kz = 110.57 / .5;
  const P = feats.map((f, i) => ({ p: f.properties, x: (cen[i][0] - lon0) * kx, z: -(cen[i][1] - lat0) * kz }));
  { let sx = 0, sz = 0, sw = 0; P.forEach(o => { const w = o.p.pop; sx += o.x * w; sz += o.z * w; sw += w; }); P.forEach(o => { o.x -= sx / sw; o.z -= sz / sw; }); }
  const rc = r => r <= 10 ? 5 : r <= 25 ? 4 : r <= 50 ? 3 : r <= 100 ? 2 : 1;
  const MODE = {
    radar: { v: p => p.people_affected, c: p => rc(p.rank_radar), rank: p => p.rank_radar, tip: p => `${nf(p.people_affected)} people potentially affected (est.) · signal changed over ${nf(p.damage_frac_raw * 100)} % of buildings`,
      note: 'After NISAR: height = people potentially affected (buildings with a changed radar signal × residents). A few squares stand out.' },
    shake: { v: p => p.pop * Math.max(p.mmi - 5, 0), c: p => rc(p.rank_shake), rank: p => p.rank_shake, tip: p => `${nf(p.pop)} residents · MMI ${nf(p.mmi, 1)}`,
      note: 'Minutes after: height = shaking × residents. Almost every dense square looks urgent.' }
  };
  const HMAX = 17, LOW = new THREE.Color('#2b3552');
  const target = k => { const m = MODE[k], mx = Math.max(...P.map(o => m.v(o.p))); return P.map(o => ({ h: .12 + Math.pow(m.v(o.p) / mx, k === 'radar' ? 1 : 1.6) * HMAX, col: m.c(o.p) > 1 ? new THREE.Color(COL[m.c(o.p)]) : LOW.clone() })); };

  const geo = new THREE.BoxGeometry(.86, 1, .86); geo.translate(0, .5, 0);
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color: 0xffffff }), n);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); pivot.add(mesh);
  const ext = Math.max(...P.map(o => Math.abs(o.x)), ...P.map(o => Math.abs(o.z))) + 3;
  const grid = new THREE.GridHelper(ext * 2, Math.round(ext * 2), 0x375696, 0x232a3d); grid.material.transparent = true; grid.material.opacity = .4; grid.position.y = -.02; pivot.add(grid);

  let mode = 'radar', cur = target('radar').map(t => ({ h: .12, col: t.col.clone() })), goal = target('radar'), anim = 0;
  const dummy = new THREE.Object3D();
  function apply() { for (let i = 0; i < n; i++) { dummy.position.set(P[i].x, 0, P[i].z); dummy.scale.set(1, cur[i].h, 1); dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix); mesh.setColorAt(i, cur[i].col); }
    mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true; }
  apply();
  function setMode(k) { mode = k; goal = target(k); anim = 1; els.note.textContent = MODE[k].note;
    els.mode.querySelectorAll('button').forEach(b => { b.classList.toggle('on', b.dataset.k === k); b.setAttribute('aria-pressed', b.dataset.k === k); }); }
  els.mode.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setMode(b.dataset.k); });
  els.note.textContent = MODE.radar.note;

  let rot = -.55, vel = .1, tilt = .5, drag = null, hoverId = -1, mouse = null;
  function size() { const w = box.clientWidth, h = box.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  size(); new ResizeObserver(size).observe(box);
  canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', e => { const r = canvas.getBoundingClientRect(); mouse = { x: (e.clientX - r.left) / r.width * 2 - 1, y: -((e.clientY - r.top) / r.height * 2 - 1), cx: e.clientX - r.left, cy: e.clientY - r.top };
    if (drag) { rot += (e.clientX - drag.x) * .008; tilt = clamp(tilt + (e.clientY - drag.y) * .004, .3, 1.2); drag = { x: e.clientX, y: e.clientY }; vel = 0; } });
  const end = () => { drag = null; }; canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', () => { mouse = null; els.tip.hidden = true; hoverId = -1; });

  const ray = new THREE.Raycaster(), v = new THREE.Vector3(); const clock = new THREE.Clock(); let running = false, started = false;
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), .05);
    if (!drag && !reduce) { vel += (.1 - vel) * dt * .4; rot += vel * dt; }
    pivot.rotation.y = rot;
    const dist = ext * 2.25; camera.position.set(0, Math.sin(tilt) * dist, Math.cos(tilt) * dist); camera.lookAt(0, 3.4, 0);
    if (anim > 0 || !started) { started = true; const k = reduce ? 1 : Math.min(1, dt * 4.2); let far = 0;
      for (let i = 0; i < n; i++) { const d = goal[i].h - cur[i].h; cur[i].h += d * k; cur[i].col.lerp(goal[i].col, k); far = Math.max(far, Math.abs(d)); }
      anim = far > .01 ? 1 : 0; apply(); }
    renderer.render(scene, camera);
    // labels for the three squares to check first
    const m = MODE[mode], top = P.map((o, i) => [m.rank(o.p), i]).sort((a, b) => a[0] - b[0]).slice(0, 3);
    top.forEach(([r, i], k) => { const el = els.lbl[k]; v.set(P[i].x, cur[i].h + .4, P[i].z).applyMatrix4(pivot.matrixWorld).project(camera);
      el.style.transform = `translate(${((v.x * .5 + .5) * box.clientWidth).toFixed(1)}px,${((-v.y * .5 + .5) * box.clientHeight).toFixed(1)}px)`;
      const txt = `#${k + 1} · ${P[i].p.area}`; if (el.textContent !== txt) el.textContent = txt; });
    if (mouse && !drag) { ray.setFromCamera(mouse, camera); const hit = ray.intersectObject(mesh)[0]; const id = hit ? hit.instanceId : -1;
      if (id !== hoverId) { hoverId = id; if (id < 0) els.tip.hidden = true; else { const p = P[id].p; els.tip.hidden = false; els.tip.innerHTML = `<b>${esc(p.area)} · square ${p.cell}</b><span>#${m.rank(p)} of ${n} · ${m.tip(p)}</span>`; } }
      if (id >= 0) els.tip.style.transform = `translate(${mouse.cx + 14}px,${mouse.cy + 14}px)`; }
  }
  new IntersectionObserver(es => { const on = es[0].isIntersecting; if (on && !running) { running = true; clock.getDelta(); if (!started) { goal = target(mode); anim = 1; } frame(); } else if (!on) running = false; }, { threshold: .05 }).observe(box);
  return { setMode };
}
