import React, {useCallback, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";


/**
 *
 */
const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [saveAuth, setSaveAuth] = useState(state);

  const handleChangeAuth = useCallback((e)  => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }, [state, setState])

  const handleDoneLogIn = useCallback((e) => {
    e.preventDefault();
    setSaveAuth(state);
  }, [state, setSaveAuth, saveAuth])

  useEffect(() => {
    if(saveAuth.email.length > 0){
      localStorage.setItem("email", saveAuth.email);
      localStorage.setItem("password", saveAuth.password);
      navigate('/');
    }
  },[saveAuth, state, setSaveAuth])

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
          onChange={handleChangeAuth}
          value={state.email}
          className={'basic-input'}
        />
        <label htmlFor={'password'}>비밀번호</label>
        <input
          id={'password'}
          name={'password'}
          type={'password'}
          placeholder={'password'}
          onChange={handleChangeAuth}
          value={state.password}
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

