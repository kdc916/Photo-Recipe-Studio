# Photo Recipe Studio WEB v0.8.0 — P2 Film Texture & Company Looks

Offline browser-based JPG/photo editor built on the original 77 Sony Recipe Lab camera-setting recipes (12 categories). Approximation only; NOT licensed, calibrated or official manufacturer 3D LUT.

## P2 v0.8.0
- **P2 회사별 추가 색감** ON by default for 16 mild, independently tuned stock/camera looks, including Fuji 400H/Fortia/Superia/C200/Natura, Canon Standard/Portrait/Faithful, Nikon Flat/Vivid, Panasonic L.ClassicNeo, Olympus Pop Art/Pale Light, Agfa Vista/Ultra and instant film. This is active only with **브랜드 특성 보강**.
- **47 optional film texture suggestions**: Open *필름 FX / EXIF* and press **선택 필름 추천 질감 적용** to fill in grain strength, grain size, halation, and halo radius. No texture is enabled automatically. Changing film does not overwrite manually adjusted FX.
- Examples: CineStill 800T = grain 19 / size 40 / halation 36 / radius 42; Ilford Delta 3200 = 34 / 59 / 0 / 35; Portra 160/400/800 uses increasingly visible grain as a visual approximation.
- P2 OFF restores the previous v0.7.0 RGB behavior. Existing P0/P1, original comparison, zoom/Fit, EXIF, halation, grain, JPG export and browser photo picker remain intact.

## Deployment
Keep `index.html`, `app.js`, `.nojekyll` in the repository root. GitHub Pages: Deploy from branch → main → /(root). No CDN, account, API key or backend.

App: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.8.0

A separate standalone offline HTML is available in the downloadable release archive.

## QA
- Browser Chromium desktop 1400px and mobile 390px photo import and JPG export: PASS, zero JS runtime errors.
- Film FX remains unchanged when switching recipes until explicit preset apply: PASS.
- Ricoh Hard Monotone remains neutral grayscale: PASS.
- P2 OFF vs v0.7.0: 770 RGB samples exact match; 16 new P2 looks × 16 input colors: 256 Java↔JavaScript exact matches (maximum channel difference 0).
- Java native color engine smoke tests: 77 recipes / 20,097 inputs PASS.
- Full Android Gradle APK build, real mobile device, quantitative manufacturer film color difference not verified.

See HANDOFF_v0.8.0_WEB.md and QA_REPORT_WEB_v0.8.0.md.