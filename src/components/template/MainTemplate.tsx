import React, { Children } from "react";
import { Header } from "../atoms/Header";
import { Sidebar } from "../atoms/Sidebar";

export type MainTemplateProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="bg-bgColor w-full flex justify-center p-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
};
