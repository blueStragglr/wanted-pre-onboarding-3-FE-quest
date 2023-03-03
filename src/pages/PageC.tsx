import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font: 40px bold;
    color: #2696f1;
  }
`;
const PageC = () => {
  return (
    <Container>
      <p>This is Page C!</p>
    </Container>
  );
};

export default PageC;
