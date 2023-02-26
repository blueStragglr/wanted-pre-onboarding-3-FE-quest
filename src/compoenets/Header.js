import React from 'react'
import {Nav,Navbar,Button,Container} from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Wanted-preonboarding-Fe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
              <Button variant='primary'>Sign In</Button>
            </Nav.Link>
            <Nav.Link >
              <Button variant='success'>Sign Up</Button>
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header