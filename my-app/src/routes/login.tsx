import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <InputBox>
          <label>Id</label>
          <Input type="text" />
        </InputBox>
        <InputBox>
          <label>Pw</label>
          <Input type="password" />
        </InputBox>
        <Button>로그인</Button>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginBox = styled.form`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  border-radius: 16px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  margin: 8px;
`;

const Button = styled.button`
  background-color: skyblue;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  padding: 8px;
  color: black;
  font-weight: bold;
`;
export default Login;
