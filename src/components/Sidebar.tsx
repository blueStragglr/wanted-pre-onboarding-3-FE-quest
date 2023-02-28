import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/page-a">Page A</Link>
        </li>
        <li>
          <Link to="/page-b">Page B</Link>
        </li>
        <li>
          <Link to="/page-c">Page C</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
