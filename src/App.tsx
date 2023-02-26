import { useRoutes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { getAuth } from "./libs/authAction";
import NotFound from "./pages/NotFound";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import SigninPage from "./pages/SigninPage";

const App = () => {
  const isAuth = getAuth();

  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Navigate to={isAuth ? "a" : "signin"} />,
        },
        {
          path: "a",
          element: isAuth ? <PageA /> : <Navigate to="/signin" />,
        },
        {
          path: "b",
          element: isAuth ? <PageB /> : <Navigate to="/signin" />,
        },
        {
          path: "c",
          element: isAuth ? <PageC /> : <Navigate to="/signin" />,
        },
        {
          path: "signin",
          element: isAuth ? <Navigate to="/a" /> : <SigninPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return element;
};

export default App;
