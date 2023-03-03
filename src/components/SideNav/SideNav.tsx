import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  width: 200px;
  height: 100vh;
  border-right: solid 1px gray;
  font-size: 20px;
  padding-left: 40px;
  line-height: 40px;
  li {
    margin-top: 10px;
  }
`;

const SideNav = () => {
  // const activeStyle = {
  //   fontWeight:'bold',
  // }
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to='a' style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: '#2696f1' } : undefined)}>
            page A
          </NavLink>
        </li>
        <li>
          <NavLink to='b' style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: '#2696f1' } : undefined)}>
            page B
          </NavLink>
        </li>
        <li>
          <NavLink to='c' style={({ isActive }) => (isActive ? { fontWeight: 'bold', color: '#2696f1' } : undefined)}>
            page C
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default SideNav;
