import styled from 'styled-components';

const PageA = () => {
  return <Content>This is Page A!</Content>;
};

export default PageA;

const Content = styled.article`
  display: flex;
  width: 100%;
  height: inherit;
  justify-content: center;
  align-items: center;
`;
