# Photo Recipe Studio WEB v0.9.0 — P3 LUT & Grain Sharpness

Offline-first photo editor with 77 original Sony Recipe Lab recipes, 12 categories, P0/P1/P2, EXIF, grain, halation, zoom/Fit and JPG export.

## P3 additions
- Import a user-supplied **sRGB 3D .cube LUT**, supported sizes 2–65, optional DOMAIN_MIN/MAX, trilinear interpolation. Apply 0–100% or Clear. LUT is held in local browser memory, never uploaded. Order: film color → optional LUT → grain/halation.
- New **그레인 샤픈** slider 0–100% changes the high-frequency detail of film grain **only**, not photo edge sharpening. At 0% it is identical to v0.8.0; grain intensity must be >0 to see a difference.
- Opt-in existing P2 texture suggestions (47 recipes) are preserved and don't overwrite Grain Sharpness. P3 LUT is disabled by default.

## Deploy
Put `index.html`, `app.js` and `.nojekyll` in the repository root. Settings → Pages → Deploy from a branch → main → /(root).

App: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.9.0

## QA
- 77 recipes × 221 input pixels: **17,017 pixel cases exact** compared with v0.8.0 when P3 is off.
- Java/JavaScript LUT: **500 sampled cases** with max channel difference 1/255.
- Chromium desktop 1400px and mobile 390px: image import, LUT load/clear/strength, grain sharp 0→88, JPG save and zero JS runtime errors.
- Android Java smoke: 77 recipes (20,097 cases), Film FX, P3 LUT/grain sharp tests pass. Actual Gradle APK compilation and phone install not verified.

Not an official film or camera LUT. P3 currently **imports calibration LUTs**, but does **not** auto-detect ColorChecker, generate measured LUTs, compute ΔE2000, or change RAW/Log color space.

See HANDOFF_v0.9.0_WEB.md, QA_REPORT_WEB_v0.9.0.md and P3_LUT_GUIDE.md.