# Photo Recipe Studio WEB v0.14.1

Client-side photo color grading studio with **77 Sony/PMCA-derived recipes across 12 groups**, experimental film/brand look tuning, HEIC fallback, LUT support, grain/halation, local image editing and JPEG/ZIP export.

**[Live GitHub Pages](https://kdc916.github.io/Photo-Recipe-Studio/?v=0.14.1)** · **[Download source ZIP](https://github.com/kdc916/Photo-Recipe-Studio/archive/refs/heads/main.zip)**

## Features
- P0–P5: creative look, color protection, 3D LUT, deterministic grain/sharpness, local HEIC fallback and compact mobile layout.
- P6: JPEG export quality and 12MP/20MP/preview/original resolution, optional settings/EXIF-summary JSON sidecar ZIP.
- P7: 6–96 observed/target sRGB calibration pairs, CIEDE2000 **training** ΔE00, optional .cube LUT fitting. This is **not independently validated camera or film matching**.
- P8: original/filtered split compare, parameter Undo/Redo, favorites, custom recipes with JSON backup, up to 10-photo ZIP batch export.
- **v0.14.1 maintenance**: same-dimension split-photo fix, LUT-aware history, safer CSV/localStorage, consistent batch settings and responsive split canvas.
- Photos are processed locally; no server upload. Browser canvas outputs sRGB JPEG and does not preserve original EXIF, GPS or ICC bytes.

## Important files
`index.html`, `app.js`, `extension.js`, `vendor/heic2any.min.js`, `.nojekyll`, `LICENSE`, `THIRD_PARTY_NOTICES.md`, and the LUT/CSV reference files.

Documentation: [HANDOFF.md](HANDOFF.md) · [QA_REPORT.md](QA_REPORT.md) · [P3 LUT guide](P3_LUT_GUIDE.md) · [P7 CSV guide](P7_CSV_GUIDE.md).

Older per-version HANDOFF and QA notes are in Git history and the `backup/v0.14.0-before-20261026-cleanup` branch, rather than cluttering the deployed main branch.

## QA / limitations
Static/source regression checks performed for this patch; live browser and real-device HEIC/large-image behavior remain **unverified**. See [QA_REPORT.md](QA_REPORT.md). On mobile, start with 12MP export. Vendor components and LGPL source obligations are documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
