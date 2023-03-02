import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickLogin = () => {
    if (!isSubmit) {
      setIsSubmit(true);
      sessionStorage.setItem('username', userName);
      sessionStorage.setItem('password', password);
      navigate('/page/a');
    }
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <Title>로그인 페이지</Title>
        <UserName placeholder="유저 이름" onChange={onChangeUserName} />
        <Password placeholder="비밀번호" onChange={onChangePassword} />
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div``;

const Title = styled.div`
  font-size: 24px;
  color: royalblue;
`;

const UserName = styled.input``;

const Password = styled.input``;

const LoginButton = styled.button``;
