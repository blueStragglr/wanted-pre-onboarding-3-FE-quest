import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SideBar() {
  const [nowPage, setNowPage] = useState(0);
  const nowPageColor = (number) => {
    setNowPage(number);
  };
  console.log(nowPage);
  return (
    <SideBarWrapper nowPage={nowPage}>
      <LinkDiv
        to="/"
        className="pageA"
        nowPage={nowPage}
        onClick={() => nowPageColor(1)}
      >
        <div>Page A</div>
      </LinkDiv>
      <LinkDiv
        to="/2"
        className="pageB"
        nowPage={nowPage}
        onClick={() => nowPageColor(2)}
      >
        <div>Page B</div>
      </LinkDiv>
      <LinkDiv
        to="/3"
        className="pageC"
        nowPage={nowPage}
        onClick={() => nowPageColor(3)}
      >
        <div>Page C</div>
      </LinkDiv>
    </SideBarWrapper>
  );
}
const SideBarWrapper = styled.div`
  width: 10vh;
  height: 93vh;
  border-right: 5px solid gray;
`;

const LinkDiv = styled(Link)`
  text-decoration: none;

  &.pageA {
    color: ${(props) => (props.$nowPage === 1 ? "#0090ff" : "black")};
  }
  &.pageB {
    color: ${(props) => (props.$nowPage === 2 ? "#0090ff" : "black")};
  }
  &.pageC {
    color: ${(props) => (props.$nowPage === 3 ? "#0090ff" : "black")};
  }
`;

export default SideBar;
