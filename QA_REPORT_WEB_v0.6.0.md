# Web QA Report — v0.6.0 P0

| Check | Result |
|---|---|
| Original 77 recipe settings + 12 categories | PASS (unchanged) |
| Java baseline ColorEngine, RecipeSweep, LookProfiles, FilmFX | PASS |
| 20,097 pixel 77-recipe sweep | PASS |
| P0 identity at 0%, alpha, neutral guard | PASS |
| Android/JavaScript 10,164 sampled pixels | **PASS, RGB max difference 0** |
| JavaScript syntax and web app static markup | PASS |
| Browser interaction / visual photo/JPG QA | NOT VERIFIED: browser navigation blocked |
| Android SDK APK build and actual phone test | NOT VERIFIED |
| Calibrated film-camera ΔE color accuracy | NOT VERIFIED |

Manual tests: Ektar 100 and Velvia highlight reds, GR Positive shadow detail, human skin in daylight/flash, neutral gray/white, 0%-100% strength. Compare P0 ON/OFF and exported JPG.