import { useNavigate } from "react-router-dom";
import { removeAuth } from "../../libs/authAction";

const NavigationBar = () => {
  const navigate = useNavigate();
  const signOutHandler = () => {
    removeAuth();
    navigate("/signin");
  };

  return (
    <header className="px-2 py-6 flex justify-between fixed left-0 right-0 top-0 bg-slate-100 font-bold text-lg">
      <nav>Wanted Pre-onboarding course</nav>
      <button
        className="p-3 border rounded-md text-base transition hover:bg-slate-500 hover:text-white"
        type="button"
        onClick={signOutHandler}
      >
        로그아웃
      </button>
    </header>
  );
};

export default NavigationBar;
