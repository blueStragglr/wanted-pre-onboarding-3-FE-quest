import Content from 'components/atoms/Content';
import styled from 'styled-components';

function Main() {
  return (
    <Container>
      <Content />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
