import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import PageLayout from "./components/layout/PageLayout";
import { links } from "./links";

function makeRouteObjects(links: { path: string; component: JSX.Element }[]) {
  return links.map((link) => ({
    path: link.path,
    element: link.component,
  }));
}

const pagesWithLayout = makeRouteObjects(
  links.filter((link) => link.useLayout === true)
);

const pagesWithoutLayout = makeRouteObjects(
  links.filter((link) => link.useLayout === false)
);

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PageLayout />,
        children: pagesWithLayout,
      },
      ...pagesWithoutLayout,
    ],
  },
]);

export default router;
