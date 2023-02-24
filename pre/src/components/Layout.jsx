import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
`;

const Contents = styled.div`
  padding: 1rem;
`;
const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Sidebar />
        <Contents>
          <Outlet />
        </Contents>
      </Container>
    </div>
  );
};

export default Layout;
