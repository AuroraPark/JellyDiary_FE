![image](https://github.com/AuroraPark/JellyDiary_FE/assets/47839204/f142244d-c200-4318-94a9-93258809f9ae)


# Jelly Diary

## 반려 동물의 일상 기록 부터 공동 육아 까지 한번에 가능한 다이어리 웹 서비스

# 프로젝트 배경

반려동물 522만 시대, 반려동물 특화 소셜 네트워크

단순히 정보를 공유하는 것을 넘어 사용자 간의 교류를 가능하게 하여 반려동물의 일상 관리에 있어 공동의 노력과 지식을 통합할 수 있는 공간을 제공하고자 함.

# 데모 - [🐾 Jelly Diary](https://jellydiary.life/login)

<img width="1270" alt="스크린샷 2024-05-27 오후 7 13 39" src="https://github.com/AuroraPark/JellyDiary_FE/assets/47839204/6435ee57-1c83-4e2f-9948-bc0473351760">


# 주요 기능

- 소셜 로그인 기능
- 소규모 그룹 다이어리 기능
- 피드형 소셜 네트워킹 기능
- 채팅 기능
- 각종 활동 알림 기능

# 프로젝트 구조

![image](https://github.com/AuroraPark/JellyDiary_FE/assets/47839204/91c6de6d-cb74-4d04-91e8-1b917168c9d1)

# 기술 스택, 기술 선정 이유

![image](https://github.com/AuroraPark/JellyDiary_FE/assets/47839204/04c50445-3283-4695-9380-63eb0023b7d2)


## React

React 는 JavaScript 라이브러리로써, 다이어리 특성 상 컴포넌트 단위의 렌더링 구조를 가지고, 재사용성을 높이는 것이 필요하다고 생각했습니다. 따라서 다양한 툴을 활용 할 수 있고 추후 반응형 개발의 확장성을 고려해 보았을 때 적절하다고 판단되어 사용하게 되었습니다.


## TypeScript

TypeScript는 JavaScript 기반의 정적 타입 문법을 추가한 프로그래밍 언어로 타입을 사용할 수 있기 때문에, 협업에 앞서 컴파일 에러를 줄이기 위한 도입이었습니다. 또한 React와의 호환성이 좋기 때문에 React를 사용하는 이번 프로젝트에 적합하다고 생각하였습니다.

## Vite

ESM 방식의 빠른 빌드를 지원하기 때문에 Vite 번들러를 이용하였습니다.

## Styled-Components

컴포넌트 자체에 특정 스타일링을 할 수 있기 때문에 재사용성을 높일 수 있고, JS-in-CSS 로 스타일링을 더욱 간편하게 구현할 수 있어 적용하게 되었습니다.

## React-Query(TanStack Query)

API 통신과 비동기 데이터 관리를 위해 도입하였습니다. 서버상태를 불러오고, 캐싱 하며, 지속적으로 동기화하고 업데이트가 가능합니다.
또한 리액트 컴포넌트 내부에서 간단하고 직관적으로 API를 사용할 수 있습니다.

## Zustand

클라이언트 단에서 상태 변화에 따라 불필요한 컴포넌트 렌더링을 최소화 하기 위해 도입하였습니다.


# 기술적인 고민과 해결 방법

# 커밋 메시지와 브랜치 관리

# 폴더 구조

# 기대 효과

# 활용 분야
