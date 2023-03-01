import {NavLink} from 'react-router-dom'

const navList = [
  {to: '/a', name: 'Page A'},
  {to: '/b', name: 'Page B'},
  {to: '/c', name: 'Page C'}
]

const Nav = () => {
  return (
    <>
      {navList.map(nav => (
        <NavLink key={nav.to} to={nav.to}>
          {nav.name}
        </NavLink>
      ))}
    </>
  )
}

export default Nav
