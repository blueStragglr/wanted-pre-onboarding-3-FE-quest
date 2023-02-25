import { Outlet } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const HomePage = ({ subRootList }) => {
  return (
    <HomeLayout subRootList={subRootList}>
      <Outlet />
    </HomeLayout>
  );
};

export default HomePage;
