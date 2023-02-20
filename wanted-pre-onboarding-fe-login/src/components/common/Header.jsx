import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBar>
      <HeaderIcon>
        <Link to={"/"}>
          <HeaderTitle>Wanted Pre-onboarding course LKH</HeaderTitle>
        </Link>
      </HeaderIcon>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  position: fixed;
`;

const HeaderIcon = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 30px;
`;

const HeaderTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
`;
export default Header;
