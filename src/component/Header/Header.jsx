import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import Typography from "../Typography/Typography";
import Flex from "../Flex/Flex";

const StyledHeader = styled.header`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  padding: 0px 40px;
  ${(props) => props.theme.flex.flexCenter};
  justify-content: space-between;
  z-index: 1;
`;

const StyledLink = styled(NavLink)`
  height: 100%;
  vertical-align: middle;
  margin-left: 20px;
  ${(props) => props.theme.flex.flexCenter};
  transition: 0.5s;

  ::hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.purple};
    transition: 0.5s;
  }
`;

export default function Header() {
  const locationNow = useLocation();

  if (locationNow.pathname === "/login") return null;
  else
    return (
      <StyledHeader>
        <StyledLink to="/" style={{ margin: "0" }}>
          <Typography header>wanted</Typography>
        </StyledLink>
        <Flex flexCenter>
          <StyledLink to="/challenge">
            <Typography headerButton>챌린지 일정</Typography>
          </StyledLink>
          <StyledLink to="/mission">
            <Typography headerButton>사전미션 안내</Typography>
          </StyledLink>
          <StyledLink to="/curriculum">
            <Typography headerButton>커리큘럼</Typography>
          </StyledLink>
          <StyledLink to="/login">
            <Typography headerButton>로그인</Typography>
          </StyledLink>
        </Flex>
      </StyledHeader>
    );
}
