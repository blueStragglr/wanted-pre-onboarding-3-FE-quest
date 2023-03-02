import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRouter from "./components/PrivateRouter";
import PublicRouter from "./components/PublicRouter";
import About from "./pages/About";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Poetry from "./pages/Poetry";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="signin"
          element={
            <PublicRouter>
              <SignIn />
            </PublicRouter>
          }
        />
        <Route
          path="mypage"
          element={
            <PrivateRouter>
              <Mypage />
            </PrivateRouter>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="poetry" element={<Poetry />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
