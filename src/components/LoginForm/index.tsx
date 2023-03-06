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
    <S.Form onSubmit={handleSubmitForm}>
      <S.InputContainer>
        <InputWithLabel
          text="username"
          id="username"
          type="text"
          value={userName}
          onChange={handleChangeUserName}
        />
      </S.InputContainer>
      <S.InputContainer>
        <InputWithLabel
          text="password"
          id="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </S.InputContainer>

      <button type="submit" disabled={!userName || !password}>
        로그인
      </button>
    </S.Form>
  );
};

export default LoginForm;
