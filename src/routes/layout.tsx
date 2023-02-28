import { NavLink, Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <span id="header-title">Wanted Pre-onboarding Challenge</span>
        <button className="login-button" onClick={() => navigate('/login')}>
          로그인
        </button>
      </header>
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
