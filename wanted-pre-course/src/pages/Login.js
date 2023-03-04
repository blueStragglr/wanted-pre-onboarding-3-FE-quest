import { useForm } from "react-hook-form";
import styled from "styled-components";
import SmallCard from "../components/SmallCard";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

const H2 = styled.h2`
  color: #5a81dbcc;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  color: #5a81dbcc;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  border: 1px solid #5a81dbcc;
  outline: none;
  padding: 0.3rem;
  border-radius: 15px;
  margin-bottom: 0.5rem;
`;
const ErrorMSG = styled.div`
  color: rgb(222, 79, 84);
  margin-bottom: 6px;
  font-size: small;
`;
const Btn = styled.button`
  border: 1px solid #5a81dbcc;
  color: #5a81dbcc;
  outline: none;
  padding: 0.5rem;
  border-radius: 30px;
  background-color: transparent;
  margin-right: 1.5rem;
  &:hover {
    background-color: #7794d6cc;
    color: white;
  }
`;
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <SmallCard>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <H2>login</H2>
        <InputArea>
          <Label htmlFor="username">UserName</Label>
          <Input
            id="username"
            type="text"
            name="username"
            {...register("username", {
              required: "이름은 필수 입력입니다.",
              minLength: {
                value: 4,
                message: "4자리 이상 이름을 사용하세요.",
              },
            })}
          />
          {errors.username && (
            <ErrorMSG role="alert">{errors.username.message}</ErrorMSG>
          )}
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
                message:
                  "영문, 숫자, 특수기호 조합으로 8-20자리 이상 입력해주세요.",
              },
            })}
          />
          {errors.password && (
            <ErrorMSG role="alert">{errors.password.message}</ErrorMSG>
          )}
        </InputArea>
        <Btn>Login</Btn>
      </Form>
    </SmallCard>
  );
};
export default Login;
