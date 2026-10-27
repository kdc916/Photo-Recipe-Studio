# Photo Recipe Studio WEB v0.15.2

Client-side photo color grading studio with **77 original Sony/PMCA-derived recipes plus 5 P9 presets (82 total) across 12 groups**, experimental film/brand look tuning, HEIC fallback, LUT support, grain/halation, local image editing and JPEG/ZIP export.

**[Live GitHub Pages](https://kdc916.github.io/Photo-Recipe-Studio/?v=0.15.0)** · **[Download source ZIP](https://github.com/kdc916/Photo-Recipe-Studio/archive/refs/heads/main.zip)**

## Features
- **P9 Creative Look v0.15.2**: Sony FL1/FL2/FL3 same-scene calibrated sRGB looks, plus Ricoh GR Standard/Vivid independent approximations; 8 Sony-style fine adjustments (contrast, highlights, shadows, fade, saturation, sharpness, sharpness range, clarity), six persistent quick-look slots, and v2 JSON backup/import with backward support for custom V1. Original 77 PMCA presets unchanged. Full preview, export, and batch apply P9 through the same processor.

- P0–P5: creative look, color protection, 3D LUT, deterministic grain/sharpness, local HEIC fallback and compact mobile layout.
- P6: JPEG export quality and 12MP/20MP/preview/original resolution, optional settings/EXIF-summary JSON sidecar ZIP.
- P7: 6–96 observed/target sRGB calibration pairs, CIEDE2000 **training** ΔE00, optional .cube LUT fitting. This is **not independently validated camera or film matching**.
- P8: original/filtered split compare, parameter Undo/Redo, favorites, custom recipes with JSON backup, up to 10-photo ZIP batch export.
- **v0.15.2 maintenance**: same-dimension split-photo fix, LUT-aware history, safer CSV/localStorage, consistent batch settings and responsive split canvas.
- Photos are processed locally; no server upload. Browser canvas outputs sRGB JPEG and does not preserve original EXIF, GPS or ICC bytes.

## Important files
`index.html`, `app.js`, `extension.js`, `vendor/heic2any.min.js`, `.nojekyll`, `LICENSE`, `THIRD_PARTY_NOTICES.md`, and the LUT/CSV reference files.

Documentation: [HANDOFF.md](HANDOFF.md) · [QA_REPORT.md](QA_REPORT.md) · [P3 LUT guide](P3_LUT_GUIDE.md) · [P7 CSV guide](P7_CSV_GUIDE.md).

Older per-version HANDOFF and QA notes are in Git history and the `backup/v0.14.0-before-20261026-cleanup` branch, rather than cluttering the deployed main branch.

## QA / limitations
Static/source regression checks are available in `tests/creative_look_v015.test.js`; live mobile HEIC/large-image behavior and manufacturer color matching are **unverified**. See [QA_REPORT.md](QA_REPORT.md). On mobile, start with 12MP export. Vendor components and LGPL source obligations are documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Reference-calibrated Sony FL1 / FL2 / FL3
The user-supplied ILCE-7M5 Standard JPEG is **Display P3**; three FL JPEGs are sRGB. All were converted to sRGB and aligned before fitting a robust cubic polynomial sRGB look transform; lazily compiled into 33-cube reference LUTs. These profiles are NOT official Sony LUTs and one-scene accuracy does NOT imply cross-scene fidelity. Original 77 presets (including Sony FL legacy r005) remain untouched, with measured FL1 r081 and updated measured FL2 r077, FL3 r078. **Original reference photographs are deliberately not part of GitHub**. See FL_REFERENCE_CALIBRATION.md.

## v0.15.2 mobile selection fixes
- Selecting recipe chips no longer recreates the horizontal list; the scroll position stays in place so users can continue browsing nearby recipes. The strip also remembers scroll by category.
- Mobile company/film categories use an inline touch-ready picker, applying the category and first preset immediately on a tap. No iOS/Android native select 'Done' confirmation is required. Desktop retains the native category select.
- Uses semantic buttons with `aria-pressed`, expanded state, Escape/outside-tap dismiss and keyboard focus return. Existing 82 recipes, six slots, processing pipeline and P8 favorites remain intact.
