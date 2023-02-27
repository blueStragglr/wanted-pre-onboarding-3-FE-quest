import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import WantedLogo from "../assets/wantedLogo.png";

const LoginContainer = styled.div`
  position: relative;
  top: 50%;
  margin: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > input {
      width: 80%;
      margin: 10px;
      padding: 5px;
    }
    > button {
      cursor: pointer;
      width: 85px;
      height: 40px;
      margin: 10px;
      padding: 0 20px;
      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
`;

const TitleContainer = styled.h3`
  font-size: x-large;
`;

const LogoStyle = styled.div`
  img {
    max-width: 100px;
    max-height: 100px;
    background-size: 20%;
  }
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
`;

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [duplicateMessage, setDuplicateMessage] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePressKey = (e) => {
    if (e.key) {
      setDuplicateMessage("");
    }
    if (id === "") {
      setDuplicateMessage("아이디를 입력해주세요");
    }
  };

  const handleLogin = () => {
    if (id === "") {
      setDuplicateMessage("아이디를 입력해주세요");
      return;
    }
    localStorage.setItem("id", id);
    navigate("/");
  };

  return (
    <>
      <LoginContainer>
        <NavLink to="/">
          <LogoStyle>
            <img src={WantedLogo} alt="logo" />
          </LogoStyle>
        </NavLink>
        <TitleContainer>로그인</TitleContainer>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="id"
            value={id}
            placeholder="ID"
            onChange={handleId}
            onKeyUp={handlePressKey}
          />
          <ErrorMessage>
            {duplicateMessage === "" ? null : duplicateMessage}
          </ErrorMessage>
          <input type="password" placeholder="Password" disabled />
          <button type="submit">Login</button>
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;
