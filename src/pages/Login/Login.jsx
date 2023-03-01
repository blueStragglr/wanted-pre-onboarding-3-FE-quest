import { useLocation } from "react-router-dom";
import styled from "styled-components";
import loginStore from "../../stores/LoginStore";

function Login() {
  const location = useLocation();
  const [, curPageName] = location.pathname.split("/");

  return (
    <LoginWrapper>
      <Input type="text" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호" />
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
    </LoginWrapper>
  );

  function handleLogin(e) {
    e.preventDefault();
    loginStore.login(curPageName);
  }
}

const Input = styled.input`
  height: 2.5rem;
  padding: 1rem;
`;

const LoginWrapper = styled.form`
  width: 20%;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  gap: 1rem;
`;

const LoginButton = styled.button`
  border: 1px solid black;
  height: 2.5rem;

  :hover {
    background-color: grey;
    color: white;
  }
`;

export default Login;
