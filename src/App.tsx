import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout";
import { UserContext } from "./contexts/UserContext";
import { NotFound } from "./pages/404";
import { Login } from "./pages/login";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Page4 } from "./pages/page4";
import { AuthRoute } from "./routes/AuthRoute";

export const routerList = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        title: "Page 1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        title: "Page 2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        title: "Page 3",
        element: <Page3 />,
      },
      {
        path: "/page4",
        title: "로그인 전용",
        element: (
          <AuthRoute onlyAuth={true}>
            <Page4 />
          </AuthRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthRoute onlyAuth={false}>
        <Login />
      </AuthRoute>
    ),
  },
];

const router = createBrowserRouter(routerList);

export const App = (): React.ReactElement => {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem("users")
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};
