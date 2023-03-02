import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/authSlice'
import styled from 'styled-components'

const Header = () => {
  const userName = useSelector(state => state.auth.userId)
  const authenticated = useSelector(state => state.auth.authenticated)
  const dispatch = useDispatch()
  return (
    <HeaderBox>
        <h1>Wanted Pre-onboarding course</h1>
        <div className='right'>
          {authenticated ? `안녕하세요! ${userName} 님` : '로그인이 필요합니다'}
          {authenticated ? <button type='button' onClick={() => dispatch(logout())}>로그아웃</button> : null}
        </div>
    </HeaderBox>
  )
}

export default Header

const HeaderBox = styled.div`
grid-column: 1/3;
  margin: 0;
  padding: 0 20px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  h1 {
    font-family: Ubuntu;
    font-size: 36px;
    font-weight: bold;
  }
  .right {
  }
  button {
    margin-left: 10px;
    background-color: white;
    border: 1px solid black;
    :hover {
      background-color: black;
      color: white;
      transition: .3s;
      cursor: pointer;
    }
  }
`