import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation()

  const menu: { name: string; path: string }[] = [
    {
      name: "menu A",
      path: "/a",
    },
    {
      name: "menu B",
      path: "/b",
    },
    {
      name: "menu C",
      path: "/c",
    },
  ];

  if(location.pathname === '/login') return null

  return (
    <div className="sidebar__wrap">
      {menu.map((menu, idx) => {
        return (
          <Link to={menu.path} key={idx}>
            <div className="menu-item">{menu.name}</div>
           </Link>
        );
      })}
    </div>
  );
}

export { Sidebar };
