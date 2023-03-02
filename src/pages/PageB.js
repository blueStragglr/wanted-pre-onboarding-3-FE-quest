import React from 'react';
import styled from 'styled-components';
import Template from '../components/Template';

const PageB = () => {
  return (
    <Template>
      <PageContainer>
        <PageText>집좀가자B</PageText>
      </PageContainer>
    </Template>
  );
};

export default PageB;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageText = styled.div`
  font-size: 48px;
  color: royalblue;
`;
