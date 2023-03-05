import React from "react";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../../constants/path";

const Header = () => {
  return <Link to={PATH_NAME.PAGE_A}>Wanted Pre-onboarding course</Link>;
};

export default Header;
