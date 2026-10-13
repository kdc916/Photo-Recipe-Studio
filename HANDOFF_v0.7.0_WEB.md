# Photo Recipe Studio — Cumulative Handoff v0.7.0 WEB

## Stable baseline
v0.6.4 restored loading by keeping `index.html` and `app.js` separate with script syntax checking, native file picker and startup diagnostics. v0.7.0 preserves those components.

## P1 code and controls
The app adds `P1_PROFILES` (20 film IDs) and `p1Finish(rgb,preCreative,sourceRgb,profile)`. Variables: legacy mix, bounded saturation, film-specific toe and shoulder, highlight shift, warmth/magenta, 6-sector hue response, broad warm-midtone protection. This is a restrained creative interpretation, NOT an official manufacturer LUT, face detector or calibrated camera/sensor pipeline.

Profiles: Fuji r009,r011,r012,r013,r014,r017,r018; Kodak r029,r030,r031,r032,r035,r036; Ricoh GR r047,r048,r049,r051; Leica r055,r056,r057. Other 57 recipes unaffected. P1 ON default but applies only if P0, brand look and a matching color profile are enabled. P1 OFF restores exactly v0.6.4 RGB output. Existing P0 safety runs before P1 finishing; no new global saturation multiplication or chromatic conversion of B&W.

## Manufacturer descriptions used for qualitative direction
- Fuji Velvia: https://www.fujifilm-x.com/global/products/film-simulation/velvia/
- Fuji Reala Ace: https://www.fujifilm-x.com/global/products/film-simulation/reala-ace/
- Fuji Classic Negative: https://www.fujifilm-x.com/ko-kr/products/film-simulation/classic-neg/
- Fujifilm range: https://www.fujifilm-x.com/ko-kr/products/film-simulation/
- Kodak Portra brochure (natural skin): https://www.kodak.com/global/plugins/acrobat/en/professional/products/films/portra/portraBrochure11x17.pdf
- Kodak Ektar 100 (ultra vivid): https://www.kodak.com/en/still-film/product/professional/ektar-100-film/
- Kodak E100 (moderate saturation, neutral): https://www.kodak.com/en/still-film/product/professional/ektachrome-e100-film/
- Leica Classic/Contemporary/Eternal: https://leica-camera.com/en-US/photography/leica-looks
- Ricoh Negative Film: https://www.ricoh-imaging.co.jp/english/products/gr-3/firmup/?s=08
- Ricoh Positive, B&W: https://www.ricoh-imaging.co.jp/english/support/qa/gr-3/index.html

## Validation
- P1 OFF vs v0.6.4 baseline: **12,936/12,936 exact RGB**.
- Java↔JS 400 P1 sample conditions: max channel delta 1.
- Chromium desktop/mobile photo import, P1 toggles, GR Hard Monotone grayscale, JPG export: PASS.
- Java engine regressions: 77 recipe catalog/source and 20,097 pixel suite, film FX PASS.
- GitHub uploaded app.js is parsed again before declaring completion.

## Android project
Separate v0.7.0 Android source ZIP is included outside repository. It adds FilmProfile.java, optional P1 pipeline, and a matching P1 UI switch. Windows BAT/PS1 unchanged except version/output filename. Android SDK/handset APK build not performed here.

## Future
P2 film grain and halation per stock, deeper emulation of cinema chemistry, other camera families, then measured color target calibration.