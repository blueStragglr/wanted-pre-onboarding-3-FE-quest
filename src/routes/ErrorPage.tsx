import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-4xl font-bold">Error</h1>
        <p className="mb-3 text-center">
          Sorry, an unexpected error has occurred.
          <br />
          You can check the console for details.
        </p>
        <p>
          {isRouteErrorResponse(error) ? (
            <i>
              {error.status} - {error.statusText}
            </i>
          ) : (
            <i>Something went wrong</i>
          )}
        </p>
      </div>
    </div>
  );
}
