import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <aside>
      <Link to={"/"}>A</Link>
      <Link to={"/b"}>B</Link>
      <Link to={"/c"}>C</Link>
    </aside>
  )
}

export default SideBar;