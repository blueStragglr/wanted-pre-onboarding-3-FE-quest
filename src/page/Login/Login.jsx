import React, { useState } from 'react';

import User from './components/User';

const Login = ({ mode }) => {
  const [title, setTitle] = useState(mode === 'login' ? '로그인' : '회원가입');

  const toggleIsLogin = () => {
    setTitle((prevTitle) => (prevTitle === '로그인' ? '회원가입' : '로그인'));
  };

  const data = {
    title,
    text: mode === 'login' ? '회원가입' : '로그인',
    url: mode === 'login' ? '/signup' : '/login',
  };

  return <User data={data} toggleIsLogin={toggleIsLogin} />;
};

export default Login;
