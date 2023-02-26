import React from "react";
import classes from "../style/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.headerWrap}>
      <h2>Wanted Pre-onboarding course</h2>
      <NavLink to="/login" className={classes.loginBtn}>
        로그인
      </NavLink>
    </header>
  );
};

export default Header;
