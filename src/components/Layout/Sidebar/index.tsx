import React from "react";
import { PATH_NAME } from "../../../constants/path";
import * as S from "./style";

type WrapperNavLinkProps = {
  path: string;
  title: string;
};

const Sidebar = () => {
  const WrapperNavLink = ({ path, title }: WrapperNavLinkProps) => (
    <S.NavStyle
      to={path}
      className={({ isActive }) => (isActive ? "active" : undefined)}
    >
      {title}
    </S.NavStyle>
  );

  return (
    <S.Container>
      <WrapperNavLink path={PATH_NAME.PAGE_A} title="PageA" />
      <WrapperNavLink path={PATH_NAME.PAGE_B} title="PageB" />
      <WrapperNavLink path={PATH_NAME.PAGE_C} title="PageC" />
    </S.Container>
  );
};

export default Sidebar;
