import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";

interface Props {
  children: React.ReactElement;
}

export const PrivateRoute = ({ children }: Props) => {
  const loginStatus = useSelector(
    (state: RootState) => state.login.loginStatus
  );

  if (!loginStatus) {
    alert("로그인을 해야만 볼 수 있는 페이지입니다");
  }
  return loginStatus ? children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
