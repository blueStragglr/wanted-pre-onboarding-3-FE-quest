import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBox = styled.nav`
  width: 250px;
  border-right: 2px solid black;
  height: 100%;
`;

const Nav = () => {
  const navigate = useNavigate();
  const onClickAHandler = () => {
    navigate(`apage`);
  };
  const onClickBHandler = () => {
    navigate(`bpage`);
  };
  const onClickCHandler = () => {
    navigate(`cpage`);
  };
  return (
    <>
      <NavBox>
        <div onClick={onClickAHandler}>Page A</div>
        <div onClick={onClickBHandler}>Page B</div>
        <div onClick={onClickCHandler}>Page C</div>
      </NavBox>
    </>
  );
};

export default Nav;
