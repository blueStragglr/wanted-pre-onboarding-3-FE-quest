import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        element: (
          <PrivateRoute onlyAuth={true}>
            <Page3 />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PrivateRoute onlyAuth={false}>
        <Login />
      </PrivateRoute>
    ),
  },
]);

export default router;
