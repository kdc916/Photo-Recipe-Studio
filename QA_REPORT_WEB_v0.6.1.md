# QA: Photo Recipe Studio v0.6.1

| Test | Outcome |
|---|---|
| Default FACTORY (ST) 100% yields zero RGB change | PASS (intentional) |
| Fuji Velvia and GR Positive change RGB on sample JPEG | PASS |
| Compare original → select new recipe → processed preview | PASS |
| Compare original → toggle P0 → processed preview | PASS |
| Compare original → change filter strength → processed preview | PASS |
| View badge indicates original vs processed | PASS |
| 77 recipe source files and Java smoke | PASS |
| Java source syntax | PASS |
| JS page errors in headless Chromium testing | NONE |
| APK build on Windows / actual Android install | NOT VERIFIED |
| Manufacturer-calibrated photo color matches | NOT VERIFIED |

P0 protects highlights/chroma; don't expect a visibly different film look when toggling P0 on the separately balanced Velvia / Ricoh presets. Readout is approximate mean absolute RGB difference, not Delta-E.
