import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Default } from 'components/Content/Default/Default';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Home />}>
        <Route path=':id' element={<Default />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
