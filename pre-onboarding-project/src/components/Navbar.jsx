import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='header'>
        <h1>wanted pre onboarding course</h1>
      </div>
      <div className='sidebar'>
        <Link to="/">HOME</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;