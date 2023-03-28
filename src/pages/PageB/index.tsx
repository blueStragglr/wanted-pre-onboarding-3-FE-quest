import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export const PageB = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-row space-x-2 > *">
        <Sidebar />
        <section className="basis-5/6">
          <h1 className="text-sky-500 m-3 font-semibold">Page B</h1>
        </section>
      </main>
    </div>
  );
};
