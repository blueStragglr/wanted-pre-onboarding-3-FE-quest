import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <>
      <header className=" bg-orange-300 flex justify-between items-center text-xl p-5 font-bold border-b border-solid border-orange-600">
        <h2 className="text-orange-600">Wanted Pre-onboarding course</h2>
        <NavLink
          to="/login"
          className="bg-orange-600 text-white p-3 cursor-pointer hover:bg-orange-400"
        >
          로그인
        </NavLink>
      </header>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Header;
