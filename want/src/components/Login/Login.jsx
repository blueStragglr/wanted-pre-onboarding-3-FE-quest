import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  border: 1px solid #ced4da;
`;

const LoginButton = styled.button`
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <LoginWrapper>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput type="email" placeholder="Email" required />
        <LoginInput type="password" placeholder="Password" required />
        <LoginButton type="submit">Log in</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
}
