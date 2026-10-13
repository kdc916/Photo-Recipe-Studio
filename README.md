# Photo Recipe Studio — Web v0.5.0

Sony Recipe Lab 카메라 레시피를 기반으로 만든 오프라인 우선 정적 HTML 사진 보정 도구입니다.

**GitHub Pages용 단일 HTML**: `index.html`에 CSS, JavaScript, 77개 레시피, 브랜드 보정 프로파일이 모두 포함돼 있습니다. 외부 스크립트, npm, 빌드, 서버, API 키가 필요하지 않습니다.

## 기능

- Sony Recipe Lab 원본 설정 77개 / 12개 카테고리
- v0.5.0 Android 컬러 계산식 이식, 브랜드 보정 ON/OFF, 강도 0~100%
- 필름그레인(강도/크기), 할레이션(강도/반경)
- JPEG EXIF 메타데이터에서 카메라/ISO/WB/플래시/노출/조리개 확인 (참고 보정은 선택)
- 원본/보정 비교, Fit, 핀치/휠 확대, 더블탭, 드래그
- JPG 저장. 이미지 처리 전체는 브라우저에서 수행됩니다.

## GitHub Pages 배포

1. GitHub 저장소에 **압축 해제한 파일**을 업로드합니다. 반드시 `index.html`이 저장소 최상위(root)에 있어야 합니다. **ZIP 하나만 올리면 작동하지 않습니다.**
2. 저장소의 `Settings` → `Pages` → `Build and deployment`를 엽니다.
3. `Source`: **Deploy from a branch**, `Branch`: `main`, 폴더: **/(root)** → `Save`를 선택합니다.
4. 배포 후 `https://<GitHub아이디>.github.io/<저장소이름>/`에서 실행합니다. 배포에 시간이 걸릴 수 있습니다.

*GitHub Actions, 백엔드, API 키가 필요하지 않습니다.*

## 로컬에서 바로 실행

파일 탐색기에서 `index.html`을 브라우저로 열면 됩니다. Chrome/Edge의 최근 버전 권장. **로컬로 저장한 HTML**은 네트워크 없이 실행할 수 있습니다. **GitHub Pages 사이트가 오프라인에서도 항상 열리는 것은 아닙니다**(별도 PWA 캐시 없음).

## 사진 파일 및 성능

- JPG/PNG/WebP 권장. HEIC/HEIF는 브라우저에 코덱이 있을 때만 지원합니다.
- 미리보기 최대 **3.24MP**, JPG 저장 최대 **20MP**로 처리합니다. 큰 사진은 처리 시간이 길거나 메모리가 부족할 수 있습니다.
- 브라우저의 원본 ICC/ExifOrientation 해석이 Android `ImageDecoder`와 다를 수 있습니다. 브라우저 Canvas의 sRGB 작업 공간을 사용하지만, 픽셀의 동일성을 무조건 보장하지 않습니다.
- EXIF 참고 보정은 JPEG TIFF EXIF 일부 태그만 판독하며, RAW/DNG 현상이나 실제 색온도 추정을 지원하지 않습니다.
- 스마트폰의 앱 설치 기능이나 실시간 카메라 촬영은 포함되지 않습니다.

## 출처/라이선스 및 정확도

원본 레시피 소스: `recipe-lab-sony-pmca` (André Domingues, 2026, MIT), 원본 LICENSE 고지 포함.
브랜드 이름은 레시피 식별을 위한 것이며 제조사 공식 애플리케이션이나 LUT가 아닙니다. 색상값은 원본 Sony 카메라 설정과 경험적 근사 보정을 이용했습니다. 실제 제조사 사진 대비 ΔE 측정 검증은 아직 완료되지 않았습니다.

자세한 내용은 `HANDOFF_v0.5.0_WEB.md`, `QA_REPORT_WEB_v0.5.0.md`를 참고하세요.
