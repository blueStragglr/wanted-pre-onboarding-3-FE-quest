# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제

## 실행 방법
```
npm istall
npm start
```
코드 실행 시 localhost 3000 포트에서 실행됩니다.

## 요구사항

- [x] NextJS 등의 SSR 어플리케이션이 아닌, CSR 어플리케이션을 구축한다.
- [x] 최소 3개 이상의 페이지를 가지도록 구현한다.
- [x] 모든 페이지에 공통으로 반복되는 헤더와 사이드바가 있도록 구성한다.

## 배포링크
[배포링크](https://master--magical-torte-0cad0e.netlify.app/)


## 디렉토리 구조
```bash
/src
├── components 
│   ├── Header.tsx
│   └── NavBar.tsx
├── pages    
│   ├── Root.tsx
│   ├── auth
│   │   ├── SignInPage.tsx
│   │   └── SignUpPage.tsx
│   ├── contents
│   │   ├── MainPage.tsx
│   │   ├── PageA.tsx
│   │   ├── PageB.tsx
│   │   └── PageC.tsx
│   ├── PageLayout.tsx
│   └── NotFoundPage.tsx
├── App.tsx
├── router.tsx
├── index.css
└── index.tsx
