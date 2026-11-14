#!/usr/bin/env python3
"""NASA Space Apps (RapidQuake): геоданные города — районы и здания (OSM), население (WorldPop), ShakeMap (USGS).
python ~/insar/nasa/get_geo.py pereira     # Колумбия M7.4, 10.08.2026
python ~/insar/nasa/get_geo.py tashkent    # без ShakeMap
Готовое пропустит.
"""
import json, os, subprocess, sys, urllib.request
import osmnx as ox
from shapely.geometry import box

PLACES = {  # W, S, E, N; страна WorldPop; день землетрясения (ShakeMap ищется по дате, M ≥ 7)
    'pereira': ((-75.80, 4.75, -75.60, 4.88), 'COL', '2026-08-10'),   # Перейра + Доскебрадас
    'tashkent': ((69.13, 41.22, 69.43, 41.42), 'UZB', None),
}
place = sys.argv[1] if len(sys.argv) > 1 else 'pereira'
(W, S, E, N), iso, day = PLACES[place]
OUT = os.path.expanduser(f'~/insar/nasa/geo/{place}')
WORLDPOP = f'https://data.worldpop.org/GIS/Population/Global_2000_2020/2020/{iso}/{iso.lower()}_ppp_2020.tif'
os.makedirs(OUT, exist_ok=True)
os.chdir(OUT)
area = box(W, S, E, N)
# Overpass отказывает (ResponseStatusCodeError) при перегрузке: долгий таймаут, запасной сервер — OVERPASS=...
ox.settings.requests_timeout = 600
ox.settings.overpass_settings = '[out:json][timeout:600]{maxsize}'
if os.environ.get('OVERPASS'):
    ox.settings.overpass_url = os.environ['OVERPASS']


def osm(fname, tags, cols):
    if os.path.exists(fname):
        return print('уже есть', fname)
    try:
        g = ox.features_from_polygon(area, tags)
    except Exception as e:  # уровня нет в этом городе
        return print('нет', fname, type(e).__name__)
    g = g[g.geom_type.isin(['Polygon', 'MultiPolygon'])]
    g[[c for c in cols if c in g] + ['geometry']].reset_index(drop=True).to_file(fname)
    print('ok', fname, len(g))


# Все административные границы рамки; уровень районов разный по странам — выбрать в QGIS по полю admin_level.
# (теги в osmnx объединяются через «или», поэтому admin_level в запрос не добавляем)
osm('osm_admin.gpkg', {'boundary': 'administrative'}, ['name', 'admin_level'])
osm('osm_buildings.gpkg', {'building': True}, ['building', 'building:levels'])

if not os.path.exists('worldpop.tif'):
    src = os.path.basename(WORLDPOP)
    subprocess.run(['curl', '-L', '-C', '-', '--retry', '5', '-o', src, WORLDPOP], check=True)
    subprocess.run(['gdal_translate', '-q', '-projwin', str(W), str(N), str(E), str(S), src, 'worldpop.tif'], check=True)
    os.remove(src)
    print('ok worldpop.tif')

if day and not os.path.exists('shakemap'):
    q = (f'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=7'
         f'&starttime={day}&endtime={day}T23:59:59&latitude={(S + N) / 2}&longitude={(W + E) / 2}&maxradiuskm=500')
    ev = json.load(urllib.request.urlopen(q))['features'][0]
    print('событие USGS:', ev['id'], ev['properties']['title'])
    ev = json.load(urllib.request.urlopen(ev['properties']['detail']))
    files = ev['properties']['products']['shakemap'][0]['contents']
    for key in ('download/shape.zip', 'download/raster.zip'):
        if key in files:
            subprocess.run(['curl', '-sL', '-o', os.path.basename(key), files[key]['url']], check=True)
            subprocess.run(['unzip', '-qo', os.path.basename(key), '-d', 'shakemap'], check=True)
            print('ok', key)

subprocess.run('ls -la; ls shakemap 2>/dev/null | head', shell=True)
