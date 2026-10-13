# Web v0.5.0 테스트 보고서

## 자동 검사
- 레시피 77종, 카테고리 12종, 개별 룩 32종, 그룹 fallback 11종: 통과
- Android Java ↔ JavaScript RGB 비교 **7,392 / 7,392 완전 동일** (강도 0/50/100%; 브랜드 레이어 ON/OFF): 통과
- HTML 속성/JS 구문: 통과
- Chromium 데스크톱 렌더링: 통과
- Chromium 모바일 390px 렌더링: 가로 오버플로 0px
- 샘플 JPG 파일 불러오기 → 색상 전환 Velvia/GR Positive → 비교 → 250% 확대/Fit → 필름그레인/할레이션 → JPG 다운로드: 통과
- 브라우저 JavaScript exception: 없음

## 미검증 / 제한
- iOS Safari, 삼성 인터넷, Xiaomi 및 Galaxy 기기에서의 실측 동작 미검증
- HEIC/HEIF 디코딩은 웹 브라우저 코덱에 따라 다름
- 제조사 공식 LUT와의 ΔE2000 비교 미실시
- 실제 ICC 프로파일별 입력 파일과 동일 이미지 Android 출력 간 색차 측정 미실시
- 최대 20MP 메모리 소모는 다양한 모바일 실기기에서 추가 성능 테스트 필요
