import styled from "styled-components";

const CardSt = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = (props) => {
  return <CardSt>{props.children}</CardSt>;
};

export default Card;
