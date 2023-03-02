import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutMain, { loaderAuth } from "../components/LayoutMain";
import { PageA, PageB, PageC, Login } from ".";
import RootBoundary from "./RootBoundary";
import LayoutLogin from "../components/LayoutLogin";

export const path = {
  pageA: "page-a",
  pageB: "page-b",
  pageC: "page-c",
  login: "login",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    loader: loaderAuth,
    errorElement: <RootBoundary />,
    children: [
      {
        path: "/",
        element: <Navigate to={path.pageA} />,
      },
      {
        path: path.pageA,
        element: <PageA />,
      },
      {
        path: path.pageB,
        element: <PageB />,
      },
      {
        path: path.pageC,
        element: <PageC />,
      },
    ],
  },
  {
    path: path.login,
    element: (
      <LayoutLogin>
        <Login />
      </LayoutLogin>
    ),
  },
]);

export default router;
