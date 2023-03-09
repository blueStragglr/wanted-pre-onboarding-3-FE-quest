import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Main } from "../components/styles";

export const PageB = () => {
  return (
    <>
      <Header />
      <Main>
        <Nav />
        <div>This is PageB!</div>
      </Main>
    </>
  );
};
