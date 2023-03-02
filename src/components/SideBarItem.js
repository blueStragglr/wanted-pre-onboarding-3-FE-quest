import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarItem = ({ path, text, isactive }) => {
  return (
    <SideBarItemContainer>
      <SideBarItemWrapper>
        <SideBarItemText to={path} isactive={isactive}>
          {text}
        </SideBarItemText>
      </SideBarItemWrapper>
    </SideBarItemContainer>
  );
};

export default SideBarItem;

const SideBarItemContainer = styled.div`
  text-align: center;
`;

const SideBarItemWrapper = styled.span`
  display: inline-block;
  padding: 10px 0px;
`;

const SideBarItemText = styled(Link)`
  font-size: 24px;
  color: ${(props) => (props.isactive === 'true' ? 'royalblue' : 'black')};
`;
