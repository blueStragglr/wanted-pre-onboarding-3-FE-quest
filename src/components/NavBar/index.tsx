import { NAV_ITEMS } from '@/constants/routes';
import { NavLink } from 'react-router-dom';

const navStyle = {
  normal: 'text-base font-semibold leading-6 text-gray-900 px-3',
  active:
    'text-base font-semibold leading-6 text-indigo-600 px-3 underline underline-offset-4 decoration-2 decoration-wavy',
};

const NavItem = ({ navName, path }: { navName: string; path: string }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive ? navStyle.active : navStyle.normal;
      }}
    >
      {navName}
    </NavLink>
  );
};

export const NavBar = () => {
  return (
    <div className="flex justify-between p-6 text-base font-semibold leading-6 text-gray-900">
      <NavLink to="/">
        <img
          className="h-8"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="logo"
        />
      </NavLink>
      <div className="flex lg:gap-x-10 sm:gap-x-5">
        {NAV_ITEMS.map(({ name, path }) => {
          return <NavItem navName={name} path={path} />;
        })}
      </div>
      <NavLink to="/signin">
        <div>
          Log in <span aria-hidden="true">&rarr;</span>
        </div>
      </NavLink>
    </div>
  );
};
