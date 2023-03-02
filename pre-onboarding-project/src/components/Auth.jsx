import React, { useState } from 'react';

const Auth = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmail = (value) => {
    setEmail(value);
  }

  const onPassword = (value) => {
    setPassword(value)
  }

  const login = () => {
    return {email, password}
  }

  return (
    <div>
      <input type='email' value={email} onChange={onEmail} />
      <input type='password' value={password} onChange={onPassword} />
      <button onClick={login}>확인</button>
    </div>
  );
};

export default Auth;