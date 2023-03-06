import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Wanted Pre-onboarding course</h1>
      <Link to="login">Login</Link>
    </div>
  );
};

export default Header;
