import React from 'react'
import {Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {
    const location = useLocation()
    const pathname = location.pathname
    console.log(pathname)
    return (
        <SideBarComponent>
            <RouteUl>
                <RouteLi><Link style={pathname === '/pageA' ? { color: 'skyblue', textDecoration:'none' }:{color:'black', textDecoration:'none'} } to={'/pageA'}>Page A</Link></RouteLi>
                <RouteLi><Link style={pathname === '/pageB' ? { color: 'skyblue', textDecoration:'none' }:{color:'black', textDecoration:'none'} } to={'/pageB'}>Page B</Link></RouteLi>
                <RouteLi><Link style={pathname === '/pageC' ? { color: 'skyblue', textDecoration: 'none' } : { color: 'black', textDecoration: 'none' } } to={'/pageC'}>Page C</Link></RouteLi>
            </RouteUl>
        </SideBarComponent>
    )
}

const SideBarComponent = styled.div`
    border-right: 1px solid black;
    width: 15%;
    height: 100%;
`

const RouteUl = styled.ul`
    display:inline;
    list-style-type: none;
`
const RouteLi = styled.li`
`

export default SideBar