import styled from "@emotion/styled";

export const Input = ({ labelText, ...props }: InputProps) => {
  return (
    <S.Container>
      <S.Label>{labelText}</S.Label>
      <S.Input {...props} />
    </S.Container>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,

  Label: styled.label`
    font-size: 14px;
    margin-bottom: 5px;
  `,

  Input: styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    border: 1px solid #444444;
    border-radius: 5px;
  `,
};
