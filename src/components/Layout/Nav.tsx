import {NavLink} from 'react-router-dom'

import * as S from './styles'

const navList = [
  {to: '/a', name: 'Page A'},
  {to: '/b', name: 'Page B'},
  {to: '/c', name: 'Page C'}
]

const Nav = () => {
  return (
    <S.NavContainer>
      {navList.map(nav => (
        <NavLink
          key={nav.to}
          to={nav.to}
          className={({isActive}) => (isActive ? 'nav active' : 'nav')}>
          {nav.name}
        </NavLink>
      ))}
    </S.NavContainer>
  )
}

export default Nav
