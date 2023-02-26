import React from "react";
import { NavLink } from "react-router-dom";
import './SideBar.css'

const NAV_ITEMS = [
  { pathname: 'pageA',
    title: 'A페이지',
  },
  { pathname: 'pageB',
    title: 'B페이지',
  },
  { pathname: 'pageC',
    title: 'C페이지',
  },
  { pathname: 'pageD',
    title: 'D페이지',
  },
];

const SideBar = () => {
  return (
    <nav className="sidebar_container">
      {NAV_ITEMS && NAV_ITEMS.map((item) => {
        return (
          <NavLink 
            key={item.pathname}
            to={`/${item.pathname}`}
            className={({ isActive }) => isActive ? 'nav_active' : undefined}
          >
            <h6 className="nav_item">{item.title}</h6>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default SideBar;