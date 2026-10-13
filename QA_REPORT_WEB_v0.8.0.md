# Photo Recipe Studio WEB v0.8.0 — P2 QA Report

| Check | Result |
|---|---|
| All 77 source recipes / 12 original groups | PASS |
| P2 color look count | 16 |
| Optional film texture recommendation count | 47 |
| P2 OFF matches v0.7.0 on 770 RGB inputs | PASS, mismatch 0 |
| Web ↔ Java, 16 looks × 16 colors = 256 | PASS, max channel diff 0 |
| Film FX default OFF until explicit apply | PASS |
| CineStill 800T texture 19/40/36/42 | PASS |
| Ilford Delta3200 texture 34/59/0/35 | PASS |
| Manual FX retained on film selection change | PASS |
| Nikon Flat P2 ON/OFF switches color mapping | PASS |
| GR Hard Monotone remains neutral B&W | PASS |
| Desktop 1400px, mobile 390px image import / JPG export | PASS |
| Browser JavaScript page errors | 0 |
| 77 native recipe regression / 20,097 pixel inputs | PASS |
| Actual Windows Android Gradle build | NOT VERIFIED |
| Official film scan / camera color delta-E calibration | NOT VERIFIED |
| Public Pages CDN propagation | NOT VERIFIED |

User should compare P2 ON/OFF on the same input photograph and inspect subtle stock-specific color differences. Texture is manual and independent from color strength.