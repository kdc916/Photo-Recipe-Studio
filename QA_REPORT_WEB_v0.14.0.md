# P6–P8 v0.14.0 QA

| Test | Result |
|---|---|
| Node app.js and extension.js syntax | PASS |
| Chromium desktop 1440px / mobile 390px: image load, save | PASS |
| P6 original output 2800×1800 retained | PASS |
| P6 JPEG quality=80 and sidecar ZIP structure | PASS |
| P7 CSV 6 RGB pairs (synthetic test), 17³ LUT generation | PASS |
| P7 training ΔE00 4.43 → 1.41 on synthetic pair data | PASS; not independent camera validation |
| P8 split preview overlay and slider | PASS |
| P8 Undo 100→60→100→60, custom preset save | PASS |
| P8 2-photo JPG ZIP, files readable by Python zipfile | PASS |
| P5 category switch resets grain | PASS |
| Browser JS page errors | 0 |
| Android ColorEngine/FilmFx 77/20,097 test, P7 CSV calibrator | PASS |
| Android MainActivity Android SDK compilation | NOT VERIFIED |
| Real mobile HEIC/10bit HDR | NOT VERIFIED; prior P4 fallback retained |
| GitHub Pages public rendered page | NOT VERIFIED unless verified separately |
| P7 measured manufacturer fidelity on held-out patches | NOT VERIFIED |

**Browser testing limitation:** Chromium navigation to both localhost and public URLs was blocked by the test environment. Browser tests injected actual HTML+scripts into the same page instead of navigating live Pages. LocalStorage persistence on a proper HTTP origin must be tested on a user device.