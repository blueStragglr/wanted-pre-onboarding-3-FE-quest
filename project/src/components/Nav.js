import React from 'react';
import "./Nav.css";
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav wrapper">
          <p><NavLink to="/" exact>page1</NavLink></p>
          <p><NavLink to="/page2">page2</NavLink></p>
          <p><NavLink to="/page3">page3</NavLink></p>
        </div>
      );
}

export default Nav;