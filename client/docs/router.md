# Routing 관리

## 기존에 사용하던 방법

**로그인한 유저만 접근할 수 있는 privateRoutes**

```tsx
// /src/routes/privateRoutes.js
const routes = [
  {
    path: ROUTE.PROFILE, // 브라우저에서 라우팅되어야하는 경로
    element: EditUserProfile, // 컴포넌트
    restricted: true, // hoc에서 사용할 속성
  },
  // 생략
]
const privateRoutes = routes.map(({ path, element, restricted }) => ({
  path,
  element: <PrivateRoute Component={element} restricted={restricted} />,
}))
```

**모든 유저가 접근할 수 있는 public Routes**

```tsx
// /src/routes/publicRoutes.js
const routes = [
  {
    path: ROUTE.SIGN_UP,
    element: SignUp,
    restricted: true,
  },
  {
    path: ROUTE.LOGIN + ROUTE.ALL,
    element: LoginRoute,
    restricted: true,
  },
  // 생략
]
const publicRoutes = routes.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRoute Component={element} restricted={restricted} />,
}))
```

**프로젝트에서 사용하는 모든 라우팅을 모으는 곳(`src/routes/index.jsx`)**

useRoutes의 children 기능을 활용해, 반복되는 layout 구조를 `src/layouts/LayoutFullPage.tsx` 컴포넌트의 `<Outlet />` 으로 렌더링 될 수 있게 구분했습니다.

```tsx
export default function Router() {
  const element = [
    {
      element: <LayoutWithHeader />, // GNB헤더가 필요한 레이아웃
      children: [...publicRoutes, ...privateRoutes],
    },
    {
      element: <LayoutFullPage />, // GNB헤더가 필요하지 않은 레이아웃
      children: [...etcRoutes],
    },
  ]
  return useRoutes(element)
}
```

## 수정한 방법

위와 같은 방법으로 하면 관심사가 분리된 느낌을 받습니다.

constant라는 파일에서 path와 관련된 변수를 관리하고, gnb에서 사용할 링크를 또 관리해야하고,

layout에 사용할 라우팅은 또 따로 관리해야합니다.

### 주요 기능

- 권한 여부에 따라 페이지를 구분해야 한다.
  - 로그인 여부에 따른 접근 권한 로직
- 레이아웃 형태가 다를 수 있다.
  - GNB가 있는 레이아웃
  - GNB가 없는 레이아웃
- 라우팅을 관리하지 않고, path만 관리하고 있다
  - path와 page 컴포넌트는 1:1로 묶을 수 있다.
  - 중첩된 라우터까지 관리해야한다.

하나의 routeInfo에서 관리할 수 없을까요?

```tsx
const withPrivate = (routerInfo: RouterInfo) => routerInfo.withAuthorization

const withPublic = (routerInfo: RouterInfo) => !routerInfo.withAuthorization

const withLayoutHeader = (routerInfo: RouterInfo) => routerInfo.withLayoutHeader

const withLayoutFullPage = (routerInfo: RouterInfo) => !routerInfo.withLayoutHeader

const withRestricted = (routerInfo: RouterInfo) => routerInfo.restricted

const withInGnb = (routerInfo: RouterInfo) => routerInfo.isInGnb

const result = routerInfoList.filter(withPrivate).filter(withLayoutHeader)
```

filter를 한 번만 사용하기

```tsx
// 조금 더 이해하기 쉽게 return을 명시, 프로젝트에서는 arrow function으로 사용함
const applyFilters = <T>(items: T[], filterFunctions: FilterFunction<T>[]): T[] => {
  return filterFunctions.reduce((filteredItems, filterFn) => {
    return filteredItems.filter(filterFn)
  }, items)

const filteredRouterInfoList = applyFilters(routerInfoList, [withPrivate, withLayoutHeader])
```
