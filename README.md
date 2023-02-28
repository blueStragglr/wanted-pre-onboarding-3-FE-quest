# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제

<br>

## 시작하기

---

```
npm install

npm run dev
```

<br>
<br>

## 디렉토리 구조

---

```
src
 ┣ components // 페이지 구성 컴포넌트 폴더
 ┃ ┣ auth
 ┃ ┃ ┗ AuthForm.tsx
 ┃ ┗ layout
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┣ NavigationBar.tsx
 ┃ ┃ ┣ PageLayout.tsx
 ┃ ┃ ┗ Sidebar.tsx
 ┃ ┃
 ┣ libs // 기타 액션 폴더
 ┃ ┗ authAction.tsx
 ┃
 ┣ pages // 페이지 폴더
 ┃ ┣ NotFound.tsx
 ┃ ┣ PageA.tsx
 ┃ ┣ PageB.tsx
 ┃ ┣ PageC.tsx
 ┃ ┗ SigninPage.tsx
 ┃
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

<br>
<br>

## 사용된 라이브러리

---

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" /> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">

<br>
<br>

## 중점

---

- localStorage에 로그인 정보를 저장 후 로그인 판별 여부 식별
- 공통적으로 사용되는 컴포넌트 생성 후 관리
- 타입스크립트를 이용한 디버깅

<br>
<br>

## Commit Convention

---

| Tag Name | Description      |
| -------- | ---------------- |
| feat     | 새로운 기능 추가 |
| design   | UI style 변경    |
| refactor | 코드 리팩토링    |
| fix      | 에러, 버그 수정  |
| docs     | 문서수정         |
| chores   | 기타 수정사항    |
