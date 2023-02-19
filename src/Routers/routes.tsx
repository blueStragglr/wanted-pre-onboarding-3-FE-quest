import MainLayout from "@/Components/Layouts/MainLayout";
import { Login, PageA, PageB, PageC } from "@/Pages";
import Logout from "@/Pages/Logout";

interface Route {
  id: number;
  pathname: string;
  pageName: string;
  component?: () => JSX.Element;
  depath: number;
  layout?: () => JSX.Element;
  subPage?: Route[];
}

interface Routes {
  public: Route[];
  private: Route[];
}

export const routes: Routes = {
  public: [
    {
      id: 1,
      pathname: "/",
      pageName: "메인",
      component: PageA,
      depath: 1,
      layout: MainLayout,
      subPage: [
        {
          id: 1,
          pathname: "/page-a",
          pageName: "페이지A",
          component: PageA,
          depath: 2
        },
        {
          id: 2,
          pathname: "/page-b",
          pageName: "페이지B",
          component: PageB,
          depath: 2
        }
      ]
    },
    {
      id: 2,
      pathname: "/login",
      pageName: "로그인",
      component: Login,
      depath: 1,
      subPage: []
    }
  ],

  private: [
    {
      id: 1,
      pathname: "/",
      pageName: "",
      layout: MainLayout,
      depath: 1,
      subPage: [
        {
          id: 4,
          pathname: "/page-c",
          pageName: "페이지C",
          component: PageC,
          depath: 2
        }
      ]
    },
    {
      id: 2,
      pathname: "/logout",
      pageName: "로그아웃",
      component: Logout,
      depath: 1,
      subPage: []
    }
  ]
};
