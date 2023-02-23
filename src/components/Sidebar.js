import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeState, setActiveState] = useState(1);
  return (
    <ul className="sidebar">
      <li>
        <Link
          to="/pageA"
          className={activeState === 1 ? "link active" : "link"}
          onClick={() => setActiveState(1)}
        >
          Page A
        </Link>
      </li>
      <li>
        <Link
          to="/pageB"
          className={activeState === 2 ? "link active" : "link"}
          onClick={() => setActiveState(2)}
        >
          Page B
        </Link>
      </li>
      <li>
        <Link
          to="/pageC"
          className={activeState === 3 ? "link active" : "link"}
          onClick={() => setActiveState(3)}
        >
          Page C
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className={activeState === 4 ? "link active" : "link"}
          onClick={() => setActiveState(4)}
        >
          LOGIN
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
