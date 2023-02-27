import styled from "@emotion/styled";
import {
  colorBasicBlack,
  colorBlue,
  colorLightBlue,
  colorLightGray,
  colorWhite,
} from "../../common/styles/commonColor";
import { flexCenter } from "../../common/styles/commonLayout";
import { IHeaderProps } from "../types/header";

const HeaderContainer = styled.header`
  position: relative;
  ${flexCenter}
  background-color: ${colorLightGray};
  height: 80px;
  min-width: 560px;

  h1 {
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: ${colorWhite};
  }

  button {
    position: absolute;
    right: 20px;
    background-color: ${colorBlue};
    border-radius: 5px;
    padding: 5px 16px;
    color: ${colorWhite};
  }
  button:hover {
    color: ${colorBasicBlack};
    background-color: ${colorLightBlue};
  }
`;

const HeaderView = ({ onClickLogoutButton }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <h1>Wanted Pre-onboarding course</h1>
      <button onClick={onClickLogoutButton}>로그아웃</button>
    </HeaderContainer>
  );
};

export default HeaderView;
