import React from 'react';
import * as S from './styles';

const Login = () => {
  return (
    <S.LoginArea>
      <S.LoginContent>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginInput type="text" placeholder="이름을 입력해 주세요." />
        <S.LoginInput type="password" placeholder="비밀번호를 입력해 주세요." />
        <S.LoginBtn>Show Pages!</S.LoginBtn>
      </S.LoginContent>
    </S.LoginArea>
  );
};

export default Login;
