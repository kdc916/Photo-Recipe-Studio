# Photo Recipe Studio WEB v0.6.3 — Photo Import Stabilization

GitHub Pages에서 바로 실행하는 **오프라인 브라우저 사진 보정 앱**입니다. 77개 원본 Sony 레시피, 브랜드별 보정, P0, 그레인/할레이션, EXIF, 핀치 확대 및 JPG 저장을 유지합니다.

## v0.6.3 수정 사항

1. **사진 열기 버튼 잠김 오류 해결.** v0.6.2는 읽을 수 없는 JPG를 선택하면 `setDisabled(true)`로 사진 열기 버튼을 비활성화하고, 실패한 뒤 다시 켜주지 않았습니다. 이제 사진 열기는 재시도할 수 있도록 항상 열려 있습니다.
2. **파일 선택 작동 방식 변경.** JS `.click()` 경유 대신 HTML 표준 `label[for=imageInput]`을 사용합니다. 키보드 Enter/Space도 동작합니다.
3. **동일 파일 재선택 지원.** 파일 input 값을 이벤트 시작 시 바로 초기화합니다.
4. **고해상도 사진 개선.** 이미지의 원본 크기를 먼저 파악하고 `createImageBitmap`의 축소 디코딩을 시도합니다. 지원하지 않는 브라우저는 Canvas 축소로 대체합니다. 기기 메모리가 작은 경우 미리보기/저장 해상도 상한을 낮춥니다.
5. **실패 후 복구.** 새 사진을 읽지 못해도 이미 불러온 정상 사진을 삭제하지 않으며, 실패 사유를 표시하고 다음 사진 선택이 가능합니다.
6. **기존 컬러 계수는 변경하지 않았습니다.** v0.6.2 색상 엔진, 77개 설정 및 효과 기능 유지.

## GitHub Pages 사용 방법

압축을 풀어 **파일 자체를 저장소 루트**에 업로드하세요. GitHub Pages의 `Settings → Pages → Deploy from a branch → main → /(root)`를 사용합니다.

웹 앱: https://kdc916.github.io/Photo-Recipe-Studio/?v=0.6.3

배포가 반영될 때까지 시간이 걸릴 수 있습니다. 이전 버전이 보이면 `Ctrl+Shift+R`로 새로고침하세요.

## 검증

Chromium 브라우저에서 실제 사진 선택 창 클릭, 손상 JPG 실패 후 재시도, 정상 JPG, Velvia 색상 변환, Ricoh Hard Monotone 완전 흑백, **8192×5464 JPEG**, 휠 확대, Fit 복귀, 필름 FX, JPG 내보내기, 390px 모바일 화면 파일 선택까지 통과했습니다. `pageerror` 없음.

공개 Pages CDN이 최신 빌드를 실제로 제공하는지와 모든 HEIC/HEIF 브라우저 지원 여부는 별도로 검증해야 합니다. 일부 브라우저에서는 HEIC가 지원되지 않아 JPG/PNG로 변환이 필요할 수 있습니다.

참고: 색감은 제조사 공식 LUT가 아닌 근사 구현입니다.