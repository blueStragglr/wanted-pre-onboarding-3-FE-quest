import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WantedLogo from "../assets/wantedLogo.png";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10em;
`;

const TitleContainer = styled.h3`
  font-size: x-large;
`;

const IdContainer = styled.input`
  margin: 10px;
  padding: 5px;
  width: 15%;
`;

const PwContainer = styled.input`
  padding: 5px;
  width: 15%;
`;

const ButtonContainer = styled.button`
  margin: 30px;
  padding: 5px;
`;

const LogoStyle = styled.div`
  img {
    max-width: 100px;
    max-height: 100px;
    background-size: 20%;
  }
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <NavLink to="/">
          <LogoStyle>
            <img src={WantedLogo} alt="logo" />
          </LogoStyle>
        </NavLink>
        <TitleContainer>Wanted Pre-onboarding Course</TitleContainer>
        <IdContainer type="text" placeholder="ID" />
        <PwContainer type="password" placeholder="Password" />
        <ButtonContainer>Login</ButtonContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
