import { NavLink } from 'react-router-dom'

import { ROUTE } from '@/constants/route.constant'

interface GlobalNavigationProps {
  className?: string
}

const GlobalNavigation = ({ className }: GlobalNavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-4">
        <li className="w-24 font-semibold text-gray-800 hover:text-blue-500">
          <NavLink to={ROUTE.HOME} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
            HOME
          </NavLink>
        </li>
        <li className="w-24 font-semibold text-gray-800 hover:text-blue-500">
          <NavLink to={ROUTE.A} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
            A
          </NavLink>
        </li>
        <li className="w-24 font-semibold text-gray-800 hover:text-blue-500">
          <NavLink to={ROUTE.B} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
            B
          </NavLink>
        </li>
        <li className="w-24 font-semibold text-gray-800 hover:text-blue-500">
          <NavLink to={ROUTE.SIGN_UP} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
            SIGN_UP
          </NavLink>
        </li>
        <li className="w-24 font-semibold text-gray-800 hover:text-blue-500">
          <NavLink to={ROUTE.LOGIN} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GlobalNavigation
