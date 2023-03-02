import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { UserId, UserState } from "../atoms";
import { Navigate } from "react-router-dom";

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 35rem;
  border: 2px solid gray;
  margin: auto;
  > h1 {
    text-align: center;
    font-size: xx-large;
    font-weight: 700;
    margin: 5rem 0rem;
  }
  > input {
    width: 20rem;
    height: 3rem;
    margin-bottom: 2rem;
    padding-left: 10px;
    :focus {
      outline: none;
    }
  }
  > button {
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
    font-size: larger;
    :hover {
      cursor: pointer;
      color: #0f6fbd;
    }
  }
  > a {
    text-align: center;
    text-decoration: none;
    margin-top: 2rem;
    color: black;
    :hover {
      color: #0f6fbd;
    }
  }
`;

const LogIn = () => {
  const [logInState, setLogInState] = useRecoilState(UserState);
  const resetLogInState = useResetRecoilState(UserState);
  const [user, setUser] = useRecoilState(UserId);

  const navigation = useNavigate();

  if (user) return <Navigate to="/" />;

  const onChangeId = (event) => {
    const { name, value } = event.target;
    setLogInState({ ...logInState, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onClickLogIn = (event) => {
    event.preventDefault();
    if (logInState.id && logInState.password) {
      setUser(logInState.id);
      resetLogInState();
      navigation("/");
    } else {
      alert("아이디와 비밀번호를 입력해주세요");
    }
  };
  return (
    <LogInForm onSubmit={onSubmit}>
      <h1>Log In</h1>
      <input
        placeholder="아이디를 입력하세요"
        value={logInState.id}
        onChange={onChangeId}
        name="id"
      />
      <input
        placeholder="비밀번호를 입력하세요"
        type="password"
        value={logInState.password}
        onChange={onChangeId}
        name="password"
      />
      <button type="submit" onClick={onClickLogIn}>
        Log In
      </button>
      <Link to="/">홈으로 돌아가기</Link>
    </LogInForm>
  );
};

export default LogIn;
