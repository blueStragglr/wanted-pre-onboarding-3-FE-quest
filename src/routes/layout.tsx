import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header id="header">Wanted Pre-onboarding Challenge</header>
      <div id="main">
        <aside id="sidebar">
          <nav>
            <ul>
              <li className="sidebar-link">
                <NavLink to={`/page1`}>Page 1</NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to={`/page2`}>Page 2</NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to={`/page3`}>Page 3</NavLink>
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
