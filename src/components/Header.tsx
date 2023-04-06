import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-gray">
      <Link to="/" className="font-bold text-2xl ml-5">
        Wanted Pre-onboarding Course!
      </Link>
    </header>
  );
}
