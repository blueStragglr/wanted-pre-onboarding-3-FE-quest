import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components/macro'

import Nav from '../../components/Nav'
import Sidebar from '../../components/Sidebar'

const Main = () => {
  return (
    <main>
        <Nav />
        <MainPresenter>
            <Sidebar />
            <Outlet />
        </MainPresenter>
    </main>
  )
}

export default Main 

const MainPresenter = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;



