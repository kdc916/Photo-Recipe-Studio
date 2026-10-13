# Photo Recipe Studio WEB v0.10.0 — P4 HEIC & Grain Sharpness

## What's fixed
- **Grain Sharpness 100% softening**: removed subtractive coarse-grain term. Sharpening now adds fine-grain detail while preserving coarse grain. Grain Sharpness 0% matches v0.9.0 and the underlying photo is never edge-sharpened.
- **Mobile HEIC/HEIF**: try the browser's native decoder first; if it fails, lazily load the **local** `vendor/heic2any.min.js` HEIC-to-JPG decoder. Photos never leave the device. JPEG cache is reused for preview and JPG export; no duplicate HEIC conversion.
- HEIC decode errors are reported, existing good photo remains and retry remains available. Some 10-bit/HDR and very high-resolution HEIC profiles may still be unsupported or run out of browser memory.

## Installation
GitHub Pages repository root must contain `index.html`, `app.js`, `.nojekyll` and **`vendor/heic2any.min.js`**. The official GitHub **Code → Download ZIP** contains the decoder file. The smaller source-only ZIP provided in chat is **not** a complete offline HEIC package.

Live app: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.10.0

## Compatibility
- Browsers can work with JPEG, PNG and WebP without loading the HEIC library.
- HEIC fallback converts to local JPG quality 96%. Some HEIC EXIF/ICC/HDR metadata may not survive this conversion. The original user file is not overwritten.
- Android APK continues to use native Android ImageDecoder for HEIC; this JavaScript fallback applies to **web browsers**, not the Android APK.

## QA
- Java 77 recipe regression and grain high-frequency increase test PASS.
- Chromium desktop (1440px) / mobile viewport (390px): open photos, grain sharp 0–100, HEIC failure + **mocked** local decoder, cached JPG export and retry recovery PASS.
- **Actual HEVC real-file decoding on mobile not verified yet**. Need user device testing with real files. Windows Android APK compilation not performed here.

All v0.9.0 color coefficients/P0–P3, film FX, .cube LUT, 12 groups and 77 source recipes retained.

See `HANDOFF_v0.10.0_WEB.md`, `QA_REPORT_WEB_v0.10.0.md`, `THIRD_PARTY_NOTICES.md`.