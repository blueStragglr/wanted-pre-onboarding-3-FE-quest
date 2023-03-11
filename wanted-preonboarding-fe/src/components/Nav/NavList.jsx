import React from "react";
import styled from "styled-components";

// 추후 다단계 Nav를 구성하기 위해 ul로 사용
// 각 링크가 몇 단계에 있는지 시각적 효과를 주기 위함
const List = styled.ul`
  // 리스트 하위에 현재 페이지에 해당하는 링크가 있는 경우에만 열려 있도록 스타일링
  display: ${(p) => (p.expanded ? "block" : "none")}; // 메뉴를 열어놓을지 닫아놓을지 여부
  margin: 0;
  padding: 0;
  padding-left: 20px;
  list-style: none;
`;

function NavList({ children, expanded = true }) {
  return <List expanded={expanded}>{children}</List>;
}

export default NavList;