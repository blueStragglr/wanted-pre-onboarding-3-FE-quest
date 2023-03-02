import { NavLink } from 'react-router-dom'
import * as S from './styles'

const SideBar = () => {
  return (
    <S.sidebarContainer>
      <NavLink to='page-a'>Page A</NavLink>
      <NavLink to='page-b'>Page B</NavLink>
      <NavLink to='page-c'>Page C</NavLink>
    </S.sidebarContainer>
  )
}

export default SideBar
