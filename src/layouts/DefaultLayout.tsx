import React from 'react'
import AppBar from '@/components/common/AppBar'
import SideMenu from '@/components/common/SideMenu'
import Contents from '@/components/common/Contents'
import styled from '@emotion/styled'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
  `,
}
const DefaultLayout = () => {
  return (
    <>
      <AppBar />
      <S.Container>
        <SideMenu />
        <Contents />
      </S.Container>
    </>
  )
}

export default DefaultLayout
