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

const Mission = () => {
  return (
    <Layout>
      <StyledWrapper>
        <TextWrapper flexCenter column>
          <Typography mainTitle color="purple">
            사전미션 안내
          </Typography>
          <Margin height="60" />
          <Typography context>
            • 사전 미션은 챌린지 참여를 다짐하고 학습을 준비하기 위한
            용도입니다.
          </Typography>
          <Margin height="10" />
          <Typography context>
            • 학습 커리큘럼은 사전 미션을 기반으로 내용이 구성되어 있습니다.
          </Typography>
          <Margin height="10" />
          <Typography context>
            • 강의 시간에 사전 미션의 코드를 리팩토링하며 발전시켜갑니다.
          </Typography>
          <Margin height="10" />
          <Typography context>
            • 효과적인 기술 역량 향상을 위해 사전 미션 수행 후 챌린지에 참가하는
            것을 권장드립니다.
          </Typography>
          <Margin height="10" />
          <Typography context>• 프론트엔드 챌린지 3월 - 사전미션</Typography>
        </TextWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default Mission;
