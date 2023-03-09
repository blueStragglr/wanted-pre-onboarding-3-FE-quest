import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Main } from "../components/styles";

export const PageA = () => {
  return (
    <>
      <Header />
      <Main>
        <Nav />
        <div>This is PageA!</div>
      </Main>
    </>
  );
};
