import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <UserNameWrapper>
          <UserName label="유저네임" type="text" onChange={onChangeUserName} />
        </UserNameWrapper>
        <PasswordWrapper>
          <Password label="비밀번호" type="password" helperText="최소 8 자, 최소 하나의 문자 및 하나의 숫자" onChange={onChangePassword} />
        </PasswordWrapper>
        <ButtonWrapper>
          <LoginButton variant="contained" onClick={onClickLogin}>
            로그인
          </LoginButton>
        </ButtonWrapper>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: bold;
  color: royalblue;
  text-align: center;
`;

const UserNameWrapper = styled.div`
  margin: 20px 0px;
`;

const PasswordWrapper = styled.div`
  margin: 20px 0px;
`;

const ButtonWrapper = styled.div`
  margin: 20px 0px;
  float: right;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin: 10px 0px;
  }
`;

const UserName = styled(TextField)`
  display: block;
  width: 300px;
`;

const Password = styled(TextField)`
  display: block;
  width: 300px;
`;

const LoginButton = styled(Button)`
  width: 100px;
`;
