import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const LoginBtn = styled.button`
  width: 48%;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 0;
  background-color: #ffff00;
`;

const CancelBtn = styled(LoginBtn)`
  color: #fff;
  background-color: #ff0000;
`;
const Modal = ({ isModal, setIsModal }) => {
  const cancel = (e) => {
    e.preventDefault();
    setIsModal(false);
  };

  const login = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <h2>Login</h2>
      <div>
        <Input type='text' name='id' placeholder='아이디를 입력해주세요' />
        <Input type='password' name='password' placeholder='비밀번호를 입력해주세요' />
      </div>
      <ButtonContainer>
        <CancelBtn onClick={cancel}>취소</CancelBtn>
        <LoginBtn onClick={login}>로그인</LoginBtn>
      </ButtonContainer>
    </Container>
  );
};

export default Modal;
