import React from 'react'
import { ROUTERPATH } from '../../../constants/path'
import * as S from './style'
type NaviLink = {
  path: string
  title: string
}

const Navigation = () => {
  const NaviLinkWrap = ({ path, title }: NaviLink) => {
    return (
      <>
        <S.Navi
          to={path}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {title}
        </S.Navi>
      </>
    )
  }
  return (
    <S.Container>
      <NaviLinkWrap path={ROUTERPATH.PAGEA} title="pageA" />
      <NaviLinkWrap path={ROUTERPATH.PAGEB} title="pageB" />
      <NaviLinkWrap path={ROUTERPATH.PAGEC} title="pageC" />
    </S.Container>
  )
}

export default Navigation
