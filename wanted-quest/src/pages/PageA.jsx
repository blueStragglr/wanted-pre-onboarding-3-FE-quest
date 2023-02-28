import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function PageA() {
  return (
    <Container>
      PageA
    </Container>
  );
}

export default PageA;

const Container = styled.div`
  width: 51.5rem;
  background-color: aqua;
  border: 3px black solid;
`;