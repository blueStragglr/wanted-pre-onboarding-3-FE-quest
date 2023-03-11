import styled from "styled-components";

// 네비의 구분선 표시용, hr로 사용
// 웹 접근성 측면에서 구분선은 리스트에서 항상 제외해야 함
const Separator = styled.hr`
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  border-top: 1px solid #fffffe;
`;

function NavSeparator() {
    // 웹접근성 높이기 위해 presentaion으로 지정.
  return <Separator role="presentation" />;
}

export default NavSeparator;