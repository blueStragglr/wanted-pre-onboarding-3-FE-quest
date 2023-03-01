import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "pages/NotFoundPage";
import PageA from "pages/contents/PageA";
import PageB from "pages/contents/PageB";
import PageC from "pages/contents/PageC";
import Root from "pages/Root";
import SignInPage from "pages/auth/SignInPage";
import SignUpPage from "pages/auth/SignUpPage";
import MainPage from "pages/contents/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "pageA",
        element: <PageA />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "pageB",
        element: <PageB />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "pageC",
        element: <PageC />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  { path: "/signin", element: <SignInPage />, errorElement: <NotFoundPage /> },
  { path: "/signup", element: <SignUpPage />, errorElement: <NotFoundPage /> },
]);

export default router;
