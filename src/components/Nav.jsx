import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Nav = ({ pages }) => {
  return (
    <aside>
      <nav>
        <ul>
          {pages.map((page, idx) => (
            <li key={uuidv4()} id={uuidv4()}>
              <Link
                to={`/${page.path}`}
              >{`Page ${page.path.toUpperCase()}`}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
