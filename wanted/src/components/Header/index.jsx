import React from 'react';
import { Link } from 'react-router-dom';
import $ from './header.module.scss'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Wanted Pre-onboarding coures</Link>
      </h1>
    </header>
  );
};

export default Header;