# Photo Recipe Studio — 누적 인수인계 v0.6.3

## 기반
- 공식 저장소 https://github.com/kdc916/Photo-Recipe-Studio
- v0.6.2 단일 HTML 인라인 엔진 안정 기준 유지
- 77개 소니 PMCA 레시피, 12개 카테고리, 브랜드별 특징 보정, P0 색상 보호, 그레인, 할레이션, EXIF, 8배 확대, 원본/보정 비교, JPG 내보내기 유지
- 색상 계산 계수 변경 없음. HTML/JavaScript 웹 버전만 이번 패치 대상으로 수정. Android v0.6.2의 사진 열기 동작은 별개의 SAF 방식임.

## 재현한 실제 문제와 원인
- 기존 `setDisabled(true)`는 사진 불러오는 동안 `el.open.disabled=true` 처리.
- `openFile()`의 `catch` 블록에는 `setDisabled(false)`가 없어, 손상 JPG 또는 브라우저에서 지원하지 않는 사진을 한번 열면 파일 선택 버튼이 영구적으로 잠김.
- 기존 `decode()`는 원본 고해상도를 통째로 `createImageBitmap(file)` 디코딩 후 Canvas에서 축소하므로 고화소 사진 로딩 시 불필요한 메모리 피크 위험.
- JS로 파일 선택 창을 열던 방식을 브라우저 기본 `label for=file`로 변경하여 사용자 제스처 의존성을 줄임.

## 수정 파일
- `index.html`: 사진 열기 label + file input, 클릭/키보드 핸들러, 로딩 실패 복구, 대용량 디코딩 개선, 기존 이미지 보존, 동일 파일 재선택 처리, 버전 표기.
- `README.md`: 설치 방법 및 검증.
- `HANDOFF_v0.6.3_WEB.md`: 본 문서.
- `QA_REPORT_WEB_v0.6.3.md`: 세부 검증 결과.

## 디코딩 설계
1. 브라우저 `Image()`로 원본 크기를 확인하고 비동기 에러/시간초과(20초)를 표시.
2. 최대 미리보기 픽셀에 맞게 목표 크기를 계산 (기본 최대 3.24MP, 메모리 제약 시 더 작음).
3. `createImageBitmap(file,{resizeWidth,resizeHeight})` 축소 디코딩을 시도하고 미지원 시 HTMLImageElement+Canvas로 대체.
4. 이미지·메타데이터 읽기에 성공한 후에만 기존 preview/state를 교체.
5. 실패 시 원래 이미지를 보존하고 `사진 열기`는 재선택 가능한 상태로 유지.
6. 저장도 기존 20MP 상한을 유지하되 보고되는 `navigator.deviceMemory`에 따라 6MP/10MP 제한을 적용할 수 있음.

## 자동 테스트
- Chromium PC 파일 선택 창(마우스) 및 모바일 파일 선택 창(탭) 동작.
- `broken.jpg` 선택 실패 이후 같은 버튼으로 정상 JPG 성공.
- Velvia RGB 차이, Ricoh Hard Monotone 순수 흑백.
- 8192×5464 JPEG 입력에서 2204×1470 미리보기 생성.
- FX grain/halation, 확대/원복, JPG 내보내기, JS 런타임 오류 없음.
- 네트워크 연결 없이 브라우저에서 작동 확인.

## 남은 한계
- 실제 GitHub Pages 원격 배포/브라우저 캐시 상태 검증 필요.
- 모든 HEIC/HEIF 지원 보장 불가 (브라우저 네이티브 디코더에 의존).
- 사용자 기기별 50MP 이상, 저사양 브라우저 메모리 제한 추가 검증 필요.
- 제조사 색감 정량 검증(ΔE)과 개별 LUT 캘리브레이션은 별도 작업.