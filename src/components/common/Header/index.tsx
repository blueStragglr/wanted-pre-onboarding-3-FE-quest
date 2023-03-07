import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTERPATH } from 'src/constants/path'
import * as S from './style'
const Header = () => {
  return (
    <S.Container>
      <Link to={ROUTERPATH.PAGEA}>Wanted Pre-onboarding course</Link>
    </S.Container>
  )
}

export default Header
