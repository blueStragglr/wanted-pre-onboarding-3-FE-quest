import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>이런!</h1>
      <p>없는 페이지입니다</p>
    </div>
  );
};

export default ErrorPage;
