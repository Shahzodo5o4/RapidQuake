/* Hero: dotted Earth, radar satellite, seismic wave from the real epicentre (4.99 N, 76.29 W). */
import * as THREE from 'three';
import LAND from './land.json';
import { reduce, clamp, ease } from './util.js';

const R = 1, DEG = Math.PI / 180;
const v3 = (lat, lon, r = R) => new THREE.Vector3(r * Math.cos(lat * DEG) * Math.sin(lon * DEG), r * Math.sin(lat * DEG), r * Math.cos(lat * DEG) * Math.cos(lon * DEG));
const BLUE = new THREE.Color('#375696'), PINK = new THREE.Color('#E94B83');

export function initGlobe(canvas, hero, D, labels) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { hero.classList.add('no-gl'); return null; }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);
  camera.position.set(0, 0, 5.2);

  const rig = new THREE.Group(); scene.add(rig);          // screen placement + shake
  const globe = new THREE.Group(); globe.rotation.order = 'XYZ'; rig.add(globe);

  /* stars */
  { const n = 1400, p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const u = Math.random() * 2 - 1, t = Math.random() * 6.283, s = Math.sqrt(1 - u * u), r = 40 + Math.random() * 40; p[i * 3] = r * s * Math.cos(t); p[i * 3 + 1] = r * u; p[i * 3 + 2] = r * s * Math.sin(t); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const stars = new THREE.Points(g, new THREE.PointsMaterial({ color: 0x9db6ee, size: 1.4 * dpr, sizeAttenuation: false, transparent: true, opacity: .55, depthWrite: false }));
    scene.add(stars); scene.userData.stars = stars; }

  /* solid core with a blue rim */
  const core = new THREE.Mesh(new THREE.SphereGeometry(R * 0.992, 96, 96), new THREE.ShaderMaterial({
    uniforms: { uC: { value: BLUE } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
    fragmentShader: 'uniform vec3 uC; varying vec3 vN; varying vec3 vV; void main(){ float f=pow(1.-max(dot(vN,vV),0.),2.6); vec3 c=mix(vec3(.028,.034,.052),uC*1.5,f*.85); gl_FragColor=vec4(c,1.); }'
  })); globe.add(core);
  /* atmosphere */
  rig.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.22, 64, 64), new THREE.ShaderMaterial({
    uniforms: { uC: { value: BLUE } }, side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    vertexShader: 'varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'uniform vec3 uC; varying vec3 vN; void main(){ float f=pow(clamp(-vN.z*1.7,0.,1.),2.4)*.85; gl_FragColor=vec4(uC*1.7,1.)*f*.8; }'
  })));
  /* graticule */
  { const pts = [];
    for (let lat = -60; lat <= 60; lat += 30) for (let lon = -180; lon < 180; lon += 4) { pts.push(v3(lat, lon, 1.001), v3(lat, lon + 4, 1.001)); }
    for (let lon = -180; lon < 180; lon += 30) for (let lat = -88; lat < 88; lat += 4) { pts.push(v3(lat, lon, 1.001), v3(lat + 4, lon, 1.001)); }
    globe.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x5b7fd0, transparent: true, opacity: .13 }))); }

  /* land dots */
  const n = LAND.length / 2, pos = new Float32Array(n * 3), rnd = new Float32Array(n);
  for (let i = 0; i < n; i++) { const p = v3(LAND[i * 2] / 100, LAND[i * 2 + 1] / 100); pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z; rnd[i] = Math.random(); }
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); dg.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 1));
  const U = { uT: { value: 0 }, uWave: { value: -10 }, uIntro: { value: reduce ? 1 : 0 }, uEpi: { value: v3(D.epicentre.lat, D.epicentre.lon) }, uSat: { value: new THREE.Vector3(0, 0, 1) },
    uPx: { value: dpr }, uScale: { value: 1 }, uBlue: { value: new THREE.Color('#6f93e6') }, uPink: { value: PINK } };
  const dots = new THREE.Points(dg, new THREE.ShaderMaterial({ uniforms: U, transparent: true, depthWrite: false,
    vertexShader: `
      attribute float aRnd; uniform float uT,uWave,uIntro,uPx,uScale; uniform vec3 uEpi,uSat; varying float vW; varying float vB; varying float vA; varying float vF;
      void main(){
        vec3 nrm=normalize(position);
        float ang=acos(clamp(dot(nrm,uEpi),-1.,1.)); float w=0.;
        for(int k=0;k<3;k++){ float tt=uWave-float(k)*.55; float rad=tt*.42; float d=ang-rad; float fade=clamp(1.-rad/2.6,0.,1.)*step(0.,tt); w+=exp(-d*d*260.)*fade; }
        float beam=smoothstep(.2,.0,acos(clamp(dot(nrm,uSat),-1.,1.)));
        float tw=.75+.25*sin(uT*1.7+aRnd*40.);
        float it=clamp(uIntro*1.35-aRnd*.35,0.,1.); it=1.-pow(1.-it,3.);
        vec3 p=nrm*(1.+w*.085+beam*.012)+nrm*(1.-it)*(1.2+aRnd*2.4);
        vec4 mv=modelViewMatrix*vec4(p,1.);
        vF=smoothstep(-.15,.35,normalize(normalMatrix*nrm).z);
        gl_PointSize=(2.1+w*5.+beam*2.6)*uPx*uScale*tw*(5.2/-mv.z);
        vW=w; vB=beam; vA=it; gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `
      uniform vec3 uBlue,uPink; varying float vW; varying float vB; varying float vA; varying float vF;
      void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard;
        vec3 col=mix(uBlue,uPink,clamp(vW*1.6,0.,1.)); col=mix(col,vec3(1.),clamp(vB*.9+vW*.35,0.,1.));
        gl_FragColor=vec4(col,smoothstep(.5,.25,d)*vA*(.35+.65*vF)); }`
  })); globe.add(dots);

  /* city markers + rings at the epicentre */
  const mk = (lat, lon, col, s) => { const m = new THREE.Mesh(new THREE.SphereGeometry(s, 16, 16), new THREE.MeshBasicMaterial({ color: col })); m.position.copy(v3(lat, lon, 1.012)); globe.add(m); return m; };
  const PER = [4.8133, -75.6961], TAS = [41.3111, 69.2797];
  mk(PER[0], PER[1], 0xffffff, .014); mk(TAS[0], TAS[1], 0xffffff, .014);
  const ringMat = () => new THREE.MeshBasicMaterial({ color: PINK, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
  const rings = [0, 1, 2].map(() => { const m = new THREE.Mesh(new THREE.RingGeometry(.95, 1, 64), ringMat()); const p = v3(D.epicentre.lat, D.epicentre.lon, 1.006); m.position.copy(p); m.lookAt(p.clone().multiplyScalar(2)); globe.add(m); return m; });
  const halo = (lat, lon, col) => { const m = new THREE.Mesh(new THREE.RingGeometry(.03, .036, 40), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .9, side: THREE.DoubleSide, depthWrite: false })); const p = v3(lat, lon, 1.008); m.position.copy(p); m.lookAt(p.clone().multiplyScalar(2)); globe.add(m); return m; };
  const hP = halo(PER[0], PER[1], PINK), hT = halo(TAS[0], TAS[1], 0xffffff);

  /* arc Pereira → Tashkent, with travelling packets */
  const a0 = v3(PER[0], PER[1]).normalize(), a1 = v3(TAS[0], TAS[1]).normalize(), om = Math.acos(a0.dot(a1));
  const arcAt = t => { const s0 = Math.sin((1 - t) * om) / Math.sin(om), s1 = Math.sin(t * om) / Math.sin(om); return a0.clone().multiplyScalar(s0).add(a1.clone().multiplyScalar(s1)).multiplyScalar(1.01 + .33 * Math.sin(Math.PI * t)); };
  { const pts = []; for (let i = 0; i <= 120; i++) pts.push(arcAt(i / 120));
    globe.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xE94B83, transparent: true, opacity: .38 }))); }
  const packets = [0, 1, 2].map(() => { const m = new THREE.Mesh(new THREE.SphereGeometry(.011, 10, 10), new THREE.MeshBasicMaterial({ color: 0xff9dbd })); globe.add(m); return m; });

  /* satellite + radar beam (scene space: it keeps its own orbit while the Earth turns) */
  const sat = new THREE.Group(); rig.add(sat);
  { const body = new THREE.Mesh(new THREE.BoxGeometry(.05, .05, .09), new THREE.MeshBasicMaterial({ color: 0xeef2fb })); sat.add(body);
    const pg = new THREE.BoxGeometry(.17, .004, .058);
    [-1, 1].forEach(s => { const p = new THREE.Mesh(pg, new THREE.MeshBasicMaterial({ color: 0x375696 })); p.position.x = s * .115; sat.add(p);
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(pg), new THREE.LineBasicMaterial({ color: 0x9db6ee })); e.position.x = s * .115; sat.add(e);
      for (let k = -2; k <= 2; k++) { const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(s * .115 + k * .028, .003, -.029), new THREE.Vector3(s * .115 + k * .028, .003, .029)]), new THREE.LineBasicMaterial({ color: 0x9db6ee, transparent: true, opacity: .7 })); sat.add(l); } });
    // NISAR's signature: the large mesh reflector on a boom
    const boom = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, .025, 0), new THREE.Vector3(0, .15, .05)]), new THREE.LineBasicMaterial({ color: 0xeef2fb })); sat.add(boom);
    const refl = new THREE.Group(); refl.position.set(0, .16, .06); refl.rotation.x = -.9;
    refl.add(new THREE.Mesh(new THREE.CircleGeometry(.085, 40), new THREE.MeshBasicMaterial({ color: 0xe9c46a, transparent: true, opacity: .5, side: THREE.DoubleSide, depthWrite: false })));
    refl.add(new THREE.Mesh(new THREE.RingGeometry(.08, .088, 40), new THREE.MeshBasicMaterial({ color: 0xfff1c9, side: THREE.DoubleSide })));
    sat.add(refl); sat.scale.setScalar(1.25); }
  const beamU = { uT: { value: 0 }, uC: { value: PINK } };
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(.006, .2, 1, 40, 1, true), new THREE.ShaderMaterial({ uniforms: beamU, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'uniform float uT; uniform vec3 uC; varying vec2 vUv; void main(){ float s=.5+.5*sin((vUv.y*9.+uT*5.)*6.283); float a=(.1+.22*pow(s,6.))*(.25+.75*vUv.y); gl_FragColor=vec4(uC*1.3,a); }' }));
  rig.add(beam);

  /* focus cycle */
  const FOC = [{ lat: PER[0], lon: PER[1] }, { lat: TAS[0], lon: TAS[1] }];
  let foc = 0, focT = 0, rotY = (-FOC[0].lon + 70) * DEG, rotX = 0, userY = 0, userX = 0, lastUser = -99;
  let side = 1, gx = 0, gy = 0, gs = 1;
  function size() {
    const w = hero.clientWidth, h = hero.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    const wide = w / h > 1.15 && w > 900; side = wide ? 1 : 0;
    const halfH = Math.tan(camera.fov / 2 * DEG) * camera.position.z, halfW = halfH * camera.aspect;
    gs = wide ? Math.min(1.12, halfW * .47, halfH * .86) : Math.min(1.05, halfW * .95);
    gx = wide ? halfW - gs * 1.2 : 0; gy = wide ? halfH * .03 : -halfH * .42;
    rig.position.set(gx, gy, 0); rig.scale.setScalar(gs); U.uScale.value = gs * (h / 900);
  }
  size(); new ResizeObserver(size).observe(hero);

  /* drag to spin */
  let drag = null;
  canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); canvas.classList.add('grab'); });
  canvas.addEventListener('pointermove', e => { if (!drag) return; userY += (e.clientX - drag.x) * .006; userX = clamp(userX + (e.clientY - drag.y) * .004, -.9, .9); drag = { x: e.clientX, y: e.clientY }; lastUser = clock.getElapsedTime(); });
  const end = () => { drag = null; canvas.classList.remove('grab'); }; canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  let mx = 0, my = 0; hero.addEventListener('pointermove', e => { mx = e.clientX / hero.clientWidth - .5; my = e.clientY / hero.clientHeight - .5; });

  const clock = new THREE.Clock(); let running = true, quakeAt = -1, shake = 0, quakeDone = false, t0 = 0;
  const tmp = new THREE.Vector3(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
  function quake(t) { quakeAt = t; shake = .5; }
  function place(el, lat, lon) {
    tmp.copy(v3(lat, lon, 1.02)).applyMatrix4(globe.matrixWorld); const front = tmp.clone().sub(rig.position).normalize().z;
    tmp.project(camera); const x = (tmp.x * .5 + .5) * hero.clientWidth, y = (-tmp.y * .5 + .5) * hero.clientHeight;
    el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`; el.style.opacity = clamp((front - .25) * 4, 0, 1) * U.uIntro.value;
    el.classList.toggle('flip', x > hero.clientWidth - 330);
  }
  function frame() {
    if (!running) return; requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), .05), t = clock.getElapsedTime();
    U.uT.value = t; beamU.uT.value = t;
    if (!reduce) U.uIntro.value = ease((t - .15) / 2.3);
    // first quake fires as the globe finishes assembling, then repeats whenever Pereira is in view
    if (!quakeDone && t > 1.9) { quakeDone = true; quake(t); }
    focT += dt;
    if (!reduce && t - lastUser > 5) { if (focT > (foc === 0 ? 10 : 7)) { foc = 1 - foc; focT = 0; userY = 0; userX = 0; if (foc === 0) setTimeout(() => quake(clock.getElapsedTime()), 1500); } }
    const f = FOC[foc]; const ty = (-f.lon + (side ? 8 : 0)) * DEG + userY, tx = f.lat * .82 * DEG + userX;
    let dy = ty - rotY; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); rotY += dy * Math.min(1, dt * 1.6); rotX += (tx - rotX) * Math.min(1, dt * 1.6);
    globe.rotation.set(rotX + my * .05, rotY + mx * .08, 0);
    U.uWave.value = quakeAt < 0 ? -10 : t - quakeAt;
    shake *= Math.pow(.02, dt); const sh = shake > .01 ? shake : 0;
    rig.position.set(gx + (Math.random() - .5) * .05 * sh, gy + (Math.random() - .5) * .05 * sh, 0);
    rings.forEach((m, k) => { const tt = (t - quakeAt - k * .45); const s = tt > 0 && quakeAt > 0 ? (tt % 2.4) / 2.4 : 0; m.scale.setScalar(.02 + s * .2); m.material.opacity = s > 0 && t - quakeAt < 9 ? (1 - s) * .85 : 0; });
    const pu = 1 + .35 * Math.sin(t * 3); hP.scale.setScalar(pu); hT.scale.setScalar(1 + .35 * Math.sin(t * 3 + 1.5));
    packets.forEach((m, k) => m.position.copy(arcAt((t * .16 + k / 3) % 1)));
    // satellite orbit (tilted, passes over the visible face)
    const a = t * .42 + 1.2, orad = 1.5;
    tmp.set(Math.sin(a) * orad, Math.cos(a) * orad * .55, Math.cos(a) * orad * .82 + .2).applyAxisAngle(new THREE.Vector3(0, 0, 1), -.5);
    sat.position.copy(tmp); sat.lookAt(0, 0, 0); sat.rotateZ(.7);
    const dir = tmp.clone().normalize(), dist = tmp.length() - 1;
    beam.position.copy(dir.clone().multiplyScalar(1 + dist / 2)); beam.scale.set(1, dist, 1); q.setFromUnitVectors(up, dir); beam.quaternion.copy(q);
    beam.visible = dir.z > -.2;
    U.uSat.value.copy(dir).applyQuaternion(globe.quaternion.clone().invert());
    scene.userData.stars.rotation.y = t * .004;
    renderer.render(scene, camera);
    place(labels.p, PER[0], PER[1]); place(labels.t, TAS[0], TAS[1]);
  }
  new IntersectionObserver(es => { const on = es[0].isIntersecting; if (on && !running) { running = true; clock.getDelta(); frame(); } else if (!on) running = false; }, { threshold: .02 }).observe(hero);
  frame();
  return { quake: () => quake(clock.getElapsedTime()) };
}
