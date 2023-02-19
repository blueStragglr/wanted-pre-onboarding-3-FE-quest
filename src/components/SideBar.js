import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar() {
  const [nowPage, setNowPage] = useState(1);
  const locationNow = useLocation();
  const nowPageColor = (number) => {
    setNowPage(number);
  };
  if (locationNow.pathname === "/login") return null;
  return (
    <SideBarWrapper>
      <LinkTag
        to="/"
        className="pageA"
        nowPage={nowPage}
        onClick={() => nowPageColor(1)}
      >
        <LinkDiv>Page A</LinkDiv>
      </LinkTag>
      <LinkTag
        to="/2"
        className="pageB"
        nowPage={nowPage}
        onClick={() => nowPageColor(2)}
      >
        <LinkDiv>Page B</LinkDiv>
      </LinkTag>
      <LinkTag
        to="/3"
        className="pageC"
        nowPage={nowPage}
        onClick={() => nowPageColor(3)}
      >
        <LinkDiv>Page C</LinkDiv>
      </LinkTag>
    </SideBarWrapper>
  );
}
const SideBarWrapper = styled.div`
  width: 10vw;
  height: 93vh;
  border-right: 1px solid gray;
`;

const LinkTag = styled(Link)`
  text-decoration: none;

  &.pageA {
    color: ${(props) => (props.nowPage === 1 ? "#0090ff" : "black")};
  }
  &.pageB {
    color: ${(props) => (props.nowPage === 2 ? "#0090ff" : "black")};
  }
  &.pageC {
    color: ${(props) => (props.nowPage === 3 ? "#0090ff" : "black")};
  }
`;

const LinkDiv = styled.div`
  height: 5vh;
  display: flex;
  margin-left: 30px;
  align-items: center;
  font-weight: bolder;
`;
export default SideBar;
