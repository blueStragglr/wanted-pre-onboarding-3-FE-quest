#  리액트 라우터와 로그인 페이지 구현

## 🚩 목차
- 구현 사항
- 설치 및 세팅
- 브랜치
- 개발 사양
- 기술 스택
- 폴더 구조

<br/>

## 🎁 구현 사항
### 필수 구현사항
- [x] 최소 3개 이상의 페이지 구현
- [x] 모든 페이지에 공통으로 반복되는 헤더와 사이드바가 있도록 구성
### 선택 구현사항
- [x] 유저네임과 비밀번호를 받아 로그인을 수행할 수 있는 페이지 구현
- [x] 로그인 페이지는 공통 레이아웃(상단 네비게이션 바 및 사이드바)이 적용되지 않도록 구현
### 추가 구현사항
- [x] 로그인한 경우, 네비게이션에서 'Login' 버튼을 숨기고 헤더에서 '로그아웃' 버튼을 보여주도록 구현
- [x] 로그인한 경우, 헤더 우측에 프로필 기능을 만들어 유저네임을 보여주도록 구현
- [x] 로그인 정보는 세션 스토리지에 저장하도록 구현

<br/>

## ⚙️ 설치 및 세팅
### 1. npm 설치
``` shell
$ npm install
```

### 2. Extension 설치
- ESLint
- Prettier - Code formatter
- Style Guide: Airbnb

### 3. Scripts
| 명령어  | 기능  |
|---|---|
| ```$ npm run start``` | 프로젝트 구동 |

### 4. 테스트 계정
- Email: test1234
- Password: test1234

<br/>

## 📷 스크린샷

<p align="center">
  <table>
    <tr>
      <th>로그인 페이지</th>
    </tr>
    <tr>
      <th>
        <img width="600" height="350" alt="login" src="https://user-images.githubusercontent.com/52736242/222516307-e878df73-5804-4813-b488-223eb68281a1.png">
      </th>
    </tr>    
  </table>
    <table>
    <tr>
      <th>로그인 상태의 메인 페이지</th>
    </tr>
    <tr>
      <th>
        <img width="600" height="350" alt="notice board with login status" src="https://user-images.githubusercontent.com/52736242/222516535-4c7f202d-740b-4b46-9ce0-832776ede1f7.png">
      </th>
    </tr>    
  </table>
    <table>
    <tr>
      <th>로그아웃 상태의 메인 페이지</th>
    </tr>
    <tr>
      <th>
        <img width="600" height="350" alt="notice board with logout status" src="https://user-images.githubusercontent.com/52736242/222517659-3895aceb-3d4c-40b8-a68d-1dd1882e32fe.png">
      </th>
    </tr>    
  </table>
</p>

## 🌲 브랜치
- [master](https://github.com/Homegirl7417/wanted-pre-onboarding-3-FE-quest)

<br/>

## 📚 개발 사양
- 디자인: PC 최적화
- 표준 브라우저: Chrome
- SPA: Client Side Rendering


<br/>

## ⚒ 기술 스택
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<br/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAF"/>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

<br/>
<br/>

## 🗂 폴더 구조

``` shell
├── README.md
├── .eslintrc.js
├── .prettier.js
├── webpack.config.js
├── package.json
├── package-lock.json
├── public
└── src
    ├── components
    ├── pages
    ├── styles
