import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StHeaderContainer>
      <h2 style={{ marginLeft: "30px" }}>Wanted Pre-onboarding course</h2>
    </StHeaderContainer>
  );
}

export default Header;

const StHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-style: italic;
  border-bottom: 1px solid black;
  justify-content: center;
`;
