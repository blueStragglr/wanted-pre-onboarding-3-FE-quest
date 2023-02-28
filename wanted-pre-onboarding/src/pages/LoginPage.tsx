import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  padding-top: 40vh;
  text-align: center;

  padding: 1rem;
  margin-left: 6rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
`;

const LoginInput = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    //api를 통한 로그인
    //isLogin boolean 변수
    //set.cookie 를 이용해서 cookie
    //jwt ,

    //위에 설정후 홈으로 라우팅
    //Home 으로 라우팅
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LoginButton type="submit">Log In</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
