import { ReactNode } from "react";

export default function LayoutLogin({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {children}
    </div>
  );
}
