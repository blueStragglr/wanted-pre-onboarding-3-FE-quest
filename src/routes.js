import A from "./pages/A/A";
import B from "./pages/B/B";
import C from "./pages/C/C";
import Login from "./pages/Login/Login";
import Template from "./pages/Template/Template";

const PAGE_PATH = {
  A: "/A",
  B: "/B",
  C: "/C",
  LOGIN: "/login",
};

const ROUTES = [
  {
    path: PAGE_PATH.A,
    element: (
      <Template>
        <A />
      </Template>
    ),
  },
  {
    path: PAGE_PATH.B,
    element: (
      <Template>
        <B />
      </Template>
    ),
  },
  {
    path: PAGE_PATH.C,
    element: (
      <Template>
        <C />
      </Template>
    ),
  },
  {
    path: PAGE_PATH.LOGIN,
    element: <Login />,
  },
];

export { PAGE_PATH, ROUTES };
