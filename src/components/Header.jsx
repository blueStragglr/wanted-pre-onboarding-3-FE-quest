import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  let login = localStorage.getItem('isLogin');
  const [isLogin, setIsLogin] = useState(login);
  return (
    <div className='header'>
      {isLogin ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to='/'>Wanted Pre-onboarding course</Link>
          <button
            className='button'
            onClick={() => {
              localStorage.removeItem('isLogin');
              setIsLogin(localStorage.getItem('isLogin'));
              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className='button'
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
