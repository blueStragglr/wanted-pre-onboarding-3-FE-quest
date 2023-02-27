import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HomeContents } from "../components/HomePage/HomeContents";

export const Home = () => {
  return (
    <main className="base-layout">
      <Header />
      <section className="h-full flex">
        <Sidebar />
        <HomeContents />
      </section>
    </main>
  );
};
