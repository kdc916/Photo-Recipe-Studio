# Photo Recipe Studio WEB v0.5.2 — Handoff

## Original source
`recipe-lab-sony-pmca-main.zip`: `Recipes.java` r009 Velvia = Vivid +3 saturation, +2 contrast, AWB. r047 GR Positive Film = Standard +3 saturation, +2 contrast, A+2 AWB, exposure bias -1/3, DRO Auto.
Upstream `docs/SAMPLES.md` explicitly warns the old Velvia sample was taken using +5 saturation and an obsolete PP3 color matrix. It is not a calibrated ground truth for today's recipe; indoor samples lack faces/skies/foliage.

## Root cause
v0.5.1 multiplied Sony Creative Style / steps / look multiplier / vibrance / hue-sector boosts. Linear-RGB saturation also drove vivid red-orange pixel channels to clipping.

## v0.5.2 solution
- Only `PRS_LOOKS.id.r009` and `r047` get balanced fields: `balancedSaturation`, `balancedContrast`, `skinProtection`, `shadowDepth`, `wbFraction`.
- `prepare()` skips stacked saturation for those two with brand effect ON; linear RGB saturation is 1, then `balancedFinish()` applies mild protected chroma in display-referred sRGB.
- Bright high-chroma primaries receive less boost to avoid clipped reds/oranges.
- Warm/orange midtone hue mask reduces false skin over-saturation; it is *not face recognition* and can affect other objects of matching hue.
- GR shadows deepen with a black-preserving smooth toe. Ricoh's A+2 simulation is reduced in brand mode to avoid over-warming already white-balanced JPEGs.
- All 77 original camera preset values unchanged; other 75 recipes retain existing processing.

## Calibrated? No
The supplied photos and published source cannot reconstruct proprietary Sony/Ricoh/Fuji color pipelines or camera-unique RAW matrices. Matching is qualitative and requires same-scene targets with RAW/neutral charts for meaningful ΔE measurement.

## Verification
- 7,392 Java↔JavaScript sampled RGB pixel configurations across 77 recipes, brand ON/OFF and strengths 0/50/100, exact match.
- Java smoke + look + 77-recipe sweep pass.
- No physical handset / calibrated target ΔE testing completed.

## Delivery
`index.html`, README, cumulative handoff, QA; main/(root) GitHub Pages. Android v0.5.2 project available separately with preserved Windows direct APK builder.