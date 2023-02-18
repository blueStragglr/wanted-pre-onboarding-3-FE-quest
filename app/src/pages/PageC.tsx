import styled from 'styled-components';

const PageC = () => {
  return <Content>This is Page C!</Content>;
};

export default PageC;

const Content = styled.article`
  display: flex;
  width: 100%;
  height: inherit;
  justify-content: center;
  align-items: center;
`;
