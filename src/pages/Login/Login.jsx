import styled from "styled-components";

const LoginForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 350px;
  height: 50px;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  background-color: #008cff;
  color: #fff;
  cursor: pointer;
`;

function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginForm onSubmit={onSubmit}>
      <Title>로그인</Title>
      <InputContainer>
        <Input type="text" placeholder="아이디" />
      </InputContainer>
      <InputContainer>
        <Input type="password" placeholder="비밀번호" />
      </InputContainer>
      <Button>로그인</Button>
    </LoginForm>
  );
}

export default Login;
