import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="layout-contents">
      <Sidebar />
      {children}
    </div>
  </div>
);
export default Layout;
