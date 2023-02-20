import React from "react";
import styled from "styled-components";

const PageAContent = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;

const PageC = () => {
  return (
    <>
      <PageAContent>This is page C!</PageAContent>
    </>
  );
};

export default PageC;
