import { Link } from "react-router-dom";

import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: yellow; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 35px;
  border-bottom: 1px solid lightgray;
`;

const TextBox = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-style: italic;
`;

const Header = () => {
  return (
    <MainWrapper>
      <Link to="/">
        <TextBox>Wanted Pre-onboarding course</TextBox>
      </Link>
    </MainWrapper>
  );
};

export default Header;
