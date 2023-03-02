import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Content from "./Content";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/" element={<Navigate to="/page-A" />} />
        <Route path="page-A" element={<PageA />} />
        <Route path="page-B" element={<PageB />} />
        <Route path="page-C" element={<PageC />} />
      </Route>
    </Routes>
  );
}

export default App;
