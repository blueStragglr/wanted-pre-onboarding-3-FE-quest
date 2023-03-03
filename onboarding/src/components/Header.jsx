import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isLogin, removeIsLogin } from '../utils';

const Header = () => {
  const [loginState, setLoginState] = useState(isLogin());

  return (
    <header>
      Wanted Pre Onboarding
      {loginState ? (
        <button
          onClick={() => {
            removeIsLogin();
            setLoginState(false);
          }}
        >
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </header>
  );
};
export default Header;
