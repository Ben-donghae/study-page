# KOCHI MARKETING 레퍼런스 웹사이트 개발 PRD (제품 요구사항 정의서)

## 1. 프로젝트 개요 (Executive Summary)
**KOCHI MARKETING 레퍼런스 기반 웹사이트 개발 프로젝트**는 인플루언서와 브랜드를 연결하는 중화권 마케팅 플랫폼을 구축하는 것을 목표로 합니다. 본 프로젝트는 React 기반의 SPA(Single Page Application) 구조를 채택하여 빠른 응답성과 앱과 같은 사용자 경험을 제공합니다.

## 2. 핵심 목표 (Key Objectives)
*   **플랫폼 구축**: 인플루언서와 브랜드 간의 연결 고리 제공.
*   **사용자 편의성**: 직관적인 UI/UX 및 모바일 반응형 디자인 구현.
*   **비즈니스 효율화**: 결제 및 고객 상담 자동화/통합.

## 3. 기술 스택 및 시스템 구조 (Technical Stack & Architecture)
*   **프론트엔드**: React.js (SPA 구조)
*   **스타일링**: CSS (Mobile-first, Responsive Design)
*   **최적화 전략**:
    *   비동기 스크립트 로딩 (Async Script Loading)
    *   Lazy Loading (이미지 및 컴포넌트 지연 로딩)
*   **사용자 경험 (UX)**:
    *   PWA (Progressive Web App) 지원

## 4. 주요 기능 요구사항 (Functional Requirements)

### 4.1. 사용자 기능
*   **다국어 지원**: 한국어(KO) / 중국어(CN) 인터페이스 전환.
*   **네비게이션**: 명확한 정보 구조를 가진 직관적인 메뉴.

### 4.2. 필수 통합 기능 (Integrations)
*   **결제 시스템**: PortOne SDK 연동 (안전한 결제 처리).
*   **고객 지원**: ChannelIO 라이브 챗 연동 (실시간 상담).
*   **데이터 분석 & 트래킹**:
    *   Google Analytics
    *   Facebook Pixel
    *   Naver Analytics
    *   Microsoft Clarity

## 5. 마케팅 및 SEO 최적화 (Marketing & SEO)
*   **SEO (검색 엔진 최적화)**:
    *   Open Graph (OG) 태그 설정.
    *   Twitter Card 설정.
    *   네이버 사이트 소유권 확인 (Naver Site Verification).
*   **소셜 공유**:
    *   커스텀 썸네일 이미지 지원 (권장 규격: 1200x630px).

## 6. 프로젝트 일정 (Timeline)

| 단계 | 기간 | 주요 활동 | 마감 기한 |
| :--- | :---: | :--- | :--- |
| **Day 1: 기획 및 설계** | 8H | 요구사항 분석, 와이어프레임/사이트맵 작성, 기술 스택 확정, 디자인 시안 | 1월 17일 |
| **Day 2: 개발 환경 구축** | 8H | React 프로젝트 설정, 필수 라이브러리 설치, 레이아웃 개발 | 1월 18일 |
| **Day 3: 핵심 기능 개발** | 10H | UI 구현, API 연동, 결제/상담 시스템 통합, 반응형 적용 | 1월 19일 |
| **Day 4: 테스트 및 배포** | 8H | 크로스 브라우저/모바일 테스트, 성능 최적화, 최종 배포 | 1월 20일 |

## 7. 추가 고려사항 및 제약조건 (Constraints & Prerequisites)
*   **사전 준비 사항**:
    *   도메인 및 호스팅 환경.
    *   외부 서비스 계정 정보 (PortOne, ChannelIO, Analytics 등).
    *   콘텐츠 리소스 (텍스트, 이미지) - Day 1 마감 전 제공 필요.
*   **유지보수 및 수정**:
    *   각 단계별 1회 수정 가능 (추가 수정 시 일정 조정 요망).

## 8. 레퍼런스 (Reference)
*   **타겟 레퍼런스 사이트**: [https://kochi.kr/](https://kochi.kr/)
