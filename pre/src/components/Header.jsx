import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login/Login';
import Modal from './Login/Modal';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  border-bottom: 1px solid #000;
`;

const Logo = styled.h1`
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <Logo>
          <Link to='/'>Wanted Pre-onboarding course</Link>
        </Logo>
        <Login setIsOpen={setIsOpen} />
      </Container>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
