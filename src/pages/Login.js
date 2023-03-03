import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <div>
      <StLoginForm>
        <h1>Login</h1>
        <StInputArea>
          <label htmlFor="input_id">username</label>
          <input type="text" name="input_id" />
        </StInputArea>
        <StInputArea>
          <label htmlFor="input_pw">password</label>
          <input type="password" name="input_pw"/>
        </StInputArea>
        <StLoginBtn>
          <button type="button">submit</button>
        </StLoginBtn>
        <StCaption class="caption">
            <a href="">Forgot Password?</a>
            <a href="">SIGN UP</a>
        </StCaption>
      </StLoginForm>
    </div>
  )
}

const StLoginForm = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin-top: 300px;
  text-align: center;
  display: relative;

  h1 {
    font-size: 38px;
    color: salmon;
    text-align: center;
    margin-bottom: 50px;
  }
`

const StInputArea = styled.div`
  box-sizing: border-box;
  width: 400px;
  display: absolute;
  margin-left: auto;
  margin-right: auto;
  color: royalblue;
  position: relative;
  margin-top: 20px;
  :first-child {
    margin-top: 0;
  }
  label {
    position: absolute;
    left: 10px;
    top: 15px;
    font-size: 18px;
    transition: top 0.5s ease;
  }

  input {
    width: 100%;
    padding: 20px 10px 10px;
    background-color: transparent;
    border: none;
    border-bottom: 0.8px solid salmon;
    font-size: 18px;
    outline: none;
  }
`

const StLoginBtn = styled.div`
  margin-top: 80px;
  width: 100%;
  button {
    width: 400px;
    height: 50px;
    color: royalblue;
    background: #eee;
    border: none;
    border-radius: 10px;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    background: #ddd;
  }
`

const StCaption = styled.div`
  margin-top: 20px;
  text-align: center;
  a {
    margin: 0 30px;
    font-size: 15px;
    color: salmon;
    text-decoration: none;
  }
  a:hover {
    font-weight: bold;
  }
`


export default Login;