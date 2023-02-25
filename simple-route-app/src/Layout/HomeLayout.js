import Sidebar from "./Sidebar";
import Headers from "./Header";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Headers />
      <section>
        <article>
          <Sidebar />
        </article>
        <article>{children}</article>
      </section>
    </div>
  );
};

export default HomeLayout;
