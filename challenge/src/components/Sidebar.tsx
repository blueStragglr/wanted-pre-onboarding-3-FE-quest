import { Link } from "react-router-dom";

export default function Sidebar() {
  const isLogin = window.localStorage.getItem("login")?.split(",");
  console.log(isLogin?.[0]);
  return (
    <nav className="w-1/5 h-screen border-r-indigo-500 border-solid border-2">
      <ul>
        {!isLogin?.[0] ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <p>
              Welcome! <strong>{isLogin[1]}</strong>
            </p>
          </li>
        )}
        <li>
          <Link to="/pagea">PageA</Link>
        </li>
        <li>
          <Link to="/pageb">PageB</Link>
        </li>
        <li>
          <Link to="/pagec">PageC</Link>
        </li>
      </ul>
    </nav>
  );
}
