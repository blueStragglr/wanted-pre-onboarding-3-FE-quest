import { type ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

function PublicRouter({ children }: { children: ReactElement }) {
  const { auth } = useAppSelector((state) => state);

  return auth.id && auth.username ? <Navigate to="/" /> : children;
}
export default PublicRouter;
