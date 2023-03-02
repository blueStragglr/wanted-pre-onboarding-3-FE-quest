import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  width: 180px;
  height: 100vh;
  padding-top: 20px;
  padding-left: 20px;
  border-right: 0.2px solid #dadada;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #555;
  &.active {
    background-color: #555;
    color: #016fbb;
  }
  outline: none;
  border: none;
  cursor: pointer;
  div {
    padding-bottom: 20px;
  }
`;

const SideNav = () => {
  return (
    <>
      <StyledSideNav className="sidenav">
        <StyledNavLink to="/">
          <div>Page A</div>
        </StyledNavLink>
        <StyledNavLink to="/page2">
          <div>Page B</div>
        </StyledNavLink>
        <StyledNavLink to="/page3">
          <div>Page C</div>
        </StyledNavLink>
      </StyledSideNav>
    </>
  );
};

export default SideNav;
