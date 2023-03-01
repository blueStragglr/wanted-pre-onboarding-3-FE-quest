import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      헤더
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 5rem;
  background-color: blanchedalmond;
  border: 3px black solid;
`;