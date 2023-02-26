import React from 'react'
import SidebarItem from './SidebarItem';

import { Link, useLocation } from 'react-router-dom';



function Menu({activeMenu}) {
  
  const pathName=useLocation().pathname;
  const menus=[

    {name:"pageA",path:"/PageA"},
    {name:"pageB",path:"/PageB"},
    {name:"pageC",path:"/PageC"}
  ]
  return (
      <div className='sidebar'>
        {menus.map((menu,index)=>{
          return(
            <Link to={menu.path} key={index}>
              <SidebarItem menu={menu}
              isActive={pathName === menu.path ? true: false}
              />
            </Link>
          );
        })}
      </div>
  )
}

export default Menu