import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Login from "./routes/Login";
import PageA from "./routes/PageA";
import PageB from "./routes/PageB";
import PageC from "./routes/PageC";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/pagea",
        element: <PageA />,
      },
      {
        path: "/pageb",
        element: <PageB />,
      },
      {
        path: "/pagec",
        element: <PageC />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
