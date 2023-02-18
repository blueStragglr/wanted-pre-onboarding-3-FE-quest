import styled from 'styled-components';

const PageB = () => {
  return <Content>This is Page B!</Content>;
};

export default PageB;

const Content = styled.article`
  display: flex;
  width: 100%;
  height: inherit;
  justify-content: center;
  align-items: center;
`;
