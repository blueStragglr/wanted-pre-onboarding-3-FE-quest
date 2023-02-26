import React, {useCallback, useState} from 'react';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";


/**
 *
 */
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState([]);

  const handleChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  },[setEmail, email]);
  console.log('email:', email);

  const handleDoneLogIn = useCallback((e) => {
    e.preventDefault();
    setSaveEmail([
      ...saveEmail, email
    ]);
    localStorage.setItem("email", saveEmail[0]);
    navigate('/');
    console.log('saveEmail',saveEmail);
  },[setSaveEmail,saveEmail, email]);

  return (
    <LoginStyle>
      <p className={'title'}>로그인 페이지</p>
      <form className={'form'                                                                                                                       }>
        <label htmlFor={'email'}>이메일</label>
        <input
          id={'email'}
          name={'email'}
          type={'email'}
          placeholder={'email'}
          onChange={handleChangeEmail}
          value={email}
          className={'basic-input'}
        />
        <label htmlFor={'password'}>비밀번호</label>
        <input
          id={'password'}
          name={'password'}
          type={'password'}
          placeholder={'password'}
          className={'basic-input'}
        />
        <LoginBtn
          onClick={handleDoneLogIn}
          type={'submit'}
        >로그인</LoginBtn>
      </form>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);

  .title{
    font-size: 24px;
    margin-bottom: 10px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .goto-signup {
    text-decoration: underline;
    margin-top: 10px;
    text-align: right;
  }
  .basic-input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #bbb;
    margin: 4px 0 20px;
    padding: 5px 10px;
  }
  .link{
    color: #fff;
  }
`;

export const LoginBtn = styled.button`
  min-width: 350px;
  height: 50px;
  color: white;
  background-color: teal;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.disabled ? 'gray' : 'teal')};
`;

export default Login;

