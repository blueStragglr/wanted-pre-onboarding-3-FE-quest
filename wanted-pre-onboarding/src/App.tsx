import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";import 
LoginLayout from "./layout/LoginLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
