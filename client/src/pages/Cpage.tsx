import styled from "styled-components";
import useIsLogin from "../hooks/useIsLogin";

const Cpage = () => {
  useIsLogin();
  return <Content>This is page C</Content>;
};

export default Cpage;

const Content = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  color: #e84118;
`;
