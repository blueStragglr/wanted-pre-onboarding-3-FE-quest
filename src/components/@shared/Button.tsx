import styled from "@emotion/styled";

export const Button = ({ buttonText, ...props }: ButtonProps) => {
  return <S.Button {...props}>{buttonText}</S.Button>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

const S = {
  Button: styled.button`
    min-height: 44px;
    min-width: 44px;
    border: none;
    background-color: white;
    padding: 10px;
  `,
};
