import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { page } from '../../PageData';

export default function SideBar({ menu }: { menu: page[] }) {
  return (
    <Wrapper>
      {menu.map(({ name, path }) => (
        <li>
          <Menu to={path}>{name}</Menu>
        </li>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  width: 250px;
  height: calc(100vh - 100px);
  padding: 10px 30px;
  border-right: 1px solid #ececec;
  box-sizing: border-box;
`;

const Menu = styled(NavLink)`
  display: block;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 26px;
  font-weight: 500;

  &.active {
    color: #3366ff;
  }
`;
