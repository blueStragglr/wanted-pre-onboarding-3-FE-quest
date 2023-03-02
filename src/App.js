import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <Container>
      <Header />

      <Wrap>
        <Sidebar />
        <Routes>
          <Route path="/page_a" element={<PageA />} />
          <Route path="/page_b" element={<PageB />} />
          <Route path="/page_c" element={<PageC />} />
        </Routes>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Wrap = styled.div`
  height: calc(100% - 60px);
  display: flex;
`;

export default App;
