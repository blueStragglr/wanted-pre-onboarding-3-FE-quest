import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Login from './login';
import Page from './page';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='page' element={<Layout />}> 
          <Route path='/page/:column' element={<Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
