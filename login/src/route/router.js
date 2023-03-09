import { Home } from "../pages/Home";
import { PageA } from "../pages/PageA";
import { PageB } from "../pages/PageB";
import { PageC } from "../pages/PageC";
import { createBrowserRouter } from "react-router-dom";

export const RouteInfo = [
  {
    path: "/",
    element: <Home />,
    withAuthorization: false,
    label: "Home",
  },
  {
    path: "/page-a",
    element: <PageA />,
    withAuthorization: true,
    label: "PageA",
  },
  {
    path: "/page-b",
    element: <PageB />,
    withAuthorization: true,
    label: "PageB",
  },
  {
    path: "/page-c",
    element: <PageC />,
    withAuthorization: true,
    label: "PageC",
  },
];

export const router = createBrowserRouter(
  RouteInfo.map((info) => {
    return {
      path: info.path,
      element: info.element,
    };
  }),
);
