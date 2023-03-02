import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onClickLoginBtn = () => {
    localStorage.setItem('userName', name);
    toast.success(`${name}님 반가워요!`);
    navigate('/A');
  };

  return (
    <S.LoginArea>
      <S.LoginContent>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginInput
          name="name"
          type="text"
          placeholder="이름을 입력해 주세요."
          onChange={e => setName(e.target.value)}
        />
        <S.LoginInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={e => setPassword(e.target.value)}
        />
        <S.LoginBtn onClick={onClickLoginBtn}>Show Pages!</S.LoginBtn>
      </S.LoginContent>
    </S.LoginArea>
  );
};

export default Login;
