import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrap>
      <Logo>
        <img src="/assets/img/logo.png" alt="" />
      </Logo>
      <p>Wanted Pre-onboarding course</p>{" "}
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
  height: 50px;
`;

const Logo = styled.span`
  img {
    width: 140px;
  }
`;

export default Header;
