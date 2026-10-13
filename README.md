# Photo Recipe Studio WEB v0.6.2 — Engine Runtime Restore

## Fixed: no color change on GitHub Pages
The user supplied real screenshots of v0.6.1 showing `미리보기 처리 오류: PRSEngine is not defined` when trying FACTORY, Velvia, Ricoh GR Positive and GR Hard Monotone. This means filtering was **not running**, even though UI and the original image loaded correctly. The exact remote loading trigger was not reproduced locally.

v0.6.2 bundles recipe data, `PRSEngine`, and UI code into **one inline script**; preview and JPG export share that initialized processor. At startup `window.PRS_DIAGNOSTIC` checks Factory RGB identity and B&W neutrality and reports `컬러 엔진 준비 완료` when healthy. Uncaught JS errors are visible in status.

Also fixed a separate problem: Ricoh GR group fallback color finishing was tinting black-and-white looks. Monochrome processing now skips chromatic brand finishing.

## Confirm the repair
Open **https://kdc916.github.io/Photo-Recipe-Studio/?v=0.6.2**. Hard-refresh (Ctrl+Shift+R) if an older version is cached. Check for the startup status `컬러 엔진 준비 완료`, then load a JPEG and choose Fuji Velvia, Ricoh GR Positive, and Ricoh GR Hard Monotone. The first two should show nonzero RGB change; the last must display true grayscale.

## QA
In headless Chromium with a real JPEG input: Factory unchanged, Velvia mean RGB delta 3.9/255, GR Positive 8.2/255, GR Hard Monotone 884,736/884,736 gray pixels, JPG export successful, no JS errors. Android Java smoke + monochrome regression passed. These values depend on the test photo and are not camera LUT calibration. Real public Pages rendering and Android device builds have not been verified from this environment.

## Features
77 source presets / 12 categories; P0 color safety ON/OFF; brand-character toggle; image zoom and Fit; compare original; film grain; halation; EXIF hints; JPG save. Offline processing with no external library/backend.

Build v0.6.2 | GitHub Pages main / (root).
