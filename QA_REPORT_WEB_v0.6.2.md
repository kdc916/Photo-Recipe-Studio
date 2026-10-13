# QA Report — WEB v0.6.2

| Test | Result |
|---|---|
| Single bundled script and JS syntax | PASS |
| Engine startup self-check: factory identity / B&W neutral | PASS |
| Browser real JPEG import, P0 + original compare | PASS |
| Velvia changes RGB | PASS (mean absolute 3.9/255 on test image) |
| GR Positive Film changes RGB | PASS (8.2/255) |
| GR Hard Monotone remains grayscale | PASS (884736/884736 pixels) |
| Browser JPG export | PASS |
| Browser JS errors | NONE |
| Java 77-recipe smoke, regression, monochrome tests | PASS |
| Live GitHub Pages remote access from this environment | NOT VERIFIED |
| Windows Android APK real build and phone tests | NOT VERIFIED |

Note: v0.6.1 user screenshots prove the engine was absent, not that color coefficients were ineffective. This patch removes split-script dependency, adds startup diagnostics and fixes a separate monochrome cast.