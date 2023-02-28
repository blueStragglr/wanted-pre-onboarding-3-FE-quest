import { Link } from "react-router-dom";

import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 35px;
  border-bottom: 1px solid lightgray;
`;

const TextBox = styled.div`
  width: 300px;
  display: flex;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
  font-style: italic;
  h2:nth-child(1) {
    color: #0049db;
  }
  h2:nth-child(2) {
    color: #448bff;
  }
  h2:nth-child(3) {
    color: #25dfbc;
  }
`;

const Header = () => {
  return (
    <MainWrapper>
      <Link to="/">
        <TextBox>
          <h2>Wanted</h2>
          <h2>Pre-onboarding</h2>
          <h2>course</h2>
        </TextBox>
      </Link>
    </MainWrapper>
  );
};

export default Header;
