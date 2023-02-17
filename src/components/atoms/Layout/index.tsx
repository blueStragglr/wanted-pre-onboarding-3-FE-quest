import Header from '../Header';
import Sidebar from '../Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
