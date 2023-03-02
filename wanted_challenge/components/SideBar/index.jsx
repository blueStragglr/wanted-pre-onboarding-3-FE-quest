import React from 'react'
import { NavLink } from 'react-router-dom'
import { SideNav } from './styles'
const SideBar = () => {
  return (
    <SideNav>
      <ul>
        <li>
          <NavLink to='/page/page1' className={({ isActive }) => isActive ? 'active' : ''} >Page1</NavLink>
        </li>
        <li>
          <NavLink to='/page/page2' className={({ isActive }) => isActive ? 'active' : ''}>Page2</NavLink>
        </li>
        <li>
          <NavLink to='/page/page3' className={({ isActive }) => isActive ? 'active' : ''}>Page3</NavLink>
        </li>
      </ul>
    </SideNav>
  )
}

export default SideBar
