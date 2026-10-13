# P3 QA — Photo Recipe Studio v0.9.0

| Check | Result |
|---|---|
| Original 77 recipes and 12 categories | PASS |
| v0.8.0 vs P3 disabled across 77×221=17,017 pixels | PASS, bit-exact |
| Java/JS 3D .cube interpolation 100 colors × 5 weights | PASS, max channel diff 1 |
| GrainSharp 0% legacy effect / GrainSharp 88% output change | PASS |
| Grain disabled => GrainSharp alone no effect | PASS in Java |
| Desktop Chromium: import photo, cube, grade, save JPG | PASS |
| Mobile 390px Chromium same workflow | PASS |
| Standalone HTML start and 12 categories | PASS |
| JS runtime page errors | 0 |
| Android Java source/FilmFX/77 recipes smoke tests | PASS |
| Android Gradle full build + handset | NOT VERIFIED |
| Official film ColorChecker/ΔE2000 calibration | NOT IMPLEMENTED |
| Public Pages CDN delivery | NOT VERIFIED |

P3 LUT import is optional and expects sRGB→sRGB 3D LUT; does not assert proprietary film look accuracy.