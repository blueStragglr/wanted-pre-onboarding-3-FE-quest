import "./App.css";
import { Layout } from "components/Layout";
import { Route, Routes } from "react-router-dom";
import { Routes as RouteInfo } from "./utils/Routes";
import { Main } from "pages/Main";
import { NotFound } from "pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        {RouteInfo.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
