import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import PageC from "../pages/PageC";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
