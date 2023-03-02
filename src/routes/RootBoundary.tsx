import {
  isRouteErrorResponse,
  Navigate,
  useRouteError,
} from "react-router-dom";
import { path } from "./router";

export default function RootBoundary() {
  const error = useRouteError();

  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      alert("You aren't authorized to see this");
      return <Navigate to={path.login} />;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Something went wrong</div>;
}
