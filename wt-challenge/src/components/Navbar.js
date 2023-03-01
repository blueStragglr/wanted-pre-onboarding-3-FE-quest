import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ol>
            <li>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' , textDecoration:'none'})}>page A</NavLink>
            </li>
            <li>
                <NavLink to="/pageB" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', textDecoration:'none' })}>page B</NavLink>
            </li>
            <li>
                <NavLink to="/pageC" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', textDecoration:'none'})}>page C</NavLink>
            </li>
        </ol>
    </nav>
  )
}

export default Navbar