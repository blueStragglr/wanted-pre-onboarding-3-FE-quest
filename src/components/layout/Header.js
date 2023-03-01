import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div className="text">Wanted pre-onboarding course</div>
    </Container>
  )
};


const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 2px solid royalblue;
  z-index: 9;

  .text {
    font-size: 30px;
    line-height: 65px;
    text-align: start;
    margin-left: 200px;
  }

`

export default Header;
