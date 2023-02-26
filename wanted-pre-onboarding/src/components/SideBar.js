import React from "react";
import classes from "../style/SideBar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const pages = [
    { page: "PageA", path: "/pageA" },
    { page: "PageB", path: "/pageB" },
    { page: "PageC", path: "/pageC" },
  ];

  return (
    <div className={classes.sideBarWrap}>
      <div>
        {pages.map((el, index) => {
          return (
            <NavLink className={classes.listWrap} to={el.path} key={index}>
              {el.page}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
