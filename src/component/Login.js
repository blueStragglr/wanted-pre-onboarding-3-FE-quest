import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/Main");
  };

  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <h1>원티드 프리온보딩!</h1>
          <InputZone>
            <IdZone>
              <span>아이디</span> <input />
            </IdZone>
            <PasswordZone>
              <span>비밀번호</span> <input />
            </PasswordZone>
          </InputZone>
          <button onClick={goMain}>로그인</button>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginWrapper = styled.div`
  background-color: aliceblue;
  width: 500px;
  height: 500px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
  h1 {
    margin-top: 50px;
  }
  button {
    width: 300px;
    margin: 0 auto;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bolder;
    background-color: white;
    cursor: pointer;
  }
`;

const InputZone = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const IdZone = styled.div`
  display: flex;
  margin-bottom: 30px;
  span {
    width: 100px;
    font-size: 20px;
    font-weight: bold;
  }
  input {
    outline: none;
    border-radius: 5px;
    height: 30px;
  }
`;

const PasswordZone = styled.div`
  display: flex;
  span {
    width: 100px;
    font-size: 20px;
    font-weight: bold;
  }
  input {
    outline: none;
    border-radius: 5px;
    height: 30px;
  }
`;
