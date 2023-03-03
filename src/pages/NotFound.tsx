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
    color: #dc3c0f;
  }
`;
const NotFound = () => {
  return (
    <Container>
      <p>NOT FOUND</p>
    </Container>
  );
};

export default NotFound;
