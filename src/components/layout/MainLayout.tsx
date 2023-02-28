import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="wrap">
      <Header />
      <div className="wrap__body">
        <SideBar />
        <div className="contents">{children}</div>
      </div>
    </div>
  );
}
