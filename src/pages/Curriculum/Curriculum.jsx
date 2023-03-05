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

const Curriculum = () => {
  return (
    <Layout>
      <StyledWrapper>
        <TextWrapper flexCenter column>
          <Typography mainTitle color="purple">
            커리큘럼
          </Typography>
          <Margin height="40" />
          <Typography context>
            1. 개발자 입장에서 바라본 로그인의 개념과,
            <br />
            로그인을 적용하기 위한 어플리케이션 구조에 대해 알아봅니다.
          </Typography>
          <Margin height="15" />
          <Typography context>
            2. 배포된 서버의 JWT 로그인 기능을 이용해 실제 로그인 기능을 구현해
            보고,
            <br />
            프론트엔드 어플리션의 구조와 기능 관점에서 학습합니다.
          </Typography>
          <Margin height="15" />
          <Typography context>
            3. 로컬 서버에 세션 기반 로그인 서버를 실행해 로그인 기능을 구현해
            보고,
            <br />
            인프라스트럭쳐 관점에서 관련된 내용을 알아봅니다.
          </Typography>
          <Margin height="15" />
          <Typography context>
            4. 실무에서 자주 등장하는 로그인과 관련된 개념들을 조금 더 자세히
            알아보고,
            <br />
            답변하지 못했던 질문들에 대해서 답변하는 시간을 가집니다.
          </Typography>
        </TextWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default Curriculum;
