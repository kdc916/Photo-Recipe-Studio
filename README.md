# Photo Recipe Studio WEB v0.6.4 — Runtime Recovery

GitHub Pages / 로컬 정적 서버 사진 보정 앱. 기존 77개 Sony Recipe Lab 레시피, 브랜드 보정, P0, 그레인/할레이션, EXIF, 확대 및 JPG 저장은 그대로 유지합니다.

## 변경 사항
- 대용량 컬러 엔진 JavaScript를 `index.html`에서 별도 **`app.js`** 파일로 분리.
- HTML 안의 독립적인 작은 진단 스크립트는 엔진이 로드되지 않거나 초기화되지 않으면 `앱 초기화 실패` 메시지를 표시.
- `./app.js?v=0.6.4` 로드로 브라우저 캐시 혼선 완화.
- `.nojekyll`을 통해 GitHub Pages의 Jekyll 처리를 피함.
- 원래 작동하던 사진 선택 / 손상 이미지 후 재시도 / 미리보기 / JPG 저장 로직 및 모든 컬러 계산식은 변경하지 않음.

## 파일 구성
`index.html`, `app.js`, `.nojekyll`, `README.md`, `HANDOFF_v0.6.4_WEB.md`, `QA_REPORT_WEB_v0.6.4.md`

**중요:** GitHub Pages에서는 반드시 `index.html`과 `app.js`를 같은 디렉터리(저장소 root)에 배치하세요. 별도의 단독 실행 HTML 파일은 제공되며 app.js 없이 작동합니다.

## 실행 및 확인
- https://kdc916.github.io/Photo-Recipe-Studio/?v=0.6.4
- 화면 아래에 `컬러 엔진 준비 완료 · 77개 레시피`가 뜨고, 카테고리 12개가 나타나야 합니다.
- 실패 시 화면에 `앱 초기화 실패` 원인을 표시합니다. 이전 파일이 보이면 Ctrl+Shift+R로 새로고침하세요.

## 자동 검증
Chromium에서 PC / 모바일 각각 독립형 HTML 및 외부 app.js 모의 로드로 전체 테스트: 12개 카테고리, 파일선택/재시도, 8192×5464 JPG 로드, Fuji Velvia RGB 변화, Ricoh GR Hard Monotone 완전 흑백, JPG 저장 모두 통과. JS pageerror 0건. 고장난 JS를 제공할 때 초기화 실패 메시지 표시됨.

**검증 한계:** GitHub Pages 원격 서버가 새 스크립트를 실제로 제공하는지와 사용자 PC에서 문제가 사라졌는지는 직접 검증하지 못함.
## 확인된 실제 오류 원인

이전 v0.6.3에서는 로컬 테스트 파일과 GitHub에 업로드된 실제 스크립트가 달랐습니다. GitHub 버전의 `p0SubjectGuard()` 반환식 두 곳에 여분의 여는 괄호가 있어 `SyntaxError: Unexpected token ;`가 발생했습니다. 이 경우 **레시피 목록과 사진 선택 이벤트 모두 초기화되지 않습니다.** 해당 괄호를 수정하고, GitHub에서 실제 파일을 다시 받아 JavaScript 구문 검사를 통과했습니다.

