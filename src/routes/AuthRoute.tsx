import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

interface AuthRouteProps {
  children: React.ReactElement;
  onlyAuth: boolean;
}

export const AuthRoute = ({
  children,
  onlyAuth,
}: AuthRouteProps): React.ReactElement => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (onlyAuth && !user) {
      navigate("/login", { replace: true });
    } else if (!onlyAuth && user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  return children;
};
