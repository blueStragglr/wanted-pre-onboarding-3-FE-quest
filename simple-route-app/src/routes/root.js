import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import subRoot from "./sub/subRoot";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage subRootList={subRoot} />,
    children: subRoot,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default RootRouter;
