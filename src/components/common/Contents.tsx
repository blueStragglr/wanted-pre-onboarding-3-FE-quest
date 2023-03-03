import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const S = {
  Contents: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const Contents = () => {
  return (
    <S.Contents>
      <Outlet />
    </S.Contents>
  )
}

export default Contents
