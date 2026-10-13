# QA Report — Photo Recipe Studio WEB v0.7.0

| Test | Result |
|---|---|
| v0.6.4 baseline vs P1 OFF across 12,936 inputs | PASS (exact) |
| P1 controls on desktop 1400px and mobile 390px | PASS |
| Color changes with P1 toggle for Leica Eternal | PASS |
| 20 film profile configs present in JS | PASS |
| Web/Java pixel parity: 400 cases | PASS (max per-channel delta 1) |
| Ricoh Hard Monotone full grayscale | PASS |
| Open photo / select film / compare / JPG export | PASS |
| 77 source recipes / 12 categories retained | PASS |
| Android Java legacy suite, 20,097 color inputs, film FX | PASS |
| Full Android SDK Gradle APK compile | NOT VERIFIED |
| Physical Android device test | NOT VERIFIED |
| Manufacturer color chart ΔE matching | NOT VERIFIED |
| Public GitHub Pages CDN propagation | NOT VERIFIED |

P1 only when both P0 and brand look enabled. No external URLs/assets required for application runtime.
| 8192×5464 source JPEG import + P1 Velvia preview | PASS (2204×1470 preview, mean RGB change 4.5/255; zero JS errors) |
