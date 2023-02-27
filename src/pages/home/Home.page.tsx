import styled from "@emotion/styled";

const Home = () => {
  return (
    <Container>
      <H1>This is Home!</H1>
    </Container>
  );
};

const H1 = styled.h1`
  color: #0071c0;
  letter-spacing: 0.1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default Home;
