// Priority scale: pale yellow → amber → orange → red → magenta (check first)
export const COL = [null, '#fbe6a2', '#f9b84f', '#f5823a', '#ec4a4d', '#d81b72'];
export const $ = id => document.getElementById(id);
export const nf = (v, d = 0) => v == null || isNaN(v) ? '—' : Number(v).toLocaleString('en', { maximumFractionDigits: d, minimumFractionDigits: d });
export const short = v => v >= 1e6 ? nf(v / 1e6, 2) + 'M' : v >= 1e4 ? nf(v / 1e3) + 'k' : nf(v);
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const ease = t => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
