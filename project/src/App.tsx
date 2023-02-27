import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './page/Template';
import PageData from './PageData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Template />} />
        {PageData.map(({ contentsComponent, path }) => (
          <Route path={path} element={contentsComponent} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
