import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colorType } from "../types/colorType";

export default function Header(): JSX.Element {
  return (
    <HeaderStyle>
      <p>Wanted Pre-onboarding course</p>
      <Link to="/login">Login</Link>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  padding: 0 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colorType.palette.gray};

  p {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
