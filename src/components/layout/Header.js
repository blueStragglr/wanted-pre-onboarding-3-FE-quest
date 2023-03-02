import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <Wrap>Wanted Pre-onboarding course</Wrap>;
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 20px;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid grey;
`;

export default Header;
