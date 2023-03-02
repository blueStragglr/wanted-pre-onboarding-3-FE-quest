import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { colorType } from "../types/colorType";

export default function Login(): JSX.Element {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isLoginRef = useRef({ isLogin: false });
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id && password) {
      isLoginRef.current.isLogin = true;
      localStorage.setItem("isLogin", isLoginRef.current.isLogin.toString());
      alert("로그인에 성공하였습니다.");
      navigate("/");
    } else alert("아이디와 비밀번호를 입력하세요.");
  };

  return (
    <MainStyle>
      <FormStyle onSubmit={handleClick}>
        <input
          value={id}
          placeholder="아이디를 입력하세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setId(e.target.value);
          }}
        />
        <input
          value={password}
          type={"password"}
          placeholder="비밀번호를 입력하세요"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <button>로그인</button>
      </FormStyle>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  width: 100vw;
  height: 100vh;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;

  input {
    height: 2rem;
    border: 0;
    border-bottom: 1px solid ${colorType.palette.gray};
    outline: none;
  }

  button {
    width: 10rem;
    height: 2rem;
    color: #ffffff;
    background-color: ${colorType.palette.blue};
    border: 0;
    border-radius: 0.25rem;
    &:hover {
      background-color: ${colorType.palette.hoverBlue};
    }
  }
`;
