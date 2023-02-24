import React from "react";
import styled from "styled-components";

function Login() {
  const clickMainFunc = () => {
    window.location.replace("/");
  };
  const clickLoginFunc = () => {
    window.alert("로그인 하신것읗 환영합니다 ");
    window.location.replace("/");
  };
  return (
    <LoginWrapper>
      <LoginSpace>
        <div>
          <LoginTitle>Login</LoginTitle>
          <LoginMenu>아이디</LoginMenu>
          <LoginInput />
          <LoginMenu>비밀번호</LoginMenu>
          <LoginInput type="password" />
        </div>
        <LoginBtnSpace>
          <Btn onClick={clickMainFunc}>메인으로</Btn>
          <Btn onClick={clickLoginFunc}>로그인</Btn>
        </LoginBtnSpace>
      </LoginSpace>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginSpace = styled.div`
  width: 400px;
  height: 550px;
  border: 2px solid gray;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LoginTitle = styled.div`
  width: 80%;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;
const LoginMenu = styled.div`
  width: 80%;
  font-size: 30px;
  font-weight: bold;
  margin: 40px auto;
`;
const LoginInput = styled.input`
  width: 80%;
  height: 30px;
  margin-left: 40px;
`;
const LoginBtnSpace = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;
const Btn = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Login;
