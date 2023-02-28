import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { pages } from "../static/pages";
import LandingPage from "./landing";

const ContentWrapper = styled.main`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {pages.map((page) => (
            <Route
              key={page.id}
              path={`/${page.router}`}
              element={page.element}
            />
          ))}
        </Routes>
      </ContentWrapper>
    </>
  );
};

export default Home;
