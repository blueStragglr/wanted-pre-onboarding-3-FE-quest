import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface Sidebar {
  children?: string;
}

const SideBar = styled.ul`
  width: 80px;
  height: 100vh;
  list-style: none;
  padding: 10px;
  margin: 0;
  text-align: center;
  font-size: 12px;
  border-right: 1px solid gray;
`;

const StyledLink = styled(NavLink)`
  color: #181818;

  &:hover {
    color: gray;
  }
`;

export default function Sidebar({ children, ...props }: Sidebar) {
  let activeClassName = 'active';

  return (
    <SideBar {...props}>
      <li>
        <StyledLink to={'/A'} className={({ isActive }) => (isActive ? activeClassName : undefined)}>
          page A
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'/B'} className={({ isActive }) => (isActive ? activeClassName : undefined)}>
          page B
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'/C'} className={({ isActive }) => (isActive ? activeClassName : undefined)}>
          page C
        </StyledLink>
      </li>
    </SideBar>
  );
}
