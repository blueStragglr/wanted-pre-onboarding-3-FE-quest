import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="py-2 px-4 border-b border-sky-500">
      <h1>
        <Link to="/">Wanted Pre-onboarding course</Link>
      </h1>
    </header>
  )
}

export default Header
