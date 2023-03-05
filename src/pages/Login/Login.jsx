import React from "react";
import styled from "styled-components";
import Layout from "../../component/Layout/Layout";
import Flex from "./../../component/Flex/Flex";
import Typography from "../../component/Typography/Typography";
import Margin from "../../component/Margin/Margin";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const LoginWrapper = styled(Flex)`
  text-align: left;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 420px;
  height: 60px;
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-radius: 20px;
  font-family: "pretendard-semibold";
  font-size: 20px;
  padding: 0px 20px;
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

const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <StyledWrapper>
        <LoginWrapper flexCenter column>
          <Typography mainTitle>로그인</Typography>
          <Margin height="60" />
          <StyledInput placeholder="아이디" />
          <Margin height="20" />
          <StyledInput placeholder="비밀번호" type="password" />
          <Margin height="40" />
          <Flex flexCenter>
            <StyledButton>
              <Typography headerButton color="white">
                시작하기
              </Typography>
            </StyledButton>
            <Margin width="20" />
            <StyledButton onClick={() => navigate("/")}>
              <Typography headerButton color="white">
                홈으로 돌아가기
              </Typography>
            </StyledButton>
          </Flex>
        </LoginWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default Login;
