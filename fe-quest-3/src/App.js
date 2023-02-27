import './App.css';
import Header from './common/Header';
import Nav from './common/Nav';
import Contents from './common/Contents';
import styled from "styled-components";

function App() {

  const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: stretch;
    box-sizing: border-box;
  `;

  return (
    <div class="app_container">
      <Header />
      <Wrapper>
        <Nav />
        <Contents />
      </Wrapper>
    </div>
  );
}

export default App;
