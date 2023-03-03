import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <h4>Wanted Pre-onboarding course</h4>
      <div>Chaewon Yoon</div>
    </StHeader>
  )
}

const StHeader = styled.div`
  border-bottom: 0.8px solid salmon;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;

  h4 {
    /* color: gray; */
    font-style: italic;
  }

  div {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 10px;
    color: royalblue;
    font-size: 14px;
  }
`

export default Header;