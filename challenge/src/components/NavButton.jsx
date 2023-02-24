import { Link } from 'react-router-dom';

const NavButton = ({ link, title }) => {
  return <Link to={link}>{title}</Link>;
};

export default NavButton;
