import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        <Link to="/">Wanted Pre-Onboarding course</Link>
      </h1>
    </header>
  );
};

export default Header;
