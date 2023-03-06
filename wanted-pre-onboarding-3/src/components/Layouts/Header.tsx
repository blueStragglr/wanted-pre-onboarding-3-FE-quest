import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigation = useNavigate();

  function onClickMoveToMain() {
    navigation("/");
  }

  return <Wrap onClick={onClickMoveToMain}>Wanted Pre-onboarding course</Wrap>;
};

const Wrap = styled.div`
  border-bottom: 1px solid gray;

  display: flex;
  align-items: center;
  padding-left: 100px;

  font-size: 28px;
  font-weight: bold;

  cursor: pointer;
`;
