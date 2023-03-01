import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100vw;
  height: 10%;
  outline: solid 0.5px var(--dark-gray-1);
  display: flex;
  align-items: center;
  padding-left: 10px;

  h1 {
    font-size: var(--small-text-size);
    line-height: var(--small-text-line-height);
    color: var(--black);
    font-weight: bold;
    letter-spacing: var(--spacing-1);
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <h1 className="header--h1">Wanted Pre-onboarding course</h1>
      </Link>
    </HeaderContainer>
  )
}

export default Header
