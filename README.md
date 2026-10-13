# Photo Recipe Studio — Web v0.6.0 (P0 Color Stability)

GitHub Pages-ready, offline-first photo color application based on 77 Sony Recipe Lab camera-setting recipes. This is an **approximation**, not an official manufacturer LUT.

## P0 changes
- **P0 색상 보호** switch (default ON). OFF restores the previous v0.5.2 processing path for A/B testing.
- Stops stacking high saturation in linear RGB for all 77 recipes while P0 is enabled. Instead uses bounded, gamut-aware chroma after tone mapping in display-referred sRGB.
- Preserves the ratio of linear RGB channels when highlights exceed 1.0, instead of clipping each channel independently.
- Softens additional brand vibrance and hue-sector amplification in P0.
- Guards nearly neutral RGB regions and warm/orange midtones. These are *color heuristics, not face recognition*.
- Retains source 77 recipes, 12 categories, Film Grain, Halation, EXIF, zoom/Fit and JPG export.

## GitHub Pages
Source: **Deploy from a branch**; Branch: **main**; Folder: **/(root)**. No server or CDN.

## Verification
- **10,164 / 10,164** Android Java ↔ web JavaScript sample RGB cases match (maximum channel difference 0).
- Legacy Java regression, 77-recipe sweep (20,097 sample pixels), and dedicated P0 invariants pass.
- Actual APK build, browser visual checks, calibrated reference measurements and ΔE are **not verified** in this environment. Local browser navigation was blocked by environment restrictions.

See `HANDOFF_v0.6.0_WEB.md` and `QA_REPORT_WEB_v0.6.0.md`.