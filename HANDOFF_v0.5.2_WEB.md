# Photo Recipe Studio — Web Handoff v0.5.2

## Source of truth
- Imported unchanged settings from original Sony Recipe Lab: r009 Velvia Vivid +3/+2 AWB; r047 GR Positive Standard +3/+2 A+2 EV -1/3.
- Upstream `docs/SAMPLES.md` notes the old Velvia sample used +5 saturation and PP3 matrix; not a valid calibrated target.
- User intent: Velvia skin stays clear with slightly heightened primary colors; Ricoh overall chroma rises only a little while shadows deepen and brighter skin stays clean.

## Root cause / remedy
Stacking style + Sony sat steps + look sat + vibrance amplified chroma and clipped saturated red/orange in linear RGB. r009 and r047 now use targets and skip linear-RGB sat multipliers; gentle perceptual sRGB boost with high-chroma protection. A hue/luma skin heuristic limits orange midtones; it is not facial recognition.

## Changes
- `PRS_LOOKS.id.r009` and `.r047` carry `balancedSaturation`, `balancedContrast`, `skinProtection`, `shadowDepth`, `wbFraction`.
- JS `prepare`, `balancedFinish`, `pixelPacked` integrate the override only when brand enhancement is enabled.
- Other 75 presets, grain, halation, EXIF, zoom, JPG save unchanged.
- HTML title/header v0.5.2.

## Validation
- Java vs JS RGB: 7,392/7,392 exact (max 0) across 77 recipes and selected swatches/strengths, with v0.5.2 engine.
- JS syntax and regression smoke pass.
- Real-world manufacturer-equivalence and official color-chart calibration are NOT verified.

## Deployment
Target: `https://github.com/kdc916/Photo-Recipe-Studio` — main / root GitHub Pages. The GitHub copy should be updated atomically with the handoff files.
