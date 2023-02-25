import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./routes/Home";
import Page from "./routes/Page";
import { Reset } from "styled-reset";
import Login from "./routes/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Reset />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:PageId" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
