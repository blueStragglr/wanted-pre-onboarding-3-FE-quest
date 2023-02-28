import A from "./pages/A/A";
import B from "./pages/B/B";
import C from "./pages/C/C";
import Template from "./pages/Template/Template";

const ROUTES = [
  {
    path: "/A",
    element: (
      <Template>
        <A />
      </Template>
    ),
  },
  {
    path: "/B",
    element: (
      <Template>
        <B />
      </Template>
    ),
  },
  {
    path: "/C",
    element: (
      <Template>
        <C />
      </Template>
    ),
  },
];

export default ROUTES;
