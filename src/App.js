import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageB" element={<Home />} />
        <Route path="/pageC" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
