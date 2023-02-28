import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import FirstPage from "./pages/page1";
import SecondPage from "./pages/page2";
import ThirdPage from "./pages/page3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/page1" element={<FirstPage />} />
        <Route path="/page2" element={<SecondPage />} />
        <Route path="/page3" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
