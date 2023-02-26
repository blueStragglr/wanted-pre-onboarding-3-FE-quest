import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";

export type MenuType = {
  id: number;
  name: string;
  path: string;
};

const Sidebar = () => {
  const menus: MenuType[] = [
    { id: 0, name: "Page A", path: "/page1" },
    { id: 1, name: "Page B", path: "/page2" },
    { id: 2, name: "Page C", path: "/page3" },
  ];

  return (
    <div className="sidebar-container">
      {menus.map((menu) => {
        return (
          <NavLink
            className="page_link"
            style={({ isActive }) =>
              isActive ? { color: "#0a82ff" } : { color: "black" }
            }
            key={menu.id}
            to={menu.path}
          >
            <SidebarItem menu={menu} />
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
