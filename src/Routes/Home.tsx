import styled from "styled-components";

const Wrapper = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Wrapper>
      <Main>This is Home!</Main>
    </Wrapper>
  );
}

export default Home;
