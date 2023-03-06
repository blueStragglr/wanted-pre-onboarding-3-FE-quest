import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
`;

export default function Main() {
  return (
    <MainWrapper>
      <h1>This is Page A!</h1>
    </MainWrapper>
  );
}
