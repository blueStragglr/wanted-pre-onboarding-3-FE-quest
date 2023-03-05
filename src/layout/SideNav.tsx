import { Menu } from './nav.config';
import styled from 'styled-components';
import NavItem from './NavItem';

const Nav = styled.nav`
  width: 200px;
  height: 100%;
  border-right: 1px solid #333;
`

interface SideNavProps {
  navList: Menu[];
}

const SideNav: React.FC<SideNavProps> = ({ navList }) => {
  return (
    <Nav>
      <ul>
        {navList.map(menu =>
          <NavItem key={menu.label} path={menu.path} label={menu.label}/>
        )}
      </ul>
    </Nav>
  )
}

export default SideNav;