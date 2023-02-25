import React from "react";
import { Outlet } from "react-router-dom";
import { MainTemplate } from "../template/MainTemplate";

export const HomePage = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};
