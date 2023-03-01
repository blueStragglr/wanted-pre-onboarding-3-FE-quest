import React from "react";
import { useNavigate } from "react-router-dom";

const PageA = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>This is Page A!</h2>
      <button onClick={navigateToLogin}>Login</button>
    </div>
  );
};

export default PageA;