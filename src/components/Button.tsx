import React from 'react';
import styles from './Button.module.css';

interface ButtonType {
  onClick: (() => void) | undefined;
  className: string | undefined;
  label: string;
}

function Button(props: ButtonType) {
  const { onClick, className, label } = { ...props };
  return (
    <button className={className && styles[className]} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
