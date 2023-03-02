import React from 'react';
import styled from 'styled-components';
import Template from '../components/template';

const PageC = () => {
  return (
    <Template>
      <PageContainer>
        <Title>This is Page C!</Title>
      </PageContainer>
    </Template>
  );
};

export default PageC;

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
