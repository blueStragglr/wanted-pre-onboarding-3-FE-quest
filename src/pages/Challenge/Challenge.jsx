import React from "react";
import styled from "styled-components";
import Layout from "../../component/Layout/Layout";
import Flex from "./../../component/Flex/Flex";
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
  text-align: left;
  align-items: flex-start;
`;

const Challenge = () => {
  return (
    <Layout>
      <StyledWrapper>
        <TextWrapper flexCenter column>
          <Typography mainTitle color="purple">
            챌린지 일정
          </Typography>
          <Margin height="60" />
          <Typography context>
            • 02.15 (수) ~ 03.02 (목) : 참가 신청 및 사전 미션 수행
          </Typography>
          <Margin height="10" />
          <Typography context>
            • 03.06 (월) ~ 03.19 (일) :기술 역량 향상 (2주)
          </Typography>
          <Margin height="10" />
          <Typography context>
            • 03.20 (월) ~ 04.16 (월) : 취업 챌린지 (4주)
          </Typography>
        </TextWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default Challenge;
