import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./layouts/Layout";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import Login from "./pages/Login";
import Protect from "./pages/Protect";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<A />} />
          <Route path="b" element={<B />} />
          <Route path="c" element={<C />} />
          <Route
            path="protect"
            element={
              <ProtectedRoute>
                <Protect />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<A />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
