# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제

## **🎯[과제 미션](./docs/)**

![sample-image](./docs/sample.jpg)

<br/>

## **⚙️ 실행 방법**

1. 저장소를 local에 clone 합니다.

```sh
git clone https://github.com/letsjo/wanted-pre-onboarding-3-FE-quest.git
```

2. 저장소를 clone한 후 아래 명령어를 입력해 의존성 라이브러리를 설치해줍니다.

```sh
npm install
```

3. 아래 명령어를 이용해 `json-server-auth` 서버를 동작시킵니다.
   ( 회원가입 / 로그인 기능 / Token 생성 )

```sh
npm run server
```

4. 또 다른 터미널을 열어 애플리케이션 서버를 실행시킵니다.

```sh
npm start
```

## **📝 기능 구현 목록**

### **✅ 1:: 레이아웃 구성하기**

- [x] 모든 페이지에 공통으로 반복되는 헤더와 사이드바가 있도록 구성한다.
- [x] 최소 3개 이상의 페이지를 가지도록 구현한다.

### **✅ 2:: 로그인 페이지**

- [x] 유저네임과 비밀번호를 받아 로그인을 수행할 수 있는 페이지를 만들어 보세요.
- [x] 단, 로그인 페이지는 공통 레이아웃(상단 네비게이션 바 및 사이드바)이 적용되지 않도록 만들어 주세요.
- [x] 페이지별로 로그인 여부를 판단할 수 있어야 한다.

## **📱 애플리케이션 구성**

- `react-router-dom` 라이브러리를 사용하였습니다.
- `RouterProvider` 메서드를 이용해서 `routes` 객체로 `createBrowserRouter` 로 `router`를 구성했습니다.
- 페이지를 읽어오는 동안, `loader`를 이용해서 로그인 체크 여부를 판단합니다.
- `loader`가 실행되는 동안 `Suspanse`로 화면을 보여주게 됩니다.

### 📡 라우터 구성

- `Root` : 메인 페이지 ( Header , SideMenu )
  - `Page A` , `Page B`, `Page C` 의 자식 페이지를 가지고 있다.
- `Login` : 로그인 페이지
- `Join` : 회원가입 페이지

### 🎞️ 레이아웃 구성

- `Root` 페이지
  - 상단에는 `Header`
  - 하단 왼쪽은 `SideMenu`
  - 하단 오른쪽 children page ( `Page A`, `Page B`, `Page C`)
