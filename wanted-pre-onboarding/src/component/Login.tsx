import React, { useState } from 'react';
import "../styles/container.css"

type LoginPageProps = {
    handleLogin: () => void;
  };
  
  const LoginPage = ({ handleLogin }: LoginPageProps) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (username !== "" && password !== "") {
        handleLogin();
      }
    };
  
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;