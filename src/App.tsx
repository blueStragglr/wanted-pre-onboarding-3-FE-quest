import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
