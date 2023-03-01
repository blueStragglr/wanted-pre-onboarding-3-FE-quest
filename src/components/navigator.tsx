import "../styles/components/navigator.css";
import { Link, useLocation } from "react-router-dom";
import { routerList } from "../main";

export const Navigator = (): React.ReactElement => {
  const routers = routerList.flatMap((item) => item.children ?? []);
  const location = useLocation();

  return (
    <>
      <ul className="navigator">
        {routers.map((route) => (
          <li key={route.path} className="nav_item">
            <Link
              to={route.path}
              className={`nav_text ${
                location.pathname === route.path ? "nav_selected" : ""
              }`}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
