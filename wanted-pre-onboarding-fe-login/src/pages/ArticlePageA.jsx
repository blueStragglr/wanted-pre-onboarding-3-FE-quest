import styled from "styled-components";

const ArticlePageA = () => {
  return <Article>ArticlePageA</Article>;
};

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
  padding-left: 200px;
`;

export default ArticlePageA;
