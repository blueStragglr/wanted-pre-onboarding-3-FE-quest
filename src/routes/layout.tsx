import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header id="header">Wanted Pre-onboarding Challenge</header>
      <div id="main">
        <aside id="sidebar">
          <nav>
            <ul>
              <li className="sidebar-link">
                <Link to={`/page1`}>Page 1</Link>
              </li>
              <li className="sidebar-link">
                <Link to={`/page2`}>Page 2</Link>
              </li>
              <li className="sidebar-link">
                <Link to={`/page3`}>Page 3</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
