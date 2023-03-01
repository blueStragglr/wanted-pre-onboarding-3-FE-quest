import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

export default function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <Outlet />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
