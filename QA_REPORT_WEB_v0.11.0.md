# P5 WEB QA Report — v0.11.0

| Test | Result |
|---|---|
| 12 groups / 77 original recipes preserved | PASS |
| Grain 75, Size 67, Sharp 88 → category switch | PASS → 0 / 30 / 0 |
| Same selected recipe clicked again | PASS — manual values retained |
| Different recipe chip clicked | PASS — grain reset |
| Halation 28 during recipe change | PASS — retained |
| Manual Grain Reset | PASS |
| JPEG import, output JPG export | PASS |
| Mobile 390×844 and 360×740 sticky preview | PASS |
| Mobile horizontal nowrap recipe chips | PASS |
| Mobile advanced controls collapsed, desktop opened | PASS |
| Chromium JS runtime pageerrors | 0 |
| Android 77 recipe Java smoke 20,097 cases | PASS |
| HEIC live device decoding | NOT RETESTED, P4 unchanged |
| Native APK Gradle + real handset | NOT VERIFIED |
| Actual GitHub Pages CDN propagation | NOT VERIFIED |

Manual test suggested: set Grain Strength=80 / Grain Size=65 / Grain Sharp=90, switch from Fuji Velvia to Ricoh Positive. Grain must be 0/30/0 but Halation, LUT and P0/P1/P2 keep their previous values.