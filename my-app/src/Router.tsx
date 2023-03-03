import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import { PAGE_LIST } from "./data/pagelist";
import Login from "./routes/login";
import Root from "./routes/root";

const Router = () => {
  const pages = PAGE_LIST;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PageLayout />}>
          <Route path="/" element={<Root />} />
          {pages.map(({ path, component: Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
