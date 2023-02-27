import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PAGE_INFO } from "../../constance/PageList";

export const Sidebar = () => {
  const location = useLocation();
  const nowPath = location.pathname;
  const isLogin = localStorage.getItem("testLoginState");
  return (
    <nav className="sidebar-layout">
      {PAGE_INFO.map((item) => (
        <Link
          to={`${item.path}`}
          key={item.name}
          className={`w-20 text-lg ${nowPath === item.path && "text-sky-500"}`}
        >
          {item.name}
        </Link>
      ))}
      {isLogin === "true" ? (
        <Link
          to="/mypage"
          className={`w-20 text-lg ${nowPath === "/mypage" && "text-sky-500"}`}
        >
          MyPage
        </Link>
      ) : (
        <Link to="/login" className="w-20 text-lg ">
          Login
        </Link>
      )}
    </nav>
  );
};
