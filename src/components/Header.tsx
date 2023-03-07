import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <nav
        className="flex w-full items-center justify-between bg-white py-5 italic text-neutral-600 focus:text-neutral-700  md:flex-wrap md:justify-start z-10 pl-10 border-b-2"
        data-te-navbar-ref
      >
        <Link to={'/'}>Wanted pre-onbording course</Link>
      </nav>
    </header>
  );
};

export default Header;
