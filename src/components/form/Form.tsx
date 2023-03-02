import styled from "@emotion/styled";
import { Button } from "../@shared/Button";

export const Form = ({ children, handleSubmitForm, ...props }: FormProps) => {
  return (
    <S.Form onSubmit={handleSubmitForm} {...props}>
      {children}
      <S.SubmitButton buttonText="로그인" />
    </S.Form>
  );
};

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: JSX.Element | JSX.Element[];
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
  `,

  SubmitButton: styled(Button)`
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #3ab0ff;
    color: white;
    font-size: 16px;
  `,
};
