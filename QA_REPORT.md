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
