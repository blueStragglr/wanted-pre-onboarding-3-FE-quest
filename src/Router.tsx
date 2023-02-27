import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Page from "./routes/Page";
import { Reset } from "styled-reset";
import Login from "./routes/Login";


function Router() {
  return (
    <>
      <BrowserRouter>
        <Reset />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":PageId" element={<Page />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
