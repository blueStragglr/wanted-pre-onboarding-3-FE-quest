import React from "react"
import LoginForm from "../components/login/LoginForm"

function LoginPage() {
  return (
    <div className="h-80 p-3">
      <div className="w-80 h-80 mx-auto">
        <h3 className="font-bold text-2xl mb-5">로그인 페이지 입니다!</h3>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
