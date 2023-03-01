import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/A" />} />
          {ROUTES.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

