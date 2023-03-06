import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #212529;

  &:hover {
    background-color: #e9ecef;
    radius: 10px;
  }

  &.active {
    background-color: #f1f3f5;
  }
`;

// 왼쪽 패딩을 10px로 설정
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  left-padding: 10px;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Wanted Pre-onboarding course</h1>
      <NavItem to="/login" activeClassName="active" exact>
        로그인
      </NavItem>
    </HeaderWrapper>
  );
};

export default Header;
