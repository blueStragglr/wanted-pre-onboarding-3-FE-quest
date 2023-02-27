import { PageA } from "pages/PageA";
import { PageB } from "pages/PageB";
import { PageC } from "pages/PageC";

export const Routes = [
  { name: "pageA", path: "/pageA", element: <PageA /> },
  { name: "pageB", path: "/pageB", element: <PageB /> },
  { name: "pageC", path: "/pageC", element: <PageC /> },
];
