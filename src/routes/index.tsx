import { Route, Routes } from "react-router";
import Home from "../components/page/Home";
import NotFound from "../components/page/NotFound";
import PageA from "../components/page/PageA";
import PageB from "../components/page/PageB";
import PageC from "../components/page/PageC";
import SignIn from "../components/page/sign/SignIn";
import SignUp from "../components/page/sign/SignUp";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-a" element={<PageA />} />
      <Route path="/page-b" element={<PageB />} />
      <Route path="/page-c" element={<PageC />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoute;
