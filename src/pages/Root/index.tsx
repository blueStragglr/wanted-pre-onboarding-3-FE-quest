import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';

export const Root = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-row space-x-2 > *">
        <Sidebar />
        <div />
      </main>
    </div>
  );
};
