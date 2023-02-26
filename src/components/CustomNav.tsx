import { NavLink } from "react-router-dom";
import { navStyle } from "../style";

const CustomNav = ({
  auth,
  setAuth,
}: {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onLogout = () => setAuth(false);
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
      {auth ? (
        <div onClick={onLogout} className="customLink">
          Log Out
        </div>
      ) : (
        <NavLink className="customLink" to="/login">
          Log In
        </NavLink>
      )}
    </nav>
  );
};

export default CustomNav;
