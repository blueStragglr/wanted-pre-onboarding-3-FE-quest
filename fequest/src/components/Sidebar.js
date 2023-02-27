import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuConatiner = styled.div`
  padding: 10%;
  display: flex;
  align-items: center;
`;

const AllNavLink = styled(NavLink)`
  color: black;
  &:link {
    text-decoration: none;
  }
  &.active {
    color: #0c6efd;
    font-weight: 900;
  }
`;

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
  return (
    <>
      <SideBarContainer>
        <AllNavLink
          style={({ isActive }) => (isActive ? "active" : "")}
          to="/a-page"
        >
          <MenuConatiner>PageA</MenuConatiner>
        </AllNavLink>
        <AllNavLink
          style={({ isActive }) => (isActive ? "active" : "")}
          to="/b-page"
        >
          <MenuConatiner>PageB</MenuConatiner>
        </AllNavLink>
        <AllNavLink
          style={({ isActive }) => (isActive ? "active" : "")}
          to="/c-page"
        >
          <MenuConatiner>PageC</MenuConatiner>
        </AllNavLink>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
