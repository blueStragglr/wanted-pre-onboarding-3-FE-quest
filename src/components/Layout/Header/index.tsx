import React from "react";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../../constants/path";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <Link to={PATH_NAME.PAGE_A}>Wanted Pre-onboarding course</Link>
    </S.Container>
  );
};
export default Header;
