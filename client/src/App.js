import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import { pages } from "./static/pages";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContentWrapper = styled.main`
  display: flex;
`;

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Header />
        <ContentWrapper>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            {pages.map((page) => (
              <Route
                key={page.id}
                path={`/${page.router}`}
                element={page.element}
              />
            ))}
            {/* <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} /> */}
          </Routes>
        </ContentWrapper>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
