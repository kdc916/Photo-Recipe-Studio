# Photo Recipe Studio v0.9.0 — P3 Cumulative Handoff

Stable baseline: v0.8.0 P0/P1/P2 with 77 unchanged original Sony source recipes and 12 groups, native browser photo picker, EXIF, zoom, JPG export, 47 opt-in film FX suggestions.

## New color workflow
`PRSEngine.parseCube(text)`: offline validation of sRGB .cube 3D LUT size 2..65, DOMAIN_MIN/MAX and complete 3*N³ RGB values; 8MB limit, rejects malformed/1D/nonfinite/out-of-range values.
`lutPixel(rgb,lut,weight)`: red-fastest 3D table indexing, trilinear sample, no per-pixel heap objects, output display-referred 8-bit sRGB.
Optional LUT stage in PRSEngine.process AFTER original recipe and BEFORE grain/halation. Preview and JPG export both use `opts.lut` and `opts.lutStrength`. Import activates intensity 100%; strength 0 or Clear returns old output. Source images and LUTs stay on device.

## Grain Sharpness
Original grain delta: amp*(n*.8+hf*.2). New additive detail: amp*(hf-n)*.5*(grainSharp/100), with zero-default. Source image edge sharpening is untouched. Manual texture settings persist when recipes change.

## Android equivalent
New Lut3D.java with parser, trilinear pixel, stripe-based Bitmap processing; MainActivity SAF document picker and LUT slider; BitmapPipeline overload preserves prior signatures, optional stage before FilmFx; FilmFx.Settings old constructor retained and 6-parameter GrainSharp form added. Android Windows build script v0.9.0 and source ZIP.

## QA
- P3 off vs v0.8.0: all 17,017 sample pixels identical.
- Java ↔ JS LUT: 500 conditions, max RGB channel delta 1.
- PC/mobile Chromium: photo load, grain 0/88, red-inverting .cube, LUT 0%/100%, export JPG, no JS errors.
- Standalone HTML startup and 12 groups PASS.
- Android Java 77 source recipes / 20,097 cases, FilmFx, P3 parser/transparent/cancel tests PASS.
- Actual Android SDK Gradle APK and physical phone NOT VERIFIED. Public Pages CDN propagation NOT VERIFIED.

## Limitation
Not manufacturer LUT profiling: no automatic RAW target chart capture, ΔE00 analysis, or LUT optimization. The supplied .cube must already be suitable for the app's display sRGB color space. Unsupported RAW/log transfer functions can lead to inaccurate color.