import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import Login from "./pages/Login";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'a',
        element: <PageA />
      },
      {
        path: 'b',
        element: <PageB />
      },
      {
        path: 'c',
        element: <PageC />
      },
      {
        path: 'login',
        element: <Login />,
      },
    ]
  }
])

export default router;
