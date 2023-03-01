import styled from "styled-components";

const PageText = styled.h1`
  color: gray;
  margin-top: 200px;
`;

const Cpage = () => {
  return (
    <div>
      <PageText>This is Page Common!</PageText>
    </div>
  );
};

export default Cpage;
