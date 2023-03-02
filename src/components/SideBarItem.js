import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarItem = ({ path, text, isActive }) => {
  return (
    <SideBarItemContainer path={path}>
      <SideBarText isActive={isActive}>{text}</SideBarText>
    </SideBarItemContainer>
  );
};

export default SideBarItem;

const SideBarItemContainer = styled(Link)`
  width: 60px;
  height: 30px;
  background-color: yellow;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const SideBarText = styled.div`
  font: 24px;
  text-align: center;
  color: ${(props) => (props.isActive ? 'blue' : 'black')};
`;
