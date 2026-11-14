#!/usr/bin/env python3
"""NASA Space Apps (RapidQuake): вырезать город из продуктов NISAR в GeoTIFF и посчитать карту провала когерентности.
python ~/insar/nasa/nisar_cut.py pereira     # вырезка + анализ по трекам 47 A и 11 D
python ~/insar/nasa/nisar_cut.py tashkent    # вырезка + «норма» когерентности
Вход ~/insar/nasa/nisar/<город>/*.h5, выход ~/insar/nasa/cut/<город>/ (*.tif + quicklook *.png). Готовое пропустит.
"""
import glob, os, sys
import h5py
import numpy as np
import rasterio
from rasterio.transform import from_origin
from pyproj import Transformer
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

PLACES = {'pereira': (-75.80, 4.75, -75.60, 4.88), 'tashkent': (69.13, 41.22, 69.43, 41.42)}  # W, S, E, N
EVENT = '20260810'   # 12:34 UTC
GUNW = 'science/LSAR/GUNW/grids/frequencyA/wrappedInterferogram'   # когерентность, ~20 м
GCOV = 'science/LSAR/GCOV/grids/frequencyA'                       # HHHH, HVHV, ~10 м
place = sys.argv[1] if len(sys.argv) > 1 else 'pereira'
W, S, E, N = PLACES[place]
HOME = os.path.expanduser(os.environ.get('RQ_HOME', '~/insar/nasa'))             # рабочая папка (репетиция — другая)
IN = os.path.expanduser(os.environ.get('RQ_NISAR', f'{HOME}/nisar')) + f'/{place}'   # где лежат .h5 (можно /mnt/h/...)
OUT = f'{HOME}/cut/{place}'
os.makedirs(OUT, exist_ok=True)


def epsg_of(f, grp):
    for p in (f'{grp}/projection', f'{grp}/HH/projection'):
        if p in f:
            d = f[p]
            return int(d.attrs.get('epsg_code', d[()]))
    raise KeyError('нет projection в ' + grp)


def cut(h5, grp, layer, out):
    """Вырезать bbox города из слоя HDF5 и записать GeoTIFF (UTM кадра)."""
    if os.path.exists(out):
        return
    with h5py.File(h5, 'r') as f:
        epsg = epsg_of(f, grp)
        x, y = f[f'{grp}/xCoordinates'][:], f[f'{grp}/yCoordinates'][:]
        tr = Transformer.from_crs(4326, epsg, always_xy=True)
        xs, ys = tr.transform([W, E, W, E], [S, S, N, N])
        i = np.where((x >= min(xs)) & (x <= max(xs)))[0]
        j = np.where((y >= min(ys)) & (y <= max(ys)))[0]
        a = f[f'{grp}/{layer}'][j[0]:j[-1] + 1, i[0]:i[-1] + 1].astype('float32')
    dx, dy = x[1] - x[0], y[1] - y[0]
    if dy > 0:  # строки снизу вверх → перевернуть
        a, dy = a[::-1], -dy
    a[~np.isfinite(a) | (a <= 0)] = np.nan
    top = y[j].max()
    with rasterio.open(out, 'w', driver='GTiff', height=a.shape[0], width=a.shape[1], count=1, dtype='float32',
                       crs=f'EPSG:{epsg}', transform=from_origin(x[i[0]] - dx / 2, top - dy / 2, dx, -dy),
                       nodata=np.nan, compress='deflate') as d:
        d.write(a, 1)
    print('ok', os.path.basename(out), a.shape)


# 1. Вырезка
coh, cov = {}, {}  # трек → {(d1, d2): tif}, трек → {дата: (HH, HV)}
for h5 in sorted(glob.glob(f'{IN}/*.h5')):
    a = os.path.basename(h5).split('_')
    trk, d1 = a[5], a[11][:8]
    if a[3] == 'GUNW':
        d2 = a[13][:8]
        t = f'{OUT}/coh_{trk}_{d1}_{d2}.tif'
        cut(h5, GUNW, 'HH/coherenceMagnitude', t)
        coh.setdefault(trk, {})[(d1, d2)] = t
    elif a[3] == 'GCOV':
        hh, hv = f'{OUT}/gcov_{trk}_{d1}_HH.tif', f'{OUT}/gcov_{trk}_{d1}_HV.tif'
        cut(h5, GCOV, 'HHHH', hh)
        cut(h5, GCOV, 'HVHV', hv)
        cov.setdefault(trk, {})[d1] = (hh, hv)


def read(t):
    with rasterio.open(t) as d:
        return d.read(1), d.profile


def save(name, a, prof, title, vmin, vmax, cmap):
    with rasterio.open(f'{OUT}/{name}.tif', 'w', **prof) as d:
        d.write(a.astype('float32'), 1)
    plt.figure(figsize=(7, 6))
    plt.imshow(a, vmin=vmin, vmax=vmax, cmap=cmap)
    plt.colorbar(shrink=0.8)
    plt.title(title)
    plt.axis('off')
    plt.savefig(f'{OUT}/{name}.png', dpi=110, bbox_inches='tight')
    plt.close()
    print('ok', name, f'медиана {np.nanmedian(a):.2f}')


# 2. Когерентность: норма (до–до), провал в паре через событие, восстановление после
for trk, pairs in sorted(coh.items()):
    pre = [t for (d1, d2), t in sorted(pairs.items()) if d2 <= EVENT]
    co = [t for (d1, d2), t in pairs.items() if d1 < EVENT < d2]
    post = [t for (d1, d2), t in sorted(pairs.items()) if d1 >= EVENT]
    arrs = [read(t)[0] for t in pre + co + post]
    prof = read(pre[0])[1] if pre else read(co[0])[1]
    if len({a.shape for a in arrs}) > 1:
        print(f'трек {trk}: разные сетки {[a.shape for a in arrs]} — пропуск'); continue
    norm = np.nanmean(arrs[:len(pre)], axis=0)
    save(f'normal_{trk}', norm, prof, f'{place} {trk}: норма когерентности ({len(pre)} пар до)', 0, 1, 'gray')
    if len(pre) > 1:
        save(f'spread_{trk}', np.nanstd(arrs[:len(pre)], axis=0), prof, f'{trk}: разброс нормы', 0, 0.3, 'magma')
    if not co:
        continue
    c = arrs[len(pre)]
    drop = norm - c
    stable = norm >= 0.3                                   # где обычно когерентно (застройка, голая земля)
    adj = drop - np.nanmedian(drop[stable])                # убрать общий спад за 24 дня против 12
    save(f'coh_co_{trk}', c, prof, f'{trk}: когерентность через событие', 0, 1, 'gray')
    save(f'dpm_{trk}', np.where(stable, adj, np.nan), prof, f'{trk}: провал сверх обычного (damage proxy)',
         -0.3, 0.3, 'RdBu_r')
    if post:
        save(f'recovery_{trk}', arrs[-len(post)] - c, prof, f'{trk}: после–после минус через событие', -0.3, 0.3, 'RdBu_r')

# 3. GCOV: изменение яркости HH и HV в дБ — после против до, и обычное изменение до–до
for trk, dates in sorted(cov.items()):
    ds = sorted(dates)
    pre = [d for d in ds if d < EVENT]
    post = [d for d in ds if d > EVENT]
    if len(pre) < 1 or not post:
        continue
    for k, pol in enumerate(('HH', 'HV')):
        db = {d: 10 * np.log10(read(dates[d][k])[0]) for d in pre[-2:] + post[:1]}
        prof = read(dates[post[0]][k])[1]
        if len({a.shape for a in db.values()}) > 1:
            print(f'GCOV {trk} {pol}: разные сетки — пропуск'); continue
        save(f'd{pol}_{trk}', db[post[0]] - db[pre[-1]], prof, f'{trk}: {pol} после − до, дБ', -6, 6, 'RdBu_r')
        if len(pre) > 1:
            save(f'd{pol}_norm_{trk}', db[pre[-1]] - db[pre[-2]], prof, f'{trk}: {pol} до − до (норма), дБ', -6, 6, 'RdBu_r')
print('готово:', OUT)
