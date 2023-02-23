import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='login'>
      <form className='form'>
        <input type='text' placeholder='id' />
        <input type='password' placeholder='password' />
        <button
          className='button'
          type='button'
          onClick={() => {
            localStorage.setItem('isLogin', 'true');
            navigate('/');
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
