import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

function PrivateRouter({ children }: { children: ReactElement }) {
  const { auth } = useAppSelector((state) => state);

  return auth.id && auth.username ? children : <Navigate to="/signin" />;
}
export default PrivateRouter;
