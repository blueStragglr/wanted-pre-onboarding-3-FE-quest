import React from "react";
import { MainContainer } from "./Container.style";

function Container({ children }: React.PropsWithChildren) {
  return <MainContainer>{children}</MainContainer>;
}

export default Container;
