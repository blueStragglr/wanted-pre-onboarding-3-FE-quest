import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={() => navigate('/login')}>
        <input type='email' />
        <input type='password' autoComplete='off' />
        <button type='submit'>로그인하기</button>
      </form>
      <button onClick={() => navigate('/join')}>회원가입하러 가기</button>
    </div>
  );
};

export default Login;
