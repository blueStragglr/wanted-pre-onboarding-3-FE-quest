import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <NotDiv>
      <CenterWrap>
        <div>페이지를 찾을 수 없습니다!</div>
        <Link to='/'>홈으로 돌아가기</Link>
      </CenterWrap>
    </NotDiv>
  )
}

export default NotFound

const NotDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

const CenterWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`
