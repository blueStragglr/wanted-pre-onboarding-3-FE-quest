import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") ? localStorage.getItem("isLogin") : "false"
  );

  const handleClickLoginButton = () => {
    navigate("/login");
  };

  const handleClickLogoutButton = () => {
    localStorage.removeItem("isLogin");
    setIsLogin("false");
  };

  console.log("isLogin: ", isLogin);
  console.log("false" === isLogin);

  return (
    <S.Header>
      <S.LeftBox>Wanted Pre-onboarding course</S.LeftBox>
      <S.RightBox>
        {isLogin === "false" && (
          <S.LoginButton buttonText="Login" onClick={handleClickLoginButton} />
        )}
        {isLogin === "true" && (
          <S.LogoutButton
            buttonText="Logout"
            onClick={handleClickLogoutButton}
          />
        )}
      </S.RightBox>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e5e5e5;
    padding: 30px;
    font-size: 24px;
    font-weight: 700;
    font-style: italic;

    @media (max-width: 650px) {
      height: 60px;
      padding: 20px;
      font-size: 20px;
    }

    @media (max-width: 550px) {
      font-size: 16px;
    }

    @media (max-width: 460px) {
      font-size: 14px;
    }
  `,

  LeftBox: styled.div`
    width: 70%;
  `,

  RightBox: styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
  `,

  LoginButton: styled(Button)`
    font-size: 20px;
  `,

  LogoutButton: styled(Button)`
    font-size: 20px;
  `,
};
