import './Layout.css';
import Header from './Header';
import SideBar from './SideBar';

function Layout({ children }) {
  return (
    <div className="layout_container">
        <Header />
        <SideBar />
        {children}
    </div>
  );
}

export default Layout;
