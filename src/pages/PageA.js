import React from "react";
import styled from "styled-components";

function PageA() {
  return <PageWrapper>This is Page A !</PageWrapper>;
}

const PageWrapper = styled.div`
  width: 100vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0090ff;
  font-size: 50px;
`;

export default PageA;
