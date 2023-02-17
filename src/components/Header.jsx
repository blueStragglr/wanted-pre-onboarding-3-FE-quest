import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Section>
      <Container>
        <Link to="/">
          <Logocontainer>
            <LogoImg src="https://static.wanted.co.kr/favicon/180x180.png" alt="로고 이미지" />
            <LogoTitle>Wanted</LogoTitle>
          </Logocontainer>
        </Link>
        <Btncontainer>
          <Link to="/Login">
            <NavBtn>Login</NavBtn>
          </Link>
        </Btncontainer>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5.5rem 0 5.5rem;
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logocontainer = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  height: 2rem;
`;

const LogoTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 700;
  padding: 0.5rem;
  background-color: transparent;
  color: #1e2025;
`;

const Btncontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavBtn = styled.button`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.018em;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #1e2025;
  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

export default Header;
