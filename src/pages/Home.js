import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PageA from '../pages/PageA';
// import PageB from '../pages/PageB';
// import PageC from '../pages/PageC';

const Home = () => {
  return (
    <>
    <Header />
      <StLayout>
        <Sidebar />
        <StContent>
          <PageA />
        </StContent>
      </StLayout>
    </>
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