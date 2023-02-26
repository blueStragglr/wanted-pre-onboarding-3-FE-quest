import React from 'react';
import './reset.css';
import './layout.css';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Page3 from './routes/Page3';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Nav/>
        <Route path='/' exact={true} component={Page1}/>
        <Route path='/page2' component={Page2}/>
        <Route path='/page3' component={Page3}/>
      </HashRouter>
    </div>
  );
}

export default App;
