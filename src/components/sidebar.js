import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styled from "styled-components";

const SideWrap = styled.ul`
  width: 10%;
  height: 100%;
  margin: 0;
  list-style: none;
  border-right: 1px solid black;
  li {
    padding: 10% 0;
  }
`;

const SideList = styled(NavLink)`
  color: black;
  font-size: 1.3rem;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: #93bfcf;
    border-bottom: 1px solid #93bfcf;
  }
  &.active {
    color: #93bfcf;
  }
`;

const Sidebar = () => {
  const page = [
    { title: "Page A", link: "/pageA" },
    { title: "Page B", link: "/pageB" },
    { title: "Page C", link: "/pageC" },
  ];
  return (
    <SideWrap>
      {page.map((list, idx) => (
        <li key={idx}>
          <SideList to={list.link} activeclassname="active">
            {list.title}
          </SideList>
        </li>
      ))}
    </SideWrap>
  );
};

export default Sidebar;
