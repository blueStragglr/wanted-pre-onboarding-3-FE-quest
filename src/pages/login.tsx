import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()
  const [{ username, password }, setUserInfo] = useState({
    username: "",
    password: "",
  })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate("/a")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        name="username"
        autoComplete="off"
      />
      <input
        type="password"
        value={password}
        onChange={handleChange}
        name="password"
        autoComplete="off"
      />
      <button type="submit">로그인</button>
    </form>
  )
}

export default LoginPage
