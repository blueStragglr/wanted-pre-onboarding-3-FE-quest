import React from 'react';
import styled from 'styled-components';
import Template from '../components/Template';

const PageA = () => {
  return (
    <Template>
      <PageContainer>
        <PageText>집좀가자</PageText>
      </PageContainer>
    </Template>
  );
};

export default PageA;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageText = styled.div`
  font-size: 48px;
  color: blue;
`;
