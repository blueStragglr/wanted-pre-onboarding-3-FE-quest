import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-row h-[calc(100vh-65px)]">
        <Sidebar />
        <section className="flex flex-col justify-center mx-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
}
