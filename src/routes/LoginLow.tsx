import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginLow } from "../Api/login";
import LoginOptions from "../Component/LoginOptions";
import { UserInfo } from "../types/user";

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


function LoginLow() {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id === "") return alert("id를 적어주세요");
    if (passWord === "") return alert("passWord를 적어주세요");

    const result: UserInfo = loginLow({ id, passWord });

    if (result.name !== "fail") {
      setUserInfo(result)
    } else {
      alert(`로그인에 실패하였습니다.`);
    }
  };

  return (
    <>
      <LoginOptions />
      <LogContainer>
        <Title>Login in Memory</Title>
        <Explain>
          UserName과 Password가 Userinfo를 받아옵니다.
        </Explain>
        <Form onSubmit={submitForm}>
          <InputTag
            value={id}
            placeholder="UserName (Hint : woony)"
            onChange={(e) => setId(e.currentTarget.value)}
          />
          <InputTag
            value={passWord}
            placeholder="PassWord (Hint : 1234)"
            onChange={(e) => setPassWord(e.currentTarget.value)}
          />
          <Button type="submit">로그인하기</Button>
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
      </LogContainer>
    </>
  );
}

export default LoginLow;
