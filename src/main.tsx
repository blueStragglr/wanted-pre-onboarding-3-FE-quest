import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./routes/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, NotFound, PageA, PageB, PageC, Signin } from "@/pages/index";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/A", element: <PageA /> },
      { path: "/B", element: <PageB /> },
      { path: "/C", element: <PageC /> },
    ],
  },
  { path: "/signin", element: <Signin />, errorElement: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
