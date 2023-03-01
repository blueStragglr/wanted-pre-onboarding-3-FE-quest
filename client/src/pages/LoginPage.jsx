import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { useAuth } from "../contexts/AuthContext";

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
    <div>
      <form onSubmit={handleSubmit}>
        <InputForm type="text" value={id} setValue={setId} autoComplete="on" />
        <InputForm type="password" value={password} setValue={setPassword} autoComplete="current-password" />
        <Button text="시작하기" handleClick={handleClick} />
      </form>
    </div>
  );
}
