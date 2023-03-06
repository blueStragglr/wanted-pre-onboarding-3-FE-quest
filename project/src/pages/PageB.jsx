import React from "react";
import styled from "styled-components";

function PageB() {
  return (
    <StText>
      <h1>This is Page B!</h1>
    </StText>
  );
}

export default PageB;

const StText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
