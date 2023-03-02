import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";

interface Props {
  onlyAuth: boolean;
  children: React.ReactElement;
}

export const PrivateRoute = ({ onlyAuth, children }: Props) => {
  const navigate = useNavigate();
  const loginStatus = useSelector(
    (state: RootState) => state.login.loginStatus
  );

  useEffect(() => {
    if (onlyAuth && !loginStatus) {
      alert("로그인을 해야만 볼 수 있는 페이지입니다");
      navigate("/login", { replace: true });
    } else if (!onlyAuth && loginStatus) {
      navigate("/", { replace: true });
    }
  }, [loginStatus]);

  return children;
};

export default PrivateRoute;
