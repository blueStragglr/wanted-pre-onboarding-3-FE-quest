import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";
import Content from "./Content";
import Header from "./components/header";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #dde9eb;
    border-bottom: 1px solid #fff;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 12px 0; */
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
  height: 85vh;
`;

function App() {
  return (
    <>
    <Header>wanted Pre-onboarding course</Header>
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Content />
    </Layout>
    </>
  );
}

export default App;
