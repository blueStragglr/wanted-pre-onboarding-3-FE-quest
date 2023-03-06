import React from "react";
import styled from "styled-components";

function PageC() {
  return (
    <StText>
      <h1>This is Page C!</h1>
    </StText>
  );
}

export default PageC;

const StText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
