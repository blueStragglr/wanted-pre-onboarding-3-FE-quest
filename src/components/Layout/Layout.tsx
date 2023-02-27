import './Layout.css';

function Layout({ children }: any) {
  return (
    <>
      <header>Wanted Pre-onboarding course</header>
      <div className='center'>
        <nav>
          <ul>
            <li>
              <a href=''>Page A</a>
            </li>
            <li>
              <a href=''>Page B</a>
            </li>
            <li>
              <a href=''>Page C</a>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
