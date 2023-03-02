import React from "react"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function PrivateRoutes() {
  const isLoggedIn = false // 임시
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin")
    }
  }, [])

  if (isLoggedIn) {
    return <Outlet />
  } else {
    return null
  }
}

export default PrivateRoutes
