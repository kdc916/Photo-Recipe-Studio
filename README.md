# Photo Recipe Studio WEB v0.5.2 — Balanced Film Color

77 original Sony Recipe Lab camera presets, offline photo color preview/export, film grain, halation, EXIF hints and zoom.

## v0.5.2 corrections
- **Fuji Velvia (r009)**: restrained overall color, modest enrichment of primary colors, protect warm skin midtones.
- **Ricoh GR Positive Film (r047)**: mild color boost, deeper but not crushed shadows, clear bright skin tone.
- Fixed *multiplicative saturation stacking* (Sony style × Sony +3 × brand × vibrance) **only for the two above presets**.
- Moves their small color boost out of linear RGB into post-tone-map sRGB with protection for already vivid colors.
- Original 77 Sony recipe settings are unchanged. Other 75 looks, Grain, Halation, zoom, EXIF, JPG export remain intact.

**Note:** Brand character ON uses the new balanced conversion. Brand character OFF uses the earlier Sony-settings-only approximation and can look oversaturated for these two.

## Deploy
GitHub Pages: main / (root). Open `index.html` locally or visit the deployed website. No CDN, npm, API key or server.

## Quality
7,392 sampled RGB permutations matched Java exactly (max channel difference 0); 77 preset regression sweep passed (20,097 values). Camera reference color-chart / skin color ΔE calibration and real Android device APK build not performed here.

See `HANDOFF_v0.5.2_WEB.md` and `QA_REPORT_WEB_v0.5.2.md`.