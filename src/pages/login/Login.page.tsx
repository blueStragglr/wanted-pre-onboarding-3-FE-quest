import { type ChangeEvent, type FormEvent, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "~/providers";

const Login = () => {
  const { setLoginStatus } = useAuth();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(inputs).some((value) => value === "")) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    localStorage.setItem("token", "login-success-token");
    setLoginStatus("success");

    navigate("/");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container>
      <Box>
        <Title>Login</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            name="email"
            value={inputs.email}
            placeholder="Email"
            onChange={onChange}
          />
          <Input
            type="text"
            name="password"
            value={inputs.password}
            placeholder="Password"
            onChange={onChange}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Box>
    </Container>
  );
};

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: #0b847a;
  border-radius: 0.25rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const Input = styled.input`
  width: 50%;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid #e2e2e2;
  padding: 0 0.5rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  cursor: default;
`;

const Box = styled.div`
  width: 20rem;
  height: max-content;
  background-color: #ffffff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4ec0a4;
`;

export default Login;
