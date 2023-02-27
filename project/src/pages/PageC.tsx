import { Ccontents } from "../components/PageC/Ccontents";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const PageC = () => {
  return (
    <main className="base-layout">
      <Header />
      <section className="h-full flex">
        <Sidebar />
        <Ccontents />
      </section>
    </main>
  );
};
