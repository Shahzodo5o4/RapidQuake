RapidQuake website (new design)
================================
Open index.html in a browser, or upload the whole folder to GitHub Pages
(replace the old files in the repository; keep the folder structure).

What to edit
- index.html   all texts of the sections (and the GitHub link in the footer).
- css/style.css colours and fonts (see the :root block at the top).

Do NOT edit
- data.js and img/*.webp : the team's real project data (same numbers as the previous site,
  generated from NISAR data by rapidquake_map.py). Images are the same pictures, converted
  from PNG to WebP so the page loads faster.
- tashkent.js : the Tashkent layers (13 tumans, tk_sum, image bounds) copied from tashkent_full/data.js.
  img/tk_watch.webp and img/tashkent.webp are the pictures from tashkent_full, unchanged.
  img/base_t.webp is tashkent_full/base_t.png recoloured for the dark theme
  (same building footprints, light background made transparent).

Rebuilding the script (only if you change files in source/)
  npm i three motion esbuild
  npx esbuild source/main.js --bundle --minify --format=iife --outfile=js/app.js
  (source/land.json is the land mask for the globe, from Natural Earth via world-atlas.)

Credits that must stay on the page
NASA-ISRO NISAR (NASA ASF DAAC), USGS ShakeMap, WorldPop (CC BY 4.0),
(c) OpenStreetMap contributors (ODbL), Copernicus EMS EMSR916 (c) European Union 2026,
Tashkent City Statistics Department, Alcaldia de Pereira, Leaflet, Esri basemap.
Libraries: Leaflet 1.9.4 (BSD-2), three.js (MIT), Motion (MIT). Fonts: Archivo, JetBrains Mono (OFL).
