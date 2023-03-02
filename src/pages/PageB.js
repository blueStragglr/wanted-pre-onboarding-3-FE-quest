import React from 'react';
import styled from 'styled-components';
import Template from '../components/Template';

const PageB = () => {
  return (
    <Template>
      <PageContainer>
        <Title>This is Page B!</Title>
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

const Title = styled.div`
  font-size: 48px;
  color: royalblue;
`;
