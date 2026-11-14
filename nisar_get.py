#!/usr/bin/env python3
"""NASA Space Apps (RapidQuake): скачать выбранные продукты NISAR (PR) — по одному, с докачкой и проверкой HDF5.
python ~/insar/nasa/nisar_get.py pereira     # ~65 ГБ: 9 GUNW + 6 GCOV
python ~/insar/nasa/nisar_get.py tashkent    # ~7 ГБ: 3 GUNW «нормы»
Готовое (*.ok) пропустит; запускать в tmux.
"""
import os, subprocess, sys
import asf_search as asf
import h5py

# (продукт, трек, первая дата) — землетрясение 10.08.2026 12:34 UTC
PLACES = {
    'pereira': ('POINT(-75.69 4.81)', '2026-06-15', '2026-09-15', [
        # трек 47 A: 3 пары «до–до», пара через событие (24 дня), 1 «после–после»
        *[('GUNW', '047', d) for d in ('20260617', '20260629', '20260711', '20260723', '20260816')],
        # трек 11 D: 2 пары «до–до», пара через событие (24 дня), 1 «после–после»
        *[('GUNW', '011', d) for d in ('20260626', '20260708', '20260720', '20260813')],
        # GCOV HH+HV: норма, последний «до», первый «после»
        *[('GCOV', '047', d) for d in ('20260711', '20260723', '20260816')],
        *[('GCOV', '011', d) for d in ('20260708', '20260720', '20260813')],
    ]),
    'tashkent': ('POINT(69.28 41.31)', '2026-06-15', '2026-08-01', [
        *[('GUNW', '084', d) for d in ('20260620', '20260702', '20260714')],
    ]),
}
place = sys.argv[1] if len(sys.argv) > 1 else 'pereira'
where, start, end, want = PLACES[place]
OUT = os.path.expanduser(f'~/insar/nasa/nisar/{place}')
os.makedirs(OUT, exist_ok=True)
os.chdir(OUT)

urls = {}
for r in asf.search(dataset='NISAR', intersectsWith=where, start=start, end=end):
    f, url = r.properties.get('fileName') or '', r.properties.get('url') or ''
    a = f.split('_')
    if len(a) > 11 and a[2] == 'PR' and (a[3], a[5], a[11][:8]) in want and f.endswith('.h5'):
        urls[(a[3], a[5], a[11][:8])] = url
missing = [w for w in want if w not in urls]
print(f'{place}: нашлось {len(urls)} из {len(want)}' + (f'; нет: {missing}' if missing else ''))

for w in want:  # GUNW первыми — они главные и меньше
    if w not in urls:
        continue
    u = urls[w]
    f = os.path.basename(u)
    if os.path.exists(f + '.ok'):
        continue
    ok = subprocess.run(['curl', '-s', '-n', '-L', '-c', '/tmp/ck', '-b', '/tmp/ck', '-C', '-',
                         '--retry', '5', '--retry-delay', '30', '-o', f, u]).returncode == 0
    try:
        ok = ok and bool(h5py.File(f, 'r').keys())
    except OSError:
        ok = False
    if ok:
        open(f + '.ok', 'w').close()
    print(subprocess.run(['date', '+%H:%M'], capture_output=True, text=True).stdout.strip(),
          'ok  ' if ok else 'FAIL', *w)

subprocess.run(f'ls *.ok | wc -l; du -sh {OUT}; df -h /data | tail -1', shell=True)
