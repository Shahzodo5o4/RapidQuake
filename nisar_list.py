#!/usr/bin/env python3
"""NASA Space Apps (Dancing with SARs / RapidQuake): какие продукты NISAR есть над городом — проба перед скачиванием.
python ~/insar/nasa/nisar_list.py pereira    # землетрясение Колумбия M7.4, 10.08.2026
python ~/insar/nasa/nisar_list.py tashkent   # «норма» родного города
"""
import sys
from collections import defaultdict
import asf_search as asf

PLACES = {
    'pereira': ('POINT(-75.69 4.81)', '2026-06-15', '2026-09-15'),
    'tashkent': ('POINT(69.28 41.31)', '2026-06-15', '2026-11-10'),
}
where, start, end = PLACES[sys.argv[1] if len(sys.argv) > 1 else 'pereira']
res = asf.search(dataset='NISAR', intersectsWith=where, start=start, end=end)
print(f'найдено: {len(res)}')
groups = defaultdict(list)
for r in res:
    p = r.properties
    groups[p.get('processingLevel')].append(p)
for lvl, ps in sorted(groups.items(), key=lambda x: str(x[0])):
    print(f'{lvl}: {len(ps)}')
# Подробно — только снимки; служебные файлы (ECMWF_SMST и т.п.) без даты пропускаем.
PRODUCTS = ('GUNW', 'GCOV', 'GSLC', 'RSLC', 'RIFG', 'RUNW', 'GOFF', 'ROFF')
for lvl, ps in sorted(groups.items(), key=lambda x: str(x[0])):
    if not any(k in str(lvl).upper() for k in PRODUCTS):
        continue
    print(f'\n== {lvl}: {len(ps)}')
    for p in sorted(ps, key=lambda p: p.get('startTime') or '')[:40]:
        b = p.get('bytes') or 0  # у NISAR — словарь {файл: {'bytes': n, ...}}
        if isinstance(b, dict):
            b = sum(v.get('bytes', 0) if isinstance(v, dict) else v for v in b.values())
        t = (p.get('startTime') or '?')[:10]
        trk = f"{p.get('pathNumber') or '-'}/{p.get('frameNumber') or '-'}"
        print(f"  {t} {p.get('flightDirection') or '':<10} {trk:>9} {b / 1e9:5.1f} ГБ  {p.get('fileName') or p.get('sceneName')}")
