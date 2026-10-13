# Photo Recipe Studio WEB v0.6.4 — 누적 인수인계

## 사용자에게 보고된 현상
v0.6.3에서 카테고리/레시피 목록과 사진 로딩이 모두 작동하지 않음. 하단 상태는 HTML에 기록된 초기 텍스트였으며 실행 후 상태가 아니라는 점에서 JavaScript 초기화 자체가 중단된 것으로 판단함. 기존 v0.6.3은 로컬 Chromium에서는 작동했으므로 실제 사용자 페이지에서의 트리거는 확정하지 못함.

## 수정
1. 기존 `index.html` 내부의 단일 약 100KB 스크립트(레시피 + 컬러 엔진 + UI)를 `app.js`로 완전히 분리. 외부 의존 없음.
2. `index.html`은 HTML/CSS, 초기화 실패 진단 및 버전 문자열을 포함.
3. 별도 부트스트랩은 스크립트 다운로드 오류, JavaScript 예외, 2.5초 후 엔진 미시작 상황에 가시적인 에러 표시.
4. `window.PRS_BOOT` 상태: loading/ready/error. `window.PRS_DIAGNOSTIC.engineReady`는 흑백/FACTORY 자가 검사 결과.
5. `app.js?v=0.6.4` 캐시 버전 갱신. `.nojekyll` 마커로 Jekyll 빌드 우회.
6. 77개 Sony 원본 설정, v0.6.3 색상 계수, P0, EXIF, 필름 FX, 확대, 내보내기 로직은 변경하지 않음. Android는 변경 없음.

## 테스트
- Playwright + Chromium에서 독립 HTML, GitHub Pages형 HTML에 app.js를 별도 data URL로 제공한 모의 환경을 각각 1480px PC / 390px 터치 모바일에서 실행.
- 12개 분류, 손상 JPG 이후 재선택, 8192×5464 JPG, Velvia 색상 변화(샘플 평균 RGB 차이 약 3.9/255), GR Hard Monotone 3,239,880 픽셀 완전 흑백, JPG 다운로드, 0건 JS pageerror 통과.
- 의도적인 app.js 실행 실패 상황은 2.5초 내 가시적인 오류 메시지를 출력.
- 실제 GitHub Pages CDN 응답/확장프로그램/사용자 PC 테스트는 미검증.

## 배포
GitHub 저장소 `kdc916/Photo-Recipe-Studio`의 루트에 `index.html`, `app.js`, `.nojekyll`가 필요. GitHub Pages main/(root) 설정 유지. 단독 오프라인 실행용 HTML은 별도 ZIP 외부 파일로 제공.

## 재발 시 진단
스크린샷에 '앱 초기화 실패' 메시지가 있는지 확인하고, 개발자 도구 콘솔/네트워크 탭에서 app.js 다운로드 성공 여부를 확인. 성공한 앱은 `window.PRS_DIAGNOSTIC.engineReady===true`.