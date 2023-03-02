import styled from "styled-components";

const PageWrapper = styled.article`
  margin: auto;
`;

const PageA = () => {
  return (
    <PageWrapper>
      <h1>This is Page A!</h1>
    </PageWrapper>
  );
};

export default PageA;
