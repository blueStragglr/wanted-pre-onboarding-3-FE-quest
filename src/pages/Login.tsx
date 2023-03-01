import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms";
import { Form } from "../components/form/Form";
import { Input } from "../components/form/Input";

export const Login = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("isLogin", "true");
    navigate("/page-a");
    setSidebar("page-a");
  };

  return (
    <S.Container>
      <h1>Login</h1>
      <Form handleSubmitForm={handleSubmitForm}>
        <Input labelText="닉네임" required />
        <Input type="password" labelText="비밀번호" required />
      </Form>
    </S.Container>
  );
};

const S = {
  Container: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    font-size: 20px;
  `,
};
