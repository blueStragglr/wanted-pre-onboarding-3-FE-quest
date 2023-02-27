import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className=" bg-orange-300 flex justify-between items-center text-xl p-5 font-bold border-b border-solid border-orange-600">
        <h2 className="text-orange-600">Wanted Pre-onboarding course</h2>
        <NavLink to="/login">
          <IoMdLogIn className="w-8 h-8 fill-orange-500 hover:fill-yellow-300" />
        </NavLink>
      </header>
      <SideBar />
      <Outlet />
    </>
  );
};

export default Header;
