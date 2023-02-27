import Input from "@/components/Input";
import useSubmit from "@/features/login/hooks/useSubmit";
import * as S from "./style";

const LoginForm = () => {
  const { usernameRef, passowrdRef, onSubmit } = useSubmit();

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>Login Page</S.Title>
      <Input ref={usernameRef} placeholder="username" />
      <Input ref={passowrdRef} placeholder="password" />
      <S.SubmitBtn>Login</S.SubmitBtn>
    </S.Wrapper>
  );
};

export default LoginForm;
