import { Link, NavLink } from 'react-router-dom';
import './Layout.css';

function Layout({ children }: any) {
  const links = [
    { href: '/a', text: 'Page A' },
    { href: '/b', text: 'Page B' },
    { href: '/c', text: 'Page C' },
  ];

  return (
    <>
      <header>
        Wanted Pre-onboarding course
        <span className='login'>
          <Link to='/login'>login</Link>
        </span>
      </header>
      <div className='center'>
        <nav>
          <ul>
            {links.map(({ text, href }) => (
              <li key={text}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
