import styled from "styled-components";
import useIsLogin from "../hooks/useIsLogin";

const Bpage = () => {
  useIsLogin();
  return <Content>This is page B</Content>;
};

export default Bpage;

const Content = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  color: #e84118;
`;
