import React from 'react'
import styled from 'styled-components'

const PageA = () => {
  return (
    <div>
      <TitleText>This is Page A!</TitleText>
    </div>
  )
}

export default PageA

const TitleText = styled.p`
  font-size: 30px;
  color: deepskyblue;
`
