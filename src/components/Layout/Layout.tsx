import {Outlet} from 'react-router-dom'

import {Header, Nav} from './'
import * as S from './styles'

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <div className="content">
        <Nav />
        <Outlet />
      </div>
    </S.LayoutContainer>
  )
}

export default Layout
