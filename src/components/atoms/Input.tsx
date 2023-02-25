import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <div className="flex flex-row justify-center">
      <input
        className="focus:outline-none placeholder:text-left pl-4 w-full rounded-md h-[40px]"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
