import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Info } from "./pages/Info";

export const MAIN_PAGES = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "contact",
    element: <Contact />,
    title: "Contact",
  },
  {
    path: "info",
    element: <Info />,
    title: "Info",
  },
];
