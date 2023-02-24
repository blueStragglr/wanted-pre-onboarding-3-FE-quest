import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 400px;
  padding: 1rem;
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translate(-50%, -40%);
  border: 1px solid #ddd;

  input {
    width: 80%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: none;
    background-color: #eee;
    border-radius: 2rem;
  }
`;
const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;
const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LoginButton = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1rem;
  background-color: #1a50e4d6;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
`;

const JoinLink = styled.button`
  font-size: 0.8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Modal = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const join = () => {
    navigate('/');
    setIsOpen(!isOpen);
  };

  const login = () => {
    // 유효성검사
    navigate('/');
    setIsOpen(!isOpen);
  };
  return (
    <Container action=''>
      <Title>원티드 프리온보딩 코스 로그인</Title>
      <div>
        <input type='text' placeholder='아이디를 입력하세요' required />
        <input type='password' placeholder='패스워드를 입력하세요' required />
      </div>
      <ButtonContainer>
        <LoginButton onClick={login}>로그인</LoginButton>
        <JoinLink onClick={join}>회원가입</JoinLink>
      </ButtonContainer>
    </Container>
  );
};

export default Modal;
