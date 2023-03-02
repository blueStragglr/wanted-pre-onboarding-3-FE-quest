import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SidebarButton = ({ title, route, setSelectMenu, isClick }) => {
  const navigate = useNavigate();

  return (
    <Wrap
      onClick={() => {
        navigate(route);
        setSelectMenu(title);
      }}
      isClick={isClick}
    >
      {title}
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ isClick }) => {
    return css`
      font-size: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      color: ${isClick ? '#1b78ba' : ''};
    `;
  }}
`;

export default SidebarButton;
