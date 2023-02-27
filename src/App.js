import React, { useEffect } from 'react';
import { Link, BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import  styled from 'styled-components';
import Login from './components/Login';
import Home from './components/Home';
import Task from './components/Task';
import About from './components/About';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas: '
    head head
    nav main
    footer footer
  ';
`;
const Header = styled.header`
  grid-area: head;
  grid-column: 1/3;
  grid-row: 1/2;
  padding: 20px 30px;
  font-size: larger;
  font-weight: bold;
`;
const Navigate = styled.nav`
  grid-area: nav;
  grid-column: 1/2;
  grid-row: 2/3;
  height: 100vh;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    padding: 5px 20px;
    list-style: none;
    cursor: pointer;
    font-weight: 500;
    background-color: ${props => props.active ? '#006888' : 'none'};
    color: ${props => props.active ? 'white' : 'black'};
    a {
      text-decoration: none;
      color: black;
      text-transform: uppercase;
    }
    :hover { 
      background-color: #eeeeee;
      font-weight: 600;
    }
  }
`;
const Main = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
`;

const App = () => {
  const isLogin = localStorage.getItem('isLogin');

  return isLogin === 'true' ? (
    <BrowserRouter>
      <Container>
        <Header>
          <div>3월 
            원티드 프리온보딩 프론트엔드 과정 사전과제</div>
        </Header>
        <Navigate>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/task">Task</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Navigate>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="task" element={<Task />}/>
            <Route path="about" element={<About />} />
            <Route path="*" element={<RedirectLoader />}/>
          </Routes>
        </Main>
      </Container>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="*" element={<RedirectLoader />}/>
      </Routes>
    </BrowserRouter>
  );
};

const RedirectLoader = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/')
  },[navigate]);
  return <div>error</div>;
};

export default App;