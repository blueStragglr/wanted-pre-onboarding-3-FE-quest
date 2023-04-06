import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 border border-b-gray-400 bg-gray-400 flex justify-between items-center px-4">
      <Link to="/">Wanted Pre-onboarding course</Link>
      <Link to="/login" className="py-2 px-3 bg-white rounded-full text-xs">
        Login
      </Link>
    </header>
  );
};

export default Header;
