import { Acontents } from "../components/PageA/Acontents";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const PageA = () => {
  return (
    <main className="base-layout">
      <Header />
      <section className="h-full flex">
        <Sidebar />
        <Acontents />
      </section>
    </main>
  );
};
