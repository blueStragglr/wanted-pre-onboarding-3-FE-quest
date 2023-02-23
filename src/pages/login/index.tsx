import React from "react";
import * as S from "./styled";

export default function LoginPage() {
  return (
    <>
      <S.Layout>
        <S.MainLayout>
          <S.Title>LOGIN</S.Title>

          <S.Input placeholder="USER NAME" />
          <S.Input placeholder="PASSWORD" />
          <S.LoginButton>LOGIN</S.LoginButton>
        </S.MainLayout>
      </S.Layout>
    </>
  );
}
