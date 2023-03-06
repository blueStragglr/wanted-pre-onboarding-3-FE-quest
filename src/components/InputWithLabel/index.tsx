import React from "react";

type InputWithLabelProps = {
  text: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ text, type, id, value, onChange }: InputWithLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={id} value={value} onChange={onChange} />
    </>
  );
};

export default Input;
