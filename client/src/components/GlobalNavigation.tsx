import { NavLink } from 'react-router-dom'

import { GNB_LINK } from '@/constants/route.constant'

interface GlobalNavigationProps {
  className?: string
}

const GlobalNavigation = ({ className }: GlobalNavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-4">
        {GNB_LINK.map(({ title, link }) => (
          <li className="w-24 font-semibold text-gray-800 hover:text-blue-500">
            <NavLink to={link} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GlobalNavigation
