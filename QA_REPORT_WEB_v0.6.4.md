# Photo Recipe Studio WEB v0.6.4 — QA

| Check | Result |
|---|---|
| Node.js app.js syntax check | PASS |
| Standalone single-file HTML startup | PASS |
| Pages-style HTML + external script (data URL mock) | PASS |
| Desktop 1480px category list 12 / 77 presets | PASS |
| Mobile 390px touch: list / native picker | PASS |
| Corrupt JPG then normal JPG retry | PASS |
| 8192×5464 high-res input | PASS |
| Fuji Velvia produces visible RGB changes | PASS |
| GR Hard Monotone neutral RGB | PASS (3,239,880/3,239,880 pixels) |
| JPG export | PASS |
| External script absent or broken → visible error | PASS |
| JavaScript runtime page errors across successful scenarios | 0 |
| GitHub repository source update | Verified |
| Actual GitHub Pages CDN + user's browser after patch | NOT VERIFIED |

No color coefficient or Android change in v0.6.4; this is a web startup/deployment fix.