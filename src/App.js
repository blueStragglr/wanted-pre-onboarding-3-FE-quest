import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useMemo, useState } from 'react'
import MainPage from './components/MainPage.js/MainPage';
import SecondPage from './components/MainPage.js/SecondPage';
import ThirdPage from './components/MainPage.js/ThirdPage';
import Navbar1 from './components/SpecificCom/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const LoginContext = createContext({ login: false, setLogin: () => {} })

function App() {
  const [login, setLogin] = useState(false);
  const memo = useMemo(() => ({ login, setLogin }), [login, setLogin]);
  return (
    <div className="App">
      <header className="App-header">
        <LoginContext.Provider value={login}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element= {<MainPage></MainPage>}></Route>
                <Route path = '/second' element = {<SecondPage></SecondPage>}></Route>
                <Route path = '/third' element = {<ThirdPage></ThirdPage>}></Route>
              </Routes>
              
            
            </BrowserRouter>
        </LoginContext.Provider>
      </header>
    </div>
  );
}

export default App;
