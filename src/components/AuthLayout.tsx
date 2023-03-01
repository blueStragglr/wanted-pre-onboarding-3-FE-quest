import { Link, Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 bg-gray-50 mx-auto h-screen">
      <Link
        to="/"
        className="text-2xl font-semibold text-gray-900 select-none px-6 pb-6"
      >
        Wanted pre-onboarding course
      </Link>
      <div className="flex items-center justify-center w-full pb-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
