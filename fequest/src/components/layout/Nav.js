import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  // console.log("location.pathname: ", location.pathname);

  return (
    <nav>
      <Ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Ll style={location.pathname === "/" ? { color: "blue" } : null}>
            Main
          </Ll>
        </Link>
        <Link to="/pageA" style={{ textDecoration: "none" }}>
          <Ll style={location.pathname === "/pageA" ? { color: "blue" } : null}>
            PageA
          </Ll>
        </Link>
        <Link to="/pageB" style={{ textDecoration: "none" }}>
          <Ll style={location.pathname === "/pageB" ? { color: "blue" } : null}>
            PageB
          </Ll>
        </Link>
        <Link to="/pageC" style={{ textDecoration: "none" }}>
          <Ll style={location.pathname === "/pageC" ? { color: "blue" } : null}>
            PageC
          </Ll>
        </Link>
      </Ul>
    </nav>
  );
};

export default Nav;

const Ul = styled.ul`
  list-style-type: none;
  height: 100vh;
  margin: 0;
  padding: 20px;
  width: 150px;
  border-right: 1px solid black;
`;

const Ll = styled.li`
  color: black;
  margin-bottom: 10px;
`;
