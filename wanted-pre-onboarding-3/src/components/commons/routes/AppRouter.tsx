import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "../../../pages/Main";
import { NotFoundPage } from "../../../pages/NotFound";
import { TestPage } from "../../../pages/TestPage";
import { DefaultLayout } from "../../Layouts/DefaultLayout";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/page/:id" element={<TestPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
