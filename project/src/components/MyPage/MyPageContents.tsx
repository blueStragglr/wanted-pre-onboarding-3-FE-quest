import { useNavigate } from "react-router-dom";

export const MyPageContents = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("testLoginState");
    navigate("/");
  };
  return (
    <section className="contents-layout flex-col gap-8">
      This is MyPage!
      <button type="reset" className="btn" onClick={handleLogout}>
        로그아웃
      </button>
    </section>
  );
};
