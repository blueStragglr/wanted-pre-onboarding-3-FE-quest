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
        {PageData.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
