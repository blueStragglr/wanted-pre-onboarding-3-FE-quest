import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styled from "styled-components";

const SideBox = styled.ul`
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

const pages = [
  { id: "1", addr: "pageA", content: "Page A" },
  { id: "2", addr: "pageB", content: "Page B" },
  { id: "3", addr: "pageC", content: "Page C" },
];

const SideBar = () => {
  return (
    <SideBox>
      {pages.map((item) => (
        <li key={item.id}>
          <SideList to={`/${item.addr}`}>{item.content}</SideList>
        </li>
      ))}
    </SideBox>
  );
};

export default SideBar;
