import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Top = styled.div`
  position: relative;
`;

const Title = styled.header`
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #008cff;
  color: #fff;
  cursor: pointer;
`;

function Header() {
  const history = useHistory();

  return (
    <Top>
      <Title>Wanted Pre-onboarding course</Title>
      <Button onClick={() => history.push("/login")}>로그인</Button>
    </Top>
  );
}

export default Header;
