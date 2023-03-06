import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  const navigation = useNavigate();

  function onClickMoveToPage(id: string) {
    navigation(`page/${id}`);
  }
  return (
    <Wrap>
      <Menu onClick={() => onClickMoveToPage("a")}>PageA</Menu>
      <Menu onClick={() => onClickMoveToPage("b")}>PageB</Menu>
      <Menu onClick={() => onClickMoveToPage("c")}>PageC</Menu>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 200px;

  padding-left: 30px;
  border-right: 2px solid gray;
`;

const Menu = styled.div`
  margin: 20px 0px;

  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
