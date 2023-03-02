import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <h3>Wanted Pre-onboarding course</h3>
      <div>Chaewon Yoon</div>
    </StHeader>
  )
}

const StHeader = styled.div`
  border-bottom: 1px solid #eee;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  div {
    padding-top: 20px;
    margin-right: 10px;
  }
`

export default Header;