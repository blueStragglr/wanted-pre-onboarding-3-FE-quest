import React from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

export default function MainPage() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
