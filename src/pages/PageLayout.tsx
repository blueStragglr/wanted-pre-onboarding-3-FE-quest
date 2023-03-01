import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 py-4 w-4/5">{children}</div>;
};

export default PageLayout;
