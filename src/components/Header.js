import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const locationNow = useLocation();
  if (locationNow.pathname === "/login") return null;
  return (
    <HeaderWrapper>
      <HeaderContents>Wonted Pre-onboarding course</HeaderContents>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid gray;
  border: 1px solid blue;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;
const LinkTa = styled(Link)`
  text-decoration: none;
`;
const HeaderContents = styled.div`
  margin-left: 30px;
`;
const HeaderLinkDiv = styled.div`
  margin-right: 100px;
`;

export default Header;
