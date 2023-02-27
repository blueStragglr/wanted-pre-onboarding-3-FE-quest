import { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header></header>
      <div>
        <aside></aside>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
