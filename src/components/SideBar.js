import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import SideBarItem from './SideBarItem';
const Sidebar = () => {
  const pathName = useLocation().pathname;
  const menus = [
    { name: 'Page A', path: '/page/a' },
    { name: 'Page B', path: '/page/b' },
    { name: 'Page C', path: '/page/c' },
  ];

  return (
    <SidebarContainer>
      {menus.map((menu, index) => {
        return <SideBarItem to={menu.path} text={menu.name} isActive={pathName === menu.path ? true : false} key={index} />;
      })}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px 0px;
  border-right: 1px solid lightgray;
`;
