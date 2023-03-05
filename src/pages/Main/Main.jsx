import React from "react";
import styled from "styled-components";
import Layout from "../../component/Layout/Layout";
import Flex from "./../../component/Flex/Flex";
import { ReactComponent as MainSvg } from "../../assets/svgs/mainSvg.svg";
import Typography from "../../component/Typography/Typography";
import Margin from "../../component/Margin/Margin";

const StyledWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const TextWrapper = styled(Flex)`
  height: 600px;
  text-align: right;
  align-items: flex-end;
  justify-content: space-between;
  padding: 40px 0px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.purple};
  box-shadow: 2px 4px 8px -1px rgba(49, 76, 145, 0.15);
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.lightPurple};
  }

  transition: 0.5s;
`;

const Main = () => {
  return (
    <Layout>
      <StyledWrapper>
        <MainSvg style={{ width: "300px", height: "600px" }} />
        <Margin style={{ width: "10vw" }} />
        <TextWrapper flexCenter column>
          <Typography mainTitle>
            READY,
            <br />
            SET,
            <br />
            GO!
          </Typography>
          <Typography context color="darkGray">
            “기술 과제와 면접은 어떻게 대비해야 할까요?”
            <br />
            “포트폴리오에서 실무 역량을 어필하고 싶어요”
            <br />
            “개발자로서 기본기를 갖추고 싶은데 무엇이 필요할까요?”
            <br />
            <br />
            주니어 개발자를 위해 매월 달라지는 기술 주제를 <br />
            ‘프리온보딩 챌린지’에서 2주간 집중 학습해 보세요.
          </Typography>
          <StyledButton>
            <Typography headerButton color="white">
              시작하기
            </Typography>
          </StyledButton>
        </TextWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default Main;
