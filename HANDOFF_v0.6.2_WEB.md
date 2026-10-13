# Photo Recipe Studio Web v0.6.2 — Cumulative Handoff

### Customer-observed failure
v0.6.1 GitHub Pages screenshots: `미리보기 처리 오류: PRSEngine is not defined`. In this state, no RGB transformation executes: changing film presets or filter strength appears ineffective. Local Chromium could not reproduce the initial remote script loading defect, so its exact cause is unconfirmed.

### Fix
- Previous three inline scripts (recipe data; color engine; UI) merged into **one script** for deterministic initialization and to eliminate cross-script lexical/global dependency.
- UI uses a direct `processor=PRSEngine` reference, shared by preview and export.
- Startup self-check: r052 B&W pixel has equal R,G,B; r000 FACTORY returns identical RGB. Reports `window.PRS_DIAGNOSTIC.version='0.6.2'` and `engineReady=true`, with visible startup status.
- Global error handler surfaces boot failures.
- Bonus grayscale regression: Ricoh GR group fallback's creative color finisher was applying a tint AFTER monochrome conversion; skip brand chromatic finishing for B&W. Matching Android `ColorEngine.java` fix applied.
- No color coefficients, recipe source values, or camera-LUT claims changed.

### Verification
- Single inline script syntax check: PASS.
- Chromium with a real JPEG, Factory unchanged, Velvia +3.9 average RGB difference /255, GR Positive +8.2/255. Ricoh GR Hard Monotone 884736/884736 pixels neutral. JPG export successful.
- Java regression and 77 recipes / 20,097 sweep PASS; Ricoh monochrome test P0 ON/OFF PASS.
- Remote Pages HTTP delivery cannot be independently verified; source committed to `main`.
- Android Windows SDK build/physical device not verified.

### Deployment and testing
GitHub `kdc916/Photo-Recipe-Studio`, Pages main/(root). Open `?v=0.6.2` and hard reload if necessary. Verify readiness text before loading an image. Do not begin camera-look calibration until this passes in user's browser.
