import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="header-layout">
      <header className="font-bold p-6 text-lg italic">
        <Link to="/">Wanted Pre-onboarding course</Link>
      </header>
    </section>
  );
};
