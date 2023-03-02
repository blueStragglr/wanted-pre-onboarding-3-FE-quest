import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: any): JSX.Element {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    alert("로그인이 필요한 페이지입니다.");
    return <Navigate to={"/"} />;
  }
  return children;
}
