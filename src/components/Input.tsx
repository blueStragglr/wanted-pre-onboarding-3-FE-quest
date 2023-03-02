import React from 'react';
import styles from './Input.module.css';

interface InputType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input(props: InputType) {
  const { value, onChange } = { ...props };
  return <input className={styles.layout} value={value} onChange={onChange}></input>;
}

export default Input;
