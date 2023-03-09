import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Main } from "../components/styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Nav />
        <div>Hi This is Home!</div>
      </Main>
    </>
  );
};
