import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function SideBar() {
  const { pathname } = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    pathname === '/' ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  return (
    <Navigation>
      <NavItem className={`${isHome ? 'active' : ''}`} to='/a'>
        Page A
      </NavItem>
      <NavItem to='/b'>Page B</NavItem>
      <NavItem to='/c'>Page C</NavItem>
    </Navigation>
  );
}

const Navigation = styled.nav`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #aaa;
  padding: 25px;
`;

const NavItem = styled(NavLink)`
  font-size: 18px;
  margin-bottom: 25px;
  font-weight: 500;
  &:hover {
    color: cornflowerblue;
  }
  &.active {
    color: cornflowerblue;
  }
`;
