import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ()=>{

    const menus = [
        {name : 'page A',path:'/pageA'},
        {name : 'page B',path:'/pageB'},
        {name : 'page C',path:'/pageC'},
    ]


    return (
        <div className=" pl-[40px] pt-[30px]  font-medium w-1/6 h-screen border-r-2">
            
            {menus.map((menu,index)=>{
                return(
                    <NavLink to={menu.path} key={index}
                     className={({ isActive }) =>
                    isActive ? "text-blue-600" : ""
                  }> <div className="h-[50px] hover:text-blue-600">{menu.name}</div>
                    </NavLink>
                )
               })}
              
        </div>
    )
}

export default Sidebar;