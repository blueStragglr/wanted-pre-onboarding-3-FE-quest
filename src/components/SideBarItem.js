import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarItem = ({ path, text, isActive }) => {
  return (
    <SideBarItemContainer path={path}>
      <SideBarText isActive={isActive}>
        <SideBarItemLink>{text}</SideBarItemLink>
      </SideBarText>
    </SideBarItemContainer>
  );
};

export default SideBarItem;

const SideBarItemContainer = styled.div`
  text-align: center;
`;

const SideBarText = styled.span`
  display: inline-block;
  padding: 10px 0px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? 'blue' : 'black')};
`;

const SideBarItemLink = styled(Link)``;
