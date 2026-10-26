# Photo Recipe Studio — cumulative handoff v0.14.1 (2026-10-26)
## Runtime (GitHub Pages root)
- `index.html`: interface and browser bootstrap.
- `app.js`: unchanged 77-presets color engine, image decoding, color processing, P0–P5, HEIC fallback and basic save. Only version references changed in v0.14.1.
- `extension.js`: P6 output, P7 calibration, P8 split/undo/favorites/custom/batch.
- `vendor/heic2any.min.js`: required OFFLINE fallback for browsers without native HEIC. Retain third-party notices and license.
- `.nojekyll`: GitHub Pages static files.
## Patch v0.14.1
1. Split comparison refreshes original ImageData after loading a **different same-size image**, including a new image with identical canvas dimensions.
2. Split comparison follows stage ResizeObserver as well as window resize.
3. P8 undo/redo tracks LUT object identity, checkpoints custom recipe and calibrated LUT application, **records asynchronous .cube file imports through the core preview hook**, trims history, clears redo on new branch.
4. Parse P7 calibration CSV without treating empty RGB channels as numeric zero.
5. Loaded localStorage favorites/custom data is type-validated before use.
6. Batch conversion snapshots recipe/FX/LUT parameters before processing the first of up to ten images, preventing mixed looks if controls change during export.
7. Sidecar records the source HEIC filename rather than solely the converted JPEG filename; records whether HEIC conversion was needed.
8. Unused extension constants removed; version/cache URL labels updated.
## Repository hygiene
Former version-specific `HANDOFF_v*.md` and `QA_REPORT_WEB_v*.md` root notes have been removed from main, *not* erased from Git history. Pre-cleanup backup branch: `backup/v0.14.0-before-20261026-cleanup`. This `HANDOFF.md` and `QA_REPORT.md` replace the versioned root notes. Keep `P3_LUT_GUIDE.md`, `P7_CSV_GUIDE.md`, `P7_RGB_TEMPLATE.csv`, `LICENSE` and `THIRD_PARTY_NOTICES.md` as current reference assets.
## Compatibility and limitations
- Canvas JPEG export re-encodes sRGB; original ICC and EXIF/GPS are not embedded. Optional JSON manifest can contain metadata *summary*. 
- HEIC converter may fail on HDR, 10-bit or device-specific HEIF; live iPhone/Android tests are required.
- No independent camera-manufacturer film fidelity validation. P7 ΔE00 is in-sample/training fit.
- 12MP output recommended for memory-constrained browsers; 20MP/original can use substantial memory.
- For full downloadable source, use the repo's **Code → Download ZIP** or `https://github.com/kdc916/Photo-Recipe-Studio/archive/refs/heads/main.zip`.
