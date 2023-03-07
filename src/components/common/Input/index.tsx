import React from 'react'
import * as S from './style'
type InputLabelProps = {
  text: string
  type: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ text, type, id, value, onChange }: InputLabelProps) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <S.Input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default Input
