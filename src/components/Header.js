import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">Wanted-Pre-Onboarding</h1>
      </Link>
      <Link to="/login">
        <button type="button" className="login_button">Login</button>
      </Link>
    </header>
  )
}

export default Header;