# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제

로그인 기능 학습 및 구현

**공통**

- [x] : 토큰 기반 로그인
- [ ] : Access Token 및 Refresh Token 적용 (배포 이후 자동로그인 구현하면서 수정할 예정)

**Client**

```md
Typescript, React, Tailwindcss, Axios, Gh-pages
```

- [x] : 인증/인가에 따라 라우팅 접근
- [x] : 라우팅 관리 로직 한 곳으로 모으기
- [x] : form 컨트롤 custom hooks
- [x] : 배포

**Server**

```md
Typescript, Express, Jest, Supertest, Mongoose
```

- [x] : jest를 활용한 유닛테스트
- [ ] : 배포

## Document

**공통**

- [세션 기반 인증과 토큰 기반 인증](./docs/%EC%84%B8%EC%85%98%20%EA%B8%B0%EB%B0%98%20%EC%9D%B8%EC%A6%9D%EA%B3%BC%20%ED%86%A0%ED%81%B0%20%EA%B8%B0%EB%B0%98%20%EC%9D%B8%EC%A6%9D.md)

**Client**

- [Routing 관리](./client/docs/router.md)
- [Client - Trouble Shooting](./client/docs/trouble-shooting.md)

**Server**

- [Server - Trouble Shooting](./server/docs/trouble-shooting.md)

## 실행 방법

```shell
  # 처음 한 번만 실행. 서버/클라이언트 의존성 설치가 동시에 이루어집니다.
  $ npm install

  # 서버 실행
  $ npm run server

  # 클라이언트 실행
  $ npm run client
```

## 결과

### 로그인/회원가입

https://user-images.githubusercontent.com/71386219/228737390-11bc0629-e2ca-4ed9-8165-6d41fbd5e8da.mov

### 모든 페이지에 공통으로 반복되는 헤더와 사이드바 (로그인 여부에 따라 변경)

https://user-images.githubusercontent.com/71386219/228737399-2aef6732-2f17-48da-b5d9-473e85b2810c.mov

### 로그인 여부에 따른 페이지 접근

https://user-images.githubusercontent.com/71386219/228737354-3089a45f-9bff-42dd-8c72-af5fbd8208c2.mov
