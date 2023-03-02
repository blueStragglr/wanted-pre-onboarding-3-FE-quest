# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제


- [x] NextJS 등의 SSR 어플리케이션이 아닌, CSR 어플리케이션을 구축한다.
- [x] 최소 3개 이상의 페이지를 가지도록 구현한다.
- [x] 모든 페이지에 공통으로 반복되는 헤더와 사이드바가 있도록 구성한다.

![image 1](https://user-images.githubusercontent.com/18395475/222419988-8f3d6e10-9a03-4a6d-b7c8-86adb7570db2.png)

```
├── src
│   ├── components
│   │   ├── ErrorPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── Nav.tsx // 사이드바
│   │   ├── PageA.tsx
│   │   ├── PageB.tsx
│   │   ├── PageC.tsx
│   │   └── layout
│   │       ├── PageLayout.css
│   │       └── PageLayout.tsx // 공통 반복되는 헤더, 사이드바 포함하는 레이아웃 컴포넌트
│   ├── index.css
│   ├── main.tsx
│   ├── links.tsx // Nav와 router에서 사용할 path, component 모음
│   ├── router.tsx // react-router의 Router 생성

```

- 3개의 페이지가 고정되는 앱이 아니라, 여러 개의 페이지가 언제든 추가될 수 있다고 생각하고 프로젝트를 수행해 보세요.
  - => links.tsx에서 페이지 path, 페이지 이름, 컴포넌트 관리하고, router.tsx에서 레이아웃 사용 여부에 따라 children에 추가하였습니다
- 만들어진 페이지별로 로그인 여부를 판단하고자 한다면 어떻게 구조를 확장해야할지 고민해 보세요.

추가로, 여유가 있다면 유저네임과 비밀번호를 받아 로그인을 수행할 수 있는 페이지를 만들어 보세요. 실제 API는 연결하지 않아도 되며, 로그인 페이지는 공통 레이아웃(상단 네비게이션 바 및 사이드바)이 적용되지 않도록 만들어 주세요. 
