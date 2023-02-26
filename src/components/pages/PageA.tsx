import React from "react";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export const PageA = () => {
  useAuthRedirect();

  return <div>This is page A !</div>;
};
