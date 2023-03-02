/* eslint-disable */

import './App.css';
import { useState } from 'react'
import { Container, Nav, Navbar, Row, Col, Button, Modal, Form, Card, ListGroup } from 'react-bootstrap'
import { Routes, Route, useNavigate } from "react-router-dom"
import PageA from "./page/pageA"
import PageB from "./page/pageB"
import PageC from "./page/pageC"

function App() {

  let navigate = useNavigate();
  let [modalShow, setModalShow] = useState(false);
  let [id, setId] = useState('');
  let [password, setPassword] = useState('');
  let [login, setLogin] = useState(false)
  let handleId = (e) => {
    setId(e.currentTarget.value)
  }
  let handlePw = (e) => {
    setPassword(e.currentTarget.value)
  }
  let submitFuc = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <Container className='ctn'>
        <Navbar className="title" bg="light">
          <Navbar.Brand href="/">wanted Pre-onboarding course</Navbar.Brand>
          {
            login
            ?
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>ID : {id}</ListGroup.Item>
              </ListGroup>
            </Card>
            : null
          }
          {
            login
            ?
            <Button className="logoutBtn" onClick={() => [setLogin(false), setId(''), setPassword('')]}>로그아웃</Button>
            :
            <Button className="loginBtn" onClick={() => setModalShow(true)}>로그인하기</Button>
          }
        </Navbar>
        <Row className="section">
          <Col className="aside" sm={3} xl={2}>
            <Navbar>
              <Nav className="flex-column nav-side">
                <Nav.Link onClick={()=>{ navigate("/")}} eventKey="link-0">Page A</Nav.Link>
                <Nav.Link onClick={()=>{ navigate("/page2")}} eventKey="link-1">Page B</Nav.Link>
                <Nav.Link onClick={()=>{ navigate("/page3")}} eventKey="link-2">Page C</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col className="article">
            <Routes>
              <Route path="/" element={<PageA />}></Route>
              <Route path="/page2" element={<PageB />}></Route>
              <Route path="/page3" element={<PageC />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>

      {/* 모달 */}
      <Modal show={modalShow} onHide={()=> setModalShow(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitFuc}>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="text" placeholder="ID" value={id} onChange={handleId}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={handlePw} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=> [setLogin(true), setModalShow(false)]}>
              로그인
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default App;
