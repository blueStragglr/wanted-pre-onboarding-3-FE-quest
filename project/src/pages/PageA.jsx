import React from "react";
import styled from "styled-components";

function PageA() {
  return (
    <StText>
      <h1>This is Page A!</h1>
    </StText>
  );
}

export default PageA;

const StText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
