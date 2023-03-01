import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`;
const MenuStyle = styled.p`
  color: black;
  text-decoration: none;
`;

const ActMenuStyle = styled.p`
  color: grey;
  text-decoration: none;
`;

const SidebarItem = ({ menu }) => {
  return (
    <div>
      <p>{menu.name}</p>
    </div>
  );
};

const Sidebar = () => {
  const menus = [
    { name: "Page A", path: "/pageA" },
    { name: "Page B", path: "/pageB" },
    { name: "Page C", path: "/pageC" },
  ];

  return (
    <Side>
      {menus.map((menu, index) => {
        return (
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "black" : "grey",
              textDecoration: "none",
            })}
            to={menu.path}
            key={index}
          >
            <SidebarItem menu={menu} />
          </NavLink>
        );
      })}
    </Side>
  );
};

export default Sidebar;
