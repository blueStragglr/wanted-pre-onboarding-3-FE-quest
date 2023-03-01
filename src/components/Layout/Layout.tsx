import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

import {Header, Nav} from '.'

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: row;
  }
`

const Layout = () => {
  return (
    <Container>
      <Header />
      <div className="content">
        <Nav />
        <Outlet />
      </div>
    </Container>
  )
}

export default Layout
