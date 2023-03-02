import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar border-b border-b-gray-500 bg-base-100">
      <div className="flex-1">
        <NavLink to="/" className="btn-ghost btn text-xl normal-case">
          유지석
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
