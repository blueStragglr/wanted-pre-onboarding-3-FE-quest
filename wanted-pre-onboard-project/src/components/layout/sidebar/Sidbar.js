import React from 'react'
import { NavLink } from 'react-router-dom'
import { sidebarMenu } from './SidebarMenu'

import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      {sidebarMenu.map(menu =>
        <div
          key={menu.id}
          className={styles.menuName}
        >
          <NavLink
            to={menu.path}
            style={({ isActive }) =>
              isActive ? { color: "blue" } : { color: "black" }
            }
          >
            {menu.name}
          </NavLink>
        </div>
      )
      }
    </div>
  )
}

export default Sidebar