import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p></p>
    </div>
  );
};

export default ErrorBoundary;
