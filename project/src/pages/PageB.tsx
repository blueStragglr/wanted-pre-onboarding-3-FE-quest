import { Bcontents } from "../components/PageB/Bcontents";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const PageB = () => {
  return (
    <main className="base-layout">
      <Header />
      <section className="h-full flex">
        <Sidebar />
        <Bcontents />
      </section>
    </main>
  );
};
