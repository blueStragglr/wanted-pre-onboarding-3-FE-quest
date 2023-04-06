import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="w- h-10 w-full rounded-md bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
