import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageLayout from "./pages/PageLayout";
import { PAGE_LIST } from "./utils/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          {PAGE_LIST.map(({ path, component: Component }, index) => {
            return (
              <Route key={index} path={path} element={<Component />}></Route>
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
