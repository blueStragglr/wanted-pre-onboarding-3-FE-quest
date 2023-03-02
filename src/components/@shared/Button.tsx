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
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }
    :active {
      filter: brightness(0.7);
    }
  `,
};
