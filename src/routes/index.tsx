import { createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout } from "~/components/Layout";
import { Home, Login, PageA, PageB, PageC } from "~/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "pageA", element: <PageA /> },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { path: "pageB", element: <PageB /> },
          { path: "pageC", element: <PageC /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
