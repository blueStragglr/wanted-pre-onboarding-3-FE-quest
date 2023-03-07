import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
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
