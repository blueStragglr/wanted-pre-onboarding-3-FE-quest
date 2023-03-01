import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {logOut} from '../../store/loggedReducer'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
    window.location.replace('/')
  }

  return (
    <S.HeaderContainer>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <h1 className="header--h1">Wanted Pre-onboarding course</h1>
      </Link>
      <S.Button onClick={handleLogout}>LogOut</S.Button>
    </S.HeaderContainer>
  )
}

export default Header
