# Photo Recipe Studio v0.14.1 — QA and release checklist (2026-10-26)
## Verified as part of code-review change
- Source tree inventory checked against default branch; active runtime files preserved.
- `app.js`, `extension.js`, inline bootstrap JS static syntax checks.
- 77 recipe catalog and core identity/monochrome pixel self-check via isolated core evaluation.
- HTML script paths, extension control IDs and cache-bust version consistency.
- Diff text reviewed for split-source refresh, history checkpoints, batch setting snapshot, CSV input validation and stored-data guards.
- Exact root file inventory re-read after commit; historical notes remain on the backup branch and in Git history.
## Not verified here
- Real deployed GitHub Pages on desktop/iOS/Android with test images, HEIC HDR/10-bit, 20/54MP exports and memory use.
- End-to-end browser click automation, ZIP extraction tests, and native Android SDK/APK compile.
- P7 measured reproduction accuracy on independent photographs or reference charts.
## Manual regression matrix
1. Open photo A, split ON, open photo B of identical dimensions; left half must show B rather than A.
2. Load a .cube file and Undo immediately; then Redo. Apply P7 CSV-fit LUT, change a slider, Undo and Redo; do not restore a stale LUT.
3. Apply custom recipe, Undo and Redo. After Undo, edit another slider: previous Redo must be discarded.
4. Convert 2 photos in a batch; change recipe during conversion: both JPGs should use the same starting recipe and config.
5. Load malformed custom/favorite JSON from localStorage, reload: app must still start.
6. Import a calibration CSV with empty channels; invalid pairs should not be interpreted as 0.
7. Open a HEIC with fallback and export sidecar ZIP; manifest should name the actual source HEIC.
8. Check JPEG size options, grain reset on recipe change, zoom/fit/split after viewport changes.
### Deployment
Check the GitHub Actions Pages run for the release commit and perform the real site test at `https://kdc916.github.io/Photo-Recipe-Studio/` before calling runtime/browser QA PASS.

## P9 v0.15.0 regression plan and limits
- Node source/engine regression test: `node tests/creative_look_v015.test.js`; test source is included in the repository.
- Expected: 77 legacy presets unchanged; 4 distinct new presets; untouched factory render at neutral P9 values; custom 8-control adjustments change pixels; strength 0 leaves source; color channels bound 0–255; default FL2/FL3 colors differ; P9 settings are included in `api.opts()` for output and batch.
- Manual browser: open A/B images, view FL2/FL3, change each of 8 sliders, verify split/fit, Undo/Redo, save/load 6 custom slots, migrate PRS_CUSTOM_V1 JSON, backup/restore PRS_CUSTOM_V2, test optional LUT behavior and saving to JPG/batch ZIP.
- Remaining: iOS/Android real HEIC 10-bit HDR, JPEG ICC and EXIF, extremely large source images and camera-derived reference color matching not verified. No native Android APK rebuild in this web-only patch.

## v0.15.1 QA
Added source-only FL reference LUT regression and refreshed desktop/mobile Chromium smoke test for 82 recipes and v0.15.1. Color measurement statistics are single-scene only; real photo reference files excluded from public source. Actual camera fidelity for additional scenes is unverified.

## v0.15.2 Mobile UI QA
- Automated Chromium mobile at 390x844: scroll to the rightmost Sony chips, choose FL2/FL3/FL1 consecutively; ensure horizontal scroll remains near last position and chip DOM nodes persist.
- Mobile custom company/film menu displays all categories, tap Kodak changes first recipe immediately without native 'Done', auto-closes and updates selection; tapping Sony returns with correct category.
- Desktop native select retained; all previously tested photo imports, saves, batch ZIP, FL LUT and custom slots must still pass.
- Real iOS Safari and Android WebView hands-on QA remains recommended because native browser focus/scroll behavior can differ.
