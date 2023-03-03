import styled from "styled-components";

function PageA() {
  return (
    <PageContainer>
      <h1>This is Page A!</h1>
    </PageContainer>
  );
}

export default PageA;

export const PageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: skyblue;
`;
