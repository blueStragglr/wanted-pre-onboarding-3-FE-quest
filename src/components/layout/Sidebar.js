import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarButton from '../ui/SidebarButton';

const Sidebar = () => {
  const [selectMenu, setSelectMenu] = useState('Page A');

  return (
    <Wrap>
      <SidebarButton
        title="Page A"
        route="/"
        setSelectMenu={setSelectMenu}
        isClick={selectMenu === 'Page A'}
      />
      <SidebarButton
        title="Page B"
        route="/page_b"
        setSelectMenu={setSelectMenu}
        isClick={selectMenu === 'Page B'}
      />
      <SidebarButton
        title="Page C"
        route="/page_c"
        setSelectMenu={setSelectMenu}
        isClick={selectMenu === 'Page C'}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  width: 250px;
  border-right: 1px solid grey;
`;

export default Sidebar;
