import { NavLink } from "react-router-dom"
import * as S from "./styles"

const Navbar = () => {
  return (
    <S.Base>
      <ul>
        <li>
          <NavLink
            to="/a"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Page A
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/b"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Page B
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/c"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Page C
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </S.Base>
  )
}

export default Navbar
