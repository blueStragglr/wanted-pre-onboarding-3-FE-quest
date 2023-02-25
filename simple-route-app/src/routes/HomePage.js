import { Outlet } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};

export default HomePage;
