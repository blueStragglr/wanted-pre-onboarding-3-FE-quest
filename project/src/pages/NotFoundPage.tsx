import { Header } from "../components/Header/Header";
import { NotFoundContents } from "../components/NotFoundPage/NotFoundContens";

export const NotFoundPage = () => {
  return (
    <main className="base-layout">
      <Header />
      <section className="h-full flex">
        <NotFoundContents />
      </section>
    </main>
  );
};
