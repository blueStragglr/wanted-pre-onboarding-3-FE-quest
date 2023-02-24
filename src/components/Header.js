import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap';

function Header() {
  return (
    <header>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">wanted-preonboarding-fe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link >
                <Button variant="primary">Sign in</Button>
            </Nav.Link>
            <Nav.Link >
                <Button variant="success">Sign Up</Button>
            </Nav.Link>
            

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header