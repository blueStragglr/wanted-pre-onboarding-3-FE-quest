import React from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import styled from 'styled-components';
const Template = ({ children }) => {
  const savedUsername = sessionStorage.getItem('username');
  return (
    <TemplateContainer>
      <Header savedUsername={savedUsername} />
      <Content>
        <Sidebar savedUsername={savedUsername} />
        <Page>{children}</Page>
      </Content>
    </TemplateContainer>
  );
};

export default Template;

const TemplateContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 80px);
`;
const Page = styled.div`
  width: 100%;
  height: 100%;
`;
