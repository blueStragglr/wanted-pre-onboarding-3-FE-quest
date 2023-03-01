import React from 'react';

interface ButtonType {
  onClick: () => void;
  className: string | undefined;
  label: string;
}

function Button(props: ButtonType) {
  const { onClick, className, label } = { ...props };
  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
}

export default Button;
