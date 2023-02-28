import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export default Wrapper;
