import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

const pages = [
  {
    path: "/pageA",
    label: "Page A",
    component: PageA,
    requireAuth: true, // 해당 페이지가 인증이 필요한지 여부
  },
  {
    path: "/pageB",
    label: "Page B",
    component: PageB,
    requireAuth: false,
  },
  {
    path: "/pageC",
    label: "Page C",
    component: PageC,
    requireAuth: true,
  },
];

export default pages;
