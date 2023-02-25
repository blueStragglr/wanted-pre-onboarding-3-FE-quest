import React from "react";

export type SidebarItemProps = {
  title: string;
  onClick: () => void;
};
export const SidebarItemProps = ({ title, onClick }: SidebarItemProps) => {
  return (
    <div
      className="w-full cursor-pointer h-[50px] flex justify-center items-center hover:bg-hoverColor"
      onClick={onClick}
    >
      {title}
    </div>
  );
};
