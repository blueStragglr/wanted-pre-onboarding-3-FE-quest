import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBox = styled.nav`
  display: flex;
  /* position: fixed; */
  flex-direction: column;
  width: 20%;
  border-right: 2px solid black;
  height: 100vh;
`;

const NavPageBox = styled.div`
  display: flex;

  flex-direction: column;
  box-sizing: border-box;
  margin-top: 50px;
  gap: 50px;
  font-size: 20px;
  div {
    :hover {
      color: gray;
    }
  }
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
        <NavPageBox>
          <div onClick={onClickAHandler}>Page A</div>
          <div onClick={onClickBHandler}>Page B</div>
          <div onClick={onClickCHandler}>Page C</div>
        </NavPageBox>
      </NavBox>
    </>
  );
};

export default Nav;
