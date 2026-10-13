# Photo Recipe Studio WEB — Cumulative Handoff v0.6.1

Baseline: v0.6.0 P0; 77 Sony settings unchanged, existing 32 look overrides, brand fallbacks, film grain, halation, EXIF, JPG export, zoom/Fit unchanged.

## Root cause
`state.original === true` persisted after a user changed a recipe or adjustment. `runPreview` calculated `state.filtered` but only called `present(result)` if `!state.original`. Thus user could see no color change despite successful calculations.
Also the app starts at `FACTORY (ST)`, intentionally pixel identity. P0 color protection ON/OFF on r009 Velvia/r047 GR Positive has negligible visible difference (due preexisting balanced special handling).

## Changes
- Any `requestPreview()` exits original view and restores compare button to '원본 보기'.
- Added `viewMode` badge in image stage that explicitly labels original/processed.
- Added sampled mean absolute RGB difference as status readout, indicating zero for factory and >0 when color is changed.
- Added FACTORY explanatory text and improved compare status messages.
- No color algorithm parameter changes. No extra image upload or telemetry.

## QA
A Chromium browser test loaded a local JPEG using in-memory page content (without network navigation), verified Factory identity, Velvia and GR positive positive delta, click Original then choose recipe or P0/strength returns to processed view with no JS errors.
Android Java syntax and engine smoke including 77 presets passed; Android SDK compilation not run here.

## Version
Web v0.6.1, Android version 0.6.1. Original 77 preset source remains unchanged.
