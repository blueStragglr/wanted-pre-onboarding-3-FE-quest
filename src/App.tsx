import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import Page from './pages/Page';
import Main from './pages/Main';

const Container = styled.div`
  height: 93vh;
  font-size: 24px;
  display: flex;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 60px;
  letter-spacing: 7px;
`

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
          <Header />
          <Container>
            <Nav />
            <Content>
              <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/page/:id" element={<Page />}></Route>
                <Route path="*" element={<div style={{color:"red"}}>잘못된 경로입니다.</div>}></Route>
              </Routes>
            </Content>
          </Container>
      </BrowserRouter>
  );
}

export default App;
