import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Layout } from "./Layout";
import { Error } from "./pages/Error";
import { Login } from "./pages/Login";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";
import { PageC } from "./pages/PageC";
import { GlobalStyles } from "./styles/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "page-a",
        element: <PageA />,
      },
      {
        path: "page-b",
        element: <PageB />,
      },
      {
        path: "page-c",
        element: <PageC />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <RecoilRoot>
      <Global styles={GlobalStyles} />
      <RouterProvider router={router} />
    </RecoilRoot>
  </>
);
