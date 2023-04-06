import { NavLink } from 'react-router-dom'

import { gnbLinks } from '@/router/routerInfo'
import authService from '@/service/auth.service'

interface GlobalNavigationProps {
  className?: string
}

const GlobalNavigation = ({ className }: GlobalNavigationProps) => {
  const isLogin = authService.isLogin()
  const links = gnbLinks(isLogin)
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-4">
        {links.map(({ label, path }) => (
          <li key={path} className="w-24 font-semibold text-gray-800 hover:text-blue-500">
            <NavLink to={path} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GlobalNavigation
