import { USER_TOKEN_KEY } from 'constants';
import React, { useRef } from 'react';
import { loginApi } from 'apis/authApi';
import { useNavigate } from 'react-router-dom';
import { validator } from 'utils';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [userAccount, setUserAccount] = React.useState({ email: '', password: '' });

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setUserAccount({ ...userAccount, [name]: value });
  };

  const isValidAccount = () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const isValid = validator.checkAccount(email, password);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(userAccount);
      const { accessToken } = response.data;
      if (accessToken) {
        localStorage.setItem(USER_TOKEN_KEY, accessToken);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <input
          name='email'
          type='email'
          ref={emailRef}
          value={userAccount.email}
          onChange={handleAccountChange}
        />
        <input
          name='password'
          type='password'
          ref={passwordRef}
          value={userAccount.password}
          onChange={handleAccountChange}
          autoComplete='off'
        />
        <button type='submit' disabled={!isValidAccount()}>
          로그인하기
        </button>
      </form>
      <button onClick={() => navigate('/join')}>회원가입하러 가기</button>
    </div>
  );
};

export default Login;
