import { initGlobe } from './globe.js';
import { initSkyline } from './skyline.js';
import { initMap } from './map.js';
import { initUI } from './ui.js';
import { $ } from './util.js';

const D = window.RQ, api = {};
const safe = (name, fn) => { try { return fn(); } catch (e) { console.error('[RapidQuake] ' + name + ' failed', e); return null; } };
api.map = safe('map', () => initMap(D));
safe('ui', () => initUI(D, api));
safe('globe', () => initGlobe($('globe'), document.querySelector('.hero'), D, { p: $('glP'), t: $('glT') }));
safe('skyline', () => initSkyline($('skyC'), $('sky'), D, { mode: $('skyMode'), tip: $('skyTip'), note: $('skyNote'), lbl: [$('skyL0'), $('skyL1'), $('skyL2')] }));
