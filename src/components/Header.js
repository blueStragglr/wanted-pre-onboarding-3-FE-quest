import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styled from "styled-components";

const TitleBox = styled.div`
  width: 100%;
  padding: 2% 1%;
  border-bottom: 1px solid black;
`;

const Title = styled(NavLink)`
  color: black;
  font-size: 1.3rem;

  &:link {
    text-decoration: none;
  }

  &:hover {
    color: #93bfcf;
    border-bottom: 1px solid #93bfcf;
  }

  &.active {
    color: #93bfcf;
  }
`;

const Header = () => {
  return (
    <TitleBox>
      <Title to={"/"}>Wanted Pre-onboarding course</Title>
    </TitleBox>
  );
};

export default Header;
