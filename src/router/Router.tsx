import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "../components/Page";
import { Nav } from "../components/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/page1" element={<P.Page1 />} />
          <Route path="/page2" element={<P.Page2 />} />
          <Route path="/page3" element={<P.Page3 />} />
        </Route>
        <Route path="/login" element={<P.Login />} />
      </Routes>
    </BrowserRouter>
  );
};
