import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({ account: "", password: "" });
  const navigate = useNavigate();
  const { account, password } = form;

  const loginHandler = (e) => {
    e.preventDefault();

    setUser({ isLogin: true, info: { name: account } });
    navigate("/");
  };

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };
  return (
    <section className="login">
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <input
          name="account"
          onChange={onChangeHandler}
          placeholder="account"
          value={account}
        ></input>
        <input
          onChange={onChangeHandler}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
        ></input>
        <button disabled={!account || !password} type="submit">
          로그인
        </button>
      </form>
    </section>
  );
};

export default Login;
