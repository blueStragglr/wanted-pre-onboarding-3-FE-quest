import { Link, NavLink } from "react-router-dom";
import { navStyle } from "../style";

const CustomNav = () => {
  return (
    <nav style={navStyle}>
      <NavLink
        className={({ isActive }) =>
          isActive ? "customLinkActive" : "customLink"
        }
        to="/page_a"
      >
        Page A
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "customLinkActive" : "customLink"
        }
        to="/page_b"
      >
        Page B
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "customLinkActive" : "customLink"
        }
        to="/page_c"
      >
        Page C
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "customLinkActive" : "customLink"
        }
        to="/login"
      >
        Log In
      </NavLink>
    </nav>
  );
};

export default CustomNav;
