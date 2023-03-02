import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="side-bar">
      <button onClick={() => navigate("/page-A")}>page A</button>
      <button onClick={() => navigate("/page-B")}>page B</button>
      <button onClick={() => navigate("/page-C")}>page C</button>
    </div>
  );
}
