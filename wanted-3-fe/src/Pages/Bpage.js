import styled from "styled-components";

const PageText = styled.h1`
  color: gray;
  margin-top: 100px;
`;

const Bpage = () => {
  return (
    <div>
      <PageText>This is Page B!</PageText>
    </div>
  );
};

export default Bpage;
