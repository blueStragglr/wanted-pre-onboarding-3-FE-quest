import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation() {
  const sideBar = [
    { id: 0, name: "Page A", path: "/" },
    { id: 1, name: "Page B", path: "/b" },
    { id: 2, name: "Page C", path: "/c" },
  ];

  const activeStyle = {
    color: "blue",
  };
  return (
    <StNavContainer>
      {sideBar.map((el) => {
        return (
          <NavLink
            key={el.id}
            to={el.path}
            activeStyle={activeStyle}
            exact
            style={{ color: "black", textDecoration: "none" }}
          >
            <StNavMenu>{el.name}</StNavMenu>
          </NavLink>
        );
      })}
    </StNavContainer>
  );
}

export default Navigation;

const StNavContainer = styled.div`
  position: fixed;
  top: 68px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  height: 100vh;
  width: 10%;
`;

const StNavMenu = styled.div`
  text-indent: 10%;
  margin-top: 30px;
  margin-bottom: 10px;
`;
