import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {

  return (
    <SideBarBox>
      <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : undefined }>HOME</NavLink>
      <NavLink to='/page1' style={({ isActive }) => isActive ? activeStyle : undefined }>PAGE1</NavLink>
      <NavLink to='/page2' style={({ isActive }) => isActive ? activeStyle : undefined }>PAGE2</NavLink>
      <NavLink to='/page3' style={({ isActive }) => isActive ? activeStyle : undefined }>PAGE3</NavLink>
    </SideBarBox>
  )
}

export default SideBar

const activeStyle = {
  // backgroundColor: 'pink',
  color: 'black',
  fontWeight: 'bold',
  textDecoration: 'underline',
  textDecorationThickness: '4px'
}

const SideBarBox = styled.div`
  width: 200px;
  height: 100%;
  border-right: 1px solid black;
  font-family: Ubuntu;
  > a {
    display: block;
    margin-top: 20px;
    padding: 10px;
    font-size: 24px;
    text-align: center;
    :link, &:visited, &:active {
      text-decoration: none;
      color:inherit;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`