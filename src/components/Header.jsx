import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <Title>
        <Link to='/'>Wanted Pre-onboarding course</Link>
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 20px 25px;
  border-bottom: 1px solid #aaa;
  font-style: italic;
`;

const Title = styled.h1`
  font-size: 22px;
`;
