import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import PageA from '../pages/PageA';
// import PageB from '../pages/PageB';
// import PageC from '../pages/PageC';

const Home = () => {
  return (
    <div className="wrap">
      <Header />
      <StLayout className="container">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <StContent className="right-content">
          <Outlet />
        </StContent>        
      </StLayout>       
    </div>    
  )
}
const StLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const StContent = styled.div`
width: calc(100% - 200px);
`
export default Home;