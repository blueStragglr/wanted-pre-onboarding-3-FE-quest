import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

function Aside() {
  const { auth } = useAppSelector((state) => state);

  return (
    <aside className="h-screen  border-r border-gray-400 px-2 py-4">
      <div className="flex-none">
        <ul className="menu menu-vertical gap-4 px-1">
          <li>
            {auth.id && auth.username ? (
              <NavLink
                to="mypage"
                className="justify-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#7c3aed" : "transparent",
                })}
              >
                Mypage
              </NavLink>
            ) : (
              <NavLink
                to="signin"
                className="justify-center"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#7c3aed" : "transparent",
                })}
              >
                Sign In
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              to="poetry"
              className="justify-center"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#7c3aed" : "transparent",
              })}
            >
              Poetry
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="justify-center"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#7c3aed" : "transparent",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Aside;
