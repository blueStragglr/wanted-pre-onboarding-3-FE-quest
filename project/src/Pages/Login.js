import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const LoginDiv = styled.div`
  /* height: 100%; */
  h2 {
    margin: 0;
  }
  width: 380px;
  height: 320px;
  border: 0.2px solid #dadada;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    display: flex;
    flex-direction: column;
    div {
      margin-top: 20px;
      flex-direction: row;
      text-align: left;
    }
  }
`;
const LoginButton = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background-color: #016fbb;
  }
  background: #24a6ff;
  border: 1px solid hsl(206, 85%, 57.5%);
  color: white;
  /* width: 260px;
    height: 40px; */
  border-radius: 4px;
  margin-top: 50px;
  font-size: 15px;
`;
const Login = ({ userInfo, setUserInfo }) => {
  const loginInputHandler = (e) => {
    const copy = { ...userInfo };
    if (e.target.type === "text") {
      copy["id"] = e.target.value;
    }
    if (e.target.type === "password") {
      copy["password"] = e.target.value;
    }
    setUserInfo(copy);
    console.log(copy);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    // 아래로 axios 사용한 서버 통신 코드
  };

  return (
    <Container>
      <LoginDiv>
        <h2>Wanted</h2>
        <form className="form" onSubmit={loginSubmitHandler}>
          <div>ID</div>
          <input type="text" onChange={loginInputHandler} />
          <div>Password</div>
          <input type="password" onChange={loginInputHandler} />
          <LoginButton>로그인</LoginButton>
        </form>
      </LoginDiv>
    </Container>
  );
};

export default Login;
