import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { AUTH_KEY } from "@/constants/constant";
import { useAuthContext } from "@/Context/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setState, loginService } = useAuthContext();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = loginService.post(AUTH_KEY, { id, password });
    if (response.isLogin) {
      setState(response);
      navigate("/");
    }
  };

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <label>아이디</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
          placeholder="아이디를 입력하세요."
        />
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button>로그인</button>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 0.4rem;
    padding-left: 0.5rem;
    font-size: 1.3rem;
    font-weight: bolder;
  }
  input {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid gray;
    &::placeholder {
      color: gray;
      font-size: 1.2rem;
    }
  }
`;
