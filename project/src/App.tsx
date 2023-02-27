import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Template from './page/Template';
import PageData from './PageData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Template />} />
        <Route path="/login" element={<Login />} />
        {PageData.map(({ contentsComponent, path }) => (
          <Route path={path} element={contentsComponent} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
