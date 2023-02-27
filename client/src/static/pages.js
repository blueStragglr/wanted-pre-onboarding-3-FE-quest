import Home from "../pages/home";
import PageA from "../pages/pageA";
import PageB from "../pages/pageB";
import PageC from "../pages/pageC";
import PageD from "../pages/pageD";

export const pages = [
  { id: "p0", router: "home", name: "home", element: <Home /> },
  { id: "p1", router: "pageA", name: "Page A", element: <PageA /> },
  { id: "p2", router: "pageB", name: "Page B", element: <PageB /> },
  { id: "p3", router: "pageC", name: "Page C", element: <PageC /> },
  { id: "p4", router: "pageD", name: "Page D", element: <PageD /> },
];
