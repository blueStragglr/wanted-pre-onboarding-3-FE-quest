import React from "react";
import styled from "styled-components";

function Header() {
  return <HeaderWrapper>Wonted Pre-onboarding course</HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 7vh;
  border-bottom: 2px solid gray;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-left: 30px;
  font-size: 20px;
`;

export default Header;
