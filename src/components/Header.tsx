import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/authSlice';

type Props = {};

const Header = (props: Props) => {
  const isLogin = useSelector((state: any) => state.auth.id);
  const dispatch = useDispatch();
  return (
    <header>
      Wanted Pre-OnBoarding Course
      {isLogin.id}
      {isLogin ? (
        <button className='btn' onClick={() => dispatch(logout())}>
          logout
        </button>
      ) : null}
    </header>
  );
};

export default Header;
