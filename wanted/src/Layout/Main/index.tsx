import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../NavigationBar';

export default function Main() {
  return (
    <S_Main>
      <NavigationBar />
      <Outlet />
    </S_Main>
  );
}

const S_Main = styled.main`
  display: flex;
  width: 100%;
  height: calc(100% - 70px);
  padding-top: 70px;
`;
