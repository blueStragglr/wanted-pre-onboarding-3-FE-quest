import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center justify-between px-20 border-b-2 h-07">
      <h2
        className=" text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Wanted Pre-onboarding course
      </h2>

      <Link
        to="signin"
        className="px-4 py-1 rounded bg-slate-200 font-semibold"
      >
        Login
      </Link>
    </div>
  );
};

export default Header;
