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
export default function Sec() {
  return (
    <MainWrapper>
      <h1>This is Page B!</h1>
    </MainWrapper>
  );
}
