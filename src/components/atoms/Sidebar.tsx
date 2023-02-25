import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarItemProps } from "./SidebarItem";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[250px] h-full bg-subColor flex flex-col">
      <SidebarItemProps title="PageA" onClick={() => navigate("/home/PageA")} />
      <SidebarItemProps title="PageB" onClick={() => navigate("/home/PageB")} />
      <SidebarItemProps title="PageC" onClick={() => navigate("/home/PageC")} />
    </div>
  );
};
