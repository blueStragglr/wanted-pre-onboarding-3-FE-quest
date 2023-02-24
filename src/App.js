import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
