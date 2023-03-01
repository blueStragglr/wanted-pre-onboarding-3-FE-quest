import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <MySideBar>
      <div className="link">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
        >
          Home
        </NavLink>
      </div>
      <div className="link">
        <NavLink to="/page1">Page1</NavLink>
      </div>
      <div className="link">
        <NavLink to="/page2">Page2</NavLink>
      </div>
      <div className="link">
        <NavLink to="/page3">Page3(Private)</NavLink>
      </div>
    </MySideBar>
  );
};

const MySideBar = styled.aside`
  grid-area: sidebar;
  border-right: 3px solid lightgray;
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  a {
    text-align: center;
    width: 100%;
    padding: 50px 0;
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 550;
    word-break: break-all;
    &:hover {
      color: blue;
    }
    &.active {
      color: blue;
    }
  }
`;

export default SideBar;
