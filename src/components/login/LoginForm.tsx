import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data, [e.target.name]: e.target.value }
    setData(newData)
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log("login data: ", data)

    // 임시
    navigate("/")
  }

  return (
    <form onSubmit={onSubmit}>
      {/* 유저네임 */}
      <label htmlFor="loginUsername" className="font-bold inline-block w-24 mb-3">
        username
      </label>
      <input
        type="text"
        id="loginUsername"
        className="border"
        name="username"
        value={data.username}
        onChange={onChange}
        required
      />

      <br />
      {/* 비밀번호 */}
      <label htmlFor="loginPassword" className="font-bold inline-block w-24 mb-3">
        password
      </label>
      <input
        type="password"
        id="loginPassword"
        className="border"
        name="password"
        value={data.password}
        onChange={onChange}
        required
      />

      {/* 제출 버튼 */}
      <button type="submit" className="bg-sky-200 w-full py-2 hover:bg-sky-300">
        로그인
      </button>
    </form>
  )
}

export default LoginForm
