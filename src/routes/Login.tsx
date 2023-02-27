import styled from "styled-components";
import { useState } from "react";
import request from "../Api/request";
import { Link } from "react-router-dom";

const LogContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
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

function Login() {
  const [id, setId] = useState("");
  const [passWord, setPassWord] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (id === "") return alert("id를 적어주세요");
    if (passWord === "") return alert("passWord를 적어주세요");

    const result: string = request.login({ id, passWord });
    
    if (result === "success") {
      alert(`반갑습니다 ${id}`);
      setId("");
      setPassWord("");
    } else {
      alert(`로그인에 실패하였습니다.`);
    }
    
  };

  return (
    <>
      <LogContainer>
        LoginContainer
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
        <Link
                to={{
                  pathname:`/`,
                }}
                state={{}}
              >
               Home
              </Link>
      </LogContainer>
    </>
  );
}

export default Login;
