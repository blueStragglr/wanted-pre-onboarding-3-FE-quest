import styled from "@emotion/styled";

export const PageC = () => {
  return <S.Container>Page C</S.Container>;
};

const S = {
  Container: styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  `,
};
