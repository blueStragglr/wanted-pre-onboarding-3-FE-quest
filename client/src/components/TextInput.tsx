import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  isError: boolean
  errorMessage: string
}

const TextInput = ({ label, id, placeholder, value, onChange, isError, errorMessage }: TextInputProps) => {
  return (
    <div className="flex w-full flex-col p-2">
      <label className="mb-2 font-semibold" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center">
        <input
          id={id}
          type="text"
          className="w-full rounded-lg border border-gray-400 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </div>
      {isError && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default TextInput
