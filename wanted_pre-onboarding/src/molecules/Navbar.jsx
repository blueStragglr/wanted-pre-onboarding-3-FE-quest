import React from "react";
import style from "styled-components";
const NavBox = style.div`
  padding: 20px;
  border: 4px solid rgba(240, 229, 229, 1);
`;

export default function Navbar() {
  return (
    <NavBox>
      <span className="main-text text-4xl font-bold">Wanted Pre-onboarding Course</span>
    </NavBox>
  );
}
