import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div>
      <h1>Unexpected error has occured!</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
    </div>
  );
};
