# Photo Recipe Studio WEB v0.8.0 — P2 Cumulative Handoff

## Base
v0.7.0 P1 stable color processing and v0.6.4 external `app.js` bootstrap. 77 Sony Recipe Lab settings and 12 catalog groups UNCHANGED. P0, 20 P1 looks, native file chooser, image zoom/Fit, EXIF, film FX, compare & JPG save preserved.

## P2 company/stock-specific looks
- Optional `P2 회사별 추가 색감` toggle (default ON), effective only with `브랜드 특성 보강`.
- `P2_LOOKS` overrides for r024–028 (Fuji film stocks), r060–064 (Canon and Nikon), r066–068 (Panasonic and Olympus), r069–071 (Agfa and instant).
- P2 OFF resolves the exact old `looks.id[r.id] || looks.group[r.group]` path. Existing 20 P1 color profiles unchanged. Qualitative tint/toe/contrast/selective saturation approximations, NOT manufacturer 3D LUTs.

## Manual film texture suggestions
- `P2_TEXTURES` contains 47 curated **optional** entries. `getTexture` returns the selected film's suggestions and `updateFxHint` displays them, but NEVER changes the sliders until user clicks `fxPresetApply`.
- Slider inputs affected: grain, grainSize, halation, haloRadius. Slider values remain intact across recipe selection; preview/export already share FilmFx options.
- CineStill 800T r044: 19/40/36/42, red-orange bloom only around strong highlights.
- Ilford Delta 3200 r075: 34/59/0/35; FP4 r073: 9/19/0/35; HP5 r072: 19/36/0/35.
- Portra 160/400/800: grain 5/10/17 and size 16/24/35; ACROS r019–022 grain 16 size 28.
- These visual grain/halation suggestions are not optical grain scans, sensor noise reconstruction, or literal manufacturer values.

## References used for qualitative tendencies
- https://www.fujifilm-x.com/ko-kr/products/film-simulation/
- https://app.fujifilm-dsc.com/en/manual/x-m5/menu_shooting/image_quality_setting/
- https://cinestill.film/blogs/news/cinestill-800t-in-your-toolbox
- https://www.ilfordphoto.com/wp/wp-content/uploads/2017/05/Ilford-Product-Brochure-LOW-RES-WEB-1.pdf

## Tests
- P2 OFF / v0.7.0 exact: 770 sample RGB inputs.
- Java / JS new P2 16 looks × 16 sample colors: 256/256 exact RGB.
- Browser desktop and mobile: 12 groups, image load, CineStill manual grain/halo, swap to Ilford without losing settings, Delta3200 manual preset, Nikon Flat P2 ON/OFF, Ricoh monochrome neutral, JPG download; zero JS errors.
- Java 77 recipe / 20,097 inputs, FX, monochrome, P2 tests PASS.
- Android APK Windows real build, physical phone and live Pages CDN update cannot be fully verified here.

## Delivery
GitHub Pages main/(root); `index.html`, `app.js`, `.nojekyll`, README + handoff + QA. Offline all-in-one HTML and Android project/builder ZIP provided separately.