# Teja Swaroop Vaddi: scroll-driven portfolio

Static site (no build step). Three.js scene with a car that drives as you scroll.

## Structure
- `index.html`: content and markup
- `css/style.css`: styles
- `js/ui.js`: loader, reveal animations, copy-email
- `js/main.js`: loads the config and model data, then the scene scripts in order
- `js/scene.js`: renderer, studio lighting, garage, matte floor
- `js/cars.js`: procedural fallback cars
- `js/scroll.js`: camera chapters and driving motion
- `js/model.js`: loads `models/hyundai.glb` and swaps it in
- `data/config.js`: model settings and per-chapter camera keyframes `[azimuth, distance, targetX, targetY, targetZ, screenOffset, canvasOpacity, carX]`
- `scripts/embed_model.py`: regenerates `models/hyundai.glb.js` after you change the model
- `scripts/build.py`: bundles everything into one `dist/index.html`

## Run locally
Double-click `index.html` (needs internet for Three.js and fonts), or use VS Code Live Server. After changing `models/hyundai.glb`, run `python3 scripts/embed_model.py` so the page picks it up.

## Included car model (license)
`models/hyundai.glb` is an optimized copy (engine and seat belts removed, geometry simplified and quantized) of **"2024 Hyundai Elantra N" by Ddiaz Design**, licensed **CC BY-NC-SA 4.0**: credit the author (the footer does this), no commercial use, and keep the same license for modified copies. See `models/LICENSE-model.txt`. Credit line: This work is based on "2024 Hyundai Elantra N" (https://sketchfab.com/3d-models/2024-hyundai-elantra-n-4ba1b1b0eb844e318cc708ada1f2f51f) by Ddiaz Design (https://sketchfab.com/ddiaz-design) licensed under CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)

## Swap in a different model
1. Download a `.glb` (or glTF) car model you are licensed to use, for example a Hyundai Ioniq 5 from Sketchfab.
2. Save it as `models/hyundai.glb`.
3. Run `python3 scripts/embed_model.py`, then reload. If the car faces backwards, set `model.rotateY` to `180` in `data/config.js`. Set `model.credit` to the author credit your license requires, e.g. `"Model: <title> by <author> (CC BY)"`.
Without the file, the procedural cars are used.

## Deploy
- **Vercel:** `npx vercel` in this folder (framework: Other, no build command, output directory `.`).
- **Netlify / GitHub Pages:** upload this folder as a static site.
- **Single file:** `python3 scripts/build.py` writes `dist/index.html` (inlines the model if present, so keep the GLB under about 10 MB).
