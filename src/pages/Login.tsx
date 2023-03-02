import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../store/loginSlice";
import { AppDispatch } from "../store/store";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id.length > 0 && password.length > 0) {
      dispatch(login({ id: id, password: password }));
      navigate("/");
    } else {
      return alert("아이디와 비밀번호를 모두 입력해주세요");
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <div className="login">Login</div>
        <div className="content">
          <div className="title">ID</div>
          <input
            type="text"
            value={id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
          />
        </div>
        <div className="content">
          <div className="title">PASSWORD</div>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="content submit">
          <button type="submit">Login</button>
        </div>
      </LoginForm>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 0 50px;

  .login {
    font-size: 50px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .content {
    padding-bottom: 20px;
    .title {
      margin-bottom: 5px;
    }
    input {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 8px;
    }
    &.submit {
      display: flex;
      justify-content: center;
      button {
        display: inline-block;
        background-color: white;
        outline: none;
        border: 1px solid lightgray;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          background-color: lightgray;
        }
      }
    }
  }
`;

export default Login;
