import React, { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import * as S from './style'
import Header from '../Header'
import Navigation from '../Navigation'

const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Navigation />
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Container>
    </>
  )
}

export default Layout
