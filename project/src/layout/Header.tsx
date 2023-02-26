import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <HeadText>Wanted Pre-onboarding course</HeadText>
    </div>
  )
}

export default Header

const HeadText = styled.p`
  font-weight: bold;
  font-size: 15px;
  font-style: italic;
`
