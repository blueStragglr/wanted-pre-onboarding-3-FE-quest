# 3월 원티드 프리온보딩 프론트엔드 과정 사전과제

## 요구사항

☑️ NextJS 등의 SSR 어플리케이션이 아닌, CSR 어플리케이션을 구축한다.

☑️ 최소 3개 이상의 페이지를 가지도록 구현한다.

☑️ 모든 페이지에 공통으로 반복되는 헤더와 사이드바가 있도록 구성한다.

---

## 주안점

### 새로운 페이지에 대한 확장성

#### ✅ 여러 개의 페이지가 언제든 추가될 수 있다.

- 페이지 이동 시 페이지별로 리다이렉트(Redirect) 처리하지 않고, 하나의 동일한 `Page` 컴포넌트를 렌더링하여 한 번에 리다이렉트 처리함.

- URL 파라미터인 페이지 Id(`pageId`)를 사용하여 페이지 별로 서로 다른 URL를 적용시켜준다.

- 이를 통해 추후 동일한 레이아웃의 페이지가 추가될 경우, 기존의 `Page` 컴포넌트가 렌더링되므로 새로운 컴포넌트를 생성하지 않아도 된다.

### ✅ 로그인 여부 판단

- 만들어진 페이지별로 로그인 여부를 판단하고자 한다.

---

## commit convention

| Tag Name | Description      |
| -------- | ---------------- |
| feat     | 새로운 기능 추가 |
| design   | UI style 변경    |
| refactor | 코드 리팩토링    |
| fix      | 에러, 버그 수정  |
| docs     | 문서수정         |
| chores   | 기타 수정사항    |
