import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import NavBar from './NavBar';

const index = () => {
  return (
    <div className="relative">
      <Header></Header>
      <NavBar></NavBar>
      <main className="ml-56 pt-14 flex justify-center items-center box-border min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default index;
