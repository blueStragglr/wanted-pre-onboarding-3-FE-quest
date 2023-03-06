import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { ErrorPage } from "./pages/Error";
import { MAIN_PAGES } from "./routerPath";
import { Login } from "./pages/Login";
import { Root } from "./Layout/Root";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: MAIN_PAGES,
      },
      {
        element: <Login />,
        path: "login",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
