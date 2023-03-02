import LoginPage from "./components/LoginPage";
import PageA from "./components/PageA";
import PageB from "./components/PageB";
import PageC from "./components/PageC";

const links = [
  { name: "홈", path: "/", component: <p>홈</p>, useLayout: true },
  { name: "turtle page", path: "/a", component: <PageA />, useLayout: true },
  { name: "lizard page", path: "/b", component: <PageB />, useLayout: true },
  { name: "dragon page", path: "/c", component: <PageC />, useLayout: true },
  {
    name: "로그인",
    path: "/login",
    component: <LoginPage />,
    useLayout: false,
  },
];

export { links };
