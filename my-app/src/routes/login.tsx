import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <input type="text" />
      <input type="text" />
      <button>로그인</button>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 20px auto;
  justify-content: center;
`;

export default Login;
