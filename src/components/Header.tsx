import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/a">page A</Link>
      <Link to="/b">page B</Link>
      <Link to="/c">page C</Link>
    </header>
  );
}
