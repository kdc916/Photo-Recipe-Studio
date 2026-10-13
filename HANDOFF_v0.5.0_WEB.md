# Photo Recipe Studio — Web v0.5.0 Handoff

## 목적
Android v0.5.0 (`PhotoRecipeStudio_Android_v0.5.0_ColorEngineZoom_FULL.zip`) 기능을 GitHub Pages용 HTML로 포팅.
**GitHub 업로드 및 배포는 아직 수행하지 않았습니다.** 사용자가 저장소를 지정하면 해당 저장소에 업로드할 수 있습니다.

## 배포 산출물
- `index.html`: 외부 의존성이 없는 단일 정적 파일 (77 recipe/32 direct look/11 group fallback 포함)
- `.nojekyll`: GitHub Pages에서 정적 파일 직접 제공
- `LICENSE`: Recipe Lab MIT 저작권 고지
- `README.md`: 로컬/Pages 실행 방법
- `QA_REPORT_WEB_v0.5.0.md`: 검사 결과

## Android v0.5 대응 내용
- 원본 카테고리 12종 및 레시피 77종 그대로 포함 (`sony_recipes_77.json` 기반)
- 브랜드 룩의 개별 32종 및 그룹 fallback은 Android `LookProfiles.java`에서 자동 추출 (11개 그룹 fallback; Sony는 기본 설정)
- `ColorEngine.java`의 선형 sRGB 게인, AWB/Kelvin/WB, DRO, 포토 이펙트, 대비 커브, hue-sector, vibrance, split-tone, shadow/highlight, strength 보간을 JavaScript로 이식
- `FilmFx.java`의 위치 고정 노이즈·블러 하이라이트 마스크·할레이션을 JavaScript로 이식
- JPEG EXIF의 Make/Model/ISO/Flash/WB/LightSource/ColorSpace/ExposureTime/FNumber/FocalLength 일부 읽기
- 휠/핀치/더블탭 확대, 팬, Fit, 원본/보정 비교
- JPG 95% 품질 다운로드

## 컬러 재현 검증
- **7,392 RGB 픽셀 케이스에서 Android v0.5.0 Java `ColorEngine.apply`와 웹 JS `pixel`의 결과가 정확히 일치**함.
- 77 레시피 × 브랜드 보정 ON/OFF 2종 × 강도 0/50/100% 3종 × 기준 픽셀 16개 = 7,392 조건.
- 이는 **이미 디코딩된 동일 RGB 입력**에 대한 산술 동등성 테스트로, ICC 및 JPG 디코더 차이로 인한 화면/파일 색차는 포함하지 않음.
- 사진 실제 색상 정확도, 제조사 공식 LUT/ΔE 검증은 미완료.

## 웹과 APK 차이
- 원본 Android: `ImageDecoder`가 입력을 sRGB로 변환한 후 Bitmap 처리.
- Web: 브라우저의 이미지 디코딩/ICC 색상 관리를 거쳐 Canvas sRGB 공간으로 입력. 기종·브라우저 차이가 남을 수 있음.
- JPG EXIF의 세부 태그만 처리. HEIC 등은 브라우저 디코딩 여부에 종속.
- Web JPG 다운로드는 Blob/Canvas로 생성되며 원본 EXIF 보존은 하지 않음. Android 내보내기도 원본 EXIF 보존이 보장되지 않음.
- Browser CPU/메모리 제약: 미리보기 최대 3.24MP, 저장 최대 20MP (Android와 동일 상한).
- 장시간 포토 필터 계산은 프레임 사이에 양보하나 실시간 GPU 구현은 아님.

## 후속 개발 우선순위
1. 다수 사진에서 Android 앱 JPG와 웹 JPG의 색차 측정
2. 3D LUT/톤 커브 기준 이미지 확보 후 정량 캘리브레이션
3. OffscreenCanvas/Web Worker + WebGL/WebGPU (고성능 환경에서만) 성능 개선
4. 저장 포맷(WebP/PNG), 더 나은 EXIF/ICC 처리는 추가 검증 후 진행

## 안전 기준
소스 이미지와 EXIF는 서버 업로드하지 않음. 외부 요청/API 없음. 회사별 룩은 보정 추정치이며 공식 필름 프로파일로 오인하지 않도록 UI에 고지.
