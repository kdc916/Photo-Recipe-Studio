# Photo Recipe Studio WEB v0.14.0 (P6 + P7 + P8)

Stable basis: 77 original Sony recipes, 12 groups, P0-P5 color, local HEIC fallback and compact mobile workflow.

## P6 quality export
- JPEG quality 70-100%, selected 12MP/20MP/preview/original with memory safety cap.
- Optional JPEG + edit-settings JSON sidecar ZIP. Canvas output is sRGB; original ICC and EXIF are NOT reembedded.

## P7 reference color calibration
- CSV 6-96 matching sRGB observed/target RGB pairs, CIEDE2000 TRAINING delta-E and fitted 17x17x17 .cube LUT.
- Training fit is not independently verified camera/film accuracy; measured chart/reference and held-out scenes are needed.

## P8 pro editing
- Split original/filtered compare, up to 30 step parameter Undo/Redo, favorites, named custom recipes with JSON backup.
- Batch up to 10 photos to one ZIP of JPG images using current recipe (3/8/12MP per photo).

## Deployment
Root files: index.html + app.js + extension.js + .nojekyll and vendor/heic2any.min.js.
Live page: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.14.0
Download full repo for offline HEIC binary: https://github.com/kdc916/Photo-Recipe-Studio/archive/refs/heads/main.zip

## Android
Android companion source includes output size/JPEG quality, reference CSV->LUT, basic native Undo/Redo/favorites/one custom recipe and gallery batch save. Android native does not yet support the web split slider, ZIP batch or multi-custom JSON.
Android SDK compilation/device test not verified.

## QA
Chromium injected-script tests desktop+mobile: photo load, 2800x1800 original output, quality, LUT fitting, split, history/custom and batch ZIP PASS.
Java regression 77 recipes / 20,097 RGB inputs and ReferenceCalibrator PASS.
GitHub Pages Actions deployment succeeded; real live browser HTTP access was blocked in test environment.

Read HANDOFF_v0.14.0_WEB.md, QA_REPORT_WEB_v0.14.0.md, and P7_CSV_GUIDE.md.
