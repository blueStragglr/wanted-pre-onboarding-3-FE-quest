import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <button
      className="flex w-full h-[50px] bg-mainColor text-sm items-center justify-center rounded-md text-[#fff] cursor-pointer hover:opacity-80"
      {...rest}
    >
      {label}
    </button>
  );
};
