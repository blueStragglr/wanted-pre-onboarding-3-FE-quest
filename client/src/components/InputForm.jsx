import React from "react";

export default function InputForm({ type, value, setValue, autoComplete }) {
  return (
    <div>
      <input type={type} value={value} onChange={(e) => setValue(e.target.value)} autoComplete={autoComplete} />
    </div>
  );
}
