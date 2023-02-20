import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuConatiner = styled.div`
  padding: 10%;
  display: flex;
  align-items: center;
`;

// const AllLink = styled(Link)`
//   color: black;
//   text-decoration: none;
// `;

const SideBarContainer = styled.div`
  position: fixed;
  width: 10%;
  height: 100%;
  margin: 100px 0px;
  padding: 30px;
  border-right: 1px solid black;
  z-index: 0;
`;

const Sidebar = () => {
  const activeStyle = {
    color: "#289951",
    fontWeight: 700,
    textDecorate: "none",
  };
  return (
    <>
      <SideBarContainer>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/a-page"
        >
          <MenuConatiner>PageA</MenuConatiner>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/b-page"
        >
          <MenuConatiner>PageB</MenuConatiner>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to="/c-page"
        >
          <MenuConatiner>PageC</MenuConatiner>
        </NavLink>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
