import React from "react";
import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import PageC from "../pages/PageC";

const Contents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pageA" element={<PageA />} />
      <Route path="/pageB" element={<PageB />} />
      <Route path="/pageC" element={<PageC />} />
    </Routes>
  );
};

export default Contents;
