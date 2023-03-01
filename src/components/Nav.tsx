import { Link } from 'react-router-dom';
import { pages } from 'data/pages';

export const Nav = () => {
  return (
    <nav className='gnb'>
      <h1 className='sr-only'>Global Navigation Menu</h1>
      <ul>
        {pages.map(({ id, name, path }) => (
          <li key={id}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
