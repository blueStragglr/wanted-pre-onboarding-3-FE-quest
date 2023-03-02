import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return <Wrap>Sidebar</Wrap>;
};

const Wrap = styled.div`
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  width: 250px;
  border-right: 1px solid grey;
`;

export default Sidebar;
