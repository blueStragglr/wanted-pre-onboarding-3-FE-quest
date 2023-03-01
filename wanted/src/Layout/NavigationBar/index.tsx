import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';

const isActiveStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: 'skyblue',
};

export default function NavigationBar() {
  return (
    <S_Nav>
      <S_Ul>
        <li>
          <NavLink to={'/pageA'} style={({ isActive }) => (isActive ? isActiveStyle : {})}>
            Page A
          </NavLink>
        </li>
        <li>
          <NavLink to={'/pageB'} style={({ isActive }) => (isActive ? isActiveStyle : {})}>
            Page B
          </NavLink>
        </li>
        <li>
          <NavLink to={'/pageC'} style={({ isActive }) => (isActive ? isActiveStyle : {})}>
            Page C
          </NavLink>
        </li>
      </S_Ul>
    </S_Nav>
  );
}

const S_Nav = styled.nav`
  height: 100%;
  width: 20%;
  min-width: 100px;
  max-width: 160px;
  border-right: 1px solid black;
`;

const S_Ul = styled.ul`
  flex-flow: column;
  font-size: 1.4rem;
  font-weight: bold;
  > li {
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
