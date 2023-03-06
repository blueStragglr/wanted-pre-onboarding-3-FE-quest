import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to='/a'>Page A</Link>
          </li>
          <li>
            <Link to='/b'>Page B</Link>
          </li>
          <li>
            <Link to='/c'>Page C</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
