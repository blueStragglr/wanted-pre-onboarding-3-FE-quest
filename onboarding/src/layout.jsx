import Sidebar from './components/Sidebar';

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    {children}
  </div>
);
export default Layout;
