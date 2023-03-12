import React, { useState } from "react";
import { getCurrentUserInfoWithToken, loginWithToken } from "../Api/login";
import { UserInfo } from "../types/user";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginOptions from "../Component/LoginOptions";

const LogContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 25px;
  font-size: 25px;
`;

const Explain = styled.span`
  margin-bottom: 20px;
  line-height : 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const InputTag = styled.input`
  margin-top: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const UserInfoBox = styled.div``;

const User = styled.div`
  font-size: 20px;
  margin-top : 10px;
`;

const JWTLogin = () => {
  const [accessToken, SetToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginPayload = {
      username: formData.get("username") as string, // blue
      password: formData.get("password") as string, // 1234!@#$  
    };

    const loginResult = await loginWithToken(loginPayload);

    if (loginResult.result === "fail") return;

    const userInfo = await getCurrentUserInfoWithToken(
      loginResult.access_token
    );
    SetToken(loginResult.access_token)
    setUserInfo(userInfo);
  };

  return (
    <>
      <LoginOptions />
      <LogContainer>
        <Title>Login with JWT</Title>
        <Explain>
          UserName과 Password가 일치하면 Jwt token을 발급합니다.
          <br />
          token 을 이용하여 Userinfo를 받아옵니다.
        </Explain>
        <Form onSubmit={loginSubmitHandler}>
          <label>
            Username:
            <InputTag type="text" name="username" placeholder="Hint : woony" />
          </label>
          <label>
            Password:
            <InputTag
              type="password"
              name="password"
              placeholder="Hint :1234"
            />
          </label>
          <Button type="submit" value="Submit">
            submit
          </Button>
        </Form>
        <UserInfoBox>
          <h2>User token</h2>
          <User style={{marginBottom:"10px"}}>{JSON.stringify(accessToken)}</User>
          <h2>User info</h2>
          <User>{JSON.stringify(userInfo)}</User>
        </UserInfoBox>
        <Link
          style={{ marginTop: "15px" }}
          to={{
            pathname: `/`,
          }}
          state={{}}
        >
          Home
        </Link>
      </LogContainer>
    </>
  );
};

export default JWTLogin;
