import styled from "styled-components";

// nav 메뉴 클릭시 화면에 보여지는 스타일
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;
  width: 100%;
  min-height: 200px;
  background: #ffffff;
  color: grey;
  border-radius: 8px;
  text-align: center;
`;

// nav바 content 생성용 컴포넌트
function Content() {
  return (
    <Main>
      <h1>This is {window.location.pathname}!</h1>
    </Main>
  );
}

export default Content;
