import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomeContainer from "../components/HomeContainer";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";
import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/pageA" element={<PageA />} />
            <Route path="/PageB" element={<PageB />} />
            <Route path="/PageC" element={<PageC />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
