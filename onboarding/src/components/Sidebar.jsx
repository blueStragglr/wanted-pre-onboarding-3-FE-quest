import { Link } from 'react-router-dom';
import { routesList } from '../main';

const Sidebar = () => (
  <nav className="sidebar">
    <ul>
      {routesList.map(({ title, url }) => (
        <li key={url}>
          <Link to={url}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default Sidebar;
