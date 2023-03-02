import Header from './Header';
import styled from 'styled-components';
const Template = () => {
  return (
    <TemplateContainer>
      <Header />
      <Content></Content>
    </TemplateContainer>
  );
};

export default Template;

const TemplateContainer = styled.div``;
const Content = styled.div``;
