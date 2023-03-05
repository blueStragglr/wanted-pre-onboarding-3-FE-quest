import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside() {
  const Menu = [
    { name: "page A", path: "pageA" },
    { name: "page B", path: "pageB" },
    { name: "page C", path: "pageC" },
  ];
  return (
    <div id="aside">
      {Menu.map((item, index) => (
        <NavLink
          key={index}
          className="navLink"
          to={item.path}
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Aside;
