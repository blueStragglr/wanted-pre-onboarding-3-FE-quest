import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ArticlePageA from "./pages/ArticlePageA";
import ArticlePageB from "./pages/ArticlePageB";
import ArticlePageC from "./pages/ArticlePageC";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<ArticlePageA />} />
            <Route path={"/page-a"} element={<ArticlePageA />} />
            <Route path={"/page-b"} element={<ArticlePageB />} />
            <Route path={"/page-c"} element={<ArticlePageC />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
