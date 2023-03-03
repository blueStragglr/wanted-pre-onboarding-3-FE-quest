import { Login, PageA, PageB, PageC } from "@/Pages";
import Logout from "@/Pages/Logout";

export interface Route {
  id: number;
  pathname: string;
  pageName: string;
  component?: () => JSX.Element;
  depath: number;
  isPublic: boolean;
  layout?: () => JSX.Element;
  subPage: Route[];
}

export const routes: Route[] = [
  {
    id: 1,
    pathname: "/",
    pageName: "메인",
    component: PageA,
    depath: 1,
    isPublic: true,

    subPage: [
      {
        id: 1,
        pathname: "/page-a",
        pageName: "페이지A",
        component: PageA,
        isPublic: true,
        depath: 2,
        subPage: []
      },
      {
        id: 2,
        pathname: "/page-b",
        pageName: "페이지B",
        component: PageB,
        isPublic: true,
        depath: 2,
        subPage: []
      },
      {
        id: 4,
        pathname: "/page-c",
        pageName: "페이지C",
        component: PageC,
        isPublic: false,
        depath: 2,
        subPage: []
      }
    ]
  },
  {
    id: 2,
    pathname: "/login",
    pageName: "로그인",
    component: Login,
    isPublic: true,
    depath: 1,
    subPage: []
  },
  {
    id: 3,
    pathname: "/logout",
    pageName: "로그아웃",
    component: Logout,
    isPublic: false,
    depath: 1,
    subPage: []
  }
];
