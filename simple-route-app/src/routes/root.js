import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SubPageA from "./sub/SubPageA";
import SubPageB from "./sub/SubPageB";
import SubPageC from "./sub/SubPageC";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "sub/A",
        element: <SubPageA />,
      },
      {
        path: "sub/B",
        element: <SubPageB />,
      },
      {
        path: "sub/C",
        element: <SubPageC />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default RootRouter;
