import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/main/Home";
import PageA from "./routes/main/PageA";
import PageB from "./routes/main/PageB";
import PageC from "./routes/main/PageC";

/**
 * Add new page here.
 */
export const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/a", element: <PageA /> },
  { path: "/b", element: <PageB /> },
  { path: "/c", element: <PageC /> },
];

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: mainRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
