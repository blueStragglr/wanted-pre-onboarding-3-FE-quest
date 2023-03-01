import {redirect} from 'react-router-dom'

export const Loader = () => {
  const isLogged = localStorage.getItem('logIn')

  if (!isLogged) return redirect('/login')

  return null
}

export const LoginLoader = () => {
  const isLogged = localStorage.getItem('logIn')

  if (isLogged) return redirect('/')

  return null
}
