import React, { FormEvent } from 'react'
import { useInput } from 'src/hooks/useInput'

const useLoiginForm = () => {
  const [username, setUserName, onUserName] = useInput('')
  const [passwrd, setPasswrd, onPasswrd] = useInput('')

  const Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUserName('')
    setPasswrd('')
  }
  return {
    state: { username, passwrd },
    onEvent: { onUserName, onPasswrd },
    onSubmit: { Submit },
  }
}

export default useLoiginForm
