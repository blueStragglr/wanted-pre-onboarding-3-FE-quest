import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Page from "./routes/Page";
import { Reset } from "styled-reset";
import LoginLow from "./routes/LoginLow";
import JWTLogin from "./routes/JWTLogin";
import LocalLogin from "./routes/LocalSLogin";


function Router() {
  return (
    <>
      <BrowserRouter>
        <Reset />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":PageId" element={<Page />} />
          </Route>
          <Route path="/login" element={<LoginLow />} />
          <Route path="/Jwtlogin" element={<JWTLogin />} />
          <Route path="/localLogin" element={<LocalLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
