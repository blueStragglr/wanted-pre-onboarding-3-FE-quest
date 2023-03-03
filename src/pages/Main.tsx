import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Hader';
import SideNav from '../components/SideNav/SideNav';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <SideNav />
        <Outlet />
      </Container>
    </>
  );
};
