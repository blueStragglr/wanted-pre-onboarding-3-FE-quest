import React from 'react';
import styled from 'styled-components';

const PageA = () => {
  return <Wrap>This is Page A!</Wrap>;
};

const Wrap = styled.div`
  width: 100%;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b78ba;
`;

export default PageA;
