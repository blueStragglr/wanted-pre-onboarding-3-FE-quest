import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogInButton from "./LogInButton";

const NavStyle = styled.nav`
  border-bottom: solid 2px gray;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: xx-large;
  font-style: italic;
  margin: 2rem;
  width: fit-content;
  > a {
    text-decoration: none;
    color: black;
  }
`;

const Nav = () => {
  return (
    <NavStyle>
      <Title>
        <Link to="/">Wanted Pre-onboarding course</Link>
      </Title>
      <LogInButton />
    </NavStyle>
  );
};

export default Nav;
