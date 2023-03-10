import './App.css';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/Header'
import SideBar from './components/layout/SideBar';
import GlobalStyles from './globalStyles';

function App() {
  const [loginPage, setLoginPage] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    location.pathname.includes('login') ? setLoginPage(true) : setLoginPage(false)
  }, [location])

  return (
    <>
      {loginPage ? null : <Header />}
      {loginPage ? null : <SideBar />}
      <Outlet />
      <GlobalStyles />
    </>
  );
}

export default App;
