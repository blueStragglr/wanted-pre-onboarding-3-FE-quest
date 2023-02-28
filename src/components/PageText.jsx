import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #008cff;
  font-size: 1.5rem;
`;

function PageText({ children }) {
  return <Text>{children}</Text>;
}

export default PageText;
