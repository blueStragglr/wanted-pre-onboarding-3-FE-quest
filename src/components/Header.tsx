import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-16 border-solid border-2 border-black-500 flex justify-center items-center">
      <p className="text-lg font-semibold">
        <Link to="/">Wanted Pre-onboarding Course</Link>
      </p>
    </div>
  );
};

export default Header;
