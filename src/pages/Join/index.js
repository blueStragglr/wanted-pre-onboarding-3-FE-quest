import React from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={() => navigate('/join')}>
        <input type='email' />
        <input type='password' autoComplete='off' />
        <button type='submit'>회원가입하기</button>
      </form>
      <button onClick={() => navigate('/login')}>로그인하러 가기</button>
    </>
  );
};

export default Join;
