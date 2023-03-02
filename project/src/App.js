// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageA from "../src/Pages/PageA";
import PageB from "../src/Pages/PageB";
import PageC from "../src/Pages/PageC";
import Login from "../src/Pages/Login";

function App() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  // const [openLoginPage, setOpenLoginPage] = useState(false);
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageA />}></Route>
            <Route path="/page2" element={<PageB />}></Route>
            <Route path="/page3" element={<PageC />}></Route>
            <Route
              path="/login"
              element={<Login userInfo={userInfo} setUserInfo={setUserInfo} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
