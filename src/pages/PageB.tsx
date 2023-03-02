import styled from "@emotion/styled";

export const PageB = () => {
  return <S.Container>Page B</S.Container>;
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
