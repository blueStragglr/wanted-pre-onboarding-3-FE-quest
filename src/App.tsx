import { Route, Routes } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.PageA />} />
      <Route path="/b" element={<P.PageB />} />
      <Route path="/c" element={<P.PageC />} />
    </Routes>
  );
}

export default App;
