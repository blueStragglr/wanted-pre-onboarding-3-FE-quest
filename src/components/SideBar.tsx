import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <NavLink to="/pageA">Page A</NavLink>
      <NavLink to="/pageB">Page B</NavLink>
      <NavLink to="/pageC">Page C</NavLink>
    </div>
  )
}

export default SideBar;
