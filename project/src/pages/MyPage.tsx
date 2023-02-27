import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { MyPageContents } from "../components/MyPage/MyPageContents";

export const MyPage = () => {
  return (
    <main className="base-layout">
      <Header />
      <section className="h-full flex">
        <Sidebar />
        <MyPageContents />
      </section>
    </main>
  );
};
