import React, { useState } from "react";
import classes from "../style/Login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const obj = {
    email: email,
    password: password,
  };

  const handleLoginClick = () => {
    localStorage.setItem("email", JSON.stringify(obj));
    if ((email, password)) {
      alert("로그인완료");
      navigation("/");
    } else {
      alert("이메일 비밀번호 입력주세요");
    }
  };
  return (
    <div className={classes.loginWrap}>
      <div className={classes.inputWrap}>
        <h2>로그인</h2>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email을 입력해주세요"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password를 입력해주세요"
        />
        <button onClick={handleLoginClick}>로그인하기</button>
      </div>
    </div>
  );
};

export default Login;
