import styled from "styled-components";

const Apage = () => {
  return (
    <ApageWrapper>
      <p>B와 C는 로그인이 필요한 페이지입니다.</p>
      <Content>This is page A</Content>
    </ApageWrapper>
  );
};

export default Apage;

const ApageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  color: #e84118;
`;
