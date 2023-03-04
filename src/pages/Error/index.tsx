import { useRouteError } from 'react-router-dom';

interface ErrorType {
  status?: number;
  statusText?: string;
  message?: string;
}

export const Error = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
