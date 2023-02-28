import React from 'react';
import { Route } from 'react-router';
import $ from './app.module.scss'
import Header from './components/Header';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div>
      <Header />
      <div className={$.wrapper}>
        <SideBar />
        <div className={$.contents}>
          {/* <Route path='' element={} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
