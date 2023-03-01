import './App.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Routes, Route, useNavigate } from "react-router-dom"

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Container className='ctn'>
        <Navbar className="me-auto title" bg="light">
          <Navbar.Brand href="/">wanted Pre-onboarding course</Navbar.Brand>
        </Navbar>
        <Row className="section">
          <Col className="aside" sm={2} xl={2}>
            <Navbar>
              <Nav className="flex-column nav-side">
                <Nav.Link onClick={()=>{ navigate("/page1")}} eventKey="link-0">Page A</Nav.Link>
                <Nav.Link onClick={()=>{ navigate("/page2")}} eventKey="link-1">Page B</Nav.Link>
                <Nav.Link onClick={()=>{ navigate("/page3")}} eventKey="link-2">Page C</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col className="article">
            <Routes>
              <Route path="/page1" element={<div>This is Page A!</div>}></Route>
              <Route path="/page2" element={<div>This is Page B!</div>}></Route>
              <Route path="/page3" element={<div>This is Page C!</div>}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
