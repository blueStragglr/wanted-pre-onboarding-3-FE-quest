import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col	h-screen">
      <Header />
      <div className="flex grow">
        <SideBar />
        <div className="flex grow items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
