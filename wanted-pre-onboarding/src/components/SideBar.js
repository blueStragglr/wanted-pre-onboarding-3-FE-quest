import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const pages = [
    { page: "PageA", path: "/pageA" },
    { page: "PageB", path: "/pageB" },
    { page: "PageC", path: "/pageC" },
  ];

  return (
    <div className=" bg-orange-400 w-52 h-full py-5 pr-10 pl-5 border-solid border-r border-orange-600">
      <div>
        {pages.map((el, index) => {
          return (
            <NavLink
              className="flex p-3 mb-2 text-xl cursor-pointer text-orange-600  hover:text-yellow-300 "
              to={el.path}
              key={index}
            >
              {el.page}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
