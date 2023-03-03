import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';
import styled from 'styled-components';

const Contents = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className='App'>
      <Header>Wanted Pre-onboarding course</Header>
      <Contents>
        <Sidebar />
        <Outlet />
      </Contents>
    </div>
  );
}

export default App;
