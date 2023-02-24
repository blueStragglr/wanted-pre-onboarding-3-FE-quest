import NavButton from './NavButton';
import { useState } from 'react';
import styled from 'styled-components';

const SideBarWrap = styled.div`
  border-right: 1px solid #000;
  width: 10%;
  padding: 10px;
  box-sizing: border-box;
`;

const NavItem = styled.li`
  padding-top: 10px;
  &.clicked {
    a {
      color: blue;
      font-weight: 600;
    }
  }
`;

const SideBar = () => {
  const [selectBtn, setSelectBtn] = useState(0);
  const navList = [<NavButton link="/a" title="Page A" />, <NavButton link="/b" title="Page B" />, <NavButton link="/c" title="Page C" />];

  const handleSetComponents = (index) => {
    setSelectBtn(index);
  };

  return (
    <SideBarWrap>
      <ul>
        {navList.map((item, index) => (
          <NavItem key={`item-${index}`} className={index === selectBtn ? 'clicked' : ''} onClick={() => handleSetComponents(index)}>
            {item}
          </NavItem>
        ))}
      </ul>
    </SideBarWrap>
  );
};

export default SideBar;
