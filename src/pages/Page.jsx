import React from 'react';
import styled from 'styled-components';

export default function Page({ text }) {
  return (
    <Wrapper>
      <Title>This is Page {text}!</Title>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  color: cornflowerblue;
`;
