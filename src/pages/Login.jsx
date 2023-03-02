import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { authState } from "@/atoms/authAtom";

const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  console.log(auth);

  function handleLogin() {
    setAuth(true);
    navigate("/");
  }

  return (
    <Container>
      <Wrap>
        <h2>LOGIN</h2>
        <InputWrap>
          <div>
            <p>아이디</p>
            <input type="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div>
            <p>비밀번호</p>
            <input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
        </InputWrap>
        <ButtonWrap>
          <button onClick={handleLogin}>로그인</button>
          <button>회원가입하기</button>
        </ButtonWrap>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  background-color: var(--color-white);
  display: flex;
  justify-content: flex-start;
  padding: 80px 50px 20px 50px;
  box-sizing: border-box;
  flex-wrap: wrap;
  h2 {
    text-align: left;
    font-size: 30px;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

const InputWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding-bottom: 10px;
  div {
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid var(--color-primary);
    margin-bottom: 20px;
    p {
      width: 30%;
      font-size: 14px;
      font-weight: 600;
      padding-left: 10px;
    }
    input {
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      outline: none;
      border: transparent;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  button {
    width: 100%;
    height: 50px;
    outline: none;
    background-color: var(--color-point);
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 500;
    :nth-child(2) {
      background-color: var(--color-white);
      border: 1px solid var(--color-primary);
    }
  }
`;
export default Login;
