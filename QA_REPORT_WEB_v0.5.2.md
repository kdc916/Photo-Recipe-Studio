# QA — Photo Recipe Studio Web v0.5.2

## Passed
- Source Sony recipe count 77 and settings unchanged.
- Java ColorEngineRegressionTest and LookProfilesRegressionTest.
- RecipeSweepTest: 20,097 source preset/sample conditions.
- BalancedLookTest: 0%-filter identity, 50% mix, neutral gray drift, GR dark-region bounds, alpha preserved.
- Java vs JavaScript parity: **7,392/7,392 exact**, maximum RGB channel difference 0.
- JavaScript syntax compilation.
- HTML/ZIP packaging integrity.

## Not yet verified
- Subjective match to every user photo in calibrated display conditions.
- Camera reference photos / color chart ΔE2000.
- Android SDK Gradle v0.5.2 build & real-device camera pipeline.
- Browser-vs-Android ICC / EXIF image decoding equivalence.

## Manual test
Use one natural portrait with light skin, one sunset/red sign and one dark-pavement scene. Check Fuji Velvia: clear skin and only mildly punchy primary colors. Check GR Positive: slight saturation with detailed darker blacks. Compare brand-ON vs OFF, 0% vs 100%, photo preview vs JPEG export.