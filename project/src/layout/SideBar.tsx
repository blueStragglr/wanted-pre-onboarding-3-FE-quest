import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <div>
      <LinkWrap to='/pageA'>Page A</LinkWrap>
      <LinkWrap to='/pageB'>Page B</LinkWrap>
      <LinkWrap to='/pageC'>Page C</LinkWrap>
    </div>
  )
}

export default SideBar

const LinkWrap = styled(NavLink)`
  padding: 8px 0px;
  display: block;

  :hover {
    color: deepskyblue;
    transition-duration: 0.3s;
  }
`
