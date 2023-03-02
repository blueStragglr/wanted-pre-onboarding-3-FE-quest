import styled from "@emotion/styled";

export const PageA = () => {
  return <S.Container>Page A</S.Container>;
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
