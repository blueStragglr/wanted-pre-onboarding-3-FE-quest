import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

export default App;
