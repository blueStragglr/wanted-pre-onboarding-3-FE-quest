import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/template/Layout';
import Main from 'pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Main />} path=":page" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
