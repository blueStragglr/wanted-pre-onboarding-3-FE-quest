
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import SideWrap from './Side';
import Page from './Page';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [nowPage] = useState([1]);
  return (
    <div className="App">

      <div className='body'>
        <Header />
        <div className='contents'>
          <SideWrap />
          <div className='pageWwrap'>
            <Route exact path="/">
              <Page name="This is Page A!" />
            </Route>
            <Route path="/b">
              <Page name="This is Page B!" />
            </Route>
            <Route path="/c">
              <Page name="This is Page C!" />
            </Route>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
