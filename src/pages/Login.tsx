import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../app/authSlice';

type Props = {};

const Login = (props: Props) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ id: id, pw: password }));
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='login-box'>
        <input
          type='text'
          placeholder='아이디를 입력해 주세요.'
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <input
          type='password'
          placeholder='비밀번호를 입력해 주세요.'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type='submit' className='btn'>
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
