import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Container>Wanted-pre-onboarding-3-quest</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto 25px auto;
  border: 1px solid var(--color-point);
  border-radius: 20px;
  text-align: center;
  color: var(--color-point);
  font-size: 18px;
`;
export default Header;
