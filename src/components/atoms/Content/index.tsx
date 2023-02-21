import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Content() {
  const page = useLocation();
  return <Container>{`This is a Page ${page.pathname.replace('/', '')} !`}</Container>;
}

export default Content;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-top: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #356eb7;
`;
