import * as S from './styles'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import SideBar from '../SideBar'

const Layout = () => {
  return (
    <S.layoutContainer>
      <Header />
      <S.mainContainer>
        <SideBar />
        <Outlet />
      </S.mainContainer>
    </S.layoutContainer>
  )
}

export default Layout
