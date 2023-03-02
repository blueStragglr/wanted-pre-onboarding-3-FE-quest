import React, { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };
  const resetValue = () => setValue("");
  return {
    value,
    onChange,
    resetValue,
  };
};

const useLoginForm = () => {
  const {
    value: email,
    onChange: onEmailChange,
    resetValue: resetEmail,
  } = useInput();
  const {
    value: password,
    onChange: onPasswordChange,
    resetValue: resetPassword,
  } = useInput();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    window.alert(JSON.stringify({ email, password }));
    resetEmail();
    resetPassword();
  };

  return {
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onSubmit,
  };
};

const LoginPage = () => {
  const { email, onEmailChange, password, onPasswordChange, onSubmit } =
    useLoginForm();

  return (
    <section>
      <h2>로그인 페이지</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </section>
  );
};

export default LoginPage;
