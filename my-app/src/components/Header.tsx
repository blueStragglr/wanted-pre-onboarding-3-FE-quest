import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Title onClick={() => navigate("/")}>Wanted Pre-Onboarding course</Title>
    </header>
  );
};

const Title = styled.h1`
  text-align: left;
  border-bottom: 2px solid gray;
  padding-bottom: 8px;
  margin: 0px 24px auto;
  cursor: pointer;
`;

export default Header;
