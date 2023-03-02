import React from "react";

// CSS
import styled from "styled-components";

const PageWrapper = styled.div`
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
