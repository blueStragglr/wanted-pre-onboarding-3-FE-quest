import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const links = [
    {
      name: "Page A",
      path: "/pageA",
    },
    {
      name: "Page B",
      path: "/pageB",
    },
    {
      name: "Page C",
      path: "/pageC",
    },
  ];

  return (
    <div className="side-bar">
      {links.map((link) => (
        <li>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default SideBar;
