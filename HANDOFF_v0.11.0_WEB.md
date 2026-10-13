# Photo Recipe Studio v0.11.0 — P5 누적 인수인계

## 기반
v0.10.0 P4의 GitHub Pages 코드, 77개 Sony 카메라 레시피, P0~P3, HEIC lazy browser converter, JPG export/zoom/EXIF를 보존. P5는 색상 알고리즘/Filmx 수치 변경 없이 설정 초기화와 모바일 UI만 수정.

## 레시피 전환
- 웹: `resetGrain()` — grain=0 / grainSize=30 / grainSharp=0 값을 슬라이더 및 표시 수치에 반영.
- `chooseRecipe()` — 실제 id가 다를 때만 초기화하고 새 보정 미리보기를 요청. recipe chip, category select 두 경로에서 공통 사용.
- 동일 레시피를 누르거나 다른 옵션을 바꾸면 그레인 값 유지.
- 그레인 초기화 버튼 `grainReset`으로 수동 수행.
- **할레이션, LUT, EXIF 설정은 변경하지 않음**. 추천 질감 버튼을 누른 경우에만 다시 입자 추천을 적용.
- Android: MainActivity.selectRecipe() / clearGrainOnRecipeChange()를 두 Spinner에 공유. programmatic SeekBar 변경은 user=false라 중복 렌더를 줄임.

## Mobile layout
- <=850px에서 stage-wrap sticky top, image height clamp(190px,34svh,320px); 필터 비교·Fit 유지.
- recipe chips nowrap horizontal scrolling; filter strength 항상 노출.
- Brand/P0/P1/P2/LUT 고급 설정은 details 접힘; recipe detail도 접힘. Desktop 기본 펼침.
- 모바일에서 JPG 저장/필터 초기화 버튼 sticky bottom.
- Android에서는 Native 4개 고급 스위치 기본 접힘, 카테고리/레시피/강도 노출.

## QA
Chromium 1440×900, 390×844, 360×740 실제 JPEG import, reset/retention/halation tests, saved JPEG, JS pageerrors 0; PASS.
Android Java suite: 77 source recipes / 20,097 inputs, FilmFX/LUT smoke PASS. No Android SDK Gradle/real phone build performed.
SourceOnly ZIP/standalone HTML does not contain vendor/heic2any.min.js. Offline full package through official GitHub main.zip.
No camera manufacturer measured ΔE/accurate film calibration introduced.