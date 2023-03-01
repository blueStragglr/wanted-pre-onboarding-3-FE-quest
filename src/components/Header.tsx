import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigator = useNavigate();
  const isAuth = localStorage.getItem('user');

  const handleClick = () => {
    localStorage.removeItem('user');
    if (!isAuth) {
      navigator('/');
    }
  };

  return (
    <header className='header'>
      <h1 className='header-title'>
        <Link to={'/'}>Wanted Pre-onboarding course</Link>
      </h1>
      <ul className='header-links'>
        <li>
          {isAuth ? (
            <Link to={'/'} onClick={handleClick}>
              LogOut
            </Link>
          ) : (
            <Link to={'/login'}>LogIn</Link>
          )}
        </li>
      </ul>
    </header>
  );
};
