import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Components/Login'
import styled from 'styled-components'

const Home = () => {
  const authenticated = useSelector(state => state.auth.authenticated)
  return (
    <HomeBox>
      {authenticated ? <p>로그인 상태입니다</p> : <Login />}
    </HomeBox>
  )
}

export default Home

const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  p {
    margin-top: 100px;
  }
`