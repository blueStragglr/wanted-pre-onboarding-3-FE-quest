import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sidebar() {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    if (e.target.name === "Home") {
      navigate("/");
    } else {
      navigate(`/${e.target.name}`);
    }
  };

  return (
    <StyledSidebar>
      <button name="Home" onClick={HandleClick}>
        Home
      </button>
      <button name="PageA" onClick={HandleClick}>
        PageA
      </button>
      <button name="PageB" onClick={HandleClick}>
        PageB
      </button>
      <button name="PageC" onClick={HandleClick}>
        PageC
      </button>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
`;
