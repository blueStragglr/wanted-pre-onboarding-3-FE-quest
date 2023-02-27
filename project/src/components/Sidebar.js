import { Routes } from "utils/Routes";
import { Link, useLocation } from "react-router-dom";
import style from "styles/Sidebar.module.css";

export function Sidebar(props) {
  const location = useLocation();

  return (
    <div className={style.sidebar}>
      <ul className={style.itmes}>
        {Routes.map((route) => (
          <li
            key={route.path}
            className={route.path === location.pathname ? style.item : ""}
          >
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
