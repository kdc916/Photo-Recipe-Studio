# Photo Recipe Studio WEB v0.5.1 — Handoff

## Summary
v0.5.1 is a focused tuning patch for Ricoh GR Positive Film based on user-supplied sample images.
The previous implementation looked too much like a generic saturation/contrast boost.
This patch pushes the look toward:
- deeper blacks
- cooler neutral grays
- stronger selective color separation in red / cyan-blue / magenta
- slightly reduced green/yellow emphasis

## Files changed
- `index.html`
  - version label updated to v0.5.1
  - `PRS_LOOKS.direct.r047` adjusted
  - `PRS_LOOKS.group["Ricoh GR"]` adjusted
- `README.md`
  - updated patch summary

## Look change details
### direct preset: r047 / GR Positive Film
- saturation: `1.08 -> 1.10`
- contrast: `1.10 -> 1.16`
- vibrance: `0.12 -> 0.14`
- shadowCurve: `0.16 -> 0.22`
- highlightCurve: `0.01 -> 0.04`
- warmth: `0.02 -> -0.01`
- magenta: `0.00 -> 0.02`
- added split-tone bias
  - shadows: `[-0.010, 0.000, 0.020]`
  - highlights: `[0.010, 0.001, -0.004]`
- hue-sector saturation changed to:
  - red +0.09
  - yellow +0.02
  - green -0.06
  - cyan +0.05
  - blue +0.08
  - magenta +0.08

### group fallback: Ricoh GR
- more moderate version of the same tonal direction

## Intent vs user samples
This patch is intended to better match the supplied GR Positive examples where:
- black clothing / asphalt are deeper and cleaner
- pavement and other neutrals stay slightly cool
- pink shoes, cyan bag, red meat / signage, blue denim separate more clearly
- skin stays warm but not overly orange

## Notes
This is still an approximation layer, not an official Ricoh LUT or measured camera profile.
