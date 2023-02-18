import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface SideMenuProps {
  menuList: string[];
}

const SideMenu = ({ menuList }: SideMenuProps) => {
  const location = useLocation();

  return (
    <SideWrap>
      <MenuUl>
        {menuList.map((menu, index) => {
          const to = '/' + menu.replace(' ', '_');

          const active =
            to.toLowerCase() === location.pathname ||
            (to.toLowerCase() === '/page_a' && location.pathname === '/');

          return (
            <MenuLink key={menu + index} to={to.toLowerCase()}>
              <MenuLl active={active}>{menu}</MenuLl>
            </MenuLink>
          );
        })}
      </MenuUl>
    </SideWrap>
  );
};

export default SideMenu;

const SideWrap = styled.aside`
  width: 150px;
  height: 100%;
  padding-top: 80px;
  border-right: 1px solid #000;
  position: fixed;
  z-index: 0;
`;

const MenuUl = styled.ul`
  list-style: none;
`;

const MenuLl = styled.ul<{ active: boolean }>`
  color: ${(props) => (props.active ? 'blue' : '#000')};
  padding: 12px 0;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;
