import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import { useAuth } from "../../contexts/AuthContext";
import "./LoginPage.css";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("id")) {
      login();
      navigate("/");
    }
  }, [navigate, login]);

  const handleClick = () => {
    localStorage.setItem("id", id);
    login();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit}>
        <InputForm type="text" value={id} setValue={setId} autoComplete="on" />
        <InputForm type="password" value={password} setValue={setPassword} autoComplete="current-password" />
        <Button className="login__button" text="시작하기" handleClick={handleClick} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
