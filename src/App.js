import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Layout from './component/Layout';
import PageA from './component/Page/PageA';
import PageB from './component/Page/PageB'
import PageC from './component/Page/PageC';
function App() {

  return (
    <div className=" bg-orange-100">
      <BrowserRouter>
        <Routes>
          <Route path = '/'element={<Layout />}>
            <Route path="/a" element={<PageA />} />
            <Route path="/b" element={<PageB />} />
            <Route path="/c" element={<PageC />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
