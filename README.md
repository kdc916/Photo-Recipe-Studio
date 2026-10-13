# Photo Recipe Studio v0.11.0 — P5 Mobile Workflow & Grain Reset

Web photo editor with **77 original Sony Recipe Lab recipes / 12 categories**, P0/P1/P2 color looks, P3 calibration LUT, film grain/halation, zoom/Fit, EXIF, offline HEIC fallback and JPG export. Original Sony source values and color algorithms unchanged in P5.

## P5: Grain resets on a different recipe
- On selecting a **different recipe ID** (including changing company/category), clear **Grain Strength 0%, Grain Size 30%, Grain Sharpness 0%**.
- Re-selecting the **same** recipe, changing image, adjusting strength or toggling P0/P1/P2 does **not** reset grain.
- Halation (strength/radius), EXIF hints and imported .cube LUT settings remain untouched.
- A new **그레인 초기화** button manually clears just the three grain sliders.
- Film texture recommendations still apply **only** when the user explicitly presses the preset button.

## P5: Less mobile scrolling
- Photo preview stays in view as a **sticky** upper area with a 34svh height (190–320 px).
- Recipe chips are a horizontal single-row swipe list.
- Filter strength is immediately accessible; advanced Brand/P0/P1/P2/LUT controls and recipe details collapse by default on mobile.
- Save/reset actions remain sticky near the mobile bottom. Desktop advanced controls stay expanded.
- Native Android app also collapses its four advanced switches and resets grain on real recipe changes.

## GitHub Pages
Place `index.html`, `app.js`, `.nojekyll`, and **`vendor/heic2any.min.js`** in repository root / vendor subfolder. GitHub Pages: main / (root).
Live: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.11.0

For a complete offline HEIC web archive use **Code → Download ZIP** from the official repository. Source-only ZIP and standalone HTML distributed separately do NOT contain the 1.35MB local HEIC decoder, so JPEG/PNG/WebP work but HEIC fallback is not available in these source-only files.

## QA
Chromium 1440×900, 390×844, 360×740: real JPEG import, recipe-change grain reset, same-recipe retention, halation retention, manual reset, compact mobile layout, JPG export, 0 JavaScript errors — PASS.
Android Java ColorEngine/FilmFx/LUT tests: 77 recipes / 20,097 sample cases PASS. Full Android Gradle build and real phone verification are not completed.
See HANDOFF_v0.11.0_WEB.md and QA_REPORT_WEB_v0.11.0.md.