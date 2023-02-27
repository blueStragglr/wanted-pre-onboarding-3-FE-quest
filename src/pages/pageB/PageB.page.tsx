import styled from "@emotion/styled";

const PageB = () => {
  return (
    <Container>
      <H1>This is Page B!</H1>
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

export default PageB;
