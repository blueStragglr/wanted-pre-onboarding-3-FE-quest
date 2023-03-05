import React from "react";
import { NavLink } from "react-router-dom";
import { PATH_NAME } from "../../../constants/path";

type WrapperNavLinkProps = {
  path: string;
  title: string;
};

const Sidebar = () => {
  const WrapperNavLink = ({ path, title }: WrapperNavLinkProps) => (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "active" : undefined)}
    >
      {title}
    </NavLink>
  );

  return (
    <>
      <WrapperNavLink path={PATH_NAME.PAGE_A} title="PageA" />
      <WrapperNavLink path={PATH_NAME.PAGE_B} title="PageB" />
      <WrapperNavLink path={PATH_NAME.PAGE_C} title="PageC" />
    </>
  );
};

export default Sidebar;
