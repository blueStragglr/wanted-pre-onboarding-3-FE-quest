import { useRouteError } from "react-router";

export default function NotFound() {
  const error = useRouteError() as ErrorType;

  console.error(error.message);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry. an expected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
