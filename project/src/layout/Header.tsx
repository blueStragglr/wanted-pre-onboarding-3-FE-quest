import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Wrap>
      <HeadText>Wanted Pre-onboarding course</HeadText>

      <LoginBtn type='button' onClick={() => navigate('/login')}>
        login
      </LoginBtn>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const HeadText = styled.p`
  font-weight: bold;
  font-size: 15px;
  font-style: italic;
`

const LoginBtn = styled.button`
  padding: 4px 24px;
  background: darkgrey;
  color: white;
  font-size: 16px;
`
