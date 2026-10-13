# Photo Recipe Studio v0.10.0 — P4 누적 인수인계

## Stable base
v0.9.0 P3 LUT / P2 grain suggestions and all 77 original Sony Recipe Lab camera-setting recipes, color math unchanged.

## Fixed: grain sharpen softening
Old: `base=.8*n+.2*hf`, `edge=.5*(hf-n)*sharp`. At 100%, coarse grain weight drops from .8 to .3 and the image can look smoother.
New: `base=.8*n+.2*hf`, `edge=.85*hf*sharp`. The original coarse grain contribution remains stable while finer grain increases. This is independent of photograph sharpening. 0% bit-exact legacy and grain strength=0 identity remain.

## Fixed: browser mobile HEIC
- `isHeicFile(file)` identifies HEIC/HEIF name or MIME type.
- `decodeWithHeicFallback(file,maxPixels)` tries native HTML Image/Canvas decode; if it fails for HEIC, lazily loads locally hosted vendored heic2any. Input is converted to JPEG quality .96 in-browser.
- `state.decodeFile` caches the conversion for subsequent high-resolution JPG export, avoiding a second HEIC conversion; original selected File retained.
- Failure is visible, previous loaded image retained, file picker remains usable.
- `vendor/heic2any.min.js` bundle from alexcorvi/heic2any; MIT outer + libheif/libde265 LGPL3 source links are in THIRD_PARTY_NOTICES.md.
- Actual hardware/browser HEIC decode varies; 10-bit/HDR/proprietary variants, large 50MP photos and ICC/EXIF profile preservation are not guaranteed.

## Tests and limitations
- Chromium desktop 1440px + mobile 390px: grain sharp 0→100 increases total neighboring luminance difference from 193888 to 301123 (1.55x in synthetic test); all JPEG and B&W tests pass.
- HEIC failure/retry/cache tested with **mocked** heic2any output, not real HEVC decoding. No claim of all device support.
- Java FilmFx regression includes high-frequency metric, neutral B&W, zero-intensity identity; 77/20,097 preset baseline tests PASS.
- Android code changed in FilmFx formula and version only; Android HEIC continues native ImageDecoder.
- Android SDK Gradle/physical device build and live GitHub Pages CDN check not completed.

## Delivery
GitHub repo main/(root) hosts index.html/app.js and vendor/heic2any.min.js. To download the complete HEIC-capable offline web package, use **Code → Download ZIP** on GitHub; chat source-only ZIP doesn't include the vendor compiled decoder.