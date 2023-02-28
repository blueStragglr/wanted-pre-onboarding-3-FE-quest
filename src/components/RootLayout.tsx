import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function RootLayout() {
  return (
    <div>
      <header>Wanted pre-onboarding course</header>
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
