import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: 1px solid #000;

  height: 100vh;

  width: 15%;
  padding: 10px;

  .nav {
    margin: 8px 0;
    font-size: var(--small-text-size);
    color: var(--dark-gray-1);
    text-decoration: none;
  }

  .active {
    color: var(--primary-blue);
  }
`

const navList = [
  {to: '/a', name: 'Page A'},
  {to: '/b', name: 'Page B'},
  {to: '/c', name: 'Page C'}
]

const Nav = () => {
  return (
    <NavContainer>
      {navList.map(nav => (
        <NavLink
          key={nav.to}
          to={nav.to}
          className={({isActive}) => (isActive ? 'nav active' : 'nav')}>
          {nav.name}
        </NavLink>
      ))}
    </NavContainer>
  )
}

export default Nav
