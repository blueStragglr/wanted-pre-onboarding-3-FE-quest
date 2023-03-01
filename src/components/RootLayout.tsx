import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function RootLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="border-b border-gray-200 w-full">
        <div className="flex justify-between w-full px-3 py-4 mx-auto max-w-8xl lg:px-6">
          <Link
            to="/"
            className="flex items-center text-2xl font-semibold whitespace-nowrap select-none"
          >
            Wanted pre-onboarding course
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 rounded-lg button-blue"
          >
            Log in
          </Link>
        </div>
      </header>
      <div className="flex flex-1 w-full mx-auto max-w-8xl">
        <aside className="h-auto border-r">
          <Sidebar />
        </aside>
        <main className="flex-1 py-7 px-3 lg:px-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
