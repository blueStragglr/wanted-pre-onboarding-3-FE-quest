import React from "react";
import styled from "styled-components";

// 네입 아이템을 나타내기 위함
// li 요소를 기반으로 작성
const Item = styled.li`
  margin: 8px;
  
`;

function NavItem({ children, disabled = false }) {
    // disable prop은 아이템의 비활성화 여부를 정하기 위함이다.
    // 하위에 비활성화된 링크가 있는 경우엔 리스트에서 해당 아이템이 제외되도록
    // role 속성을 presentation으로 변경함.
    // 시각적인 효과는 없으나, 웹 접근성 측면에서 권장되는 부분이다
  return <Item role={disabled ? "presentation" : null}>{children}</Item>;
}

export default NavItem;