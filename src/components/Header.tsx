import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-10 h-16 flex justify-between items-center font-bold border-b-2">
      <Link to="/" className="tracking-wide italic">
        Wanted Pre-onboarding course
      </Link>
      <Link to="/login" className="text-sm text-gray-500">
        로그인
      </Link>
    </header>
  );
}
