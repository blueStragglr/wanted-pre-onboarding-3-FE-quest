import { NavLink } from "react-router-dom";

const SideBar = () => {
  let activeClassName = "text-indigo-300";
  return (
    <div className="w-1/5 h-full border-r-2">
      <ul className="w-full h-full px-3 py-2">
        <li className="py-2">
          <NavLink
            to="pageA"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            pageA
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="pageB"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            pageB
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="pageC"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            pageC
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
