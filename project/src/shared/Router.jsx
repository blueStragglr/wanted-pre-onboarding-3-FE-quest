import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import PageC from "../pages/PageC";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
