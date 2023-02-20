import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import WantedLogo from "../assets/wantedLogo.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 1% 2%;
  position: fixed;
  z-index: 2;
`;

const TextContainer = styled.h1`
  margin: 10%;
  right: 100px;
`;

const LogoStyle = styled.div`
  img {
    max-width: 100px;
    max-height: 100px;
    position: absolute;
    left: 1em;
    top: 0.1px;
    bottom: 1em;
    background-size: 20%;
  }
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
`;

const LoginButton = styled.button`
  position: relative;
  left: 70vh;
`;

const Header = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <HeaderContainer>
        <TextContainer>Wanted Pre-onboarding course</TextContainer>
        <NavLink to="/">
          <LogoStyle>
            <img src={WantedLogo} alt="logo" />
          </LogoStyle>
        </NavLink>
        <LoginButton onClick={toLogin}>Login</LoginButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
