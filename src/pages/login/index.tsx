import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export default function LoginPage() {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    name: "",
    pw: "",
  });

  const { name, pw } = loginInput;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClickSubmitButton = () => {
    if (!name) return;
    if (!pw) return;

    navigate("/page1");
  };

  return (
    <>
      <S.Layout>
        <S.MainLayout>
          <S.Title>LOGIN</S.Title>

          <S.Input
            placeholder="USER NAME"
            onChange={onChangeInput}
            name="name"
            value={name}
          />
          <S.Input
            placeholder="PASSWORD"
            onChange={onChangeInput}
            name="pw"
            value={pw}
            type="password"
          />

          <S.LoginButton
            onClick={onClickSubmitButton}
            isActive={name !== "" && pw !== ""}
          >
            LOGIN
          </S.LoginButton>
        </S.MainLayout>
      </S.Layout>
    </>
  );
}
