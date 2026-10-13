# QA Report — Photo Recipe Studio WEB v0.6.3

| 테스트 항목 | 결과 |
|---|---|
| Chromium에서 사진 열기 버튼 클릭 → 실제 파일 선택창 열림 | PASS |
| 손상 JPG 선택 → 오류 메시지 | PASS |
| 손상 JPG 후 버튼 재사용 → 정상 JPG 열기 | PASS |
| Velvia 필터 RGB 변화 | PASS (테스트 이미지 평균 변화 3.9/255) |
| Ricoh GR Hard Monotone 흑백 픽셀 | PASS |
| 8192×5464 고해상도 JPG 열기 | PASS (미리보기 2204×1470) |
| 키보드 Enter로 사진 선택 | PASS |
| 필름그레인·할레이션 적용 | PASS |
| 확대/축소, Fit 버튼 | PASS |
| JPG 저장 (다운로드 및 파일 존재 검증) | PASS |
| 모바일 390px 터치로 파일 선택 | PASS |
| 브라우저 `pageerror` | 0건 |
| JavaScript 구문 파싱 | PASS |
| HTML 저장소 파일/ZIP 검증 | PASS |

## 미검증 항목
- 공개 GitHub Pages CDN의 최종 업데이트 여부 (외부 원격 브라우저 접속 제한)
- 모든 HEIC/HEIF 브라우저 조합
- 50MP 및 초저사양 Android 장치의 장시간 스트레스 테스트
- 제조사 색상 프로파일에 대한 객관적 색차 정확도

버전: 0.6.3. 웹 전용 안정화 패치이며 Android APK 엔진은 변경하지 않음.