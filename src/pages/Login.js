import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../auth";

export const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChangeId = (e) => setId(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onLogin = (e) => {
    e.preventDefault();
    if (!id.length || !password.length) {
      alert("Please enter id and password");
      return;
    }
    login(id, navigate);
  };

  return (
    <div className="login flex-center">
      Sign in to Pre-onboarding
      <form className="login__form" onSubmit={onLogin}>
        <label className="login__form__label" htmlFor="id">
          ID
        </label>
        <input type="text" id="id" onChange={onChangeId} />
        <label className="login__form__label" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" onChange={onChangePassword} />
        <button className="login__submit-btn">Sign In</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};
