import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <NavContainer>
      <NavLink to="PageA">
        {pathname === "/PageA" ? (
          <SelectNav>Page A</SelectNav>
        ) : (
          <div>Page A</div>
        )}
      </NavLink>
      <NavLink to="PageB">
        {pathname === "/PageB" ? (
          <SelectNav>Page B</SelectNav>
        ) : (
          <div>Page B</div>
        )}
      </NavLink>
      <NavLink to="PageC">
        {pathname === "/PageC" ? (
          <SelectNav>Page C</SelectNav>
        ) : (
          <div>Page C</div>
        )}
      </NavLink>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.div`
  width: 10%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-right: 0.5px solid grey;

  a {
    margin-top: 20px;
    text-decoration: none;
    color: black;
  }
`;

const SelectNav = styled.div`
  color: skyblue;
  font-weight: bold;
`;
