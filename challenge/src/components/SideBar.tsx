import React from 'react';
import { Link } from 'react-router-dom';

const Side_bar = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/page-a">Page A</Link></li>
          <li><Link to="/page-b">Page B</Link></li>
          <li><Link to="/page-c">Page C</Link></li>
        </ul> 
      </nav>
    );
};

export default Side_bar;