# Photo Recipe Studio — Cumulative Handoff v0.14.0 (P6–P8)

Baseline v0.11.0 with 77 original PMCA Sony recipes, P0 P1 P2 P3 and P4 HEIC + P5 compact mobile / grain reset. Three web runtime files: `index.html`, `app.js` (original engine), `extension.js` (P6-8 optional layer). The former global PRSEngine file is unchanged except JS hook export, tile-global grain coordinate and save handoff.

## P6
- New resolution selector default 20MP / 12MP / original / preview; quality slider 70–100%; optional JSON sidecar ZIP.
- Memory caps: 54MP where browser navigator.deviceMemory permits; 24MP on devices reporting <=4GB, max dimension 16384. Full-size output canvas remains memory-intensive.
- Process image in 256-row strips with 24px overlap; original PDF/ICC/EXIF bytes are not copied. Canvas sRGB conversion; sidecar contains available EXIF summary and settings, no private GPS.
- HEIC device-internal conversion from v0.10.0 retained. Source JPEG re-encoding unavoidable for lossy export.

## P7
- CSV observed/target 6–96 matching 8-bit sRGB pairs, fit 17³ LUT using regularized Gaussian local offsets.
- CIEDE2000 mean before/after **training errors** shown; apply or save red-fastest `.cube`, relying on existing P3 processor.lutPixel.
- **No** automatic ColorChecker feature extraction, camera RAW color matching, manufacturer LUT ownership or held-out validation.

## P8
- Original/filtered split canvas overlays with synchronized pan/zoom; undo/redo up to 30 parameter states; favorites and custom snapshots via localStorage; JSON import/export; 1–10 photos batch JPEG stored in one uncompressed ZIP via CRC32.
- Switching recipe still resets grain 0/30/0; halation and LUT persist. Manual texture preset remains opt-in.

## Known risks and follow-up
- Full-size HTML Canvas and decoded image memory remains large; users on low RAM should choose 12MP.
- Tile boundary overlap approximates cross-strip halation. Real full-camera matches need target references.
- Persistent storage blocked in `about:blank` automated browser tests, but graceful fallback used. HTTP Pages localStorage should be manually checked.
- Native Android P8 is a smaller set: Undo/Redo + favorites + one custom preset + up to 10 gallery batch exports, no split compare or multi-custom JSON/ZIP. Android P7 supports CSV→LUT fitting, Android P6 resolution/quality. Native APK and device tests pending.

Never treat passed JS parse as sufficient; validate uploaded GitHub exact blobs, Pages Actions and real browser startup independently.