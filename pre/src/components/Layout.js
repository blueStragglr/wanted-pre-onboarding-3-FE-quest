import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>Wanted</nav>
      <div>sidebar</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
