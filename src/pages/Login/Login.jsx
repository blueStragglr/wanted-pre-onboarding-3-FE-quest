import styled from "styled-components";

function Login() {
  return (
    <LoginWrapper>
      <input />
      <input type="password" />
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
    </LoginWrapper>
  );

  function handleLogin(e) {
    e.preventDefault();
  }
}

const LoginWrapper = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginButton = styled.button`
  border: 1px solid black;

  :hover {
    background-color: grey;
    color: white;
  }
`;

export default Login;
