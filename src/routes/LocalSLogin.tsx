import React, { useState } from "react";
import { getCurrentUserInfo, login } from "../Api/login";
import { UserInfo } from "../types/user";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginOptions from "../Component/LoginOptions";
import { useSetRecoilState } from "recoil";
import { isLogined } from "../Recoil/atoms";


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

const Ment = styled(Explain)``

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

const LocalLogin = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const setisLogin = useSetRecoilState(isLogined);
  const toggleDarkAtom = () => setisLogin((prev) => {
    if(prev === false) {
      console.log(prev)  
      return true
    }
    return false
  });

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginPayload = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const result = await login(loginPayload);
    if (result === "fail") return alert("로그인 실패하셨습니다");
    const userInfo = await getCurrentUserInfo();
    setUserInfo(userInfo);

    toggleDarkAtom()

  };

  return (
    <>
      <LoginOptions />
      <LogContainer>
        <Title>Login with localstorage</Title>
        <Explain>
          UserName과 Password가 일치하면 Jwt token을 발급합니다.
          <br />
          token 을 localstorage에 저장한 후 필요에 따라 불러와 로그인합니다.
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
        <div style={{marginTop : "20px"}}>{userInfo?.name ? <Ment>"로그인이 되었으니 Home으로 이동하시면 NeedLogin 페이지에 접근 가능하며 상단 환영멘트가 변경되었습니다."<br/>"로그아웃을 누르시면 localstorage 토큰값이 삭제되며 로그인이 해제됩니다."</Ment> : null}</div>
      </LogContainer>
    </>
  );
};

export default LocalLogin;
