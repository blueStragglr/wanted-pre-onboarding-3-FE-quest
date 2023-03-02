import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import PageA from './components/PageA';
import PageB from './components/PageB';
import PageC from './components/PageC';
import { LoginContextProvider } from './contexts/LoginContext';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Header />
      </LoginContextProvider>
      <div className="Container">
        <SideBar />
        <div className="Page">
          <Routes>
            <Route path='/' element={<PageA />} />
            <Route path='/pageA' element={<PageA />} />
            <Route path='/pageB' element={<PageB />} />
            <Route path='/pageC' element={<PageC />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
