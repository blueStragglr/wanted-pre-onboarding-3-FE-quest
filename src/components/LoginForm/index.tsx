import React from "react";
import InputWithLabel from "../InputWithLabel";
import useLoginForm from "./hooks/useLoginForm";
import * as S from "./style";

const LoginForm = () => {
  const {
    state: { userName, password },
    onChange: { handleChangeUserName, handleChangePassword },
    onSubmit: { handleSubmitForm },
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmitForm}>
      <InputWithLabel
        text="유저 네임"
        id="username"
        type="text"
        value={userName}
        onChange={handleChangeUserName}
      />
      <InputWithLabel
        text="비밀번호"
        id="password"
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      <button type="submit" disabled={!userName || !password}>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
