import styled from "styled-components";

const Wrapper = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PageA() {
  return (
    <Wrapper>
      <Main>This is Page A!</Main>
    </Wrapper>
  );
}

export default PageA;
