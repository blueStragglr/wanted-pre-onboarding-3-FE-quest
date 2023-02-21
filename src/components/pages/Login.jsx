import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import LoginBtn from "../common/LoginBtn";

/**
 *
 */
const Login = () => {

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = useCallback((e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }, [setState])




  return (
    <LoginStyle>
      <p className={'title'}>로그인 페이지</p>
      <form className={'form'}>
        <label htmlFor={'email'}>이메일</label>
        <input
          id={'email'}
          name={'email'}
          type={'email'}
          placeholder={'email'}
          onChange={handleChange}
          value={state.email}
          className={'basic-input'}
        />
        <label htmlFor={'password'}>비밀번호</label>
        <input
          id={'password'}
          name={'password'}
          type={'password'}
          placeholder={'password'}
          onChange={handleChange}
          value={state.password}
          className={'basic-input'}
        />
        <div>
          <LoginBtn
            // onClick={handleDoneSignIn}
            title={'로그인'}
            type={'button'}
          />
        </div>
      </form>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	//max-width: 500px;
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
`;

export default Login;
