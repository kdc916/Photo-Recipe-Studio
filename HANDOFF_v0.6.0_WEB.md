# Photo Recipe Studio WEB v0.6.0 — Cumulative Handoff

## Source and stable baseline
- Baseline v0.5.2: 77 original Sony Recipe Lab camera settings and 12 categories retained.
- P0-only scope: common chroma/color-cast safety engine, no new per-stock coefficients or proprietary LUT claims.

## Implementation
- P0 색상 보호 switch is ON by default. OFF uses the v0.5.2 color math; Film FX / EXIF controls remain independent.
- Compressed post-tone-map saturation target: for original Sat>1, `clamp(1+(oldSat-1)*0.47,0.72,1.18)`; for Sat<1, scale difference by 0.72. Balanced r009 Velvia / r047 GR Positive use their existing special saturation, without a second boost.
- Color-correctness safeguard: scale all linear channels together if the peak exceeds 1.0; unlike per-channel clipping it retains their relative proportions.
- Protect display-sRGB gamut when adjusting chroma; damp secondary brand vibrance to 40% and hue-sector to 55%.
- Restrict unwanted chroma on nearly neutral source colors (source channel spread <=3), and blend warm/orange moderate-chroma midtones toward original baseline. This heuristic also affects non-skin orange objects.
- Android sibling v0.6.0 reproduces this color math and uses existing Windows direct APK build system.

## Tests
- 77 recipes × brand ON/OFF × strengths 0%,50%,100% × 22 RGB colors = **10,164** Java/JS exact outputs.
- Existing 77-recipe Java source sweep (20,097 inputs), new P0 invariants, and JS syntax passed.
- Browser interactive QA could not run (browser navigation blocked); phone APK compilation not completed.
- Manufacturer-calibrated color ΔE not established.

## Follow-up
P1: film-specific profiles and camera-reference chart measurements, not part of P0.