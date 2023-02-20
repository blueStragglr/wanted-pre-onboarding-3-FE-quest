import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import PageA from "./routes/main/PageA";
import PageB from "./routes/main/PageB";
import PageC from "./routes/main/PageC";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/a", element: <PageA /> },
      { path: "/b", element: <PageB /> },
      { path: "/c", element: <PageC /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
