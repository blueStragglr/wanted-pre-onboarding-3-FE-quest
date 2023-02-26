import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const CmnLayout = () => {
  const { pathname } = useLocation()
  return (
    <HtmlWrap>
      <HeadWrap>
        <Header />
      </HeadWrap>
      <BodyWrap>
        <SideWrap>
          <SideBar />
        </SideWrap>
        <PageWrap>
          {pathname === '/' && <h1>MainPage</h1>}
          <Outlet />
        </PageWrap>
      </BodyWrap>
    </HtmlWrap>
  )
}

export default CmnLayout

const HtmlWrap = styled.div`
  width: 100vw;
  height: 100vh;
`

const HeadWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 0.5px solid #000;
  position: fixed;
`

const BodyWrap = styled.div`
  display: flex;
  padding-top: 50px;
  height: 100vh;
`

const SideWrap = styled.div`
  width: 20%;
  padding: 16px;
  border-right: 0.5px solid #000;
`

const PageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  overflow-y: auto;
  padding: 16px;
`
