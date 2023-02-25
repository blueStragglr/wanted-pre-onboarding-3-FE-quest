import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SubPage from "./sub/SubPage";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "sub/:pageName",
        element: <SubPage name={"A"} />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default RootRouter;
