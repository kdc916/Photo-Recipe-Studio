# QA v0.10.0 P4

| Feature | Result |
|---|---|
| 77 Sony original camera recipes unchanged | PASS |
| Grain Sharpness 0% legacy formula intact | PASS |
| Grain Sharpness 100% preserves coarse noise + adds fine | PASS |
| Flat-photo neighboring RGB difference 193,888 → 301,123 | PASS, 1.55× |
| Java grain neutral monochrome and zero-intensity tests | PASS |
| Java 77 recipes / 20,097 samples, FilmFx/LUT | PASS |
| Chromium desktop 1440px and mobile 390px | PASS |
| Standard JPG file upload and JPG export | PASS |
| HEIC failed-native → mocked local HEIC conversion | PASS (mock, not real HEVC) |
| HEIC converted file cached for export | PASS (mock) |
| HEIC conversion error → prior good image preserved | PASS |
| Ricoh GR Hard Monotone B&W neutral | PASS |
| JS page errors | NONE |
| Actual iOS/Android HEIC/HEIF decoding and HDR | NOT VERIFIED |
| Windows Gradle APK compilation/phone install | NOT VERIFIED |
| Public GitHub Pages CDN propagation | NOT VERIFIED |