import React from "react";

export default function Button({ text, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}
