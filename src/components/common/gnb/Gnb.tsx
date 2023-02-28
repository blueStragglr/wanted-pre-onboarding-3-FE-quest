import clsx from "clsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./gnb.module.css";

const GnbItem = ["Page A", "Page B", "Page C"];

const Gnb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const RoutingHandle = (path: string) => {
    switch (path) {
      case "Page A":
        return "/page-a";
      case "Page B":
        return "/page-b";
      case "Page C":
        return "/page-c";
      default:
        return "/";
    }
  };

  return (
    <ul className={styles.gnb}>
      {GnbItem.map((page) => (
        <li
          key={page}
          className={clsx(
            styles["menu"],
            pathname === RoutingHandle(page) ? styles["active"] : null
          )}
          onClick={() => navigate(RoutingHandle(page))}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Gnb;
