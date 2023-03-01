import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Items from './Items';

function Sidebar() {
  const menu = [
    {name: "PageA", path: "/"},
    {name: "PageB", path: "/pageB"},
    {name: "PageC", path: "/pageC"},
  ]
  return (
    <Container>
      <MenuTitle>
        <p>메뉴바</p>
        <PlusButton>메뉴 추가</PlusButton>
      </MenuTitle>
      {menu.map((menu,index) => {
        return(
          <Link to={menu.path} key={index}>
            <Items menu={menu} />
          </Link>
        );
      })}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  height: 44rem;
  width: 10rem;
  background-color: aqua;
  border: 3px black solid;
`;
const MenuTitle = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const PlusButton = styled.button`
  font-size: 8px;
`