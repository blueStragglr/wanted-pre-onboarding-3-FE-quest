import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/LoginPage";
import { PageA } from "./components/pages/PageA";
import { PageB } from "./components/pages/PageB";
import { PageC } from "./components/pages/PageC";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="pageA" element={<PageA />} />
          <Route path="pageB" element={<PageB />} />
          <Route path="pageC" element={<PageC />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
