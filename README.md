# Photo Recipe Studio WEB v0.6.1 — Preview Fix

Offline single-file photo recipe tool using 77 original Sony camera setting recipes (approximation, not manufacturer LUT).

## Fix: 'color unchanged'
- **FACTORY (ST)** is an identity preset; by design it leaves RGB unchanged even at 100% strength.
- Previously, if **원본 보기** was enabled, changing recipes/strength/P0 still recalculated output but kept showing the original image. Now editing automatically exits original comparison mode.
- An explicit **원본 표시 중 / 보정 미리보기** badge identifies which image is displayed.
- Preview status displays sampled **mean absolute RGB difference / 255** relative to the source image. It is a magnitude diagnostic, **not Delta-E accuracy**, not a quality score.
- P0 protects color from clipping and extra chroma. It does not create a new film look. For Velvia and Ricoh Positive the ON/OFF difference is deliberately tiny because both already use a balanced processing branch.

## Test
Headless Chromium with a real JPEG passed: Factory unchanged, Fuji Velvia and Ricoh GR Positive both altered pixels, and toggling original then changing recipe/P0/strength returned to processed view. Java engine smoke, grayscale and 77-recipe regression tests pass.

## Deployment
GitHub Pages: main / (root). If cached, use hard-refresh or `?v=0.6.1`. No external script/CDN needed. All processing occurs in the browser.

## Caveat
No new color coefficients were added in v0.6.1. Native Android APK build and manufacturer ΔE calibration are unverified here.