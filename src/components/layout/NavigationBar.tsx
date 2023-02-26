import { useNavigate } from "react-router-dom";
import { removeAuth } from "../../libs/authAction";
import ShareButton from "../common/ShareButton";

const NavigationBar = () => {
  const navigate = useNavigate();
  const signOutHandler = () => {
    removeAuth();
    navigate("/signin");
  };

  return (
    <header className="px-2 py-6 flex justify-between fixed left-0 right-0 top-0 bg-slate-100 font-bold text-lg">
      <nav>Wanted Pre-onboarding course</nav>
      <ShareButton
        className="button"
        type="button"
        onClick={signOutHandler}
        text="로그아웃"
      />
    </header>
  );
};

export default NavigationBar;
