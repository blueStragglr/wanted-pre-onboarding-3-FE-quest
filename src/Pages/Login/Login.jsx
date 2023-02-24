import { Container, LoginContainer, LoginInput } from "./style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DefaultButton } from "../../Components/General";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setState(data);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginContainer>
            <LoginInput
              {...register("name", { required: true })}
              placeholder="name"
            />
            <LoginInput
              {...register("password", { required: true })}
              type="password"
              placeholder="password"
            />
            <DefaultButton text="Submit" type="button" className="loginbtn" />
          </LoginContainer>
        </form>
      </Container>
    </>
  );
};
export default Login;
