# Sony ILCE-7M5 measured FL1/FL2/FL3 color transforms — v0.15.1

User-supplied Standard test_sony.jpg (embedded Display P3 ICC) and FL1/FL2/FL3 (sRGB ICC) were first converted to a common sRGB space and geometrically aligned with SIFT/RANSAC. We fitted a third-degree robust regularized RGB transform per look from 75,000 low-gradient aligned samples. The app lazily builds 33 x 33 x 33 sRGB LUTs. No manufacturer LUTs, firmware code, DCP binaries, or reference image files have been copied into this public repo.

| Look | Same-scene RGB MAE before /255 | After 33-cube /255 |
|---|---:|---:|
| FL1 | 29.55 | 3.87 |
| FL2 | 21.03 | 1.85 |
| FL3 | 23.38 | 2.55 |

These are same-scene spatial sample measures, not independent photos, not measured DeltaE, and not an exact manufacturer color matching guarantee. JPEG compression, Photoshop exports, camera WB, moving objects, perspective and gamut extrapolation limit applicability. Custom P9 tune is applied after the reference LUT; P3 user LUT then stacks as an additional correction. Strength zero or creative toggle off disables the measured look. Original r005 Sony FL remains unchanged. The three provided full-resolution reference JPEG files stay private and were not added to public source control.
