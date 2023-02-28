import { Link, Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <Link to="/">Wanted pre-onboarding course</Link>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
