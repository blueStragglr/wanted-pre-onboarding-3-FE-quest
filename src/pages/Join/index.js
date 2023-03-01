import { joinApi } from 'apis/authApi';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { validator } from 'utils';

const Join = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [userAccount, setUserAccount] = React.useState({ email: '', password: '' });

  const isValidAccount = () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const isValid = validator.checkAccount(email, password);
    return isValid;
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setUserAccount({ ...userAccount, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await joinApi(userAccount);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSignUp}>
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
          회원가입하기
        </button>
      </form>
      <button onClick={() => navigate('/login')}>로그인하러 가기</button>
    </>
  );
};

export default Join;
