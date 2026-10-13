# Photo Recipe Studio WEB v0.7.0 — P1 Film Profiles

Offline-first browser photo editor with the original **77 Sony Recipe Lab camera-setting recipes / 12 categories**, unchanged. Based on the stable v0.6.4 external `app.js` initialization and native photo picker.

## P1 film-specific color profiles (20)
- **Fuji (7):** Velvia, Classic Chrome, Classic Negative, Nostalgic Negative, Reala Ace, Eterna, Eterna Bleach Bypass.
- **Kodak (6):** Portra 160/400/800, Gold 200, Ektar 100, Ektachrome E100.
- **Ricoh GR (4):** Positive Film, Negative Film, Bleach Bypass, Cross Processing.
- **Leica (3):** Contemporary, Classic, Eternal.

P1 is enabled by default. It applies only when **P0 color protection** and **brand look** are also enabled. P1 OFF exactly reproduces v0.6.4 color output; 57 untuned recipes keep their previous looks. The P1 step uses restrained film-specific toe/shoulder curves, hue shaping, midtone warmth, and moderate-chroma warm-object protection, not face recognition.

Photo chooser, 77 source settings, P0, B&W, zoom/Fit, JPG export, grain, halation and EXIF are unchanged. No network upload, CDN, backend or API keys.

## GitHub Pages
`index.html`, `app.js`, `.nojekyll` in repository root. Settings → Pages → main / (root).

Live URL: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.7.0

## QA
- 12,936 baseline vs P1-OFF color conditions: **identical**.
- 400 Java/JavaScript P1 sample pixels (20 films × 20 colors): max per-channel difference **1/255**.
- PC 1400px / mobile 390px Chromium: photo load, P1 toggle, Ricoh monochrome, JPG download **PASS**.
- Java smoke/77-preset suite (20,097 source-case pixels), B&W, film FX PASS.
- Not verified: Windows Android SDK full APK build, physical handset, measured ΔE against manufacturer references, CDN cache propagation.

See `HANDOFF_v0.7.0_WEB.md` and `QA_REPORT_WEB_v0.7.0.md`.